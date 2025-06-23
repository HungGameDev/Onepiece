
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
var Slot45_spin_panel_1 = require("../../UI/spin-panel/Slot45-spin-panel");
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
}(Slot45_spin_panel_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXHNwaW4tcGFuZWxcXGF2ZW5nZXItc3Bpbi1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBaUU7QUFDakUsc0VBQXNFO0FBQ3RFLGlGQUFpRjtBQUNqRiw4RUFBOEU7QUFDOUUsa0VBQWtFO0FBQ2xFLDJFQUF3RTtBQUVsRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE4QyxvQ0FBbUI7SUFBakU7O0lBR0EsQ0FBQztJQUhvQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQUdwQztJQUFELHVCQUFDO0NBSEQsQUFHQyxDQUg2QywyQkFBbUIsR0FHaEU7a0JBSG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFNsb3R0eVBhcmFtZXRlciB9IGZyb20gXCIuLi8uLi9ha2EtZzEwMDktZ2FtZS1jb25maWdcIjtcclxuLy8gaW1wb3J0IEcxMDA5VXRpbCBmcm9tIFwiLi4vLi4vYmFzZS9VdGlsL2FrYS1nMTAwOS1udW1iZXItY29udmVydGVyXCI7XHJcbi8vIGltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XHJcbi8vIGltcG9ydCBHMTAwOVNwaW5JdGVtQWN0b3IsIHsgRVNwaW5uaW5nU3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktc3Bpbi1pdGVtXCI7XHJcbi8vIGltcG9ydCB7IEcxMDA5U3Bpbkl0ZW1EYXRhIH0gZnJvbSBcIi4vYWthLWcxMDA5LXNwaW4taXRlbS1kYXRhXCI7XHJcbmltcG9ydCBHMTAwOVNwaW5QYW5lbEFjdG9yIGZyb20gXCIuLi8uLi9VSS9zcGluLXBhbmVsL1Nsb3Q0NS1zcGluLXBhbmVsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmVuZ2VyU3BpblBhbmVsIGV4dGVuZHMgRzEwMDlTcGluUGFuZWxBY3RvciB7XHJcblxyXG5cdFxyXG59XHJcbiJdfQ==