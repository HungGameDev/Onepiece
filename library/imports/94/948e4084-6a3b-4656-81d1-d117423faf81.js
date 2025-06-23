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
        var frame = Slot45_sprite_frame_provider_1.G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SpinSymbolFormat, this.itemID));
        this.sprite.spriteFrame = frame;
    };
    G1009CellItemActor.prototype.setNormalFrame = function () {
        this.skeleton.node.active = true;
        this.sprite.node.active = false;
        var data = Slot45_animation_provider_1.G1009AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
        if (data) {
            this.skeleton.node.active = true;
            this.sprite.node.active = false;
            this.skeleton.skeletonData = (data);
            this.skeleton.setAnimation(0, "animation", true);
        }
        else {
            this.skeleton.node.active = false;
            this.sprite.node.active = true;
            var frame = Slot45_sprite_frame_provider_1.G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
            this.sprite.spriteFrame = frame;
        }
    };
    G1009CellItemActor.prototype.setOldFrame = function () {
        var data = Slot45_animation_provider_1.G1009AnimationProviderManager.Instance().GetAnimation(cc.js.formatStr(this.SymbolFormat, this.itemID));
        if (data) {
            this.skeleton.node.active = true;
            this.sprite.node.active = false;
            this.skeleton.skeletonData = (data);
            this.skeleton.setAnimation(0, "animation", true);
        }
        else {
            this.skeleton.node.active = false;
            this.sprite.node.active = true;
            var frame = Slot45_sprite_frame_provider_1.G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, this.itemID));
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