
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/spin-panel/aka-g1009-cell-item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '948e4CEajtGVoHR0RdCP6+B', 'aka-g1009-cell-item');
// Script/UI/spin-panel/aka-g1009-cell-item.ts

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
var aka_g1009_sprite_frame_provider_1 = require("../provider/aka-g1009-sprite-frame-provider");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009CellItemActor = /** @class */ (function (_super) {
    __extends(G1009CellItemActor, _super);
    function G1009CellItemActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellIndex = -1;
        _this.sprite = null;
        _this.skeleton = null;
        _this.dimColor = cc.Color.WHITE;
        _this.isFreespins = false;
        _this.itemID = 'a';
        _this.SymbolFormat = 'Symbol_%s';
        _this.SpinSymbolFormat = 'symbol_%s';
        return _this;
    }
    G1009CellItemActor.prototype.setSpinFrame = function () {
        this.skeleton.node.active = false;
        this.sprite.node.active = true;
        var frame = aka_g1009_sprite_frame_provider_1.G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SpinSymbolFormat, this.itemID));
        this.sprite.spriteFrame = frame;
    };
    G1009CellItemActor.prototype.setNormalFrame = function () {
        this.skeleton.node.active = true;
        this.sprite.node.active = false;
        var data = aka_g1009_animation_provider_1.G1009AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
        if (data) {
            this.skeleton.node.active = true;
            this.sprite.node.active = false;
            this.skeleton.skeletonData = (data);
            this.skeleton.setAnimation(0, "animation", true);
        }
        else {
            this.skeleton.node.active = false;
            this.sprite.node.active = true;
            var frame = aka_g1009_sprite_frame_provider_1.G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
            this.sprite.spriteFrame = frame;
        }
    };
    G1009CellItemActor.prototype.setOldFrame = function () {
        var data = aka_g1009_animation_provider_1.G1009AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
        if (data) {
            this.skeleton.node.active = true;
            this.sprite.node.active = false;
            this.skeleton.skeletonData = (data);
            this.skeleton.setAnimation(0, "animation", true);
        }
        else {
            this.skeleton.node.active = false;
            this.sprite.node.active = true;
            var frame = aka_g1009_sprite_frame_provider_1.G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
            this.sprite.spriteFrame = frame;
        }
    };
    G1009CellItemActor.prototype.CheckValid = function () {
        return this.sprite.spriteFrame != null;
    };
    G1009CellItemActor.prototype.GetCellIndex = function () {
        return this.cellIndex;
    };
    G1009CellItemActor.prototype.GetItemID = function () {
        return this.itemID;
    };
    G1009CellItemActor.prototype.Enable = function () {
        this.sprite.enabled = true;
    };
    G1009CellItemActor.prototype.Disable = function () {
        this.sprite.enabled = false;
    };
    G1009CellItemActor.prototype.SetItem = function (item) {
        if (item != null) {
            this.itemID = item;
            this.setNormalFrame();
        }
    };
    G1009CellItemActor.prototype.SetOldItem = function (item) {
        if (item != null) {
            this.itemID = item;
            this.setOldFrame();
        }
    };
    G1009CellItemActor.prototype.SetScrollItem = function (item) {
        if (item != null) {
            this.itemID = item;
            this.setSpinFrame();
        }
    };
    G1009CellItemActor.prototype.StartSpin = function () {
        this.SetScrollItem(this.itemID);
    };
    G1009CellItemActor.prototype.StopSpin = function () {
        this.SetItem(this.itemID);
    };
    G1009CellItemActor.prototype.Reset = function () {
        // this.Enable();
    };
    G1009CellItemActor.prototype.SetCellIndex = function (_cellIndex) {
        this.cellIndex = _cellIndex;
    };
    __decorate([
        property
    ], G1009CellItemActor.prototype, "cellIndex", void 0);
    __decorate([
        property(cc.Sprite)
    ], G1009CellItemActor.prototype, "sprite", void 0);
    __decorate([
        property(sp.Skeleton)
    ], G1009CellItemActor.prototype, "skeleton", void 0);
    __decorate([
        property
    ], G1009CellItemActor.prototype, "dimColor", void 0);
    G1009CellItemActor = __decorate([
        ccclass
    ], G1009CellItemActor);
    return G1009CellItemActor;
}(cc.Component));
exports.default = G1009CellItemActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvc3Bpbi1wYW5lbC9ha2EtZzEwMDktY2VsbC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtHQUFrRztBQUNsRywrRkFBOEY7QUFFeEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUE0SEM7UUF6SEEsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBR3ZCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHakIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFHckMsY0FBUSxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRXBDLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFDckIsa0JBQVksR0FBVyxXQUFXLENBQUM7UUFDbkMsc0JBQWdCLEdBQVcsV0FBVyxDQUFDOztJQTJHeEMsQ0FBQztJQXpHUSx5Q0FBWSxHQUFwQjtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLEtBQUssR0FBRyxpRUFBK0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3JILElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRU8sMkNBQWMsR0FBdEI7UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFN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aEIsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0E0SHRDO0lBQUQseUJBQUM7Q0E1SEQsQUE0SEMsQ0E1SCtDLEVBQUUsQ0FBQyxTQUFTLEdBNEgzRDtrQkE1SG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcxMDA5QW5pbWF0aW9uUHJvdmlkZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvYW5pbWF0aW9uL2FrYS1nMTAwOS1hbmltYXRpb24tcHJvdmlkZXJcIjtcbmltcG9ydCB7IEcxMDA5U3ByaXRlUHJvdmlkZXJNYW5hZ2VyQWN0b3IgfSBmcm9tIFwiLi4vcHJvdmlkZXIvYWthLWcxMDA5LXNwcml0ZS1mcmFtZS1wcm92aWRlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlDZWxsSXRlbUFjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXHRAcHJvcGVydHlcblx0Y2VsbEluZGV4OiBudW1iZXIgPSAtMTtcblxuXHRAcHJvcGVydHkoY2MuU3ByaXRlKVxuXHRzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cblx0QHByb3BlcnR5KHNwLlNrZWxldG9uKVxuXHRwcml2YXRlIHNrZWxldG9uOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG5cblx0QHByb3BlcnR5XG5cdGRpbUNvbG9yOiBjYy5Db2xvciA9IGNjLkNvbG9yLldISVRFO1xuXG5cdGlzRnJlZXNwaW5zOiBib29sZWFuID0gZmFsc2U7XG5cdGl0ZW1JRDogc3RyaW5nID0gJ2EnO1xuXHRTeW1ib2xGb3JtYXQ6IHN0cmluZyA9ICdTeW1ib2xfJXMnO1xuXHRTcGluU3ltYm9sRm9ybWF0OiBzdHJpbmcgPSAnc3ltYm9sXyVzJztcblxuXHRwcml2YXRlIHNldFNwaW5GcmFtZSgpOiB2b2lkIHtcblx0XHR0aGlzLnNrZWxldG9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5zcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdGxldCBmcmFtZSA9IEcxMDA5U3ByaXRlUHJvdmlkZXJNYW5hZ2VyQWN0b3IuSW5zdGFuY2UoKS5HZXRGcmFtZShjYy5qcy5mb3JtYXRTdHIodGhpcy5TcGluU3ltYm9sRm9ybWF0LCB0aGlzLml0ZW1JRCkpO1xuXHRcdHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gZnJhbWU7XG5cdH1cblxuXHRwcml2YXRlIHNldE5vcm1hbEZyYW1lKCk6IHZvaWQge1xuXHRcdHRoaXMuc2tlbGV0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdHRoaXMuc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0bGV0IGRhdGEgPSBHMTAwOUFuaW1hdGlvblByb3ZpZGVyTWFuYWdlci5JbnN0YW5jZSgpLkdldEFuaW1hdGlvbihjYy5qcy5mb3JtYXRTdHIodGhpcy5TeW1ib2xGb3JtYXQsIHRoaXMuaXRlbUlEKSk7XG5cblx0XHRpZiAoZGF0YSlcblx0XHR7XG5cdFx0XHR0aGlzLnNrZWxldG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0aGlzLnNrZWxldG9uLnNrZWxldG9uRGF0YSA9IChkYXRhKTtcblx0XHRcdHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIHRydWUpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5za2VsZXRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5zcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0bGV0IGZyYW1lID0gRzEwMDlTcHJpdGVQcm92aWRlck1hbmFnZXJBY3Rvci5JbnN0YW5jZSgpLkdldEZyYW1lKGNjLmpzLmZvcm1hdFN0cih0aGlzLlN5bWJvbEZvcm1hdCwgdGhpcy5pdGVtSUQpKTtcblx0XHRcdHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gZnJhbWU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRPbGRGcmFtZSgpOiB2b2lkIHtcblx0XHRsZXQgZGF0YSA9IEcxMDA5QW5pbWF0aW9uUHJvdmlkZXJNYW5hZ2VyLkluc3RhbmNlKCkuR2V0QW5pbWF0aW9uKGNjLmpzLmZvcm1hdFN0cih0aGlzLlN5bWJvbEZvcm1hdCwgdGhpcy5pdGVtSUQpKTtcblx0XHRpZiAoZGF0YSlcblx0XHR7XG5cdFx0XHR0aGlzLnNrZWxldG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0aGlzLnNrZWxldG9uLnNrZWxldG9uRGF0YSA9IChkYXRhKTtcblx0XHRcdHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIHRydWUpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1x0XHRcdFxuXHRcdFx0dGhpcy5za2VsZXRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5zcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0bGV0IGZyYW1lID0gRzEwMDlTcHJpdGVQcm92aWRlck1hbmFnZXJBY3Rvci5JbnN0YW5jZSgpLkdldEZyYW1lKGNjLmpzLmZvcm1hdFN0cih0aGlzLlN5bWJvbEZvcm1hdCwgdGhpcy5pdGVtSUQpKTtcblx0XHRcdHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gZnJhbWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIENoZWNrVmFsaWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lICE9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgR2V0Q2VsbEluZGV4KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuY2VsbEluZGV4O1xuXHR9XG5cblx0cHVibGljIEdldEl0ZW1JRCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLml0ZW1JRDtcblx0fVxuXG5cdHB1YmxpYyBFbmFibGUoKTogdm9pZCB7XG5cdFx0dGhpcy5zcHJpdGUuZW5hYmxlZCA9IHRydWU7XG5cdH1cblxuXHRwdWJsaWMgRGlzYWJsZSgpOiB2b2lkIHtcblx0XHR0aGlzLnNwcml0ZS5lbmFibGVkID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgU2V0SXRlbShpdGVtOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoaXRlbSAhPSBudWxsKVxuXHRcdHtcblx0XHRcdHRoaXMuaXRlbUlEID0gaXRlbTtcblx0XHRcdHRoaXMuc2V0Tm9ybWFsRnJhbWUoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgU2V0T2xkSXRlbShpdGVtOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoaXRlbSAhPSBudWxsKVxuXHRcdHtcblx0XHRcdHRoaXMuaXRlbUlEID0gaXRlbTtcblx0XHRcdHRoaXMuc2V0T2xkRnJhbWUoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgU2V0U2Nyb2xsSXRlbShpdGVtOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoaXRlbSAhPSBudWxsKVxuXHRcdHtcblx0XHRcdHRoaXMuaXRlbUlEID0gaXRlbTtcblx0XHRcdHRoaXMuc2V0U3BpbkZyYW1lKCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIFN0YXJ0U3BpbigpOiB2b2lkIHtcblx0XHR0aGlzLlNldFNjcm9sbEl0ZW0odGhpcy5pdGVtSUQpO1xuXHR9XG5cblx0cHVibGljIFN0b3BTcGluKCk6IHZvaWQge1xuXHRcdHRoaXMuU2V0SXRlbSh0aGlzLml0ZW1JRCk7XG5cdH1cblxuXHRwdWJsaWMgUmVzZXQoKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy5FbmFibGUoKTtcblx0fVxuXG5cdHB1YmxpYyBTZXRDZWxsSW5kZXgoX2NlbGxJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jZWxsSW5kZXggPSBfY2VsbEluZGV4O1xuXHR9XG59Il19