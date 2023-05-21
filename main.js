const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const youtubeTVUrl = 'https://youtube.com/tv'
    const customUserAgent = 'Mozilla/5.0 (Linux; Tizen 2.3) AppleWebKit/538.1 (KHTML, like Gecko)Version/2.3 TV Safari/538.1'

    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false,
        fullscreen: true
    })

    mainWindow.loadURL(youtubeTVUrl,
        { userAgent: customUserAgent }
    )
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
