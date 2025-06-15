"use strict";
cc._RF.push(module, '4a420y8ukRNW5KigsyQPVvM', 'aka-g1009-jackpot-state');
// Script/base/state-machine/state/aka-g1009-jackpot-state.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.G1009JackpotState = void 0;
var aka_g1009_game_controller_1 = require("../../controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bet_state_1 = require("./aka-g1009-bet-state");
var aka_g1009_feature_trigger_state_1 = require("./aka-g1009-feature-trigger-state");
var aka_g1009_feature_win_state_1 = require("./aka-g1009-feature-win-state");
var aka_g1009_spin_state_1 = require("./aka-g1009-spin-state");
var G1009JackpotState = /** @class */ (function (_super) {
    __extends(G1009JackpotState, _super);
    function G1009JackpotState() {
        var _this = _super.call(this) || this;
        console.log("Jackpot state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotStarted");
        }, 100);
        return _this;
    }
    G1009JackpotState.prototype.FeatureTrigger = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
            return new aka_g1009_feature_trigger_state_1.G1009FeatureTriggerState();
        }
        if (aka_g1009_game_controller_1.default.GetInstance().CheckFreespinContinue()) {
            return new aka_g1009_spin_state_1.G1009SpinState();
        }
        if (aka_g1009_game_controller_1.default.GetInstance().CheckFreespinEnd()) {
            return new aka_g1009_feature_win_state_1.G1009FeatureWinState();
        }
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    G1009JackpotState.prototype.FeatureComplete = function () {
        return new aka_g1009_feature_win_state_1.G1009FeatureWinState();
    };
    G1009JackpotState.prototype.Spin = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().CheckFreespinContinue()) {
            return new aka_g1009_spin_state_1.G1009SpinState();
        }
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    G1009JackpotState.prototype.EndRound = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().IsActiveAuto())
            return new aka_g1009_spin_state_1.G1009SpinState();
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    return G1009JackpotState;
}(aka_g1009_state_1.State));
exports.G1009JackpotState = G1009JackpotState;

cc._RF.pop();