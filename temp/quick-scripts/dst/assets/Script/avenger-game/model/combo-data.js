
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/avenger-game/model/combo-data.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXG1vZGVsXFxjb21iby1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBTUksbUJBQW1CLGFBQXVCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxvQ0FBZ0IsR0FBdkI7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVNLCtCQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSw0QkFBUSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFHTSwrQkFBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0sb0NBQWdCLEdBQXZCLFVBQXdCLGFBQWE7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLFFBQVE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLEtBQUs7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBRU0sNEJBQVEsR0FBZixVQUFnQixLQUFLO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFHTSwrQkFBVyxHQUFsQixVQUFtQixRQUFRO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDTCxnQkFBQztBQUFELENBbERBLEFBa0RDLElBQUE7QUFsRFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOVdpbkxpbmVSZXN1bHQgfSBmcm9tIFwiLi4vLi4vVUkvcHJlc2VudC13aW4vU2xvdDQ1LXByZXNlbnQtd2luLXBhbmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tYm9EYXRhIHtcclxuICAgIHByaXZhdGUgZXhwbG9kZWRDZWxsczogbnVtYmVyW107XHJcbiAgICBwcml2YXRlIENlbGxzOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgd2luUG9pbnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgV2luTGluZXM6IEcxMDA5V2luTGluZVJlc3VsdFtdO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihleHBsb2RlZENlbGxzOiBudW1iZXJbXSkge1xyXG4gICAgICAgIHRoaXMuZXhwbG9kZWRDZWxscyA9IGV4cGxvZGVkQ2VsbHM7XHJcbiAgICAgICAgdGhpcy5DZWxscyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53aW5Qb2ludCA9IDA7XHJcbiAgICAgICAgdGhpcy5XaW5MaW5lcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRFeHBsb2RlZENlbGxzKCk6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leHBsb2RlZENlbGxzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRXaW5Qb2ludCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpblBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDZWxscygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ2VsbHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRXaW5MaW5lcygpOiBHMTAwOVdpbkxpbmVSZXN1bHRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuV2luTGluZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldEV4cGxvZGVkQ2VsbHMoZXhwbG9kZWRDZWxscyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXhwbG9kZWRDZWxscyA9IGV4cGxvZGVkQ2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFdpblBvaW50KHdpblBvaW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53aW5Qb2ludCA9IHdpblBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBBZGRXaW5Qb2ludChwb2ludCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud2luUG9pbnQgPSB0aGlzLndpblBvaW50ICsgcG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldENlbGxzKENlbGxzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5DZWxscyA9IENlbGxzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU2V0V2luTGluZXMoV2luTGluZXMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLldpbkxpbmVzID0gV2luTGluZXM7XHJcbiAgICB9XHJcbn0iXX0=