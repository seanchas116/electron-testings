var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({width: 800, height: 600});
  console.log("download path", mainWindow.webContents.session.getDownloadPath());
  mainWindow.loadUrl("https://github.com");
});
