"use strict";
cc._RF.push(module, '4883d791oBLZKeD8HQlHVAp', 'Slot45-animation-provider');
// Script/base/animation/Slot45-animation-provider.ts

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
exports.G1009AnimationProviderManager = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009AnimationProviderActor = /** @class */ (function (_super) {
    __extends(G1009AnimationProviderActor, _super);
    function G1009AnimationProviderActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listAnimation = [];
        return _this;
    }
    G1009AnimationProviderActor.prototype.onLoad = function () {
        G1009AnimationProviderManager.Instance().SetAniamtion(this.listAnimation);
    };
    __decorate([
        property(sp.SkeletonData)
    ], G1009AnimationProviderActor.prototype, "listAnimation", void 0);
    G1009AnimationProviderActor = __decorate([
        ccclass
    ], G1009AnimationProviderActor);
    return G1009AnimationProviderActor;
}(cc.Component));
exports.default = G1009AnimationProviderActor;
var G1009AnimationProviderManager = /** @class */ (function () {
    function G1009AnimationProviderManager() {
        this.dictSpriteFrame = [];
    }
    G1009AnimationProviderManager.Instance = function () {
        if (!G1009AnimationProviderManager.instance)
            G1009AnimationProviderManager.instance = new G1009AnimationProviderManager();
        return G1009AnimationProviderManager.instance;
    };
    G1009AnimationProviderManager.prototype.SetAniamtion = function (_animationDatas) {
        var _this = this;
        _animationDatas.forEach(function (anim) {
            _this.dictSpriteFrame[_this.getKey(anim.name)] = anim;
        });
    };
    G1009AnimationProviderManager.prototype.GetAnimation = function (key) {
        if (key == null) {
            cc.warn('Get sprite frame with invalid key:', key);
            return null;
        }
        return this.dictSpriteFrame[this.getKey(key)];
    };
    G1009AnimationProviderManager.prototype.getKey = function (name) {
        return name.toLowerCase().replace(new RegExp('-', 'g'), '');
    };
    return G1009AnimationProviderManager;
}());
exports.G1009AnimationProviderManager = G1009AnimationProviderManager;

cc._RF.pop();