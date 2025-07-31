const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

// تحديد مسار قاعدة البيانات والملف المؤقت لضمان الحفظ الآمن
const dbPath = path.join(app.getPath('documents'), 'bags-database-online.json');
const tempDbPath = path.join(app.getPath('documents'), 'bags-database-online.json.tmp');

let mainWindow;
let loggedInUser = null;

// --- إدارة نوافذ التطبيق ---

// إنشاء نافذة تسجيل الدخول عند بدء التشغيل
function createLoginWindow() {
    const loginWindow = new BrowserWindow({
        width: 400,
        height: 650,
        webPreferences: { preload: path.join(__dirname, 'preload.js') },
        resizable: false,
    });
    loginWindow.loadFile('login.html');
    loginWindow.on('show', () => loginWindow.focus());
    return loginWindow;
}

// إنشاء النافذة الرئيسية بعد تسجيل الدخول بنجاح
function createMainWindow(user) {
    mainWindow = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false // ضروري أحيانًا لعرض الصور المحلية
        }
    });

    // إنشاء قائمة بسيطة للتطبيق
    const menuTemplate = [
        {
            label: 'File',
            submenu: [
                { role: 'togglefullscreen' },
                { role: 'reload' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        }
    ];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    mainWindow.loadFile('index.html');

    // إرسال بيانات المستخدم الحالي إلى النافذة الرئيسية عند تحميلها
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('set-user', { username: user.username });
        mainWindow.focus();
    });

    mainWindow.on('show', () => mainWindow.focus());

    // التأكد من أن النافذة تظل مكبرة عند الخروج من وضع ملء الشاشة
    mainWindow.on('leave-full-screen', () => {
        mainWindow.maximize();
    });

    // اختصارات لوحة المفاتيح (F11 لملء الشاشة, F5 للتحديث, Ctrl+Shift+I لأدوات المطور)
    mainWindow.webContents.on('before-input-event', (event, input) => {
        if (input.key.toLowerCase() === 'i' && input.control && input.shift) {
            mainWindow.webContents.toggleDevTools();
            event.preventDefault();
        }
        if (input.key === 'F5') {
            mainWindow.webContents.reload();
            event.preventDefault();
        }
        if (input.key === 'F11') {
            const isFullScreen = mainWindow.isFullScreen();
            mainWindow.setFullScreen(!isFullScreen);
            event.preventDefault();
        }
    });
}

// إنشاء نافذة إدارة المستخدمين عند الطلب
function createUsersWindow() {
    const usersWindow = new BrowserWindow({
        width: 500,
        height: 600,
        title: 'User Management',
        webPreferences: { preload: path.join(__dirname, 'preload.js') },
    });
    usersWindow.setMenu(null); // إزالة القائمة من هذه النافذة
    usersWindow.loadFile('users.html');
    usersWindow.on('show', () => usersWindow.focus());
}

// --- إدارة قاعدة البيانات (القراءة والكتابة) ---

// دالة لقراءة قاعدة البيانات مع التعامل مع الأخطاء والملفات المؤقتة
function getDatabase() {
    if (fs.existsSync(tempDbPath)) {
        try {
            fs.renameSync(tempDbPath, dbPath);
            console.log("Restored database from temp file.");
        } catch (e) {
            console.error("Could not restore temp database file.", e);
        }
    }

    if (fs.existsSync(dbPath)) {
        const fileData = fs.readFileSync(dbPath, 'utf-8');
        try {
            const db = JSON.parse(fileData);
            // Ensure salaries structure includes bonus if it's an old database
            if (!db.salaries) {
                db.salaries = {};
            }
            // Initialize bonus for existing users if not present
            db.users.forEach(user => {
                if (!db.salaries[user.username]) {
                    db.salaries[user.username] = { fixed: 0, commission: 0, bonus: 0 }; // Initialize bonus
                } else if (db.salaries[user.username].bonus === undefined) {
                    db.salaries[user.username].bonus = 0; // Add bonus if missing
                }
            });
            return db;
        } catch (e) {
            console.error("Local DB is corrupt, creating a new one.", e);
            fs.renameSync(dbPath, `${dbPath}.corrupt.${Date.now()}`);
        }
    }

    // إنشاء قاعدة بيانات أولية إذا لم تكن موجودة أو كانت تالفة
    const initialData = {
        config: { adminPassword: 'admin123', lastShiftReportTime: null },
        products: [],
        sales: [],
        users: [{ username: "omar", password: "omar123" }],
        categories: [],
        customers: [],
        bookings: [],
        salaries: {
            "omar": { fixed: 0, commission: 0, bonus: 0 } // Initialize bonus for default user
        }
    };
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2), 'utf-8');
    return initialData;
}

// دالة لحفظ البيانات بطريقة آمنة لمنع تلف الملفات
function safeWrite(data) {
    try {
        const stringifiedData = JSON.stringify(data, null, 2);
        fs.writeFileSync(tempDbPath, stringifiedData, 'utf-8');
        fs.renameSync(tempDbPath, dbPath);
        return { success: true };
    } catch (error) {
        console.error("Failed to safely write database:", error);
        return { success: false, error: error.message };
    }
}

// --- معالجات الأحداث (IPC Handlers) ---

ipcMain.on('login', (event, credentials) => {
    const { username, password } = credentials;
    const db = getDatabase();
    // Make username comparison case-insensitive
    const user = db.users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
    if (user) {
        loggedInUser = user;
        createMainWindow(user);
        BrowserWindow.fromWebContents(event.sender).close();
    } else {
        event.sender.send('login-failed', 'Incorrect username or password.');
    }
});

ipcMain.on('logout', () => {
    if (mainWindow) {
        mainWindow.close();
    }
    createLoginWindow();
});

ipcMain.handle('validate-admin-password', (event, password) => {
    const db = getDatabase();
    return { success: password === (db.config?.adminPassword || 'admin123') };
});

ipcMain.handle('load-data', () => {
    try {
        return getDatabase();
    } catch (error) { return { error: error.message }; }
});

ipcMain.handle('save-data', (event, data) => {
    const db = getDatabase();
    // تحديث البيانات المستلمة فقط لضمان عدم فقدان أي بيانات أخرى
    db.products = data.products ?? db.products;
    db.sales = data.sales ?? db.sales;
    db.categories = data.categories ?? db.categories;
    db.customers = data.customers ?? db.customers;
    db.bookings = data.bookings ?? db.bookings;
    db.salaries = data.salaries ?? db.salaries; // NEW: Save salaries

    return safeWrite(db);
});

ipcMain.handle('load-receipt-template', async () => {
    try {
        const appPath = app.getAppPath();
        const templatePath = path.join(appPath, 'receipt.html');
        const logoPath = path.join(appPath, 'build', 'logo.png');
        if (!fs.existsSync(templatePath)) throw new Error(`Receipt template not found at ${templatePath}`);
        if (!fs.existsSync(logoPath)) throw new Error(`Logo image not found at ${logoPath}`);

        const template = fs.readFileSync(templatePath, 'utf-8');
        const logoBuffer = fs.readFileSync(logoPath);
        const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;
        return { template, logoBase64 };
    } catch (error) { return { error: error.message }; }
});

// NEW: Handler for loading the booking receipt template
ipcMain.handle('load-booking-template', async () => {
    try {
        const appPath = app.getAppPath();
        const templatePath = path.join(appPath, 'booking-receipt.html'); // Use the new template
        const logoPath = path.join(appPath, 'build', 'logo.png');
        if (!fs.existsSync(templatePath)) throw new Error(`Booking template not found at ${templatePath}`);
        if (!fs.existsSync(logoPath)) throw new Error(`Logo not found at ${logoPath}`);

        const template = fs.readFileSync(templatePath, 'utf-8');
        const logoBuffer = fs.readFileSync(logoPath);
        const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;
        return { template, logoBase64 };
    } catch (error) {
        return { error: error.message };
    }
});

// NEW: IPC handler for exporting returns to PDF
ipcMain.handle('export-returns-to-pdf', async (event, returnsData) => {
    try {
        // This is a placeholder. In a real Electron app, you'd generate the PDF here
        // using a library like 'pdfkit' or by rendering HTML to PDF.
        // For now, we'll just return success.
        console.log("Generating Returns PDF with data:", returnsData);
        // Example: You might save to a temp file and then let renderer open it
        // fs.writeFileSync(path.join(app.getPath('temp'), 'returns_report.pdf'), 'PDF Content', 'utf-8');
        return { success: true, message: "Returns PDF generated successfully (placeholder)." };
    } catch (error) {
        console.error("Error generating returns PDF:", error);
        return { success: false, error: error.message };
    }
});


ipcMain.on('open-users-window', () => {
    createUsersWindow();
});

ipcMain.handle('get-user-data', () => {
    const db = getDatabase();
    return { allUsers: db.users || [], currentUser: loggedInUser };
});

ipcMain.handle('change-admin-password', (event, data) => {
    const { oldPassword, newPassword } = data;
    const db = getDatabase();
    if (oldPassword !== db.config.adminPassword) {
        return { success: false, message: 'Incorrect old admin password.' };
    }
    db.config.adminPassword = newPassword;
    return safeWrite(db);
});

ipcMain.handle('add-user', (event, credentials) => {
    const db = getDatabase();
    if (credentials.adminPassword !== db.config.adminPassword) {
        return { success: false, message: 'Incorrect Admin Password.' };
    }
    // Check for username existence case-insensitively
    if (db.users.some(u => u.username.toLowerCase() === credentials.username.toLowerCase())) {
        return { success: false, message: 'Username already exists.' };
    }
    // Allow adding user without a password if isNoLoginUser is true
    const password = credentials.password || (credentials.isNoLoginUser ? '' : 'default_password_if_empty'); // Default password if not provided and not no-login user
    db.users.push({ username: credentials.username, password: password });
    // Initialize salary entry for the new user
    if (!db.salaries[credentials.username]) {
        db.salaries[credentials.username] = { fixed: 0, commission: 0, bonus: 0 };
    }
    return safeWrite(db);
});

ipcMain.handle('modify-user', (event, data) => {
    const { usernameToModify, newPassword, adminPassword } = data;
    const db = getDatabase();
    if (adminPassword !== db.config.adminPassword) {
        return { success: false, message: 'Incorrect admin password.' };
    }
    const userIndex = db.users.findIndex(u => u.username === usernameToModify);
    if (userIndex === -1) return { success: false, message: 'User not found.' };
    db.users[userIndex].password = newPassword;
    return safeWrite(db);
});

ipcMain.handle('delete-user', (event, data) => {
    const { usernameToDelete, adminPassword } = data;
    const db = getDatabase();
    if (adminPassword !== db.config.adminPassword) {
        return { success: false, message: 'Incorrect admin password.' };
    }
    if (db.users.length <= 1) return { success: false, message: 'Cannot delete the last user.' };

    const initialUserCount = db.users.length;
    db.users = db.users.filter(u => u.username !== usernameToDelete);
    // Also remove salary entry for the deleted user
    delete db.salaries[usernameToDelete];

    if (db.users.length === initialUserCount) return { success: false, message: 'User not found.' };

    return safeWrite(db);
});

ipcMain.handle('get-last-shift-time', () => {
    const db = getDatabase();
    return db.config.lastShiftReportTime;
});

ipcMain.handle('set-last-shift-time', (event, timestamp) => {
    const db = getDatabase();
    db.config.lastShiftReportTime = timestamp;
    return safeWrite(db);
});

// --- دورة حياة التطبيق ---

app.whenReady().then(createLoginWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createLoginWindow();
    } else if (mainWindow) {
        mainWindow.focus();
    }
});
