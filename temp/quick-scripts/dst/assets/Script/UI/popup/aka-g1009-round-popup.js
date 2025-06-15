
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-round-popup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dcd5uWPp9DVZ+nOV55ZXZw', 'aka-g1009-round-popup');
// Script/UI/popup/aka-g1009-round-popup.ts

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
var G1009RoundPopupActor = /** @class */ (function (_super) {
    __extends(G1009RoundPopupActor, _super);
    function G1009RoundPopupActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rounnd = null;
        return _this;
    }
    G1009RoundPopupActor.prototype.start = function () {
        this.register();
    };
    G1009RoundPopupActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowRound", this.OnShowRound.bind(this));
    };
    G1009RoundPopupActor.prototype.OnShowRound = function (round) {
        this.rounnd.string = round;
    };
    __decorate([
        property(cc.Label)
    ], G1009RoundPopupActor.prototype, "rounnd", void 0);
    G1009RoundPopupActor = __decorate([
        ccclass
    ], G1009RoundPopupActor);
    return G1009RoundPopupActor;
}(cc.Component));
exports.default = G1009RoundPopupActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LXJvdW5kLXBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUE4RTtBQUV4RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQWdCQztRQWJHLFlBQU0sR0FBYSxJQUFJLENBQUM7O0lBYTVCLENBQUM7SUFYRyxvQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyx1Q0FBUSxHQUFoQjtRQUNJLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU8sMENBQVcsR0FBbkIsVUFBb0IsS0FBWTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQVpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ0s7SUFIUCxvQkFBb0I7UUFEeEMsT0FBTztPQUNhLG9CQUFvQixDQWdCeEM7SUFBRCwyQkFBQztDQWhCRCxBQWdCQyxDQWhCaUQsRUFBRSxDQUFDLFNBQVMsR0FnQjdEO2tCQWhCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVJvdW5kUG9wdXBBY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcm91bm5kOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU2hvd1JvdW5kXCIsIHRoaXMuT25TaG93Um91bmQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBPblNob3dSb3VuZChyb3VuZDpzdHJpbmcpOiB2b2lke1xuICAgICAgICB0aGlzLnJvdW5uZC5zdHJpbmcgPSByb3VuZDtcbiAgICB9XG59XG4iXX0=