
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
        this.animEffectExplosion = Slot45_animation_provider_1.Slot45AnimationProviderManager.Instance().GetAnimation('eff_explosion');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXGV4cGxvZGluZy1wYW5lbFxcYXZlbmdlci1leHBsb2RpbmctY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RkFBZ0c7QUFFMUYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUF5QkM7UUF0QkcsbUJBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBRTFCLHlCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixvQkFBYyxHQUFXLFdBQVcsQ0FBQzs7SUFtQmpELENBQUM7SUFoQkcsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxtQkFBbUIsR0FBRywwREFBOEIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVNLDhDQUFzQixHQUE3QixVQUE4QixVQUFrQjtRQUM1QyxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDM0Qsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUM3QjtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3dEQUNZO0lBSGpCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F5QmpDO0lBQUQsb0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QjBDLEVBQUUsQ0FBQyxTQUFTLEdBeUJ0RDtrQkF6Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbG90NDVBbmltYXRpb25Qcm92aWRlck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9hbmltYXRpb24vU2xvdDQ1LWFuaW1hdGlvbi1wcm92aWRlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvZGluZ0NlbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHNwaW5lU2tlbGV0b246IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFuaW1FZmZlY3RFeHBsb3Npb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBuYW1lU2tpbkZvcm1hdDogc3RyaW5nID0gJ3N5bWJvbF8lcyc7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmFuaW1FZmZlY3RFeHBsb3Npb24gPSBTbG90NDVBbmltYXRpb25Qcm92aWRlck1hbmFnZXIuSW5zdGFuY2UoKS5HZXRBbmltYXRpb24oJ2VmZl9leHBsb3Npb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUGxheUVmZmVjdEV4cGxvZGVDZWxscyhuYW1lU3ltYm9sOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyB2YXIgbmFtZVNraW4gPSBjYy5qcy5mb3JtYXRTdHIodGhpcy5uYW1lU2tpbkZvcm1hdCwgbmFtZVN5bWJvbCk7XHJcbiAgICAgICAgdGhpcy5zcGluZVNrZWxldG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNwaW5lU2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5hbmltRWZmZWN0RXhwbG9zaW9uO1xyXG4gICAgICAgIC8vIHRoaXMuc3BpbmVTa2VsZXRvbi5zZXRTa2luKG5hbWVTa2luKTtcclxuICAgICAgICB0aGlzLnNwaW5lU2tlbGV0b24uc2V0RW5kTGlzdGVuZXIoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVTa2VsZXRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZVNrZWxldG9uLmNsZWFyVHJhY2soMCk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zcGluZVNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuIl19