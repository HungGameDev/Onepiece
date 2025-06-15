
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/feature/aka-g1009-feature-win-actor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dba97+8X7RFkr372xCtdozN', 'aka-g1009-feature-win-actor');
// Script/UI/feature/aka-g1009-feature-win-actor.ts

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
var aka_g1009_game_controller_1 = require("../../base/controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_balance_model_1 = require("../../models/aka-g1009-balance-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var COUNT_POINT_DURATION = 3;
var G1009FeatureWinActor = /** @class */ (function (_super) {
    __extends(G1009FeatureWinActor, _super);
    function G1009FeatureWinActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.lblTotalWinPoint = null;
        return _this;
    }
    G1009FeatureWinActor.prototype.onLoad = function () {
        this.reset();
        this.register();
    };
    G1009FeatureWinActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featureWinstarted", this.onFeatureWinstarted.bind(this));
    };
    G1009FeatureWinActor.prototype.onFeatureWinstarted = function () {
        if (this.content != null) {
            this.showTotalWin();
        }
        else {
            var newBalance = aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance() + aka_g1009_game_controller_1.default.GetInstance().GetTotalWinPoint();
            aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().SetBalance(newBalance);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BalanceChange", newBalance);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("featureWinCompleted");
        }
    };
    G1009FeatureWinActor.prototype.showTotalWin = function () {
        var _this = this;
        var totalWin = aka_g1009_game_controller_1.default.GetInstance().GetTotalWinPoint();
        this.content.active = true;
        cc.tween(this.content)
            .to(1, { opacity: 255 })
            .delay(COUNT_POINT_DURATION + 2)
            .call(function () {
            cc.tween(_this.content)
                .to(1, { opacity: 0 }).call(function () {
                _this.reset();
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("featureWinCompleted");
            })
                .start();
        }).start();
        var objTween = {
            value: 0
        };
        cc.tween(objTween)
            .delay(1)
            .to(COUNT_POINT_DURATION, { value: totalWin }, {
            progress: function (start, end, current, ratio) {
                _this.lblTotalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(Math.round(current));
                return start + (end - start) * ratio;
            }
        })
            .call(function () {
            _this.lblTotalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(totalWin);
            var newBalance = aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().GetBalance() + aka_g1009_game_controller_1.default.GetInstance().GetTotalWinPoint();
            aka_g1009_balance_model_1.G1009BalanceModel.GetInstance().SetBalance(newBalance);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BalanceChange", newBalance);
        })
            .start();
    };
    G1009FeatureWinActor.prototype.reset = function () {
        if (this.content != null) {
            this.lblTotalWinPoint.string = "";
            this.content.active = false;
            this.content.opacity = 0;
        }
    };
    __decorate([
        property(cc.Node)
    ], G1009FeatureWinActor.prototype, "content", void 0);
    __decorate([
        property(cc.Label)
    ], G1009FeatureWinActor.prototype, "lblTotalWinPoint", void 0);
    G1009FeatureWinActor = __decorate([
        ccclass
    ], G1009FeatureWinActor);
    return G1009FeatureWinActor;
}(cc.Component));
exports.default = G1009FeatureWinActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvZmVhdHVyZS9ha2EtZzEwMDktZmVhdHVyZS13aW4tYWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUZBQW1FO0FBQ25FLDZGQUFrRjtBQUNsRixxRkFBOEU7QUFDOUUsZ0ZBQXlFO0FBRW5FLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQU0sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0FBRS9CO0lBQWtELHdDQUFZO0lBQTlEO1FBQUEscUVBdUVDO1FBcEVBLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsc0JBQWdCLEdBQWEsSUFBSSxDQUFDOztJQWtFbkMsQ0FBQztJQWhFVSxxQ0FBTSxHQUFoQjtRQUNDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sdUNBQVEsR0FBaEI7UUFDQywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFRCxrREFBbUIsR0FBbkI7UUFDQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwQjthQUNJO1lBQ0osSUFBSSxVQUFVLEdBQUcsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNySCwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkQsMkNBQWlCLENB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QUFDLEtBQUssQ0FBQztrRUFDZTtJQUxkLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBdUV4QztJQUFELDJCQUFDO0NBdkVELEFBdUVDLENBdkVpRCxFQUFFLENBQUMsU0FBUyxHQXVFN0Q7a0JBdkVvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRzEwMDlVdGlsIGZyb20gXCIuLi8uLi9iYXNlL1V0aWwvYWthLWcxMDA5LW51bWJlci1jb252ZXJ0ZXJcIjtcbmltcG9ydCBHMTAwOUdhbWVDb250cm9sbGVyIGZyb20gXCIuLi8uLi9iYXNlL2NvbnRyb2xsZXIvYWthLWcxMDA5LWdhbWUtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCB7IEcxMDA5QmFsYW5jZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ha2EtZzEwMDktYmFsYW5jZS1tb2RlbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCBDT1VOVF9QT0lOVF9EVVJBVElPTiA9IDM7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlGZWF0dXJlV2luQWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxuXHRjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHRsYmxUb3RhbFdpblBvaW50OiBjYy5MYWJlbCA9IG51bGw7XG5cblx0cHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcblx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0dGhpcy5yZWdpc3RlcigpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlcigpOiB2b2lkIHtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZmVhdHVyZVdpbnN0YXJ0ZWRcIiwgdGhpcy5vbkZlYXR1cmVXaW5zdGFydGVkLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25GZWF0dXJlV2luc3RhcnRlZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jb250ZW50ICE9IG51bGwpIHtcblx0XHRcdHRoaXMuc2hvd1RvdGFsV2luKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IG5ld0JhbGFuY2UgPSBHMTAwOUJhbGFuY2VNb2RlbC5HZXRJbnN0YW5jZSgpLkdldEJhbGFuY2UoKSArIEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5HZXRUb3RhbFdpblBvaW50KCk7XG5cdFx0XHRHMTAwOUJhbGFuY2VNb2RlbC5HZXRJbnN0YW5jZSgpLlNldEJhbGFuY2UobmV3QmFsYW5jZSk7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkJhbGFuY2VDaGFuZ2VcIiwgbmV3QmFsYW5jZSk7XG5cdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcImZlYXR1cmVXaW5Db21wbGV0ZWRcIik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzaG93VG90YWxXaW4oKTogdm9pZCB7XG5cdFx0bGV0IHRvdGFsV2luID0gRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkdldFRvdGFsV2luUG9pbnQoKTtcblx0XHR0aGlzLmNvbnRlbnQuYWN0aXZlID0gdHJ1ZTtcblx0XHRjYy50d2Vlbih0aGlzLmNvbnRlbnQpXG5cdFx0XHQudG8oMSwgeyBvcGFjaXR5OiAyNTUgfSlcblx0XHRcdC5kZWxheShDT1VOVF9QT0lOVF9EVVJBVElPTiArIDIpXG5cdFx0XHQuY2FsbCgoKSA9PiB7XG5cdFx0XHRcdGNjLnR3ZWVuKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQudG8oMSwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdFx0XHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJmZWF0dXJlV2luQ29tcGxldGVkXCIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnN0YXJ0KCk7XG5cdFx0XHR9KS5zdGFydCgpO1xuXG5cdFx0bGV0IG9ialR3ZWVuID0ge1xuXHRcdFx0dmFsdWU6IDBcblx0XHR9O1xuXHRcdGNjLnR3ZWVuKG9ialR3ZWVuKVxuXHRcdFx0LmRlbGF5KDEpXG5cdFx0XHQudG8oQ09VTlRfUE9JTlRfRFVSQVRJT04sIHsgdmFsdWU6IHRvdGFsV2luIH0sIHtcblx0XHRcdFx0cHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCByYXRpbykgPT4ge1xuXHRcdFx0XHRcdHRoaXMubGJsVG90YWxXaW5Qb2ludC5zdHJpbmcgPSBHMTAwOVV0aWwuSW5zdGFuY2UoKS5OdW1iZXJGb3JtYXRXaXRob3V0Q2hhcmFjdGVyKE1hdGgucm91bmQoY3VycmVudCkpO1xuXHRcdFx0XHRcdHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiByYXRpbztcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYWxsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5sYmxUb3RhbFdpblBvaW50LnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIodG90YWxXaW4pO1xuXHRcdFx0XHRsZXQgbmV3QmFsYW5jZSA9IEcxMDA5QmFsYW5jZU1vZGVsLkdldEluc3RhbmNlKCkuR2V0QmFsYW5jZSgpICsgRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkdldFRvdGFsV2luUG9pbnQoKTtcblx0XHRcdFx0RzEwMDlCYWxhbmNlTW9kZWwuR2V0SW5zdGFuY2UoKS5TZXRCYWxhbmNlKG5ld0JhbGFuY2UpO1xuXHRcdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkJhbGFuY2VDaGFuZ2VcIiwgbmV3QmFsYW5jZSk7XG5cdFx0XHR9KVxuXHRcdFx0LnN0YXJ0KCk7XG5cdH1cblxuXHRwcml2YXRlIHJlc2V0KCk6IHZvaWQge1xuXHRcdGlmKHRoaXMuY29udGVudCE9bnVsbClcblx0XHR7XG5cdFx0XHR0aGlzLmxibFRvdGFsV2luUG9pbnQuc3RyaW5nID0gXCJcIjtcblx0XHRcdHRoaXMuY29udGVudC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdHRoaXMuY29udGVudC5vcGFjaXR5ID0gMDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==