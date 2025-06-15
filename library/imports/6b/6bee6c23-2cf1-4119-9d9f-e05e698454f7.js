"use strict";
cc._RF.push(module, '6bee6wjLPFBGZ2f4F5phFT3', 'aka-g1009-toggle-simulator');
// Script/UI/popup/aka-g1009-toggle-simulator.ts

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
var G1009ToggleSimulatorActor = /** @class */ (function (_super) {
    __extends(G1009ToggleSimulatorActor, _super);
    function G1009ToggleSimulatorActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalButton = null;
        _this.activeButton = null;
        _this.EventName = "Event-name";
        return _this;
    }
    G1009ToggleSimulatorActor.prototype.changeToggleState = function (_isActive) {
        var isActive = _isActive == "true" ? true : false;
        this.activeButton.active = isActive;
        this.normalButton.active = !isActive;
    };
    G1009ToggleSimulatorActor.prototype.onToggleOffClick = function () {
        this.activeButton.active = false;
        this.normalButton.active = true;
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify(this.EventName + "-off");
    };
    G1009ToggleSimulatorActor.prototype.onToggleOnClick = function () {
        this.activeButton.active = true;
        this.normalButton.active = false;
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify(this.EventName + "-on");
    };
    __decorate([
        property(cc.Node)
    ], G1009ToggleSimulatorActor.prototype, "normalButton", void 0);
    __decorate([
        property(cc.Node)
    ], G1009ToggleSimulatorActor.prototype, "activeButton", void 0);
    __decorate([
        property
    ], G1009ToggleSimulatorActor.prototype, "EventName", void 0);
    G1009ToggleSimulatorActor = __decorate([
        ccclass
    ], G1009ToggleSimulatorActor);
    return G1009ToggleSimulatorActor;
}(cc.Component));
exports.default = G1009ToggleSimulatorActor;

cc._RF.pop();