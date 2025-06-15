
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/animation/aka-g1009-spine-animation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d52b9uXZRKWJrIFQbk03Ao', 'aka-g1009-spine-animation');
// Script/base/animation/aka-g1009-spine-animation.ts

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
var aka_g1009_animation_1 = require("./aka-g1009-animation");
var aka_g1009_spine_animation_handler_1 = require("./aka-g1009-spine-animation-handler");
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
        this.animationHandler = new aka_g1009_spine_animation_handler_1.default(this, target);
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
}(aka_g1009_animation_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9hbmltYXRpb24vYWthLWcxMDA5LXNwaW5lLWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELHlGQUE2RTtBQUV2RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzRCw0Q0FBbUI7SUFrQnJFO1FBQUEsWUFFSSxpQkFBTyxTQU1WO1FBdkJELGtCQUFZLEdBQW9CLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQztRQUlwRCxxQkFBZSxHQUFXLENBQUMsQ0FBQztRQUc1QixtQkFBYSxHQUE4QixFQUFFLENBQUM7UUFFOUMscUJBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsc0JBQWdCLEdBQUUsSUFBSSxDQUFDO1FBQ3ZCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBSzVCLEtBQUksQ0FBQyxlQUFlLEdBQUUsS0FBSyxDQUFDO1FBQzVCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRSxJQUFJLENBQUM7UUFDNUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O0lBQzFCLENBQUM7aUNBMUJnQix3QkFBd0I7SUEyQmxDLHVDQUFJLEdBQVgsVUFBWSxNQUFlLEVBQUUsTUFBa0IsRUFBRSxRQUFrQjtRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSwyQ0FBMEIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFB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QUFKWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRzEwMDlBbmltYXRpb25BY3RvciBmcm9tIFwiLi9ha2EtZzEwMDktYW5pbWF0aW9uXCI7XG5pbXBvcnQgRzEwMDlTcGluZUFuaW1hdGlvbkhhbmRsZXIgZnJvbSBcIi4vYWthLWcxMDA5LXNwaW5lLWFuaW1hdGlvbi1oYW5kbGVyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlTcGluZUFuaW1hdGlvbkFjdG9yIGV4dGVuZHMgRzEwMDlBbmltYXRpb25BY3RvciB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBza2VsZXRvbkRhdGE6IHNwLlNrZWxldG9uRGF0YSA9IG5ldyBzcC5Ta2VsZXRvbkRhdGE7XG5cblxuICAgIEBwcm9wZXJ0eVxuICAgIGRlZmF1bHREdXJhdGlvbjogbnVtYmVyID0gMTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGFuaW1hdGlvbkRhdGE6IEcxMDA5U3BpbmVBbmltYXRpb25EYXRhW10gPSBbXTtcbiBcbiAgICBpc0xvYWRDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzcGluZVNrZWxldG9uID0gbnVsbDtcbiAgICBhbmltYXRpb25IYW5kbGVyPSBudWxsO1xuICAgIHRyYWNrRW50cnkgPSBudWxsO1xuICAgIHNwaW5lRGF0YTpHMTAwOVNwaW5lRGF0YSA9IG51bGw7XG4gICAgXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNMb2FkQ29tcGxldGVkPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcGluZVNrZWxldG9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyPSBudWxsO1xuICAgICAgICB0aGlzLnRyYWNrRW50cnkgPSBudWxsO1xuICAgICAgICB0aGlzLnNwaW5lRGF0YSA9IG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBQbGF5KHRhcmdldDogY2MuTm9kZSwgZXZlbnRzOiBGdW5jdGlvbltdLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyID0gbmV3IEcxMDA5U3BpbmVBbmltYXRpb25IYW5kbGVyKHRoaXMsIHRhcmdldCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5QbGF5KHRhcmdldCwgZXZlbnRzLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcHVibGljIFN0b3AoaXNDYWxsQ29tcGxldGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLlN0b3AoaXNDYWxsQ29tcGxldGUpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLkRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBDbG9uZSgpOiBhbnkge1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gbmV3IEcxMDA5U3BpbmVBbmltYXRpb25BY3RvcjtcbiAgICAgICAgYW5pbWF0aW9uLnNrZWxldG9uRGF0YSA9IHRoaXMuc2tlbGV0b25EYXRhO1xuICAgICAgICBhbmltYXRpb24uZGVmYXVsdER1cmF0aW9uID0gdGhpcy5kZWZhdWx0RHVyYXRpb247XG4gICAgICAgIGFuaW1hdGlvbi5hbmltYXRpb25EYXRhID0gdGhpcy5hbmltYXRpb25EYXRhOyAgICBcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0RHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gdGhpcy5kZWZhdWx0RHVyYXRpb247XG4gICAgICAgIGlmICh0aGlzLnRyYWNrRW50cnkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gdGhpcy50cmFja0VudHJ5LmFuaW1hdGlvbkVuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIEdldElzUGxheWluZygpOiBhbnl7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrRW50cnkgJiYgKCB0aGlzLnRyYWNrRW50cnkudHJhY2tUaW1lIDw9IHRoaXMudHJhY2tFbnRyeS5hbmltYXRpb25FbmQpO1xuICAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTG9hZENvbXBsZXRlZCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3BpbmVTa2VsZXRvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudHJhY2tFbnRyeSA9IG51bGw7XG4gICAgfVxufVxuXG5cbmV4cG9ydCAgY2xhc3MgRzEwMDlTcGluZUFuaW1hdGlvbkRhdGEge1xuICAgIHB1YmxpYyBBbmltYXRpb25OYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7fTtcbn1cblxuXG5leHBvcnQgY2xhc3MgRzEwMDlTcGluZURhdGEge1xuXG4gICAgcHVibGljIE5hbWU6IHN0cmluZyA7XG4gICAgcHVibGljIElzTG9vcDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBUcmFja0luZGV4OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBUaW1lU2NhbGU6IG51bWJlciA9IDA7XG4gICAgcHVibGljIElzQ2FsbENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIEV2ZW50czogRzEwMDlTcGluZUV2ZW50RGF0YVtdID0gW107XG4gICAgcHVibGljIFN0YXRpY1Nwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5OYW1lID0gXCJhbmltYXRpb25cIjtcbiAgICAgICAgdGhpcy5Jc0xvb3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5UcmFja0luZGV4ID0gMDtcbiAgICAgICAgdGhpcy5UaW1lU2NhbGUgPSAwO1xuICAgICAgICB0aGlzLklzQ2FsbENvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuRXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuU3RhdGljU3ByaXRlRnJhbWUgPW5ldyBjYy5TcHJpdGVGcmFtZTtcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBHMTAwOVNwaW5lRXZlbnREYXRhIHtcbiAgICBwdWJsaWMgTmFtZTogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIFRpbWU6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7fTtcbn0iXX0=