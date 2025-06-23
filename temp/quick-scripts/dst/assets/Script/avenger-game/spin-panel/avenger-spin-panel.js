
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
// import Slot45Util from "../../base/Util/aka-g1009-number-converter";
// import { Slot45EventManager } from "../../base/events/aka-g1009-event-manager";
// import Slot45SpinItemActor, { ESpinningState } from "./aka-g1009-spin-item";
// import { Slot45SpinItemData } from "./aka-g1009-spin-item-data";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdmVuZ2VyLWdhbWVcXHNwaW4tcGFuZWxcXGF2ZW5nZXItc3Bpbi1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBaUU7QUFDakUsdUVBQXVFO0FBQ3ZFLGtGQUFrRjtBQUNsRiwrRUFBK0U7QUFDL0UsbUVBQW1FO0FBQ25FLDJFQUF5RTtBQUVuRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE4QyxvQ0FBb0I7SUFBbEU7O0lBR0EsQ0FBQztJQUhvQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQUdwQztJQUFELHVCQUFDO0NBSEQsQUFHQyxDQUg2QywyQkFBb0IsR0FHakU7a0JBSG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFNsb3R0eVBhcmFtZXRlciB9IGZyb20gXCIuLi8uLi9ha2EtZzEwMDktZ2FtZS1jb25maWdcIjtcclxuLy8gaW1wb3J0IFNsb3Q0NVV0aWwgZnJvbSBcIi4uLy4uL2Jhc2UvVXRpbC9ha2EtZzEwMDktbnVtYmVyLWNvbnZlcnRlclwiO1xyXG4vLyBpbXBvcnQgeyBTbG90NDVFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcclxuLy8gaW1wb3J0IFNsb3Q0NVNwaW5JdGVtQWN0b3IsIHsgRVNwaW5uaW5nU3RhdGUgfSBmcm9tIFwiLi9ha2EtZzEwMDktc3Bpbi1pdGVtXCI7XHJcbi8vIGltcG9ydCB7IFNsb3Q0NVNwaW5JdGVtRGF0YSB9IGZyb20gXCIuL2FrYS1nMTAwOS1zcGluLWl0ZW0tZGF0YVwiO1xyXG5pbXBvcnQgU2xvdDQ1U3BpblBhbmVsQWN0b3IgZnJvbSBcIi4uLy4uL1VJL3NwaW4tcGFuZWwvU2xvdDQ1LXNwaW4tcGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2ZW5nZXJTcGluUGFuZWwgZXh0ZW5kcyBTbG90NDVTcGluUGFuZWxBY3RvciB7XHJcblxyXG5cdFxyXG59XHJcbiJdfQ==