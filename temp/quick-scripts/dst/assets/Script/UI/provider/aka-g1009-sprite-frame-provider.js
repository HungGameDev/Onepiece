
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/provider/aka-g1009-sprite-frame-provider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcHJvdmlkZXIvYWthLWcxMDA5LXNwcml0ZS1mcmFtZS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0QsNENBQVk7SUFBbEU7UUFBQSxxRUFTQztRQU5HLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQzs7SUFNeEMsQ0FBQztJQUpXLHlDQUFNLEdBQWI7UUFDSSwrQkFBK0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2tFQUNXO0lBSG5CLHdCQUF3QjtRQUQ1QyxPQUFPO09BQ2Esd0JBQXdCLENBUzVDO0lBQUQsK0JBQUM7Q0FURCxBQVNDLENBVHFELEVBQUUsQ0FBQyxTQUFTLEdBU2pFO2tCQVRvQix3QkFBd0I7QUFXN0M7SUFBQTtRQUdJLG9CQUFlLEdBQXFCLEVBQUUsQ0FBQztJQTRCM0MsQ0FBQztJQTFCaUIsd0NBQVEsR0FBdEI7UUFDSSxJQUFJLENBQUMsK0JBQStCLENBQUMsUUFBUTtZQUN6QywrQkFBK0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSwrQkFBK0IsRUFBRSxDQUFDO1FBQ3JGLE9BQU8sK0JBQStCLENBQUMsUUFBUSxDQUFDO0lBQ3BELENBQUM7SUFFTSxrREFBUSxHQUFmLFVBQWdCLGFBQStCO1FBQS9DLGlCQUlDO1FBSEcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7WUFDdkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxrREFBUSxHQUFmLFVBQWdCLEdBQVc7UUFFdkIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2IsRUFBRSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR08sZ0RBQU0sR0FBZCxVQUFlLElBQVk7UUFFdkIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0wsc0NBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLDBFQUErQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlTcHJpdGVQcm92aWRlckFjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgICBwdWJsaWMgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICAgRzEwMDlTcHJpdGVQcm92aWRlck1hbmFnZXJBY3Rvci5JbnN0YW5jZSgpLlNldEZyYW1lKHRoaXMuc3ByaXRlRnJhbWVzKTtcbiAgICB9XG4gIFxufVxuXG5leHBvcnQgY2xhc3MgRzEwMDlTcHJpdGVQcm92aWRlck1hbmFnZXJBY3RvcntcblxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBHMTAwOVNwcml0ZVByb3ZpZGVyTWFuYWdlckFjdG9yO1xuICAgIGRpY3RTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFHMTAwOVNwcml0ZVByb3ZpZGVyTWFuYWdlckFjdG9yLmluc3RhbmNlKVxuICAgICAgICAgICAgRzEwMDlTcHJpdGVQcm92aWRlck1hbmFnZXJBY3Rvci5pbnN0YW5jZSA9IG5ldyBHMTAwOVNwcml0ZVByb3ZpZGVyTWFuYWdlckFjdG9yKCk7XG4gICAgICAgIHJldHVybiBHMTAwOVNwcml0ZVByb3ZpZGVyTWFuYWdlckFjdG9yLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRGcmFtZShfc3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdKSB7XG4gICAgICAgIF9zcHJpdGVGcmFtZXMuZm9yRWFjaChmcmFtZSA9PiB7IFxuICAgICAgICAgICAgdGhpcy5kaWN0U3ByaXRlRnJhbWVbdGhpcy5nZXRLZXkoZnJhbWUubmFtZSldID0gZnJhbWU7XG4gICAgICAgIH0pOyAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0RnJhbWUoa2V5OiBzdHJpbmcpXG4gICAge1xuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNjLndhcm4oJ0dldCBzcHJpdGUgZnJhbWUgd2l0aCBpbnZhbGlkIGtleTonLCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICB0aGlzLmRpY3RTcHJpdGVGcmFtZVt0aGlzLmdldEtleShrZXkpXTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgZ2V0S2V5KG5hbWU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZShuZXcgUmVnRXhwKCctJywgJ2cnKSwgJycpO1xuICAgIH1cbn1cbiJdfQ==