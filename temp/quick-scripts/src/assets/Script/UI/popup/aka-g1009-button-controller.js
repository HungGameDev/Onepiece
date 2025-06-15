"use strict";
cc._RF.push(module, '0a196AGUMpLArBmWZ/k8QjU', 'aka-g1009-button-controller');
// Script/UI/popup/aka-g1009-button-controller.ts

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
var aka_g1009_button_1 = require("./aka-g1009-button");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009ButtonControllerActor = /** @class */ (function (_super) {
    __extends(G1009ButtonControllerActor, _super);
    function G1009ButtonControllerActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spinButton = null;
        _this.stopSpinButton = null;
        _this.lblspinCount = null;
        _this.turboButton = null;
        _this.spinLeft = 0;
        _this.isToggleMoving = false;
        _this.isAuto = false;
        return _this;
    }
    G1009ButtonControllerActor.prototype.start = function () {
        this.register();
    };
    G1009ButtonControllerActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopAuto", this.onStopAuto.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Spin", this.OnSpinClicked.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopImmediately", this.OnStopSpinClicked.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowBetPanel", this.OnResetSpin.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.activeStopButton.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("NextScrollData", this.onNextScrollData.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("FeatureTrigger", this.checkToActiveSpinLeft.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resume", this.onResume.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("BigWinPresentationStarted", this.onBigWinStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("JackpotPresentationStarted", this.onBigWinStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinComplete", this.onSpinComplete.bind(this));
    };
    G1009ButtonControllerActor.prototype.onNextScrollData = function (data) {
        this.spinLeft = data.freespinLeft;
    };
    G1009ButtonControllerActor.prototype.onResume = function () {
        this.spinButton.Disable();
        this.stopSpinButton.Enable();
        this.checkToActiveSpinLeft();
    };
    G1009ButtonControllerActor.prototype.onBigWinStarted = function () {
        this.spinButton.Disable();
        this.stopSpinButton.Enable();
        this.stopSpinButton.Interactable(true);
    };
    G1009ButtonControllerActor.prototype.onActiveAuto = function () {
        this.isAuto = true;
        this.stopSpinButton.Enable();
        this.spinButton.Disable();
    };
    G1009ButtonControllerActor.prototype.onStopAuto = function () {
        this.isAuto = false;
    };
    G1009ButtonControllerActor.prototype.OnSpinClicked = function () {
        if (this.isAuto == false) {
            this.spinButton.Disable();
            this.stopSpinButton.Enable();
        }
    };
    G1009ButtonControllerActor.prototype.OnStopSpinClicked = function () {
        this.stopSpinButton.Interactable(false);
    };
    G1009ButtonControllerActor.prototype.onSpinComplete = function () {
        this.stopSpinButton.Interactable(false);
    };
    G1009ButtonControllerActor.prototype.activeStopButton = function () {
        this.spinLeft -= 1;
        this.checkToActiveSpinLeft();
        this.stopSpinButton.Interactable(true);
    };
    G1009ButtonControllerActor.prototype.checkToActiveSpinLeft = function () {
        this.onStopAuto();
        this.lblspinCount.string = this.spinLeft > 0 ? this.spinLeft.toString() : "0";
    };
    G1009ButtonControllerActor.prototype.OnResetSpin = function () {
        if (this.isAuto == false) {
            this.stopSpinButton.Disable();
            this.spinButton.Enable();
        }
    };
    G1009ButtonControllerActor.prototype.OnTurboClicked = function (action) {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("Turbo", action.isChecked);
    };
    G1009ButtonControllerActor.prototype.OnAutoClicked = function (action) {
        if (action.isChecked) {
            this.onActiveAuto();
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ActiveAuto");
        }
        else {
            this.onStopAuto();
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("StopAuto");
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("StopImmediately");
        }
    };
    __decorate([
        property(aka_g1009_button_1.default)
    ], G1009ButtonControllerActor.prototype, "spinButton", void 0);
    __decorate([
        property(aka_g1009_button_1.default)
    ], G1009ButtonControllerActor.prototype, "stopSpinButton", void 0);
    __decorate([
        property(cc.Label)
    ], G1009ButtonControllerActor.prototype, "lblspinCount", void 0);
    __decorate([
        property(cc.Toggle)
    ], G1009ButtonControllerActor.prototype, "turboButton", void 0);
    G1009ButtonControllerActor = __decorate([
        ccclass
    ], G1009ButtonControllerActor);
    return G1009ButtonControllerActor;
}(cc.Component));
exports.default = G1009ButtonControllerActor;

cc._RF.pop();