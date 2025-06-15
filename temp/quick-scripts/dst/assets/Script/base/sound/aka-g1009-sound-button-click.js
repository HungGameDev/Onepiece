
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/base/sound/aka-g1009-sound-button-click.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0a96xo/YZGpr57pHjT61Yx', 'aka-g1009-sound-button-click');
// Script/base/sound/aka-g1009-sound-button-click.ts

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
var aka_g1009_event_manager_1 = require("../events/aka-g1009-event-manager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SoundButtonClick = /** @class */ (function (_super) {
    __extends(G1009SoundButtonClick, _super);
    function G1009SoundButtonClick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SFXName = 'sfx_uiclick';
        _this.IsLoop = false;
        return _this;
    }
    G1009SoundButtonClick.prototype.onLoad = function () {
        this.node.on("click", this.onButtonClick.bind(this));
    };
    G1009SoundButtonClick.prototype.onButtonClick = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: this.SFXName, isLoop: this.IsLoop });
    };
    __decorate([
        property
    ], G1009SoundButtonClick.prototype, "SFXName", void 0);
    __decorate([
        property
    ], G1009SoundButtonClick.prototype, "IsLoop", void 0);
    G1009SoundButtonClick = __decorate([
        ccclass
    ], G1009SoundButtonClick);
    return G1009SoundButtonClick;
}(cc.Component));
exports.default = G1009SoundButtonClick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvYmFzZS9zb3VuZC9ha2EtZzEwMDktc291bmQtYnV0dG9uLWNsaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUFzRTtBQUVoRSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQWdCQztRQWJHLGFBQU8sR0FBVyxhQUFhLENBQUM7UUFHaEMsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUFVNUIsQ0FBQztJQVRhLHNDQUFNLEdBQWhCO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVPLDZDQUFhLEdBQXJCO1FBRUksMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBWkQ7UUFEQyxRQUFROzBEQUN1QjtJQUdoQztRQURDLFFBQVE7eURBQ2U7SUFOUCxxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQWdCekM7SUFBRCw0QkFBQztDQWhCRCxBQWdCQyxDQWhCa0QsRUFBRSxDQUFDLFNBQVMsR0FnQjlEO2tCQWhCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlTb3VuZEJ1dHRvbkNsaWNrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIFNGWE5hbWU6IHN0cmluZyA9ICdzZnhfdWljbGljayc7XG5cbiAgICBAcHJvcGVydHlcbiAgICBJc0xvb3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuXHRcblx0XHR0aGlzLm5vZGUub24oXCJjbGlja1wiLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgb25CdXR0b25DbGljaygpOnZvaWRcbiAgICB7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KCdQbGF5U0ZYJywgeyBzZnhOYW1lOiB0aGlzLlNGWE5hbWUsIGlzTG9vcDogdGhpcy5Jc0xvb3AgfSk7XG4gICAgfVxufVxuIl19