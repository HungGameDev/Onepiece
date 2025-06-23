"use strict";
cc._RF.push(module, '5bfb9wzm9xAp7bxi2qR5AVs', 'Slot45-select-bet-panel');
// Script/UI/popup/Slot45-select-bet-panel.ts

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
var Slot45SelectBetActor = /** @class */ (function (_super) {
    __extends(Slot45SelectBetActor, _super);
    function Slot45SelectBetActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        return _this;
    }
    Slot45SelectBetActor.prototype.start = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register('SetBet', this.Hide.bind(this));
    };
    Slot45SelectBetActor.prototype.Hide = function () {
        this.content.active = false;
    };
    Slot45SelectBetActor.prototype.Show = function () {
        this.content.active = true;
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("ShowPopupChangeBet");
    };
    Slot45SelectBetActor.prototype.OnButtonBackClick = function () {
        cc.director.loadScene('Lobby');
    };
    __decorate([
        property(cc.Node)
    ], Slot45SelectBetActor.prototype, "content", void 0);
    Slot45SelectBetActor = __decorate([
        ccclass
    ], Slot45SelectBetActor);
    return Slot45SelectBetActor;
}(cc.Component));
exports.default = Slot45SelectBetActor;

cc._RF.pop();