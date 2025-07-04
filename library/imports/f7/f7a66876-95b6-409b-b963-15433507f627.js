"use strict";
cc._RF.push(module, 'f7a66h2lbZAm7ljFUM1B/Yn', 'Slot45-freespins-trigger-actor');
// Script/UI/freespins/Slot45-freespins-trigger-actor.ts

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
var Slot45_game_controller_1 = require("../../base/controller/Slot45-game-controller");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var Slot45_feature_trigger_actor_1 = require("../feature/Slot45-feature-trigger-actor");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45FreespinsTrigger = /** @class */ (function (_super) {
    __extends(Slot45FreespinsTrigger, _super);
    function Slot45FreespinsTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bannerCountFreespin = null;
        _this.bannerTriggerFreespin = null;
        return _this;
    }
    Slot45FreespinsTrigger.prototype.start = function () {
        _super.prototype.start.call(this);
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("resume", this.showContent.bind(this));
        this.resetBannerTrigger();
    };
    Slot45FreespinsTrigger.prototype.checkRuleTrigger = function () {
        return Slot45_game_controller_1.default.GetInstance().CheckFreespinTrigger();
    };
    Slot45FreespinsTrigger.prototype.notifyEnterFeature = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("EnterFreespins");
    };
    Slot45FreespinsTrigger.prototype.showContent = function () {
        var _this = this;
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_freewin", isLoop: false });
        this.content.active = true;
        cc.tween(this.bannerTriggerFreespin)
            .to(0.2, { opacity: 255, scale: 1 })
            .to(0.1, { scale: 1.2 })
            .to(0.1, { scale: 1 })
            .to(0.1, { scale: 1.1 })
            .to(0.1, { scale: 1 })
            .delay(1)
            .call(function () {
            _this.resetBannerTrigger();
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("CountFreespinsLeft");
            _this.bannerCountFreespin.active = true;
            cc.tween(_this.node)
                .delay(0.5)
                .call(function () {
                _this.notifyEnterFeature();
            }).start();
        })
            .start();
    };
    Slot45FreespinsTrigger.prototype.hideContent = function () {
        this.bannerCountFreespin.active = false;
    };
    Slot45FreespinsTrigger.prototype.resetBannerTrigger = function () {
        this.content.active = false;
        this.bannerTriggerFreespin.scale = 3;
        this.bannerTriggerFreespin.opacity = 0;
    };
    __decorate([
        property(cc.Node)
    ], Slot45FreespinsTrigger.prototype, "bannerCountFreespin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot45FreespinsTrigger.prototype, "bannerTriggerFreespin", void 0);
    Slot45FreespinsTrigger = __decorate([
        ccclass
    ], Slot45FreespinsTrigger);
    return Slot45FreespinsTrigger;
}(Slot45_feature_trigger_actor_1.default));
exports.default = Slot45FreespinsTrigger;

cc._RF.pop();