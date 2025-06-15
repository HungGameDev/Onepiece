"use strict";
cc._RF.push(module, '7dae6bW0lZP8K2w6FgoXSah', 'aka-g1009-popup-history-detail');
// Script/UI/history-popup/aka-g1009-popup-history-detail.ts

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
var aka_g1009_sprite_frame_provider_1 = require("../provider/aka-g1009-sprite-frame-provider");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009PopupHistoryDetail = /** @class */ (function (_super) {
    __extends(G1009PopupHistoryDetail, _super);
    function G1009PopupHistoryDetail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.contentSpinResuilt = null;
        _this.lblSession = null;
        _this.lblTotalWin = null;
        _this.spinResuilt = [];
        _this.SymbolFormat = 'Symbol_%s';
        return _this;
    }
    G1009PopupHistoryDetail.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowDetailHistory", this.onShowDetailHistory.bind(this));
        for (var index = 0; index < this.contentSpinResuilt.childrenCount; index++) {
            var itemComponent = this.contentSpinResuilt.children[index].getComponent(cc.Sprite);
            this.spinResuilt.push(itemComponent);
        }
    };
    G1009PopupHistoryDetail.prototype.onShowDetailHistory = function (data) {
        for (var index = 0; index < data.SpinResuilt.length; index++) {
            var Id = data.SpinResuilt[index];
            var frame = aka_g1009_sprite_frame_provider_1.G1009SpriteProviderManagerActor.Instance().GetFrame(cc.js.formatStr(this.SymbolFormat, Id));
            this.spinResuilt[index].spriteFrame = frame;
        }
        this.lblSession.string = data.Session;
        this.lblTotalWin.string = data.TotalWin;
        this.Show();
    };
    G1009PopupHistoryDetail.prototype.Show = function () {
        this.content.active = true;
    };
    G1009PopupHistoryDetail.prototype.Hide = function () {
        this.content.active = false;
    };
    __decorate([
        property(cc.Node)
    ], G1009PopupHistoryDetail.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], G1009PopupHistoryDetail.prototype, "contentSpinResuilt", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupHistoryDetail.prototype, "lblSession", void 0);
    __decorate([
        property(cc.Label)
    ], G1009PopupHistoryDetail.prototype, "lblTotalWin", void 0);
    G1009PopupHistoryDetail = __decorate([
        ccclass
    ], G1009PopupHistoryDetail);
    return G1009PopupHistoryDetail;
}(cc.Component));
exports.default = G1009PopupHistoryDetail;

cc._RF.pop();