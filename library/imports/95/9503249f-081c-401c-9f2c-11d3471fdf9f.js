"use strict";
cc._RF.push(module, '95032SfCBxAHJ8sEdNHH9+f', 'Slot45-present-win-line-panel');
// Script/UI/present-win/Slot45-present-win-line-panel.ts

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
var Slot45_win_line_1 = require("./Slot45-win-line");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45WinLinePanelActor = /** @class */ (function (_super) {
    __extends(Slot45WinLinePanelActor, _super);
    function Slot45WinLinePanelActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lines = [];
        return _this;
    }
    Slot45WinLinePanelActor.prototype.onLoad = function () {
        this.register();
        this.lines = this.node.getComponentsInChildren(Slot45_win_line_1.default);
    };
    Slot45WinLinePanelActor.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ShowLine", this.OnShowLine.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ResetAllLine", this.hideAllLine.bind(this));
    };
    Slot45WinLinePanelActor.prototype.OnShowLine = function (line) {
        this.hideAllLine();
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify('PlaySFX', { sfxName: 'sfx_show_line', isLoop: false });
        for (var index = 0; index < line.length; index++) {
            if (line[index] >= 0 && line[index] < this.lines.length)
                this.lines[line[index]].Show();
        }
    };
    Slot45WinLinePanelActor.prototype.hideAllLine = function () {
        this.lines.forEach(function (line) { return line.Hide(); });
    };
    Slot45WinLinePanelActor = __decorate([
        ccclass
    ], Slot45WinLinePanelActor);
    return Slot45WinLinePanelActor;
}(cc.Component));
exports.default = Slot45WinLinePanelActor;

cc._RF.pop();