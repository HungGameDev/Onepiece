
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/bonus-game/aka-g1009-bonus-trigger-actor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaac811lAhLaI91aNAllM5F', 'aka-g1009-bonus-trigger-actor');
// Script/UI/bonus-game/aka-g1009-bonus-trigger-actor.ts

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
var aka_g1009_game_controller_1 = require("../../base/controller/aka-g1009-game-controller");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_feature_trigger_actor_1 = require("../feature/aka-g1009-feature-trigger-actor");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009BonusTrigger = /** @class */ (function (_super) {
    __extends(G1009BonusTrigger, _super);
    function G1009BonusTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineTransition = null;
        return _this;
    }
    G1009BonusTrigger.prototype.checkRuleTrigger = function () {
        return aka_g1009_game_controller_1.default.GetInstance().CheckBonusPointTrigger();
    };
    G1009BonusTrigger.prototype.notifyEnterFeature = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("EnterBonus", aka_g1009_game_controller_1.default.GetInstance().GetWinBonus());
    };
    G1009BonusTrigger.prototype.showContent = function () {
        var _this = this;
        this.notifyEnterFeature();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_bonustransition", isLoop: false });
        this.spineTransition.node.active = true;
        this.spineTransition.setAnimation(0, "animation", false);
        cc.tween(this.node).delay(2).call(function () {
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("BonusWinComplete");
            _this.reset();
        }).start();
    };
    G1009BonusTrigger.prototype.reset = function () {
        this.spineTransition.node.active = false;
    };
    __decorate([
        property(sp.Skeleton)
    ], G1009BonusTrigger.prototype, "spineTransition", void 0);
    G1009BonusTrigger = __decorate([
        ccclass
    ], G1009BonusTrigger);
    return G1009BonusTrigger;
}(aka_g1009_feature_trigger_actor_1.default));
exports.default = G1009BonusTrigger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvYm9udXMtZ2FtZS9ha2EtZzEwMDktYm9udXMtdHJpZ2dlci1hY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RkFBa0Y7QUFDbEYscUZBQThFO0FBQzlFLDhGQUE2RTtBQUd2RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQyxxQ0FBbUI7SUFBbEU7UUFBQSxxRUEyQkM7UUF4QkEscUJBQWUsR0FBZ0IsSUFBSSxDQUFDOztJQXdCckMsQ0FBQztJQXRCYSw0Q0FBZ0IsR0FBMUI7UUFDRixPQUFPLG1DQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVTLDhDQUFrQixHQUE1QjtRQUNDLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRVMsdUNBQVcsR0FBckI7UUFBQSxpQkFTQztRQVJBLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakMsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDM0QsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRVMsaUNBQUssR0FBZjtRQUNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQXZCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzhEQUNjO0lBSGhCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBMkJyQztJQUFELHdCQUFDO0NBM0JELEFBMkJDLENBM0I4Qyx5Q0FBbUIsR0EyQmpFO2tCQTNCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEcxMDA5R2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2Jhc2UvY29udHJvbGxlci9ha2EtZzEwMDktZ2FtZS1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IEcxMDA5RmVhdHVyZVRyaWdnZXIgZnJvbSBcIi4uL2ZlYXR1cmUvYWthLWcxMDA5LWZlYXR1cmUtdHJpZ2dlci1hY3RvclwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlCb251c1RyaWdnZXIgZXh0ZW5kcyBHMTAwOUZlYXR1cmVUcmlnZ2VyIHtcblxuXHRAcHJvcGVydHkoc3AuU2tlbGV0b24pXG5cdHNwaW5lVHJhbnNpdGlvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIGNoZWNrUnVsZVRyaWdnZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIEcxMDA5R2FtZUNvbnRyb2xsZXIuR2V0SW5zdGFuY2UoKS5DaGVja0JvbnVzUG9pbnRUcmlnZ2VyKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgbm90aWZ5RW50ZXJGZWF0dXJlKCkge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiRW50ZXJCb251c1wiLCBHMTAwOUdhbWVDb250cm9sbGVyLkdldEluc3RhbmNlKCkuR2V0V2luQm9udXMoKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgc2hvd0NvbnRlbnQoKTogdm9pZCB7XG5cdFx0dGhpcy5ub3RpZnlFbnRlckZlYXR1cmUoKTtcdFxuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KCdQbGF5U0ZYJywgeyBzZnhOYW1lOiBcInNmeF9ib251c3RyYW5zaXRpb25cIiwgaXNMb29wOiBmYWxzZSB9KTtcblx0XHR0aGlzLnNwaW5lVHJhbnNpdGlvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5zcGluZVRyYW5zaXRpb24uc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcdFx0XG5cdFx0Y2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSgyKS5jYWxsKCgpID0+IHtcblx0XHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQm9udXNXaW5Db21wbGV0ZVwiKTtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHR9KS5zdGFydCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHJlc2V0KCk6IHZvaWQge1xuXHRcdHRoaXMuc3BpbmVUcmFuc2l0aW9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdH1cbn1cbiJdfQ==