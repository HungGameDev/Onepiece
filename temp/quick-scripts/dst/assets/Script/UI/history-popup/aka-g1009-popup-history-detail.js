
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/history-popup/aka-g1009-popup-history-detail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvaGlzdG9yeS1wb3B1cC9ha2EtZzEwMDktcG9wdXAtaGlzdG9yeS1kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQThFO0FBQzlFLCtGQUE4RjtBQUV4RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQTRDQztRQXpDVyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUduQyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFnQixFQUFFLENBQUM7UUFDdEMsa0JBQVksR0FBVyxXQUFXLENBQUM7O0lBNkJ2QyxDQUFDO0lBNUJhLHVDQUFLLEdBQWY7UUFDSSwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRW5HLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3hFLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFDTyxxREFBbUIsR0FBM0IsVUFBNEIsSUFBUztRQUVqQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQzVEO1lBQ0ksSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLEtBQUssR0FBRyxpRUFBK0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNNLHNDQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVNLHNDQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQXZDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzREQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUVBQ3lCO0lBRzNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ2lCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0VBQ2tCO0lBWnBCLHVCQUF1QjtRQUQzQyxPQUFPO09BQ2EsdUJBQXVCLENBNEMzQztJQUFELDhCQUFDO0NBNUNELEFBNENDLENBNUNvRCxFQUFFLENBQUMsU0FBUyxHQTRDaEU7a0JBNUNvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IHsgRzEwMDlTcHJpdGVQcm92aWRlck1hbmFnZXJBY3RvciB9IGZyb20gXCIuLi9wcm92aWRlci9ha2EtZzEwMDktc3ByaXRlLWZyYW1lLXByb3ZpZGVyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlQb3B1cEhpc3RvcnlEZXRhaWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY29udGVudFNwaW5SZXN1aWx0OiBjYy5Ob2RlID0gbnVsbDtcbiAgXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbGJsU2Vzc2lvbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGxibFRvdGFsV2luOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNwaW5SZXN1aWx0OiBjYy5TcHJpdGVbXSA9IFtdO1xuICAgIFN5bWJvbEZvcm1hdDogc3RyaW5nID0gJ1N5bWJvbF8lcyc7XG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU2hvd0RldGFpbEhpc3RvcnlcIiwgdGhpcy5vblNob3dEZXRhaWxIaXN0b3J5LmJpbmQodGhpcykpO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbnRlbnRTcGluUmVzdWlsdC5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtQ29tcG9uZW50ID0gdGhpcy5jb250ZW50U3BpblJlc3VpbHQuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgdGhpcy5zcGluUmVzdWlsdC5wdXNoKGl0ZW1Db21wb25lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgb25TaG93RGV0YWlsSGlzdG9yeShkYXRhOiBhbnkpOiB2b2lkIHtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5TcGluUmVzdWlsdC5sZW5ndGg7IGluZGV4KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IElkID0gZGF0YS5TcGluUmVzdWlsdFtpbmRleF07XG4gICAgICAgICAgICBsZXQgZnJhbWUgPSBHMTAwOVNwcml0ZVByb3ZpZGVyTWFuYWdlckFjdG9yLkluc3RhbmNlKCkuR2V0RnJhbWUoY2MuanMuZm9ybWF0U3RyKHRoaXMuU3ltYm9sRm9ybWF0LElkKSk7XG4gICAgICAgICAgICB0aGlzLnNwaW5SZXN1aWx0W2luZGV4XS5zcHJpdGVGcmFtZSA9IGZyYW1lOyAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IGRhdGEuU2Vzc2lvbjtcbiAgICAgICAgdGhpcy5sYmxUb3RhbFdpbi5zdHJpbmcgPSBkYXRhLlRvdGFsV2luO1xuICAgICAgICB0aGlzLlNob3coKTtcbiAgICB9XG4gICAgcHVibGljIFNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGVudC5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBIaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICBcbn1cbiJdfQ==