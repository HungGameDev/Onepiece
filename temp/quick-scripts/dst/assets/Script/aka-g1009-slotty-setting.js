
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/aka-g1009-slotty-setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '523968PExxFx6lA5JFPNAsk', 'aka-g1009-slotty-setting');
// Script/aka-g1009-slotty-setting.ts

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
var aka_g1009_event_manager_1 = require("./base/events/aka-g1009-event-manager");
var aka_g1009_init_state_1 = require("./base/state-machine/state/aka-g1009-init-state");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SlottySetting = /** @class */ (function (_super) {
    __extends(G1009SlottySetting, _super);
    function G1009SlottySetting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new aka_g1009_init_state_1.G1009InitState();
        return _this;
    }
    G1009SlottySetting.prototype.start = function () {
        this.showCurrentState();
        this.register();
    };
    G1009SlottySetting.prototype.showCurrentState = function () {
        console.log(this.state);
    };
    G1009SlottySetting.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Init", this.onInit.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Bet", this.onBet.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ActiveAuto", this.onSpin.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("spin", this.onSpin.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinComplete", this.onSpinComplete.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("FeatureTrigger", this.onFeatureTrigger.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("FeatureComplete", this.onFeatureComplete.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EnterBonus", this.onEnterBonus.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resumeBonus", this.onEnterBonus.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featureWinCompleted", this.onFeatureWinCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ExpandWildCompleted", this.onExpandWildCompleted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("EndRound", this.onEndRound.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("JackpotTriggered", this.onJackpotTriggered.bind(this));
    };
    G1009SlottySetting.prototype.onInit = function () {
        this.state = this.state.Init();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onBet = function () {
        this.state = this.state.Spin();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onSpin = function () {
        this.state = this.state.Spin();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onSpinComplete = function () {
        this.state = this.state.SpinComplete();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onFeatureTrigger = function () {
        this.state = this.state.FeatureTrigger();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onEnterFreespins = function () {
        this.state = this.state.EnterFreespins();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onEnterBonus = function () {
        this.state = this.state.EnterBonus();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onFeatureComplete = function () {
        this.state = this.state.FeatureComplete();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onFeatureWinCompleted = function () {
        this.state = this.state.FeatureWinCompleted();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onExpandWildCompleted = function () {
        this.state = this.state.ExpandWildCompleted();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onEndRound = function () {
        this.state = this.state.EndRound();
        this.showCurrentState();
    };
    G1009SlottySetting.prototype.onJackpotTriggered = function () {
        this.state = this.state.JackpotTriggered();
        this.showCurrentState();
    };
    G1009SlottySetting = __decorate([
        ccclass
    ], G1009SlottySetting);
    return G1009SlottySetting;
}(cc.Component));
exports.default = G1009SlottySetting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYWthLWcxMDA5LXNsb3R0eS1zZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlGQUEwRTtBQUUxRSx3RkFBaUY7QUFFM0UsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUF5RkM7UUF4RlEsV0FBSyxHQUFVLElBQUkscUNBQWMsRUFBRSxDQUFDOztJQXdGN0MsQ0FBQztJQXRGVSxrQ0FBSyxHQUFmO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyw2Q0FBZ0IsR0FBeEI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU8scUNBQVEsR0FBaEI7UUFDQywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekUsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRSwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFD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MTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuL2Jhc2UvZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL2Jhc2Uvc3RhdGUtbWFjaGluZS9hYnN0cmFjdC9ha2EtZzEwMDktc3RhdGVcIjtcbmltcG9ydCB7IEcxMDA5SW5pdFN0YXRlIH0gZnJvbSBcIi4vYmFzZS9zdGF0ZS1tYWNoaW5lL3N0YXRlL2FrYS1nMTAwOS1pbml0LXN0YXRlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVNsb3R0eVNldHRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRwcml2YXRlIHN0YXRlOiBTdGF0ZSA9IG5ldyBHMTAwOUluaXRTdGF0ZSgpO1xuXG5cdHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcblx0XHR0aGlzLnNob3dDdXJyZW50U3RhdGUoKTtcblx0XHR0aGlzLnJlZ2lzdGVyKCk7XG5cdH1cblxuXHRwcml2YXRlIHNob3dDdXJyZW50U3RhdGUoKTogdm9pZCB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJJbml0XCIsIHRoaXMub25Jbml0LmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJCZXRcIiwgdGhpcy5vbkJldC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiQWN0aXZlQXV0b1wiLCB0aGlzLm9uU3Bpbi5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwic3BpblwiLCB0aGlzLm9uU3Bpbi5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU3BpbkNvbXBsZXRlXCIsIHRoaXMub25TcGluQ29tcGxldGUuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkZlYXR1cmVUcmlnZ2VyXCIsIHRoaXMub25GZWF0dXJlVHJpZ2dlci5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiRmVhdHVyZUNvbXBsZXRlXCIsIHRoaXMub25GZWF0dXJlQ29tcGxldGUuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkVudGVyRnJlZXNwaW5zXCIsIHRoaXMub25FbnRlckZyZWVzcGlucy5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiRW50ZXJCb251c1wiLCB0aGlzLm9uRW50ZXJCb251cy5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwicmVzdW1lQm9udXNcIiwgdGhpcy5vbkVudGVyQm9udXMuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcImZlYXR1cmVXaW5Db21wbGV0ZWRcIiwgdGhpcy5vbkZlYXR1cmVXaW5Db21wbGV0ZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkV4cGFuZFdpbGRDb21wbGV0ZWRcIiwgdGhpcy5vbkV4cGFuZFdpbGRDb21wbGV0ZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkVuZFJvdW5kXCIsIHRoaXMub25FbmRSb3VuZC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiSmFja3BvdFRyaWdnZXJlZFwiLCB0aGlzLm9uSmFja3BvdFRyaWdnZXJlZC5iaW5kKHRoaXMpKTtcblx0XHRcblx0fVxuXG5cdHByaXZhdGUgb25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlLkluaXQoKTtcblx0XHR0aGlzLnNob3dDdXJyZW50U3RhdGUoKTtcblx0fVxuXG5cdHByaXZhdGUgb25CZXQoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUuU3BpbigpO1xuXHRcdHRoaXMuc2hvd0N1cnJlbnRTdGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvblNwaW4oKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUuU3BpbigpO1xuXHRcdHRoaXMuc2hvd0N1cnJlbnRTdGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvblNwaW5Db21wbGV0ZSgpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZS5TcGluQ29tcGxldGUoKTtcblx0XHR0aGlzLnNob3dDdXJyZW50U3RhdGUoKTtcblx0fVxuXG5cdHByaXZhdGUgb25GZWF0dXJlVHJpZ2dlcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZS5GZWF0dXJlVHJpZ2dlcigpO1xuXHRcdHRoaXMuc2hvd0N1cnJlbnRTdGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkVudGVyRnJlZXNwaW5zKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlLkVudGVyRnJlZXNwaW5zKCk7XG5cdFx0dGhpcy5zaG93Q3VycmVudFN0YXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIG9uRW50ZXJCb251cygpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZS5FbnRlckJvbnVzKCk7XG5cdFx0dGhpcy5zaG93Q3VycmVudFN0YXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIG9uRmVhdHVyZUNvbXBsZXRlKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlLkZlYXR1cmVDb21wbGV0ZSgpO1xuXHRcdHRoaXMuc2hvd0N1cnJlbnRTdGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkZlYXR1cmVXaW5Db21wbGV0ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUuRmVhdHVyZVdpbkNvbXBsZXRlZCgpO1xuXHRcdHRoaXMuc2hvd0N1cnJlbnRTdGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkV4cGFuZFdpbGRDb21wbGV0ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUuRXhwYW5kV2lsZENvbXBsZXRlZCgpO1xuXHRcdHRoaXMuc2hvd0N1cnJlbnRTdGF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkVuZFJvdW5kKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlLkVuZFJvdW5kKCk7XG5cdFx0dGhpcy5zaG93Q3VycmVudFN0YXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIG9uSmFja3BvdFRyaWdnZXJlZCgpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZS5KYWNrcG90VHJpZ2dlcmVkKCk7XG5cdFx0dGhpcy5zaG93Q3VycmVudFN0YXRlKCk7XG5cdH1cbn0iXX0=