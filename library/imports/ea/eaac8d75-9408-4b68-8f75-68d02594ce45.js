"use strict";
cc._RF.push(module, 'eaac811lAhLaI91aNAllM5F', 'aka-g1009-bonus-trigger-actor');
// Script/UI/bonus-game/aka-g1009-bonus-trigger-actor.ts

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
var aka_g1009_game_controller_1 = require("../../base/controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_feature_trigger_actor_1 = require("../feature/aka-g1009-feature-trigger-actor");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009BonusTrigger = /** @class */ (function (_super) {
    __extends(G1009BonusTrigger, _super);
    function G1009BonusTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineTransition = null;
        return _this;
    }
    G1009BonusTrigger.prototype.checkRuleTrigger = function () {
        return aka_g1009_game_controller_1.default.GetInstance().CheckBonusPointTrigger();
    };
    G1009BonusTrigger.prototype.notifyEnterFeature = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("EnterBonus", aka_g1009_game_controller_1.default.GetInstance().GetWinBonus());
    };
    G1009BonusTrigger.prototype.showContent = function () {
        var _this = this;
        this.notifyEnterFeature();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_bonustransition", isLoop: false });
        this.spineTransition.node.active = true;
        this.spineTransition.setAnimation(0, "animation", false);
        cc.tween(this.node).delay(2).call(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BonusWinComplete");
            _this.reset();
        }).start();
    };
    G1009BonusTrigger.prototype.reset = function () {
        this.spineTransition.node.active = false;
    };
    __decorate([
        property(sp.Skeleton)
    ], G1009BonusTrigger.prototype, "spineTransition", void 0);
    G1009BonusTrigger = __decorate([
        ccclass
    ], G1009BonusTrigger);
    return G1009BonusTrigger;
}(aka_g1009_feature_trigger_actor_1.default));
exports.default = G1009BonusTrigger;

cc._RF.pop();