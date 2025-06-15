
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/animation/aka-g1009-animation-provider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4883d791oBLZKeD8HQlHVAp', 'aka-g1009-animation-provider');
// Script/base/animation/aka-g1009-animation-provider.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9hbmltYXRpb24vYWthLWcxMDA5LWFuaW1hdGlvbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUQsK0NBQVk7SUFBckU7UUFBQSxxRUFTQztRQU5HLG1CQUFhLEdBQXNCLEVBQUUsQ0FBQzs7SUFNMUMsQ0FBQztJQUphLDRDQUFNLEdBQWhCO1FBQ0ksNkJBQTZCLENBQUMsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQztzRUFDWTtJQUhyQiwyQkFBMkI7UUFEL0MsT0FBTztPQUNhLDJCQUEyQixDQVMvQztJQUFELGtDQUFDO0NBVEQsQUFTQyxDQVR3RCxFQUFFLENBQUMsU0FBUyxHQVNwRTtrQkFUb0IsMkJBQTJCO0FBV2hEO0lBQUE7UUFFSSxvQkFBZSxHQUFxQixFQUFFLENBQUM7SUE0QjNDLENBQUM7SUExQmlCLHNDQUFRLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLDZCQUE2QixDQUFDLFFBQVE7WUFDM0MsNkJBQTZCLENBQUMsUUFBUSxHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQztRQUM3RSxPQUFPLDZCQUE2QixDQUFDLFFBQVEsQ0FBQztJQUNsRCxDQUFDO0lBRU0sb0RBQVksR0FBbkIsVUFBb0IsZUFBa0M7UUFBdEQsaUJBSUM7UUFIRyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUN4QixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG9EQUFZLEdBQW5CLFVBQW9CLEdBQVc7UUFFM0IsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2IsRUFBRSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR08sOENBQU0sR0FBZCxVQUFlLElBQVk7UUFFdkIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0wsb0NBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBOUJZLHNFQUE2QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlBbmltYXRpb25Qcm92aWRlckFjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbkRhdGEpXG4gICAgbGlzdEFuaW1hdGlvbjogc3AuU2tlbGV0b25EYXRhW10gPSBbXTtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIEcxMDA5QW5pbWF0aW9uUHJvdmlkZXJNYW5hZ2VyLkluc3RhbmNlKCkuU2V0QW5pYW10aW9uKHRoaXMubGlzdEFuaW1hdGlvbik7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBHMTAwOUFuaW1hdGlvblByb3ZpZGVyTWFuYWdlcntcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRzEwMDlBbmltYXRpb25Qcm92aWRlck1hbmFnZXI7XG4gICAgZGljdFNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIUcxMDA5QW5pbWF0aW9uUHJvdmlkZXJNYW5hZ2VyLmluc3RhbmNlKVxuICAgICAgICBHMTAwOUFuaW1hdGlvblByb3ZpZGVyTWFuYWdlci5pbnN0YW5jZSA9IG5ldyBHMTAwOUFuaW1hdGlvblByb3ZpZGVyTWFuYWdlcigpO1xuICAgICAgICByZXR1cm4gRzEwMDlBbmltYXRpb25Qcm92aWRlck1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIFNldEFuaWFtdGlvbihfYW5pbWF0aW9uRGF0YXM6IHNwLlNrZWxldG9uRGF0YVtdKSB7XG4gICAgICAgIF9hbmltYXRpb25EYXRhcy5mb3JFYWNoKGFuaW0gPT4geyBcbiAgICAgICAgICAgIHRoaXMuZGljdFNwcml0ZUZyYW1lW3RoaXMuZ2V0S2V5KGFuaW0ubmFtZSldID0gYW5pbTtcbiAgICAgICAgfSk7ICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRBbmltYXRpb24oa2V5OiBzdHJpbmcpXG4gICAge1xuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNjLndhcm4oJ0dldCBzcHJpdGUgZnJhbWUgd2l0aCBpbnZhbGlkIGtleTonLCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICB0aGlzLmRpY3RTcHJpdGVGcmFtZVt0aGlzLmdldEtleShrZXkpXTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgZ2V0S2V5KG5hbWU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZShuZXcgUmVnRXhwKCctJywgJ2cnKSwgJycpO1xuICAgIH1cbn1cbiJdfQ==