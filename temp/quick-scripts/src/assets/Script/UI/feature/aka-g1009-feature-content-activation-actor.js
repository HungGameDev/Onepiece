"use strict";
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