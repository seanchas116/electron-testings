const {app, BrowserWindow, Menu} = require("electron")

app.on('ready', () => {
  const mainWindow = new BrowserWindow({width: 600, height: 400})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.openDevTools()
  mainWindow.webContents.on('dom-ready', () => {
    console.log("ready to show")
    const menu = Menu.buildFromTemplate([
      {label: '1'}, {label: '2'}, {label: '3'}
    ])
    menu.popup(mainWindow, {x: 100, y: 100, async: true})
    setTimeout(() => {
      console.log("timed out")
    }, 100)
  })
})
