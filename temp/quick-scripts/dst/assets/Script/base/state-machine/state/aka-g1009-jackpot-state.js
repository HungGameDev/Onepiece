
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/state-machine/state/aka-g1009-jackpot-state.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a420y8ukRNW5KigsyQPVvM', 'aka-g1009-jackpot-state');
// Script/base/state-machine/state/aka-g1009-jackpot-state.ts

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
exports.G1009JackpotState = void 0;
var aka_g1009_game_controller_1 = require("../../controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bet_state_1 = require("./aka-g1009-bet-state");
var aka_g1009_feature_trigger_state_1 = require("./aka-g1009-feature-trigger-state");
var aka_g1009_feature_win_state_1 = require("./aka-g1009-feature-win-state");
var aka_g1009_spin_state_1 = require("./aka-g1009-spin-state");
var G1009JackpotState = /** @class */ (function (_super) {
    __extends(G1009JackpotState, _super);
    function G1009JackpotState() {
        var _this = _super.call(this) || this;
        console.log("Jackpot state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotStarted");
        }, 100);
        return _this;
    }
    G1009JackpotState.prototype.FeatureTrigger = function () {
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
    G1009JackpotState.prototype.FeatureComplete = function () {
        return new aka_g1009_feature_win_state_1.G1009FeatureWinState();
    };
    G1009JackpotState.prototype.Spin = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().CheckFreespinContinue()) {
            return new aka_g1009_spin_state_1.G1009SpinState();
        }
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    G1009JackpotState.prototype.EndRound = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().IsActiveAuto())
            return new aka_g1009_spin_state_1.G1009SpinState();
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    return G1009JackpotState;
}(aka_g1009_state_1.State));
exports.G1009JackpotState = G1009JackpotState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zdGF0ZS1tYWNoaW5lL3N0YXRlL2FrYS1nMTAwOS1qYWNrcG90LXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBNkU7QUFDN0UsZ0ZBQXlFO0FBQ3pFLCtEQUFvRDtBQUNwRCw2REFBc0Q7QUFDdEQscUZBQTZFO0FBQzdFLDZFQUFxRTtBQUNyRSwrREFBd0Q7QUFFeEQ7SUFBdUMscUNBQUs7SUFDM0M7UUFBQSxZQUNDLGlCQUFPLFNBS1A7UUFKQSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLFVBQVUsQ0FBQztZQUNWLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFDVCxDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNDLElBQUksbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsRUFDaEU7WUFDQyxPQUFPLElBQUksMERBQXdCLEVBQUUsQ0FBQztTQUN0QztRQUNELElBQUksbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLEVBQUUsRUFDN0Q7WUFDQyxPQUFPLElBQUkscUNBQWMsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN4RDtZQUNDLE9BQU8sSUFBSSxrREFBb0IsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLG1DQUFhLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsMkNBQWUsR0FBZjtRQUNDLE9BQU8sSUFBSSxrREFBb0IsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0MsSUFBSSxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxFQUM3RDtZQUNDLE9BQU8sSUFBSSxxQ0FBYyxFQUFFLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksbUNBQWEsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0MsSUFBSSxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDbkQsT0FBTyxJQUFJLHFDQUFjLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksbUNBQWEsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRix3QkFBQztBQUFELENBMUNBLEFBMENDLENBMUNzQyx1QkFBSyxHQTBDM0M7QUExQ1ksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEcxMDA5R2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXIvYWthLWcxMDA5LWdhbWUtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9hYnN0cmFjdC9ha2EtZzEwMDktc3RhdGVcIjtcbmltcG9ydCB7IEcxMDA5QmV0U3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktYmV0LXN0YXRlXCI7XG5pbXBvcnQgeyBHMTAwOUZlYXR1cmVUcmlnZ2VyU3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktZmVhdHVyZS10cmlnZ2VyLXN0YXRlXCI7XG5pbXBvcnQgeyBHMTAwOUZlYXR1cmVXaW5TdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1mZWF0dXJlLXdpbi1zdGF0ZVwiO1xuaW1wb3J0IHsgRzEwMDlTcGluU3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktc3Bpbi1zdGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgRzEwMDlKYWNrcG90U3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Y29uc29sZS5sb2coXCJKYWNrcG90IHN0YXRlXCIpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJKYWNrcG90U3RhcnRlZFwiKTtcblx0XHR9LCAxMDApO1xuXHR9XG5cblx0RmVhdHVyZVRyaWdnZXIoKTogU3RhdGUge1xuXHRcdGlmIChHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tCb251c0ZlYXR1cmVUcmlnZ2VyKCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIG5ldyBHMTAwOUZlYXR1cmVUcmlnZ2VyU3RhdGUoKTtcblx0XHR9XG5cdFx0aWYgKEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5DaGVja0ZyZWVzcGluQ29udGludWUoKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gbmV3IEcxMDA5U3BpblN0YXRlKCk7XG5cdFx0fVxuXHRcdGlmIChHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tGcmVlc3BpbkVuZCgpKVxuXHRcdHtcblx0XHRcdHJldHVybiBuZXcgRzEwMDlGZWF0dXJlV2luU3RhdGUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBHMTAwOUJldFN0YXRlKCk7XG5cdH1cblxuXHRGZWF0dXJlQ29tcGxldGUoKTogU3RhdGUge1xuXHRcdHJldHVybiBuZXcgRzEwMDlGZWF0dXJlV2luU3RhdGUoKTtcblx0fVxuXG5cdFNwaW4oKTogU3RhdGUge1xuXHRcdGlmIChHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tGcmVlc3BpbkNvbnRpbnVlKCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIG5ldyBHMTAwOVNwaW5TdGF0ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEcxMDA5QmV0U3RhdGUoKTtcblx0fVxuXG5cdEVuZFJvdW5kKCk6IFN0YXRlIHtcblx0XHRpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLklzQWN0aXZlQXV0bygpKVxuXHRcdFx0cmV0dXJuIG5ldyBHMTAwOVNwaW5TdGF0ZSgpO1xuXHRcdHJldHVybiBuZXcgRzEwMDlCZXRTdGF0ZSgpO1xuXHR9XG59Il19