"use strict";
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