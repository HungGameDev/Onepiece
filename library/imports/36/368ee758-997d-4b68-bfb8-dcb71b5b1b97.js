"use strict";
cc._RF.push(module, '368eedYmX1LaL+43LcbWxuX', 'Slot45-animation');
// Script/base/animation/Slot45-animation.ts

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
var Slot45AnimationActor = /** @class */ (function (_super) {
    __extends(Slot45AnimationActor, _super);
    function Slot45AnimationActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slot45AnimationActor.prototype.Play = function (target, events, callback) {
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
    Slot45AnimationActor.prototype.Stop = function (isCallComplete) {
    };
    Slot45AnimationActor.prototype.Clone = function () {
        return new Animation();
    };
    Slot45AnimationActor.prototype.GetDuration = function () {
        return 0;
    };
    Slot45AnimationActor.prototype.GetIsPlaying = function () {
        return false;
    };
    Slot45AnimationActor = __decorate([
        ccclass
    ], Slot45AnimationActor);
    return Slot45AnimationActor;
}(cc.Component));
exports.default = Slot45AnimationActor;

cc._RF.pop();