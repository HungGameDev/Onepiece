
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-bet-button-v2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '146ecyOf/BOiJoBQcHRmqGu', 'aka-g1009-bet-button-v2');
// Script/UI/popup/aka-g1009-bet-button-v2.ts

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
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_number_converter_1 = require("../../base/Util/aka-g1009-number-converter");
var aka_g1009_bet_model_1 = require("../../models/aka-g1009-bet-model");
var aka_g1009_bet_button_1 = require("./aka-g1009-bet-button");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009BetButtonv2Actor = /** @class */ (function (_super) {
    __extends(G1009BetButtonv2Actor, _super);
    function G1009BetButtonv2Actor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.txtJackpotText = null;
        return _this;
    }
    G1009BetButtonv2Actor.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register('BetInfos', this.onBetInfos.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register('JackpotUpdate', this.onJackpotUpdate.bind(this));
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
    G1009BetButtonv2Actor.prototype.updateLabel = function () {
        var betInfo = this.betInfos[this.betIndex];
        this.txtButtonText.string = aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetBetPointByIndex(this.betIndex).toString();
        this.txtJackpotText.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(betInfo.jackpotInfos[0].jackpotAmount);
    };
    __decorate([
        property(cc.Label)
    ], G1009BetButtonv2Actor.prototype, "txtJackpotText", void 0);
    G1009BetButtonv2Actor = __decorate([
        ccclass
    ], G1009BetButtonv2Actor);
    return G1009BetButtonv2Actor;
}(aka_g1009_bet_button_1.default));
exports.default = G1009BetButtonv2Actor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LWJldC1idXR0b24tdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUZBQThFO0FBQzlFLHlGQUFtRTtBQUNuRSx3RUFBaUU7QUFDakUsK0RBQXlEO0FBRW5ELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1ELHlDQUFtQjtJQUF0RTtRQUFBLHFFQWdDQztRQTdCRyxvQkFBYyxHQUFhLElBQUksQ0FBQzs7SUE2QnBDLENBQUM7SUExQlUscUNBQUssR0FBWjtRQUNJLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVPLCtDQUFlLEdBQXZCLFVBQXdCLEtBQUs7UUFDL0IsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDNUIsSUFBSSxXQUFXLEdBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVVLDBDQUFVLEdBQWxCLFVBQW1CLElBQUk7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLDJDQUFXLEdBQW5CO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsbUNBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsb0NBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZILENBQUM7SUE1QkU7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpRUFDYTtJQUhmLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBZ0N6QztJQUFELDRCQUFDO0NBaENELEFBZ0NDLENBaENrRCw4QkFBbUIsR0FnQ3JFO2tCQWhDb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IEcxMDA5VXRpbCBmcm9tIFwiLi4vLi4vYmFzZS9VdGlsL2FrYS1nMTAwOS1udW1iZXItY29udmVydGVyXCI7XG5pbXBvcnQgeyBHMTAwOUJldE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ha2EtZzEwMDktYmV0LW1vZGVsXCI7XG5pbXBvcnQgRzEwMDlCZXRCdXR0b25BY3RvciBmcm9tIFwiLi9ha2EtZzEwMDktYmV0LWJ1dHRvblwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5QmV0QnV0dG9udjJBY3RvciBleHRlbmRzIEcxMDA5QmV0QnV0dG9uQWN0b3Ige1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dEphY2twb3RUZXh0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGJldEluZm9zOiBhbnk7XG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKCdCZXRJbmZvcycsIHRoaXMub25CZXRJbmZvcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcignSmFja3BvdFVwZGF0ZScsIHRoaXMub25KYWNrcG90VXBkYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiBcbiAgICBwcml2YXRlIG9uSmFja3BvdFVwZGF0ZShkYXRhcyk6IHZvaWQge1xuXHRcdGxldCBhcnIgPSBPYmplY3QuZW50cmllcyhkYXRhcyk7XG5cdFx0dGhpcy5iZXRJbmZvcy5mb3JFYWNoKGJldEluZm8gPT4ge1xuXHRcdFx0bGV0IGphY2twb3REYXRhOiBhbnkgPSBhcnIuZmluZCgoZGF0YTogYW55KSA9PiB7XG5cdFx0XHRcdHJldHVybiBkYXRhWzFdLmphY2twb3RJZCA9PSBiZXRJbmZvLmphY2twb3RJbmZvc1swXS5qYWNrcG90SWQ7XG5cdFx0XHR9KVxuXHRcdFx0YmV0SW5mby5qYWNrcG90SW5mb3NbMF0uamFja3BvdEFtb3VudCA9IGphY2twb3REYXRhWzFdLmphY2twb3RBbW91bnQ7XG5cdFx0fSk7XG5cdFx0dGhpcy51cGRhdGVMYWJlbCgpO1xuXHR9XG5cbiAgICBwcml2YXRlIG9uQmV0SW5mb3MoZGF0YSk6IHZvaWQge1xuXHRcdHRoaXMuYmV0SW5mb3MgPSBPYmplY3QuYXNzaWduKFtdLCBkYXRhKTtcblx0XHR0aGlzLnVwZGF0ZUxhYmVsKCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgdXBkYXRlTGFiZWwoKTogdm9pZCB7XG4gICAgICAgIGxldCBiZXRJbmZvID0gdGhpcy5iZXRJbmZvc1t0aGlzLmJldEluZGV4XTtcbiAgICAgICAgdGhpcy50eHRCdXR0b25UZXh0LnN0cmluZyA9IEcxMDA5QmV0TW9kZWwuR2V0SW5zdGFuY2UoKS5HZXRCZXRQb2ludEJ5SW5kZXgodGhpcy5iZXRJbmRleCkudG9TdHJpbmcoKTtcblx0XHR0aGlzLnR4dEphY2twb3RUZXh0LnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIoYmV0SW5mby5qYWNrcG90SW5mb3NbMF0uamFja3BvdEFtb3VudCk7XG5cdH1cbn1cbiJdfQ==