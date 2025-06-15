"use strict";
cc._RF.push(module, '4dcd5uWPp9DVZ+nOV55ZXZw', 'aka-g1009-round-popup');
// Script/UI/popup/aka-g1009-round-popup.ts

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
var G1009RoundPopupActor = /** @class */ (function (_super) {
    __extends(G1009RoundPopupActor, _super);
    function G1009RoundPopupActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rounnd = null;
        return _this;
    }
    G1009RoundPopupActor.prototype.start = function () {
        this.register();
    };
    G1009RoundPopupActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowRound", this.OnShowRound.bind(this));
    };
    G1009RoundPopupActor.prototype.OnShowRound = function (round) {
        this.rounnd.string = round;
    };
    __decorate([
        property(cc.Label)
    ], G1009RoundPopupActor.prototype, "rounnd", void 0);
    G1009RoundPopupActor = __decorate([
        ccclass
    ], G1009RoundPopupActor);
    return G1009RoundPopupActor;
}(cc.Component));
exports.default = G1009RoundPopupActor;

cc._RF.pop();