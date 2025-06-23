"use strict";
cc._RF.push(module, '35ab4E8T3ZCLbBrgPGPmvHJ', 'Slot45-popup-ranking');
// Script/UI/history-popup/Slot45-popup-ranking.ts

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
var Slot45_date_util_1 = require("../../base/Util/Slot45_date-util");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var Slot45_popup_history_1 = require("./Slot45-popup-history");
var Slot45_popup_ranking_item_1 = require("./Slot45-popup-ranking-item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45PopupLeaderBoard = /** @class */ (function (_super) {
    __extends(Slot45PopupLeaderBoard, _super);
    function Slot45PopupLeaderBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allData = null;
        _this.jackpotData = null;
        return _this;
    }
    Slot45PopupLeaderBoard.prototype.start = function () {
        this.Init();
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("OpenJackpotH", this.Show.bind(this));
    };
    Slot45PopupLeaderBoard.prototype.Init = function () {
        var _this = this;
        this.gameManager1009.getJPHistory(this.pageIndex * 6, 20).then(function (data) {
            console.log('getJPHistory', data);
            _this.allData = data.data;
            _this.jackpotData = _this.allData.filter(function (x) { return x.type == 'Nổ Hũ'; });
            _this.processData(data.data);
        });
    };
    Slot45PopupLeaderBoard.prototype.processData = function (historyData) {
        var count = 0;
        for (var index = 0; index < historyData.length; index++) {
            var data = historyData[index];
            count++;
            var item = cc.instantiate(this.prefabItem);
            var itemComponent = item.getComponent(Slot45_popup_ranking_item_1.default);
            var time = Slot45_date_util_1.formatDDMMHHmmSS(data.time);
            itemComponent.SetInfoItem(data.session, time, data.wonUser, data.win, data.type, count);
            item.setParent(this.contentView);
        }
    };
    Slot45PopupLeaderBoard.prototype.OnAllClick = function () {
        this.contentView.destroyAllChildren();
        this.processData(this.allData);
    };
    Slot45PopupLeaderBoard.prototype.OnJackPotClick = function () {
        this.contentView.destroyAllChildren();
        this.processData(this.jackpotData);
    };
    Slot45PopupLeaderBoard = __decorate([
        ccclass
    ], Slot45PopupLeaderBoard);
    return Slot45PopupLeaderBoard;
}(Slot45_popup_history_1.default));
exports.default = Slot45PopupLeaderBoard;

cc._RF.pop();