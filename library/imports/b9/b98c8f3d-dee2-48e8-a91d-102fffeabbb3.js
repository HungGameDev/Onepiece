"use strict";
cc._RF.push(module, 'b98c8893uJI6KkdEC//6ruz', 'Slot45-popup-history-item');
// Script/UI/history-popup/Slot45-popup-history-item.ts

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
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45PopupHistoryItem = /** @class */ (function (_super) {
    __extends(Slot45PopupHistoryItem, _super);
    function Slot45PopupHistoryItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblSession = null;
        _this.lblTime = null;
        _this.lblTotalBetPoint = null;
        _this.lblTotalWin = null;
        _this.sprBackround = null;
        _this.spinResuilt = [];
        _this.session = "";
        _this.totalWin = "";
        return _this;
    }
    Slot45PopupHistoryItem.prototype.SetInfoItem = function (session, time, totalBetPoint, totalWin, spinData, count) {
        if (spinData === void 0) { spinData = []; }
        this.sprBackround.node.active = count % 2 == 0;
        this.lblSession.string = session;
        this.lblTime.string = time;
        this.lblTotalBetPoint.string = Slot45_number_converter_1.default.Instance().NumberFormat(totalBetPoint);
        this.lblTotalWin.string = Slot45_number_converter_1.default.Instance().NumberFormat(totalWin);
        this.node.active = true;
        this.spinResuilt = spinData;
        this.totalWin = Slot45_number_converter_1.default.Instance().NumberFormat(totalWin);
        this.session = session;
    };
    Slot45PopupHistoryItem.prototype.Hide = function () {
        this.node.active = false;
    };
    Slot45PopupHistoryItem.prototype.onButtonClick = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ShowDetailHistory", { Session: this.session, TotalWin: this.totalWin, SpinResuilt: this.spinResuilt });
    };
    __decorate([
        property(cc.Label)
    ], Slot45PopupHistoryItem.prototype, "lblSession", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45PopupHistoryItem.prototype, "lblTime", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45PopupHistoryItem.prototype, "lblTotalBetPoint", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45PopupHistoryItem.prototype, "lblTotalWin", void 0);
    __decorate([
        property(cc.Sprite)
    ], Slot45PopupHistoryItem.prototype, "sprBackround", void 0);
    Slot45PopupHistoryItem = __decorate([
        ccclass
    ], Slot45PopupHistoryItem);
    return Slot45PopupHistoryItem;
}(cc.Component));
exports.default = Slot45PopupHistoryItem;

cc._RF.pop();