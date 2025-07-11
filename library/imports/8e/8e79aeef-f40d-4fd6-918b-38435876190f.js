"use strict";
cc._RF.push(module, '8e79a7v9A1P1pGLOENYdhkP', 'Slot45-feature-trigger-actor');
// Script/UI/feature/Slot45-feature-trigger-actor.ts

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
var Slot45FeatureTrigger = /** @class */ (function (_super) {
    __extends(Slot45FeatureTrigger, _super);
    function Slot45FeatureTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        return _this;
    }
    Slot45FeatureTrigger.prototype.start = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featuretriggerstarted", this.onFeatureTrigger.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("featureWinCompleted", this.onfeatureWinCompleted.bind(this));
    };
    Slot45FeatureTrigger.prototype.checkRuleTrigger = function () {
        return false;
    };
    Slot45FeatureTrigger.prototype.onFeatureTrigger = function () {
        if (this.checkRuleTrigger()) {
            this.showContent();
        }
    };
    Slot45FeatureTrigger.prototype.onfeatureWinCompleted = function () {
        if (this.checkRuleTrigger()) {
            this.hideContent();
        }
    };
    Slot45FeatureTrigger.prototype.showContent = function () {
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
    Slot45FeatureTrigger.prototype.hideContent = function () {
    };
    Slot45FeatureTrigger.prototype.reset = function () {
        if (this.content != null) {
            this.content.opacity = 0;
            this.content.active = false;
        }
    };
    Slot45FeatureTrigger.prototype.notifyEnterFeature = function () { };
    __decorate([
        property(cc.Node)
    ], Slot45FeatureTrigger.prototype, "content", void 0);
    Slot45FeatureTrigger = __decorate([
        ccclass
    ], Slot45FeatureTrigger);
    return Slot45FeatureTrigger;
}(cc.Component));
exports.default = Slot45FeatureTrigger;

cc._RF.pop();