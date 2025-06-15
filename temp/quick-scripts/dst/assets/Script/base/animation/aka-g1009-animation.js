
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/animation/aka-g1009-animation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '368eedYmX1LaL+43LcbWxuX', 'aka-g1009-animation');
// Script/base/animation/aka-g1009-animation.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009AnimationActor = /** @class */ (function (_super) {
    __extends(G1009AnimationActor, _super);
    function G1009AnimationActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    G1009AnimationActor.prototype.Play = function (target, events, callback) {
        if (events != null && events.length > 0) {
            for (var index = 0; index < events.length; index++) {
                var event = events[index];
                event();
            }
        }
        if (typeof callback == 'function') {
            callback();
        }
    };
    G1009AnimationActor.prototype.Stop = function (isCallComplete) {
    };
    G1009AnimationActor.prototype.Clone = function () {
        return new Animation();
    };
    G1009AnimationActor.prototype.GetDuration = function () {
        return 0;
    };
    G1009AnimationActor.prototype.GetIsPlaying = function () {
        return false;
    };
    G1009AnimationActor = __decorate([
        ccclass
    ], G1009AnimationActor);
    return G1009AnimationActor;
}(cc.Component));
exports.default = G1009AnimationActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9hbmltYXRpb24vYWthLWcxMDA5LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDs7SUE0QkEsQ0FBQztJQTFCVSxrQ0FBSSxHQUFYLFVBQVksTUFBZSxFQUFFLE1BQWtCLEVBQUUsUUFBa0I7UUFDL0QsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNoRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSjtRQUNELElBQUksT0FBTyxRQUFRLElBQUksVUFBVSxFQUFFO1lBQy9CLFFBQVEsRUFBRSxDQUFDO1NBQ2Q7SUFDTCxDQUFDO0lBRU0sa0NBQUksR0FBWCxVQUFZLGNBQXVCO0lBQ25DLENBQUM7SUFFTSxtQ0FBSyxHQUFaO1FBQ0ksT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSx5Q0FBVyxHQUFsQjtRQUNJLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLDBDQUFZLEdBQW5CO1FBQ0ksT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQTNCZ0IsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0E0QnZDO0lBQUQsMEJBQUM7Q0E1QkQsQUE0QkMsQ0E1QmdELEVBQUUsQ0FBQyxTQUFTLEdBNEI1RDtrQkE1Qm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOUFuaW1hdGlvbkFjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBQbGF5KHRhcmdldDogY2MuTm9kZSwgZXZlbnRzOiBGdW5jdGlvbltdLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKGV2ZW50cyAhPSBudWxsICYmIGV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGV2ZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgZXZlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgU3RvcChpc0NhbGxDb21wbGV0ZTogYm9vbGVhbik6IHZvaWQgeyAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIENsb25lKCk6IEFuaW1hdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIEdldER1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRJc1BsYXlpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iXX0=