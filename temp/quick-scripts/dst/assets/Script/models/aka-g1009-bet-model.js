
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/models/aka-g1009-bet-model.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbW9kZWxzL2FrYS1nMTAwOS1iZXQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUdTLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QixrQkFBYSxHQUFXLENBQUMsQ0FBQztJQXdHbkMsQ0FBQztJQXRHYyx5QkFBVyxHQUF6QjtRQUVDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUTtZQUMxQixhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDOUMsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkIsVUFBd0IsYUFBcUI7UUFFNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDcEMsQ0FBQztJQUVNLHdDQUFnQixHQUF2QjtRQUVDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRU0sd0NBQWdCLEdBQXZCO1FBRUMsT0FBTyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNwRCxDQUFDO0lBRU0sMERBQWtDLEdBQXpDLFVBQTBDLGFBQXFCO1FBRTlELE9BQU8sYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDO0lBQ00sMENBQWtCLEdBQXpCLFVBQTBCLEtBQVk7UUFFckMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDckQsT0FBTyxDQUFDLENBQUM7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLHNDQUFjLEdBQXJCLFVBQXNCLFdBQXFCO1FBRTFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVNLDRDQUFvQixHQUEzQixVQUE0QixVQUFrQjtRQUU3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFFTSw0Q0FBb0IsR0FBM0I7UUFFQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0lBRU0sMENBQWtCLEdBQXpCO1FBRUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFTSwwQ0FBa0IsR0FBekI7UUFFQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVNLHlDQUFpQixHQUF4QjtRQUVDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDN0YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSw0Q0FBb0IsR0FBM0I7UUFFQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQzdGLE9BQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSxtREFBMkIsR0FBbEMsVUFBbUMsS0FBWTtRQUU5QyxPQUFRLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sOENBQXNCLEdBQTdCO1FBRUMsT0FBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzFGLENBQUM7SUFFTSxxQ0FBYSxHQUFwQixVQUFxQixLQUFZO1FBRWhDLElBQUksQ0FBQyxpQkFBaUIsR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSw0Q0FBb0IsR0FBM0IsVUFBNEIsS0FBWTtRQUV2QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBRUMsSUFBSSxDQUFDLGlCQUFpQixHQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLDZDQUFxQixHQUE1QjtRQUVDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDN0YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRixvQkFBQztBQUFELENBN0dBLEFBNkdDLElBQUE7QUE3R1ksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRzEwMDlCZXRNb2RlbFxue1xuXHRwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRzEwMDlCZXRNb2RlbDtcblx0cHJpdmF0ZSBiZXRQZXJMaW5lczogbnVtYmVyW10gPSBbXTtcblx0cHJpdmF0ZSBjdXJyZW50QmV0UGVyTGluZTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBiZXRNdWx0aXBsaWVyOiBudW1iZXIgPSAxO1xuXG5cdHB1YmxpYyBzdGF0aWMgR2V0SW5zdGFuY2UoKVxuXHR7XG5cdFx0aWYgKCFHMTAwOUJldE1vZGVsLmluc3RhbmNlKVxuXHRcdFx0RzEwMDlCZXRNb2RlbC5pbnN0YW5jZSA9IG5ldyBHMTAwOUJldE1vZGVsKCk7XG5cdFx0cmV0dXJuIEcxMDA5QmV0TW9kZWwuaW5zdGFuY2U7XG5cdH1cblxuXHRwdWJsaWMgU2V0QmV0TXVsdGlwbGllcihiZXRNdWx0aXBsaWVyOiBudW1iZXIpXG5cdHtcblx0XHR0aGlzLmJldE11bHRpcGxpZXIgPSBiZXRNdWx0aXBsaWVyO1xuXHR9XG5cblx0cHVibGljIEdldEJldE11bHRpcGxpZXIoKTogbnVtYmVyXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5iZXRNdWx0aXBsaWVyO1xuXHR9XG5cblx0cHVibGljIEdldFRvdGFsQmV0UG9pbnQoKTogbnVtYmVyXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5iZXRNdWx0aXBsaWVyICogdGhpcy5jdXJyZW50QmV0UGVyTGluZTtcblx0fVxuXG5cdHB1YmxpYyBUcnlHZXRUb3RhbEJldFBvaW50QnlCZXRNdWx0aXBsaWVyKGJldE11bHRpcGxpZXI6IG51bWJlcik6IG51bWJlclxuXHR7XG5cdFx0cmV0dXJuIGJldE11bHRpcGxpZXIgKiB0aGlzLmN1cnJlbnRCZXRQZXJMaW5lO1xuXHR9XG5cdHB1YmxpYyBHZXRCZXRQb2ludEJ5SW5kZXgoaW5kZXg6bnVtYmVyKTogbnVtYmVyXG5cdHtcblx0XHRpZiAoaW5kZXggPT0gLTEgfHwgaW5kZXggPiB0aGlzLmJldFBlckxpbmVzLmxlbmd0aCAtIDEpXG5cdFx0XHRyZXR1cm4gMDtcblx0XHRyZXR1cm4gdGhpcy5iZXRQZXJMaW5lc1tpbmRleF07XG5cdH1cblxuXHRwdWJsaWMgU2V0QmV0UGVyTGluZXMoYmV0UGVyTGluZXM6IG51bWJlcltdKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5jdXJyZW50QmV0UGVyTGluZSA9IGJldFBlckxpbmVzWzBdO1xuXHRcdHRoaXMuYmV0UGVyTGluZXMgPSBiZXRQZXJMaW5lcztcblx0fVxuXG5cdHB1YmxpYyBTZXRDdXJyZW50QmV0UGVyTGluZShiZXRQZXJMaW5lOiBudW1iZXIpOiB2b2lkXG5cdHtcblx0XHR0aGlzLmN1cnJlbnRCZXRQZXJMaW5lID0gYmV0UGVyTGluZTtcblx0fVxuXG5cdHB1YmxpYyBHZXRDdXJyZW50QmV0UGVyTGluZSgpOiBudW1iZXJcblx0e1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRCZXRQZXJMaW5lO1xuXHR9XG5cblx0cHVibGljIEluY3JlYXNlQmV0UGVyTGluZSgpOiB2b2lkXG5cdHtcblx0XHR0aGlzLmN1cnJlbnRCZXRQZXJMaW5lID0gdGhpcy5HZXROZXh0QmV0UGVyTGluZSgpO1xuXHR9XG5cblx0cHVibGljIERlY3JlYXNlQmV0UGVyTGluZSgpOiB2b2lkXG5cdHtcblx0XHR0aGlzLmN1cnJlbnRCZXRQZXJMaW5lID0gdGhpcy5HZXRQcmV2aW91c0JldFBlckxpbmUoKTtcblx0fVxuXG5cdHB1YmxpYyBHZXROZXh0QmV0UGVyTGluZSgpOiBudW1iZXJcblx0e1xuXHRcdGxldCBpbmRleCA9ICh0aGlzLmJldFBlckxpbmVzLmluZGV4T2YodGhpcy5jdXJyZW50QmV0UGVyTGluZSkgKyAxKSAlIHRoaXMuYmV0UGVyTGluZXMubGVuZ3RoO1xuXHRcdHJldHVybiB0aGlzLmJldFBlckxpbmVzW2luZGV4XTtcblx0fVxuXG5cdHB1YmxpYyBHZXROZXh0VG90YWxCZXRQb2ludCgpOiBudW1iZXJcblx0e1xuXHRcdGxldCBpbmRleCA9ICh0aGlzLmJldFBlckxpbmVzLmluZGV4T2YodGhpcy5jdXJyZW50QmV0UGVyTGluZSkgKyAxKSAlIHRoaXMuYmV0UGVyTGluZXMubGVuZ3RoO1xuXHRcdHJldHVybiAgdGhpcy5iZXRNdWx0aXBsaWVyICogdGhpcy5iZXRQZXJMaW5lc1tpbmRleF07XG5cdH1cblxuXHRwdWJsaWMgR2V0TmV4dFRvdGFsQmV0UG9pbnRieUluZGV4KGluZGV4Om51bWJlcik6IG51bWJlclxuXHR7XG5cdFx0cmV0dXJuICB0aGlzLmJldE11bHRpcGxpZXIgKiB0aGlzLmJldFBlckxpbmVzW2luZGV4XTtcblx0fVxuXG5cdHB1YmxpYyBHZXROZXh0QmV0UGVyTGluZUluZGV4KCk6IG51bWJlclxuXHR7XHRcblx0XHRyZXR1cm4gICh0aGlzLmJldFBlckxpbmVzLmluZGV4T2YodGhpcy5jdXJyZW50QmV0UGVyTGluZSkgKyAxKSAlIHRoaXMuYmV0UGVyTGluZXMubGVuZ3RoO1xuXHR9XG5cblx0cHVibGljIFNldEJldGJ5SW5kZXgoaW5kZXg6bnVtYmVyKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5jdXJyZW50QmV0UGVyTGluZT0gdGhpcy5iZXRQZXJMaW5lc1tpbmRleF07XG5cdH1cblxuXHRwdWJsaWMgR2V0QmV0UGVyTGluZWJ5SW5kZXgoaW5kZXg6bnVtYmVyKTogbnVtYmVyXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5iZXRQZXJMaW5lc1tpbmRleF07XG5cdH1cblxuXHRwdWJsaWMgU2V0QmV0VG9NaW4oKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5jdXJyZW50QmV0UGVyTGluZT0gdGhpcy5iZXRQZXJMaW5lc1swXTtcblx0fVxuXG5cdHB1YmxpYyBHZXRQcmV2aW91c0JldFBlckxpbmUoKTogbnVtYmVyXG5cdHtcblx0XHRsZXQgaW5kZXggPSAodGhpcy5iZXRQZXJMaW5lcy5pbmRleE9mKHRoaXMuY3VycmVudEJldFBlckxpbmUpIC0gMSkgJSB0aGlzLmJldFBlckxpbmVzLmxlbmd0aDtcblx0XHRyZXR1cm4gdGhpcy5iZXRQZXJMaW5lc1tpbmRleF07XG5cdH1cblxufSJdfQ==