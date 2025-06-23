
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
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("IncreaseTotalWin", this.onIncreaseTotalWin.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("BonusWinComplete", this.reset.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXGF2ZW5nZXItdG90YWwtd2luXFxjb21iby13aW4tcG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUZBQWlFO0FBQ2pFLCtFQUE0RTtBQUd0RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTZEQztRQTFERyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUd2QixrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUF1RHJDLENBQUM7SUFyRGEsOEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyxnQ0FBUSxHQUFoQjtRQUNJLHlDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRix5Q0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEYseUNBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4Ryx5Q0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFHLHlDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRW5GLENBQUM7SUFFTyxxQ0FBYSxHQUFyQixVQUFzQixLQUFhO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLGlDQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFTywwQ0FBa0IsR0FBMUIsVUFBMkIsS0FBYTtRQUNwQyxJQUFJLFFBQVEsR0FBRztZQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtTQUMzQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sOENBQXNCLEdBQTlCO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyxrQ0FBVSxHQUFsQixVQUFtQixRQUE0QixFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFFLEtBQWlCLEVBQUUsUUFBb0I7UUFBekgsaUJBY0M7UUFkaUYsc0JBQUEsRUFBQSxTQUFpQjtRQUFFLHlCQUFBLEVBQUEseUJBQW1CLENBQUM7UUFDckgsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNwQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM1QixRQUFRLEVBQUUsVUFBQyxLQUFVLEVBQUUsR0FBUSxFQUFFLE9BQVksRUFBRSxLQUFVO2dCQUNyRCxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxpQ0FBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEcsT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLENBQUM7U0FDSixDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsaUNBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUdPLDZCQUFLLEdBQWI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLGlDQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUF6REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDWTtJQUhkLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E2RGpDO0lBQUQsb0JBQUM7Q0E3REQsQUE2REMsQ0E3RDBDLEVBQUUsQ0FBQyxTQUFTLEdBNkR0RDtrQkE3RG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xvdDQ1VXRpbCBmcm9tIFwiLi4vLi4vYmFzZS9VdGlsL1Nsb3Q0NS1udW1iZXItY29udmVydGVyXCI7XHJcbmltcG9ydCB7IFNsb3Q0NUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9TbG90NDUtZXZlbnQtbWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21ib1dpblBvaW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0b3RhbFdpblBvaW50OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0d2VlbkNvdW50UG9pbnQ6IGNjLlR3ZWVuO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UG9pbnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgU2xvdDQ1RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTcGluU3RhcnRlZFwiLCB0aGlzLnJlc2V0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIFNsb3Q0NUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU2V0VG90YWxXaW5cIiwgdGhpcy5vblNldFRvdGFsV2luLmJpbmQodGhpcykpO1xyXG4gICAgICAgIFNsb3Q0NUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiSW5jcmVhc2VUb3RhbFdpblwiLCB0aGlzLm9uSW5jcmVhc2VUb3RhbFdpbi5iaW5kKHRoaXMpKTtcclxuXHRcdFNsb3Q0NUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3RhcnRQcmVzZW50V2luQ29tYm9cIiwgdGhpcy5vblN0YXJ0UHJlc2VudFdpbkNvbWJvLmJpbmQodGhpcykpO1xyXG5cdFx0U2xvdDQ1RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJCb251c1dpbkNvbXBsZXRlXCIsIHRoaXMucmVzZXQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TZXRUb3RhbFdpbihwb2ludDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSBwb2ludDtcclxuICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gU2xvdDQ1VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIodGhpcy5jdXJyZW50UG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25JbmNyZWFzZVRvdGFsV2luKHBvaW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgb2JqVHdlZW4gPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmN1cnJlbnRQb2ludFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b3RhbFdpblBvaW50Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvdW50UG9pbnQob2JqVHdlZW4sIHRoaXMuY3VycmVudFBvaW50ICsgcG9pbnQsIDAuMjUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TdGFydFByZXNlbnRXaW5Db21ibygpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY291bnRQb2ludChvYmpUd2VlbjogeyB2YWx1ZTogbnVtYmVyOyB9LCBwb2ludDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBkZWxheTogbnVtYmVyID0gMCwgY2FsbGJhY2sgPSAoKSA9PiB7IH0pIHtcclxuICAgICAgICB0aGlzLnR3ZWVuQ291bnRQb2ludCA9IGNjLnR3ZWVuKG9ialR3ZWVuKVxyXG4gICAgICAgICAgICAuZGVsYXkoZGVsYXkpXHJcbiAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyB2YWx1ZTogcG9pbnQgfSwge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydDogYW55LCBlbmQ6IGFueSwgY3VycmVudDogYW55LCByYXRpbzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IFNsb3Q0NVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKE1hdGguZmxvb3IoY3VycmVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiByYXRpbztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IFNsb3Q0NVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBvaW50ID0gcG9pbnQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy50d2VlbkNvdW50UG9pbnQuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb2ludCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IFNsb3Q0NVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKHRoaXMuY3VycmVudFBvaW50KTtcclxuICAgIH1cclxufSJdfQ==