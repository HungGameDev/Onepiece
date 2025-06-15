"use strict";
cc._RF.push(module, 'ba87fS+kqdMK5WkAzJAyl0b', 'aka-g1009-jackpot-banner');
// Script/UI/jackpot/aka-g1009-jackpot-banner.ts

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
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_bet_model_1 = require("../../models/aka-g1009-bet-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009JackpotBanner = /** @class */ (function (_super) {
    __extends(G1009JackpotBanner, _super);
    function G1009JackpotBanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblJackpotPoint = null;
        return _this;
    }
    G1009JackpotBanner.prototype.onLoad = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register('BetInfos', this.onBetInfos.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register('JackpotCompleted', this.onJackpotCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register('JackpotUpdate', this.onJackpotUpdate.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register('JackpotShow', this.onJackpotStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register('ChangeBet', this.updateLabel.bind(this));
    };
    G1009JackpotBanner.prototype.onBetInfos = function (data) {
        this.betInfos = Object.assign([], data);
        this.updateLabel();
    };
    G1009JackpotBanner.prototype.onJackpotCompleted = function () {
        this.updateLabel();
    };
    G1009JackpotBanner.prototype.onJackpotUpdate = function (datas) {
        var arr = Object.entries(datas);
        this.betInfos.forEach(function (betInfo) {
            var jackpotData = arr.find(function (data) {
                return data[1].jackpotId == betInfo.jackpotInfos[0].jackpotId;
            });
            betInfo.jackpotInfos[0].jackpotAmount = jackpotData[1].jackpotAmount;
        });
        this.updateLabel();
    };
    G1009JackpotBanner.prototype.updateLabel = function () {
        var betDenom = aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetCurrentBetPerLine();
        var betInfo = this.betInfos.filter(function (betInfo) { return betInfo.betDenom == betDenom; })[0];
        this.lblJackpotPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(betInfo.jackpotInfos[0].jackpotAmount);
    };
    G1009JackpotBanner.prototype.onJackpotStarted = function () {
        this.lblJackpotPoint.string = "0";
    };
    __decorate([
        property(cc.Label)
    ], G1009JackpotBanner.prototype, "lblJackpotPoint", void 0);
    G1009JackpotBanner = __decorate([
        ccclass
    ], G1009JackpotBanner);
    return G1009JackpotBanner;
}(cc.Component));
exports.default = G1009JackpotBanner;

cc._RF.pop();