
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/big-win/aka-g1009-big-win-actor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0dedaTH9XxG7qmaADUi0lnI', 'aka-g1009-big-win-actor');
// Script/UI/big-win/aka-g1009-big-win-actor.ts

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
var aka_g1009_bet_model_1 = require("../../models/aka-g1009-bet-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FADE_DURATION = 0.25;
var COUNT_POINT_DURATION1 = 1.75;
var COUNT_POINT_DURATION2 = 0.75;
var COUNT_POINT_DURATION3 = 0.75;
var IDLE_DURATION = 2.5;
var SUPER_WIN_TRIGGER_POINT = 10;
var G1009BigwinActor = /** @class */ (function (_super) {
    __extends(G1009BigwinActor, _super);
    function G1009BigwinActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.spine = null;
        _this.skeletonData = null;
        _this.lblTotalWinPoint = null;
        _this.currentWinPoint = 0;
        _this.totalWin = 0;
        _this.isStopImmediately = false;
        _this.duration = 4;
        return _this;
    }
    G1009BigwinActor.prototype.onLoad = function () {
        this.reset();
        this.register();
    };
    G1009BigwinActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("BigWinStarted", this.onBigWinStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
    };
    G1009BigwinActor.prototype.onBigWinStarted = function (point) {
        var _this = this;
        // if (this.isStopImmediately)
        // {
        // 	this.speedUpAnimation();
        // 	return;
        // }
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BigWinPresentationStarted");
        var objTween = {
            value: 0
        };
        this.totalWin = point;
        this.tweenShowPopup = cc.tween(this.spine.node)
            .to(FADE_DURATION, { scale: 1 })
            .call(function () {
            _this.content.active = true;
            _this.spine.skeletonData = _this.skeletonData;
            _this.spine.setSkin(_this.getNameSkinAnimation(point));
            var track = _this.spine.setAnimation(0, "animation", false);
            cc.tween(_this.content)
                .to(FADE_DURATION, { opacity: 255 })
                .call(function () {
                _this.countPoint(objTween, _this.totalWin, _this.duration - FADE_DURATION - IDLE_DURATION);
            })
                .start();
        });
        this.tweenShowPopup.start();
    };
    G1009BigwinActor.prototype.getNameSkinAnimation = function (point) {
        var nameSkin = point / aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetTotalBetPoint() >= SUPER_WIN_TRIGGER_POINT ? "thangsieulon" : "thanglon";
        return nameSkin;
    };
    G1009BigwinActor.prototype.countPoint = function (objTween, point1, duration, delay, callback) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        if (callback === void 0) { callback = function () { }; }
        this.tweenCountPoint = cc.tween(objTween)
            .delay(delay)
            .to(duration, { value: point1 }, {
            progress: function (start, end, current, ratio) {
                _this.currentWinPoint = Math.round(current);
                _this.lblTotalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(_this.currentWinPoint);
                return start + (end - start) * ratio;
            }
        })
            .call(function () {
            _this.lblTotalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(point1);
        })
            .delay(IDLE_DURATION)
            .call(function () {
            cc.tween(_this.content)
                .to(FADE_DURATION, { opacity: 0 }).call(function () {
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BigWinCompleted");
                _this.reset();
            })
                .start();
        });
        this.tweenCountPoint.start();
    };
    G1009BigwinActor.prototype.reset = function () {
        this.spine.skeletonData = null;
        this.lblTotalWinPoint.string = "";
        this.content.active = false;
        this.content.opacity = 0;
    };
    G1009BigwinActor.prototype.speedUpAnimation = function () {
        this.tweenCountPoint && this.tweenCountPoint.stop();
        this.tweenShowPopup && this.tweenShowPopup.stop();
        var objTween = {
            value: this.currentWinPoint
        };
        this.countPoint(objTween, this.totalWin, 0);
    };
    G1009BigwinActor.prototype.onSpinStarted = function () {
        // this.duration = COUNT_POINT_DURATION1 + COUNT_POINT_DURATION2 + COUNT_POINT_DURATION3;
        // this.isStopImmediately = false;
    };
    G1009BigwinActor.prototype.onStopImmediately = function () {
        this.duration = 0;
    };
    __decorate([
        property(cc.Node)
    ], G1009BigwinActor.prototype, "content", void 0);
    __decorate([
        property(sp.Skeleton)
    ], G1009BigwinActor.prototype, "spine", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], G1009BigwinActor.prototype, "skeletonData", void 0);
    __decorate([
        property(cc.Label)
    ], G1009BigwinActor.prototype, "lblTotalWinPoint", void 0);
    G1009BigwinActor = __decorate([
        ccclass
    ], G1009BigwinActor);
    return G1009BigwinActor;
}(cc.Component));
exports.default = G1009BigwinActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvYmlnLXdpbi9ha2EtZzEwMDktYmlnLXdpbi1hY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RkFBbUU7QUFDbkUscUZBQThFO0FBQzlFLHdFQUFpRTtBQUMzRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDM0IsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUM7QUFDbkMsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUM7QUFDbkMsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUM7QUFDbkMsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBQzFCLElBQU0sdUJBQXVCLEdBQUcsRUFBRSxDQUFDO0FBR25DO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBa0hDO1FBL0dBLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFaEIsV0FBSyxHQUFnQixJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBRTdDLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUkxQixxQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM1QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLHVCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQyxjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQWtHOUIsQ0FBQztJQWhHVSxpQ0FBTSxHQUFoQjtRQUNDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sbUNBQVEsR0FBaEI7UUFDQywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FB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LENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksUUFBUSxHQUFHO1lBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQzNCLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyx3Q0FBYSxHQUFyQjtRQUNDLHlGQUF5RjtRQUN6RixrQ0FBa0M7SUFDbkMsQ0FBQztJQUVPLDRDQUFpQixHQUF6QjtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUE5R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO21EQUNZO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7MERBQ21CO0lBRTdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OERBQ2U7SUFUZCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWtIcEM7SUFBRCx1QkFBQztDQWxIRCxBQWtIQyxDQWxINkMsRUFBRSxDQUFDLFNBQVMsR0FrSHpEO2tCQWxIb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEcxMDA5VXRpbCBmcm9tIFwiLi4vLi4vYmFzZS9VdGlsL2FrYS1nMTAwOS1udW1iZXItY29udmVydGVyXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IHsgRzEwMDlCZXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYWthLWcxMDA5LWJldC1tb2RlbFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgRkFERV9EVVJBVElPTiA9IDAuMjU7XG5jb25zdCBDT1VOVF9QT0lOVF9EVVJBVElPTjEgPSAxLjc1O1xuY29uc3QgQ09VTlRfUE9JTlRfRFVSQVRJT04yID0gMC43NTtcbmNvbnN0IENPVU5UX1BPSU5UX0RVUkFUSU9OMyA9IDAuNzU7XG5jb25zdCBJRExFX0RVUkFUSU9OID0gMi41O1xuY29uc3QgU1VQRVJfV0lOX1RSSUdHRVJfUE9JTlQgPSAxMDtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5Qmlnd2luQWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxuXHRjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblx0QHByb3BlcnR5KHNwLlNrZWxldG9uKVxuXHRwcml2YXRlIHNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG5cdEBwcm9wZXJ0eShzcC5Ta2VsZXRvbkRhdGEpXG5cdHByaXZhdGUgc2tlbGV0b25EYXRhOiBzcC5Ta2VsZXRvbkRhdGEgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdGxibFRvdGFsV2luUG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuXHRwcml2YXRlIHR3ZWVuU2hvd1BvcHVwOiBjYy5Ud2Vlbjtcblx0cHJpdmF0ZSB0d2VlbkNvdW50UG9pbnQ6IGNjLlR3ZWVuO1xuXHRwcml2YXRlIGN1cnJlbnRXaW5Qb2ludDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSB0b3RhbFdpbjogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBpc1N0b3BJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGR1cmF0aW9uOiBudW1iZXIgPSA0O1xuXG5cdHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHRcdHRoaXMucmVnaXN0ZXIoKTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXIoKTogdm9pZCB7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkJpZ1dpblN0YXJ0ZWRcIiwgdGhpcy5vbkJpZ1dpblN0YXJ0ZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNwaW5TdGFydGVkXCIsIHRoaXMub25TcGluU3RhcnRlZC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3RvcEltbWVkaWF0ZWx5XCIsIHRoaXMub25TdG9wSW1tZWRpYXRlbHkuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRwcml2YXRlIG9uQmlnV2luU3RhcnRlZChwb2ludDogbnVtYmVyKTogdm9pZCB7XG5cdFx0Ly8gaWYgKHRoaXMuaXNTdG9wSW1tZWRpYXRlbHkpXG5cdFx0Ly8ge1xuXHRcdC8vIFx0dGhpcy5zcGVlZFVwQW5pbWF0aW9uKCk7XG5cdFx0Ly8gXHRyZXR1cm47XG5cdFx0Ly8gfVxuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQmlnV2luUHJlc2VudGF0aW9uU3RhcnRlZFwiKTtcblxuXHRcdGxldCBvYmpUd2VlbiA9IHtcblx0XHRcdHZhbHVlOiAwXG5cdFx0fTtcblxuXHRcdHRoaXMudG90YWxXaW4gPSBwb2ludDtcblxuXHRcdHRoaXMudHdlZW5TaG93UG9wdXAgPSBjYy50d2Vlbih0aGlzLnNwaW5lLm5vZGUpXG5cdFx0XHQudG8oRkFERV9EVVJBVElPTiwgeyBzY2FsZTogMSB9KVxuXHRcdFx0LmNhbGwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5zcGluZS5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZWxldG9uRGF0YTtcblx0XHRcdFx0dGhpcy5zcGluZS5zZXRTa2luKHRoaXMuZ2V0TmFtZVNraW5BbmltYXRpb24ocG9pbnQpKTtcblx0XHRcdFx0bGV0IHRyYWNrID0gdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuXHRcdFx0XHRjYy50d2Vlbih0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LnRvKEZBREVfRFVSQVRJT04sIHsgb3BhY2l0eTogMjU1IH0pXG5cdFx0XHRcdFx0LmNhbGwoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5jb3VudFBvaW50KG9ialR3ZWVuLCB0aGlzLnRvdGFsV2luLCB0aGlzLmR1cmF0aW9uIC0gRkFERV9EVVJBVElPTiAtIElETEVfRFVSQVRJT04pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XG5cdFx0XHR9KVxuXHRcdHRoaXMudHdlZW5TaG93UG9wdXAuc3RhcnQoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0TmFtZVNraW5BbmltYXRpb24ocG9pbnQ6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0dmFyIG5hbWVTa2luID0gcG9pbnQgLyBHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuR2V0VG90YWxCZXRQb2ludCgpID49IFNVUEVSX1dJTl9UUklHR0VSX1BPSU5UID8gXCJ0aGFuZ3NpZXVsb25cIiA6IFwidGhhbmdsb25cIjtcblx0XHRyZXR1cm4gbmFtZVNraW47XG5cdH1cblxuXHRwcml2YXRlIGNvdW50UG9pbnQob2JqVHdlZW46IHsgdmFsdWU6IG51bWJlcjsgfSwgcG9pbnQxOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIgPSAwLCBjYWxsYmFjayA9ICgpID0+IHsgfSkge1xuXHRcdHRoaXMudHdlZW5Db3VudFBvaW50ID0gY2MudHdlZW4ob2JqVHdlZW4pXG5cdFx0XHQuZGVsYXkoZGVsYXkpXG5cdFx0XHQudG8oZHVyYXRpb24sIHsgdmFsdWU6IHBvaW50MSB9LCB7XG5cdFx0XHRcdHByb2dyZXNzOiAoc3RhcnQ6IGFueSwgZW5kOiBhbnksIGN1cnJlbnQ6IGFueSwgcmF0aW86IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudFdpblBvaW50ID0gTWF0aC5yb3VuZChjdXJyZW50KTtcblx0XHRcdFx0XHR0aGlzLmxibFRvdGFsV2luUG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0V2l0aG91dENoYXJhY3Rlcih0aGlzLmN1cnJlbnRXaW5Qb2ludCk7XG5cdFx0XHRcdFx0cmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHJhdGlvO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhbGwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmxibFRvdGFsV2luUG9pbnQuc3RyaW5nID0gRzEwMDlVdGlsLkluc3RhbmNlKCkuTnVtYmVyRm9ybWF0V2l0aG91dENoYXJhY3Rlcihwb2ludDEpO1xuXHRcdFx0fSlcblx0XHRcdC5kZWxheShJRExFX0RVUkFUSU9OKVxuXHRcdFx0LmNhbGwoKCkgPT4ge1xuXHRcdFx0XHRjYy50d2Vlbih0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LnRvKEZBREVfRFVSQVRJT04sIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcblx0XHRcdFx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQmlnV2luQ29tcGxldGVkXCIpO1xuXHRcdFx0XHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XG5cdFx0XHR9KTtcblx0XHR0aGlzLnR3ZWVuQ291bnRQb2ludC5zdGFydCgpO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLnNwaW5lLnNrZWxldG9uRGF0YSA9IG51bGw7XG5cdFx0dGhpcy5sYmxUb3RhbFdpblBvaW50LnN0cmluZyA9IFwiXCI7XG5cdFx0dGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMuY29udGVudC5vcGFjaXR5ID0gMDtcblx0fVxuXG5cdHB1YmxpYyBzcGVlZFVwQW5pbWF0aW9uKCkge1xuXHRcdHRoaXMudHdlZW5Db3VudFBvaW50ICYmIHRoaXMudHdlZW5Db3VudFBvaW50LnN0b3AoKTtcblx0XHR0aGlzLnR3ZWVuU2hvd1BvcHVwICYmIHRoaXMudHdlZW5TaG93UG9wdXAuc3RvcCgpO1xuXHRcdGxldCBvYmpUd2VlbiA9IHtcblx0XHRcdHZhbHVlOiB0aGlzLmN1cnJlbnRXaW5Qb2ludFxuXHRcdH07XG5cdFx0dGhpcy5jb3VudFBvaW50KG9ialR3ZWVuLCB0aGlzLnRvdGFsV2luLCAwKTtcblx0fVxuXG5cdHByaXZhdGUgb25TcGluU3RhcnRlZCgpOiB2b2lkIHtcblx0XHQvLyB0aGlzLmR1cmF0aW9uID0gQ09VTlRfUE9JTlRfRFVSQVRJT04xICsgQ09VTlRfUE9JTlRfRFVSQVRJT04yICsgQ09VTlRfUE9JTlRfRFVSQVRJT04zO1xuXHRcdC8vIHRoaXMuaXNTdG9wSW1tZWRpYXRlbHkgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgb25TdG9wSW1tZWRpYXRlbHkoKTogdm9pZCB7XG5cdFx0dGhpcy5kdXJhdGlvbiA9IDA7XG5cdH1cbn1cbiJdfQ==