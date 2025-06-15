
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/state-machine/state/aka-g1009-spin-state.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zdGF0ZS1tYWNoaW5lL3N0YXRlL2FrYS1nMTAwOS1zcGluLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBNkU7QUFDN0UsZ0ZBQXlFO0FBQ3pFLCtEQUFvRDtBQUNwRCw2REFBc0Q7QUFDdEQsNkVBQXFFO0FBQ3JFLHFGQUE2RTtBQUM3RSw2RUFBcUU7QUFDckUsNkRBQXNEO0FBRXREO0lBQW9DLGtDQUFLO0lBQ3hDO1FBQUEsWUFDQyxpQkFBTyxTQUtQO1FBSkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixVQUFVLENBQUM7WUFDViwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQUNULENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQ0MsSUFBSSxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFDdkQ7WUFDQyxPQUFPLElBQUksa0RBQW9CLEVBQUUsQ0FBQztTQUNsQztRQUNELElBQUksbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsRUFDeEQ7WUFDQyxPQUFPLElBQUksbUNBQWEsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxFQUNoRTtZQUNDLE9BQU8sSUFBSSwwREFBd0IsRUFBRSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxFQUM3RDtZQUNDLE9BQU8sSUFBSSxjQUFjLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsRUFDeEQ7WUFDQyxPQUFPLElBQUksa0RBQW9CLEVBQUUsQ0FBQztTQUNsQztRQUNELElBQUksbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQ3BEO1lBQ0MsT0FBTyxJQUFJLGNBQWMsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLG1DQUFhLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxDQXBDbUMsdUJBQUssR0FvQ3hDO0FBcENZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEcxMDA5R2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXIvYWthLWcxMDA5LWdhbWUtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9hYnN0cmFjdC9ha2EtZzEwMDktc3RhdGVcIjtcbmltcG9ydCB7IEcxMDA5QmV0U3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktYmV0LXN0YXRlXCI7XG5pbXBvcnQgeyBHMTAwOUV4cGFuZHdpbGRTdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1leHBhbmQtd2lsZC1zdGF0ZVwiO1xuaW1wb3J0IHsgRzEwMDlGZWF0dXJlVHJpZ2dlclN0YXRlIH0gZnJvbSBcIi4vYWthLWcxMDA5LWZlYXR1cmUtdHJpZ2dlci1zdGF0ZVwiO1xuaW1wb3J0IHsgRzEwMDlGZWF0dXJlV2luU3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktZmVhdHVyZS13aW4tc3RhdGVcIjtcbmltcG9ydCB7IEcxMDA5V2luU3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktd2luLXN0YXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBHMTAwOVNwaW5TdGF0ZSBleHRlbmRzIFN0YXRlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRjb25zb2xlLmxvZyhcInNwaW4gc3RhdGVcIik7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIlNwaW5TdGFydGVkXCIpO1xuXHRcdH0sIDEwMCk7XG5cdH1cblxuXHRTcGluQ29tcGxldGUoKTogU3RhdGUge1xuXHRcdGlmIChHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tFeHBhbmRXaWxkKCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIG5ldyBHMTAwOUV4cGFuZHdpbGRTdGF0ZSgpO1xuXHRcdH1cblx0XHRpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrV2luTGluZURhdGEoKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gbmV3IEcxMDA5V2luU3RhdGUoKTtcblx0XHR9XG5cdFx0aWYgKEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5DaGVja0JvbnVzRmVhdHVyZVRyaWdnZXIoKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gbmV3IEcxMDA5RmVhdHVyZVRyaWdnZXJTdGF0ZSgpO1xuXHRcdH1cblx0XHRpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrRnJlZXNwaW5Db250aW51ZSgpKVxuXHRcdHtcblx0XHRcdHJldHVybiBuZXcgRzEwMDlTcGluU3RhdGUoKTtcblx0XHR9XG5cdFx0aWYgKEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5DaGVja0ZyZWVzcGluRW5kKCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIG5ldyBHMTAwOUZlYXR1cmVXaW5TdGF0ZSgpO1xuXHRcdH1cblx0XHRpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLklzQWN0aXZlQXV0bygpKVxuXHRcdHtcblx0XHRcdHJldHVybiBuZXcgRzEwMDlTcGluU3RhdGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBHMTAwOUJldFN0YXRlKCk7XG5cdH1cbn0iXX0=