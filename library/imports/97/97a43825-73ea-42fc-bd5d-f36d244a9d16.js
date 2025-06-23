"use strict";
cc._RF.push(module, '97a43glc+pC/L1d820kSp0W', 'Slot45-bet-state');
// Script/base/state-machine/state/Slot45-bet-state.ts

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
exports.Slot45BetState = void 0;
var Slot45_event_manager_1 = require("../../events/Slot45-event-manager");
var Slot45_state_1 = require("../abstract/Slot45-state");
var Slot45_spin_state_1 = require("./Slot45-spin-state");
var Slot45BetState = /** @class */ (function (_super) {
    __extends(Slot45BetState, _super);
    function Slot45BetState() {
        var _this = _super.call(this) || this;
        console.log("bet state");
        setTimeout(function () {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ShowBetPanel");
        }, 100);
        return _this;
    }
    Slot45BetState.prototype.Spin = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("HideBetPanel");
        return new Slot45_spin_state_1.Slot45SpinState();
    };
    Slot45BetState.prototype.EndRound = function () {
        return new Slot45BetState();
    };
    return Slot45BetState;
}(Slot45_state_1.State));
exports.Slot45BetState = Slot45BetState;

cc._RF.pop();