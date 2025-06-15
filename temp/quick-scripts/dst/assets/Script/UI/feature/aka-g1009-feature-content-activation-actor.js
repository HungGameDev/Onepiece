
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/feature/aka-g1009-feature-content-activation-actor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2b65DpYitFqpgwmkspHWnT', 'aka-g1009-feature-content-activation-actor');
// Script/UI/feature/aka-g1009-feature-content-activation-actor.ts

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
var G1009FeatureContentActivationActor = /** @class */ (function (_super) {
    __extends(G1009FeatureContentActivationActor, _super);
    function G1009FeatureContentActivationActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.startDuration = 0;
        _this.endDuration = 0;
        return _this;
    }
    G1009FeatureContentActivationActor.prototype.start = function () {
        this.reset();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featuretriggerstarted", this.onFeatureTriggerStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featureWinCompleted", this.onfeatureWinCompleted.bind(this));
    };
    G1009FeatureContentActivationActor.prototype.checkRuleTrigger = function () {
        return false;
    };
    G1009FeatureContentActivationActor.prototype.onFeatureTriggerStarted = function () {
        if (this.checkRuleTrigger()) {
            this.showContent();
        }
    };
    G1009FeatureContentActivationActor.prototype.onfeatureWinCompleted = function () {
        this.hideContent();
    };
    G1009FeatureContentActivationActor.prototype.showContent = function () {
        this.content.active = true;
        cc.tween(this.content).delay(this.startDuration).to(0.5, { opacity: 255 }).start();
    };
    G1009FeatureContentActivationActor.prototype.hideContent = function () {
        this.reset();
        // cc.tween(this.content).delay(this.endDuration).to(0.5, { opacity: 0 }).call(() => {
        // }).start();
    };
    G1009FeatureContentActivationActor.prototype.reset = function () {
        this.content.opacity = 0;
        this.content.active = false;
    };
    __decorate([
        property(cc.Node)
    ], G1009FeatureContentActivationActor.prototype, "content", void 0);
    __decorate([
        property
    ], G1009FeatureContentActivationActor.prototype, "startDuration", void 0);
    __decorate([
        property
    ], G1009FeatureContentActivationActor.prototype, "endDuration", void 0);
    G1009FeatureContentActivationActor = __decorate([
        ccclass
    ], G1009FeatureContentActivationActor);
    return G1009FeatureContentActivationActor;
}(cc.Component));
exports.default = G1009FeatureContentActivationActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvZmVhdHVyZS9ha2EtZzEwMDktZmVhdHVyZS1jb250ZW50LWFjdGl2YXRpb24tYWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQThFO0FBRXhFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdFLHNEQUFZO0lBQTVFO1FBQUEscUVBOENDO1FBM0NRLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsbUJBQWEsR0FBVSxDQUFDLENBQUM7UUFHekIsaUJBQVcsR0FBVSxDQUFDLENBQUM7O0lBcUNoQyxDQUFDO0lBcENVLGtEQUFLLEdBQWY7UUFDQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNHLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVTLDZEQUFnQixHQUExQjtRQUNDLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVPLG9FQUF1QixHQUEvQjtRQUNDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQzNCO1lBQ0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztJQUVPLGtFQUFxQixHQUE3QjtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRVMsd0RBQVcsR0FBckI7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEYsQ0FBQztJQUVPLHdEQUFXLEdBQW5CO1FBQ0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2Isc0ZBQXNGO1FBQ3RGLGNBQWM7SUFDZixDQUFDO0lBRU8sa0RBQUssR0FBYjtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQTFDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VFQUNjO0lBR2hDO1FBREMsUUFBUTs2RUFDd0I7SUFHakM7UUFEQyxRQUFROzJFQUNzQjtJQVRYLGtDQUFrQztRQUR0RCxPQUFPO09BQ2Esa0NBQWtDLENBOEN0RDtJQUFELHlDQUFDO0NBOUNELEFBOENDLENBOUMrRCxFQUFFLENBQUMsU0FBUyxHQThDM0U7a0JBOUNvQixrQ0FBa0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlGZWF0dXJlQ29udGVudEFjdGl2YXRpb25BY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblx0QHByb3BlcnR5KGNjLk5vZGUpXG5cdHByaXZhdGUgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG5cblx0QHByb3BlcnR5XG5cdHByaXZhdGUgc3RhcnREdXJhdGlvbjpudW1iZXIgPSAwO1xuXG5cdEBwcm9wZXJ0eVxuXHRwcml2YXRlIGVuZER1cmF0aW9uOm51bWJlciA9IDA7XG5cdHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcblx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcImZlYXR1cmV0cmlnZ2Vyc3RhcnRlZFwiLCB0aGlzLm9uRmVhdHVyZVRyaWdnZXJTdGFydGVkLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJmZWF0dXJlV2luQ29tcGxldGVkXCIsIHRoaXMub25mZWF0dXJlV2luQ29tcGxldGVkLmJpbmQodGhpcykpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNoZWNrUnVsZVRyaWdnZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkZlYXR1cmVUcmlnZ2VyU3RhcnRlZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jaGVja1J1bGVUcmlnZ2VyKCkpXG5cdFx0e1xuXHRcdFx0dGhpcy5zaG93Q29udGVudCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb25mZWF0dXJlV2luQ29tcGxldGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuaGlkZUNvbnRlbnQoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBzaG93Q29udGVudCgpIHtcblx0XHR0aGlzLmNvbnRlbnQuYWN0aXZlID0gdHJ1ZTtcblx0XHRjYy50d2Vlbih0aGlzLmNvbnRlbnQpLmRlbGF5KHRoaXMuc3RhcnREdXJhdGlvbikudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9KS5zdGFydCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBoaWRlQ29udGVudCgpIHtcblx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0Ly8gY2MudHdlZW4odGhpcy5jb250ZW50KS5kZWxheSh0aGlzLmVuZER1cmF0aW9uKS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcblx0XHQvLyB9KS5zdGFydCgpO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNldCgpIHtcblx0XHR0aGlzLmNvbnRlbnQub3BhY2l0eSA9IDA7XG5cdFx0dGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuXHR9XG59Il19