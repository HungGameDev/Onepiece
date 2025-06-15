
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/present-win/aka-g1009-win-cell-item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb23b0Tc6lMppCSwaA20A6a', 'aka-g1009-win-cell-item');
// Script/UI/present-win/aka-g1009-win-cell-item.ts

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
var aka_g1009_game_config_1 = require("../../aka-g1009-game-config");
var aka_g1009_animation_provider_1 = require("../../base/animation/aka-g1009-animation-provider");
var aka_g1009_sprite_frame_provider_1 = require("../provider/aka-g1009-sprite-frame-provider");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009WinCellItemActor = /** @class */ (function (_super) {
    __extends(G1009WinCellItemActor, _super);
    function G1009WinCellItemActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellIndex = -1;
        _this.dimColor = cc.Color.WHITE;
        _this.skeleton = null;
        _this.sprite = null;
        _this.SymbolFormat = 'symbol_%s';
        _this.itemID = 'a';
        return _this;
    }
    G1009WinCellItemActor.prototype.onLoad = function () {
        this.sprite = this.node.getComponentInChildren(cc.Sprite);
        this.sprite.node.active = false;
        this.skeleton = this.node.getComponentInChildren(sp.Skeleton);
    };
    G1009WinCellItemActor.prototype.setNormalFrame = function () {
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        this.skeleton.node.active = true;
        var data = aka_g1009_animation_provider_1.G1009AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
        this.skeleton.skeletonData = (data);
        this.skeleton.setAnimation(0, "animation", false);
    };
    G1009WinCellItemActor.prototype.setOldFrame = function () {
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            this.skeleton.node.active = false;
            return;
        }
        var data = aka_g1009_animation_provider_1.G1009AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
        this.skeleton.skeletonData = (data);
        this.skeleton.setAnimation(0, "animation", false);
    };
    G1009WinCellItemActor.prototype.CheckValid = function () {
        return this.sprite != null;
    };
    G1009WinCellItemActor.prototype.GetItemID = function () {
        return this.itemID;
    };
    G1009WinCellItemActor.prototype.SetOldItem = function (item) {
        if (item != null) {
            this.itemID = item;
            this.setOldFrame();
        }
    };
    G1009WinCellItemActor.prototype.SetItem = function (item) {
        if (item != null) {
            this.itemID = item;
            this.setNormalFrame();
        }
    };
    G1009WinCellItemActor.prototype.PlayWinAnimation = function () {
        this.Reset();
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        if (aka_g1009_game_config_1.NEAR_WIN_SYMBOL.includes(this.itemID)) {
            this.skeleton.setAnimation(0, "Win_Loop", false);
        }
        else {
            this.skeleton.setAnimation(0, "Win", false);
        }
    };
    G1009WinCellItemActor.prototype.PlayWinTrigger = function () {
        var _this = this;
        this.Reset();
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        var track = this.skeleton.setAnimation(0, "Win_Appear", false);
        this.skeleton.setTrackCompleteListener(track, function () {
            _this.skeleton.setAnimation(0, "Win_Loop", true);
        });
    };
    G1009WinCellItemActor.prototype.SetDim = function () {
        this.skeleton.node.color = this.dimColor;
        this.sprite.node.color = this.dimColor;
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        if (this.skeleton) {
            this.skeleton.clearTrack(0);
            this.skeleton.setBonesToSetupPose();
        }
    };
    G1009WinCellItemActor.prototype.Reset = function () {
        this.skeleton.node.color = cc.Color.WHITE;
        this.sprite.node.color = cc.Color.WHITE;
    };
    G1009WinCellItemActor.prototype.Hide = function () {
        this.node.opacity = 0;
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        if (this.skeleton) {
            this.skeleton.clearTrack(0);
            this.skeleton.setBonesToSetupPose();
        }
    };
    G1009WinCellItemActor.prototype.Show = function () {
        this.node.opacity = 255;
    };
    G1009WinCellItemActor.prototype.ShowJackpotWin = function () {
        var _this = this;
        this.node.opacity = 255;
        if (this.itemID == "Core") {
            var track = this.skeleton.setAnimation(0, "Win_Appear", false);
            this.skeleton.setTrackCompleteListener(track, function () {
                _this.skeleton.setAnimation(0, "Win_Loop", true);
            });
        }
    };
    G1009WinCellItemActor.prototype.ShowStaticFrame = function () {
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        // this.skeleton.node.active = false;
        this.sprite.node.color = this.dimColor;
        // this.sprite.node.active = true;
        this.sprite.spriteFrame = aka_g1009_sprite_frame_provider_1.G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
    };
    G1009WinCellItemActor.prototype.HideStaticFrame = function () {
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        this.skeleton.node.active = true;
        this.sprite.node.active = false;
    };
    __decorate([
        property()
    ], G1009WinCellItemActor.prototype, "cellIndex", void 0);
    __decorate([
        property
    ], G1009WinCellItemActor.prototype, "dimColor", void 0);
    G1009WinCellItemActor = __decorate([
        ccclass
    ], G1009WinCellItemActor);
    return G1009WinCellItemActor;
}(cc.Component));
exports.default = G1009WinCellItemActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcHJlc2VudC13aW4vYWthLWcxMDA5LXdpbi1jZWxsLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQThEO0FBQzlELGtHQUFrRztBQUNsRywrRkFBOEY7QUFFeEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBbUQseUNBQVk7SUFBL0Q7UUFBQSxxRUE2SkM7UUExSkEsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWYsY0FBUSxHQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRXBDLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBQzdCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFDekIsa0JBQVksR0FBVyxXQUFXLENBQUM7UUFDbkMsWUFBTSxHQUFXLEdBQUcsQ0FBQzs7SUFtSjlCLENBQUM7SUFqSlUsc0NBQU0sR0FBaEI7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sOENBQWMsR0FBdEI7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUN0RDtZQUNDLE9BQU87U0FDUDtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxJ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SSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBekpEO1FBREMsUUFBUSxFQUFFOzREQUNZO0lBRXZCO1FBREMsUUFBUTsyREFDbUM7SUFMeEIscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0E2SnpDO0lBQUQsNEJBQUM7Q0E3SkQsQUE2SkMsQ0E3SmtELEVBQUUsQ0FBQyxTQUFTLEdBNko5RDtrQkE3Sm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5FQVJfV0lOX1NZTUJPTCB9IGZyb20gXCIuLi8uLi9ha2EtZzEwMDktZ2FtZS1jb25maWdcIjtcbmltcG9ydCB7IEcxMDA5QW5pbWF0aW9uUHJvdmlkZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvYW5pbWF0aW9uL2FrYS1nMTAwOS1hbmltYXRpb24tcHJvdmlkZXJcIjtcbmltcG9ydCB7IEcxMDA5U3ByaXRlUHJvdmlkZXJNYW5hZ2VyQWN0b3IgfSBmcm9tIFwiLi4vcHJvdmlkZXIvYWthLWcxMDA5LXNwcml0ZS1mcmFtZS1wcm92aWRlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5V2luQ2VsbEl0ZW1BY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblx0QHByb3BlcnR5KClcblx0Y2VsbEluZGV4OiBudW1iZXIgPSAtMTtcblx0QHByb3BlcnR5XG5cdHByaXZhdGUgZGltQ29sb3I6IGNjLkNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG5cblx0cHJpdmF0ZSBza2VsZXRvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXHRwcml2YXRlIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblx0cHJpdmF0ZSBTeW1ib2xGb3JtYXQ6IHN0cmluZyA9ICdzeW1ib2xfJXMnO1xuXHRwcml2YXRlIGl0ZW1JRDogc3RyaW5nID0gJ2EnO1xuXG5cdHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG5cdFx0dGhpcy5zcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpO1xuXHRcdHRoaXMuc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5za2VsZXRvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0Tm9ybWFsRnJhbWUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXRlbUlEID09IFwiQmxhbmtcIiB8fCB0aGlzLml0ZW1JRCA9PSBcIlJlYWN0b3JcIilcblx0XHR7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc2tlbGV0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdGxldCBkYXRhID0gRzEwMDlBbmltYXRpb25Qcm92aWRlck1hbmFnZXIuSW5zdGFuY2UoKS5HZXRBbmltYXRpb24oY2MuanMuZm9ybWF0U3RyKHRoaXMuU3ltYm9sRm9ybWF0LCB0aGlzLml0ZW1JRCkpO1xuXHRcdHRoaXMuc2tlbGV0b24uc2tlbGV0b25EYXRhID0gKGRhdGEpO1xuXHRcdHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0T2xkRnJhbWUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXRlbUlEID09IFwiQmxhbmtcIiB8fCB0aGlzLml0ZW1JRCA9PSBcIlJlYWN0b3JcIilcblx0XHR7XG5cdFx0XHR0aGlzLnNrZWxldG9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBkYXRhID0gRzEwMDlBbmltYXRpb25Qcm92aWRlck1hbmFnZXIuSW5zdGFuY2UoKS5HZXRBbmltYXRpb24oY2MuanMuZm9ybWF0U3RyKHRoaXMuU3ltYm9sRm9ybWF0LCB0aGlzLml0ZW1JRCkpO1xuXHRcdHRoaXMuc2tlbGV0b24uc2tlbGV0b25EYXRhID0gKGRhdGEpO1xuXHRcdHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcblx0fVxuXG5cdHB1YmxpYyBDaGVja1ZhbGlkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNwcml0ZSAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIEdldEl0ZW1JRCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLml0ZW1JRDtcblx0fVxuXG5cdHB1YmxpYyBTZXRPbGRJdGVtKGl0ZW06IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChpdGVtICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0dGhpcy5pdGVtSUQgPSBpdGVtO1xuXHRcdFx0dGhpcy5zZXRPbGRGcmFtZSgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBTZXRJdGVtKGl0ZW06IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChpdGVtICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0dGhpcy5pdGVtSUQgPSBpdGVtO1xuXHRcdFx0dGhpcy5zZXROb3JtYWxGcmFtZSgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBQbGF5V2luQW5pbWF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuUmVzZXQoKTtcblx0XHRpZiAodGhpcy5pdGVtSUQgPT0gXCJCbGFua1wiIHx8IHRoaXMuaXRlbUlEID09IFwiUmVhY3RvclwiKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKE5FQVJfV0lOX1NZTUJPTC5pbmNsdWRlcyh0aGlzLml0ZW1JRCkpXG5cdFx0e1xuXHRcdFx0dGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJXaW5fTG9vcFwiLCBmYWxzZSk7XG5cdFx0fSBlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJXaW5cIiwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBQbGF5V2luVHJpZ2dlcigpOiB2b2lkIHtcblx0XHR0aGlzLlJlc2V0KCk7XG5cdFx0aWYgKHRoaXMuaXRlbUlEID09IFwiQmxhbmtcIiB8fCB0aGlzLml0ZW1JRCA9PSBcIlJlYWN0b3JcIilcblx0XHR7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCB0cmFjayA9IHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiV2luX0FwcGVhclwiLCBmYWxzZSk7XG5cdFx0dGhpcy5za2VsZXRvbi5zZXRUcmFja0NvbXBsZXRlTGlzdGVuZXIodHJhY2ssICgpID0+IHtcblx0XHRcdHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiV2luX0xvb3BcIiwgdHJ1ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgU2V0RGltKCk6IHZvaWQge1xuXHRcdHRoaXMuc2tlbGV0b24ubm9kZS5jb2xvciA9IHRoaXMuZGltQ29sb3I7XG5cdFx0dGhpcy5zcHJpdGUubm9kZS5jb2xvciA9IHRoaXMuZGltQ29sb3I7XG5cdFx0aWYgKHRoaXMuaXRlbUlEID09IFwiQmxhbmtcIiB8fCB0aGlzLml0ZW1JRCA9PSBcIlJlYWN0b3JcIilcblx0XHR7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh0aGlzLnNrZWxldG9uKVxuXHRcdHtcblx0XHRcdHRoaXMuc2tlbGV0b24uY2xlYXJUcmFjaygwKTtcblx0XHRcdHRoaXMuc2tlbGV0b24uc2V0Qm9uZXNUb1NldHVwUG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBSZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLnNrZWxldG9uLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcblx0XHR0aGlzLnNwcml0ZS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG5cdH1cblxuXHRwdWJsaWMgSGlkZSgpOiB2b2lkIHtcblx0XHR0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG5cdFx0aWYgKHRoaXMuaXRlbUlEID09IFwiQmxhbmtcIiB8fCB0aGlzLml0ZW1JRCA9PSBcIlJlYWN0b3JcIilcblx0XHR7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh0aGlzLnNrZWxldG9uKVxuXHRcdHtcblx0XHRcdHRoaXMuc2tlbGV0b24uY2xlYXJUcmFjaygwKTtcblx0XHRcdHRoaXMuc2tlbGV0b24uc2V0Qm9uZXNUb1NldHVwUG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBTaG93KCk6IHZvaWQge1xuXHRcdHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuXHR9XG5cblx0cHVibGljIFNob3dKYWNrcG90V2luKCk6IHZvaWQge1xuXHRcdHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuXHRcdGlmICh0aGlzLml0ZW1JRCA9PSBcIkNvcmVcIilcblx0XHR7XG5cdFx0XHRsZXQgdHJhY2sgPSB0aGlzLnNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcIldpbl9BcHBlYXJcIiwgZmFsc2UpO1xuXHRcdFx0dGhpcy5za2VsZXRvbi5zZXRUcmFja0NvbXBsZXRlTGlzdGVuZXIodHJhY2ssICgpID0+IHtcblx0XHRcdFx0dGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJXaW5fTG9vcFwiLCB0cnVlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBTaG93U3RhdGljRnJhbWUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXRlbUlEID09IFwiQmxhbmtcIiB8fCB0aGlzLml0ZW1JRCA9PSBcIlJlYWN0b3JcIilcblx0XHR7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIHRoaXMuc2tlbGV0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0XHR0aGlzLnNwcml0ZS5ub2RlLmNvbG9yID0gdGhpcy5kaW1Db2xvcjtcblx0XHQvLyB0aGlzLnNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBHMTAwOVNwcml0ZVByb3ZpZGVyTWFuYWdlckFjdG9yLkluc3RhbmNlKCkuR2V0RnJhbWUoY2MuanMuZm9ybWF0U3RyKHRoaXMuU3ltYm9sRm9ybWF0LCB0aGlzLml0ZW1JRCkpO1xuXHR9XG5cblx0cHVibGljIEhpZGVTdGF0aWNGcmFtZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pdGVtSUQgPT0gXCJCbGFua1wiIHx8IHRoaXMuaXRlbUlEID09IFwiUmVhY3RvclwiKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5za2VsZXRvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5zcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0fVxufSJdfQ==