"use strict";
cc._RF.push(module, 'b0f81QIsZVKFbaYd/KfA9Hr', 'Slot45-bet-model');
// Script/models/Slot45-bet-model.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot45BetModel = void 0;
var Slot45BetModel = /** @class */ (function () {
    function Slot45BetModel() {
        this.betPerLines = [];
        this.currentBetPerLine = 0;
        this.betMultiplier = 1;
    }
    Slot45BetModel.GetInstance = function () {
        if (!Slot45BetModel.instance)
            Slot45BetModel.instance = new Slot45BetModel();
        return Slot45BetModel.instance;
    };
    Slot45BetModel.prototype.SetBetMultiplier = function (betMultiplier) {
        this.betMultiplier = betMultiplier;
    };
    Slot45BetModel.prototype.GetBetMultiplier = function () {
        return this.betMultiplier;
    };
    Slot45BetModel.prototype.GetTotalBetPoint = function () {
        return this.betMultiplier * this.currentBetPerLine;
    };
    Slot45BetModel.prototype.TryGetTotalBetPointByBetMultiplier = function (betMultiplier) {
        return betMultiplier * this.currentBetPerLine;
    };
    Slot45BetModel.prototype.GetBetPointByIndex = function (index) {
        if (index == -1 || index > this.betPerLines.length - 1)
            return 0;
        return this.betPerLines[index];
    };
    Slot45BetModel.prototype.SetBetPerLines = function (betPerLines) {
        this.currentBetPerLine = betPerLines[0];
        this.betPerLines = betPerLines;
    };
    Slot45BetModel.prototype.SetCurrentBetPerLine = function (betPerLine) {
        this.currentBetPerLine = betPerLine;
    };
    Slot45BetModel.prototype.GetCurrentBetPerLine = function () {
        return this.currentBetPerLine;
    };
    Slot45BetModel.prototype.IncreaseBetPerLine = function () {
        this.currentBetPerLine = this.GetNextBetPerLine();
    };
    Slot45BetModel.prototype.DecreaseBetPerLine = function () {
        this.currentBetPerLine = this.GetPreviousBetPerLine();
    };
    Slot45BetModel.prototype.GetNextBetPerLine = function () {
        var index = (this.betPerLines.indexOf(this.currentBetPerLine) + 1) % this.betPerLines.length;
        return this.betPerLines[index];
    };
    Slot45BetModel.prototype.GetNextTotalBetPoint = function () {
        var index = (this.betPerLines.indexOf(this.currentBetPerLine) + 1) % this.betPerLines.length;
        return this.betMultiplier * this.betPerLines[index];
    };
    Slot45BetModel.prototype.GetNextTotalBetPointbyIndex = function (index) {
        return this.betMultiplier * this.betPerLines[index];
    };
    Slot45BetModel.prototype.GetNextBetPerLineIndex = function () {
        return (this.betPerLines.indexOf(this.currentBetPerLine) + 1) % this.betPerLines.length;
    };
    Slot45BetModel.prototype.SetBetbyIndex = function (index) {
        this.currentBetPerLine = this.betPerLines[index];
    };
    Slot45BetModel.prototype.GetBetPerLinebyIndex = function (index) {
        return this.betPerLines[index];
    };
    Slot45BetModel.prototype.SetBetToMin = function () {
        this.currentBetPerLine = this.betPerLines[0];
    };
    Slot45BetModel.prototype.GetPreviousBetPerLine = function () {
        var index = (this.betPerLines.indexOf(this.currentBetPerLine) - 1) % this.betPerLines.length;
        return this.betPerLines[index];
    };
    return Slot45BetModel;
}());
exports.Slot45BetModel = Slot45BetModel;

cc._RF.pop();