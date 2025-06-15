"use strict";
cc._RF.push(module, 'e694d5qgZxNNrNT4uZC6CvJ', 'aka-g1009-win-state');
// Script/base/state-machine/state/aka-g1009-win-state.ts

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
exports.G1009WinState = void 0;
var aka_g1009_game_controller_1 = require("../../controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bet_state_1 = require("./aka-g1009-bet-state");
var aka_g1009_feature_trigger_state_1 = require("./aka-g1009-feature-trigger-state");
var aka_g1009_feature_win_state_1 = require("./aka-g1009-feature-win-state");
var aka_g1009_jackpot_state_1 = require("./aka-g1009-jackpot-state");
var aka_g1009_spin_state_1 = require("./aka-g1009-spin-state");
var G1009WinState = /** @class */ (function (_super) {
    __extends(G1009WinState, _super);
    function G1009WinState() {
        var _this = _super.call(this) || this;
        console.log("Win state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("PresentWinStart");
        }, 100);
        return _this;
    }
    G1009WinState.prototype.FeatureTrigger = function () {
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
    G1009WinState.prototype.FeatureComplete = function () {
        return new aka_g1009_feature_win_state_1.G1009FeatureWinState();
    };
    G1009WinState.prototype.Spin = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().CheckFreespinContinue()) {
            return new aka_g1009_spin_state_1.G1009SpinState();
        }
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    G1009WinState.prototype.EndRound = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().IsActiveAuto())
            return new aka_g1009_spin_state_1.G1009SpinState();
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    G1009WinState.prototype.JackpotTriggered = function () {
        return new aka_g1009_jackpot_state_1.G1009JackpotState();
    };
    return G1009WinState;
}(aka_g1009_state_1.State));
exports.G1009WinState = G1009WinState;

cc._RF.pop();