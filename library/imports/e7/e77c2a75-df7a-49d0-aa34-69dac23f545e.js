"use strict";
cc._RF.push(module, 'e77c2p133pJ0Ko0adrCP1Re', 'aka-g1009-button-spin');
// Script/UI/popup/aka-g1009-button-spin.ts

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
var G1009ButtonSpin = /** @class */ (function (_super) {
    __extends(G1009ButtonSpin, _super);
    function G1009ButtonSpin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EventName = "Event-name";
        _this.button = null;
        return _this;
    }
    G1009ButtonSpin.prototype.onLoad = function () {
        this.button = this.node.getComponent(cc.Button);
        this.node.on("click", this.onButtonClick.bind(this));
    };
    G1009ButtonSpin.prototype.onButtonClick = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify(this.EventName);
    };
    G1009ButtonSpin.prototype.Disable = function () {
        this.node.active = false;
    };
    G1009ButtonSpin.prototype.Enable = function () {
        this.node.active = true;
    };
    G1009ButtonSpin.prototype.Interactable = function (isInteractable) {
        if (!!this.button)
            this.button = this.node.getComponent(cc.Button);
        this.button.interactable = isInteractable;
    };
    __decorate([
        property
    ], G1009ButtonSpin.prototype, "EventName", void 0);
    G1009ButtonSpin = __decorate([
        ccclass
    ], G1009ButtonSpin);
    return G1009ButtonSpin;
}(cc.Component));
exports.default = G1009ButtonSpin;

cc._RF.pop();