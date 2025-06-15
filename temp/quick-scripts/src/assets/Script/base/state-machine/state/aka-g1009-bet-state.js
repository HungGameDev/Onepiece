"use strict";
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