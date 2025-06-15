"use strict";
cc._RF.push(module, '010b7LT99BER7yd1GjDL1tR', 'aka-g1009-spin-state');
// Script/base/state-machine/state/aka-g1009-spin-state.ts

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
exports.G1009SpinState = void 0;
var aka_g1009_game_controller_1 = require("../../controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bet_state_1 = require("./aka-g1009-bet-state");
var aka_g1009_expand_wild_state_1 = require("./aka-g1009-expand-wild-state");
var aka_g1009_feature_trigger_state_1 = require("./aka-g1009-feature-trigger-state");
var aka_g1009_feature_win_state_1 = require("./aka-g1009-feature-win-state");
var aka_g1009_win_state_1 = require("./aka-g1009-win-state");
var G1009SpinState = /** @class */ (function (_super) {
    __extends(G1009SpinState, _super);
    function G1009SpinState() {
        var _this = _super.call(this) || this;
        console.log("spin state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("SpinStarted");
        }, 100);
        return _this;
    }
    G1009SpinState.prototype.SpinComplete = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().CheckExpandWild()) {
            return new aka_g1009_expand_wild_state_1.G1009ExpandwildState();
        }
        if (aka_g1009_game_controller_1.default.GetInstance().CheckWinLineData()) {
            return new aka_g1009_win_state_1.G1009WinState();
        }
        if (aka_g1009_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
            return new aka_g1009_feature_trigger_state_1.G1009FeatureTriggerState();
        }
        if (aka_g1009_game_controller_1.default.GetInstance().CheckFreespinContinue()) {
            return new G1009SpinState();
        }
        if (aka_g1009_game_controller_1.default.GetInstance().CheckFreespinEnd()) {
            return new aka_g1009_feature_win_state_1.G1009FeatureWinState();
        }
        if (aka_g1009_game_controller_1.default.GetInstance().IsActiveAuto()) {
            return new G1009SpinState();
        }
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    return G1009SpinState;
}(aka_g1009_state_1.State));
exports.G1009SpinState = G1009SpinState;

cc._RF.pop();