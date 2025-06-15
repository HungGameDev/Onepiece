
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/state-machine/state/aka-g1009-expand-wild-state.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6f5fdJ2HNM8J4tYAiRZc9X', 'aka-g1009-expand-wild-state');
// Script/base/state-machine/state/aka-g1009-expand-wild-state.ts

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
var aka_g1009_game_controller_1 = require("../../controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bet_state_1 = require("./aka-g1009-bet-state");
var aka_g1009_feature_trigger_state_1 = require("./aka-g1009-feature-trigger-state");
var aka_g1009_feature_win_state_1 = require("./aka-g1009-feature-win-state");
var aka_g1009_spin_state_1 = require("./aka-g1009-spin-state");
var aka_g1009_win_state_1 = require("./aka-g1009-win-state");
var G1009ExpandwildState = /** @class */ (function (_super) {
    __extends(G1009ExpandwildState, _super);
    function G1009ExpandwildState() {
        var _this = _super.call(this) || this;
        console.log("Expand wild state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ExpandWildStarted", aka_g1009_game_controller_1.default.GetInstance().GetExpandWildIndices());
        }, 100);
        return _this;
    }
    G1009ExpandwildState.prototype.ExpandWildCompleted = function () {
        if (aka_g1009_game_controller_1.default.GetInstance().CheckWinLineData()) {
            return new aka_g1009_win_state_1.G1009WinState();
        }
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
    return G1009ExpandwildState;
}(aka_g1009_state_1.State));
exports.G1009ExpandwildState = G1009ExpandwildState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zdGF0ZS1tYWNoaW5lL3N0YXRlL2FrYS1nMTAwOS1leHBhbmQtd2lsZC1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQTZFO0FBQzdFLGdGQUF5RTtBQUN6RSwrREFBb0Q7QUFDcEQsNkRBQXNEO0FBQ3RELHFGQUE2RTtBQUM3RSw2RUFBcUU7QUFDckUsK0RBQXdEO0FBQ3hELDZEQUFzRDtBQUV0RDtJQUEwQyx3Q0FBSztJQUM5QztRQUFBLFlBQ0MsaUJBQU8sU0FLUDtRQUpBLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxVQUFVLENBQUM7WUFDViwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZILENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFDVCxDQUFDO0lBRUQsa0RBQW1CLEdBQW5CO1FBQ0MsSUFBSSxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN4RDtZQUNDLE9BQU8sSUFBSSxtQ0FBYSxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLG1DQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLHdCQUF3QixFQUFFLEVBQ2hFO1lBQ0MsT0FBTyxJQUFJLDBEQUF3QixFQUFFLENBQUM7U0FDdEM7UUFDRCxJQUFJLG1DQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEVBQzdEO1lBQ0MsT0FBTyxJQUFJLHFDQUFjLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsRUFDeEQ7WUFDQyxPQUFPLElBQUksa0RBQW9CLEVBQUUsQ0FBQztTQUNsQztRQUNELE9BQU8sSUFBSSxtQ0FBYSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0E1QkEsQUE0QkMsQ0E1QnlDLHVCQUFLLEdBNEI5QztBQTVCWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRzEwMDlHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vY29udHJvbGxlci9ha2EtZzEwMDktZ2FtZS1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL2Fic3RyYWN0L2FrYS1nMTAwOS1zdGF0ZVwiO1xuaW1wb3J0IHsgRzEwMDlCZXRTdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1iZXQtc3RhdGVcIjtcbmltcG9ydCB7IEcxMDA5RmVhdHVyZVRyaWdnZXJTdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1mZWF0dXJlLXRyaWdnZXItc3RhdGVcIjtcbmltcG9ydCB7IEcxMDA5RmVhdHVyZVdpblN0YXRlIH0gZnJvbSBcIi4vYWthLWcxMDA5LWZlYXR1cmUtd2luLXN0YXRlXCI7XG5pbXBvcnQgeyBHMTAwOVNwaW5TdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1zcGluLXN0YXRlXCI7XG5pbXBvcnQgeyBHMTAwOVdpblN0YXRlIH0gZnJvbSBcIi4vYWthLWcxMDA5LXdpbi1zdGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgRzEwMDlFeHBhbmR3aWxkU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Y29uc29sZS5sb2coXCJFeHBhbmQgd2lsZCBzdGF0ZVwiKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiRXhwYW5kV2lsZFN0YXJ0ZWRcIiwgRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkdldEV4cGFuZFdpbGRJbmRpY2VzKCkpO1xuXHRcdH0sIDEwMCk7XG5cdH1cblxuXHRFeHBhbmRXaWxkQ29tcGxldGVkKCk6IFN0YXRlIHtcblx0XHRpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrV2luTGluZURhdGEoKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gbmV3IEcxMDA5V2luU3RhdGUoKTtcblx0XHR9XG5cdFx0aWYgKEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5DaGVja0JvbnVzRmVhdHVyZVRyaWdnZXIoKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gbmV3IEcxMDA5RmVhdHVyZVRyaWdnZXJTdGF0ZSgpO1xuXHRcdH1cblx0XHRpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrRnJlZXNwaW5Db250aW51ZSgpKVxuXHRcdHtcblx0XHRcdHJldHVybiBuZXcgRzEwMDlTcGluU3RhdGUoKTtcblx0XHR9XG5cdFx0aWYgKEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5DaGVja0ZyZWVzcGluRW5kKCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIG5ldyBHMTAwOUZlYXR1cmVXaW5TdGF0ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEcxMDA5QmV0U3RhdGUoKTtcblx0fVxufSJdfQ==