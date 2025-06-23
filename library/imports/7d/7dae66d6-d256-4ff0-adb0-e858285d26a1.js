"use strict";
cc._RF.push(module, '7dae6bW0lZP8K2w6FgoXSah', 'Slot45-popup-history-detail');
// Script/UI/history-popup/Slot45-popup-history-detail.ts

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
var Slot45_sprite_frame_provider_1 = require("../provider/Slot45-sprite-frame-provider");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45PopupHistoryDetail = /** @class */ (function (_super) {
    __extends(Slot45PopupHistoryDetail, _super);
    function Slot45PopupHistoryDetail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.contentSpinResuilt = null;
        _this.lblSession = null;
        _this.lblTotalWin = null;
        _this.spinResuilt = [];
        _this.SymbolFormat = 'Symbol_%s';
        return _this;
    }
    Slot45PopupHistoryDetail.prototype.start = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ShowDetailHistory", this.onShowDetailHistory.bind(this));
        for (var index = 0; index < this.contentSpinResuilt.childrenCount; index++) {
            var itemComponent = this.contentSpinResuilt.children[index].getComponent(cc.Sprite);
            this.spinResuilt.push(itemComponent);
        }
    };
    Slot45PopupHistoryDetail.prototype.onShowDetailHistory = function (data) {
        for (var index = 0; index < data.SpinResuilt.length; index++) {
            var Id = data.SpinResuilt[index];
            var frame = Slot45_sprite_frame_provider_1.Slot45SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, Id));
            this.spinResuilt[index].spriteFrame = frame;
        }
        this.lblSession.string = data.Session;
        this.lblTotalWin.string = data.TotalWin;
        this.Show();
    };
    Slot45PopupHistoryDetail.prototype.Show = function () {
        this.content.active = true;
    };
    Slot45PopupHistoryDetail.prototype.Hide = function () {
        this.content.active = false;
    };
    __decorate([
        property(cc.Node)
    ], Slot45PopupHistoryDetail.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], Slot45PopupHistoryDetail.prototype, "contentSpinResuilt", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45PopupHistoryDetail.prototype, "lblSession", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45PopupHistoryDetail.prototype, "lblTotalWin", void 0);
    Slot45PopupHistoryDetail = __decorate([
        ccclass
    ], Slot45PopupHistoryDetail);
    return Slot45PopupHistoryDetail;
}(cc.Component));
exports.default = Slot45PopupHistoryDetail;

cc._RF.pop();