"use strict";
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