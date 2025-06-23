"use strict";
cc._RF.push(module, 'b40c5bgIGhHJrwrKTYRRIeT', 'Slot45-feature-win-state');
// Script/base/state-machine/state/Slot45-feature-win-state.ts

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
exports.G1009FeatureWinState = void 0;
var Slot45_game_controller_1 = require("../../controller/Slot45-game-controller");
var Slot45_event_manager_1 = require("../../events/Slot45-event-manager");
var Slot45_state_1 = require("../abstract/Slot45-state");
var Slot45_bet_state_1 = require("./Slot45-bet-state");
var Slot45_feature_trigger_state_1 = require("./Slot45-feature-trigger-state");
var Slot45_spin_state_1 = require("./Slot45-spin-state");
var G1009FeatureWinState = /** @class */ (function (_super) {
    __extends(G1009FeatureWinState, _super);
    function G1009FeatureWinState() {
        var _this = _super.call(this) || this;
        console.log("Feature Win state");
        setTimeout(function () {
            Slot45_event_manager_1.G1009EventManager.GetInstance().notify("featureWinstarted");
        }, 100);
        return _this;
    }
    G1009FeatureWinState.prototype.FeatureWinCompleted = function () {
        if (Slot45_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
            return new Slot45_feature_trigger_state_1.G1009FeatureTriggerState();
        }
        else if (Slot45_game_controller_1.default.GetInstance().IsActiveAuto())
            return new Slot45_spin_state_1.G1009SpinState();
        return new Slot45_bet_state_1.G1009BetState();
    };
    return G1009FeatureWinState;
}(Slot45_state_1.State));
exports.G1009FeatureWinState = G1009FeatureWinState;

cc._RF.pop();