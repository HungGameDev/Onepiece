
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/state-machine/state/aka-g1009-init-state.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '761f1UzXh1IlZV2ywZxlXz4', 'aka-g1009-init-state');
// Script/base/state-machine/state/aka-g1009-init-state.ts

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
exports.G1009InitState = void 0;
var aka_g1009_state_1 = require("../abstract/aka-g1009-state");
var aka_g1009_bet_state_1 = require("./aka-g1009-bet-state");
var aka_g1009_bonus_state_1 = require("./aka-g1009-bonus-state");
var aka_g1009_spin_state_1 = require("./aka-g1009-spin-state");
var G1009InitState = /** @class */ (function (_super) {
    __extends(G1009InitState, _super);
    function G1009InitState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    G1009InitState.prototype.Init = function () {
        return new aka_g1009_bet_state_1.G1009BetState();
    };
    G1009InitState.prototype.EnterFreespins = function () {
        return new aka_g1009_spin_state_1.G1009SpinState();
    };
    G1009InitState.prototype.EnterBonus = function () {
        return new aka_g1009_bonus_state_1.default();
    };
    return G1009InitState;
}(aka_g1009_state_1.State));
exports.G1009InitState = G1009InitState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zdGF0ZS1tYWNoaW5lL3N0YXRlL2FrYS1nMTAwOS1pbml0LXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBb0Q7QUFDcEQsNkRBQXNEO0FBQ3RELGlFQUFzRDtBQUN0RCwrREFBd0Q7QUFFeEQ7SUFBb0Msa0NBQUs7SUFBekM7O0lBWUEsQ0FBQztJQVhBLDZCQUFJLEdBQUo7UUFDQyxPQUFPLElBQUksbUNBQWEsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0MsT0FBTyxJQUFJLHFDQUFjLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNDLE9BQU8sSUFBSSwrQkFBZSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FaQSxBQVlDLENBWm1DLHVCQUFLLEdBWXhDO0FBWlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9hYnN0cmFjdC9ha2EtZzEwMDktc3RhdGVcIjtcbmltcG9ydCB7IEcxMDA5QmV0U3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktYmV0LXN0YXRlXCI7XG5pbXBvcnQgRzEwMDlCb251c1N0YXRlIGZyb20gXCIuL2FrYS1nMTAwOS1ib251cy1zdGF0ZVwiO1xuaW1wb3J0IHsgRzEwMDlTcGluU3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktc3Bpbi1zdGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgRzEwMDlJbml0U3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG5cdEluaXQoKTogU3RhdGUge1xuXHRcdHJldHVybiBuZXcgRzEwMDlCZXRTdGF0ZSgpO1xuXHR9XG5cblx0RW50ZXJGcmVlc3BpbnMoKTogU3RhdGUge1xuXHRcdHJldHVybiBuZXcgRzEwMDlTcGluU3RhdGUoKTtcblx0fVxuXG5cdEVudGVyQm9udXMoKTogU3RhdGUge1xuXHRcdHJldHVybiBuZXcgRzEwMDlCb251c1N0YXRlKCk7XG5cdH1cbn1cbiJdfQ==