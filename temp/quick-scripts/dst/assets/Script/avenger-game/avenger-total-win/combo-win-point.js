
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
var aka_g1009_number_converter_1 = require("../../base/Util/aka-g1009-number-converter");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
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
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("IncreaseTotalWin", this.onIncreaseTotalWin.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("BonusWinComplete", this.reset.bind(this));
    };
    ComboWinPoint.prototype.onSetTotalWin = function (point) {
        this.currentPoint = point;
        this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
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
                _this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Math.floor(current));
                return start + (end - start) * ratio;
            }
        })
            .call(function () {
            _this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(point);
            _this.currentPoint = point;
        });
        this.tweenCountPoint.start();
    };
    ComboWinPoint.prototype.reset = function () {
        this.totalWinPoint.node.active = false;
        this.currentPoint = 0;
        this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYXZlbmdlci1nYW1lL2F2ZW5nZXItdG90YWwtd2luL2NvbWJvLXdpbi1wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RkFBbUU7QUFDbkUscUZBQThFO0FBR3hFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBNkRDO1FBMURHLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDOztJQXVEckMsQ0FBQztJQXJEYSw4QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLGdDQUFRLEdBQWhCO1FBQ0ksMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9FLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekcsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFbEYsQ0FBQztJQUVPLHFDQUFhLEdBQXJCLFVBQXNCLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsb0NBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVPLDBDQUFrQixHQUExQixVQUEyQixLQUFhO1FBQ3BDLElBQUksUUFBUSxHQUFHO1lBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQzNCLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTyw4Q0FBc0IsR0FBOUI7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLGtDQUFVLEdBQWxCLFVBQW1CLFFBQTRCLEVBQUUsS0FBYSxFQUFFLFFBQWdCLEVBQUUsS0FBaUIsRUFBRSxRQUFvQjtRQUF6SCxpQkFjQztRQWRpRixzQkFBQSxFQUFBLFNBQWlCO1FBQUUseUJBQUEsRUFBQSx5QkFBbUIsQ0FBQztRQUNySCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3BDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVCLFFBQVEsRUFBRSxVQUFDLEtBQVUsRUFBRSxHQUFRLEVBQUUsT0FBWSxFQUFFLEtBQVU7Z0JBQ3JELEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLG9DQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuRyxPQUFPLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDekMsQ0FBQztTQUNKLENBQUM7YUFDRCxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxvQ0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JGLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFBO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBR08sNkJBQUssR0FBYjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsb0NBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckcsQ0FBQztJQXpERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNZO0lBSGQsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTZEakM7SUFBRCxvQkFBQztDQTdERCxBQTZEQyxDQTdEMEMsRUFBRSxDQUFDLFNBQVMsR0E2RHREO2tCQTdEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHMTAwOVV0aWwgZnJvbSBcIi4uLy4uL2Jhc2UvVXRpbC9ha2EtZzEwMDktbnVtYmVyLWNvbnZlcnRlclwiO1xuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYm9XaW5Qb2ludCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdG90YWxXaW5Qb2ludDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0d2VlbkNvdW50UG9pbnQ6IGNjLlR3ZWVuO1xuICAgIHByaXZhdGUgY3VycmVudFBvaW50OiBudW1iZXIgPSAwO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNwaW5TdGFydGVkXCIsIHRoaXMucmVzZXQuYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTZXRUb3RhbFdpblwiLCB0aGlzLm9uU2V0VG90YWxXaW4uYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJJbmNyZWFzZVRvdGFsV2luXCIsIHRoaXMub25JbmNyZWFzZVRvdGFsV2luLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTdGFydFByZXNlbnRXaW5Db21ib1wiLCB0aGlzLm9uU3RhcnRQcmVzZW50V2luQ29tYm8uYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkJvbnVzV2luQ29tcGxldGVcIiwgdGhpcy5yZXNldC5iaW5kKHRoaXMpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25TZXRUb3RhbFdpbihwb2ludDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBHMTAwOVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKHRoaXMuY3VycmVudFBvaW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uSW5jcmVhc2VUb3RhbFdpbihwb2ludDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBvYmpUd2VlbiA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmN1cnJlbnRQb2ludFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvdW50UG9pbnQob2JqVHdlZW4sIHRoaXMuY3VycmVudFBvaW50ICsgcG9pbnQsIDAuMjUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdGFydFByZXNlbnRXaW5Db21ibygpOnZvaWR7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvdW50UG9pbnQob2JqVHdlZW46IHsgdmFsdWU6IG51bWJlcjsgfSwgcG9pbnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgZGVsYXk6IG51bWJlciA9IDAsIGNhbGxiYWNrID0gKCkgPT4geyB9KSB7XG4gICAgICAgIHRoaXMudHdlZW5Db3VudFBvaW50ID0gY2MudHdlZW4ob2JqVHdlZW4pXG4gICAgICAgICAgICAuZGVsYXkoZGVsYXkpXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgdmFsdWU6IHBvaW50IH0sIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0OiBhbnksIGVuZDogYW55LCBjdXJyZW50OiBhbnksIHJhdGlvOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIoTWF0aC5mbG9vcihjdXJyZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiByYXRpbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBHMTAwOVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKHBvaW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb2ludCA9IHBvaW50O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgdGhpcy50d2VlbkNvdW50UG9pbnQuc3RhcnQoKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQb2ludCA9IDA7XG4gICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBHMTAwOVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKHRoaXMuY3VycmVudFBvaW50KTtcbiAgICB9XG59Il19