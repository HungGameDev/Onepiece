
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/present-win/aka-g1009-present-win-line-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95032SfCBxAHJ8sEdNHH9+f', 'aka-g1009-present-win-line-panel');
// Script/UI/present-win/aka-g1009-present-win-line-panel.ts

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
var aka_g1009_win_line_1 = require("./aka-g1009-win-line");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009WinLinePanelActor = /** @class */ (function (_super) {
    __extends(G1009WinLinePanelActor, _super);
    function G1009WinLinePanelActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lines = [];
        return _this;
    }
    G1009WinLinePanelActor.prototype.onLoad = function () {
        this.register();
        this.lines = this.node.getComponentsInChildren(aka_g1009_win_line_1.default);
    };
    G1009WinLinePanelActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowLine", this.OnShowLine.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ResetAllLine", this.hideAllLine.bind(this));
    };
    G1009WinLinePanelActor.prototype.OnShowLine = function (line) {
        this.hideAllLine();
        for (var index = 0; index < line.length; index++) {
            if (line[index] >= 0 && line[index] < this.lines.length)
                this.lines[line[index]].Show();
        }
    };
    G1009WinLinePanelActor.prototype.hideAllLine = function () {
        this.lines.forEach(function (line) { return line.Hide(); });
    };
    G1009WinLinePanelActor = __decorate([
        ccclass
    ], G1009WinLinePanelActor);
    return G1009WinLinePanelActor;
}(cc.Component));
exports.default = G1009WinLinePanelActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcHJlc2VudC13aW4vYWthLWcxMDA5LXByZXNlbnQtd2luLWxpbmUtcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQThFO0FBQzlFLDJEQUFxRDtBQUUvQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvRCwwQ0FBWTtJQUFoRTtRQUFBLHFFQTRCQztRQTFCRyxXQUFLLEdBQXNCLEVBQUUsQ0FBQzs7SUEwQmxDLENBQUM7SUF4QmEsdUNBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLDRCQUFpQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNPLHlDQUFRLEdBQWhCO1FBRUksMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRU8sMkNBQVUsR0FBbEIsVUFBbUIsSUFBYztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQ2hEO1lBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Z0JBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDckM7SUFFTCxDQUFDO0lBRU8sNENBQVcsR0FBbkI7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBM0JnQixzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQTRCMUM7SUFBRCw2QkFBQztDQTVCRCxBQTRCQyxDQTVCbUQsRUFBRSxDQUFDLFNBQVMsR0E0Qi9EO2tCQTVCb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCBHMTAwOVdpbkxpbmVBY3RvciBmcm9tIFwiLi9ha2EtZzEwMDktd2luLWxpbmVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVdpbkxpbmVQYW5lbEFjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGxpbmVzOiBHMTAwOVdpbkxpbmVBY3RvcltdPVtdO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICB0aGlzLmxpbmVzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKEcxMDA5V2luTGluZUFjdG9yKTtcbiAgICB9XG4gICAgcHJpdmF0ZSByZWdpc3RlcigpXG4gICAge1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU2hvd0xpbmVcIiwgdGhpcy5PblNob3dMaW5lLmJpbmQodGhpcykpO1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiUmVzZXRBbGxMaW5lXCIsIHRoaXMuaGlkZUFsbExpbmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBPblNob3dMaW5lKGxpbmU6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuaGlkZUFsbExpbmUoKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmUubGVuZ3RoOyBpbmRleCsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAobGluZVtpbmRleF0gPj0gMCAmJiBsaW5lW2luZGV4XSA8IHRoaXMubGluZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRoaXMubGluZXNbbGluZVtpbmRleF1dLlNob3coKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgaGlkZUFsbExpbmUoKVxuICAgIHtcbiAgICAgICAgdGhpcy5saW5lcy5mb3JFYWNoKGxpbmUgPT4gbGluZS5IaWRlKCkpO1xuICAgIH1cbn1cbiJdfQ==