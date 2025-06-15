
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-button-controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LWJ1dHRvbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUE4RTtBQUM5RSx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0QsOENBQVk7SUFBcEU7UUFBQSxxRUEySEM7UUF4SEEsZ0JBQVUsR0FBcUIsSUFBSSxDQUFDO1FBR3BDLG9CQUFjLEdBQXFCLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUd0QyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLG9CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBMEdqQyxDQUFDO0lBeEdVLDBDQUFLLEdBQWY7UUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLDZDQUFRLEdBQWhCO1FBQ0MsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9GLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FB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UUFBUSxDQUFDLDBCQUFnQixDQUFDO3NFQUNhO0lBR3hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0VBQ21CO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bUVBQ1U7SUFaViwwQkFBMEI7UUFEOUMsT0FBTztPQUNhLDBCQUEwQixDQTJIOUM7SUFBRCxpQ0FBQztDQTNIRCxBQTJIQyxDQTNIdUQsRUFBRSxDQUFDLFNBQVMsR0EySG5FO2tCQTNIb0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCBHMTAwOUJ1dHRvbkFjdG9yIGZyb20gXCIuL2FrYS1nMTAwOS1idXR0b25cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5QnV0dG9uQ29udHJvbGxlckFjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXHRAcHJvcGVydHkoRzEwMDlCdXR0b25BY3Rvcilcblx0c3BpbkJ1dHRvbjogRzEwMDlCdXR0b25BY3RvciA9IG51bGw7XG5cblx0QHByb3BlcnR5KEcxMDA5QnV0dG9uQWN0b3IpXG5cdHN0b3BTcGluQnV0dG9uOiBHMTAwOUJ1dHRvbkFjdG9yID0gbnVsbDtcblxuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdHByaXZhdGUgbGJsc3BpbkNvdW50OiBjYy5MYWJlbCA9IG51bGw7XG5cblx0QHByb3BlcnR5KGNjLlRvZ2dsZSlcblx0dHVyYm9CdXR0b246IGNjLlRvZ2dsZSA9IG51bGw7XG5cblx0c3BpbkxlZnQ6IG51bWJlciA9IDA7XG5cblx0aXNUb2dnbGVNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBpc0F1dG86IGJvb2xlYW4gPSBmYWxzZTtcblx0XG5cdHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcblx0XHR0aGlzLnJlZ2lzdGVyKCk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1x0XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlN0b3BBdXRvXCIsIHRoaXMub25TdG9wQXV0by5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3BpblwiLCB0aGlzLk9uU3BpbkNsaWNrZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlN0b3BJbW1lZGlhdGVseVwiLCB0aGlzLk9uU3RvcFNwaW5DbGlja2VkLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTaG93QmV0UGFuZWxcIiwgdGhpcy5PblJlc2V0U3Bpbi5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3BpblN0YXJ0ZWRcIiwgdGhpcy5hY3RpdmVTdG9wQnV0dG9uLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJOZXh0U2Nyb2xsRGF0YVwiLCB0aGlzLm9uTmV4dFNjcm9sbERhdGEuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkZlYXR1cmVUcmlnZ2VyXCIsIHRoaXMuY2hlY2tUb0FjdGl2ZVNwaW5MZWZ0LmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJyZXN1bWVcIiwgdGhpcy5vblJlc3VtZS5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiQmlnV2luUHJlc2VudGF0aW9uU3RhcnRlZFwiLCB0aGlzLm9uQmlnV2luU3RhcnRlZC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiSmFja3BvdFByZXNlbnRhdGlvblN0YXJ0ZWRcIiwgdGhpcy5vbkJpZ1dpblN0YXJ0ZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNwaW5Db21wbGV0ZVwiLHRoaXMub25TcGluQ29tcGxldGUuYmluZCh0aGlzKSk7XG5cblx0fVxuXG5cdHByaXZhdGUgb25OZXh0U2Nyb2xsRGF0YShkYXRhOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnNwaW5MZWZ0ID0gZGF0YS5mcmVlc3BpbkxlZnQ7XG5cdH1cblxuXHRwdWJsaWMgb25SZXN1bWUoKTogdm9pZCB7XG5cdFx0dGhpcy5zcGluQnV0dG9uLkRpc2FibGUoKTtcblx0XHR0aGlzLnN0b3BTcGluQnV0dG9uLkVuYWJsZSgpO1xuXHRcdHRoaXMuY2hlY2tUb0FjdGl2ZVNwaW5MZWZ0KCk7XG5cdH1cblxuXHRwdWJsaWMgb25CaWdXaW5TdGFydGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuc3BpbkJ1dHRvbi5EaXNhYmxlKCk7XG5cdFx0dGhpcy5zdG9wU3BpbkJ1dHRvbi5FbmFibGUoKTtcblx0XHR0aGlzLnN0b3BTcGluQnV0dG9uLkludGVyYWN0YWJsZSh0cnVlKTtcblx0XG5cdH1cblxuXHRwdWJsaWMgb25BY3RpdmVBdXRvKCk6IHZvaWQge1xuXHRcdHRoaXMuaXNBdXRvID0gdHJ1ZTtcblx0XHR0aGlzLnN0b3BTcGluQnV0dG9uLkVuYWJsZSgpO1xuXHRcdHRoaXMuc3BpbkJ1dHRvbi5EaXNhYmxlKCk7XG5cdFx0XG5cdH1cblxuXHRwcml2YXRlIG9uU3RvcEF1dG8oKTogdm9pZCB7XG5cdFx0dGhpcy5pc0F1dG8gPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyBPblNwaW5DbGlja2VkKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQXV0byA9PSBmYWxzZSlcblx0XHR7XG5cdFx0XHR0aGlzLnNwaW5CdXR0b24uRGlzYWJsZSgpO1xuXHRcdFx0dGhpcy5zdG9wU3BpbkJ1dHRvbi5FbmFibGUoKTtcblx0XHR9XHRcdFxuXHR9XG5cblx0cHVibGljIE9uU3RvcFNwaW5DbGlja2VkKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zdG9wU3BpbkJ1dHRvbi5JbnRlcmFjdGFibGUoZmFsc2UpO1xuXHR9XG5cblx0cHVibGljIG9uU3BpbkNvbXBsZXRlKCk6dm9pZHtcblx0XHR0aGlzLnN0b3BTcGluQnV0dG9uLkludGVyYWN0YWJsZShmYWxzZSk7XG5cdH1cblxuXHRwcml2YXRlIGFjdGl2ZVN0b3BCdXR0b24oKTogdm9pZCB7XG5cdFx0dGhpcy5zcGluTGVmdCAtPSAxO1xuXHRcdHRoaXMuY2hlY2tUb0FjdGl2ZVNwaW5MZWZ0KCk7XG5cblx0XHR0aGlzLnN0b3BTcGluQnV0dG9uLkludGVyYWN0YWJsZSh0cnVlKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tUb0FjdGl2ZVNwaW5MZWZ0KCkge1xuXHRcdHRoaXMub25TdG9wQXV0bygpO1xuXHRcdHRoaXMubGJsc3BpbkNvdW50LnN0cmluZyA9IHRoaXMuc3BpbkxlZnQgPiAwID8gdGhpcy5zcGluTGVmdC50b1N0cmluZygpIDogXCIwXCI7XG5cdH1cblxuXHRwcml2YXRlIE9uUmVzZXRTcGluKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQXV0byA9PSBmYWxzZSlcblx0XHR7XG5cdFx0XHR0aGlzLnN0b3BTcGluQnV0dG9uLkRpc2FibGUoKTtcblx0XHRcdHRoaXMuc3BpbkJ1dHRvbi5FbmFibGUoKTtcblx0XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIE9uVHVyYm9DbGlja2VkKGFjdGlvbjogY2MuVG9nZ2xlKTogdm9pZCB7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJUdXJib1wiLCBhY3Rpb24uaXNDaGVja2VkKTtcblx0fVxuXG5cdHB1YmxpYyBPbkF1dG9DbGlja2VkKGFjdGlvbjogY2MuVG9nZ2xlKTogdm9pZCB7XG5cdFx0aWYgKGFjdGlvbi5pc0NoZWNrZWQpXG5cdFx0e1xuXHRcdFx0dGhpcy5vbkFjdGl2ZUF1dG8oKTtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQWN0aXZlQXV0b1wiKTtcblx0XHRcdFxuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5vblN0b3BBdXRvKCk7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIlN0b3BBdXRvXCIpO1xuXHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJTdG9wSW1tZWRpYXRlbHlcIik7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==