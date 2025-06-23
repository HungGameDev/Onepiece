"use strict";
cc._RF.push(module, 'ba87fS+kqdMK5WkAzJAyl0b', 'Slot45-jackpot-banner');
// Script/UI/jackpot/Slot45-jackpot-banner.ts

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
var Slot45_bet_model_1 = require("../../models/Slot45-bet-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45JackpotBanner = /** @class */ (function (_super) {
    __extends(Slot45JackpotBanner, _super);
    function Slot45JackpotBanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblJackpotPoint = null;
        return _this;
    }
    Slot45JackpotBanner.prototype.onLoad = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register('BetInfos', this.onBetInfos.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register('JackpotCompleted', this.onJackpotCompleted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register('JackpotUpdate', this.onJackpotUpdate.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register('JackpotShow', this.onJackpotStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register('ChangeBet', this.updateLabel.bind(this));
    };
    Slot45JackpotBanner.prototype.onBetInfos = function (data) {
        this.betInfos = Object.assign([], data);
        this.updateLabel();
    };
    Slot45JackpotBanner.prototype.onJackpotCompleted = function () {
        this.updateLabel();
    };
    Slot45JackpotBanner.prototype.onJackpotUpdate = function (datas) {
        var arr = Object.entries(datas);
        this.betInfos.forEach(function (betInfo) {
            var jackpotData = arr.find(function (data) {
                return data[1].jackpotId == betInfo.jackpotInfos[0].jackpotId;
            });
            betInfo.jackpotInfos[0].jackpotAmount = jackpotData[1].jackpotAmount;
        });
        this.updateLabel();
    };
    Slot45JackpotBanner.prototype.updateLabel = function () {
        var betDenom = Slot45_bet_model_1.Slot45BetModel.GetInstance().GetCurrentBetPerLine();
        var betInfo = this.betInfos.filter(function (betInfo) { return betInfo.betDenom == betDenom; })[0];
        this.lblJackpotPoint.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(betInfo.jackpotInfos[0].jackpotAmount);
    };
    Slot45JackpotBanner.prototype.onJackpotStarted = function () {
        this.lblJackpotPoint.string = "0";
    };
    __decorate([
        property(cc.Label)
    ], Slot45JackpotBanner.prototype, "lblJackpotPoint", void 0);
    Slot45JackpotBanner = __decorate([
        ccclass
    ], Slot45JackpotBanner);
    return Slot45JackpotBanner;
}(cc.Component));
exports.default = Slot45JackpotBanner;

cc._RF.pop();