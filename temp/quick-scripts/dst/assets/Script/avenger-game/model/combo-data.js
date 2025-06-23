
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXG1vZGVsXFxjb21iby1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBTUksbUJBQW1CLGFBQXVCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxvQ0FBZ0IsR0FBdkI7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVNLCtCQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSw0QkFBUSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFHTSwrQkFBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0sb0NBQWdCLEdBQXZCLFVBQXdCLGFBQWE7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLFFBQVE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLEtBQUs7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBRU0sNEJBQVEsR0FBZixVQUFnQixLQUFLO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFHTSwrQkFBVyxHQUFsQixVQUFtQixRQUFRO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDTCxnQkFBQztBQUFELENBbERBLEFBa0RDLElBQUE7QUFsRFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbG90NDVXaW5MaW5lUmVzdWx0IH0gZnJvbSBcIi4uLy4uL1VJL3ByZXNlbnQtd2luL1Nsb3Q0NS1wcmVzZW50LXdpbi1wYW5lbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbWJvRGF0YSB7XHJcbiAgICBwcml2YXRlIGV4cGxvZGVkQ2VsbHM6IG51bWJlcltdO1xyXG4gICAgcHJpdmF0ZSBDZWxsczogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIHdpblBvaW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIFdpbkxpbmVzOiBTbG90NDVXaW5MaW5lUmVzdWx0W107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGV4cGxvZGVkQ2VsbHM6IG51bWJlcltdKSB7XHJcbiAgICAgICAgdGhpcy5leHBsb2RlZENlbGxzID0gZXhwbG9kZWRDZWxscztcclxuICAgICAgICB0aGlzLkNlbGxzID0gbnVsbDtcclxuICAgICAgICB0aGlzLndpblBvaW50ID0gMDtcclxuICAgICAgICB0aGlzLldpbkxpbmVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEV4cGxvZGVkQ2VsbHMoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4cGxvZGVkQ2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFdpblBvaW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2luUG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENlbGxzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5DZWxscztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIEdldFdpbkxpbmVzKCk6IFNsb3Q0NVdpbkxpbmVSZXN1bHRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuV2luTGluZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldEV4cGxvZGVkQ2VsbHMoZXhwbG9kZWRDZWxscyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXhwbG9kZWRDZWxscyA9IGV4cGxvZGVkQ2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFdpblBvaW50KHdpblBvaW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53aW5Qb2ludCA9IHdpblBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBBZGRXaW5Qb2ludChwb2ludCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud2luUG9pbnQgPSB0aGlzLndpblBvaW50ICsgcG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldENlbGxzKENlbGxzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5DZWxscyA9IENlbGxzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU2V0V2luTGluZXMoV2luTGluZXMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLldpbkxpbmVzID0gV2luTGluZXM7XHJcbiAgICB9XHJcbn0iXX0=