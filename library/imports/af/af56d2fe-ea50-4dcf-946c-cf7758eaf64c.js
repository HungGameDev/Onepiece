"use strict";
cc._RF.push(module, 'af56dL+6lBNz5Rsz3dY6vZM', 'Slot45-bet-toggle-button');
// Script/UI/popup/Slot45-bet-toggle-button.ts

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
var Slot45_info_toggle_button_1 = require("./Slot45-info-toggle-button");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009BetToggleButtonActor = /** @class */ (function (_super) {
    __extends(G1009BetToggleButtonActor, _super);
    function G1009BetToggleButtonActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    G1009BetToggleButtonActor.prototype.start = function () {
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("ChangeToggleState", this.OnChangeToggleState.bind(this));
    };
    G1009BetToggleButtonActor.prototype.OnToggleClicked = function (action) {
        Slot45_event_manager_1.G1009EventManager.GetInstance().notify("SelectBetLineClick", { id: this.toggleId, isCheck: action.isChecked });
    };
    G1009BetToggleButtonActor.prototype.OnChangeToggleState = function (toggleArray) {
        this.toggle.isChecked = toggleArray.includes(this.toggleId);
    };
    G1009BetToggleButtonActor = __decorate([
        ccclass
    ], G1009BetToggleButtonActor);
    return G1009BetToggleButtonActor;
}(Slot45_info_toggle_button_1.default));
exports.default = G1009BetToggleButtonActor;

cc._RF.pop();