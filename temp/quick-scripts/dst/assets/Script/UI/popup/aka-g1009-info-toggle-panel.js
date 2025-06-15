
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-info-toggle-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33a7cqK419CH5bYyF8NDp2U', 'aka-g1009-info-toggle-panel');
// Script/UI/popup/aka-g1009-info-toggle-panel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TOGGLE_SPACE = -60;
var G1009InfoTogglePanelActor = /** @class */ (function (_super) {
    __extends(G1009InfoTogglePanelActor, _super);
    function G1009InfoTogglePanelActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currenttoggleID = 0;
        _this.container = null;
        return _this;
    }
    G1009InfoTogglePanelActor.prototype.onLoad = function () {
        this.register();
        this.container = this.node.getComponent(cc.ToggleContainer);
    };
    G1009InfoTogglePanelActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ChangeInfoPage", this.onChangeInfoPage.bind(this));
    };
    G1009InfoTogglePanelActor.prototype.onChangeInfoPage = function (toggleId) {
        if (this.currenttoggleID != toggleId) {
            this.container.toggleItems[toggleId].isChecked = true;
            this.currenttoggleID = toggleId;
            // cc.tween(this.node).to(0.3, { position: new cc.Vec3(TOGGLE_SPACE * this.currenttoggleID, this.node.position.y, this.node.position.z) }).start();
        }
    };
    G1009InfoTogglePanelActor = __decorate([
        ccclass
    ], G1009InfoTogglePanelActor);
    return G1009InfoTogglePanelActor;
}(cc.Component));
exports.default = G1009InfoTogglePanelActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LWluZm8tdG9nZ2xlLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUE4RTtBQUN4RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUV6QjtJQUF1RCw2Q0FBWTtJQUFuRTtRQUFBLHFFQXVCQztRQXJCRyxxQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM1QixlQUFTLEdBQXVCLElBQUksQ0FBQzs7SUFvQnpDLENBQUM7SUFuQmEsMENBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7SUFHaEUsQ0FBQztJQUNPLDRDQUFRLEdBQWhCO1FBQ0ksMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqRyxDQUFDO0lBRU8sb0RBQWdCLEdBQXhCLFVBQXlCLFFBQWdCO1FBQ3JDLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxRQUFRLEVBQ3BDO1lBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0RCxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztZQUNqQyxtSkFBbUo7U0FDcko7SUFDTCxDQUFDO0lBdEJnQix5QkFBeUI7UUFEN0MsT0FBTztPQUNhLHlCQUF5QixDQXVCN0M7SUFBRCxnQ0FBQztDQXZCRCxBQXVCQyxDQXZCc0QsRUFBRSxDQUFDLFNBQVMsR0F1QmxFO2tCQXZCb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgVE9HR0xFX1NQQUNFID0gLTYwO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5SW5mb1RvZ2dsZVBhbmVsQWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgY3VycmVudHRvZ2dsZUlEOiBudW1iZXIgPSAwO1xuICAgIGNvbnRhaW5lcjogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Ub2dnbGVDb250YWluZXIpO1xuICAgICAgIFxuICAgICAgIFxuICAgIH1cbiAgICBwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiQ2hhbmdlSW5mb1BhZ2VcIiwgdGhpcy5vbkNoYW5nZUluZm9QYWdlLmJpbmQodGhpcykpO1xuICAgIFxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIG9uQ2hhbmdlSW5mb1BhZ2UodG9nZ2xlSWQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50dG9nZ2xlSUQgIT0gdG9nZ2xlSWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnRvZ2dsZUl0ZW1zW3RvZ2dsZUlkXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50dG9nZ2xlSUQgPSB0b2dnbGVJZDtcbiAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjMsIHsgcG9zaXRpb246IG5ldyBjYy5WZWMzKFRPR0dMRV9TUEFDRSAqIHRoaXMuY3VycmVudHRvZ2dsZUlELCB0aGlzLm5vZGUucG9zaXRpb24ueSwgdGhpcy5ub2RlLnBvc2l0aW9uLnopIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=