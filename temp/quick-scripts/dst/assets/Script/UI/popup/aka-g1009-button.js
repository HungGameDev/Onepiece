
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '723d7dKBwZPDoTW5zFznE9a', 'aka-g1009-button');
// Script/UI/popup/aka-g1009-button.ts

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
var G1009ButtonActor = /** @class */ (function (_super) {
    __extends(G1009ButtonActor, _super);
    function G1009ButtonActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EventName = "Event-name";
        _this.button = null;
        return _this;
    }
    G1009ButtonActor.prototype.onLoad = function () {
        this.button = this.node.getComponent(cc.Button);
        this.node.on("click", this.onButtonClick.bind(this));
    };
    G1009ButtonActor.prototype.onButtonClick = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify(this.EventName);
    };
    G1009ButtonActor.prototype.Interactable = function (isInteractable) {
        if (!!this.button)
            this.button = this.node.getComponent(cc.Button);
        this.button.interactable = isInteractable;
    };
    G1009ButtonActor.prototype.Disable = function () {
        var _this = this;
        this.killAllTween();
        this.disableTween = cc.tween(this.node)
            .to(0.2, { opacity: 0 })
            .call(function () { _this.node.active = false; })
            .start();
    };
    G1009ButtonActor.prototype.Enable = function () {
        this.killAllTween();
        this.node.active = true;
        this.enableTween = cc.tween(this.node)
            .to(0.2, { opacity: 255 }).start();
    };
    G1009ButtonActor.prototype.killAllTween = function () {
        var _a, _b;
        (_a = this.enableTween) === null || _a === void 0 ? void 0 : _a.stop();
        (_b = this.disableTween) === null || _b === void 0 ? void 0 : _b.stop();
        this.enableTween = cc.tween({});
        this.disableTween = cc.tween({});
    };
    __decorate([
        property
    ], G1009ButtonActor.prototype, "EventName", void 0);
    __decorate([
        property(cc.Button)
    ], G1009ButtonActor.prototype, "button", void 0);
    G1009ButtonActor = __decorate([
        ccclass
    ], G1009ButtonActor);
    return G1009ButtonActor;
}(cc.Component));
exports.default = G1009ButtonActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBOEU7QUFFeEUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUErQ0M7UUE1Q0EsZUFBUyxHQUFXLFlBQVksQ0FBQztRQUdqQyxZQUFNLEdBQWMsSUFBSSxDQUFDOztJQXlDMUIsQ0FBQztJQXBDVSxpQ0FBTSxHQUFoQjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFUyx3Q0FBYSxHQUF2QjtRQUNDLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLHVDQUFZLEdBQW5CLFVBQW9CLGNBQXVCO1FBQzFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sa0NBQU8sR0FBZDtRQUFBLGlCQU1DO1FBTEEsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3JDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDdkIsSUFBSSxDQUFDLGNBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pDLEtBQUssRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVNLGlDQUFNLEdBQWI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3BDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU8sdUNBQVksR0FBcEI7O1FBQ0MsTUFBQSxJQUFJLENBQUMsV0FBVywwQ0FBRSxJQUFJLEdBQUc7UUFDekIsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxJQUFJLEdBQUc7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBM0NEO1FBREMsUUFBUTt1REFDd0I7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDSztJQU5MLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBK0NwQztJQUFELHVCQUFDO0NBL0NELEFBK0NDLENBL0M2QyxFQUFFLENBQUMsU0FBUyxHQStDekQ7a0JBL0NvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlCdXR0b25BY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblx0QHByb3BlcnR5XG5cdEV2ZW50TmFtZTogc3RyaW5nID0gXCJFdmVudC1uYW1lXCI7XG5cblx0QHByb3BlcnR5KGNjLkJ1dHRvbilcblx0YnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG5cdGVuYWJsZVR3ZWVuOiBjYy5Ud2Vlbjtcblx0ZGlzYWJsZVR3ZWVuOiBjYy5Ud2VlbjtcblxuXHRwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuXHRcdHRoaXMuYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXHRcdHRoaXMubm9kZS5vbihcImNsaWNrXCIsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkJ1dHRvbkNsaWNrKCk6IHZvaWQge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KHRoaXMuRXZlbnROYW1lKTtcblx0fVxuXG5cdHB1YmxpYyBJbnRlcmFjdGFibGUoaXNJbnRlcmFjdGFibGU6IGJvb2xlYW4pIHtcblx0XHRpZiAoISF0aGlzLmJ1dHRvbilcblx0XHRcdHRoaXMuYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuXHRcdHRoaXMuYnV0dG9uLmludGVyYWN0YWJsZSA9IGlzSW50ZXJhY3RhYmxlO1xuXHR9XG5cblx0cHVibGljIERpc2FibGUoKTogdm9pZCB7XG5cdFx0dGhpcy5raWxsQWxsVHdlZW4oKTtcblx0XHR0aGlzLmRpc2FibGVUd2VlbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSlcblx0XHRcdC50bygwLjIsIHsgb3BhY2l0eTogMCB9KVxuXHRcdFx0LmNhbGwoKCkgPT4geyB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7IH0pXG5cdFx0XHQuc3RhcnQoKTtcblx0fVxuXG5cdHB1YmxpYyBFbmFibGUoKTogdm9pZCB7XG5cdFx0dGhpcy5raWxsQWxsVHdlZW4oKTtcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLmVuYWJsZVR3ZWVuID0gY2MudHdlZW4odGhpcy5ub2RlKVxuXHRcdFx0LnRvKDAuMiwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKTtcblx0fVxuXG5cdHByaXZhdGUga2lsbEFsbFR3ZWVuKCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlVHdlZW4/LnN0b3AoKTtcblx0XHR0aGlzLmRpc2FibGVUd2Vlbj8uc3RvcCgpO1xuXHRcdHRoaXMuZW5hYmxlVHdlZW4gPSBjYy50d2Vlbih7fSk7XG5cdFx0dGhpcy5kaXNhYmxlVHdlZW4gPSBjYy50d2Vlbih7fSk7XG5cdH1cbn1cbiJdfQ==