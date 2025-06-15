
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/state-machine/state/aka-g1009-feature-trigger-state.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zdGF0ZS1tYWNoaW5lL3N0YXRlL2FrYS1nMTAwOS1mZWF0dXJlLXRyaWdnZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdGQUF5RTtBQUN6RSwrREFBb0Q7QUFDcEQsaUVBQXNEO0FBQ3RELDZFQUFrRztBQUNsRywrREFBd0Q7QUFFeEQ7SUFBOEMsNENBQUs7SUFDbEQ7UUFBQSxZQUNDLGlCQUFPLFNBS1A7UUFKQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsVUFBVSxDQUFDO1lBQ1YsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDakUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQUNULENBQUM7SUFFRCxpREFBYyxHQUFkO1FBQ0MsT0FBTyxJQUFJLHFDQUFjLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0RBQWUsR0FBZjtRQUNDLE9BQU8sSUFBSSxrREFBeUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFDRCw2Q0FBVSxHQUFWO1FBQ0MsT0FBTyxJQUFJLCtCQUFlLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ0YsK0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxDQW5CNkMsdUJBQUssR0FtQmxEO0FBbkJZLDREQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vYWJzdHJhY3QvYWthLWcxMDA5LXN0YXRlXCI7XG5pbXBvcnQgRzEwMDlCb251c1N0YXRlIGZyb20gXCIuL2FrYS1nMTAwOS1ib251cy1zdGF0ZVwiO1xuaW1wb3J0IHsgRzEwMDlGZWF0dXJlV2luU3RhdGUgYXMgRzEwMDlGZWF0dXJlQ29tcGxldGVTdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1mZWF0dXJlLXdpbi1zdGF0ZVwiO1xuaW1wb3J0IHsgRzEwMDlTcGluU3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktc3Bpbi1zdGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgRzEwMDlGZWF0dXJlVHJpZ2dlclN0YXRlIGV4dGVuZHMgU3RhdGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnNvbGUubG9nKFwiRmVhdHVyZSBUcmlnZ2VyIHN0YXRlXCIpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJmZWF0dXJldHJpZ2dlcnN0YXJ0ZWRcIik7XG5cdFx0fSwgNTAwKTtcblx0fVxuXG5cdEVudGVyRnJlZXNwaW5zKCk6IFN0YXRlIHtcblx0XHRyZXR1cm4gbmV3IEcxMDA5U3BpblN0YXRlKCk7XG5cdH1cblxuXHRGZWF0dXJlQ29tcGxldGUoKTogU3RhdGUge1xuXHRcdHJldHVybiBuZXcgRzEwMDlGZWF0dXJlQ29tcGxldGVTdGF0ZSgpO1xuXHR9XG5cdEVudGVyQm9udXMoKTogU3RhdGUge1xuXHRcdHJldHVybiBuZXcgRzEwMDlCb251c1N0YXRlKCk7XG5cdH1cbn0iXX0=