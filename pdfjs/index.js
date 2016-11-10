var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl("file:///Users/seanchas116/Repos/pdf.js/web/viewer.html?file=https%3A%2F%2Fsync-qa.s3-ap-northeast-1.amazonaws.com%2F209%2F11585963%2F5422e528-86eb-465d-9860-160e46d0fdc3%3Fresponse-content-disposition%3Dinline%26response-content-type%3Dapplication%252Fpdf%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAIHCF5WQOJUR2ZVBA%252F20160115%252Fap-northeast-1%252Fs3%252Faws4_request%26X-Amz-Date%3D20160115T103217Z%26X-Amz-Expires%3D604800%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D0f1b68790574f31c3fffb0beff7f08a7d7638882298654d9a4cb23604c0a1dbf");
});
