var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl("http://localhost");
  
  var dialog = require("dialog");
  dialog.showMessageBox({
    message: "Message",
    detail: "Detail",
    buttons: ["OK", "Cancel"]
  });
});
