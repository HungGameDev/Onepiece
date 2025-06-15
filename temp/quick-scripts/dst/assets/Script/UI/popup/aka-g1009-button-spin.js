
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-button-spin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e77c2p133pJ0Ko0adrCP1Re', 'aka-g1009-button-spin');
// Script/UI/popup/aka-g1009-button-spin.ts

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
var G1009ButtonSpin = /** @class */ (function (_super) {
    __extends(G1009ButtonSpin, _super);
    function G1009ButtonSpin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EventName = "Event-name";
        _this.button = null;
        return _this;
    }
    G1009ButtonSpin.prototype.onLoad = function () {
        this.button = this.node.getComponent(cc.Button);
        this.node.on("click", this.onButtonClick.bind(this));
    };
    G1009ButtonSpin.prototype.onButtonClick = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify(this.EventName);
    };
    G1009ButtonSpin.prototype.Disable = function () {
        this.node.active = false;
    };
    G1009ButtonSpin.prototype.Enable = function () {
        this.node.active = true;
    };
    G1009ButtonSpin.prototype.Interactable = function (isInteractable) {
        if (!!this.button)
            this.button = this.node.getComponent(cc.Button);
        this.button.interactable = isInteractable;
    };
    __decorate([
        property
    ], G1009ButtonSpin.prototype, "EventName", void 0);
    G1009ButtonSpin = __decorate([
        ccclass
    ], G1009ButtonSpin);
    return G1009ButtonSpin;
}(cc.Component));
exports.default = G1009ButtonSpin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LWJ1dHRvbi1zcGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUE4RTtBQUV4RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQThCQztRQTNCRyxlQUFTLEdBQVcsWUFBWSxDQUFDO1FBRXhCLFlBQU0sR0FBYyxJQUFJLENBQUM7O0lBeUJ0QyxDQUFDO0lBdkJhLGdDQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUdTLHVDQUFhLEdBQXZCO1FBQ0ksMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0saUNBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRU0sc0NBQVksR0FBbkIsVUFBb0IsY0FBdUI7UUFDN0MsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO0lBQzNDLENBQUM7SUExQkU7UUFEQyxRQUFRO3NEQUN3QjtJQUhoQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBOEJuQztJQUFELHNCQUFDO0NBOUJELEFBOEJDLENBOUI0QyxFQUFFLENBQUMsU0FBUyxHQThCeEQ7a0JBOUJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOUJ1dHRvblNwaW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgRXZlbnROYW1lOiBzdHJpbmcgPSBcIkV2ZW50LW5hbWVcIjtcblxuICAgIHByaXZhdGUgIGJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJjbGlja1wiLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgXG4gICAgcHJvdGVjdGVkIG9uQnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KHRoaXMuRXZlbnROYW1lKTsgXG4gICAgfVxuXG4gICAgcHVibGljIERpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcdFxuXHR9XG5cblx0cHVibGljIEVuYWJsZSgpOiB2b2lkIHtcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcdFxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgSW50ZXJhY3RhYmxlKGlzSW50ZXJhY3RhYmxlOiBib29sZWFuKSB7XG5cdFx0aWYgKCEhdGhpcy5idXR0b24pXG5cdFx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcblx0XHR0aGlzLmJ1dHRvbi5pbnRlcmFjdGFibGUgPSBpc0ludGVyYWN0YWJsZTtcblx0fVxufVxuIl19