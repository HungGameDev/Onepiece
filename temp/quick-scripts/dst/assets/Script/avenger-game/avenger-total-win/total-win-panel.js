
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/avenger-game/avenger-total-win/total-win-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e825dttD4pO35rBH9Pl9JmG', 'total-win-panel');
// Script/avenger-game/avenger-total-win/total-win-panel.ts

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
var TotalWinPanel = /** @class */ (function (_super) {
    __extends(TotalWinPanel, _super);
    function TotalWinPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalWinPoint = null;
        _this.isFreespins = false;
        _this.currentPoint = 0;
        return _this;
    }
    TotalWinPanel.prototype.onLoad = function () {
        this.register();
        this.currentPoint = 0;
        this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    };
    TotalWinPanel.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("IncreaseTotalWin", this.onIncreaseTotalWin.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("resume", this.onResume.bind(this));
    };
    TotalWinPanel.prototype.onResume = function (data) {
        if (data.isFreespins) {
            this.isFreespins = true;
            this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(data.totalWinPoint);
        }
    };
    TotalWinPanel.prototype.onSetTotalWin = function (point) {
        this.currentPoint = point;
        this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    };
    TotalWinPanel.prototype.onIncreaseTotalWin = function (point) {
        var objTween = {
            value: this.currentPoint
        };
        // this.totalWinPoint.node.opacity = 255;
        this.countPoint(objTween, this.currentPoint + point, 0.25);
    };
    TotalWinPanel.prototype.countPoint = function (objTween, point, duration, delay, callback) {
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
    TotalWinPanel.prototype.onEnterFreespins = function () {
        this.isFreespins = true;
    };
    TotalWinPanel.prototype.onFeatureWinCompleted = function (data) {
        if (data && data.hitRule == "bonus") {
            return;
        }
        this.isFreespins = false;
        this.reset();
    };
    TotalWinPanel.prototype.reset = function () {
        if (!this.isFreespins) {
            // cc.tween(this.totalWinPoint.node)
            //     .delay(0.25)
            //     .to(0.25, { opacity: 0 })
            //     .call(() => {
            //         this.currentPoint = 0;
            //         this.totalWinPoint.string = "";
            //     }).start();
            this.currentPoint = 0;
            this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
        }
    };
    TotalWinPanel.prototype.onStopImmediately = function () {
        if (!this.isFreespins) {
            if (this.currentPoint > 0) {
                this.tweenCountPoint && this.tweenCountPoint.stop();
                this.totalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
                // this.totalWinPoint.node.opacity = 255;
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], TotalWinPanel.prototype, "totalWinPoint", void 0);
    TotalWinPanel = __decorate([
        ccclass
    ], TotalWinPanel);
    return TotalWinPanel;
}(cc.Component));
exports.default = TotalWinPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXGF2ZW5nZXItdG90YWwtd2luXFx0b3RhbC13aW4tcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUZBQWlFO0FBQ2pFLCtFQUE0RTtBQUd0RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWlHQztRQTlGRyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUV2QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUEwRnJDLENBQUM7SUF4RmEsOEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsaUNBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVPLGdDQUFRLEdBQWhCO1FBQ0kseUNBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLHlDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4Rix5Q0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLHlDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEcseUNBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5Rix5Q0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLHlDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU8sZ0NBQVEsR0FBaEIsVUFBaUIsSUFBUztRQUN0QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsaUNBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEc7SUFDTCxDQUFDO0lBRU8scUNBQWEsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxpQ0FBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRU8sMENBQWtCLEdBQTFCLFVBQTJCLEtBQWE7UUFDcEMsSUFBSSxRQUFRLEdBQUc7WUFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDM0IsQ0FBQztRQUNGLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sa0NBQVUsR0FBbEIsVUFBbUIsUUFBNEIsRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxLQUFpQixFQUFFLFFBQW9CO1FBQXpILGlCQWNDO1FBZGlGLHNCQUFBLEVBQUEsU0FBaUI7UUFBRSx5QkFBQSxFQUFBLHlCQUFtQixDQUFDO1FBQ3JILElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDcEMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDNUIsUUFBUSxFQUFFLFVBQUMsS0FBVSxFQUFFLEdBQVEsRUFBRSxPQUFZLEVBQUUsS0FBVTtnQkFDckQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsaUNBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BHLE9BQU8sS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN6QyxDQUFDO1NBQ0osQ0FBQzthQUNELElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLGlDQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsNEJBQTRCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEYsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTyx3Q0FBZ0IsR0FBeEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU8sNkNBQXFCLEdBQTdCLFVBQThCLElBQUk7UUFDOUIsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQ2xDO1lBQ0ksT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyw2QkFBSyxHQUFiO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsb0NBQW9DO1lBQ3BDLG1CQUFtQjtZQUNuQixnQ0FBZ0M7WUFDaEMsb0JBQW9CO1lBQ3BCLGlDQUFpQztZQUNqQywwQ0FBMEM7WUFDMUMsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLGlDQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JHO0lBQ0wsQ0FBQztJQUVPLHlDQUFpQixHQUF6QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsaUNBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2xHLHlDQUF5QzthQUM1QztTQUNKO0lBQ0wsQ0FBQztJQTdGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNZO0lBSGQsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWlHakM7SUFBRCxvQkFBQztDQWpHRCxBQWlHQyxDQWpHMEMsRUFBRSxDQUFDLFNBQVMsR0FpR3REO2tCQWpHb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbG90NDVVdGlsIGZyb20gXCIuLi8uLi9iYXNlL1V0aWwvU2xvdDQ1LW51bWJlci1jb252ZXJ0ZXJcIjtcclxuaW1wb3J0IHsgU2xvdDQ1RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZXZlbnRzL1Nsb3Q0NS1ldmVudC1tYW5hZ2VyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdGFsV2luUGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRvdGFsV2luUG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzRnJlZXNwaW5zOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHR3ZWVuQ291bnRQb2ludDogY2MuVHdlZW47XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQb2ludDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb2ludCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IFNsb3Q0NVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKHRoaXMuY3VycmVudFBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xyXG4gICAgICAgIFNsb3Q0NUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3BpblN0YXJ0ZWRcIiwgdGhpcy5yZXNldC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBTbG90NDVFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNldFRvdGFsV2luXCIsIHRoaXMub25TZXRUb3RhbFdpbi5iaW5kKHRoaXMpKTtcclxuICAgICAgICBTbG90NDVFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkluY3JlYXNlVG90YWxXaW5cIiwgdGhpcy5vbkluY3JlYXNlVG90YWxXaW4uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgU2xvdDQ1RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTdG9wSW1tZWRpYXRlbHlcIiwgdGhpcy5vblN0b3BJbW1lZGlhdGVseS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBTbG90NDVFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkVudGVyRnJlZXNwaW5zXCIsIHRoaXMub25FbnRlckZyZWVzcGlucy5iaW5kKHRoaXMpKTtcclxuICAgICAgICBTbG90NDVFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcImZlYXR1cmVXaW5Db21wbGV0ZWRcIiwgdGhpcy5vbkZlYXR1cmVXaW5Db21wbGV0ZWQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgU2xvdDQ1RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJyZXN1bWVcIiwgdGhpcy5vblJlc3VtZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUmVzdW1lKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmIChkYXRhLmlzRnJlZXNwaW5zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGcmVlc3BpbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gU2xvdDQ1VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIoZGF0YS50b3RhbFdpblBvaW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNldFRvdGFsV2luKHBvaW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb2ludCA9IHBvaW50O1xyXG4gICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBTbG90NDVVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0V2l0aG91dENoYXJhY3Rlcih0aGlzLmN1cnJlbnRQb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkluY3JlYXNlVG90YWxXaW4ocG9pbnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBvYmpUd2VlbiA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuY3VycmVudFBvaW50XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyB0aGlzLnRvdGFsV2luUG9pbnQubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuY291bnRQb2ludChvYmpUd2VlbiwgdGhpcy5jdXJyZW50UG9pbnQgKyBwb2ludCwgMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3VudFBvaW50KG9ialR3ZWVuOiB7IHZhbHVlOiBudW1iZXI7IH0sIHBvaW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIgPSAwLCBjYWxsYmFjayA9ICgpID0+IHsgfSkge1xyXG4gICAgICAgIHRoaXMudHdlZW5Db3VudFBvaW50ID0gY2MudHdlZW4ob2JqVHdlZW4pXHJcbiAgICAgICAgICAgIC5kZWxheShkZWxheSlcclxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHZhbHVlOiBwb2ludCB9LCB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0OiBhbnksIGVuZDogYW55LCBjdXJyZW50OiBhbnksIHJhdGlvOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gU2xvdDQ1VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIoTWF0aC5mbG9vcihjdXJyZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gU2xvdDQ1VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSBwb2ludDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnR3ZWVuQ291bnRQb2ludC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25FbnRlckZyZWVzcGlucygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzRnJlZXNwaW5zID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRmVhdHVyZVdpbkNvbXBsZXRlZChkYXRhKTogdm9pZCB7XHJcbiAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmhpdFJ1bGUgPT0gXCJib251c1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzRnJlZXNwaW5zID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRnJlZXNwaW5zKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMudG90YWxXaW5Qb2ludC5ub2RlKVxyXG4gICAgICAgICAgICAvLyAgICAgLmRlbGF5KDAuMjUpXHJcbiAgICAgICAgICAgIC8vICAgICAudG8oMC4yNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSAwO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAvLyAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gU2xvdDQ1VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIodGhpcy5jdXJyZW50UG9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU3RvcEltbWVkaWF0ZWx5KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0ZyZWVzcGlucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UG9pbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuQ291bnRQb2ludCAmJiB0aGlzLnR3ZWVuQ291bnRQb2ludC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gU2xvdDQ1VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIodGhpcy5jdXJyZW50UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50b3RhbFdpblBvaW50Lm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==