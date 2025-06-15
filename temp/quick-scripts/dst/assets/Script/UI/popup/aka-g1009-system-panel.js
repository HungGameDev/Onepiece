
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-system-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '545bag0uwtIqKou5atMUuOP', 'aka-g1009-system-panel');
// Script/UI/popup/aka-g1009-system-panel.ts

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
var aka_g1009_toggle_simulator_1 = require("./aka-g1009-toggle-simulator");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SystemPanel = /** @class */ (function (_super) {
    __extends(G1009SystemPanel, _super);
    function G1009SystemPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.btnMusic = null;
        _this.btnSound = null;
        _this.btnHistory = null;
        _this.activePosition = [];
        _this.soundButton = null;
        _this.musicButton = null;
        _this.enableBGMKey = "";
        _this.enableSFXKey = "";
        _this.isActive = false;
        return _this;
    }
    G1009SystemPanel.prototype.onLoad = function () {
        this.enableBGMKey = cc.sys.localStorage.getItem('enableBGMKey');
        this.enableSFXKey = cc.sys.localStorage.getItem('enableSFXKey');
        this.setSound();
        this.register();
    };
    G1009SystemPanel.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("HideSysTemPanel", this.onHideClick.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowSysTemPanel", this.onShowClick.bind(this));
    };
    G1009SystemPanel.prototype.setSound = function () {
        this.soundButton.changeToggleState(this.enableSFXKey);
        this.musicButton.changeToggleState(this.enableBGMKey);
    };
    G1009SystemPanel.prototype.onHideClick = function () {
        var _this = this;
        this.PlayShowAnimation(this.btnHistory, this.activePosition[0]);
        this.PlayShowAnimation(this.btnMusic, this.activePosition[0]);
        this.PlayShowAnimation(this.btnSound, this.activePosition[0]);
        cc.tween({}).delay(0.3).call(function () { _this.content.active = false; }).start();
    };
    G1009SystemPanel.prototype.onShowClick = function () {
        if (this.isActive) {
            this.isActive = false;
            this.onHideClick();
            return;
        }
        this.isActive = true;
        this.content.active = true;
        this.PlayShowAnimation(this.btnHistory, this.activePosition[1]);
        this.PlayShowAnimation(this.btnMusic, this.activePosition[2]);
        this.PlayShowAnimation(this.btnSound, this.activePosition[3]);
    };
    G1009SystemPanel.prototype.PlayShowAnimation = function (targetNode, targetPosition) {
        var action = cc.tween(targetNode)
            .to(0.3, { position: targetPosition }).call(function () { action.stop(); }).start();
    };
    __decorate([
        property(cc.Node)
    ], G1009SystemPanel.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], G1009SystemPanel.prototype, "btnMusic", void 0);
    __decorate([
        property(cc.Node)
    ], G1009SystemPanel.prototype, "btnSound", void 0);
    __decorate([
        property(cc.Node)
    ], G1009SystemPanel.prototype, "btnHistory", void 0);
    __decorate([
        property(cc.Vec3)
    ], G1009SystemPanel.prototype, "activePosition", void 0);
    __decorate([
        property(aka_g1009_toggle_simulator_1.default)
    ], G1009SystemPanel.prototype, "soundButton", void 0);
    __decorate([
        property(aka_g1009_toggle_simulator_1.default)
    ], G1009SystemPanel.prototype, "musicButton", void 0);
    G1009SystemPanel = __decorate([
        ccclass
    ], G1009SystemPanel);
    return G1009SystemPanel;
}(cc.Component));
exports.default = G1009SystemPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LXN5c3RlbS1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBOEU7QUFDOUUsMkVBQXFFO0FBRS9ELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBc0VDO1FBbkVXLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRy9CLGlCQUFXLEdBQThCLElBQUksQ0FBQztRQUc5QyxpQkFBVyxHQUE4QixJQUFJLENBQUM7UUFFOUMsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUE2Q3RDLENBQUM7SUE1Q2EsaUNBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDTyxtQ0FBUSxHQUFoQjtRQUNJLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJ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QjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBc0VwQztJQUFELHVCQUFDO0NBdEVELEFBc0VDLENBdEU2QyxFQUFFLENBQUMsU0FBUyxHQXNFekQ7a0JBdEVvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IEcxMDA5VG9nZ2xlU2ltdWxhdG9yQWN0b3IgZnJvbSBcIi4vYWthLWcxMDA5LXRvZ2dsZS1zaW11bGF0b3JcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHMTAwOVN5c3RlbVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGJ0bk11c2ljOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgYnRuU291bmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBidG5IaXN0b3J5OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5WZWMzKVxuICAgIHByaXZhdGUgYWN0aXZlUG9zaXRpb246IGNjLlZlYzNbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KEcxMDA5VG9nZ2xlU2ltdWxhdG9yQWN0b3IpXG4gICAgcHJpdmF0ZSBzb3VuZEJ1dHRvbjogRzEwMDlUb2dnbGVTaW11bGF0b3JBY3RvciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoRzEwMDlUb2dnbGVTaW11bGF0b3JBY3RvcilcbiAgICBwcml2YXRlIG11c2ljQnV0dG9uOiBHMTAwOVRvZ2dsZVNpbXVsYXRvckFjdG9yID0gbnVsbDtcblxuICAgIHByaXZhdGUgZW5hYmxlQkdNS2V5OiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgZW5hYmxlU0ZYS2V5OiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVuYWJsZUJHTUtleSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5hYmxlQkdNS2V5Jyk7XG4gICAgICAgIHRoaXMuZW5hYmxlU0ZYS2V5ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmFibGVTRlhLZXknKTtcbiAgICAgICAgdGhpcy5zZXRTb3VuZCgpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJIaWRlU3lzVGVtUGFuZWxcIiwgdGhpcy5vbkhpZGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNob3dTeXNUZW1QYW5lbFwiLCB0aGlzLm9uU2hvd0NsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U291bmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc291bmRCdXR0b24uY2hhbmdlVG9nZ2xlU3RhdGUodGhpcy5lbmFibGVTRlhLZXkpO1xuICAgICAgICB0aGlzLm11c2ljQnV0dG9uLmNoYW5nZVRvZ2dsZVN0YXRlKHRoaXMuZW5hYmxlQkdNS2V5KTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBvbkhpZGVDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5QbGF5U2hvd0FuaW1hdGlvbih0aGlzLmJ0bkhpc3RvcnksIHRoaXMuYWN0aXZlUG9zaXRpb25bMF0pO1xuICAgICAgICB0aGlzLlBsYXlTaG93QW5pbWF0aW9uKHRoaXMuYnRuTXVzaWMsIHRoaXMuYWN0aXZlUG9zaXRpb25bMF0pO1xuICAgICAgICB0aGlzLlBsYXlTaG93QW5pbWF0aW9uKHRoaXMuYnRuU291bmQsIHRoaXMuYWN0aXZlUG9zaXRpb25bMF0pO1xuICAgICAgICBjYy50d2Vlbih7fSkuZGVsYXkoMC4zKS5jYWxsKCgpID0+IHsgdGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlOyB9KS5zdGFydCgpO1xuICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgb25TaG93Q2xpY2soKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMub25IaWRlQ2xpY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuUGxheVNob3dBbmltYXRpb24odGhpcy5idG5IaXN0b3J5LCB0aGlzLmFjdGl2ZVBvc2l0aW9uWzFdKTtcbiAgICAgICAgdGhpcy5QbGF5U2hvd0FuaW1hdGlvbih0aGlzLmJ0bk11c2ljLCB0aGlzLmFjdGl2ZVBvc2l0aW9uWzJdKTtcbiAgICAgICAgdGhpcy5QbGF5U2hvd0FuaW1hdGlvbih0aGlzLmJ0blNvdW5kLCB0aGlzLmFjdGl2ZVBvc2l0aW9uWzNdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIFBsYXlTaG93QW5pbWF0aW9uKHRhcmdldE5vZGU6IGNjLk5vZGUsIHRhcmdldFBvc2l0aW9uOiBjYy5WZWMzKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSBjYy50d2Vlbih0YXJnZXROb2RlKVxuICAgICAgICAgICAgLnRvKDAuMywgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSkuY2FsbCgoKSA9PiB7IGFjdGlvbi5zdG9wKCkgfSkuc3RhcnQoKTtcbiAgICAgICAgXG4gICAgfVxufVxuIl19