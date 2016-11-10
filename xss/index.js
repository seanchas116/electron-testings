var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({width: 600, height: 400, webPreferences:{nodeIntegration:false}});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
});
