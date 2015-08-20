
module.exports = function (ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`waited ${ms}ms!`);
    }, ms);
  });
};
