"use strict";
cc._RF.push(module, '6b0bdd9NehPQY8Y55gr4EoG', 'aka-g1009-state');
// Script/base/state-machine/abstract/aka-g1009-state.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.transitionNextState = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.Init = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.Resume = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.Bet = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.Spin = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.SpinComplete = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.FeatureTrigger = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.EnterFreespins = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.EnterBonus = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.FeatureComplete = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.FeatureWinCompleted = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.ExpandWildCompleted = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.EndRound = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    State.prototype.JackpotTriggered = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    return State;
}());
exports.State = State;

cc._RF.pop();