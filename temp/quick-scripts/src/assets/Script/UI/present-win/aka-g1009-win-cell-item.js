"use strict";
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