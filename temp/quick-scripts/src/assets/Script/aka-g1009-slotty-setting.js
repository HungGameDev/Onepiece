"use strict";
cc._RF.push(module, '523968PExxFx6lA5JFPNAsk', 'aka-g1009-slotty-setting');
// Script/aka-g1009-slotty-setting.ts

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
var aka_g1009_event_manager_1 = require("./base/events/aka-g1009-event-manager");
var aka_g1009_init_state_1 = require("./base/state-machine/state/aka-g1009-init-state");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SlottySetting = /** @class */ (function (_super) {
    __extends(G1009SlottySetting, _super);
    function G1009SlottySetting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new aka_g1009_init_state_1.G1009InitState();
        return _this;
    }
    G1009SlottySetting.prototype.start = function () {
        this.showCurrentState();
        this.register();
    };
    G1009SlottySetting.prototype.showCurrentState = function () {
        console.log(this.state);
    };
    G1009SlottySetting.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Init", this.onInit.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Bet", this.onBet.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ActiveAuto", this.onSpin.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("spin", this.onSpin.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinComplete", this.onSpinComplete.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("FeatureTrigger", this.onFeatureTrigger.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("FeatureComplete", this.onFeatureComplete.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EnterBonus", this.onEnterBonus.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resumeBonus", this.onEnterBonus.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ExpandWildCompleted", this.onExpandWildCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EndRound", this.onEndRound.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("JackpotTriggered", this.onJackpotTriggered.bind(this));
    };
    G1009SlottySetting.prototype.onInit = function () {
        this.state = this.state.Init();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onBet = function () {
        this.state = this.state.Spin();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onSpin = function () {
        this.state = this.state.Spin();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onSpinComplete = function () {
        this.state = this.state.SpinComplete();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onFeatureTrigger = function () {
        this.state = this.state.FeatureTrigger();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onEnterFreespins = function () {
        this.state = this.state.EnterFreespins();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onEnterBonus = function () {
        this.state = this.state.EnterBonus();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onFeatureComplete = function () {
        this.state = this.state.FeatureComplete();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onFeatureWinCompleted = function () {
        this.state = this.state.FeatureWinCompleted();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onExpandWildCompleted = function () {
        this.state = this.state.ExpandWildCompleted();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onEndRound = function () {
        this.state = this.state.EndRound();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onJackpotTriggered = function () {
        this.state = this.state.JackpotTriggered();
        this.showCurrentState();
    };
    G1009SlottySetting = __decorate([
        ccclass
    ], G1009SlottySetting);
    return G1009SlottySetting;
}(cc.Component));
exports.default = G1009SlottySetting;

cc._RF.pop();