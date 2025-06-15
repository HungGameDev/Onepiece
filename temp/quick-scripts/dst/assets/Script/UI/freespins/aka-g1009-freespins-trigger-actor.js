
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/freespins/aka-g1009-freespins-trigger-actor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7a66h2lbZAm7ljFUM1B/Yn', 'aka-g1009-freespins-trigger-actor');
// Script/UI/freespins/aka-g1009-freespins-trigger-actor.ts

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
var G1009FreespinsTrigger = /** @class */ (function (_super) {
    __extends(G1009FreespinsTrigger, _super);
    function G1009FreespinsTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spine = null;
        _this.bannerCountFreespin = null;
        return _this;
    }
    G1009FreespinsTrigger.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("featuretriggerstarted", this.onFeatureTrigger.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("resume", this.showContent.bind(this));
    };
    G1009FreespinsTrigger.prototype.checkRuleTrigger = function () {
        return aka_g1009_game_controller_1.default.GetInstance().CheckFreespinTrigger();
    };
    G1009FreespinsTrigger.prototype.notifyEnterFeature = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("EnterFreespins");
    };
    G1009FreespinsTrigger.prototype.showContent = function () {
        var _this = this;
        if (this.spine == null)
            return;
        this.bannerCountFreespin.active = true;
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: "sfx_freewin", isLoop: false });
        this.spine.node.active = true;
        this.spine.setAnimation(0, "animation", false);
        cc.tween(this.bannerCountFreespin).delay(4).to(0.2, { scale: 0.9 }).to(0.2, { scale: 1 }).start();
        cc.tween(this.node).delay(5).call(function () {
            _this.notifyEnterFeature();
        }).delay(1).call(function () {
            _this.reset();
        }).start();
    };
    G1009FreespinsTrigger.prototype.reset = function () {
        this.spine.node.active = false;
    };
    __decorate([
        property(sp.Skeleton)
    ], G1009FreespinsTrigger.prototype, "spine", void 0);
    __decorate([
        property(cc.Node)
    ], G1009FreespinsTrigger.prototype, "bannerCountFreespin", void 0);
    G1009FreespinsTrigger = __decorate([
        ccclass
    ], G1009FreespinsTrigger);
    return G1009FreespinsTrigger;
}(aka_g1009_feature_trigger_actor_1.default));
exports.default = G1009FreespinsTrigger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvZnJlZXNwaW5zL2FrYS1nMTAwOS1mcmVlc3BpbnMtdHJpZ2dlci1hY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RkFBa0Y7QUFDbEYscUZBQThFO0FBQzlFLDhGQUE2RTtBQUN2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBbUI7SUFBdEU7UUFBQSxxRUFzQ0M7UUFuQ0EsV0FBSyxHQUFnQixJQUFJLENBQUM7UUFHMUIseUJBQW1CLEdBQVksSUFBSSxDQUFDOztJQWdDckMsQ0FBQztJQTlCVSxxQ0FBSyxHQUFmO1FBQ0MsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVTLGdEQUFnQixHQUExQjtRQUNDLE9BQU8sbUNBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRVMsa0RBQWtCLEdBQTVCO1FBQ0MsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNTLDJDQUFXLEdBQXJCO1FBQUEsaUJBYUM7UUFaQSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtZQUNyQixPQUFPO1FBQ1IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdkMsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqQyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVTLHFDQUFLLEdBQWY7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFsQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3REFDSTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NFQUNrQjtJQU5oQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQXNDekM7SUFBRCw0QkFBQztDQXRDRCxBQXNDQyxDQXRDa0QseUNBQW1CLEdBc0NyRTtrQkF0Q29CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHMTAwOUdhbWVDb250cm9sbGVyIGZyb20gXCIuLi8uLi9iYXNlL2NvbnRyb2xsZXIvYWthLWcxMDA5LWdhbWUtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCBHMTAwOUZlYXR1cmVUcmlnZ2VyIGZyb20gXCIuLi9mZWF0dXJlL2FrYS1nMTAwOS1mZWF0dXJlLXRyaWdnZXItYWN0b3JcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOUZyZWVzcGluc1RyaWdnZXIgZXh0ZW5kcyBHMTAwOUZlYXR1cmVUcmlnZ2VyIHtcblxuXHRAcHJvcGVydHkoc3AuU2tlbGV0b24pXG5cdHNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG5cblx0QHByb3BlcnR5KGNjLk5vZGUpXG5cdGJhbm5lckNvdW50RnJlZXNwaW46IGNjLk5vZGUgPSBudWxsO1xuXG5cdHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZmVhdHVyZXRyaWdnZXJzdGFydGVkXCIsIHRoaXMub25GZWF0dXJlVHJpZ2dlci5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwicmVzdW1lXCIsIHRoaXMuc2hvd0NvbnRlbnQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY2hlY2tSdWxlVHJpZ2dlcigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gRzEwMDlHYW1lQ29udHJvbGxlci5HZXRJbnN0YW5jZSgpLkNoZWNrRnJlZXNwaW5UcmlnZ2VyKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgbm90aWZ5RW50ZXJGZWF0dXJlKCkge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiRW50ZXJGcmVlc3BpbnNcIik7XG5cdH1cblx0cHJvdGVjdGVkIHNob3dDb250ZW50KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNwaW5lID09IG51bGwpXG5cdFx0XHRyZXR1cm47XG5cdFx0dGhpcy5iYW5uZXJDb3VudEZyZWVzcGluLmFjdGl2ZSA9IHRydWU7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoJ1BsYXlTRlgnLCB7IHNmeE5hbWU6IFwic2Z4X2ZyZWV3aW5cIiwgaXNMb29wOiBmYWxzZSB9KTtcblx0XHR0aGlzLnNwaW5lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCBmYWxzZSk7XG5cdFx0Y2MudHdlZW4odGhpcy5iYW5uZXJDb3VudEZyZWVzcGluKS5kZWxheSg0KS50bygwLjIsIHsgc2NhbGU6IDAuOSB9KS50bygwLjIsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKTtcblx0XHRjYy50d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDUpLmNhbGwoKCkgPT4ge1xuXHRcdFx0dGhpcy5ub3RpZnlFbnRlckZlYXR1cmUoKTtcblx0XHR9KS5kZWxheSgxKS5jYWxsKCgpID0+IHtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHR9KS5zdGFydCgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHJlc2V0KCk6IHZvaWQge1xuXHRcdHRoaXMuc3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0fVxufSJdfQ==