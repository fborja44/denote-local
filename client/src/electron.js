/* Electron configuration file (boilerplate from Electron documentation)
------------------------------------------------------------------------------*/
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require("electron-is-dev");

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    minWidth: 700,
    minHeight: 400,
    webPreferences: {
        //   preload: path.join(__dirname, 'preload.js')
        nodeIntegration: true
    }
  })

  // load the application depending on dev status
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
