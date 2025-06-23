"use strict";
cc._RF.push(module, 'a0a96xo/YZGpr57pHjT61Yx', 'Slot45-sound-button-click');
// Script/base/sound/Slot45-sound-button-click.ts

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
var Slot45_event_manager_1 = require("../events/Slot45-event-manager");
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
        Slot45_event_manager_1.G1009EventManager.GetInstance().notify('PlaySFX', { sfxName: this.SFXName, isLoop: this.IsLoop });
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