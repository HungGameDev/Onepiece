
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-bet-toggle-button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af56dL+6lBNz5Rsz3dY6vZM', 'aka-g1009-bet-toggle-button');
// Script/UI/popup/aka-g1009-bet-toggle-button.ts

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
var aka_g1009_info_toggle_button_1 = require("./aka-g1009-info-toggle-button");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009BetToggleButtonActor = /** @class */ (function (_super) {
    __extends(G1009BetToggleButtonActor, _super);
    function G1009BetToggleButtonActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    G1009BetToggleButtonActor.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ChangeToggleState", this.OnChangeToggleState.bind(this));
    };
    G1009BetToggleButtonActor.prototype.OnToggleClicked = function (action) {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("SelectBetLineClick", { id: this.toggleId, isCheck: action.isChecked });
    };
    G1009BetToggleButtonActor.prototype.OnChangeToggleState = function (toggleArray) {
        this.toggle.isChecked = toggleArray.includes(this.toggleId);
    };
    G1009BetToggleButtonActor = __decorate([
        ccclass
    ], G1009BetToggleButtonActor);
    return G1009BetToggleButtonActor;
}(aka_g1009_info_toggle_button_1.default));
exports.default = G1009BetToggleButtonActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LWJldC10b2dnbGUtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUE4RTtBQUM5RSwrRUFBd0U7QUFFbEUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUQsNkNBQTBCO0lBQWpGOztJQWVBLENBQUM7SUFaYSx5Q0FBSyxHQUFmO1FBQ0ksMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRU0sbURBQWUsR0FBdEIsVUFBdUIsTUFBaUI7UUFDcEMsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLEVBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFFTyx1REFBbUIsR0FBM0IsVUFBNEIsV0FBcUI7UUFFN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQWRnQix5QkFBeUI7UUFEN0MsT0FBTztPQUNhLHlCQUF5QixDQWU3QztJQUFELGdDQUFDO0NBZkQsQUFlQyxDQWZzRCxzQ0FBMEIsR0FlaEY7a0JBZm9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgRzEwMDlJbmZvVG9nZ2xlQnV0dG9uQWN0b3IgZnJvbSBcIi4vYWthLWcxMDA5LWluZm8tdG9nZ2xlLWJ1dHRvblwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5QmV0VG9nZ2xlQnV0dG9uQWN0b3IgZXh0ZW5kcyBHMTAwOUluZm9Ub2dnbGVCdXR0b25BY3RvciB7XG5cblxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkNoYW5nZVRvZ2dsZVN0YXRlXCIsIHRoaXMuT25DaGFuZ2VUb2dnbGVTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgT25Ub2dnbGVDbGlja2VkKGFjdGlvbjogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiU2VsZWN0QmV0TGluZUNsaWNrXCIsIHtpZDp0aGlzLnRvZ2dsZUlkLGlzQ2hlY2s6YWN0aW9uLmlzQ2hlY2tlZH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgT25DaGFuZ2VUb2dnbGVTdGF0ZSh0b2dnbGVBcnJheTogbnVtYmVyW10pXG4gICAge1xuICAgICAgICB0aGlzLnRvZ2dsZS5pc0NoZWNrZWQgPSB0b2dnbGVBcnJheS5pbmNsdWRlcyh0aGlzLnRvZ2dsZUlkKTtcbiAgICB9XG59XG4iXX0=