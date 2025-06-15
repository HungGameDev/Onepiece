"use strict";
cc._RF.push(module, 'f13e1XQdJFFtYczeGr0N2SW', 'aka-g1009-jackpot-actor');
// Script/UI/jackpot/aka-g1009-jackpot-actor.ts

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
var FADE_DURATION = 0.25;
var COUNT_POINT_DURATION = 2;
var IDLE_DURATION = 1;
var G1009JackpotActor = /** @class */ (function (_super) {
    __extends(G1009JackpotActor, _super);
    function G1009JackpotActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.spine = null;
        _this.skeletonData = null;
        _this.lblTotalWinPoint = null;
        _this.currentWinPoint = 0;
        _this.jackpotWinPoint = 0;
        _this.isStopImmediately = false;
        return _this;
    }
    G1009JackpotActor.prototype.onLoad = function () {
        this.reset();
        this.register();
    };
    G1009JackpotActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("JackpotStarted", this.onJackpotStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("WinDataRespond", this.onSetFinalReSource.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
    };
    G1009JackpotActor.prototype.onSetFinalReSource = function (finalResult) {
        this.jackpotWinPoint = finalResult.jackpotWinPoint;
    };
    G1009JackpotActor.prototype.onJackpotStarted = function () {
        var _this = this;
        if (this.isStopImmediately) {
            this.speedUpAnimation();
            return;
        }
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotPresentationStarted");
        var objTween = {
            value: 0
        };
        this.tweenShowPopup = cc.tween(this.spine.node)
            // .delay(4.6)
            .to(FADE_DURATION, { scale: 1 })
            .call(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotShow");
            _this.content.active = true;
            _this.spine.skeletonData = _this.skeletonData;
            _this.spine.setSkin("nohu");
            var track = _this.spine.setAnimation(0, "animation", true);
            // this.spine.setTrackCompleteListener(track, () => {
            // 	this.spine.setAnimation(0, "Loop", true);
            // });
            cc.tween(_this.content)
                .to(FADE_DURATION, { opacity: 255 })
                .call(function () {
                _this.countPoint(objTween, _this.jackpotWinPoint, COUNT_POINT_DURATION);
            })
                .start();
        }).start();
    };
    G1009JackpotActor.prototype.countPoint = function (objTween, point1, duration, delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
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
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotCompleted", _this.jackpotWinPoint);
                //this.transitionNextState();
                _this.reset();
            })
                .start();
        });
        this.tweenCountPoint.start();
    };
    G1009JackpotActor.prototype.transitionNextState = function () {
        // if (G1009GameController.GetInstance().CheckBonusFeatureTrigger())
        // {
        // 	G1009EventManager.GetInstance().notify("FeatureTrigger");
        // 	return;
        // }
        // if (G1009GameController.GetInstance().CheckFreespinContinue())
        // {
        // 	G1009EventManager.GetInstance().notify("Spin");
        // 	return;
        // }
        // if (G1009GameController.GetInstance().CheckFreespinEnd())
        // {
        // 	G1009EventManager.GetInstance().notify("FeatureComplete");
        // 	return;
        // }
        // G1009EventManager.GetInstance().notify("EndRound");
    };
    G1009JackpotActor.prototype.reset = function () {
        this.spine.skeletonData = null;
        this.lblTotalWinPoint.string = "";
        this.content.active = false;
        this.content.opacity = 0;
    };
    G1009JackpotActor.prototype.speedUpAnimation = function () {
        this.tweenCountPoint && this.tweenCountPoint.stop();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotCompleted", this.jackpotWinPoint);
        this.transitionNextState();
        this.reset();
    };
    G1009JackpotActor.prototype.onSpinStarted = function () {
        this.isStopImmediately = false;
    };
    G1009JackpotActor.prototype.onStopImmediately = function () {
        this.isStopImmediately = true;
    };
    __decorate([
        property(cc.Node)
    ], G1009JackpotActor.prototype, "content", void 0);
    __decorate([
        property(sp.Skeleton)
    ], G1009JackpotActor.prototype, "spine", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], G1009JackpotActor.prototype, "skeletonData", void 0);
    __decorate([
        property(cc.Label)
    ], G1009JackpotActor.prototype, "lblTotalWinPoint", void 0);
    G1009JackpotActor = __decorate([
        ccclass
    ], G1009JackpotActor);
    return G1009JackpotActor;
}(cc.Component));
exports.default = G1009JackpotActor;

cc._RF.pop();