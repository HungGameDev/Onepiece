
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/state-machine/state/aka-g1009-bet-state.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97a43glc+pC/L1d820kSp0W', 'aka-g1009-bet-state');
// Script/base/state-machine/state/aka-g1009-bet-state.ts

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
exports.G1009BetState = void 0;
var aka_g1009_event_manager_1 = require("../../events/aka-g1009-event-manager");
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_spin_state_1 = require("./aka-g1009-spin-state");
var G1009BetState = /** @class */ (function (_super) {
    __extends(G1009BetState, _super);
    function G1009BetState() {
        var _this = _super.call(this) || this;
        console.log("bet state");
        setTimeout(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ShowBetPanel");
        }, 100);
        return _this;
    }
    G1009BetState.prototype.Spin = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("HideBetPanel");
        return new aka_g1009_spin_state_1.G1009SpinState();
    };
    G1009BetState.prototype.EndRound = function () {
        return new G1009BetState();
    };
    return G1009BetState;
}(aka_g1009_state_1.State));
exports.G1009BetState = G1009BetState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zdGF0ZS1tYWNoaW5lL3N0YXRlL2FrYS1nMTAwOS1iZXQtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdGQUF5RTtBQUN6RSwrREFBb0Q7QUFDcEQsK0RBQXdEO0FBRXhEO0lBQW1DLGlDQUFLO0lBQ3ZDO1FBQUEsWUFDQyxpQkFBTyxTQUtQO1FBSkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixVQUFVLENBQUM7WUFDViwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQUNULENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0MsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxxQ0FBYyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDQyxPQUFPLElBQUksYUFBYSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FqQkEsQUFpQkMsQ0FqQmtDLHVCQUFLLEdBaUJ2QztBQWpCWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vYWJzdHJhY3QvYWthLWcxMDA5LXN0YXRlXCI7XG5pbXBvcnQgeyBHMTAwOVNwaW5TdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1zcGluLXN0YXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBHMTAwOUJldFN0YXRlIGV4dGVuZHMgU3RhdGUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnNvbGUubG9nKFwiYmV0IHN0YXRlXCIpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJTaG93QmV0UGFuZWxcIik7XG5cdFx0fSwgMTAwKTtcblx0fVxuXG5cdFNwaW4oKTogU3RhdGUge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiSGlkZUJldFBhbmVsXCIpO1xuXHRcdHJldHVybiBuZXcgRzEwMDlTcGluU3RhdGUoKTtcblx0fVxuXG5cdEVuZFJvdW5kKCk6IFN0YXRlIHtcblx0XHRyZXR1cm4gbmV3IEcxMDA5QmV0U3RhdGUoKTtcblx0fVxufVxuIl19