"use strict";
cc._RF.push(module, 'f13e1XQdJFFtYczeGr0N2SW', 'Slot45-jackpot-actor');
// Script/UI/jackpot/Slot45-jackpot-actor.ts

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
var FADE_DURATION = 0.25;
var COUNT_POINT_DURATION = 2;
var IDLE_DURATION = 1;
var Slot45JackpotActor = /** @class */ (function (_super) {
    __extends(Slot45JackpotActor, _super);
    function Slot45JackpotActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.spine = null;
        _this.lblTotalWinPoint = null;
        _this.currentWinPoint = 0;
        _this.jackpotWinPoint = 0;
        _this.isStopImmediately = false;
        return _this;
    }
    Slot45JackpotActor.prototype.onLoad = function () {
        this.reset();
        this.register();
    };
    Slot45JackpotActor.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("JackpotStarted", this.onJackpotStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("WinDataRespond", this.onSetFinalReSource.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
    };
    Slot45JackpotActor.prototype.onSetFinalReSource = function (finalResult) {
        this.jackpotWinPoint = finalResult.jackpotWinPoint;
    };
    Slot45JackpotActor.prototype.onJackpotStarted = function () {
        var _this = this;
        // if (this.isStopImmediately)
        // {
        // 	this.speedUpAnimation();
        // 	return;
        // }
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("JackpotPresentationStarted");
        var objTween = {
            value: 0
        };
        this.tweenShowPopup = cc.tween(this.spine.node)
            // .delay(4.6)
            .to(FADE_DURATION, { scale: 1 })
            .call(function () {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("JackpotShow");
            _this.content.active = true;
            var track = _this.spine.setAnimation(0, "NH", true);
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
    Slot45JackpotActor.prototype.countPoint = function (objTween, point1, duration, delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
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
                Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("JackpotCompleted", _this.jackpotWinPoint);
                //this.transitionNextState();
                _this.reset();
            })
                .start();
        });
        this.tweenCountPoint.start();
    };
    Slot45JackpotActor.prototype.transitionNextState = function () {
        // if (Slot45GameController.GetInstance().CheckBonusFeatureTrigger())
        // {
        // 	Slot45EventManager.GetInstance().notify("FeatureTrigger");
        // 	return;
        // }
        // if (Slot45GameController.GetInstance().CheckFreespinContinue())
        // {
        // 	Slot45EventManager.GetInstance().notify("Spin");
        // 	return;
        // }
        // if (Slot45GameController.GetInstance().CheckFreespinEnd())
        // {
        // 	Slot45EventManager.GetInstance().notify("FeatureComplete");
        // 	return;
        // }
        // Slot45EventManager.GetInstance().notify("EndRound");
    };
    Slot45JackpotActor.prototype.reset = function () {
        this.lblTotalWinPoint.string = "";
        this.content.active = false;
        this.content.opacity = 0;
    };
    Slot45JackpotActor.prototype.speedUpAnimation = function () {
        this.tweenCountPoint && this.tweenCountPoint.stop();
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("JackpotCompleted", this.jackpotWinPoint);
        this.transitionNextState();
        this.reset();
    };
    Slot45JackpotActor.prototype.onSpinStarted = function () {
        this.isStopImmediately = false;
    };
    Slot45JackpotActor.prototype.onStopImmediately = function () {
        this.isStopImmediately = true;
    };
    __decorate([
        property(cc.Node)
    ], Slot45JackpotActor.prototype, "content", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot45JackpotActor.prototype, "spine", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45JackpotActor.prototype, "lblTotalWinPoint", void 0);
    Slot45JackpotActor = __decorate([
        ccclass
    ], Slot45JackpotActor);
    return Slot45JackpotActor;
}(cc.Component));
exports.default = Slot45JackpotActor;

cc._RF.pop();