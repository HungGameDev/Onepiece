
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/state-machine/state/aka-g1009-feature-win-state.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zdGF0ZS1tYWNoaW5lL3N0YXRlL2FrYS1nMTAwOS1mZWF0dXJlLXdpbi1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQTZFO0FBQzdFLGdGQUF5RTtBQUN6RSwrREFBb0Q7QUFDcEQsNkRBQXNEO0FBQ3RELHFGQUE2RTtBQUU3RTtJQUEwQyx3Q0FBSztJQUM5QztRQUFBLFlBQ0MsaUJBQU8sU0FLUDtRQUpBLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxVQUFVLENBQUM7WUFDViwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM3RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7O0lBQ1QsQ0FBQztJQUVELGtEQUFtQixHQUFuQjtRQUNDLElBQUksbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsRUFDaEU7WUFDQyxPQUFPLElBQUksMERBQXdCLEVBQUUsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxtQ0FBYSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsQ0FoQnlDLHVCQUFLLEdBZ0I5QztBQWhCWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRzEwMDlHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vY29udHJvbGxlci9ha2EtZzEwMDktZ2FtZS1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL2Fic3RyYWN0L2FrYS1nMTAwOS1zdGF0ZVwiO1xuaW1wb3J0IHsgRzEwMDlCZXRTdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1iZXQtc3RhdGVcIjtcbmltcG9ydCB7IEcxMDA5RmVhdHVyZVRyaWdnZXJTdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1mZWF0dXJlLXRyaWdnZXItc3RhdGVcIjtcblxuZXhwb3J0IGNsYXNzIEcxMDA5RmVhdHVyZVdpblN0YXRlIGV4dGVuZHMgU3RhdGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnNvbGUubG9nKFwiRmVhdHVyZSBXaW4gc3RhdGVcIik7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcImZlYXR1cmVXaW5zdGFydGVkXCIpO1xuXHRcdH0sIDEwMCk7XG5cdH1cblxuXHRGZWF0dXJlV2luQ29tcGxldGVkKCk6IFN0YXRlIHtcblx0XHRpZiAoRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrQm9udXNGZWF0dXJlVHJpZ2dlcigpKVxuXHRcdHtcblx0XHRcdHJldHVybiBuZXcgRzEwMDlGZWF0dXJlVHJpZ2dlclN0YXRlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgRzEwMDlCZXRTdGF0ZSgpO1xuXHR9XG59Il19