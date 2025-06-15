"use strict";
cc._RF.push(module, 'dbd728+/IZGz51oSaitenjo', 'aka-g1009-bonus-state');
// Script/base/state-machine/state/aka-g1009-bonus-state.ts

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
var aka_g1009_game_controller_1 = require("../../controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bet_state_1 = require("./aka-g1009-bet-state");
var aka_g1009_feature_trigger_state_1 = require("./aka-g1009-feature-trigger-state");
var aka_g1009_spin_state_1 = require("./aka-g1009-spin-state");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009BonusState = /** @class */ (function (_super) {
    __extends(G1009BonusState, _super);
    function G1009BonusState() {
        var _this = _super.call(this) || this;
        console.log("bonus state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BonusWinStarted");
        }, 100);
        return _this;
    }
    G1009BonusState.prototype.FeatureComplete = function () {
        return new aka_g1009_spin_state_1.G1009SpinState();
    };
    G1009BonusState.prototype.FeatureWinCompleted = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
            return new aka_g1009_feature_trigger_state_1.G1009FeatureTriggerState();
        }
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    G1009BonusState = __decorate([
        ccclass
    ], G1009BonusState);
    return G1009BonusState;
}(aka_g1009_state_1.State));
exports.default = G1009BonusState;

cc._RF.pop();