
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/feature/aka-g1009-feature-trigger-actor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e79a7v9A1P1pGLOENYdhkP', 'aka-g1009-feature-trigger-actor');
// Script/UI/feature/aka-g1009-feature-trigger-actor.ts

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
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009FeatureTrigger = /** @class */ (function (_super) {
    __extends(G1009FeatureTrigger, _super);
    function G1009FeatureTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        return _this;
    }
    G1009FeatureTrigger.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featuretriggerstarted", this.onFeatureTrigger.bind(this));
    };
    G1009FeatureTrigger.prototype.checkRuleTrigger = function () {
        return false;
    };
    G1009FeatureTrigger.prototype.onFeatureTrigger = function () {
        if (this.checkRuleTrigger()) {
            this.showContent();
        }
    };
    G1009FeatureTrigger.prototype.showContent = function () {
        var _this = this;
        if (this.content != null) {
            cc.tween(this.content)
                .to(0.5, { opacity: 255 })
                .call(function () {
                _this.notifyEnterFeature();
                cc.tween(_this.content).to(0.5, { opacity: 0 }).call(function () {
                    _this.reset();
                }).start();
            }).start();
        }
    };
    G1009FeatureTrigger.prototype.reset = function () {
        if (this.content != null) {
            this.content.opacity = 0;
            this.content.active = false;
        }
    };
    G1009FeatureTrigger.prototype.notifyEnterFeature = function () { };
    __decorate([
        property(cc.Node)
    ], G1009FeatureTrigger.prototype, "content", void 0);
    G1009FeatureTrigger = __decorate([
        ccclass
    ], G1009FeatureTrigger);
    return G1009FeatureTrigger;
}(cc.Component));
exports.default = G1009FeatureTrigger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvZmVhdHVyZS9ha2EtZzEwMDktZmVhdHVyZS10cmlnZ2VyLWFjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUE4RTtBQUV4RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQTRDQztRQXpDUSxhQUFPLEdBQVksSUFBSSxDQUFDOztJQXlDakMsQ0FBQztJQXZDVSxtQ0FBSyxHQUFmO1FBQ0MsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRVMsOENBQWdCLEdBQTFCO1FBQ0MsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRVMsOENBQWdCLEdBQTFCO1FBQ0MsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFDM0I7WUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkI7SUFDRixDQUFDO0lBRVMseUNBQVcsR0FBckI7UUFBQSxpQkFhQztRQVpBLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQ3hCO1lBQ0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNwQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2lCQUN6QixJQUFJLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ25ELEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFFRixDQUFDO0lBRVMsbUNBQUssR0FBZjtRQUNDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQ3hCO1lBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNGLENBQUM7SUFFUyxnREFBa0IsR0FBNUIsY0FBaUMsQ0FBQztJQXhDbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDYztJQUhaLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBNEN2QztJQUFELDBCQUFDO0NBNUNELEFBNENDLENBNUNnRCxFQUFFLENBQUMsU0FBUyxHQTRDNUQ7a0JBNUNvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlGZWF0dXJlVHJpZ2dlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblx0QHByb3BlcnR5KGNjLk5vZGUpXG5cdHByaXZhdGUgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG5cblx0cHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJmZWF0dXJldHJpZ2dlcnN0YXJ0ZWRcIiwgdGhpcy5vbkZlYXR1cmVUcmlnZ2VyLmJpbmQodGhpcykpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNoZWNrUnVsZVRyaWdnZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJvdGVjdGVkIG9uRmVhdHVyZVRyaWdnZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY2hlY2tSdWxlVHJpZ2dlcigpKVxuXHRcdHtcblx0XHRcdHRoaXMuc2hvd0NvbnRlbnQoKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgc2hvd0NvbnRlbnQoKSB7XG5cdFx0aWYgKHRoaXMuY29udGVudCAhPSBudWxsKVxuXHRcdHtcblx0XHRcdGNjLnR3ZWVuKHRoaXMuY29udGVudClcblx0XHRcdFx0LnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSlcblx0XHRcdFx0LmNhbGwoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMubm90aWZ5RW50ZXJGZWF0dXJlKCk7XG5cdFx0XHRcdFx0Y2MudHdlZW4odGhpcy5jb250ZW50KS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHRcdFx0XHR9KS5zdGFydCgpO1xuXHRcdFx0XHR9KS5zdGFydCgpO1xuXHRcdH1cblx0XHRcblx0fVxuXG5cdHByb3RlY3RlZCByZXNldCgpIHtcblx0XHRpZiAodGhpcy5jb250ZW50ICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0dGhpcy5jb250ZW50Lm9wYWNpdHkgPSAwO1xuXHRcdFx0dGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBub3RpZnlFbnRlckZlYXR1cmUoKSB7IH1cbn0iXX0=