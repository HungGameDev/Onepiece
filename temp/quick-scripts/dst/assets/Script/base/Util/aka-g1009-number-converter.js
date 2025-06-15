
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/Util/aka-g1009-number-converter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc7cavumttFY6oXCBSxunEG', 'aka-g1009-number-converter');
// Script/base/Util/aka-g1009-number-converter.ts

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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9VdGlsL2FrYS1nMTAwOS1udW1iZXItY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQWdHQSxDQUFDO0lBN0ZjLGtCQUFRLEdBQXRCO1FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ3RCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN0QyxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQW9CLFdBQW1CO1FBRXRDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sU0FBUyxDQUFDLENBQUMsNERBQTREO1NBQzlFO1FBRUQsSUFBSSxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQ3RCLE9BQU8sV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO2FBQU0sSUFBSSxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQzdCLElBQU0sTUFBTSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDakMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3JHO2FBQU0sSUFBSSxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQzdCLElBQU0sTUFBTSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDakMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxH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QUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVNLDBDQUFzQixHQUE3QixVQUE4QixTQUFpQjtRQUM5QyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFbkMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxHQUFHLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFDRixnQkFBQztBQUFELENBaEdBLEFBZ0dDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5VXRpbCB7XG5cdHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBHMTAwOVV0aWw7XG5cblx0cHVibGljIHN0YXRpYyBJbnN0YW5jZSgpIHtcblx0XHRpZiAoIUcxMDA5VXRpbC5pbnN0YW5jZSlcblx0XHRcdEcxMDA5VXRpbC5pbnN0YW5jZSA9IG5ldyBHMTAwOVV0aWwoKTtcblx0XHRyZXR1cm4gRzEwMDlVdGlsLmluc3RhbmNlO1xuXHR9XG5cblx0cHVibGljIE51bWJlckZvcm1hdChpbnB1dE51bWJlcjogbnVtYmVyKTogc3RyaW5nIHtcblxuXHRcdGlmIChpc05hTihpbnB1dE51bWJlcikpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7IC8vIG9yIGhhbmRsZSB0aGUgY2FzZSBkaWZmZXJlbnRseSBiYXNlZCBvbiB5b3VyIHJlcXVpcmVtZW50c1xuXHRcdH1cblx0XG5cdFx0aWYgKGlucHV0TnVtYmVyIDwgMWUzKSB7XG5cdFx0XHRyZXR1cm4gaW5wdXROdW1iZXIudG9TdHJpbmcoKTtcblx0XHR9IGVsc2UgaWYgKGlucHV0TnVtYmVyIDwgMWU2KSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBpbnB1dE51bWJlciAvIDFlMztcblx0XHRcdHJldHVybiByZXN1bHQgJSAxID09PSAwID8gcmVzdWx0LnRvRml4ZWQoMCkgKyAnSycgOiByZXN1bHQudG9GaXhlZChyZXN1bHQgJSAxID09PSAwLjUgPyAxIDogMykgKyAnSyc7XG5cdFx0fSBlbHNlIGlmIChpbnB1dE51bWJlciA8IDFlOSkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gaW5wdXROdW1iZXIgLyAxZTY7XG5cdFx0XHRyZXR1cm4gcmVzdWx0ICUgMSA9PT0gMCA/IHJlc3VsdC50b0ZpeGVkKDApICsgJ00nIDogcmVzdWx0LnRvRml4ZWQocmVzdWx0ICUgMSA9PT0gMC41ID8gMSA6IDMpICsgJ00nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBpbnB1dE51bWJlciAvIDFlOTtcblx0XHRcdHJldHVybiByZXN1bHQgJSAxID09PSAwID8gcmVzdWx0LnRvRml4ZWQoMCkgKyAnQicgOiByZXN1bHQudG9GaXhlZChyZXN1bHQgJSAxID09PSAwLjUgPyAxIDogMykgKyAnQic7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIE51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIobnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdGxldCB0ZW1wID0gbnVtYmVyLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpLnNwbGl0KFwiLlwiKTtcblx0XHRsZXQgcmUgPSAvXFwsL2dpO1xuXHRcdGxldCByZXN1bHQgPSB0ZW1wWzBdLnJlcGxhY2UocmUsIFwiLlwiKTtcblx0XHRpZiAodGVtcC5sZW5ndGggPiAxKVxuXHRcdHtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdCArIFwiLFwiICsgdGVtcFsxXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHB1YmxpYyBXYWl0VW50aWwoY29uZGl0aW9uOiAoKSA9PiBib29sZWFuLCB0aW1lb3V0PzogbnVtYmVyLCBpbnRlcnZhbD86IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuXHRcdGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IDA7IH0gLy8gaWYgbm90IHNldCwgd2FpdCBmb3JldmVyXG5cdFx0aWYgKGludGVydmFsID09PSB2b2lkIDApIHsgaW50ZXJ2YWwgPSA1MDsgfSAvLyBkZWZhdWx0IGludGVydmFsID0gNTBtc1xuXHRcdGxldCB3YWl0SGFuZGxlcjtcblx0XHRsZXQgdGltZW91dEhhbmRsZXI7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdGxldCB3YWl0Rm4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChjb25kaXRpb24oKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmICh0aW1lb3V0SGFuZGxlcilcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d2FpdEhhbmRsZXIgPSBzZXRUaW1lb3V0KHdhaXRGbiwgaW50ZXJ2YWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0Ly8gXG5cdFx0XHR3YWl0SGFuZGxlciA9IHNldFRpbWVvdXQod2FpdEZuLCBpbnRlcnZhbCk7XG5cblx0XHRcdC8vIHRpbWVvdXQsIGlmIHRpbWVvdXQgPD0wLCBuZXZlciB0aW1lb3V0XG5cdFx0XHRpZiAodGltZW91dCA+IDApXG5cdFx0XHR7XG5cdFx0XHRcdHRpbWVvdXRIYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHdhaXRIYW5kbGVyKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh3YWl0SGFuZGxlcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVqZWN0KHtcblx0XHRcdFx0XHRcdGNvZGU6IFwiVElNRU9VVFwiLFxuXHRcdFx0XHRcdFx0bWVzc2FnZTogXCJ0aW1lb3V0XCJcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgdGltZW91dCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgQ29udmVydFRpbWVTdGFtcFRvSG91cnModGltZXN0YW1wOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdGxldCB1ID0gbmV3IERhdGUodGltZXN0YW1wICogMTAwMCk7XG5cblx0XHRyZXR1cm4gKCcwJyArIHUuZ2V0VVRDSG91cnMoKSkuc2xpY2UoLTIpICtcblx0XHRcdCc6JyArICgnMCcgKyB1LmdldFVUQ01pbnV0ZXMoKSkuc2xpY2UoLTIpICtcblx0XHRcdCc6JyArICgnMCcgKyB1LmdldFVUQ1NlY29uZHMoKSkuc2xpY2UoLTIpXG5cdH1cblxuXHRwdWJsaWMgQ29udmVydFRpbWVTdGFtcFRvRGF0ZSh0aW1lc3RhbXA6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0bGV0IHUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKiAxMDAwKTtcblxuXHRcdHJldHVybiAoJzAnICsgdS5nZXRVVENEYXRlKCkpLnNsaWNlKC0yKSArXG5cdFx0XHQnLScgKyAoJzAnICsgdS5nZXRVVENNb250aCgpKS5zbGljZSgtMikgK1xuXHRcdFx0Jy0nICsgdS5nZXRVVENGdWxsWWVhcigpXG5cdH1cbn1cbiJdfQ==