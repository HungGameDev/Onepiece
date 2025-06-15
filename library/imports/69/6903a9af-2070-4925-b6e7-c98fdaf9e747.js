"use strict";
cc._RF.push(module, '6903amvIHBJJbbnyY/a+edH', 'aka-g1009-sprite-frame-provider');
// Script/UI/provider/aka-g1009-sprite-frame-provider.ts

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
exports.G1009SpriteProviderManagerActor = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SpriteProviderActor = /** @class */ (function (_super) {
    __extends(G1009SpriteProviderActor, _super);
    function G1009SpriteProviderActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteFrames = [];
        return _this;
    }
    G1009SpriteProviderActor.prototype.onLoad = function () {
        G1009SpriteProviderManagerActor.Instance().SetFrame(this.spriteFrames);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], G1009SpriteProviderActor.prototype, "spriteFrames", void 0);
    G1009SpriteProviderActor = __decorate([
        ccclass
    ], G1009SpriteProviderActor);
    return G1009SpriteProviderActor;
}(cc.Component));
exports.default = G1009SpriteProviderActor;
var G1009SpriteProviderManagerActor = /** @class */ (function () {
    function G1009SpriteProviderManagerActor() {
        this.dictSpriteFrame = [];
    }
    G1009SpriteProviderManagerActor.Instance = function () {
        if (!G1009SpriteProviderManagerActor.instance)
            G1009SpriteProviderManagerActor.instance = new G1009SpriteProviderManagerActor();
        return G1009SpriteProviderManagerActor.instance;
    };
    G1009SpriteProviderManagerActor.prototype.SetFrame = function (_spriteFrames) {
        var _this = this;
        _spriteFrames.forEach(function (frame) {
            _this.dictSpriteFrame[_this.getKey(frame.name)] = frame;
        });
    };
    G1009SpriteProviderManagerActor.prototype.GetFrame = function (key) {
        if (key == null) {
            cc.warn('Get sprite frame with invalid key:', key);
            return null;
        }
        return this.dictSpriteFrame[this.getKey(key)];
    };
    G1009SpriteProviderManagerActor.prototype.getKey = function (name) {
        return name.toLowerCase().replace(new RegExp('-', 'g'), '');
    };
    return G1009SpriteProviderManagerActor;
}());
exports.G1009SpriteProviderManagerActor = G1009SpriteProviderManagerActor;

cc._RF.pop();