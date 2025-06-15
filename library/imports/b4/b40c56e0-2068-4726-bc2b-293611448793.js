"use strict";
cc._RF.push(module, 'b40c5bgIGhHJrwrKTYRRIeT', 'aka-g1009-feature-win-state');
// Script/base/state-machine/state/aka-g1009-feature-win-state.ts

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
var aka_g1009_game_controller_1 = require("../../controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bet_state_1 = require("./aka-g1009-bet-state");
var aka_g1009_feature_trigger_state_1 = require("./aka-g1009-feature-trigger-state");
var G1009FeatureWinState = /** @class */ (function (_super) {
    __extends(G1009FeatureWinState, _super);
    function G1009FeatureWinState() {
        var _this = _super.call(this) || this;
        console.log("Feature Win state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("featureWinstarted");
        }, 100);
        return _this;
    }
    G1009FeatureWinState.prototype.FeatureWinCompleted = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().CheckBonusFeatureTrigger()) {
            return new aka_g1009_feature_trigger_state_1.G1009FeatureTriggerState();
        }
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    return G1009FeatureWinState;
}(aka_g1009_state_1.State));
exports.G1009FeatureWinState = G1009FeatureWinState;

cc._RF.pop();