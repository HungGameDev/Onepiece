"use strict";
cc._RF.push(module, '0a196AGUMpLArBmWZ/k8QjU', 'Slot45-button-controller');
// Script/UI/popup/Slot45-button-controller.ts

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
var Slot45_button_1 = require("./Slot45-button");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45ButtonControllerActor = /** @class */ (function (_super) {
    __extends(Slot45ButtonControllerActor, _super);
    function Slot45ButtonControllerActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spinButton = null;
        _this.stopSpinButton = null;
        _this.turboButton = null;
        _this.freespinLeft = 0;
        _this.isToggleMoving = false;
        _this.isAuto = false;
        return _this;
    }
    Slot45ButtonControllerActor.prototype.start = function () {
        this.register();
    };
    Slot45ButtonControllerActor.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StopAuto", this.onStopAuto.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("Spin", this.OnSpinClicked.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StopImmediately", this.OnStopSpinClicked.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ShowBetPanel", this.OnResetSpin.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinStarted", this.activeStopButton.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("NextScrollData", this.onNextScrollData.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("FeatureTrigger", this.checkToActiveSpinLeft.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("resume", this.onResume.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("BigWinPresentationStarted", this.onBigWinStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("JackpotPresentationStarted", this.onBigWinStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinComplete", this.onSpinComplete.bind(this));
    };
    Slot45ButtonControllerActor.prototype.onNextScrollData = function (data) {
        this.freespinLeft = data.freespinLeft;
    };
    Slot45ButtonControllerActor.prototype.onResume = function () {
        this.spinButton.Disable();
        this.stopSpinButton.Enable();
        this.checkToActiveSpinLeft();
    };
    Slot45ButtonControllerActor.prototype.onBigWinStarted = function () {
        this.spinButton.Disable();
        this.stopSpinButton.Enable();
        this.stopSpinButton.Interactable(true);
    };
    Slot45ButtonControllerActor.prototype.onActiveAuto = function () {
        this.isAuto = true;
        this.stopSpinButton.Enable();
        this.spinButton.Disable();
    };
    Slot45ButtonControllerActor.prototype.onStopAuto = function () {
        this.isAuto = false;
    };
    Slot45ButtonControllerActor.prototype.OnSpinClicked = function () {
        if (this.isAuto == false) {
            this.spinButton.Disable();
            this.stopSpinButton.Enable();
        }
    };
    Slot45ButtonControllerActor.prototype.OnStopSpinClicked = function () {
        this.stopSpinButton.Interactable(false);
    };
    Slot45ButtonControllerActor.prototype.onSpinComplete = function () {
        this.stopSpinButton.Interactable(false);
    };
    Slot45ButtonControllerActor.prototype.activeStopButton = function () {
        this.freespinLeft -= 1;
        this.checkToActiveSpinLeft();
        this.stopSpinButton.Interactable(true);
    };
    Slot45ButtonControllerActor.prototype.checkToActiveSpinLeft = function () {
        this.onStopAuto();
    };
    Slot45ButtonControllerActor.prototype.OnResetSpin = function () {
        if (this.isAuto == false) {
            this.stopSpinButton.Disable();
            this.spinButton.Enable();
        }
    };
    Slot45ButtonControllerActor.prototype.OnTurboClicked = function (action) {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("Turbo", action.isChecked);
    };
    Slot45ButtonControllerActor.prototype.OnAutoClicked = function (action) {
        if (action.isChecked) {
            this.onActiveAuto();
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ActiveAuto");
        }
        else {
            this.onStopAuto();
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("StopAuto");
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("StopImmediately");
        }
    };
    __decorate([
        property(Slot45_button_1.default)
    ], Slot45ButtonControllerActor.prototype, "spinButton", void 0);
    __decorate([
        property(Slot45_button_1.default)
    ], Slot45ButtonControllerActor.prototype, "stopSpinButton", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot45ButtonControllerActor.prototype, "turboButton", void 0);
    Slot45ButtonControllerActor = __decorate([
        ccclass
    ], Slot45ButtonControllerActor);
    return Slot45ButtonControllerActor;
}(cc.Component));
exports.default = Slot45ButtonControllerActor;

cc._RF.pop();