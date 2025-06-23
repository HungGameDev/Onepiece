"use strict";
cc._RF.push(module, 'bc0a99kI4tCaZpre2q2GriP', 'Slot45-popup-ranking-item');
// Script/UI/history-popup/Slot45-popup-ranking-item.ts

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
var Slot45_number_converter_1 = require("../../base/Util/Slot45-number-converter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45PopupRankingItem = /** @class */ (function (_super) {
    __extends(Slot45PopupRankingItem, _super);
    function Slot45PopupRankingItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblSesion = null;
        _this.lblTime = null;
        _this.lblUserName = null;
        _this.lblTotalWin = null;
        _this.lblWinType = null;
        _this.sprBackround = null;
        return _this;
    }
    Slot45PopupRankingItem.prototype.SetInfoItem = function (session, time, userName, totalWin, winType, count) {
        this.sprBackround.node.active = count % 2 == 0;
        this.lblSesion.string = session;
        this.lblTime.string = time;
        this.lblUserName.string = userName;
        this.lblTotalWin.string = Slot45_number_converter_1.default.Instance().NumberFormat(totalWin);
        this.lblWinType.string = winType;
        this.node.active = true;
    };
    Slot45PopupRankingItem.prototype.Hide = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], Slot45PopupRankingItem.prototype, "lblSesion", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45PopupRankingItem.prototype, "lblTime", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45PopupRankingItem.prototype, "lblUserName", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45PopupRankingItem.prototype, "lblTotalWin", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45PopupRankingItem.prototype, "lblWinType", void 0);
    __decorate([
        property(cc.Sprite)
    ], Slot45PopupRankingItem.prototype, "sprBackround", void 0);
    Slot45PopupRankingItem = __decorate([
        ccclass
    ], Slot45PopupRankingItem);
    return Slot45PopupRankingItem;
}(cc.Component));
exports.default = Slot45PopupRankingItem;

cc._RF.pop();