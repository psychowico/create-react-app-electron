import { app, BrowserWindow, ipcMain, dialog, Event } from 'electron';

// keep a global reference of the window object to prevent garbage collecting it
let mainWindow: BrowserWindow | null = null;

function createMainWindow() {
  // Create the browser window.
  return new BrowserWindow({
    width: 800,
    height: 600,
    // if we want use ipcRenderer and general communication, we need to
    // intergrate window with node
    webPreferences: { nodeIntegration: true }
  });
}

function bootstrapAppWindow() {
  mainWindow = createMainWindow();
  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', bootstrapAppWindow);

app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    bootstrapAppWindow();
  }
});

ipcMain.on(
  'test',
  (ev: Event, arg: string) =>
    mainWindow && dialog.showMessageBox(mainWindow, { message: arg })
);
