
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/avenger-game/avenger-total-win/combo-win-point.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abfddP5rDZDort/7Czlh82f', 'combo-win-point');
// Script/avenger-game/avenger-total-win/combo-win-point.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Slot45_number_converter_1 = require("../../base/Util/Slot45-number-converter");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ComboWinPoint = /** @class */ (function (_super) {
    __extends(ComboWinPoint, _super);
    function ComboWinPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalWinPoint = null;
        _this.currentPoint = 0;
        return _this;
    }
    ComboWinPoint.prototype.onLoad = function () {
        this.register();
        this.reset();
    };
    ComboWinPoint.prototype.register = function () {
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("IncreaseTotalWin", this.onIncreaseTotalWin.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("BonusWinComplete", this.reset.bind(this));
    };
    ComboWinPoint.prototype.onSetTotalWin = function (point) {
        this.currentPoint = point;
        this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    };
    ComboWinPoint.prototype.onIncreaseTotalWin = function (point) {
        var objTween = {
            value: this.currentPoint
        };
        this.totalWinPoint.node.active = true;
        this.countPoint(objTween, this.currentPoint + point, 0.25);
    };
    ComboWinPoint.prototype.onStartPresentWinCombo = function () {
        this.reset();
    };
    ComboWinPoint.prototype.countPoint = function (objTween, point, duration, delay, callback) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        if (callback === void 0) { callback = function () { }; }
        this.tweenCountPoint = cc.tween(objTween)
            .delay(delay)
            .to(duration, { value: point }, {
            progress: function (start, end, current, ratio) {
                _this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Math.floor(current));
                return start + (end - start) * ratio;
            }
        })
            .call(function () {
            _this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(point);
            _this.currentPoint = point;
        });
        this.tweenCountPoint.start();
    };
    ComboWinPoint.prototype.reset = function () {
        this.totalWinPoint.node.active = false;
        this.currentPoint = 0;
        this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    };
    __decorate([
        property(cc.Label)
    ], ComboWinPoint.prototype, "totalWinPoint", void 0);
    ComboWinPoint = __decorate([
        ccclass
    ], ComboWinPoint);
    return ComboWinPoint;
}(cc.Component));
exports.default = ComboWinPoint;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXGF2ZW5nZXItdG90YWwtd2luXFxjb21iby13aW4tcG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUZBQWdFO0FBQ2hFLCtFQUEyRTtBQUdyRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTZEQztRQTFERyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUd2QixrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUF1RHJDLENBQUM7SUFyRGEsOEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyxnQ0FBUSxHQUFoQjtRQUNJLHdDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRSx3Q0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkYsd0NBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2Ryx3Q0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLHdDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRWxGLENBQUM7SUFFTyxxQ0FBYSxHQUFyQixVQUFzQixLQUFhO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLGlDQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFTywwQ0FBa0IsR0FBMUIsVUFBMkIsS0FBYTtRQUNwQyxJQUFJLFFBQVEsR0FBRztZQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtTQUMzQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sOENBQXNCLEdBQTlCO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyxrQ0FBVSxHQUFsQixVQUFtQixRQUE0QixFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFFLEtBQWlCLEVBQUUsUUFBb0I7UUFBekgsaUJBY0M7UUFkaUYsc0JBQUEsRUFBQSxTQUFpQjtRQUFFLHlCQUFBLEVBQUEseUJBQW1CLENBQUM7UUFDckgsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNwQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM1QixRQUFRLEVBQUUsVUFBQyxLQUFVLEVBQUUsR0FBUSxFQUFFLE9BQVksRUFBRSxLQUFVO2dCQUNyRCxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxpQ0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkcsT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLENBQUM7U0FDSixDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsaUNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUdPLDZCQUFLLEdBQWI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLGlDQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUF6REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDWTtJQUhkLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E2RGpDO0lBQUQsb0JBQUM7Q0E3REQsQUE2REMsQ0E3RDBDLEVBQUUsQ0FBQyxTQUFTLEdBNkR0RDtrQkE3RG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRzEwMDlVdGlsIGZyb20gXCIuLi8uLi9iYXNlL1V0aWwvU2xvdDQ1LW51bWJlci1jb252ZXJ0ZXJcIjtcclxuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvU2xvdDQ1LWV2ZW50LW1hbmFnZXJcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYm9XaW5Qb2ludCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdG90YWxXaW5Qb2ludDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdHdlZW5Db3VudFBvaW50OiBjYy5Ud2VlbjtcclxuICAgIHByaXZhdGUgY3VycmVudFBvaW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xyXG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTcGluU3RhcnRlZFwiLCB0aGlzLnJlc2V0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTZXRUb3RhbFdpblwiLCB0aGlzLm9uU2V0VG90YWxXaW4uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkluY3JlYXNlVG90YWxXaW5cIiwgdGhpcy5vbkluY3JlYXNlVG90YWxXaW4uYmluZCh0aGlzKSk7XHJcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3RhcnRQcmVzZW50V2luQ29tYm9cIiwgdGhpcy5vblN0YXJ0UHJlc2VudFdpbkNvbWJvLmJpbmQodGhpcykpO1xyXG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkJvbnVzV2luQ29tcGxldGVcIiwgdGhpcy5yZXNldC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNldFRvdGFsV2luKHBvaW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb2ludCA9IHBvaW50O1xyXG4gICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBHMTAwOVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKHRoaXMuY3VycmVudFBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uSW5jcmVhc2VUb3RhbFdpbihwb2ludDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG9ialR3ZWVuID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5jdXJyZW50UG9pbnRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb3VudFBvaW50KG9ialR3ZWVuLCB0aGlzLmN1cnJlbnRQb2ludCArIHBvaW50LCAwLjI1KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU3RhcnRQcmVzZW50V2luQ29tYm8oKTp2b2lke1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvdW50UG9pbnQob2JqVHdlZW46IHsgdmFsdWU6IG51bWJlcjsgfSwgcG9pbnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgZGVsYXk6IG51bWJlciA9IDAsIGNhbGxiYWNrID0gKCkgPT4geyB9KSB7XHJcbiAgICAgICAgdGhpcy50d2VlbkNvdW50UG9pbnQgPSBjYy50d2VlbihvYmpUd2VlbilcclxuICAgICAgICAgICAgLmRlbGF5KGRlbGF5KVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgdmFsdWU6IHBvaW50IH0sIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiAoc3RhcnQ6IGFueSwgZW5kOiBhbnksIGN1cnJlbnQ6IGFueSwgcmF0aW86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBHMTAwOVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKE1hdGguZmxvb3IoY3VycmVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiByYXRpbztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSBwb2ludDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnR3ZWVuQ291bnRQb2ludC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvaW50ID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0V2l0aG91dENoYXJhY3Rlcih0aGlzLmN1cnJlbnRQb2ludCk7XHJcbiAgICB9XHJcbn0iXX0=