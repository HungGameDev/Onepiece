
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-jackpot-info-content.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a97b2DoT8JAqKZ2d44a9rhT', 'aka-g1009-jackpot-info-content');
// Script/UI/popup/aka-g1009-jackpot-info-content.ts

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
var aka_g1009_bet_model_1 = require("../../models/aka-g1009-bet-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009JackpotInfoActor = /** @class */ (function (_super) {
    __extends(G1009JackpotInfoActor, _super);
    function G1009JackpotInfoActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelsBet = [];
        _this.labelsDescription = [];
        _this.content = null;
        return _this;
    }
    G1009JackpotInfoActor.prototype.start = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register('JackpotShowMultiple', this.show.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register('JackpotHideMultiple', this.hide.bind(this));
    };
    G1009JackpotInfoActor.prototype.show = function (datas) {
        var arr = Object.entries(datas);
        for (var index = 0; index < arr.length; index++) {
            var element = arr[index][1];
            this.labelsBet[index].string = "P" + aka_g1009_bet_model_1.G1009BetModel.GetInstance().GetBetPointByIndex(index).toString();
            this.labelsDescription[index].string = element.message;
        }
        this.content.active = true;
        console.log(datas);
    };
    G1009JackpotInfoActor.prototype.hide = function () {
        this.content.active = false;
    };
    __decorate([
        property(cc.Label)
    ], G1009JackpotInfoActor.prototype, "labelsBet", void 0);
    __decorate([
        property(cc.Label)
    ], G1009JackpotInfoActor.prototype, "labelsDescription", void 0);
    __decorate([
        property(cc.Node)
    ], G1009JackpotInfoActor.prototype, "content", void 0);
    G1009JackpotInfoActor = __decorate([
        ccclass
    ], G1009JackpotInfoActor);
    return G1009JackpotInfoActor;
}(cc.Component));
exports.default = G1009JackpotInfoActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LWphY2twb3QtaW5mby1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUE4RTtBQUM5RSx3RUFBaUU7QUFFM0QsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUQseUNBQVk7SUFBL0Q7UUFBQSxxRUE4QkM7UUEzQkcsZUFBUyxHQUFlLEVBQUUsQ0FBQztRQUczQix1QkFBaUIsR0FBZSxFQUFFLENBQUM7UUFHbkMsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUFxQjVCLENBQUM7SUFuQlUscUNBQUssR0FBWjtRQUNJLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTyxvQ0FBSSxHQUFaLFVBQWEsS0FBVTtRQUNuQixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzdDLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRSxHQUFHLEdBQUMsbUNBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDMUQ7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU8sb0NBQUksR0FBWjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBMUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NERBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvRUFDZ0I7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDTTtJQVRQLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBOEJ6QztJQUFELDRCQUFDO0NBOUJELEFBOEJDLENBOUJrRCxFQUFFLENBQUMsU0FBUyxHQThCOUQ7a0JBOUJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IHsgRzEwMDlCZXRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYWthLWcxMDA5LWJldC1tb2RlbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5SmFja3BvdEluZm9BY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxzQmV0OiBjYy5MYWJlbFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxzRGVzY3JpcHRpb246IGNjLkxhYmVsW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWR7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoJ0phY2twb3RTaG93TXVsdGlwbGUnLCB0aGlzLnNob3cuYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoJ0phY2twb3RIaWRlTXVsdGlwbGUnLHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3coZGF0YXM6IGFueSk6IHZvaWR7XG4gICAgICAgIGxldCBhcnIgPSBPYmplY3QuZW50cmllcyhkYXRhcyk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXJyW2luZGV4XVsxXTtcbiAgICAgICAgICAgIHRoaXMubGFiZWxzQmV0W2luZGV4XS5zdHJpbmcgPVwiUFwiK0cxMDA5QmV0TW9kZWwuR2V0SW5zdGFuY2UoKS5HZXRCZXRQb2ludEJ5SW5kZXgoaW5kZXgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxhYmVsc0Rlc2NyaXB0aW9uW2luZGV4XS5zdHJpbmcgPSBlbGVtZW50Lm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGUoKTogdm9pZHtcbiAgICAgICAgdGhpcy5jb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==