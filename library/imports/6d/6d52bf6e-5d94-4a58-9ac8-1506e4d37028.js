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
exports.G1009SpineEventData = exports.G1009SpineData = exports.G1009SpineAnimationData = void 0;
var Slot45_animation_1 = require("./Slot45-animation");
var Slot45_spine_animation_handler_1 = require("./Slot45-spine-animation-handler");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SpineAnimationActor = /** @class */ (function (_super) {
    __extends(G1009SpineAnimationActor, _super);
    function G1009SpineAnimationActor() {
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
    G1009SpineAnimationActor_1 = G1009SpineAnimationActor;
    G1009SpineAnimationActor.prototype.Play = function (target, events, callback) {
        this.animationHandler = new Slot45_spine_animation_handler_1.default(this, target);
        this.animationHandler.Play(target, events, callback);
    };
    G1009SpineAnimationActor.prototype.Stop = function (isCallComplete) {
        if (this.animationHandler) {
            this.animationHandler.Stop(isCallComplete);
            this.animationHandler.Destroy();
            this.animationHandler = null;
        }
        this.reset();
    };
    G1009SpineAnimationActor.prototype.Clone = function () {
        var animation = new G1009SpineAnimationActor_1;
        animation.skeletonData = this.skeletonData;
        animation.defaultDuration = this.defaultDuration;
        animation.animationData = this.animationData;
        return animation;
    };
    G1009SpineAnimationActor.prototype.GetDuration = function () {
        var duration = this.defaultDuration;
        if (this.trackEntry) {
            duration = this.trackEntry.animationEnd;
        }
        return duration;
    };
    G1009SpineAnimationActor.prototype.GetIsPlaying = function () {
        return this.trackEntry && (this.trackEntry.trackTime <= this.trackEntry.animationEnd);
    };
    G1009SpineAnimationActor.prototype.reset = function () {
        this.isLoadCompleted = null;
        this.spineSkeleton = null;
        this.trackEntry = null;
    };
    var G1009SpineAnimationActor_1;
    __decorate([
        property
    ], G1009SpineAnimationActor.prototype, "skeletonData", void 0);
    __decorate([
        property
    ], G1009SpineAnimationActor.prototype, "defaultDuration", void 0);
    __decorate([
        property
    ], G1009SpineAnimationActor.prototype, "animationData", void 0);
    G1009SpineAnimationActor = G1009SpineAnimationActor_1 = __decorate([
        ccclass
    ], G1009SpineAnimationActor);
    return G1009SpineAnimationActor;
}(Slot45_animation_1.default));
exports.default = G1009SpineAnimationActor;
var G1009SpineAnimationData = /** @class */ (function () {
    function G1009SpineAnimationData() {
    }
    ;
    return G1009SpineAnimationData;
}());
exports.G1009SpineAnimationData = G1009SpineAnimationData;
var G1009SpineData = /** @class */ (function () {
    function G1009SpineData() {
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
    return G1009SpineData;
}());
exports.G1009SpineData = G1009SpineData;
var G1009SpineEventData = /** @class */ (function () {
    function G1009SpineEventData() {
        this.Name = '';
        this.Time = 0;
    }
    ;
    return G1009SpineEventData;
}());
exports.G1009SpineEventData = G1009SpineEventData;

cc._RF.pop();