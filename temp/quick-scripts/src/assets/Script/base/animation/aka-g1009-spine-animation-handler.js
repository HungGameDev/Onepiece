"use strict";
cc._RF.push(module, 'cf5baJ8QqVNl6jWnAm6X0LG', 'aka-g1009-spine-animation-handler');
// Script/base/animation/aka-g1009-spine-animation-handler.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SpineAnimationHandler = /** @class */ (function () {
    function G1009SpineAnimationHandler(context, targetNode) {
        this.animation = null;
        this.target = null;
        this.skeletonData = null;
        this.defaultDuration = 0;
        this.animationData = null;
        this.spineData = null;
        this.animation = context;
        this.target = targetNode;
        this.skeletonData = this.animation.skeletonData;
        this.defaultDuration = this.animation.defaultDuration;
        this.animationData = this.animation.animationData;
        this.spineData = this.animation.spineData;
    }
    G1009SpineAnimationHandler.prototype.Play = function (targetNode, events, callback) {
        this.animation.trackEntry = this.handleAnimation(this.spineData, targetNode);
        this.handleCallback(callback);
        this.handleSpineEvent(events);
    };
    G1009SpineAnimationHandler.prototype.Stop = function (isCallComplete) {
        if (!this.animation.spineSkeleton || !this.animation.spineSkeleton.node || !this.animation.trackEntry) {
            return;
        }
        this.animation.spineSkeleton.clearTracks();
        this.animation.trackEntry = null;
        this.animation.spineSkeleton.enabled = false;
    };
    G1009SpineAnimationHandler.prototype.Destroy = function () {
        this.animation = null;
        this.target = null;
        this.skeletonData = null;
        this.defaultDuration = null;
        this.animationData = null;
        this.spineData = null;
    };
    G1009SpineAnimationHandler.prototype.handleAnimation = function (spineData, targetNode) {
        this.animation.spineSkeleton = targetNode.getComponent(sp.Skeleton) || targetNode.addComponent(sp.Skeleton);
        this.animation.spineSkeleton.timeScale = spineData.TimeScale;
        this.animation.spineSkeleton.enabled = true;
        this.animation.spineSkeleton.skeletonData = this.skeletonData;
        return this.animation.spineSkeleton.setAnimation(spineData.TrackIndex || 0, spineData.Name, spineData.IsLoop || false);
    };
    G1009SpineAnimationHandler.prototype.handleCallback = function (callback) {
        this.animation.spineSkeleton.setTrackCompleteListener(this.animation.trackEntry, callback);
    };
    G1009SpineAnimationHandler.prototype.handleSpineEvent = function (events) {
        this.animation.spineSkeleton.setEventListener(function (trackEntry, event) {
            events ? events[event.data.name]() : (function () { });
        });
    };
    G1009SpineAnimationHandler = __decorate([
        ccclass
    ], G1009SpineAnimationHandler);
    return G1009SpineAnimationHandler;
}());
exports.default = G1009SpineAnimationHandler;

cc._RF.pop();