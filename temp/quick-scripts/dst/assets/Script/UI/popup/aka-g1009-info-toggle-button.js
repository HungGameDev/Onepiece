
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-info-toggle-button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35c5791V+FJsokv2N+nQ7KT', 'aka-g1009-info-toggle-button');
// Script/UI/popup/aka-g1009-info-toggle-button.ts

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
var G1009InfoToggleButtonActor = /** @class */ (function (_super) {
    __extends(G1009InfoToggleButtonActor, _super);
    function G1009InfoToggleButtonActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleId = -1;
        _this.toggle = null;
        return _this;
    }
    G1009InfoToggleButtonActor.prototype.onLoad = function () {
        this.toggle = this.node.getComponent(cc.Toggle);
    };
    G1009InfoToggleButtonActor.prototype.OnToggleClicked = function (action) {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ChangeInfoPage", this.toggleId);
    };
    __decorate([
        property
    ], G1009InfoToggleButtonActor.prototype, "toggleId", void 0);
    G1009InfoToggleButtonActor = __decorate([
        ccclass
    ], G1009InfoToggleButtonActor);
    return G1009InfoToggleButtonActor;
}(cc.Component));
exports.default = G1009InfoToggleButtonActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LWluZm8tdG9nZ2xlLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBOEU7QUFFeEUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0QsOENBQVk7SUFBcEU7UUFBQSxxRUFZQztRQVRhLGNBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN0QixZQUFNLEdBQWMsSUFBSSxDQUFDOztJQVF2QyxDQUFDO0lBUGEsMkNBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sb0RBQWUsR0FBdEIsVUFBdUIsTUFBaUI7UUFDaEMsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBUkQ7UUFEQyxRQUFRO2dFQUN1QjtJQUhmLDBCQUEwQjtRQUQ5QyxPQUFPO09BQ2EsMEJBQTBCLENBWTlDO0lBQUQsaUNBQUM7Q0FaRCxBQVlDLENBWnVELEVBQUUsQ0FBQyxTQUFTLEdBWW5FO2tCQVpvQiwwQkFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5SW5mb1RvZ2dsZUJ1dHRvbkFjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHByb3RlY3RlZCB0b2dnbGVJZDogbnVtYmVyID0gLTE7XG4gICAgcHJvdGVjdGVkIHRvZ2dsZTogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTsgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBPblRvZ2dsZUNsaWNrZWQoYWN0aW9uOiBjYy5Ub2dnbGUpOiB2b2lkIHtcbiAgICAgICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQ2hhbmdlSW5mb1BhZ2VcIiwgdGhpcy50b2dnbGVJZCk7XG4gICAgfVxufVxuIl19