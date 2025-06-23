"use strict";
cc._RF.push(module, '9e92aYvIOJNQ4sipjdzLXBd', 'Slot45-popup-history');
// Script/UI/history-popup/Slot45-popup-history.ts

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
var Slot45_GameManager_1 = require("../../GameManager/Slot45-GameManager");
var Slot45_date_util_1 = require("../../base/Util/Slot45_date-util");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var Slot45_popup_history_item_1 = require("./Slot45-popup-history-item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45PopupHistory = /** @class */ (function (_super) {
    __extends(Slot45PopupHistory, _super);
    function Slot45PopupHistory() {
        var _this = _super.call(this) || this;
        _this.prefabItem = null;
        _this.content = null;
        _this.contentView = null;
        _this.pageIndex = 0;
        _this.gameManager1009 = new Slot45_GameManager_1.GameManager1009();
        return _this;
    }
    Slot45PopupHistory.prototype.start = function () {
        this.Init();
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("OpenLSC", this.Show.bind(this));
    };
    Slot45PopupHistory.prototype.Init = function () {
        var _this = this;
        this.gameManager1009.getBetHistory(this.pageIndex * 6, 20).then(function (data) {
            console.log('getBetHistory', data);
            _this.processData(data);
        });
    };
    Slot45PopupHistory.prototype.Show = function () {
        this.content.active = true;
    };
    Slot45PopupHistory.prototype.Hide = function () {
        this.content.active = false;
    };
    Slot45PopupHistory.prototype.processData = function (historyData) {
        var _this = this;
        var count = 0;
        historyData.data.forEach(function (data) {
            var item = cc.instantiate(_this.prefabItem);
            var itemComponent = item.getComponent(Slot45_popup_history_item_1.default);
            var time = Slot45_date_util_1.formatDDMMHHmmSS(data.time);
            count++;
            itemComponent.SetInfoItem(data.session, time, data.totalBet, data.totalWin, data.spinData, count);
            item.setParent(_this.contentView);
        });
    };
    __decorate([
        property(cc.Prefab)
    ], Slot45PopupHistory.prototype, "prefabItem", void 0);
    __decorate([
        property(cc.Node)
    ], Slot45PopupHistory.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], Slot45PopupHistory.prototype, "contentView", void 0);
    Slot45PopupHistory = __decorate([
        ccclass
    ], Slot45PopupHistory);
    return Slot45PopupHistory;
}(cc.Component));
exports.default = Slot45PopupHistory;

cc._RF.pop();