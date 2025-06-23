"use strict";
cc._RF.push(module, '010b7LT99BER7yd1GjDL1tR', 'Slot45-spin-state');
// Script/base/state-machine/state/Slot45-spin-state.ts

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
exports.Slot45SpinState = void 0;
var Slot45_game_controller_1 = require("../../controller/Slot45-game-controller");
var Slot45_event_manager_1 = require("../../events/Slot45-event-manager");
var Slot45_state_1 = require("../abstract/Slot45-state");
var Slot45_bet_state_1 = require("./Slot45-bet-state");
var Slot45_expand_wild_state_1 = require("./Slot45-expand-wild-state");
var Slot45_feature_trigger_state_1 = require("./Slot45-feature-trigger-state");
var Slot45_feature_win_state_1 = require("./Slot45-feature-win-state");
var Slot45_win_state_1 = require("./Slot45-win-state");
var Slot45SpinState = /** @class */ (function (_super) {
    __extends(Slot45SpinState, _super);
    function Slot45SpinState() {
        var _this = _super.call(this) || this;
        console.log("spin state");
        setTimeout(function () {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("SpinStarted");
        }, 100);
        return _this;
    }
    Slot45SpinState.prototype.SpinComplete = function () {
        if (Slot45_game_controller_1.default.GetInstance().CheckExpandWild()) {
            return new Slot45_expand_wild_state_1.Slot45ExpandwildState();
        }
        if (Slot45_game_controller_1.default.GetInstance().CheckWinLineData()) {
            return new Slot45_win_state_1.Slot45WinState();
        }
        if (Slot45_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
            return new Slot45_feature_trigger_state_1.Slot45FeatureTriggerState();
        }
        if (Slot45_game_controller_1.default.GetInstance().CheckFreespinContinue()) {
            return new Slot45SpinState();
        }
        if (Slot45_game_controller_1.default.GetInstance().CheckFreespinEnd()) {
            return new Slot45_feature_win_state_1.Slot45FeatureWinState();
        }
        if (Slot45_game_controller_1.default.GetInstance().IsActiveAuto()) {
            return new Slot45SpinState();
        }
        return new Slot45_bet_state_1.Slot45BetState();
    };
    return Slot45SpinState;
}(Slot45_state_1.State));
exports.Slot45SpinState = Slot45SpinState;

cc._RF.pop();