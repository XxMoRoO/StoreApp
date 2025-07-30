const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(app.getPath('documents'), 'bags-database-online.json');
let mainWindow;
let loggedInUser = null;

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

function createMainWindow(user) {
    mainWindow = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false
        }
    });

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

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('set-user', { username: user.username });
        mainWindow.focus();
    });

    mainWindow.on('show', () => mainWindow.focus());

    mainWindow.on('leave-full-screen', () => {
        mainWindow.maximize();
    });

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

function createUsersWindow() {
    const usersWindow = new BrowserWindow({
        width: 500,
        height: 600,
        title: 'User Management',
        webPreferences: { preload: path.join(__dirname, 'preload.js') },
    });
    usersWindow.setMenu(null);
    usersWindow.loadFile('users.html');
    usersWindow.on('show', () => usersWindow.focus());
}

function getDatabase() {
    if (fs.existsSync(dbPath)) {
        const fileData = fs.readFileSync(dbPath, 'utf-8');
        try {
            return JSON.parse(fileData);
        } catch (e) {
            console.error("Local DB is corrupt, creating a new one.", e);
        }
    }

    const initialData = {
        config: {
            adminPassword: 'admin123',
            lastShiftReportTime: null
        },
        products: [],
        sales: [],
        users: [{ username: "omar", password: "omar123" }],
        categories: [],
        customers: [],
        syncQueue: {
            products: { upsert: [], delete: [] },
            sales: { upsert: [], delete: [] },
            customers: { upsert: [], delete: [] },
            categories: { upsert: [], delete: [] },
        }
    };
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2), 'utf-8');
    return initialData;
}

ipcMain.on('login', (event, credentials) => {
    const { username, password } = credentials;
    const db = getDatabase();
    const user = db.users.find(u => u.username === username && u.password === password);
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
    try {
        const db = getDatabase();
        db.products = data.products ?? db.products;
        db.sales = data.sales ?? db.sales;
        db.categories = data.categories ?? db.categories;
        db.customers = data.customers ?? db.customers;
        db.syncQueue = data.syncQueue ?? db.syncQueue;

        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
        return { success: true };
    } catch (error) { return { success: false, error: error.message }; }
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
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    return { success: true };
});

ipcMain.handle('add-user', (event, credentials) => {
    const db = getDatabase();
    if (credentials.adminPassword !== db.config.adminPassword) {
        return { success: false, message: 'Incorrect Admin Password.' };
    }
    if (db.users.some(u => u.username === credentials.username)) {
        return { success: false, message: 'Username already exists.' };
    }
    db.users.push({ username: credentials.username, password: credentials.password });
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    return { success: true };
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
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    return { success: true };
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

    if (db.users.length === initialUserCount) return { success: false, message: 'User not found.' };

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    return { success: true };
});

ipcMain.handle('get-last-shift-time', () => {
    const db = getDatabase();
    return db.config.lastShiftReportTime;
});

ipcMain.handle('set-last-shift-time', (event, timestamp) => {
    const db = getDatabase();
    db.config.lastShiftReportTime = timestamp;
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    return { success: true };
});

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