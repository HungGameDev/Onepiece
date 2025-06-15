
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/animation/aka-g1009-spine-animation-handler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9hbmltYXRpb24vYWthLWcxMDA5LXNwaW5lLWFuaW1hdGlvbi1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFTSSxvQ0FBbUIsT0FBaUMsRUFBRSxVQUFtQjtRQVB6RSxjQUFTLEdBQTZCLElBQUksQ0FBQztRQUMzQyxXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM1QixrQkFBYSxHQUE4QixJQUFJLENBQUM7UUFDaEQsY0FBUyxHQUFtQixJQUFJLENBQUM7UUFHN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBRU0seUNBQUksR0FBWCxVQUFZLFVBQW1CLEVBQUUsTUFBa0IsRUFBRSxRQUFrQjtRQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLHlDQUFJLEdBQVgsVUFBWSxjQUF1QjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNsSCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBRU0sNENBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTyxvREFBZSxHQUF2QixVQUF3QixTQUF5QixFQUFFLFVBQW1CO1FBRWxFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDOUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQzNILENBQUM7SUFFTyxtREFBYyxHQUF0QixVQUF1QixRQUFrQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRU8scURBQWdCLEdBQXhCLFVBQXlCLE1BQWtCO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFVBQUMsVUFBVSxFQUFFLEtBQUs7WUFDNUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBekRnQiwwQkFBMEI7UUFEOUMsT0FBTztPQUNhLDBCQUEwQixDQTBEOUM7SUFBRCxpQ0FBQztDQTFERCxBQTBEQyxJQUFBO2tCQTFEb0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEcxMDA5U3BpbmVBbmltYXRpb25BY3RvciwgeyBHMTAwOVNwaW5lQW5pbWF0aW9uRGF0YSwgRzEwMDlTcGluZURhdGEgfSBmcm9tIFwiLi9ha2EtZzEwMDktc3BpbmUtYW5pbWF0aW9uXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlTcGluZUFuaW1hdGlvbkhhbmRsZXIge1xuXG4gICAgYW5pbWF0aW9uOiBHMTAwOVNwaW5lQW5pbWF0aW9uQWN0b3IgPSBudWxsO1xuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XG4gICAgc2tlbGV0b25EYXRhOiBzcC5Ta2VsZXRvbkRhdGEgPSBudWxsO1xuICAgIGRlZmF1bHREdXJhdGlvbjogbnVtYmVyID0gMDtcbiAgICBhbmltYXRpb25EYXRhOiBHMTAwOVNwaW5lQW5pbWF0aW9uRGF0YVtdID0gbnVsbDtcbiAgICBzcGluZURhdGE6IEcxMDA5U3BpbmVEYXRhID0gbnVsbDtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0OiBHMTAwOVNwaW5lQW5pbWF0aW9uQWN0b3IsIHRhcmdldE5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldE5vZGU7XG4gICAgICAgIHRoaXMuc2tlbGV0b25EYXRhID0gdGhpcy5hbmltYXRpb24uc2tlbGV0b25EYXRhO1xuICAgICAgICB0aGlzLmRlZmF1bHREdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uLmRlZmF1bHREdXJhdGlvbjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gdGhpcy5hbmltYXRpb24uYW5pbWF0aW9uRGF0YTtcbiAgICAgICAgdGhpcy5zcGluZURhdGEgPSB0aGlzLmFuaW1hdGlvbi5zcGluZURhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIFBsYXkodGFyZ2V0Tm9kZTogY2MuTm9kZSwgZXZlbnRzOiBGdW5jdGlvbltdLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24udHJhY2tFbnRyeSA9IHRoaXMuaGFuZGxlQW5pbWF0aW9uKHRoaXMuc3BpbmVEYXRhLCB0YXJnZXROb2RlKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3BpbmVFdmVudChldmVudHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTdG9wKGlzQ2FsbENvbXBsZXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5hbmltYXRpb24uc3BpbmVTa2VsZXRvbiB8fCAhdGhpcy5hbmltYXRpb24uc3BpbmVTa2VsZXRvbi5ub2RlIHx8ICF0aGlzLmFuaW1hdGlvbi50cmFja0VudHJ5KSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLmFuaW1hdGlvbi5zcGluZVNrZWxldG9uLmNsZWFyVHJhY2tzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnRyYWNrRW50cnkgPSBudWxsO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5zcGluZVNrZWxldG9uLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2tlbGV0b25EYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZWZhdWx0RHVyYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnNwaW5lRGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVBbmltYXRpb24oc3BpbmVEYXRhOiBHMTAwOVNwaW5lRGF0YSwgdGFyZ2V0Tm9kZTogY2MuTm9kZSk6IGFueSB7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb24uc3BpbmVTa2VsZXRvbiA9IHRhcmdldE5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSB8fCB0YXJnZXROb2RlLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnNwaW5lU2tlbGV0b24udGltZVNjYWxlID0gc3BpbmVEYXRhLlRpbWVTY2FsZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb24uc3BpbmVTa2VsZXRvbi5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb24uc3BpbmVTa2VsZXRvbi5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZWxldG9uRGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnNwaW5lU2tlbGV0b24uc2V0QW5pbWF0aW9uKHNwaW5lRGF0YS5UcmFja0luZGV4IHx8IDAsIHNwaW5lRGF0YS5OYW1lLCBzcGluZURhdGEuSXNMb29wIHx8IGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUNhbGxiYWNrKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5zcGluZVNrZWxldG9uLnNldFRyYWNrQ29tcGxldGVMaXN0ZW5lcih0aGlzLmFuaW1hdGlvbi50cmFja0VudHJ5LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVTcGluZUV2ZW50KGV2ZW50czogRnVuY3Rpb25bXSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5zcGluZVNrZWxldG9uLnNldEV2ZW50TGlzdGVuZXIoKHRyYWNrRW50cnksIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudHMgPyBldmVudHNbZXZlbnQuZGF0YS5uYW1lXSgpIDogKCgpID0+IHsgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==