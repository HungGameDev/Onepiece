
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/jackpot/aka-g1009-jackpot-actor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f13e1XQdJFFtYczeGr0N2SW', 'aka-g1009-jackpot-actor');
// Script/UI/jackpot/aka-g1009-jackpot-actor.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FADE_DURATION = 0.25;
var COUNT_POINT_DURATION = 2;
var IDLE_DURATION = 1;
var G1009JackpotActor = /** @class */ (function (_super) {
    __extends(G1009JackpotActor, _super);
    function G1009JackpotActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.spine = null;
        _this.skeletonData = null;
        _this.lblTotalWinPoint = null;
        _this.currentWinPoint = 0;
        _this.jackpotWinPoint = 0;
        _this.isStopImmediately = false;
        return _this;
    }
    G1009JackpotActor.prototype.onLoad = function () {
        this.reset();
        this.register();
    };
    G1009JackpotActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("JackpotStarted", this.onJackpotStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("WinDataRespond", this.onSetFinalReSource.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopImmediately", this.onStopImmediately.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
    };
    G1009JackpotActor.prototype.onSetFinalReSource = function (finalResult) {
        this.jackpotWinPoint = finalResult.jackpotWinPoint;
    };
    G1009JackpotActor.prototype.onJackpotStarted = function () {
        var _this = this;
        if (this.isStopImmediately) {
            this.speedUpAnimation();
            return;
        }
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotPresentationStarted");
        var objTween = {
            value: 0
        };
        this.tweenShowPopup = cc.tween(this.spine.node)
            // .delay(4.6)
            .to(FADE_DURATION, { scale: 1 })
            .call(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotShow");
            _this.content.active = true;
            _this.spine.skeletonData = _this.skeletonData;
            _this.spine.setSkin("nohu");
            var track = _this.spine.setAnimation(0, "animation", true);
            // this.spine.setTrackCompleteListener(track, () => {
            // 	this.spine.setAnimation(0, "Loop", true);
            // });
            cc.tween(_this.content)
                .to(FADE_DURATION, { opacity: 255 })
                .call(function () {
                _this.countPoint(objTween, _this.jackpotWinPoint, COUNT_POINT_DURATION);
            })
                .start();
        }).start();
    };
    G1009JackpotActor.prototype.countPoint = function (objTween, point1, duration, delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        this.tweenCountPoint = cc.tween(objTween)
            .delay(delay)
            .to(duration, { value: point1 }, {
            progress: function (start, end, current, ratio) {
                _this.currentWinPoint = Math.round(current);
                _this.lblTotalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(_this.currentWinPoint);
                return start + (end - start) * ratio;
            }
        })
            .call(function () {
            _this.lblTotalWinPoint.string = aka_g1009_number_converter_1.default.Instance().NumberFormatWithoutCharacter(point1);
        })
            .delay(IDLE_DURATION)
            .call(function () {
            cc.tween(_this.content)
                .to(FADE_DURATION, { opacity: 0 }).call(function () {
                aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotCompleted", _this.jackpotWinPoint);
                //this.transitionNextState();
                _this.reset();
            })
                .start();
        });
        this.tweenCountPoint.start();
    };
    G1009JackpotActor.prototype.transitionNextState = function () {
        // if (G1009GameController.GetInstance().CheckBonusFeatureTrigger())
        // {
        // 	G1009EventManager.GetInstance().notify("FeatureTrigger");
        // 	return;
        // }
        // if (G1009GameController.GetInstance().CheckFreespinContinue())
        // {
        // 	G1009EventManager.GetInstance().notify("Spin");
        // 	return;
        // }
        // if (G1009GameController.GetInstance().CheckFreespinEnd())
        // {
        // 	G1009EventManager.GetInstance().notify("FeatureComplete");
        // 	return;
        // }
        // G1009EventManager.GetInstance().notify("EndRound");
    };
    G1009JackpotActor.prototype.reset = function () {
        this.spine.skeletonData = null;
        this.lblTotalWinPoint.string = "";
        this.content.active = false;
        this.content.opacity = 0;
    };
    G1009JackpotActor.prototype.speedUpAnimation = function () {
        this.tweenCountPoint && this.tweenCountPoint.stop();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("JackpotCompleted", this.jackpotWinPoint);
        this.transitionNextState();
        this.reset();
    };
    G1009JackpotActor.prototype.onSpinStarted = function () {
        this.isStopImmediately = false;
    };
    G1009JackpotActor.prototype.onStopImmediately = function () {
        this.isStopImmediately = true;
    };
    __decorate([
        property(cc.Node)
    ], G1009JackpotActor.prototype, "content", void 0);
    __decorate([
        property(sp.Skeleton)
    ], G1009JackpotActor.prototype, "spine", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], G1009JackpotActor.prototype, "skeletonData", void 0);
    __decorate([
        property(cc.Label)
    ], G1009JackpotActor.prototype, "lblTotalWinPoint", void 0);
    G1009JackpotActor = __decorate([
        ccclass
    ], G1009JackpotActor);
    return G1009JackpotActor;
}(cc.Component));
exports.default = G1009JackpotActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvamFja3BvdC9ha2EtZzEwMDktamFja3BvdC1hY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RkFBbUU7QUFFbkUscUZBQThFO0FBQ3hFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUMzQixJQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQztBQUMvQixJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFFeEI7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFvSUM7UUFqSUEsYUFBTyxHQUFZLElBQUksQ0FBQztRQUVoQixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFFN0Msc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBSTFCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLHVCQUFpQixHQUFZLEtBQUssQ0FBQzs7SUFxSDVDLENBQUM7SUFuSFUsa0NBQU0sR0FBaEI7UUFDQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLG9DQUFRLEdBQWhCO1FBQ0MsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3RiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9GLDJDQUFpQixD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LElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sNENBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BELDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVPLHlDQUFhLEdBQXJCO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRU8sNkNBQWlCLEdBQXpCO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBaElEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztvREFDWTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDOzJEQUNtQjtJQUU3QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNlO0lBVGQsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FvSXJDO0lBQUQsd0JBQUM7Q0FwSUQsQUFvSUMsQ0FwSThDLEVBQUUsQ0FBQyxTQUFTLEdBb0kxRDtrQkFwSW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHMTAwOVV0aWwgZnJvbSBcIi4uLy4uL2Jhc2UvVXRpbC9ha2EtZzEwMDktbnVtYmVyLWNvbnZlcnRlclwiO1xuaW1wb3J0IEcxMDA5R2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2Jhc2UvY29udHJvbGxlci9ha2EtZzEwMDktZ2FtZS1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgRkFERV9EVVJBVElPTiA9IDAuMjU7XG5jb25zdCBDT1VOVF9QT0lOVF9EVVJBVElPTiA9IDI7XG5jb25zdCBJRExFX0RVUkFUSU9OID0gMTtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOUphY2twb3RBY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblx0QHByb3BlcnR5KGNjLk5vZGUpXG5cdGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXHRAcHJvcGVydHkoc3AuU2tlbGV0b24pXG5cdHByaXZhdGUgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcblx0QHByb3BlcnR5KHNwLlNrZWxldG9uRGF0YSlcblx0cHJpdmF0ZSBza2VsZXRvbkRhdGE6IHNwLlNrZWxldG9uRGF0YSA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0bGJsVG90YWxXaW5Qb2ludDogY2MuTGFiZWwgPSBudWxsO1xuXG5cdHByaXZhdGUgdHdlZW5TaG93UG9wdXA6IGNjLlR3ZWVuO1xuXHRwcml2YXRlIHR3ZWVuQ291bnRQb2ludDogY2MuVHdlZW47XG5cdHByaXZhdGUgY3VycmVudFdpblBvaW50OiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIGphY2twb3RXaW5Qb2ludDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBpc1N0b3BJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHRcdHRoaXMucmVnaXN0ZXIoKTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXIoKTogdm9pZCB7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkphY2twb3RTdGFydGVkXCIsIHRoaXMub25KYWNrcG90U3RhcnRlZC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiV2luRGF0YVJlc3BvbmRcIiwgdGhpcy5vblNldEZpbmFsUmVTb3VyY2UuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlN0b3BJbW1lZGlhdGVseVwiLCB0aGlzLm9uU3RvcEltbWVkaWF0ZWx5LmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTcGluU3RhcnRlZFwiLCB0aGlzLm9uU3BpblN0YXJ0ZWQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRwcml2YXRlIG9uU2V0RmluYWxSZVNvdXJjZShmaW5hbFJlc3VsdDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5qYWNrcG90V2luUG9pbnQgPSBmaW5hbFJlc3VsdC5qYWNrcG90V2luUG9pbnQ7XG5cdH1cblxuXHRwcml2YXRlIG9uSmFja3BvdFN0YXJ0ZWQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNTdG9wSW1tZWRpYXRlbHkpXG5cdFx0e1xuXHRcdFx0dGhpcy5zcGVlZFVwQW5pbWF0aW9uKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiSmFja3BvdFByZXNlbnRhdGlvblN0YXJ0ZWRcIik7XG5cdFx0bGV0IG9ialR3ZWVuID0ge1xuXHRcdFx0dmFsdWU6IDBcblx0XHR9O1xuXHRcdHRoaXMudHdlZW5TaG93UG9wdXAgPSBjYy50d2Vlbih0aGlzLnNwaW5lLm5vZGUpXG5cdFx0XHQvLyAuZGVsYXkoNC42KVxuXHRcdFx0LnRvKEZBREVfRFVSQVRJT04sIHsgc2NhbGU6IDEgfSlcblx0XHRcdC5jYWxsKCgpID0+IHtcblx0XHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJKYWNrcG90U2hvd1wiKTtcblx0XHRcdFx0dGhpcy5jb250ZW50LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMuc3BpbmUuc2tlbGV0b25EYXRhID0gdGhpcy5za2VsZXRvbkRhdGE7XG5cdFx0XHRcdHRoaXMuc3BpbmUuc2V0U2tpbihcIm5vaHVcIik7XG5cdFx0XHRcdGxldCB0cmFjayA9IHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIHRydWUpO1xuXHRcdFx0XHQvLyB0aGlzLnNwaW5lLnNldFRyYWNrQ29tcGxldGVMaXN0ZW5lcih0cmFjaywgKCkgPT4ge1xuXHRcdFx0XHQvLyBcdHRoaXMuc3BpbmUuc2V0QW5pbWF0aW9uKDAsIFwiTG9vcFwiLCB0cnVlKTtcblx0XHRcdFx0Ly8gfSk7XG5cdFx0XHRcdGNjLnR3ZWVuKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQudG8oRkFERV9EVVJBVElPTiwgeyBvcGFjaXR5OiAyNTUgfSlcblx0XHRcdFx0XHQuY2FsbCgoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvdW50UG9pbnQob2JqVHdlZW4sIHRoaXMuamFja3BvdFdpblBvaW50LCBDT1VOVF9QT0lOVF9EVVJBVElPTik7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuc3RhcnQoKTtcblx0XHRcdH0pLnN0YXJ0KCk7XG5cblx0fVxuXG5cdHByaXZhdGUgY291bnRQb2ludChvYmpUd2VlbjogeyB2YWx1ZTogbnVtYmVyOyB9LCBwb2ludDE6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgZGVsYXk6IG51bWJlciA9IDApIHtcblx0XHR0aGlzLnR3ZWVuQ291bnRQb2ludCA9IGNjLnR3ZWVuKG9ialR3ZWVuKVxuXHRcdFx0LmRlbGF5KGRlbGF5KVxuXHRcdFx0LnRvKGR1cmF0aW9uLCB7IHZhbHVlOiBwb2ludDEgfSwge1xuXHRcdFx0XHRwcm9ncmVzczogKHN0YXJ0OiBhbnksIGVuZDogYW55LCBjdXJyZW50OiBhbnksIHJhdGlvOiBhbnkpID0+IHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRXaW5Qb2ludCA9IE1hdGgucm91bmQoY3VycmVudCk7XG5cdFx0XHRcdFx0dGhpcy5sYmxUb3RhbFdpblBvaW50LnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIodGhpcy5jdXJyZW50V2luUG9pbnQpO1xuXHRcdFx0XHRcdHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiByYXRpbztcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYWxsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5sYmxUb3RhbFdpblBvaW50LnN0cmluZyA9IEcxMDA5VXRpbC5JbnN0YW5jZSgpLk51bWJlckZvcm1hdFdpdGhvdXRDaGFyYWN0ZXIocG9pbnQxKTtcblx0XHRcdH0pXG5cdFx0XHQuZGVsYXkoSURMRV9EVVJBVElPTilcblx0XHRcdC5jYWxsKCgpID0+IHtcblx0XHRcdFx0Y2MudHdlZW4odGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC50byhGQURFX0RVUkFUSU9OLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkphY2twb3RDb21wbGV0ZWRcIiwgdGhpcy5qYWNrcG90V2luUG9pbnQpO1xuXHRcdFx0XHRcdFx0Ly90aGlzLnRyYW5zaXRpb25OZXh0U3RhdGUoKTtcblx0XHRcdFx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5zdGFydCgpO1xuXHRcdFx0fSk7XG5cdFx0dGhpcy50d2VlbkNvdW50UG9pbnQuc3RhcnQoKTtcblx0fVxuXG5cdHByaXZhdGUgdHJhbnNpdGlvbk5leHRTdGF0ZSgpOiB2b2lkIHtcblxuXHRcdC8vIGlmIChHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tCb251c0ZlYXR1cmVUcmlnZ2VyKCkpXG5cdFx0Ly8ge1xuXHRcdC8vIFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJGZWF0dXJlVHJpZ2dlclwiKTtcblx0XHQvLyBcdHJldHVybjtcblx0XHQvLyB9XG5cdFx0Ly8gaWYgKEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5DaGVja0ZyZWVzcGluQ29udGludWUoKSlcblx0XHQvLyB7XG5cdFx0Ly8gXHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIlNwaW5cIik7XG5cdFx0Ly8gXHRyZXR1cm47XG5cdFx0Ly8gfVxuXHRcdC8vIGlmIChHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuQ2hlY2tGcmVlc3BpbkVuZCgpKVxuXHRcdC8vIHtcblx0XHQvLyBcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiRmVhdHVyZUNvbXBsZXRlXCIpO1xuXHRcdC8vIFx0cmV0dXJuO1xuXHRcdC8vIH1cblx0XHQvLyBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLm5vdGlmeShcIkVuZFJvdW5kXCIpO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLnNwaW5lLnNrZWxldG9uRGF0YSA9IG51bGw7XG5cdFx0dGhpcy5sYmxUb3RhbFdpblBvaW50LnN0cmluZyA9IFwiXCI7XG5cdFx0dGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMuY29udGVudC5vcGFjaXR5ID0gMDtcblx0fVxuXG5cdHB1YmxpYyBzcGVlZFVwQW5pbWF0aW9uKCkge1xuXHRcdFx0dGhpcy50d2VlbkNvdW50UG9pbnQgJiYgdGhpcy50d2VlbkNvdW50UG9pbnQuc3RvcCgpO1xuXHRcdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJKYWNrcG90Q29tcGxldGVkXCIsIHRoaXMuamFja3BvdFdpblBvaW50KTtcblx0XHRcdHRoaXMudHJhbnNpdGlvbk5leHRTdGF0ZSgpO1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvblNwaW5TdGFydGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuaXNTdG9wSW1tZWRpYXRlbHkgPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgb25TdG9wSW1tZWRpYXRlbHkoKTogdm9pZCB7XG5cdFx0dGhpcy5pc1N0b3BJbW1lZGlhdGVseSA9IHRydWU7XG5cdH1cbn1cbiJdfQ==