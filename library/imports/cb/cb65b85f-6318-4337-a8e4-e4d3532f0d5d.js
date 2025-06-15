"use strict";
cc._RF.push(module, 'cb65bhfYxhDN6jk5NNTLw1d', 'aka-g1009-feature-trigger-state');
// Script/base/state-machine/state/aka-g1009-feature-trigger-state.ts

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
exports.G1009FeatureTriggerState = void 0;
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bonus_state_1 = require("./aka-g1009-bonus-state");
var aka_g1009_feature_win_state_1 = require("./aka-g1009-feature-win-state");
var aka_g1009_spin_state_1 = require("./aka-g1009-spin-state");
var G1009FeatureTriggerState = /** @class */ (function (_super) {
    __extends(G1009FeatureTriggerState, _super);
    function G1009FeatureTriggerState() {
        var _this = _super.call(this) || this;
        console.log("Feature Trigger state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("featuretriggerstarted");
        }, 500);
        return _this;
    }
    G1009FeatureTriggerState.prototype.EnterFreespins = function () {
        return new aka_g1009_spin_state_1.G1009SpinState();
    };
    G1009FeatureTriggerState.prototype.FeatureComplete = function () {
        return new aka_g1009_feature_win_state_1.G1009FeatureWinState();
    };
    G1009FeatureTriggerState.prototype.EnterBonus = function () {
        return new aka_g1009_bonus_state_1.default();
    };
    return G1009FeatureTriggerState;
}(aka_g1009_state_1.State));
exports.G1009FeatureTriggerState = G1009FeatureTriggerState;

cc._RF.pop();