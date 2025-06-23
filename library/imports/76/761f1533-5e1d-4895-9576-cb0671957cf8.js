"use strict";
cc._RF.push(module, '761f1UzXh1IlZV2ywZxlXz4', 'Slot45-init-state');
// Script/base/state-machine/state/Slot45-init-state.ts

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
exports.Slot45InitState = void 0;
var Slot45_state_1 = require("../abstract/Slot45-state");
var Slot45_bet_state_1 = require("./Slot45-bet-state");
var Slot45_bonus_state_1 = require("./Slot45-bonus-state");
var Slot45_spin_state_1 = require("./Slot45-spin-state");
var Slot45InitState = /** @class */ (function (_super) {
    __extends(Slot45InitState, _super);
    function Slot45InitState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slot45InitState.prototype.Init = function () {
        return new Slot45_bet_state_1.Slot45BetState();
    };
    Slot45InitState.prototype.EnterFreespins = function () {
        return new Slot45_spin_state_1.Slot45SpinState();
    };
    Slot45InitState.prototype.EnterBonus = function () {
        return new Slot45_bonus_state_1.default();
    };
    return Slot45InitState;
}(Slot45_state_1.State));
exports.Slot45InitState = Slot45InitState;

cc._RF.pop();