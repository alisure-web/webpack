/**
 * Created by ALISURE on 2017/6/8.
 */

var config = require("./greeter.json");

/* 模块 */
module.exports = function () {
    var greet = document.createElement("div");
    greet.textContent = config.greetText;
    return greet;
};