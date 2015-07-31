
var remote = require("remote");
var sleep = remote.require("./sleep");

var promise = sleep(1000);
console.log(promise); //=> "[object Promise]"
promise.then(function () { // promise.then is not a function
  console.log("slept 1s");
});
