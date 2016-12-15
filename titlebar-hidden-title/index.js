const {app, BrowserWindow} = require('electron');

app.on('ready', function() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Test Title",
    titleBarStyle: "hidden",
  });
  mainWindow.loadURL("file://" + __dirname + "/index.html");
  mainWindow.openDevTools();
});
