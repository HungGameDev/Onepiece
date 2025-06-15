"use strict";
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