"use strict";
cc._RF.push(module, '1462bPo181EcI8EvdWthWiP', 'Slot45-freespins-content-activation-actor');
// Script/UI/freespins/Slot45-freespins-content-activation-actor.ts

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
var Slot45_feature_content_activation_actor_1 = require("../feature/Slot45-feature-content-activation-actor");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45FreespinsContentActivationActor = /** @class */ (function (_super) {
    __extends(Slot45FreespinsContentActivationActor, _super);
    function Slot45FreespinsContentActivationActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slot45FreespinsContentActivationActor.prototype.onLoad = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("resume", this.showContent.bind(this));
    };
    Slot45FreespinsContentActivationActor.prototype.checkRuleTrigger = function () {
        return Slot45_game_controller_1.default.GetInstance().CheckFreespinTrigger();
    };
    Slot45FreespinsContentActivationActor = __decorate([
        ccclass
    ], Slot45FreespinsContentActivationActor);
    return Slot45FreespinsContentActivationActor;
}(Slot45_feature_content_activation_actor_1.default));
exports.default = Slot45FreespinsContentActivationActor;

cc._RF.pop();