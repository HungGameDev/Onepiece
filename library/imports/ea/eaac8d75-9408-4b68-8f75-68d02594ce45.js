"use strict";
cc._RF.push(module, 'eaac811lAhLaI91aNAllM5F', 'Slot45-bonus-trigger-actor');
// Script/UI/bonus-game/Slot45-bonus-trigger-actor.ts

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
var Slot45_game_controller_1 = require("../../base/controller/Slot45-game-controller");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var Slot45_feature_trigger_actor_1 = require("../feature/Slot45-feature-trigger-actor");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45BonusTrigger = /** @class */ (function (_super) {
    __extends(Slot45BonusTrigger, _super);
    function Slot45BonusTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrNodeSymbol = [];
        return _this;
    }
    Slot45BonusTrigger.prototype.checkRuleTrigger = function () {
        return Slot45_game_controller_1.default.GetInstance().CheckBonusPointTrigger();
    };
    Slot45BonusTrigger.prototype.notifyEnterFeature = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("EnterBonus", Slot45_game_controller_1.default.GetInstance().GetWinBonus());
    };
    Slot45BonusTrigger.prototype.showContent = function () {
        var _this = this;
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_bonustransition", isLoop: false });
        this.content.active = true;
        cc.tween(this.content)
            .to(0.5, { opacity: 255 })
            .call(function () {
            for (var index = 0; index < _this.arrNodeSymbol.length; index++) {
                var count = index;
                var node = _this.arrNodeSymbol[count];
                var delayTime = 0.1 * count;
                cc.tween(node)
                    .delay(delayTime)
                    .to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 })
                    .to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 })
                    .to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 })
                    .start();
            }
        }).start();
        cc.tween(this.node).delay(2).call(function () {
            _this.notifyEnterFeature();
        }).delay(2).call(function () {
            Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("BonusWinComplete");
            _this.reset();
        })
            .start();
    };
    Slot45BonusTrigger.prototype.reset = function () {
        this.content.opacity = 0;
        this.content.active = false;
    };
    __decorate([
        property(cc.Node)
    ], Slot45BonusTrigger.prototype, "arrNodeSymbol", void 0);
    Slot45BonusTrigger = __decorate([
        ccclass
    ], Slot45BonusTrigger);
    return Slot45BonusTrigger;
}(Slot45_feature_trigger_actor_1.default));
exports.default = Slot45BonusTrigger;

cc._RF.pop();