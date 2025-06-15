
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-bet-button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd208aJqVyJEk6574BkN1ItH', 'aka-g1009-bet-button');
// Script/UI/popup/aka-g1009-bet-button.ts

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
var aka_g1009_balance_model_1 = require("../../models/aka-g1009-balance-model");
var aka_g1009_bet_model_1 = require("../../models/aka-g1009-bet-model");
var aka_g1009_button_1 = require("./aka-g1009-button");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009BetButtonActor = /** @class */ (function (_super) {
    __extends(G1009BetButtonActor, _super);
    function G1009BetButtonActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.betIndex = -1;
        _this.txtButtonText = null;
        return _this;
    }
    G1009BetButtonActor.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowBetPanel", this.SetButtonTextValues.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SetBetIncrease", this.SetTextColor.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register(this.EventName, this.SetTextColor.bind(this));
        this.SetTextColor(0);
    };
    G1009BetButtonActor.prototype.SetButtonTextValues = function () {
        this.txtButtonText.string = aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetBetPointByIndex(this.betIndex).toString();
        this.button.interactable = this.validatorButtonSetBet(this.betIndex);
    };
    G1009BetButtonActor.prototype.onButtonClick = function () {
        if (this.validatorButtonSetBet(this.betIndex) && aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetBetPerLinebyIndex(this.betIndex) != aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetCurrentBetPerLine()) {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify(this.EventName, this.betIndex);
        }
    };
    G1009BetButtonActor.prototype.validatorButtonSetBet = function (index) {
        return aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetNextTotalBetPointbyIndex(index) <= aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance();
    };
    G1009BetButtonActor.prototype.SetTextColor = function (index) {
        this.txtButtonText.node.color = this.betIndex != index ? cc.Color.GRAY : cc.Color.WHITE;
    };
    __decorate([
        property
    ], G1009BetButtonActor.prototype, "betIndex", void 0);
    __decorate([
        property(cc.Label)
    ], G1009BetButtonActor.prototype, "txtButtonText", void 0);
    G1009BetButtonActor = __decorate([
        ccclass
    ], G1009BetButtonActor);
    return G1009BetButtonActor;
}(aka_g1009_button_1.default));
exports.default = G1009BetButtonActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LWJldC1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQThFO0FBQzlFLGdGQUF5RTtBQUN6RSx3RUFBaUU7QUFDakUsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlELHVDQUFnQjtJQUFqRTtRQUFBLHFFQW1DQztRQWhDRyxjQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFdEIsbUJBQWEsR0FBYSxJQUFJLENBQUM7O0lBOEJuQyxDQUFDO0lBNUJVLG1DQUFLLEdBQVo7UUFDSSwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5RiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVTLGlEQUFtQixHQUE3QjtRQUVJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLG1DQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVRLDJDQUFhLEdBQWI7UUFDTCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksbUNBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksbUNBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxFQUN0SztZQUNJLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6RTtJQUVMLENBQUM7SUFFTyxtREFBcUIsR0FBN0IsVUFBOEIsS0FBYTtRQUN2QyxPQUFPLG1DQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLElBQUksMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUgsQ0FBQztJQUVPLDBDQUFZLEdBQXBCLFVBQXFCLEtBQWE7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDaEcsQ0FBQztJQS9CRDtRQURDLFFBQVE7eURBQ2E7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4REFDWTtJQUxkLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBbUN2QztJQUFELDBCQUFDO0NBbkNELEFBbUNDLENBbkNnRCwwQkFBZ0IsR0FtQ2hFO2tCQW5Db0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCB7IEcxMDA5QmFsYW5jZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ha2EtZzEwMDktYmFsYW5jZS1tb2RlbFwiO1xuaW1wb3J0IHsgRzEwMDlCZXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYWthLWcxMDA5LWJldC1tb2RlbFwiO1xuaW1wb3J0IEcxMDA5QnV0dG9uQWN0b3IgZnJvbSBcIi4vYWthLWcxMDA5LWJ1dHRvblwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5QmV0QnV0dG9uQWN0b3IgZXh0ZW5kcyBHMTAwOUJ1dHRvbkFjdG9yIHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGJldEluZGV4OiBudW1iZXIgPSAtMTtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0QnV0dG9uVGV4dDogY2MuTGFiZWwgPSBudWxsO1xuICAgIFxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNob3dCZXRQYW5lbFwiLCB0aGlzLlNldEJ1dHRvblRleHRWYWx1ZXMuYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTZXRCZXRJbmNyZWFzZVwiLCB0aGlzLlNldFRleHRDb2xvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3Rlcih0aGlzLkV2ZW50TmFtZSwgdGhpcy5TZXRUZXh0Q29sb3IuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuU2V0VGV4dENvbG9yKDApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBTZXRCdXR0b25UZXh0VmFsdWVzKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMudHh0QnV0dG9uVGV4dC5zdHJpbmcgPSBHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuR2V0QmV0UG9pbnRCeUluZGV4KHRoaXMuYmV0SW5kZXgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uLmludGVyYWN0YWJsZSA9IHRoaXMudmFsaWRhdG9yQnV0dG9uU2V0QmV0KHRoaXMuYmV0SW5kZXgpO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIG9uQnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvckJ1dHRvblNldEJldCh0aGlzLmJldEluZGV4KSAmJiBHMTAwOUJldE1vZGVsLkdldEluc3RhbmNlKCkuR2V0QmV0UGVyTGluZWJ5SW5kZXgodGhpcy5iZXRJbmRleCkgIT0gRzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLkdldEN1cnJlbnRCZXRQZXJMaW5lKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KHRoaXMuRXZlbnROYW1lLCB0aGlzLmJldEluZGV4KTtcbiAgICAgICAgfVxuXHRcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JCdXR0b25TZXRCZXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gRzEwMDlCZXRNb2RlbC5HZXRJbnN0YW5jZSgpLkdldE5leHRUb3RhbEJldFBvaW50YnlJbmRleChpbmRleCkgPD0gRzEwMDlCYWxhbmNlTW9kZWwuR2V0SW5zdGFuY2UoKS5HZXRCYWxhbmNlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTZXRUZXh0Q29sb3IoaW5kZXg6IG51bWJlcik6IHZvaWR7ICAgICAgXG4gICAgICAgICAgICB0aGlzLnR4dEJ1dHRvblRleHQubm9kZS5jb2xvciA9IHRoaXMuYmV0SW5kZXggIT0gaW5kZXggPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgfVxufVxuIl19