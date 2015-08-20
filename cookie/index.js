var app = require('app');
var BrowserWindow = require('browser-window');

var app = require('app');
var BrowserWindow = require('browser-window');

function showTwitteer() {
  var mainWindow = new BrowserWindow({width: 800, height: 600, "node-integration": false});
  mainWindow.loadUrl("https://m.wantedly.com");
}

// app.on('ready', function() {
//   var protocol = require("protocol");
//
//   function intercept(request) {
//     // never called
//     console.log(request);
//     return new protocol.RequestStringJob({data: "test"});
//   }
//   console.log("intercepting");
//   protocol.interceptProtocol("file", intercept, showTwitteer);
// });

app.on("ready", showTwitteer);
