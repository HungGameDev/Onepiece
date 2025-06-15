"use strict";
cc._RF.push(module, '91baamCuxdAR7YRDpL3xu6y', 'avenger-smoke-panel');
// Script/avenger-game/exploding-panel/avenger-smoke-panel.ts

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
var SmokePanel = /** @class */ (function (_super) {
    __extends(SmokePanel, _super);
    function SmokePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.particleSmoke = [];
        return _this;
    }
    SmokePanel.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("CellDropCompleted", this.onCellDropCompleted.bind(this));
    };
    SmokePanel.prototype.onLoad = function () {
        this.register();
    };
    SmokePanel.prototype.onCellDropCompleted = function (cellIndex) {
        this.particleSmoke[cellIndex].resetSystem();
    };
    __decorate([
        property(cc.ParticleSystem)
    ], SmokePanel.prototype, "particleSmoke", void 0);
    SmokePanel = __decorate([
        ccclass
    ], SmokePanel);
    return SmokePanel;
}(cc.Component));
exports.default = SmokePanel;

cc._RF.pop();