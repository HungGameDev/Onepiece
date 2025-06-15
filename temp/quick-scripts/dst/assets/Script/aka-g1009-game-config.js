
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/aka-g1009-game-config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9454FFs05Ig74YAOL7WsGp', 'aka-g1009-game-config');
// Script/aka-g1009-game-config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlottyParameter = exports.JACKPOT_ITEM_SYMBOL = exports.NEAR_WIN_SYMBOL_NORMAL_ANIMATION = exports.NEAR_WIN_SYMBOL = exports.rowCount = exports.reelCount = void 0;
exports.reelCount = 5;
exports.rowCount = 3;
exports.NEAR_WIN_SYMBOL = ['Scatter', 'Core', 'Bonus', 'Reactor'];
exports.NEAR_WIN_SYMBOL_NORMAL_ANIMATION = ['Scatter', 'Core', 'Bonus'];
exports.JACKPOT_ITEM_SYMBOL = ['Core', 'Reactor'];
var SlottyParameter = /** @class */ (function () {
    function SlottyParameter() {
    }
    SlottyParameter.GetReelCount = function () {
        return exports.reelCount;
    };
    SlottyParameter.GetCellIndex = function (reelIndex, rowIndex) {
        return reelIndex + (rowIndex * exports.reelCount);
    };
    SlottyParameter.GetReelIndex = function (cellIndex) {
        return cellIndex % exports.reelCount;
    };
    SlottyParameter.GetRowIndex = function (cellIndex) {
        return Math.floor(cellIndex / exports.reelCount);
    };
    return SlottyParameter;
}());
exports.SlottyParameter = SlottyParameter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYWthLWcxMDA5LWdhbWUtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFhLFFBQUEsU0FBUyxHQUFXLENBQUMsQ0FBQztBQUN0QixRQUFBLFFBQVEsR0FBVyxDQUFDLENBQUM7QUFDckIsUUFBQSxlQUFlLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMxRCxRQUFBLGdDQUFnQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNoRSxRQUFBLG1CQUFtQixHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRXZEO0lBQUE7SUFpQkEsQ0FBQztJQWZjLDRCQUFZLEdBQTFCO1FBQ0MsT0FBTyxpQkFBUyxDQUFDO0lBQ2xCLENBQUM7SUFFYSw0QkFBWSxHQUExQixVQUEyQixTQUFpQixFQUFFLFFBQWdCO1FBQzdELE9BQU8sU0FBUyxHQUFHLENBQUMsUUFBUSxHQUFHLGlCQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRWEsNEJBQVksR0FBMUIsVUFBMkIsU0FBaUI7UUFDM0MsT0FBTyxTQUFTLEdBQUcsaUJBQVMsQ0FBQztJQUM5QixDQUFDO0lBRWEsMkJBQVcsR0FBekIsVUFBMEIsU0FBaUI7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxpQkFBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNGLHNCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWVsQ291bnQ6IG51bWJlciA9IDU7XG5leHBvcnQgY29uc3Qgcm93Q291bnQ6IG51bWJlciA9IDM7XG5leHBvcnQgY29uc3QgTkVBUl9XSU5fU1lNQk9MID0gWydTY2F0dGVyJywgJ0NvcmUnLCAnQm9udXMnLCAnUmVhY3RvciddO1xuZXhwb3J0IGNvbnN0IE5FQVJfV0lOX1NZTUJPTF9OT1JNQUxfQU5JTUFUSU9OID0gWydTY2F0dGVyJywgJ0NvcmUnLCAnQm9udXMnXTtcbmV4cG9ydCBjb25zdCBKQUNLUE9UX0lURU1fU1lNQk9MID0gWydDb3JlJywgJ1JlYWN0b3InXTtcblxuZXhwb3J0IGNsYXNzIFNsb3R0eVBhcmFtZXRlciB7XG5cblx0cHVibGljIHN0YXRpYyBHZXRSZWVsQ291bnQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gcmVlbENvdW50O1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBHZXRDZWxsSW5kZXgocmVlbEluZGV4OiBudW1iZXIsIHJvd0luZGV4OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiByZWVsSW5kZXggKyAocm93SW5kZXggKiByZWVsQ291bnQpO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBHZXRSZWVsSW5kZXgoY2VsbEluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBjZWxsSW5kZXggJSByZWVsQ291bnQ7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIEdldFJvd0luZGV4KGNlbGxJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihjZWxsSW5kZXggLyByZWVsQ291bnQpO1xuXHR9XG59Il19