"use strict";
cc._RF.push(module, '35ab4E8T3ZCLbBrgPGPmvHJ', 'aka-g1009-popup-jackpot-history');
// Script/UI/history-popup/aka-g1009-popup-jackpot-history.ts

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
var aka_date_util_1 = require("../../base/Util/aka_date-util");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_popup_history_1 = require("./aka-g1009-popup-history");
var aka_g1009_popup_jackpot_history_item_1 = require("./aka-g1009-popup-jackpot-history-item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009PopupLeaderBoard = /** @class */ (function (_super) {
    __extends(G1009PopupLeaderBoard, _super);
    function G1009PopupLeaderBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allData = null;
        _this.jackpotData = null;
        return _this;
    }
    G1009PopupLeaderBoard.prototype.start = function () {
        this.Init();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("OpenJackpotH", this.Show.bind(this));
    };
    G1009PopupLeaderBoard.prototype.Init = function () {
        var _this = this;
        this.gameManager1009.getJPHistory(this.pageIndex * 6, 20).then(function (data) {
            console.log('getJPHistory', data);
            _this.allData = data.data;
            _this.jackpotData = _this.allData.filter(function (x) { return x.type == 'Jackpot'; });
            _this.processData(data.data);
        });
    };
    G1009PopupLeaderBoard.prototype.processData = function (historyData) {
        for (var index = 0; index < historyData.length; index++) {
            var data = historyData[index];
            var item = cc.instantiate(this.prefabItem);
            var itemComponent = item.getComponent(aka_g1009_popup_jackpot_history_item_1.default);
            var time = aka_date_util_1.formatDDMMHHmmSS(data.time);
            itemComponent.SetInfoItem(data.session, time, data.wonUser, data.win, data.type);
            item.setParent(this.contentView);
        }
    };
    G1009PopupLeaderBoard.prototype.OnAllClick = function () {
        this.contentView.destroyAllChildren();
        this.processData(this.allData);
    };
    G1009PopupLeaderBoard.prototype.OnJackPotClick = function () {
        this.contentView.destroyAllChildren();
        this.processData(this.jackpotData);
    };
    G1009PopupLeaderBoard = __decorate([
        ccclass
    ], G1009PopupLeaderBoard);
    return G1009PopupLeaderBoard;
}(aka_g1009_popup_history_1.default));
exports.default = G1009PopupLeaderBoard;

cc._RF.pop();