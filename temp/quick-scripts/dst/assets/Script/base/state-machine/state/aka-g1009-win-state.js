
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/state-machine/state/aka-g1009-win-state.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e694d5qgZxNNrNT4uZC6CvJ', 'aka-g1009-win-state');
// Script/base/state-machine/state/aka-g1009-win-state.ts

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
exports.G1009WinState = void 0;
var aka_g1009_game_controller_1 = require("../../controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bet_state_1 = require("./aka-g1009-bet-state");
var aka_g1009_feature_trigger_state_1 = require("./aka-g1009-feature-trigger-state");
var aka_g1009_feature_win_state_1 = require("./aka-g1009-feature-win-state");
var aka_g1009_jackpot_state_1 = require("./aka-g1009-jackpot-state");
var aka_g1009_spin_state_1 = require("./aka-g1009-spin-state");
var G1009WinState = /** @class */ (function (_super) {
    __extends(G1009WinState, _super);
    function G1009WinState() {
        var _this = _super.call(this) || this;
        console.log("Win state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("PresentWinStart");
        }, 100);
        return _this;
    }
    G1009WinState.prototype.FeatureTrigger = function () {
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
    G1009WinState.prototype.FeatureComplete = function () {
        return new aka_g1009_feature_win_state_1.G1009FeatureWinState();
    };
    G1009WinState.prototype.Spin = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().CheckFreespinContinue()) {
            return new aka_g1009_spin_state_1.G1009SpinState();
        }
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    G1009WinState.prototype.EndRound = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().IsActiveAuto())
            return new aka_g1009_spin_state_1.G1009SpinState();
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    G1009WinState.prototype.JackpotTriggered = function () {
        return new aka_g1009_jackpot_state_1.G1009JackpotState();
    };
    return G1009WinState;
}(aka_g1009_state_1.State));
exports.G1009WinState = G1009WinState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zdGF0ZS1tYWNoaW5lL3N0YXRlL2FrYS1nMTAwOS13aW4tc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUE2RTtBQUM3RSxnRkFBeUU7QUFDekUsK0RBQW9EO0FBQ3BELDZEQUFzRDtBQUN0RCxxRkFBNkU7QUFDN0UsNkVBQXFFO0FBQ3JFLHFFQUE4RDtBQUM5RCwrREFBd0Q7QUFFeEQ7SUFBbUMsaUNBQUs7SUFDdkM7UUFBQSxZQUNDLGlCQUFPLFNBS1A7UUFKQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFVBQVUsQ0FBQztZQUNWLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFDVCxDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNDLElBQUksbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsRUFDaEU7WUFDQyxPQUFPLElBQUksMERBQXdCLEVBQUUsQ0FBQztTQUN0QztRQUNELElBQUksbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLEVBQUUsRUFDN0Q7WUFDQyxPQUFPLElBQUkscUNBQWMsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN4RDtZQUNDLE9BQU8sSUFBSSxrREFBb0IsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLG1DQUFhLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNDLE9BQU8sSUFBSSxrREFBb0IsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0MsSUFBSSxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxFQUM3RDtZQUNDLE9BQU8sSUFBSSxxQ0FBYyxFQUFFLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksbUNBQWEsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0MsSUFBSSxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDbkQsT0FBTyxJQUFJLHFDQUFjLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksbUNBQWEsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDQyxPQUFPLElBQUksMkNBQWlCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQTlDQSxBQThDQyxDQTlDa0MsdUJBQUssR0E4Q3ZDO0FBOUNZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEcxMDA5R2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXIvYWthLWcxMDA5LWdhbWUtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9hYnN0cmFjdC9ha2EtZzEwMDktc3RhdGVcIjtcbmltcG9ydCB7IEcxMDA5QmV0U3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktYmV0LXN0YXRlXCI7XG5pbXBvcnQgeyBHMTAwOUZlYXR1cmVUcmlnZ2VyU3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktZmVhdHVyZS10cmlnZ2VyLXN0YXRlXCI7XG5pbXBvcnQgeyBHMTAwOUZlYXR1cmVXaW5TdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1mZWF0dXJlLXdpbi1zdGF0ZVwiO1xuaW1wb3J0IHsgRzEwMDlKYWNrcG90U3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktamFja3BvdC1zdGF0ZVwiO1xuaW1wb3J0IHsgRzEwMDlTcGluU3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktc3Bpbi1zdGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgRzEwMDlXaW5TdGF0ZSBleHRlbmRzIFN0YXRlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRjb25zb2xlLmxvZyhcIldpbiBzdGF0ZVwiKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiUHJlc2VudFdpblN0YXJ0XCIpO1xuXHRcdH0sIDEwMCk7XG5cdH1cblxuXHRGZWF0dXJlVHJpZ2dlcigpOiBTdGF0ZSB7XG5cdFx0aWYgKEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5DaGVja0JvbnVzRmVhdHVyZVRyaWdnZXIoKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gbmV3IEcxMDA5RmVhdHVyZVRyaWdnZXJTdGF0ZSgpO1xuXHRcdH1cblx0XHRpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrRnJlZXNwaW5Db250aW51ZSgpKVxuXHRcdHtcblx0XHRcdHJldHVybiBuZXcgRzEwMDlTcGluU3RhdGUoKTtcblx0XHR9XG5cdFx0aWYgKEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5DaGVja0ZyZWVzcGluRW5kKCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIG5ldyBHMTAwOUZlYXR1cmVXaW5TdGF0ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEcxMDA5QmV0U3RhdGUoKTtcblx0fVxuXG5cdEZlYXR1cmVDb21wbGV0ZSgpOiBTdGF0ZSB7XG5cdFx0cmV0dXJuIG5ldyBHMTAwOUZlYXR1cmVXaW5TdGF0ZSgpO1xuXHR9XG5cblx0U3BpbigpOiBTdGF0ZSB7XG5cdFx0aWYgKEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5DaGVja0ZyZWVzcGluQ29udGludWUoKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gbmV3IEcxMDA5U3BpblN0YXRlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgRzEwMDlCZXRTdGF0ZSgpO1xuXHR9XG5cblx0RW5kUm91bmQoKTogU3RhdGUge1xuXHRcdGlmIChHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuSXNBY3RpdmVBdXRvKCkpXG5cdFx0XHRyZXR1cm4gbmV3IEcxMDA5U3BpblN0YXRlKCk7XG5cdFx0cmV0dXJuIG5ldyBHMTAwOUJldFN0YXRlKCk7XG5cdH1cblxuXHRKYWNrcG90VHJpZ2dlcmVkKCk6IFN0YXRlIHtcblx0XHRyZXR1cm4gbmV3IEcxMDA5SmFja3BvdFN0YXRlKCk7XG5cdH1cbn0iXX0=