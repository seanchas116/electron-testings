var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl("https://github.com");
  mainWindow.openDevTools();
});
