"use strict";
cc._RF.push(module, '9e92aYvIOJNQ4sipjdzLXBd', 'aka-g1009-popup-history');
// Script/UI/history-popup/aka-g1009-popup-history.ts

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
var aka_1009_GameManager_1 = require("../../GameManager/aka_1009-GameManager");
var aka_date_util_1 = require("../../base/Util/aka_date-util");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_popup_history_item_1 = require("./aka-g1009-popup-history-item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009PopupHistory = /** @class */ (function (_super) {
    __extends(G1009PopupHistory, _super);
    function G1009PopupHistory() {
        var _this = _super.call(this) || this;
        _this.prefabItem = null;
        _this.content = null;
        _this.contentView = null;
        _this.pageIndex = 0;
        _this.gameManager1009 = new aka_1009_GameManager_1.GameManager1009();
        return _this;
    }
    G1009PopupHistory.prototype.start = function () {
        this.Init();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("OpenLSC", this.Show.bind(this));
    };
    G1009PopupHistory.prototype.Init = function () {
        var _this = this;
        this.gameManager1009.getBetHistory(this.pageIndex * 6, 20).then(function (data) {
            console.log('getBetHistory', data);
            _this.processData(data);
        });
    };
    G1009PopupHistory.prototype.Show = function () {
        this.content.active = true;
    };
    G1009PopupHistory.prototype.Hide = function () {
        this.content.active = false;
    };
    G1009PopupHistory.prototype.processData = function (historyData) {
        var _this = this;
        historyData.data.forEach(function (data) {
            var item = cc.instantiate(_this.prefabItem);
            var itemComponent = item.getComponent(aka_g1009_popup_history_item_1.default);
            var time = aka_date_util_1.formatDDMMHHmmSS(data.time);
            itemComponent.SetInfoItem(data.session, time, data.totalBet, data.totalWin, data.spinData);
            item.setParent(_this.contentView);
        });
    };
    __decorate([
        property(cc.Prefab)
    ], G1009PopupHistory.prototype, "prefabItem", void 0);
    __decorate([
        property(cc.Node)
    ], G1009PopupHistory.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], G1009PopupHistory.prototype, "contentView", void 0);
    G1009PopupHistory = __decorate([
        ccclass
    ], G1009PopupHistory);
    return G1009PopupHistory;
}(cc.Component));
exports.default = G1009PopupHistory;

cc._RF.pop();