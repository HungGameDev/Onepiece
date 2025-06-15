"use strict";
cc._RF.push(module, 'f7a66h2lbZAm7ljFUM1B/Yn', 'aka-g1009-freespins-trigger-actor');
// Script/UI/freespins/aka-g1009-freespins-trigger-actor.ts

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
var G1009FreespinsTrigger = /** @class */ (function (_super) {
    __extends(G1009FreespinsTrigger, _super);
    function G1009FreespinsTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spine = null;
        _this.bannerCountFreespin = null;
        return _this;
    }
    G1009FreespinsTrigger.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featuretriggerstarted", this.onFeatureTrigger.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resume", this.showContent.bind(this));
    };
    G1009FreespinsTrigger.prototype.checkRuleTrigger = function () {
        return aka_g1009_game_controller_1.default.GetInstance().CheckFreespinTrigger();
    };
    G1009FreespinsTrigger.prototype.notifyEnterFeature = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("EnterFreespins");
    };
    G1009FreespinsTrigger.prototype.showContent = function () {
        var _this = this;
        if (this.spine == null)
            return;
        this.bannerCountFreespin.active = true;
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_freewin", isLoop: false });
        this.spine.node.active = true;
        this.spine.setAnimation(0, "animation", false);
        cc.tween(this.bannerCountFreespin).delay(4).to(0.2, { scale: 0.9 }).to(0.2, { scale: 1 }).start();
        cc.tween(this.node).delay(5).call(function () {
            _this.notifyEnterFeature();
        }).delay(1).call(function () {
            _this.reset();
        }).start();
    };
    G1009FreespinsTrigger.prototype.reset = function () {
        this.spine.node.active = false;
    };
    __decorate([
        property(sp.Skeleton)
    ], G1009FreespinsTrigger.prototype, "spine", void 0);
    __decorate([
        property(cc.Node)
    ], G1009FreespinsTrigger.prototype, "bannerCountFreespin", void 0);
    G1009FreespinsTrigger = __decorate([
        ccclass
    ], G1009FreespinsTrigger);
    return G1009FreespinsTrigger;
}(aka_g1009_feature_trigger_actor_1.default));
exports.default = G1009FreespinsTrigger;

cc._RF.pop();