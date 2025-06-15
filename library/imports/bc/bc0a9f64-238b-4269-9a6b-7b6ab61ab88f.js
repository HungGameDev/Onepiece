"use strict";
cc._RF.push(module, 'bc0a99kI4tCaZpre2q2GriP', 'aka-g1009-popup-jackpot-history-item');
// Script/UI/history-popup/aka-g1009-popup-jackpot-history-item.ts

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
var aka_g1009_number_converter_1 = require("../../base/Util/aka-g1009-number-converter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009PopupJackpotHistoryItem = /** @class */ (function (_super) {
    __extends(G1009PopupJackpotHistoryItem, _super);
    function G1009PopupJackpotHistoryItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblSesion = null;
        _this.lblTime = null;
        _this.lblUserName = null;
        _this.lblTotalWin = null;
        _this.lblWinType = null;
        return _this;
    }
    G1009PopupJackpotHistoryItem.prototype.SetInfoItem = function (session, time, userName, totalWin, winType) {
        this.lblSesion.string = session;
        this.lblTime.string = time;
        this.lblUserName.string = userName;
        this.lblTotalWin.string = aka_g1009_number_converter_1.default.Instance().NumberFormat(totalWin);
        this.lblWinType.string = winType;
        this.node.active = true;
    };
    G1009PopupJackpotHistoryItem.prototype.Hide = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], G1009PopupJackpotHistoryItem.prototype, "lblSesion", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupJackpotHistoryItem.prototype, "lblTime", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupJackpotHistoryItem.prototype, "lblUserName", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupJackpotHistoryItem.prototype, "lblTotalWin", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupJackpotHistoryItem.prototype, "lblWinType", void 0);
    G1009PopupJackpotHistoryItem = __decorate([
        ccclass
    ], G1009PopupJackpotHistoryItem);
    return G1009PopupJackpotHistoryItem;
}(cc.Component));
exports.default = G1009PopupJackpotHistoryItem;

cc._RF.pop();