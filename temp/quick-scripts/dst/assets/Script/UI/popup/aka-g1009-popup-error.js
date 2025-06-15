
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-popup-error.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ce5fWHKydGQr7QejoQK3qe', 'aka-g1009-popup-error');
// Script/UI/popup/aka-g1009-popup-error.ts

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
var G1009PopupError = /** @class */ (function (_super) {
    __extends(G1009PopupError, _super);
    function G1009PopupError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.lblMessage = null;
        _this.btnExit = null;
        _this.btnClosePopup = null;
        return _this;
    }
    G1009PopupError.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("PopupInfoMessage", this.onPopupInfoMessage.bind(this));
        this.reset();
    };
    G1009PopupError.prototype.onPopupInfoMessage = function (data) {
        this.lblMessage.string = data.message;
        this.btnExit.active = !(data.type == 'info');
        this.btnClosePopup.active = (data.type == 'info');
        this.content.active = true;
        this.content.opacity = 0;
        cc.tween(this.content)
            .to(0.2, { opacity: 255 })
            .start();
    };
    G1009PopupError.prototype.reset = function () {
        this.content.active = false;
    };
    G1009PopupError.prototype.onExitClick = function () {
        cc.director.loadScene('home-page');
    };
    G1009PopupError.prototype.onClosePopupClick = function () {
        var _this = this;
        cc.tween(this.content)
            .to(0.2, { opacity: 0 })
            .call(function () { return _this.reset(); })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], G1009PopupError.prototype, "content", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupError.prototype, "lblMessage", void 0);
    __decorate([
        property(cc.Node)
    ], G1009PopupError.prototype, "btnExit", void 0);
    __decorate([
        property(cc.Node)
    ], G1009PopupError.prototype, "btnClosePopup", void 0);
    G1009PopupError = __decorate([
        ccclass
    ], G1009PopupError);
    return G1009PopupError;
}(cc.Component));
exports.default = G1009PopupError;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LXBvcHVwLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFGQUE4RTtBQUV4RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXlDQztRQXRDQSxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBZ0MvQixDQUFDO0lBOUJVLCtCQUFLLEdBQWY7UUFDQywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEIsVUFBbUIsSUFBc0I7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDcEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN6QixLQUFLLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDJDQUFpQixHQUFqQjtRQUFBLGlCQUtDO1FBSkEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3BCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDdkIsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDO2FBQ3hCLEtBQUssRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNZO0lBVFYsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXlDbkM7SUFBRCxzQkFBQztDQXpDRCxBQXlDQyxDQXpDNEMsRUFBRSxDQUFDLFNBQVMsR0F5Q3hEO2tCQXpDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvcHVwSW5mb01lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vR2FtZU1hbmFnZXIvYWthXzEwMDktR2FtZU1hbmFnZXJcIjtcbmltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVBvcHVwRXJyb3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxuXHRjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHRsYmxNZXNzYWdlOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxuXHRidG5FeGl0OiBjYy5Ob2RlID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLk5vZGUpXG5cdGJ0bkNsb3NlUG9wdXA6IGNjLk5vZGUgPSBudWxsO1xuXG5cdHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiUG9wdXBJbmZvTWVzc2FnZVwiLCB0aGlzLm9uUG9wdXBJbmZvTWVzc2FnZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnJlc2V0KCk7XG5cdH1cblxuXHRvblBvcHVwSW5mb01lc3NhZ2UoZGF0YTogUG9wdXBJbmZvTWVzc2FnZSk6IHZvaWQge1xuXHRcdHRoaXMubGJsTWVzc2FnZS5zdHJpbmcgPSBkYXRhLm1lc3NhZ2U7XG5cdFx0dGhpcy5idG5FeGl0LmFjdGl2ZSA9ICEoZGF0YS50eXBlID09ICdpbmZvJyk7XG5cdFx0dGhpcy5idG5DbG9zZVBvcHVwLmFjdGl2ZSA9IChkYXRhLnR5cGUgPT0gJ2luZm8nKTtcblx0XHR0aGlzLmNvbnRlbnQuYWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLmNvbnRlbnQub3BhY2l0eSA9IDA7XG5cdFx0Y2MudHdlZW4odGhpcy5jb250ZW50KVxuXHRcdFx0LnRvKDAuMiwgeyBvcGFjaXR5OiAyNTUgfSlcblx0XHRcdC5zdGFydCgpO1xuXHR9XG5cblx0cmVzZXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuXHR9XG5cblx0b25FeGl0Q2xpY2soKTogdm9pZCB7XG5cdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lLXBhZ2UnKTtcblx0fVxuXG5cdG9uQ2xvc2VQb3B1cENsaWNrKCk6IHZvaWQge1xuXHRcdGNjLnR3ZWVuKHRoaXMuY29udGVudClcblx0XHRcdC50bygwLjIsIHsgb3BhY2l0eTogMCB9KVxuXHRcdFx0LmNhbGwoKCkgPT4gdGhpcy5yZXNldCgpKVxuXHRcdFx0LnN0YXJ0KCk7XG5cdH1cbn1cbiJdfQ==