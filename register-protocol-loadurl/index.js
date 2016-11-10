var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow;

app.on('ready', function() {
  var protocol = require("protocol");

  function testProtocol(request, callback) {
    console.log(request);
    mainWindow.loadURL("https://github.com");
    callback("test");
  }
  protocol.registerStringProtocol("foobar", testProtocol, function (err) {
    console.log(err);
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL("foobar://")
  });
});
