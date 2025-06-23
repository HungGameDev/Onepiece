"use strict";
cc._RF.push(module, 'bb23b0Tc6lMppCSwaA20A6a', 'Slot45-win-cell-item');
// Script/UI/present-win/Slot45-win-cell-item.ts

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
var Slot45_game_config_1 = require("../../Slot45-game-config");
var Slot45_animation_provider_1 = require("../../base/animation/Slot45-animation-provider");
var Slot45_sprite_frame_provider_1 = require("../provider/Slot45-sprite-frame-provider");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45WinCellItemActor = /** @class */ (function (_super) {
    __extends(Slot45WinCellItemActor, _super);
    function Slot45WinCellItemActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellIndex = -1;
        _this.dimColor = cc.Color.WHITE;
        _this.skeleton = null;
        _this.sprite = null;
        _this.SymbolFormat = 'symbol_%s';
        _this.itemID = 'a';
        return _this;
    }
    Slot45WinCellItemActor.prototype.onLoad = function () {
        this.sprite = this.node.getComponentInChildren(cc.Sprite);
        this.sprite.node.active = false;
        this.skeleton = this.node.getComponentInChildren(sp.Skeleton);
    };
    Slot45WinCellItemActor.prototype.setNormalFrame = function () {
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        this.skeleton.node.active = true;
        var data = Slot45_animation_provider_1.Slot45AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
        this.skeleton.skeletonData = (data);
        this.skeleton.setAnimation(0, "animation", false);
    };
    Slot45WinCellItemActor.prototype.setOldFrame = function () {
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            this.skeleton.node.active = false;
            return;
        }
        var data = Slot45_animation_provider_1.Slot45AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
        this.skeleton.skeletonData = (data);
        this.skeleton.setAnimation(0, "animation", false);
    };
    Slot45WinCellItemActor.prototype.CheckValid = function () {
        return this.sprite != null;
    };
    Slot45WinCellItemActor.prototype.GetItemID = function () {
        return this.itemID;
    };
    Slot45WinCellItemActor.prototype.SetOldItem = function (item) {
        if (item != null) {
            this.itemID = item;
            this.setOldFrame();
        }
    };
    Slot45WinCellItemActor.prototype.SetItem = function (item) {
        if (item != null) {
            this.itemID = item;
            this.setNormalFrame();
        }
    };
    Slot45WinCellItemActor.prototype.PlayWinAnimation = function () {
        this.Reset();
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        if (Slot45_game_config_1.NEAR_WIN_SYMBOL.includes(this.itemID)) {
            this.skeleton.setAnimation(0, "Win_Loop", false);
        }
        else {
            this.skeleton.setAnimation(0, "Win", false);
        }
    };
    Slot45WinCellItemActor.prototype.PlayWinTrigger = function () {
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
    Slot45WinCellItemActor.prototype.SetDim = function () {
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
    Slot45WinCellItemActor.prototype.Reset = function () {
        this.skeleton.node.color = cc.Color.WHITE;
        this.sprite.node.color = cc.Color.WHITE;
    };
    Slot45WinCellItemActor.prototype.Hide = function () {
        this.node.opacity = 0;
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        if (this.skeleton) {
            this.skeleton.clearTrack(0);
            this.skeleton.setBonesToSetupPose();
        }
    };
    Slot45WinCellItemActor.prototype.Show = function () {
        this.node.opacity = 255;
    };
    Slot45WinCellItemActor.prototype.ShowJackpotWin = function () {
        var _this = this;
        this.node.opacity = 255;
        if (this.itemID == "Core") {
            var track = this.skeleton.setAnimation(0, "Win_Appear", false);
            this.skeleton.setTrackCompleteListener(track, function () {
                _this.skeleton.setAnimation(0, "Win_Loop", true);
            });
        }
    };
    Slot45WinCellItemActor.prototype.ShowStaticFrame = function () {
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        // this.skeleton.node.active = false;
        this.sprite.node.color = this.dimColor;
        // this.sprite.node.active = true;
        this.sprite.spriteFrame = Slot45_sprite_frame_provider_1.Slot45SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
    };
    Slot45WinCellItemActor.prototype.HideStaticFrame = function () {
        if (this.itemID == "Blank" || this.itemID == "Reactor") {
            return;
        }
        this.skeleton.node.active = true;
        this.sprite.node.active = false;
    };
    __decorate([
        property()
    ], Slot45WinCellItemActor.prototype, "cellIndex", void 0);
    __decorate([
        property
    ], Slot45WinCellItemActor.prototype, "dimColor", void 0);
    Slot45WinCellItemActor = __decorate([
        ccclass
    ], Slot45WinCellItemActor);
    return Slot45WinCellItemActor;
}(cc.Component));
exports.default = Slot45WinCellItemActor;

cc._RF.pop();