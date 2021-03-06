var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var protocol = require("protocol");

  function testProtocol(request, callback) {
    console.log(request); // request received
    callback("test");
  }
  protocol.registerStringProtocol("foobar", testProtocol, function (err) {
    console.log(err); // no error
    var mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadUrl("foobar://foo/bar"); // BrowserWindow shows nothing
  });
});
