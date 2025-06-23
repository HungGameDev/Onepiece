"use strict";
cc._RF.push(module, 'cb65bhfYxhDN6jk5NNTLw1d', 'Slot45-feature-trigger-state');
// Script/base/state-machine/state/Slot45-feature-trigger-state.ts

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
var Slot45_event_manager_1 = require("../../events/Slot45-event-manager");
var Slot45_state_1 = require("../abstract/Slot45-state");
var Slot45_bonus_state_1 = require("./Slot45-bonus-state");
var Slot45_feature_win_state_1 = require("./Slot45-feature-win-state");
var Slot45_spin_state_1 = require("./Slot45-spin-state");
var G1009FeatureTriggerState = /** @class */ (function (_super) {
    __extends(G1009FeatureTriggerState, _super);
    function G1009FeatureTriggerState() {
        var _this = _super.call(this) || this;
        console.log("Feature Trigger state");
        setTimeout(function () {
            Slot45_event_manager_1.G1009EventManager.GetInstance().notify("featuretriggerstarted");
        }, 500);
        return _this;
    }
    G1009FeatureTriggerState.prototype.EnterFreespins = function () {
        return new Slot45_spin_state_1.G1009SpinState();
    };
    G1009FeatureTriggerState.prototype.FeatureComplete = function () {
        return new Slot45_feature_win_state_1.G1009FeatureWinState();
    };
    G1009FeatureTriggerState.prototype.EnterBonus = function () {
        return new Slot45_bonus_state_1.default();
    };
    return G1009FeatureTriggerState;
}(Slot45_state_1.State));
exports.G1009FeatureTriggerState = G1009FeatureTriggerState;

cc._RF.pop();