
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
var aka_g1009_number_converter_1 = require("../../base/Util/aka-g1009-number-converter");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
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
        this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
    };
    TotalWinPanel.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.reset.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SetTotalWin", this.onSetTotalWin.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("IncreaseTotalWin", this.onIncreaseTotalWin.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resume", this.onResume.bind(this));
    };
    TotalWinPanel.prototype.onResume = function (data) {
        if (data.isFreespins) {
            this.isFreespins = true;
            this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(data.totalWinPoint);
        }
    };
    TotalWinPanel.prototype.onSetTotalWin = function (point) {
        this.currentPoint = point;
        this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
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
            this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
        }
    };
    TotalWinPanel.prototype.onStopImmediately = function () {
        if (!this.isFreespins) {
            if (this.currentPoint > 0) {
                this.tweenCountPoint && this.tweenCountPoint.stop();
                this.totalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(this.currentPoint);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYXZlbmdlci1nYW1lL2F2ZW5nZXItdG90YWwtd2luL3RvdGFsLXdpbi1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RkFBbUU7QUFDbkUscUZBQThFO0FBR3hFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBaUdDO1FBOUZHLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDOztJQTBGckMsQ0FBQztJQXhGYSw4QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxvQ0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRU8sZ0NBQVEsR0FBaEI7UUFDSSwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0UsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFD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QWlHdEQ7a0JBakdvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEcxMDA5VXRpbCBmcm9tIFwiLi4vLi4vYmFzZS9VdGlsL2FrYS1nMTAwOS1udW1iZXItY29udmVydGVyXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3RhbFdpblBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0b3RhbFdpblBvaW50OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGlzRnJlZXNwaW5zOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB0d2VlbkNvdW50UG9pbnQ6IGNjLlR3ZWVuO1xuICAgIHByaXZhdGUgY3VycmVudFBvaW50OiBudW1iZXIgPSAwO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQb2ludCA9IDA7XG4gICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBHMTAwOVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKHRoaXMuY3VycmVudFBvaW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3BpblN0YXJ0ZWRcIiwgdGhpcy5yZXNldC5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNldFRvdGFsV2luXCIsIHRoaXMub25TZXRUb3RhbFdpbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkluY3JlYXNlVG90YWxXaW5cIiwgdGhpcy5vbkluY3JlYXNlVG90YWxXaW4uYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTdG9wSW1tZWRpYXRlbHlcIiwgdGhpcy5vblN0b3BJbW1lZGlhdGVseS5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkVudGVyRnJlZXNwaW5zXCIsIHRoaXMub25FbnRlckZyZWVzcGlucy5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcImZlYXR1cmVXaW5Db21wbGV0ZWRcIiwgdGhpcy5vbkZlYXR1cmVXaW5Db21wbGV0ZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJyZXN1bWVcIiwgdGhpcy5vblJlc3VtZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVzdW1lKGRhdGE6IGFueSkge1xuICAgICAgICBpZiAoZGF0YS5pc0ZyZWVzcGlucykge1xuICAgICAgICAgICAgdGhpcy5pc0ZyZWVzcGlucyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0V2l0aG91dENoYXJhY3RlcihkYXRhLnRvdGFsV2luUG9pbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNldFRvdGFsV2luKHBvaW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIodGhpcy5jdXJyZW50UG9pbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25JbmNyZWFzZVRvdGFsV2luKHBvaW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IG9ialR3ZWVuID0ge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuY3VycmVudFBvaW50XG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMudG90YWxXaW5Qb2ludC5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuY291bnRQb2ludChvYmpUd2VlbiwgdGhpcy5jdXJyZW50UG9pbnQgKyBwb2ludCwgMC4yNSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb3VudFBvaW50KG9ialR3ZWVuOiB7IHZhbHVlOiBudW1iZXI7IH0sIHBvaW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIgPSAwLCBjYWxsYmFjayA9ICgpID0+IHsgfSkge1xuICAgICAgICB0aGlzLnR3ZWVuQ291bnRQb2ludCA9IGNjLnR3ZWVuKG9ialR3ZWVuKVxuICAgICAgICAgICAgLmRlbGF5KGRlbGF5KVxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHZhbHVlOiBwb2ludCB9LCB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydDogYW55LCBlbmQ6IGFueSwgY3VycmVudDogYW55LCByYXRpbzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBHMTAwOVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKE1hdGguZmxvb3IoY3VycmVudCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0V2l0aG91dENoYXJhY3Rlcihwb2ludCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSBwb2ludDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHRoaXMudHdlZW5Db3VudFBvaW50LnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkVudGVyRnJlZXNwaW5zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzRnJlZXNwaW5zID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRmVhdHVyZVdpbkNvbXBsZXRlZChkYXRhKTogdm9pZCB7XG4gICAgICAgIGlmKGRhdGEgJiYgZGF0YS5oaXRSdWxlID09IFwiYm9udXNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNGcmVlc3BpbnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0ZyZWVzcGlucykge1xuICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy50b3RhbFdpblBvaW50Lm5vZGUpXG4gICAgICAgICAgICAvLyAgICAgLmRlbGF5KDAuMjUpXG4gICAgICAgICAgICAvLyAgICAgLnRvKDAuMjUsIHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAgICAgLy8gICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSAwO1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnRvdGFsV2luUG9pbnQuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIC8vICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSAwO1xuICAgICAgICAgICAgdGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIodGhpcy5jdXJyZW50UG9pbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN0b3BJbW1lZGlhdGVseSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRnJlZXNwaW5zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UG9pbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50d2VlbkNvdW50UG9pbnQgJiYgdGhpcy50d2VlbkNvdW50UG9pbnQuc3RvcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBHMTAwOVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKHRoaXMuY3VycmVudFBvaW50KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRvdGFsV2luUG9pbnQubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==