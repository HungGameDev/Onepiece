
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/history-popup/aka-g1009-popup-history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e92aYvIOJNQ4sipjdzLXBd', 'aka-g1009-popup-history');
// Script/UI/history-popup/aka-g1009-popup-history.ts

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
var aka_1009_GameManager_1 = require("../../GameManager/aka_1009-GameManager");
var aka_date_util_1 = require("../../base/Util/aka_date-util");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_popup_history_item_1 = require("./aka-g1009-popup-history-item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009PopupHistory = /** @class */ (function (_super) {
    __extends(G1009PopupHistory, _super);
    function G1009PopupHistory() {
        var _this = _super.call(this) || this;
        _this.prefabItem = null;
        _this.content = null;
        _this.contentView = null;
        _this.pageIndex = 0;
        _this.gameManager1009 = new aka_1009_GameManager_1.GameManager1009();
        return _this;
    }
    G1009PopupHistory.prototype.start = function () {
        this.Init();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("OpenLSC", this.Show.bind(this));
    };
    G1009PopupHistory.prototype.Init = function () {
        var _this = this;
        this.gameManager1009.getBetHistory(this.pageIndex * 6, 20).then(function (data) {
            console.log('getBetHistory', data);
            _this.processData(data);
        });
    };
    G1009PopupHistory.prototype.Show = function () {
        this.content.active = true;
    };
    G1009PopupHistory.prototype.Hide = function () {
        this.content.active = false;
    };
    G1009PopupHistory.prototype.processData = function (historyData) {
        var _this = this;
        historyData.data.forEach(function (data) {
            var item = cc.instantiate(_this.prefabItem);
            var itemComponent = item.getComponent(aka_g1009_popup_history_item_1.default);
            var time = aka_date_util_1.formatDDMMHHmmSS(data.time);
            itemComponent.SetInfoItem(data.session, time, data.totalBet, data.totalWin, data.spinData);
            item.setParent(_this.contentView);
        });
    };
    __decorate([
        property(cc.Prefab)
    ], G1009PopupHistory.prototype, "prefabItem", void 0);
    __decorate([
        property(cc.Node)
    ], G1009PopupHistory.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], G1009PopupHistory.prototype, "contentView", void 0);
    G1009PopupHistory = __decorate([
        ccclass
    ], G1009PopupHistory);
    return G1009PopupHistory;
}(cc.Component));
exports.default = G1009PopupHistory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvaGlzdG9yeS1wb3B1cC9ha2EtZzEwMDktcG9wdXAtaGlzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrRUFBeUU7QUFDekUsK0RBQWlFO0FBQ2pFLHFGQUE4RTtBQUM5RSwrRUFBbUU7QUFFN0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFjMUQ7UUFBQSxZQUNDLGlCQUFPLFNBR1A7UUFkUyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBSTVCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFLL0IsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLHNDQUFlLEVBQUUsQ0FBQzs7SUFDOUMsQ0FBQztJQUVTLGlDQUFLLEdBQWY7UUFDQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWiwyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVVLGdDQUFJLEdBQWY7UUFBQSxpQkFPQztRQUxBLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFFTSxnQ0FBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFTSxnQ0FBSSxHQUFYO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFUyx1Q0FBVyxHQUFyQixVQUFzQixXQUFnQjtRQUF0QyxpQkFTQztRQVBBLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUM3QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHNDQUFxQixDQUFDLENBQUM7WUFDN0QsSUFBSSxJQUFJLEdBQVcsZ0NBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUEvQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDbUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDZ0I7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDb0I7SUFSbEIsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FxRHJDO0lBQUQsd0JBQUM7Q0FyREQsQUFxREMsQ0FyRDhDLEVBQUUsQ0FBQyxTQUFTLEdBcUQxRDtrQkFyRG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVNYW5hZ2VyMTAwOSB9IGZyb20gXCIuLi8uLi9HYW1lTWFuYWdlci9ha2FfMTAwOS1HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHsgZm9ybWF0RERNTUhIbW1TUyB9IGZyb20gXCIuLi8uLi9iYXNlL1V0aWwvYWthX2RhdGUtdXRpbFwiO1xuaW1wb3J0IHsgRzEwMDlFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vYmFzZS9ldmVudHMvYWthLWcxMDA5LWV2ZW50LW1hbmFnZXJcIjtcbmltcG9ydCBHMTAwOVBvcHVwSGlzdG9yeUl0ZW0gZnJvbSBcIi4vYWthLWcxMDA5LXBvcHVwLWhpc3RvcnktaXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlQb3B1cEhpc3RvcnkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cdFxuXHRAcHJvcGVydHkoY2MuUHJlZmFiKVxuXHRwcm90ZWN0ZWQgcHJlZmFiSXRlbTogY2MuUHJlZmFiID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLk5vZGUpXG5cdHByb3RlY3RlZCBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLk5vZGUpXG5cdHByb3RlY3RlZCBjb250ZW50VmlldzogY2MuTm9kZSA9IG51bGw7XG5cdFxuXHRwcm90ZWN0ZWQgZ2FtZU1hbmFnZXIxMDA5OiBHYW1lTWFuYWdlcjEwMDk7XG5cblx0cHJvdGVjdGVkIHBhZ2VJbmRleDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5nYW1lTWFuYWdlcjEwMDkgPSBuZXcgR2FtZU1hbmFnZXIxMDA5KCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XG5cdFx0dGhpcy5Jbml0KCk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIk9wZW5MU0NcIiwgdGhpcy5TaG93LmJpbmQodGhpcykpO1xuXHR9XG5cdFxuXHRwcm90ZWN0ZWQgIEluaXQoKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5nYW1lTWFuYWdlcjEwMDkuZ2V0QmV0SGlzdG9yeSh0aGlzLnBhZ2VJbmRleCAqIDYsIDIwKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdnZXRCZXRIaXN0b3J5JywgZGF0YSk7XG5cdFx0XHRcdHRoaXMucHJvY2Vzc0RhdGEoZGF0YSk7XG5cdFx0fSk7XG5cdFxuXHR9XG5cblx0cHVibGljIFNob3coKSB7XG5cdFx0XHR0aGlzLmNvbnRlbnQuYWN0aXZlID0gdHJ1ZTtcdFxuXHR9XG5cblx0cHVibGljIEhpZGUoKSB7XG5cdFx0dGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuXHR9XG5cblx0cHJvdGVjdGVkIHByb2Nlc3NEYXRhKGhpc3RvcnlEYXRhOiBhbnkpIHtcblx0XHRcblx0XHRoaXN0b3J5RGF0YS5kYXRhLmZvckVhY2goKGRhdGEpID0+IHtcblx0XHRcdGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJJdGVtKTtcblx0XHRcdGxldCBpdGVtQ29tcG9uZW50ID0gaXRlbS5nZXRDb21wb25lbnQoRzEwMDlQb3B1cEhpc3RvcnlJdGVtKTtcdFx0XG5cdFx0XHRsZXQgdGltZTogc3RyaW5nID0gZm9ybWF0RERNTUhIbW1TUyhkYXRhLnRpbWUpO1xuXHRcdFx0aXRlbUNvbXBvbmVudC5TZXRJbmZvSXRlbShkYXRhLnNlc3Npb24sIHRpbWUsIGRhdGEudG90YWxCZXQsIGRhdGEudG90YWxXaW4sZGF0YS5zcGluRGF0YSk7XG5cdFx0XHRpdGVtLnNldFBhcmVudCh0aGlzLmNvbnRlbnRWaWV3KTtcblx0XHR9KTtcblx0fVxuXG59XG4iXX0=