"use strict";
cc._RF.push(module, 'e77c2p133pJ0Ko0adrCP1Re', 'Slot45-button-spin');
// Script/UI/popup/Slot45-button-spin.ts

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
var Slot45ButtonSpin = /** @class */ (function (_super) {
    __extends(Slot45ButtonSpin, _super);
    function Slot45ButtonSpin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EventName = "Event-name";
        _this.button = null;
        return _this;
    }
    Slot45ButtonSpin.prototype.onLoad = function () {
        this.button = this.node.getComponent(cc.Button);
        this.node.on("click", this.onButtonClick.bind(this));
    };
    Slot45ButtonSpin.prototype.onButtonClick = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify(this.EventName);
    };
    Slot45ButtonSpin.prototype.Disable = function () {
        this.node.active = false;
    };
    Slot45ButtonSpin.prototype.Enable = function () {
        this.node.active = true;
    };
    Slot45ButtonSpin.prototype.Interactable = function (isInteractable) {
        if (!!this.button)
            this.button = this.node.getComponent(cc.Button);
        this.button.interactable = isInteractable;
    };
    __decorate([
        property
    ], Slot45ButtonSpin.prototype, "EventName", void 0);
    Slot45ButtonSpin = __decorate([
        ccclass
    ], Slot45ButtonSpin);
    return Slot45ButtonSpin;
}(cc.Component));
exports.default = Slot45ButtonSpin;

cc._RF.pop();