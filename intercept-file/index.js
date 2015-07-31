var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var protocol = require("protocol");

  var anotherWindow = new BrowserWindow({width: 800, height: 600});
  //anotherWindow.loadUrl("file://" + __dirname + "/index.html");
  //anotherWindow.openDevTools();

  process.nextTick(function () {
    function intercept(request) {
      console.log(request);
      return new protocol.RequestStringJob({data: "test"});
    }
    protocol.interceptProtocol("file", intercept, function (err) {
      console.log(err);
      var mainWindow = new BrowserWindow({width: 800, height: 600});
      mainWindow.loadUrl("file://" + __dirname + "/index.html");
      mainWindow.openDevTools();
    });
  });
});
