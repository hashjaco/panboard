import { app, BrowserWindow } from 'electron'

/**
 * @description Creates a desktop application window
 */
const createWindow = (url='http://localhost:3000', width=800, height=600, nodeIntegration=true) => {

    const windowSpecs = {
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: nodeIntegration
        }
    }

    // Create the browser window
    const window = new BrowserWindow(windowSpecs)

    // Load the index.html from a url
    window.loadURL('http://localhost:3000')

    // Open DevTools
    window.webContents.openDevTools()

}

// This method will be called when Electron has finished initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common for application and thier menu bar to stay active until the user quits explicitly with Cmd+Q.
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS, it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
    windows = BrowserWindow.getAllWindows()
    if(windows.length === 0) {
        createWindow()
    }
})