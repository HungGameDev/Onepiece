"use strict";
cc._RF.push(module, '33a7cqK419CH5bYyF8NDp2U', 'Slot45-info-toggle-panel');
// Script/UI/popup/Slot45-info-toggle-panel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TOGGLE_SPACE = -60;
var G1009InfoTogglePanelActor = /** @class */ (function (_super) {
    __extends(G1009InfoTogglePanelActor, _super);
    function G1009InfoTogglePanelActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currenttoggleID = 0;
        _this.container = null;
        return _this;
    }
    G1009InfoTogglePanelActor.prototype.onLoad = function () {
        this.register();
        this.container = this.node.getComponent(cc.ToggleContainer);
    };
    G1009InfoTogglePanelActor.prototype.register = function () {
        Slot45_event_manager_1.G1009EventManager.GetInstance().register("ChangeInfoPage", this.onChangeInfoPage.bind(this));
    };
    G1009InfoTogglePanelActor.prototype.onChangeInfoPage = function (toggleId) {
        if (this.currenttoggleID != toggleId) {
            this.container.toggleItems[toggleId].isChecked = true;
            this.currenttoggleID = toggleId;
            // cc.tween(this.node).to(0.3, { position: new cc.Vec3(TOGGLE_SPACE * this.currenttoggleID, this.node.position.y, this.node.position.z) }).start();
        }
    };
    G1009InfoTogglePanelActor = __decorate([
        ccclass
    ], G1009InfoTogglePanelActor);
    return G1009InfoTogglePanelActor;
}(cc.Component));
exports.default = G1009InfoTogglePanelActor;

cc._RF.pop();