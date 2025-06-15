
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
var aka_g1009_animation_provider_1 = require("../../base/animation/aka-g1009-animation-provider");
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
        this.animEffectExplosion = aka_g1009_animation_provider_1.G1009AnimationProviderManager.Instance().GetAnimation('eff_explosion');
    };
    ExplodingCell.prototype.PlayEffectExplodeCells = function (nameSymbol) {
        var nameSkin = cc.js.formatStr(this.nameSkinFormat, nameSymbol);
        this.spineSkeleton.node.active = true;
        this.spineSkeleton.skeletonData = this.animEffectExplosion;
        this.spineSkeleton.setSkin(nameSkin);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYXZlbmdlci1nYW1lL2V4cGxvZGluZy1wYW5lbC9hdmVuZ2VyLWV4cGxvZGluZy1jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtHQUFrRztBQUU1RixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXlCQztRQXRCRyxtQkFBYSxHQUFnQixJQUFJLENBQUM7UUFFMUIseUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQzNCLG9CQUFjLEdBQVcsV0FBVyxDQUFDOztJQW1CakQsQ0FBQztJQWhCRyw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLG1CQUFtQixHQUFHLDREQUE2QixDQUFDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRU0sOENBQXNCLEdBQTdCLFVBQThCLFVBQWtCO1FBQzVDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQzdCO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0RBQ1k7SUFIakIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXlCakM7SUFBRCxvQkFBQztDQXpCRCxBQXlCQyxDQXpCMEMsRUFBRSxDQUFDLFNBQVMsR0F5QnREO2tCQXpCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcxMDA5QW5pbWF0aW9uUHJvdmlkZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvYW5pbWF0aW9uL2FrYS1nMTAwOS1hbmltYXRpb24tcHJvdmlkZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvZGluZ0NlbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIHNwaW5lU2tlbGV0b246IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIHByaXZhdGUgYW5pbUVmZmVjdEV4cGxvc2lvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBuYW1lU2tpbkZvcm1hdDogc3RyaW5nID0gJ3N5bWJvbF8lcyc7XG5cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hbmltRWZmZWN0RXhwbG9zaW9uID0gRzEwMDlBbmltYXRpb25Qcm92aWRlck1hbmFnZXIuSW5zdGFuY2UoKS5HZXRBbmltYXRpb24oJ2VmZl9leHBsb3Npb24nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgUGxheUVmZmVjdEV4cGxvZGVDZWxscyhuYW1lU3ltYm9sOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIG5hbWVTa2luID0gY2MuanMuZm9ybWF0U3RyKHRoaXMubmFtZVNraW5Gb3JtYXQsIG5hbWVTeW1ib2wpO1xuICAgICAgICB0aGlzLnNwaW5lU2tlbGV0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwaW5lU2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5hbmltRWZmZWN0RXhwbG9zaW9uO1xuICAgICAgICB0aGlzLnNwaW5lU2tlbGV0b24uc2V0U2tpbihuYW1lU2tpbik7XG4gICAgICAgIHRoaXMuc3BpbmVTa2VsZXRvbi5zZXRFbmRMaXN0ZW5lcihcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lU2tlbGV0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lU2tlbGV0b24uY2xlYXJUcmFjaygwKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3BpbmVTa2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuICAgIH1cbn1cbiJdfQ==