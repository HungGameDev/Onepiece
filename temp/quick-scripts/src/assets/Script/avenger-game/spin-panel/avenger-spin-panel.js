"use strict";
cc._RF.push(module, 'c776dlBjvhDJrXqYq7WwB65', 'avenger-spin-panel');
// Script/avenger-game/spin-panel/avenger-spin-panel.ts

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
// import { SlottyParameter } from "../../aka-g1009-game-config";
// import G1009Util from "../../base/Util/aka-g1009-number-converter";
// import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";
// import G1009SpinItemActor, { ESpinningState } from "./aka-g1009-spin-item";
// import { G1009SpinItemData } from "./aka-g1009-spin-item-data";
var aka_g1009_spin_panel_1 = require("../../UI/spin-panel/aka-g1009-spin-panel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AvengerSpinPanel = /** @class */ (function (_super) {
    __extends(AvengerSpinPanel, _super);
    function AvengerSpinPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvengerSpinPanel = __decorate([
        ccclass
    ], AvengerSpinPanel);
    return AvengerSpinPanel;
}(aka_g1009_spin_panel_1.default));
exports.default = AvengerSpinPanel;

cc._RF.pop();