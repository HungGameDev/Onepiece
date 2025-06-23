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
exports.Slot45AnimationProviderManager = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45AnimationProviderActor = /** @class */ (function (_super) {
    __extends(Slot45AnimationProviderActor, _super);
    function Slot45AnimationProviderActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listAnimation = [];
        return _this;
    }
    Slot45AnimationProviderActor.prototype.onLoad = function () {
        Slot45AnimationProviderManager.Instance().SetAniamtion(this.listAnimation);
    };
    __decorate([
        property(sp.SkeletonData)
    ], Slot45AnimationProviderActor.prototype, "listAnimation", void 0);
    Slot45AnimationProviderActor = __decorate([
        ccclass
    ], Slot45AnimationProviderActor);
    return Slot45AnimationProviderActor;
}(cc.Component));
exports.default = Slot45AnimationProviderActor;
var Slot45AnimationProviderManager = /** @class */ (function () {
    function Slot45AnimationProviderManager() {
        this.dictSpriteFrame = [];
    }
    Slot45AnimationProviderManager.Instance = function () {
        if (!Slot45AnimationProviderManager.instance)
            Slot45AnimationProviderManager.instance = new Slot45AnimationProviderManager();
        return Slot45AnimationProviderManager.instance;
    };
    Slot45AnimationProviderManager.prototype.SetAniamtion = function (_animationDatas) {
        var _this = this;
        _animationDatas.forEach(function (anim) {
            _this.dictSpriteFrame[_this.getKey(anim.name)] = anim;
        });
    };
    Slot45AnimationProviderManager.prototype.GetAnimation = function (key) {
        if (key == null) {
            cc.warn('Get sprite frame with invalid key:', key);
            return null;
        }
        return this.dictSpriteFrame[this.getKey(key)];
    };
    Slot45AnimationProviderManager.prototype.getKey = function (name) {
        return name.toLowerCase().replace(new RegExp('-', 'g'), '');
    };
    return Slot45AnimationProviderManager;
}());
exports.Slot45AnimationProviderManager = Slot45AnimationProviderManager;

cc._RF.pop();