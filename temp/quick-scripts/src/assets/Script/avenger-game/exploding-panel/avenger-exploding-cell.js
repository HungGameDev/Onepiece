"use strict";
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