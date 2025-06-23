"use strict";
cc._RF.push(module, '0dedaTH9XxG7qmaADUi0lnI', 'Slot45-big-win-actor');
// Script/UI/big-win/Slot45-big-win-actor.ts

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
var Slot45_bet_model_1 = require("../../models/Slot45-bet-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FADE_DURATION = 0.25;
var COUNT_POINT_DURATION1 = 1.75;
var COUNT_POINT_DURATION2 = 0.75;
var COUNT_POINT_DURATION3 = 0.75;
var IDLE_DURATION = 2.5;
var SUPER_WIN_TRIGGER_POINT = 10;
var Slot45BigwinActor = /** @class */ (function (_super) {
    __extends(Slot45BigwinActor, _super);
    function Slot45BigwinActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.spine = null;
        _this.skeletonDataTL = null;
        _this.skeletonDataTSL = null;
        _this.lblTotalWinPoint = null;
        _this.currentWinPoint = 0;
        _this.totalWin = 0;
        _this.isStopImmediately = false;
        _this.duration = 4;
        return _this;
    }
    Slot45BigwinActor.prototype.onLoad = function () {
        this.reset();
        this.register();
    };
    Slot45BigwinActor.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("BigWinStarted", this.onBigWinStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
    };
    Slot45BigwinActor.prototype.onBigWinStarted = function (point) {
        var _this = this;
        // if (this.isStopImmediately)
        // {
        // 	this.speedUpAnimation();
        // 	return;
        // }
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("BigWinPresentationStarted");
        var objTween = {
            value: 0
        };
        this.totalWin = point;
        var multi = point / Slot45_bet_model_1.Slot45BetModel.GetInstance().GetTotalBetPoint();
        this.spine.node.y = multi >= SUPER_WIN_TRIGGER_POINT ? 56 : -90;
        this.tweenShowPopup = cc.tween(this.spine.node)
            .to(FADE_DURATION, { scale: 1 })
            .call(function () {
            _this.content.active = true;
            _this.spine.skeletonData = _this.getAnimation(multi);
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
    Slot45BigwinActor.prototype.getAnimation = function (multi) {
        var skeletonData = multi >= SUPER_WIN_TRIGGER_POINT ? this.skeletonDataTSL : this.skeletonDataTL;
        return skeletonData;
    };
    Slot45BigwinActor.prototype.countPoint = function (objTween, point1, duration, delay, callback) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        if (callback === void 0) { callback = function () { }; }
        this.tweenCountPoint = cc.tween(objTween)
            .delay(delay)
            .to(duration, { value: point1 }, {
            progress: function (start, end, current, ratio) {
                _this.currentWinPoint = Math.round(current);
                _this.lblTotalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(_this.currentWinPoint);
                return start + (end - start) * ratio;
            }
        })
            .call(function () {
            _this.lblTotalWinPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(point1);
        })
            .delay(IDLE_DURATION)
            .call(function () {
            cc.tween(_this.content)
                .to(FADE_DURATION, { opacity: 0 }).call(function () {
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("BigWinCompleted");
                _this.reset();
            })
                .start();
        });
        this.tweenCountPoint.start();
    };
    Slot45BigwinActor.prototype.reset = function () {
        this.spine.skeletonData = null;
        this.lblTotalWinPoint.string = "";
        this.content.active = false;
        this.content.opacity = 0;
    };
    Slot45BigwinActor.prototype.speedUpAnimation = function () {
        this.tweenCountPoint && this.tweenCountPoint.stop();
        this.tweenShowPopup && this.tweenShowPopup.stop();
        var objTween = {
            value: this.currentWinPoint
        };
        this.countPoint(objTween, this.totalWin, 0);
    };
    Slot45BigwinActor.prototype.onSpinStarted = function () {
        // this.duration =4;
        // this.isStopImmediately = false;
    };
    Slot45BigwinActor.prototype.onStopImmediately = function () {
        // this.duration = 0;
    };
    __decorate([
        property(cc.Node)
    ], Slot45BigwinActor.prototype, "content", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot45BigwinActor.prototype, "spine", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], Slot45BigwinActor.prototype, "skeletonDataTL", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], Slot45BigwinActor.prototype, "skeletonDataTSL", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45BigwinActor.prototype, "lblTotalWinPoint", void 0);
    Slot45BigwinActor = __decorate([
        ccclass
    ], Slot45BigwinActor);
    return Slot45BigwinActor;
}(cc.Component));
exports.default = Slot45BigwinActor;

cc._RF.pop();