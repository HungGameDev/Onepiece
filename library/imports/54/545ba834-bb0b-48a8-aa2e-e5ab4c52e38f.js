"use strict";
cc._RF.push(module, '545bag0uwtIqKou5atMUuOP', 'Slot45-system-panel');
// Script/UI/popup/Slot45-system-panel.ts

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
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var Slot45_toggle_simulator_1 = require("./Slot45-toggle-simulator");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45SystemPanel = /** @class */ (function (_super) {
    __extends(Slot45SystemPanel, _super);
    function Slot45SystemPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.soundButton = null;
        _this.musicButton = null;
        _this.enableBGMKey = "";
        _this.enableSFXKey = "";
        _this.isActive = false;
        return _this;
    }
    Slot45SystemPanel.prototype.onLoad = function () {
        this.enableBGMKey = cc.sys.localStorage.getItem('enableBGMKey');
        this.enableSFXKey = cc.sys.localStorage.getItem('enableSFXKey');
        this.setSound();
        this.register();
    };
    Slot45SystemPanel.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("HideSysTemPanel", this.onHideClick.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ShowSysTemPanel", this.onShowClick.bind(this));
    };
    Slot45SystemPanel.prototype.setSound = function () {
        this.soundButton.changeToggleState(this.enableSFXKey);
        this.musicButton.changeToggleState(this.enableBGMKey);
    };
    Slot45SystemPanel.prototype.onHideClick = function () {
        this.content.active = false;
    };
    Slot45SystemPanel.prototype.onShowClick = function () {
        if (this.isActive) {
            this.isActive = false;
            this.onHideClick();
            return;
        }
        this.isActive = true;
        this.content.active = true;
    };
    __decorate([
        property(cc.Node)
    ], Slot45SystemPanel.prototype, "content", void 0);
    __decorate([
        property(Slot45_toggle_simulator_1.default)
    ], Slot45SystemPanel.prototype, "soundButton", void 0);
    __decorate([
        property(Slot45_toggle_simulator_1.default)
    ], Slot45SystemPanel.prototype, "musicButton", void 0);
    Slot45SystemPanel = __decorate([
        ccclass
    ], Slot45SystemPanel);
    return Slot45SystemPanel;
}(cc.Component));
exports.default = Slot45SystemPanel;

cc._RF.pop();