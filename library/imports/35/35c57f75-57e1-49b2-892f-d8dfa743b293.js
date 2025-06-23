"use strict";
cc._RF.push(module, '35c5791V+FJsokv2N+nQ7KT', 'Slot45-info-toggle-button');
// Script/UI/popup/Slot45-info-toggle-button.ts

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
var Slot45InfoToggleButtonActor = /** @class */ (function (_super) {
    __extends(Slot45InfoToggleButtonActor, _super);
    function Slot45InfoToggleButtonActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleId = -1;
        _this.toggle = null;
        return _this;
    }
    Slot45InfoToggleButtonActor.prototype.onLoad = function () {
        this.toggle = this.node.getComponent(cc.Toggle);
    };
    Slot45InfoToggleButtonActor.prototype.OnToggleClicked = function (action) {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ChangeInfoPage", this.toggleId);
    };
    __decorate([
        property
    ], Slot45InfoToggleButtonActor.prototype, "toggleId", void 0);
    Slot45InfoToggleButtonActor = __decorate([
        ccclass
    ], Slot45InfoToggleButtonActor);
    return Slot45InfoToggleButtonActor;
}(cc.Component));
exports.default = Slot45InfoToggleButtonActor;

cc._RF.pop();