"use strict";
cc._RF.push(module, '523968PExxFx6lA5JFPNAsk', 'Slot45-slotty-setting');
// Script/Slot45-slotty-setting.ts

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
var Slot45_event_manager_1 = require("./base/events/Slot45-event-manager");
var Slot45_init_state_1 = require("./base/state-machine/state/Slot45-init-state");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45SlottySetting = /** @class */ (function (_super) {
    __extends(Slot45SlottySetting, _super);
    function Slot45SlottySetting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new Slot45_init_state_1.Slot45InitState();
        return _this;
    }
    Slot45SlottySetting.prototype.start = function () {
        this.showCurrentState();
        this.register();
    };
    Slot45SlottySetting.prototype.showCurrentState = function () {
        console.log(this.state);
    };
    Slot45SlottySetting.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("Init", this.onInit.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("Bet", this.onBet.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ActiveAuto", this.onSpin.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("spin", this.onSpin.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinComplete", this.onSpinComplete.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("FeatureTrigger", this.onFeatureTrigger.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("FeatureComplete", this.onFeatureComplete.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("EnterBonus", this.onEnterBonus.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("resumeBonus", this.onEnterBonus.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ExpandWildCompleted", this.onExpandWildCompleted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("EndRound", this.onEndRound.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("JackpotTriggered", this.onJackpotTriggered.bind(this));
    };
    Slot45SlottySetting.prototype.onInit = function () {
        this.state = this.state.Init();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onBet = function () {
        this.state = this.state.Spin();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onSpin = function () {
        this.state = this.state.Spin();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onSpinComplete = function () {
        this.state = this.state.SpinComplete();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onFeatureTrigger = function () {
        this.state = this.state.FeatureTrigger();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onEnterFreespins = function () {
        this.state = this.state.EnterFreespins();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onEnterBonus = function () {
        this.state = this.state.EnterBonus();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onFeatureComplete = function () {
        this.state = this.state.FeatureComplete();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onFeatureWinCompleted = function () {
        this.state = this.state.FeatureWinCompleted();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onExpandWildCompleted = function () {
        this.state = this.state.ExpandWildCompleted();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onEndRound = function () {
        this.state = this.state.EndRound();
        this.showCurrentState();
    };
    Slot45SlottySetting.prototype.onJackpotTriggered = function () {
        this.state = this.state.JackpotTriggered();
        this.showCurrentState();
    };
    Slot45SlottySetting = __decorate([
        ccclass
    ], Slot45SlottySetting);
    return Slot45SlottySetting;
}(cc.Component));
exports.default = Slot45SlottySetting;

cc._RF.pop();