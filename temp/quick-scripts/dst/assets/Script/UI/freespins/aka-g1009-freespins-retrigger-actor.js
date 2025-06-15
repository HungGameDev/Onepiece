
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/freespins/aka-g1009-freespins-retrigger-actor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55b456iyZlMq4qfy+IJWKIt', 'aka-g1009-freespins-retrigger-actor');
// Script/UI/freespins/aka-g1009-freespins-retrigger-actor.ts

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
var G1009FreespinsRetrigger = /** @class */ (function (_super) {
    __extends(G1009FreespinsRetrigger, _super);
    function G1009FreespinsRetrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spine = null;
        return _this;
    }
    G1009FreespinsRetrigger.prototype.checkRuleTrigger = function () {
        return aka_g1009_game_controller_1.default.GetInstance().CheckFreespinRetrigger();
    };
    G1009FreespinsRetrigger.prototype.notifyEnterFeature = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("EnterFreespins");
    };
    G1009FreespinsRetrigger.prototype.showContent = function () {
        var _this = this;
        this.spine.node.active = true;
        this.spine.setAnimation(0, "Transition", false);
        cc.tween(this.node).delay(5).call(function () {
            _this.notifyEnterFeature();
        }).delay(3).call(function () {
            _this.reset();
        }).start();
    };
    G1009FreespinsRetrigger.prototype.reset = function () {
        this.spine.node.active = false;
    };
    __decorate([
        property(sp.Skeleton)
    ], G1009FreespinsRetrigger.prototype, "spine", void 0);
    G1009FreespinsRetrigger = __decorate([
        ccclass
    ], G1009FreespinsRetrigger);
    return G1009FreespinsRetrigger;
}(aka_g1009_feature_trigger_actor_1.default));
exports.default = G1009FreespinsRetrigger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvZnJlZXNwaW5zL2FrYS1nMTAwOS1mcmVlc3BpbnMtcmV0cmlnZ2VyLWFjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUFrRjtBQUNsRixxRkFBOEU7QUFDOUUsOEZBQTZFO0FBQ3ZFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFELDJDQUFtQjtJQUF4RTtRQUFBLHFFQXdCQztRQXRCQSxXQUFLLEdBQWdCLElBQUksQ0FBQzs7SUFzQjNCLENBQUM7SUFyQlUsa0RBQWdCLEdBQTFCO1FBQ0MsT0FBTyxtQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFUyxvREFBa0IsR0FBNUI7UUFDQywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRVMsNkNBQVcsR0FBckI7UUFBQSxpQkFRQztRQVBBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRVMsdUNBQUssR0FBZjtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzBEQUNJO0lBRk4sdUJBQXVCO1FBRDNDLE9BQU87T0FDYSx1QkFBdUIsQ0F3QjNDO0lBQUQsOEJBQUM7Q0F4QkQsQUF3QkMsQ0F4Qm9ELHlDQUFtQixHQXdCdkU7a0JBeEJvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRzEwMDlHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vYmFzZS9jb250cm9sbGVyL2FrYS1nMTAwOS1nYW1lLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgRzEwMDlGZWF0dXJlVHJpZ2dlciBmcm9tIFwiLi4vZmVhdHVyZS9ha2EtZzEwMDktZmVhdHVyZS10cmlnZ2VyLWFjdG9yXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlGcmVlc3BpbnNSZXRyaWdnZXIgZXh0ZW5kcyBHMTAwOUZlYXR1cmVUcmlnZ2VyIHtcblx0QHByb3BlcnR5KHNwLlNrZWxldG9uKVxuXHRzcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xuXHRwcm90ZWN0ZWQgY2hlY2tSdWxlVHJpZ2dlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrRnJlZXNwaW5SZXRyaWdnZXIoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBub3RpZnlFbnRlckZlYXR1cmUoKSB7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJFbnRlckZyZWVzcGluc1wiKTtcblx0fVxuXG5cdHByb3RlY3RlZCBzaG93Q29udGVudCgpOiB2b2lkIHtcblx0XHR0aGlzLnNwaW5lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBcIlRyYW5zaXRpb25cIiwgZmFsc2UpO1x0XHRcblx0XHRjYy50d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDUpLmNhbGwoKCkgPT4ge1xuXHRcdFx0dGhpcy5ub3RpZnlFbnRlckZlYXR1cmUoKTtcdFxuXHRcdH0pLmRlbGF5KDMpLmNhbGwoKCkgPT4ge1x0XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fSkuc3RhcnQoKTtcblx0fVxuXG5cdHByb3RlY3RlZCByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLnNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cdH1cbn0iXX0=