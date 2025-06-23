"use strict";
cc._RF.push(module, 'b2b65DpYitFqpgwmkspHWnT', 'Slot45-feature-content-activation-actor');
// Script/UI/feature/Slot45-feature-content-activation-actor.ts

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
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45FeatureContentActivationActor = /** @class */ (function (_super) {
    __extends(Slot45FeatureContentActivationActor, _super);
    function Slot45FeatureContentActivationActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.startDuration = 0;
        _this.endDuration = 0;
        return _this;
    }
    Slot45FeatureContentActivationActor.prototype.start = function () {
        this.reset();
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featuretriggerstarted", this.onFeatureTriggerStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featureWinCompleted", this.onfeatureWinCompleted.bind(this));
    };
    Slot45FeatureContentActivationActor.prototype.checkRuleTrigger = function () {
        return false;
    };
    Slot45FeatureContentActivationActor.prototype.onFeatureTriggerStarted = function () {
        if (this.checkRuleTrigger()) {
            this.showContent();
        }
    };
    Slot45FeatureContentActivationActor.prototype.onfeatureWinCompleted = function () {
        this.hideContent();
    };
    Slot45FeatureContentActivationActor.prototype.showContent = function () {
        this.content.active = true;
        cc.tween(this.content).delay(this.startDuration).to(0.5, { opacity: 255 }).start();
    };
    Slot45FeatureContentActivationActor.prototype.hideContent = function () {
        this.reset();
        // cc.tween(this.content).delay(this.endDuration).to(0.5, { opacity: 0 }).call(() => {
        // }).start();
    };
    Slot45FeatureContentActivationActor.prototype.reset = function () {
        this.content.opacity = 0;
        this.content.active = false;
    };
    __decorate([
        property(cc.Node)
    ], Slot45FeatureContentActivationActor.prototype, "content", void 0);
    __decorate([
        property
    ], Slot45FeatureContentActivationActor.prototype, "startDuration", void 0);
    __decorate([
        property
    ], Slot45FeatureContentActivationActor.prototype, "endDuration", void 0);
    Slot45FeatureContentActivationActor = __decorate([
        ccclass
    ], Slot45FeatureContentActivationActor);
    return Slot45FeatureContentActivationActor;
}(cc.Component));
exports.default = Slot45FeatureContentActivationActor;

cc._RF.pop();