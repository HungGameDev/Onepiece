
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYXZlbmdlci1nYW1lL21vZGVsL2NvbWJvLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFNSSxtQkFBbUIsYUFBdUI7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLG9DQUFnQixHQUF2QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRU0sK0JBQVcsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLDRCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUdNLCtCQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxvQ0FBZ0IsR0FBdkIsVUFBd0IsYUFBYTtRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsUUFBUTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsS0FBSztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFFTSw0QkFBUSxHQUFmLFVBQWdCLEtBQUs7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUdNLCtCQUFXLEdBQWxCLFVBQW1CLFFBQVE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FsREEsQUFrREMsSUFBQTtBQWxEWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcxMDA5V2luTGluZVJlc3VsdCB9IGZyb20gXCIuLi8uLi9VSS9wcmVzZW50LXdpbi9ha2EtZzEwMDktcHJlc2VudC13aW4tcGFuZWxcIjtcblxuZXhwb3J0IGNsYXNzIENvbWJvRGF0YSB7XG4gICAgcHJpdmF0ZSBleHBsb2RlZENlbGxzOiBudW1iZXJbXTtcbiAgICBwcml2YXRlIENlbGxzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIHdpblBvaW50OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBXaW5MaW5lczogRzEwMDlXaW5MaW5lUmVzdWx0W107XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZXhwbG9kZWRDZWxsczogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5leHBsb2RlZENlbGxzID0gZXhwbG9kZWRDZWxscztcbiAgICAgICAgdGhpcy5DZWxscyA9IG51bGw7XG4gICAgICAgIHRoaXMud2luUG9pbnQgPSAwO1xuICAgICAgICB0aGlzLldpbkxpbmVzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIEdldEV4cGxvZGVkQ2VsbHMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5leHBsb2RlZENlbGxzO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRXaW5Qb2ludCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy53aW5Qb2ludDtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0Q2VsbHMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5DZWxscztcbiAgICB9XG5cblxuICAgIHB1YmxpYyBHZXRXaW5MaW5lcygpOiBHMTAwOVdpbkxpbmVSZXN1bHRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLldpbkxpbmVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRFeHBsb2RlZENlbGxzKGV4cGxvZGVkQ2VsbHMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHBsb2RlZENlbGxzID0gZXhwbG9kZWRDZWxscztcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0V2luUG9pbnQod2luUG9pbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53aW5Qb2ludCA9IHdpblBvaW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBBZGRXaW5Qb2ludChwb2ludCk6IHZvaWQge1xuICAgICAgICB0aGlzLndpblBvaW50ID0gdGhpcy53aW5Qb2ludCArIHBvaW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRDZWxscyhDZWxscyk6IHZvaWQge1xuICAgICAgICB0aGlzLkNlbGxzID0gQ2VsbHM7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgU2V0V2luTGluZXMoV2luTGluZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5XaW5MaW5lcyA9IFdpbkxpbmVzO1xuICAgIH1cbn0iXX0=