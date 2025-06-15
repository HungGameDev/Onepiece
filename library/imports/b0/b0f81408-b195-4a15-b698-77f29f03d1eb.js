"use strict";
cc._RF.push(module, 'b0f81QIsZVKFbaYd/KfA9Hr', 'aka-g1009-bet-model');
// Script/models/aka-g1009-bet-model.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G1009BetModel = void 0;
var G1009BetModel = /** @class */ (function () {
    function G1009BetModel() {
        this.betPerLines = [];
        this.currentBetPerLine = 0;
        this.betMultiplier = 1;
    }
    G1009BetModel.GetInstance = function () {
        if (!G1009BetModel.instance)
            G1009BetModel.instance = new G1009BetModel();
        return G1009BetModel.instance;
    };
    G1009BetModel.prototype.SetBetMultiplier = function (betMultiplier) {
        this.betMultiplier = betMultiplier;
    };
    G1009BetModel.prototype.GetBetMultiplier = function () {
        return this.betMultiplier;
    };
    G1009BetModel.prototype.GetTotalBetPoint = function () {
        return this.betMultiplier * this.currentBetPerLine;
    };
    G1009BetModel.prototype.TryGetTotalBetPointByBetMultiplier = function (betMultiplier) {
        return betMultiplier * this.currentBetPerLine;
    };
    G1009BetModel.prototype.GetBetPointByIndex = function (index) {
        if (index == -1 || index > this.betPerLines.length - 1)
            return 0;
        return this.betPerLines[index];
    };
    G1009BetModel.prototype.SetBetPerLines = function (betPerLines) {
        this.currentBetPerLine = betPerLines[0];
        this.betPerLines = betPerLines;
    };
    G1009BetModel.prototype.SetCurrentBetPerLine = function (betPerLine) {
        this.currentBetPerLine = betPerLine;
    };
    G1009BetModel.prototype.GetCurrentBetPerLine = function () {
        return this.currentBetPerLine;
    };
    G1009BetModel.prototype.IncreaseBetPerLine = function () {
        this.currentBetPerLine = this.GetNextBetPerLine();
    };
    G1009BetModel.prototype.DecreaseBetPerLine = function () {
        this.currentBetPerLine = this.GetPreviousBetPerLine();
    };
    G1009BetModel.prototype.GetNextBetPerLine = function () {
        var index = (this.betPerLines.indexOf(this.currentBetPerLine) + 1) % this.betPerLines.length;
        return this.betPerLines[index];
    };
    G1009BetModel.prototype.GetNextTotalBetPoint = function () {
        var index = (this.betPerLines.indexOf(this.currentBetPerLine) + 1) % this.betPerLines.length;
        return this.betMultiplier * this.betPerLines[index];
    };
    G1009BetModel.prototype.GetNextTotalBetPointbyIndex = function (index) {
        return this.betMultiplier * this.betPerLines[index];
    };
    G1009BetModel.prototype.GetNextBetPerLineIndex = function () {
        return (this.betPerLines.indexOf(this.currentBetPerLine) + 1) % this.betPerLines.length;
    };
    G1009BetModel.prototype.SetBetbyIndex = function (index) {
        this.currentBetPerLine = this.betPerLines[index];
    };
    G1009BetModel.prototype.GetBetPerLinebyIndex = function (index) {
        return this.betPerLines[index];
    };
    G1009BetModel.prototype.SetBetToMin = function () {
        this.currentBetPerLine = this.betPerLines[0];
    };
    G1009BetModel.prototype.GetPreviousBetPerLine = function () {
        var index = (this.betPerLines.indexOf(this.currentBetPerLine) - 1) % this.betPerLines.length;
        return this.betPerLines[index];
    };
    return G1009BetModel;
}());
exports.G1009BetModel = G1009BetModel;

cc._RF.pop();