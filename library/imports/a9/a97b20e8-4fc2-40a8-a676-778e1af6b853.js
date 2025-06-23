"use strict";
cc._RF.push(module, 'a97b2DoT8JAqKZ2d44a9rhT', 'Slot45-jackpot-info-content');
// Script/UI/popup/Slot45-jackpot-info-content.ts

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
var Slot45_bet_model_1 = require("../../models/Slot45-bet-model");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45JackpotInfoActor = /** @class */ (function (_super) {
    __extends(Slot45JackpotInfoActor, _super);
    function Slot45JackpotInfoActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelsBet = [];
        _this.labelsDescription = [];
        _this.content = null;
        return _this;
    }
    Slot45JackpotInfoActor.prototype.start = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register('JackpotShowMultiple', this.show.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register('JackpotHideMultiple', this.hide.bind(this));
    };
    Slot45JackpotInfoActor.prototype.show = function (datas) {
        var arr = Object.entries(datas);
        for (var index = 0; index < arr.length; index++) {
            var element = arr[index][1];
            this.labelsBet[index].string = "P" + Slot45_bet_model_1.Slot45BetModel.GetInstance().GetBetPointByIndex(index).toString();
            this.labelsDescription[index].string = element.message;
        }
        this.content.active = true;
        console.log(datas);
    };
    Slot45JackpotInfoActor.prototype.hide = function () {
        this.content.active = false;
    };
    __decorate([
        property(cc.Label)
    ], Slot45JackpotInfoActor.prototype, "labelsBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot45JackpotInfoActor.prototype, "labelsDescription", void 0);
    __decorate([
        property(cc.Node)
    ], Slot45JackpotInfoActor.prototype, "content", void 0);
    Slot45JackpotInfoActor = __decorate([
        ccclass
    ], Slot45JackpotInfoActor);
    return Slot45JackpotInfoActor;
}(cc.Component));
exports.default = Slot45JackpotInfoActor;

cc._RF.pop();