const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    // Local file operations
    loadData: () => ipcRenderer.invoke('load-data'),
    saveData: (data) => ipcRenderer.invoke('save-data', data),

    // Auth and User Management (delegated to main for file access)
    login: (credentials) => ipcRenderer.send('login', credentials),
    logout: () => ipcRenderer.send('logout'),
    addUser: (credentials) => ipcRenderer.invoke('add-user', credentials),
    deleteUser: (data) => ipcRenderer.invoke('delete-user', data),
    modifyUser: (data) => ipcRenderer.invoke('modify-user', data),
    changeAdminPassword: (data) => ipcRenderer.invoke('change-admin-password', data),
    validateAdminPassword: (password) => ipcRenderer.invoke('validate-admin-password', password),

    // Window and UI helpers
    openUsersWindow: () => ipcRenderer.send('open-users-window'),
    getUserData: () => ipcRenderer.invoke('get-user-data'),
    loadReceiptTemplate: () => ipcRenderer.invoke('load-receipt-template'),

    // Shift report timestamp management
    getLastShiftTime: () => ipcRenderer.invoke('get-last-shift-time'),
    setLastShiftTime: (timestamp) => ipcRenderer.invoke('set-last-shift-time', timestamp),

    // Event listeners
    onLoginFailed: (callback) => ipcRenderer.on('login-failed', callback),
    onSetUser: (callback) => ipcRenderer.on('set-user', (event, user) => callback(user)),

    // EDITED: Supabase credentials
    getSupabaseConfig: () => ({
        url: 'https://wiradoszrrifuorirqmm.supabase.co',
        key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpcmFkb3N6cnJpZnVvcmlycW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNDU2MzcsImV4cCI6MjA2NjcyMTYzN30.jQ7SoX5PWtMBeSdDsm48ZqqGdIzFOgqRxE63HmQ8ZF4'
    })
});
