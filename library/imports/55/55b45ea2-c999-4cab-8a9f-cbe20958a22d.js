"use strict";
cc._RF.push(module, '55b456iyZlMq4qfy+IJWKIt', 'aka-g1009-freespins-retrigger-actor');
// Script/UI/freespins/aka-g1009-freespins-retrigger-actor.ts

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
var G1009FreespinsRetrigger = /** @class */ (function (_super) {
    __extends(G1009FreespinsRetrigger, _super);
    function G1009FreespinsRetrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spine = null;
        return _this;
    }
    G1009FreespinsRetrigger.prototype.checkRuleTrigger = function () {
        return aka_g1009_game_controller_1.default.GetInstance().CheckFreespinRetrigger();
    };
    G1009FreespinsRetrigger.prototype.notifyEnterFeature = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("EnterFreespins");
    };
    G1009FreespinsRetrigger.prototype.showContent = function () {
        var _this = this;
        this.spine.node.active = true;
        this.spine.setAnimation(0, "Transition", false);
        cc.tween(this.node).delay(5).call(function () {
            _this.notifyEnterFeature();
        }).delay(3).call(function () {
            _this.reset();
        }).start();
    };
    G1009FreespinsRetrigger.prototype.reset = function () {
        this.spine.node.active = false;
    };
    __decorate([
        property(sp.Skeleton)
    ], G1009FreespinsRetrigger.prototype, "spine", void 0);
    G1009FreespinsRetrigger = __decorate([
        ccclass
    ], G1009FreespinsRetrigger);
    return G1009FreespinsRetrigger;
}(aka_g1009_feature_trigger_actor_1.default));
exports.default = G1009FreespinsRetrigger;

cc._RF.pop();