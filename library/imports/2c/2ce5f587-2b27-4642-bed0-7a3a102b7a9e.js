"use strict";
cc._RF.push(module, '2ce5fWHKydGQr7QejoQK3qe', 'Slot45-popup-error');
// Script/UI/popup/Slot45-popup-error.ts

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
var Slot45PopupError = /** @class */ (function (_super) {
    __extends(Slot45PopupError, _super);
    function Slot45PopupError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.lblMessage = null;
        _this.btnExit = null;
        _this.btnClosePopup = null;
        return _this;
    }
    Slot45PopupError.prototype.start = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("PopupInfoMessage", this.onPopupInfoMessage.bind(this));
        this.reset();
    };
    Slot45PopupError.prototype.onPopupInfoMessage = function (data) {
        this.lblMessage.string = data.message;
        this.btnExit.active = !(data.type == 'info');
        this.btnClosePopup.active = (data.type == 'info');
        this.content.active = true;
        this.content.opacity = 0;
        cc.tween(this.content)
            .to(0.2, { opacity: 255 })
            .start();
    };
    Slot45PopupError.prototype.reset = function () {
        this.content.active = false;
    };
    Slot45PopupError.prototype.onExitClick = function () {
        cc.director.loadScene('home-page');
    };
    Slot45PopupError.prototype.onClosePopupClick = function () {
        var _this = this;
        cc.tween(this.content)
            .to(0.2, { opacity: 0 })
            .call(function () { return _this.reset(); })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], Slot45PopupError.prototype, "content", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45PopupError.prototype, "lblMessage", void 0);
    __decorate([
        property(cc.Node)
    ], Slot45PopupError.prototype, "btnExit", void 0);
    __decorate([
        property(cc.Node)
    ], Slot45PopupError.prototype, "btnClosePopup", void 0);
    Slot45PopupError = __decorate([
        ccclass
    ], Slot45PopupError);
    return Slot45PopupError;
}(cc.Component));
exports.default = Slot45PopupError;

cc._RF.pop();