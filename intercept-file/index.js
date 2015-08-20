var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var protocol = require("protocol");

  function intercept(request) {
    // never called
    console.log(request);
    return new protocol.RequestStringJob({data: "test"});
  }
  console.log("intercepting");
  protocol.interceptProtocol("http", intercept, function (err) {
    console.log(err); // "The Scheme does not exist." error
    var mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadUrl("http://localhost");
  });
});
