
var remote = require("remote");
var sleep = remote.require("./sleep");

var promise = sleep(1000);
promise
  .then(function (str) { return str.toUpperCase(); })
  .then(function (str) { // promise.then is not a function
    console.log(str);
  });
