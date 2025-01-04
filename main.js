// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // Allows use of require in renderer.js
        },
    });

    // Load the index page initially
    win.loadFile(path.join(__dirname, 'index.html'));

    // Open the DevTools (optional, for debugging)
    win.webContents.openDevTools();
}

// Handle navigation between pages
ipcMain.on('navigate', (event, page) => {
    const validPages = ['index', 'login', 'registration', 'event_upload', 'faculty_signup'];
    if (validPages.includes(page)) {
        win.loadFile(path.join(__dirname, `${page}.html`));
    } else {
        console.error(`Invalid navigation request to page: ${page}`);
    }
});

// Create the window when Electron is ready
app.whenReady().then(createWindow);

// Quit the app when all windows are closed, except on macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Recreate the window if the app is reactivated on macOS
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
