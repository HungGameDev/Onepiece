"use strict";
cc._RF.push(module, 'c6f5fdJ2HNM8J4tYAiRZc9X', 'Slot45-expand-wild-state');
// Script/base/state-machine/state/Slot45-expand-wild-state.ts

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
var Slot45_game_controller_1 = require("../../controller/Slot45-game-controller");
var Slot45_event_manager_1 = require("../../events/Slot45-event-manager");
var Slot45_state_1 = require("../abstract/Slot45-state");
var Slot45_bet_state_1 = require("./Slot45-bet-state");
var Slot45_feature_trigger_state_1 = require("./Slot45-feature-trigger-state");
var Slot45_feature_win_state_1 = require("./Slot45-feature-win-state");
var Slot45_spin_state_1 = require("./Slot45-spin-state");
var Slot45_win_state_1 = require("./Slot45-win-state");
var G1009ExpandwildState = /** @class */ (function (_super) {
    __extends(G1009ExpandwildState, _super);
    function G1009ExpandwildState() {
        var _this = _super.call(this) || this;
        console.log("Expand wild state");
        setTimeout(function () {
            Slot45_event_manager_1.G1009EventManager.GetInstance().notify("ExpandWildStarted", Slot45_game_controller_1.default.GetInstance().GetExpandWildIndices());
        }, 100);
        return _this;
    }
    G1009ExpandwildState.prototype.ExpandWildCompleted = function () {
        if (Slot45_game_controller_1.default.GetInstance().CheckWinLineData()) {
            return new Slot45_win_state_1.G1009WinState();
        }
        if (Slot45_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
            return new Slot45_feature_trigger_state_1.G1009FeatureTriggerState();
        }
        if (Slot45_game_controller_1.default.GetInstance().CheckFreespinContinue()) {
            return new Slot45_spin_state_1.G1009SpinState();
        }
        if (Slot45_game_controller_1.default.GetInstance().CheckFreespinEnd()) {
            return new Slot45_feature_win_state_1.G1009FeatureWinState();
        }
        return new Slot45_bet_state_1.G1009BetState();
    };
    return G1009ExpandwildState;
}(Slot45_state_1.State));
exports.G1009ExpandwildState = G1009ExpandwildState;

cc._RF.pop();