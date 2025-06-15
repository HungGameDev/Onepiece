"use strict";
cc._RF.push(module, 'c6f5fdJ2HNM8J4tYAiRZc9X', 'aka-g1009-expand-wild-state');
// Script/base/state-machine/state/aka-g1009-expand-wild-state.ts

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
exports.G1009ExpandwildState = void 0;
var aka_g1009_game_controller_1 = require("../../controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bet_state_1 = require("./aka-g1009-bet-state");
var aka_g1009_feature_trigger_state_1 = require("./aka-g1009-feature-trigger-state");
var aka_g1009_feature_win_state_1 = require("./aka-g1009-feature-win-state");
var aka_g1009_spin_state_1 = require("./aka-g1009-spin-state");
var aka_g1009_win_state_1 = require("./aka-g1009-win-state");
var G1009ExpandwildState = /** @class */ (function (_super) {
    __extends(G1009ExpandwildState, _super);
    function G1009ExpandwildState() {
        var _this = _super.call(this) || this;
        console.log("Expand wild state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ExpandWildStarted", aka_g1009_game_controller_1.default.GetInstance().GetExpandWildIndices());
        }, 100);
        return _this;
    }
    G1009ExpandwildState.prototype.ExpandWildCompleted = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().CheckWinLineData()) {
            return new aka_g1009_win_state_1.G1009WinState();
        }
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
    return G1009ExpandwildState;
}(aka_g1009_state_1.State));
exports.G1009ExpandwildState = G1009ExpandwildState;

cc._RF.pop();