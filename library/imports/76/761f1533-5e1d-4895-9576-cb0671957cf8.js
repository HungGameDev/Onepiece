"use strict";
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