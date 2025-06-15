
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/jackpot/aka-g1009-jackpot-banner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvamFja3BvdC9ha2EtZzEwMDktamFja3BvdC1iYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUZBQW1FO0FBQ25FLHFGQUE4RTtBQUM5RSx3RUFBaUU7QUFDM0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUEyQ0M7UUF6Q1EscUJBQWUsR0FBYSxJQUFJLENBQUM7O0lBeUMxQyxDQUFDO0lBckNVLG1DQUFNLEdBQWhCO1FBQ0MsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakcsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNGLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFGLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRU8sdUNBQVUsR0FBbEIsVUFBbUIsSUFBSTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sK0NBQWtCLEdBQTFCO1FBQ0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyw0Q0FBZSxHQUF2QixVQUF3QixLQUFLO1FBQzVCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQzVCLElBQUksV0FBVyxHQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFTO2dCQUN6QyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUE7WUFDRixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyx3Q0FBVyxHQUFuQjtRQUNDLElBQUksUUFBUSxHQUFHLG1DQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxRQUFRLElBQUksUUFBUSxFQUE1QixDQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsb0NBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFFTyw2Q0FBZ0IsR0FBeEI7UUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDbkMsQ0FBQztJQXhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNzQjtJQUZyQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQTJDdEM7SUFBRCx5QkFBQztDQTNDRCxBQTJDQyxDQTNDK0MsRUFBRSxDQUFDLFNBQVMsR0EyQzNEO2tCQTNDb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEcxMDA5VXRpbCBmcm9tIFwiLi4vLi4vYmFzZS9VdGlsL2FrYS1nMTAwOS1udW1iZXItY29udmVydGVyXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IHsgRzEwMDlCZXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYWthLWcxMDA5LWJldC1tb2RlbFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5SmFja3BvdEJhbm5lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHJpdmF0ZSBsYmxKYWNrcG90UG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuXHRwcml2YXRlIGJldEluZm9zOiBhbnk7XG5cblx0cHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKCdCZXRJbmZvcycsIHRoaXMub25CZXRJbmZvcy5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKCdKYWNrcG90Q29tcGxldGVkJywgdGhpcy5vbkphY2twb3RDb21wbGV0ZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcignSmFja3BvdFVwZGF0ZScsIHRoaXMub25KYWNrcG90VXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoJ0phY2twb3RTaG93JywgdGhpcy5vbkphY2twb3RTdGFydGVkLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoJ0NoYW5nZUJldCcsIHRoaXMudXBkYXRlTGFiZWwuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRwcml2YXRlIG9uQmV0SW5mb3MoZGF0YSk6IHZvaWQge1xuXHRcdHRoaXMuYmV0SW5mb3MgPSBPYmplY3QuYXNzaWduKFtdLCBkYXRhKTtcblx0XHR0aGlzLnVwZGF0ZUxhYmVsKCk7XG5cdH1cblxuXHRwcml2YXRlIG9uSmFja3BvdENvbXBsZXRlZCgpOiB2b2lkIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVsKCk7XG5cdH1cblxuXHRwcml2YXRlIG9uSmFja3BvdFVwZGF0ZShkYXRhcyk6IHZvaWQge1xuXHRcdGxldCBhcnIgPSBPYmplY3QuZW50cmllcyhkYXRhcyk7XG5cdFx0dGhpcy5iZXRJbmZvcy5mb3JFYWNoKGJldEluZm8gPT4ge1xuXHRcdFx0bGV0IGphY2twb3REYXRhOiBhbnkgPSBhcnIuZmluZCgoZGF0YTogYW55KSA9PiB7XG5cdFx0XHRcdHJldHVybiBkYXRhWzFdLmphY2twb3RJZCA9PSBiZXRJbmZvLmphY2twb3RJbmZvc1swXS5qYWNrcG90SWQ7XG5cdFx0XHR9KVxuXHRcdFx0YmV0SW5mby5qYWNrcG90SW5mb3NbMF0uamFja3BvdEFtb3VudCA9IGphY2twb3REYXRhWzFdLmphY2twb3RBbW91bnQ7XG5cdFx0fSk7XG5cdFx0dGhpcy51cGRhdGVMYWJlbCgpO1xuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVMYWJlbCgpOiB2b2lkIHtcblx0XHRsZXQgYmV0RGVub20gPSBHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuR2V0Q3VycmVudEJldFBlckxpbmUoKTtcblx0XHRsZXQgYmV0SW5mbyA9IHRoaXMuYmV0SW5mb3MuZmlsdGVyKChiZXRJbmZvKSA9PiBiZXRJbmZvLmJldERlbm9tID09IGJldERlbm9tKVswXTtcblx0XHR0aGlzLmxibEphY2twb3RQb2ludC5zdHJpbmcgPSBHMTAwOVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKGJldEluZm8uamFja3BvdEluZm9zWzBdLmphY2twb3RBbW91bnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkphY2twb3RTdGFydGVkKCk6IHZvaWQge1xuXHRcdHRoaXMubGJsSmFja3BvdFBvaW50LnN0cmluZyA9IFwiMFwiO1xuXHR9XG59Il19