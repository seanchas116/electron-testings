const {app, BrowserWindow} = require("electron")

app.on('ready', () => {
  const mainWindow = new BrowserWindow({width: 600, height: 400})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.openDevTools()
  setInterval(() => {
    mainWindow.webContents.send("msg")
  }, 1000)
})
