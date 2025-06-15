
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYXZlbmdlci1nYW1lL3NwaW4tcGFuZWwvYXZlbmdlci1zcGluLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFpRTtBQUNqRSxzRUFBc0U7QUFDdEUsaUZBQWlGO0FBQ2pGLDhFQUE4RTtBQUM5RSxrRUFBa0U7QUFDbEUsaUZBQTJFO0FBRXJFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQThDLG9DQUFtQjtJQUFqRTs7SUFHQSxDQUFDO0lBSG9CLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBR3BDO0lBQUQsdUJBQUM7Q0FIRCxBQUdDLENBSDZDLDhCQUFtQixHQUdoRTtrQkFIb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgU2xvdHR5UGFyYW1ldGVyIH0gZnJvbSBcIi4uLy4uL2FrYS1nMTAwOS1nYW1lLWNvbmZpZ1wiO1xuLy8gaW1wb3J0IEcxMDA5VXRpbCBmcm9tIFwiLi4vLi4vYmFzZS9VdGlsL2FrYS1nMTAwOS1udW1iZXItY29udmVydGVyXCI7XG4vLyBpbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuLy8gaW1wb3J0IEcxMDA5U3Bpbkl0ZW1BY3RvciwgeyBFU3Bpbm5pbmdTdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1zcGluLWl0ZW1cIjtcbi8vIGltcG9ydCB7IEcxMDA5U3Bpbkl0ZW1EYXRhIH0gZnJvbSBcIi4vYWthLWcxMDA5LXNwaW4taXRlbS1kYXRhXCI7XG5pbXBvcnQgRzEwMDlTcGluUGFuZWxBY3RvciBmcm9tIFwiLi4vLi4vVUkvc3Bpbi1wYW5lbC9ha2EtZzEwMDktc3Bpbi1wYW5lbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2ZW5nZXJTcGluUGFuZWwgZXh0ZW5kcyBHMTAwOVNwaW5QYW5lbEFjdG9yIHtcblxuXHRcbn1cbiJdfQ==