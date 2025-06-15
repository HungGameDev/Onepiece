"use strict";
cc._RF.push(module, 'c8e1eyZJFpAboFObKdOfLGa', 'combo-data');
// Script/avenger-game/model/combo-data.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboData = void 0;
var ComboData = /** @class */ (function () {
    function ComboData(explodedCells) {
        this.explodedCells = explodedCells;
        this.Cells = null;
        this.winPoint = 0;
        this.WinLines = [];
    }
    ComboData.prototype.GetExplodedCells = function () {
        return this.explodedCells;
    };
    ComboData.prototype.GetWinPoint = function () {
        return this.winPoint;
    };
    ComboData.prototype.GetCells = function () {
        return this.Cells;
    };
    ComboData.prototype.GetWinLines = function () {
        return this.WinLines;
    };
    ComboData.prototype.SetExplodedCells = function (explodedCells) {
        this.explodedCells = explodedCells;
    };
    ComboData.prototype.SetWinPoint = function (winPoint) {
        this.winPoint = winPoint;
    };
    ComboData.prototype.AddWinPoint = function (point) {
        this.winPoint = this.winPoint + point;
    };
    ComboData.prototype.SetCells = function (Cells) {
        this.Cells = Cells;
    };
    ComboData.prototype.SetWinLines = function (WinLines) {
        this.WinLines = WinLines;
    };
    return ComboData;
}());
exports.ComboData = ComboData;

cc._RF.pop();