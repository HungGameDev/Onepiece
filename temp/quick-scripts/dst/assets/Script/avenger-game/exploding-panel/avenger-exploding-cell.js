
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-exploding-cell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad6afGHvIdHK6xn8gVDKgMl', 'avenger-exploding-cell');
// Script/avenger-game/exploding-panel/avenger-exploding-cell.ts

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
var Slot45_animation_provider_1 = require("../../base/animation/Slot45-animation-provider");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ExplodingCell = /** @class */ (function (_super) {
    __extends(ExplodingCell, _super);
    function ExplodingCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineSkeleton = null;
        _this.animEffectExplosion = null;
        _this.nameSkinFormat = 'symbol_%s';
        return _this;
    }
    ExplodingCell.prototype.onLoad = function () {
        this.animEffectExplosion = Slot45_animation_provider_1.G1009AnimationProviderManager.Instance().GetAnimation('eff_explosion');
    };
    ExplodingCell.prototype.PlayEffectExplodeCells = function (nameSymbol) {
        // var nameSkin = cc.js.formatStr(this.nameSkinFormat, nameSymbol);
        this.spineSkeleton.node.active = true;
        this.spineSkeleton.skeletonData = this.animEffectExplosion;
        // this.spineSkeleton.setSkin(nameSkin);
        this.spineSkeleton.setEndListener(function () {
            this.spineSkeleton.node.active = false;
            this.spineSkeleton.clearTrack(0);
        }.bind(this));
        this.spineSkeleton.setAnimation(0, "animation", false);
    };
    __decorate([
        property(sp.Skeleton)
    ], ExplodingCell.prototype, "spineSkeleton", void 0);
    ExplodingCell = __decorate([
        ccclass
    ], ExplodingCell);
    return ExplodingCell;
}(cc.Component));
exports.default = ExplodingCell;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXGV4cGxvZGluZy1wYW5lbFxcYXZlbmdlci1leHBsb2RpbmctY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RkFBK0Y7QUFFekYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUF5QkM7UUF0QkcsbUJBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLHlCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixvQkFBYyxHQUFXLFdBQVcsQ0FBQzs7SUFtQmpELENBQUM7SUFoQkcsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyx5REFBNkIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVNLDhDQUFzQixHQUE3QixVQUE4QixVQUFrQjtRQUM1QyxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDM0Qsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUM3QjtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3dEQUNZO0lBSGpCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F5QmpDO0lBQUQsb0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QjBDLEVBQUUsQ0FBQyxTQUFTLEdBeUJ0RDtrQkF6Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOUFuaW1hdGlvblByb3ZpZGVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2FuaW1hdGlvbi9TbG90NDUtYW5pbWF0aW9uLXByb3ZpZGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9kaW5nQ2VsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgc3BpbmVTa2VsZXRvbjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbUVmZmVjdEV4cGxvc2lvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIG5hbWVTa2luRm9ybWF0OiBzdHJpbmcgPSAnc3ltYm9sXyVzJztcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbUVmZmVjdEV4cGxvc2lvbiA9IEcxMDA5QW5pbWF0aW9uUHJvdmlkZXJNYW5hZ2VyLkluc3RhbmNlKCkuR2V0QW5pbWF0aW9uKCdlZmZfZXhwbG9zaW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFBsYXlFZmZlY3RFeHBsb2RlQ2VsbHMobmFtZVN5bWJvbDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gdmFyIG5hbWVTa2luID0gY2MuanMuZm9ybWF0U3RyKHRoaXMubmFtZVNraW5Gb3JtYXQsIG5hbWVTeW1ib2wpO1xyXG4gICAgICAgIHRoaXMuc3BpbmVTa2VsZXRvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGluZVNrZWxldG9uLnNrZWxldG9uRGF0YSA9IHRoaXMuYW5pbUVmZmVjdEV4cGxvc2lvbjtcclxuICAgICAgICAvLyB0aGlzLnNwaW5lU2tlbGV0b24uc2V0U2tpbihuYW1lU2tpbik7XHJcbiAgICAgICAgdGhpcy5zcGluZVNrZWxldG9uLnNldEVuZExpc3RlbmVyKFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lU2tlbGV0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVTa2VsZXRvbi5jbGVhclRyYWNrKDApO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc3BpbmVTa2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==