"use strict";
cc._RF.push(module, 'fc7cavumttFY6oXCBSxunEG', 'Slot45-number-converter');
// Script/base/Util/Slot45-number-converter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var G1009Util = /** @class */ (function () {
    function G1009Util() {
    }
    G1009Util.Instance = function () {
        if (!G1009Util.instance)
            G1009Util.instance = new G1009Util();
        return G1009Util.instance;
    };
    G1009Util.prototype.NumberFormat = function (inputNumber) {
        if (isNaN(inputNumber)) {
            return undefined; // or handle the case differently based on your requirements
        }
        if (inputNumber < 1e3) {
            return inputNumber.toString();
        }
        else if (inputNumber < 1e6) {
            var result = inputNumber / 1e3;
            return result % 1 === 0 ? result.toFixed(0) + 'K' : result.toFixed(result % 1 === 0.5 ? 1 : 3) + 'K';
        }
        else if (inputNumber < 1e9) {
            var result = inputNumber / 1e6;
            return result % 1 === 0 ? result.toFixed(0) + 'M' : result.toFixed(result % 1 === 0.5 ? 1 : 3) + 'M';
        }
        else {
            var result = inputNumber / 1e9;
            return result % 1 === 0 ? result.toFixed(0) + 'B' : result.toFixed(result % 1 === 0.5 ? 1 : 3) + 'B';
        }
    };
    G1009Util.prototype.NumberFormatWithoutCharacter = function (number) {
        var temp = number.toLocaleString('en-US').split(".");
        var re = /\,/gi;
        var result = temp[0].replace(re, ".");
        if (temp.length > 1) {
            result = result + "," + temp[1];
        }
        return result;
    };
    G1009Util.prototype.WaitUntil = function (condition, timeout, interval) {
        if (timeout === void 0) {
            timeout = 0;
        } // if not set, wait forever
        if (interval === void 0) {
            interval = 50;
        } // default interval = 50ms
        var waitHandler;
        var timeoutHandler;
        return new Promise(function (resolve, reject) {
            var waitFn = function () {
                if (condition()) {
                    if (timeoutHandler) {
                        clearTimeout(timeoutHandler);
                    }
                    resolve();
                }
                else {
                    waitHandler = setTimeout(waitFn, interval);
                }
            };
            // 
            waitHandler = setTimeout(waitFn, interval);
            // timeout, if timeout <=0, never timeout
            if (timeout > 0) {
                timeoutHandler = setTimeout(function () {
                    if (waitHandler) {
                        clearTimeout(waitHandler);
                    }
                    reject({
                        code: "TIMEOUT",
                        message: "timeout"
                    });
                }, timeout);
            }
        });
    };
    G1009Util.prototype.ConvertTimeStampToHours = function (timestamp) {
        var u = new Date(timestamp * 1000);
        return ('0' + u.getUTCHours()).slice(-2) +
            ':' + ('0' + u.getUTCMinutes()).slice(-2) +
            ':' + ('0' + u.getUTCSeconds()).slice(-2);
    };
    G1009Util.prototype.ConvertTimeStampToDate = function (timestamp) {
        var u = new Date(timestamp * 1000);
        return ('0' + u.getUTCDate()).slice(-2) +
            '-' + ('0' + u.getUTCMonth()).slice(-2) +
            '-' + u.getUTCFullYear();
    };
    return G1009Util;
}());
exports.default = G1009Util;

cc._RF.pop();