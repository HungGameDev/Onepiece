
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/state-machine/abstract/aka-g1009-state.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zdGF0ZS1tYWNoaW5lL2Fic3RyYWN0L2FrYS1nMTAwOS1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO0lBd0RBLENBQUM7SUF2REEsbUNBQW1CLEdBQW5CO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxvQkFBSSxHQUFKO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxtQkFBRyxHQUFIO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxvQkFBSSxHQUFKO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCw0QkFBWSxHQUFaO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCw4QkFBYyxHQUFkO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCw4QkFBYyxHQUFkO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCwwQkFBVSxHQUFWO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCwrQkFBZSxHQUFmO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxtQ0FBbUIsR0FBbkI7UUFDQyxNQUFNLElBQUksS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELG1DQUFtQixHQUFuQjtRQUNDLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsd0JBQVEsR0FBUjtRQUNDLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsZ0NBQWdCLEdBQWhCO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDRixZQUFDO0FBQUQsQ0F4REEsQUF3REMsSUFBQTtBQXhEcUIsc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2l0aW9uSW50ZXJmYWNlIH0gZnJvbSBcIi4vYWthLWcxMDA5LXRyYW5zaXRpb24tSW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdGF0ZSBpbXBsZW1lbnRzIFRyYW5zaXRpb25JbnRlcmZhY2Uge1xuXHR0cmFuc2l0aW9uTmV4dFN0YXRlKCk6IFN0YXRlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIE9wZXJhdGlvbjogQ2Fubm90IHBlcmZvcm0gdGFzayBpbiBjdXJyZW50IHN0YXRlXCIpO1xuXHR9XG5cblx0SW5pdCgpOiBTdGF0ZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBPcGVyYXRpb246IENhbm5vdCBwZXJmb3JtIHRhc2sgaW4gY3VycmVudCBzdGF0ZVwiKTtcblx0fVxuXG5cdFJlc3VtZSgpOiBTdGF0ZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBPcGVyYXRpb246IENhbm5vdCBwZXJmb3JtIHRhc2sgaW4gY3VycmVudCBzdGF0ZVwiKTtcblx0fVxuXG5cdEJldCgpOiBTdGF0ZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBPcGVyYXRpb246IENhbm5vdCBwZXJmb3JtIHRhc2sgaW4gY3VycmVudCBzdGF0ZVwiKTtcblx0fVxuXG5cdFNwaW4oKTogU3RhdGUge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgT3BlcmF0aW9uOiBDYW5ub3QgcGVyZm9ybSB0YXNrIGluIGN1cnJlbnQgc3RhdGVcIik7XG5cdH1cblxuXHRTcGluQ29tcGxldGUoKTogU3RhdGUge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgT3BlcmF0aW9uOiBDYW5ub3QgcGVyZm9ybSB0YXNrIGluIGN1cnJlbnQgc3RhdGVcIik7XG5cdH1cblxuXHRGZWF0dXJlVHJpZ2dlcigpOiBTdGF0ZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBPcGVyYXRpb246IENhbm5vdCBwZXJmb3JtIHRhc2sgaW4gY3VycmVudCBzdGF0ZVwiKTtcblx0fVxuXG5cdEVudGVyRnJlZXNwaW5zKCk6IFN0YXRlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIE9wZXJhdGlvbjogQ2Fubm90IHBlcmZvcm0gdGFzayBpbiBjdXJyZW50IHN0YXRlXCIpO1xuXHR9XG5cblx0RW50ZXJCb251cygpOiBTdGF0ZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBPcGVyYXRpb246IENhbm5vdCBwZXJmb3JtIHRhc2sgaW4gY3VycmVudCBzdGF0ZVwiKTtcblx0fVxuXG5cdEZlYXR1cmVDb21wbGV0ZSgpOiBTdGF0ZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBPcGVyYXRpb246IENhbm5vdCBwZXJmb3JtIHRhc2sgaW4gY3VycmVudCBzdGF0ZVwiKTtcblx0fVxuXG5cdEZlYXR1cmVXaW5Db21wbGV0ZWQoKTogU3RhdGUge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgT3BlcmF0aW9uOiBDYW5ub3QgcGVyZm9ybSB0YXNrIGluIGN1cnJlbnQgc3RhdGVcIik7XG5cdH1cblxuXHRFeHBhbmRXaWxkQ29tcGxldGVkKCk6IFN0YXRlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIE9wZXJhdGlvbjogQ2Fubm90IHBlcmZvcm0gdGFzayBpbiBjdXJyZW50IHN0YXRlXCIpO1xuXHR9XG5cblx0RW5kUm91bmQoKTogU3RhdGUge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgT3BlcmF0aW9uOiBDYW5ub3QgcGVyZm9ybSB0YXNrIGluIGN1cnJlbnQgc3RhdGVcIik7XG5cdH1cblxuXHRKYWNrcG90VHJpZ2dlcmVkKCk6IFN0YXRlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIE9wZXJhdGlvbjogQ2Fubm90IHBlcmZvcm0gdGFzayBpbiBjdXJyZW50IHN0YXRlXCIpO1xuXHR9XG59XG4iXX0=