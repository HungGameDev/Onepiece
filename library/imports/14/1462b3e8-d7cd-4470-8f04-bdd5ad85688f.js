"use strict";
cc._RF.push(module, '1462bPo181EcI8EvdWthWiP', 'aka-g1009-freespins-content-activation-actor');
// Script/UI/freespins/aka-g1009-freespins-content-activation-actor.ts

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
var aka_g1009_feature_content_activation_actor_1 = require("../feature/aka-g1009-feature-content-activation-actor");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009FreespinsContentActivationActor = /** @class */ (function (_super) {
    __extends(G1009FreespinsContentActivationActor, _super);
    function G1009FreespinsContentActivationActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    G1009FreespinsContentActivationActor.prototype.onLoad = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resume", this.showContent.bind(this));
    };
    G1009FreespinsContentActivationActor.prototype.checkRuleTrigger = function () {
        return aka_g1009_game_controller_1.default.GetInstance().CheckFreespinTrigger();
    };
    G1009FreespinsContentActivationActor = __decorate([
        ccclass
    ], G1009FreespinsContentActivationActor);
    return G1009FreespinsContentActivationActor;
}(aka_g1009_feature_content_activation_actor_1.default));
exports.default = G1009FreespinsContentActivationActor;

cc._RF.pop();