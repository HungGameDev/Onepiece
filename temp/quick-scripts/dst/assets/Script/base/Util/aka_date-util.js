
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/Util/aka_date-util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b746eHco41Iq4DztaweVrSY', 'aka_date-util');
// Script/base/Util/aka_date-util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDDMMYYHHmmSS = exports.formatDDMMHHmmSS = void 0;
function addZero(formatNumber, maxLength, textPadding) {
    return formatNumber.toString().padStart(maxLength, textPadding);
}
/**
 *
 * @param timestamp
 * @returns 30/10 23:39:24
 */
function formatDDMMHHmmSS(timestamp) {
    var d = new Date(timestamp);
    var h = addZero(d.getHours(), 2, '0');
    var m = addZero(d.getMinutes(), 2, '0');
    var s = addZero(d.getSeconds(), 2, '0');
    var t = addZero(d.getDate(), 2, '0') + '/' + addZero(d.getMonth() + 1, 2, '0') + ' ' + h + ':' + m + ':' + s;
    return t;
}
exports.formatDDMMHHmmSS = formatDDMMHHmmSS;
/**
 *
 * @param timestamp
 * @returns 30/10/2023\n23:39:24
 */
function formatDDMMYYHHmmSS(timestamp) {
    var d = new Date(timestamp);
    var h = addZero(d.getHours(), 2, '0');
    var m = addZero(d.getMinutes(), 2, '0');
    var s = addZero(d.getSeconds(), 2, '0');
    var t = addZero(d.getDate(), 2, '0') + '/' + addZero(d.getMonth() + 1, 2, '0') + '/' + d.getFullYear() + '\n' + h + ':' + m + ':' + s;
    return t;
}
exports.formatDDMMYYHHmmSS = formatDDMMYYHHmmSS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9VdGlsL2FrYV9kYXRlLXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxPQUFPLENBQUMsWUFBb0IsRUFBRSxTQUFpQixFQUFFLFdBQW1CO0lBQ3pFLE9BQU8sWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDcEUsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixnQkFBZ0IsQ0FBQyxTQUFpQjtJQUM5QyxJQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxQyxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxQyxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQy9HLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQVBELDRDQU9DO0FBR0Q7Ozs7R0FJRztBQUNILFNBQWdCLGtCQUFrQixDQUFDLFNBQWlCO0lBQ2hELElBQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUMsR0FBRyxHQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0SSxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFQRCxnREFPQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFkZFplcm8oZm9ybWF0TnVtYmVyOiBudW1iZXIsIG1heExlbmd0aDogbnVtYmVyLCB0ZXh0UGFkZGluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0TnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQobWF4TGVuZ3RoLCB0ZXh0UGFkZGluZyk7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gdGltZXN0YW1wIFxuICogQHJldHVybnMgMzAvMTAgMjM6Mzk6MjRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERETU1ISG1tU1ModGltZXN0YW1wOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuICAgIGNvbnN0IGggPSBhZGRaZXJvKGQuZ2V0SG91cnMoKSwgMiwgJzAnKTtcbiAgICBjb25zdCBtID0gYWRkWmVybyhkLmdldE1pbnV0ZXMoKSwgMiwgJzAnKTtcbiAgICBjb25zdCBzID0gYWRkWmVybyhkLmdldFNlY29uZHMoKSwgMiwgJzAnKTtcbiAgICBjb25zdCB0ID0gYWRkWmVybyhkLmdldERhdGUoKSwgMiwgJzAnKSArICcvJyArIGFkZFplcm8oZC5nZXRNb250aCgpICsgMSwgMiwgJzAnKSArICcgJyArIGggKyAnOicgKyBtICsgJzonICsgcztcbiAgICByZXR1cm4gdDtcbn1cblxuXG4vKipcbiAqIFxuICogQHBhcmFtIHRpbWVzdGFtcCBcbiAqIEByZXR1cm5zIDMwLzEwLzIwMjNcXG4yMzozOToyNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RERNTVlZSEhtbVNTKHRpbWVzdGFtcDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUodGltZXN0YW1wKTtcbiAgICBjb25zdCBoID0gYWRkWmVybyhkLmdldEhvdXJzKCksIDIsICcwJyk7XG4gICAgY29uc3QgbSA9IGFkZFplcm8oZC5nZXRNaW51dGVzKCksIDIsICcwJyk7XG4gICAgY29uc3QgcyA9IGFkZFplcm8oZC5nZXRTZWNvbmRzKCksIDIsICcwJyk7XG4gICAgY29uc3QgdCA9IGFkZFplcm8oZC5nZXREYXRlKCksIDIsICcwJykgKyAnLycgKyBhZGRaZXJvKGQuZ2V0TW9udGgoKSArIDEsIDIsICcwJykrJy8nKyBkLmdldEZ1bGxZZWFyKCkgICsgJ1xcbicgKyBoICsgJzonICsgbSArICc6JyArIHM7XG4gICAgcmV0dXJuIHQ7XG59Il19