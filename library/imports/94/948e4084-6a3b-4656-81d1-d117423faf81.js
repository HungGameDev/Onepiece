"use strict";
cc._RF.push(module, '948e4CEajtGVoHR0RdCP6+B', 'Slot45-cell-item');
// Script/UI/spin-panel/Slot45-cell-item.ts

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
var Slot45_sprite_frame_provider_1 = require("../provider/Slot45-sprite-frame-provider");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45CellItemActor = /** @class */ (function (_super) {
    __extends(Slot45CellItemActor, _super);
    function Slot45CellItemActor() {
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
    Slot45CellItemActor.prototype.setSpinFrame = function () {
        this.skeleton.node.active = false;
        this.sprite.node.active = true;
        var frame = Slot45_sprite_frame_provider_1.Slot45SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SpinSymbolFormat, this.itemID));
        this.sprite.spriteFrame = frame;
    };
    Slot45CellItemActor.prototype.setNormalFrame = function () {
        this.skeleton.node.active = true;
        this.sprite.node.active = false;
        var data = Slot45_animation_provider_1.Slot45AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
        if (data) {
            this.skeleton.node.active = true;
            this.sprite.node.active = false;
            this.skeleton.skeletonData = (data);
            this.skeleton.setAnimation(0, "animation", true);
        }
        else {
            this.skeleton.node.active = false;
            this.sprite.node.active = true;
            var frame = Slot45_sprite_frame_provider_1.Slot45SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
            this.sprite.spriteFrame = frame;
        }
    };
    Slot45CellItemActor.prototype.setOldFrame = function () {
        var data = Slot45_animation_provider_1.Slot45AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
        if (data) {
            this.skeleton.node.active = true;
            this.sprite.node.active = false;
            this.skeleton.skeletonData = (data);
            this.skeleton.setAnimation(0, "animation", true);
        }
        else {
            this.skeleton.node.active = false;
            this.sprite.node.active = true;
            var frame = Slot45_sprite_frame_provider_1.Slot45SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
            this.sprite.spriteFrame = frame;
        }
    };
    Slot45CellItemActor.prototype.CheckValid = function () {
        return this.sprite.spriteFrame != null;
    };
    Slot45CellItemActor.prototype.GetCellIndex = function () {
        return this.cellIndex;
    };
    Slot45CellItemActor.prototype.GetItemID = function () {
        return this.itemID;
    };
    Slot45CellItemActor.prototype.Enable = function () {
        this.sprite.enabled = true;
    };
    Slot45CellItemActor.prototype.Disable = function () {
        this.sprite.enabled = false;
    };
    Slot45CellItemActor.prototype.SetItem = function (item) {
        if (item != null) {
            this.itemID = item;
            this.setNormalFrame();
        }
    };
    Slot45CellItemActor.prototype.SetOldItem = function (item) {
        if (item != null) {
            this.itemID = item;
            this.setOldFrame();
        }
    };
    Slot45CellItemActor.prototype.SetScrollItem = function (item) {
        if (item != null) {
            this.itemID = item;
            this.setSpinFrame();
        }
    };
    Slot45CellItemActor.prototype.StartSpin = function () {
        this.SetScrollItem(this.itemID);
    };
    Slot45CellItemActor.prototype.StopSpin = function () {
        this.SetItem(this.itemID);
    };
    Slot45CellItemActor.prototype.Reset = function () {
        // this.Enable();
    };
    Slot45CellItemActor.prototype.SetCellIndex = function (_cellIndex) {
        this.cellIndex = _cellIndex;
    };
    __decorate([
        property
    ], Slot45CellItemActor.prototype, "cellIndex", void 0);
    __decorate([
        property(cc.Sprite)
    ], Slot45CellItemActor.prototype, "sprite", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot45CellItemActor.prototype, "skeleton", void 0);
    __decorate([
        property
    ], Slot45CellItemActor.prototype, "dimColor", void 0);
    Slot45CellItemActor = __decorate([
        ccclass
    ], Slot45CellItemActor);
    return Slot45CellItemActor;
}(cc.Component));
exports.default = Slot45CellItemActor;

cc._RF.pop();