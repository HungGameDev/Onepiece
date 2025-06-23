"use strict";
cc._RF.push(module, '723d7dKBwZPDoTW5zFznE9a', 'Slot45-button');
// Script/UI/popup/Slot45-button.ts

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
var Slot45ButtonActor = /** @class */ (function (_super) {
    __extends(Slot45ButtonActor, _super);
    function Slot45ButtonActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EventName = "Event-name";
        _this.button = null;
        return _this;
    }
    Slot45ButtonActor.prototype.onLoad = function () {
        this.button = this.node.getComponent(cc.Button);
        this.node.on("click", this.onButtonClick.bind(this));
    };
    Slot45ButtonActor.prototype.onButtonClick = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify(this.EventName);
    };
    Slot45ButtonActor.prototype.Interactable = function (isInteractable) {
        if (!!this.button)
            this.button = this.node.getComponent(cc.Button);
        this.button.interactable = isInteractable;
    };
    Slot45ButtonActor.prototype.Disable = function () {
        var _this = this;
        this.killAllTween();
        this.disableTween = cc.tween(this.node)
            .to(0.2, { opacity: 0 })
            .call(function () { _this.node.active = false; })
            .start();
    };
    Slot45ButtonActor.prototype.Enable = function () {
        this.killAllTween();
        this.node.active = true;
        this.enableTween = cc.tween(this.node)
            .to(0.2, { opacity: 255 }).start();
    };
    Slot45ButtonActor.prototype.killAllTween = function () {
        var _a, _b;
        (_a = this.enableTween) === null || _a === void 0 ? void 0 : _a.stop();
        (_b = this.disableTween) === null || _b === void 0 ? void 0 : _b.stop();
        this.enableTween = cc.tween({});
        this.disableTween = cc.tween({});
    };
    __decorate([
        property
    ], Slot45ButtonActor.prototype, "EventName", void 0);
    __decorate([
        property(cc.Button)
    ], Slot45ButtonActor.prototype, "button", void 0);
    Slot45ButtonActor = __decorate([
        ccclass
    ], Slot45ButtonActor);
    return Slot45ButtonActor;
}(cc.Component));
exports.default = Slot45ButtonActor;

cc._RF.pop();