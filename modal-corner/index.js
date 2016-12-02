const {app, BrowserWindow} = require("electron")

app.on('ready', () => {
  const mainWindow = new BrowserWindow({width: 200, height: 200})
  mainWindow.loadURL('file://' + __dirname + '/index.html')

  const modalWindow = new BrowserWindow({width: 100, height: 100, parent: mainWindow, modal: true, show: false})
  modalWindow.loadURL('file://' + __dirname + '/modal.html')

  // rounded corner appears
  setTimeout(() => {
    modalWindow.show()
  }, 1000)

  // rounded corner does not appear
  // modalWindow.show()
})
