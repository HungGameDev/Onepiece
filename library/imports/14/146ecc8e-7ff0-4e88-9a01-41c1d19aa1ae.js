"use strict";
cc._RF.push(module, '146ecyOf/BOiJoBQcHRmqGu', 'Slot45-bet-button-v2');
// Script/UI/popup/Slot45-bet-button-v2.ts

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
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var Slot45_number_converter_1 = require("../../base/Util/Slot45-number-converter");
var Slot45_bet_model_1 = require("../../models/Slot45-bet-model");
var Slot45_bet_button_1 = require("./Slot45-bet-button");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009BetButtonv2Actor = /** @class */ (function (_super) {
    __extends(G1009BetButtonv2Actor, _super);
    function G1009BetButtonv2Actor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.txtJackpotText = null;
        return _this;
    }
    G1009BetButtonv2Actor.prototype.start = function () {
        Slot45_event_manager_1.G1009EventManager.GetInstance().register('BetInfos', this.onBetInfos.bind(this));
        Slot45_event_manager_1.G1009EventManager.GetInstance().register('JackpotUpdate', this.onJackpotUpdate.bind(this));
    };
    G1009BetButtonv2Actor.prototype.onJackpotUpdate = function (datas) {
        var arr = Object.entries(datas);
        this.betInfos.forEach(function (betInfo) {
            var jackpotData = arr.find(function (data) {
                return data[1].jackpotId == betInfo.jackpotInfos[0].jackpotId;
            });
            betInfo.jackpotInfos[0].jackpotAmount = jackpotData[1].jackpotAmount;
        });
        this.updateLabel();
    };
    G1009BetButtonv2Actor.prototype.onBetInfos = function (data) {
        this.betInfos = Object.assign([], data);
        this.updateLabel();
    };
    G1009BetButtonv2Actor.prototype.onButtonClick = function () {
        _super.prototype.onButtonClick.call(this);
        Slot45_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_choosen_bet", isLoop: false });
    };
    G1009BetButtonv2Actor.prototype.updateLabel = function () {
        var betInfo = this.betInfos[this.betIndex];
        this.txtButtonText.string = Slot45_bet_model_1.G1009BetModel.GetInstance().GetBetPointByIndex(this.betIndex).toString();
        this.txtJackpotText.string = Slot45_number_converter_1.default.Instance().NumberFormatWithoutCharacter(betInfo.jackpotInfos[0].jackpotAmount);
    };
    __decorate([
        property(cc.Label)
    ], G1009BetButtonv2Actor.prototype, "txtJackpotText", void 0);
    G1009BetButtonv2Actor = __decorate([
        ccclass
    ], G1009BetButtonv2Actor);
    return G1009BetButtonv2Actor;
}(Slot45_bet_button_1.default));
exports.default = G1009BetButtonv2Actor;

cc._RF.pop();