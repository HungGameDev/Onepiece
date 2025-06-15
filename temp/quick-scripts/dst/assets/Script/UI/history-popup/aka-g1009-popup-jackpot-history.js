
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/history-popup/aka-g1009-popup-jackpot-history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35ab4E8T3ZCLbBrgPGPmvHJ', 'aka-g1009-popup-jackpot-history');
// Script/UI/history-popup/aka-g1009-popup-jackpot-history.ts

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
var aka_date_util_1 = require("../../base/Util/aka_date-util");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_popup_history_1 = require("./aka-g1009-popup-history");
var aka_g1009_popup_jackpot_history_item_1 = require("./aka-g1009-popup-jackpot-history-item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009PopupLeaderBoard = /** @class */ (function (_super) {
    __extends(G1009PopupLeaderBoard, _super);
    function G1009PopupLeaderBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allData = null;
        _this.jackpotData = null;
        return _this;
    }
    G1009PopupLeaderBoard.prototype.start = function () {
        this.Init();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("OpenJackpotH", this.Show.bind(this));
    };
    G1009PopupLeaderBoard.prototype.Init = function () {
        var _this = this;
        this.gameManager1009.getJPHistory(this.pageIndex * 6, 20).then(function (data) {
            console.log('getJPHistory', data);
            _this.allData = data.data;
            _this.jackpotData = _this.allData.filter(function (x) { return x.type == 'Jackpot'; });
            _this.processData(data.data);
        });
    };
    G1009PopupLeaderBoard.prototype.processData = function (historyData) {
        for (var index = 0; index < historyData.length; index++) {
            var data = historyData[index];
            var item = cc.instantiate(this.prefabItem);
            var itemComponent = item.getComponent(aka_g1009_popup_jackpot_history_item_1.default);
            var time = aka_date_util_1.formatDDMMHHmmSS(data.time);
            itemComponent.SetInfoItem(data.session, time, data.wonUser, data.win, data.type);
            item.setParent(this.contentView);
        }
    };
    G1009PopupLeaderBoard.prototype.OnAllClick = function () {
        this.contentView.destroyAllChildren();
        this.processData(this.allData);
    };
    G1009PopupLeaderBoard.prototype.OnJackPotClick = function () {
        this.contentView.destroyAllChildren();
        this.processData(this.jackpotData);
    };
    G1009PopupLeaderBoard = __decorate([
        ccclass
    ], G1009PopupLeaderBoard);
    return G1009PopupLeaderBoard;
}(aka_g1009_popup_history_1.default));
exports.default = G1009PopupLeaderBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvaGlzdG9yeS1wb3B1cC9ha2EtZzEwMDktcG9wdXAtamFja3BvdC1oaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUFpRTtBQUNqRSxxRkFBOEU7QUFDOUUscUVBQTBEO0FBQzFELCtGQUFrRjtBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBaUI7SUFBcEU7UUFBQSxxRUE2Q0M7UUEzQ1EsYUFBTyxHQUFVLElBQUksQ0FBQztRQUN0QixpQkFBVyxHQUFVLElBQUksQ0FBQzs7SUEwQ25DLENBQUM7SUF4Q1MscUNBQUssR0FBTDtRQUNSLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVoRixDQUFDO0lBQ1Msb0NBQUksR0FBSjtRQUFBLGlCQU9UO1FBTkEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFuQixDQUFtQixDQUFDLENBQUM7WUFDakUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRVMsMkNBQVcsR0FBckIsVUFBc0IsV0FBa0I7UUFFdkMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDeEQsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsOENBQTRCLENBQUMsQ0FBQztZQUNwRSxJQUFJLElBQUksR0FBVyxnQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBRWpDO0lBQ0YsQ0FBQztJQUVNLDBDQUFVLEdBQWpCO1FBR0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSw4Q0FBYyxHQUFyQjtRQUVDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBM0NtQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQTZDekM7SUFBRCw0QkFBQztDQTdDRCxBQTZDQyxDQTdDa0QsaUNBQWlCLEdBNkNuRTtrQkE3Q29CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdERETU1ISG1tU1MgfSBmcm9tIFwiLi4vLi4vYmFzZS9VdGlsL2FrYV9kYXRlLXV0aWxcIjtcbmltcG9ydCB7IEcxMDA5RXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2Jhc2UvZXZlbnRzL2FrYS1nMTAwOS1ldmVudC1tYW5hZ2VyXCI7XG5pbXBvcnQgRzEwMDlQb3B1cEhpc3RvcnkgZnJvbSBcIi4vYWthLWcxMDA5LXBvcHVwLWhpc3RvcnlcIjtcbmltcG9ydCBHMTAwOVBvcHVwSmFja3BvdEhpc3RvcnlJdGVtIGZyb20gXCIuL2FrYS1nMTAwOS1wb3B1cC1qYWNrcG90LWhpc3RvcnktaXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRzEwMDlQb3B1cExlYWRlckJvYXJkIGV4dGVuZHMgRzEwMDlQb3B1cEhpc3Rvcnkge1xuXG5cdHByaXZhdGUgYWxsRGF0YTogYW55W10gPSBudWxsO1xuXHRwcml2YXRlIGphY2twb3REYXRhOiBhbnlbXSA9IG51bGw7XG5cblx0b3ZlcnJpZGUgc3RhcnQoKTogdm9pZCB7XG5cdFx0dGhpcy5Jbml0KCk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIk9wZW5KYWNrcG90SFwiLCB0aGlzLlNob3cuYmluZCh0aGlzKSk7XG5cblx0fVxuXHRvdmVycmlkZSAgSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmdhbWVNYW5hZ2VyMTAwOS5nZXRKUEhpc3RvcnkodGhpcy5wYWdlSW5kZXggKiA2LCAyMCkudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2dldEpQSGlzdG9yeScsIGRhdGEpO1xuXHRcdFx0dGhpcy5hbGxEYXRhID0gZGF0YS5kYXRhO1xuXHRcdFx0dGhpcy5qYWNrcG90RGF0YSA9IHRoaXMuYWxsRGF0YS5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ0phY2twb3QnKTtcblx0XHRcdHRoaXMucHJvY2Vzc0RhdGEoZGF0YS5kYXRhKTtcblx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBwcm9jZXNzRGF0YShoaXN0b3J5RGF0YTogYW55W10pIHtcblxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBoaXN0b3J5RGF0YS5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGNvbnN0IGRhdGEgPSBoaXN0b3J5RGF0YVtpbmRleF07XG5cdFx0XHRsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiSXRlbSk7XG5cdFx0XHRsZXQgaXRlbUNvbXBvbmVudCA9IGl0ZW0uZ2V0Q29tcG9uZW50KEcxMDA5UG9wdXBKYWNrcG90SGlzdG9yeUl0ZW0pO1x0XHRcblx0XHRcdGxldCB0aW1lOiBzdHJpbmcgPSBmb3JtYXRERE1NSEhtbVNTKGRhdGEudGltZSk7XG5cdFx0XHRpdGVtQ29tcG9uZW50LlNldEluZm9JdGVtKGRhdGEuc2Vzc2lvbiwgdGltZSwgZGF0YS53b25Vc2VyLGRhdGEud2luLCBkYXRhLnR5cGUpO1xuXHRcdFx0aXRlbS5zZXRQYXJlbnQodGhpcy5jb250ZW50Vmlldyk7XG5cdFx0XHRcblx0XHR9XHRcblx0fVxuXG5cdHB1YmxpYyBPbkFsbENsaWNrKClcblx0e1xuXHRcdFxuXHRcdHRoaXMuY29udGVudFZpZXcuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cdFx0dGhpcy5wcm9jZXNzRGF0YSh0aGlzLmFsbERhdGEpO1xuXHR9XG5cblx0cHVibGljIE9uSmFja1BvdENsaWNrKCkge1xuXHRcdFxuXHRcdHRoaXMuY29udGVudFZpZXcuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cdFx0dGhpcy5wcm9jZXNzRGF0YSh0aGlzLmphY2twb3REYXRhKTtcblx0fVxuXG59XG4iXX0=