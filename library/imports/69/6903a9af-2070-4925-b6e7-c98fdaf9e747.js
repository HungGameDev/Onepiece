"use strict";
cc._RF.push(module, '6903amvIHBJJbbnyY/a+edH', 'Slot45-sprite-frame-provider');
// Script/UI/provider/Slot45-sprite-frame-provider.ts

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
exports.Slot45SpriteProviderManagerActor = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45SpriteProviderActor = /** @class */ (function (_super) {
    __extends(Slot45SpriteProviderActor, _super);
    function Slot45SpriteProviderActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteFrames = [];
        return _this;
    }
    Slot45SpriteProviderActor.prototype.onLoad = function () {
        Slot45SpriteProviderManagerActor.Instance().SetFrame(this.spriteFrames);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], Slot45SpriteProviderActor.prototype, "spriteFrames", void 0);
    Slot45SpriteProviderActor = __decorate([
        ccclass
    ], Slot45SpriteProviderActor);
    return Slot45SpriteProviderActor;
}(cc.Component));
exports.default = Slot45SpriteProviderActor;
var Slot45SpriteProviderManagerActor = /** @class */ (function () {
    function Slot45SpriteProviderManagerActor() {
        this.dictSpriteFrame = [];
    }
    Slot45SpriteProviderManagerActor.Instance = function () {
        if (!Slot45SpriteProviderManagerActor.instance)
            Slot45SpriteProviderManagerActor.instance = new Slot45SpriteProviderManagerActor();
        return Slot45SpriteProviderManagerActor.instance;
    };
    Slot45SpriteProviderManagerActor.prototype.SetFrame = function (_spriteFrames) {
        var _this = this;
        _spriteFrames.forEach(function (frame) {
            _this.dictSpriteFrame[_this.getKey(frame.name)] = frame;
        });
    };
    Slot45SpriteProviderManagerActor.prototype.GetFrame = function (key) {
        if (key == null) {
            cc.warn('Get sprite frame with invalid key:', key);
            return null;
        }
        return this.dictSpriteFrame[this.getKey(key)];
    };
    Slot45SpriteProviderManagerActor.prototype.getKey = function (name) {
        return name.toLowerCase().replace(new RegExp('-', 'g'), '');
    };
    return Slot45SpriteProviderManagerActor;
}());
exports.Slot45SpriteProviderManagerActor = Slot45SpriteProviderManagerActor;

cc._RF.pop();