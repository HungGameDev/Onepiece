"use strict";
cc._RF.push(module, '6d52b9uXZRKWJrIFQbk03Ao', 'Slot45-spine-animation');
// Script/base/animation/Slot45-spine-animation.ts

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
exports.Slot45SpineEventData = exports.Slot45SpineData = exports.Slot45SpineAnimationData = void 0;
var Slot45_animation_1 = require("./Slot45-animation");
var Slot45_spine_animation_handler_1 = require("./Slot45-spine-animation-handler");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45SpineAnimationActor = /** @class */ (function (_super) {
    __extends(Slot45SpineAnimationActor, _super);
    function Slot45SpineAnimationActor() {
        var _this = _super.call(this) || this;
        _this.skeletonData = new sp.SkeletonData;
        _this.defaultDuration = 1;
        _this.animationData = [];
        _this.isLoadCompleted = false;
        _this.spineSkeleton = null;
        _this.animationHandler = null;
        _this.trackEntry = null;
        _this.spineData = null;
        _this.isLoadCompleted = false;
        _this.spineSkeleton = null;
        _this.animationHandler = null;
        _this.trackEntry = null;
        _this.spineData = null;
        return _this;
    }
    Slot45SpineAnimationActor_1 = Slot45SpineAnimationActor;
    Slot45SpineAnimationActor.prototype.Play = function (target, events, callback) {
        this.animationHandler = new Slot45_spine_animation_handler_1.default(this, target);
        this.animationHandler.Play(target, events, callback);
    };
    Slot45SpineAnimationActor.prototype.Stop = function (isCallComplete) {
        if (this.animationHandler) {
            this.animationHandler.Stop(isCallComplete);
            this.animationHandler.Destroy();
            this.animationHandler = null;
        }
        this.reset();
    };
    Slot45SpineAnimationActor.prototype.Clone = function () {
        var animation = new Slot45SpineAnimationActor_1;
        animation.skeletonData = this.skeletonData;
        animation.defaultDuration = this.defaultDuration;
        animation.animationData = this.animationData;
        return animation;
    };
    Slot45SpineAnimationActor.prototype.GetDuration = function () {
        var duration = this.defaultDuration;
        if (this.trackEntry) {
            duration = this.trackEntry.animationEnd;
        }
        return duration;
    };
    Slot45SpineAnimationActor.prototype.GetIsPlaying = function () {
        return this.trackEntry && (this.trackEntry.trackTime <= this.trackEntry.animationEnd);
    };
    Slot45SpineAnimationActor.prototype.reset = function () {
        this.isLoadCompleted = null;
        this.spineSkeleton = null;
        this.trackEntry = null;
    };
    var Slot45SpineAnimationActor_1;
    __decorate([
        property
    ], Slot45SpineAnimationActor.prototype, "skeletonData", void 0);
    __decorate([
        property
    ], Slot45SpineAnimationActor.prototype, "defaultDuration", void 0);
    __decorate([
        property
    ], Slot45SpineAnimationActor.prototype, "animationData", void 0);
    Slot45SpineAnimationActor = Slot45SpineAnimationActor_1 = __decorate([
        ccclass
    ], Slot45SpineAnimationActor);
    return Slot45SpineAnimationActor;
}(Slot45_animation_1.default));
exports.default = Slot45SpineAnimationActor;
var Slot45SpineAnimationData = /** @class */ (function () {
    function Slot45SpineAnimationData() {
    }
    ;
    return Slot45SpineAnimationData;
}());
exports.Slot45SpineAnimationData = Slot45SpineAnimationData;
var Slot45SpineData = /** @class */ (function () {
    function Slot45SpineData() {
        this.IsLoop = false;
        this.TrackIndex = 0;
        this.TimeScale = 0;
        this.IsCallComplete = false;
        this.Events = [];
        this.StaticSpriteFrame = null;
        this.Name = "animation";
        this.IsLoop = false;
        this.TrackIndex = 0;
        this.TimeScale = 0;
        this.IsCallComplete = false;
        this.Events = [];
        this.StaticSpriteFrame = new cc.SpriteFrame;
    }
    ;
    return Slot45SpineData;
}());
exports.Slot45SpineData = Slot45SpineData;
var Slot45SpineEventData = /** @class */ (function () {
    function Slot45SpineEventData() {
        this.Name = '';
        this.Time = 0;
    }
    ;
    return Slot45SpineEventData;
}());
exports.Slot45SpineEventData = Slot45SpineEventData;

cc._RF.pop();