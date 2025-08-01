const { contextBridge, ipcRenderer } = require('electron');

// contextBridge هو جسر آمن يسمح للكود الموجود في الواجهة الرسومية (Renderer Process)
// بالتواصل مع الكود الموجود في العملية الرئيسية (Main Process) دون تعريض وظائف Node.js بالكامل.
contextBridge.exposeInMainWorld('api', {
    // --- عمليات الملفات والبيانات الأساسية ---
    loadData: () => ipcRenderer.invoke('load-data'),
    saveData: (data) => ipcRenderer.invoke('save-data', data),

    // --- عمليات المصادقة وإدارة المستخدمين ---
    login: (credentials) => ipcRenderer.send('login', credentials),
    logout: () => ipcRenderer.send('logout'),
    // --- تعديل: تم تحديث دوال الموظفين ---
    addEmployee: (employeeData) => ipcRenderer.invoke('add-employee', employeeData),
    deleteEmployee: (data) => ipcRenderer.invoke('delete-employee', data),
    modifyEmployee: (data) => ipcRenderer.invoke('modify-employee', data),
    changeAdminPassword: (data) => ipcRenderer.invoke('change-admin-password', data),
    validateAdminPassword: (password) => ipcRenderer.invoke('validate-admin-password', password),

    // --- دوال مساعدة للنوافذ وواجهة المستخدم ---
    openUsersWindow: () => ipcRenderer.send('open-users-window'),
    getUserData: () => ipcRenderer.invoke('get-user-data'),

    // --- تحميل قوالب الطباعة ---
    loadReceiptTemplate: () => ipcRenderer.invoke('load-receipt-template'),
    loadBookingTemplate: () => ipcRenderer.invoke('load-booking-template'),

    // --- إدارة وقت تقرير الوردية ---
    getLastShiftTime: () => ipcRenderer.invoke('get-last-shift-time'),
    setLastShiftTime: (timestamp) => ipcRenderer.invoke('set-last-shift-time', timestamp),

    // NEW: Export Returns to PDF handler
    exportReturnsToPDF: (data) => ipcRenderer.invoke('export-returns-to-pdf', data),

    // --- مستمعو الأحداث (Event Listeners) ---
    // هذه الدوال تسمح للواجهة الرسومية بالاستماع للأحداث القادمة من العملية الرئيسية
    onLoginFailed: (callback) => ipcRenderer.on('login-failed', callback),
    onSetUser: (callback) => ipcRenderer.on('set-user', (event, user) => callback(user)),
});
