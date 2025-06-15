"use strict";
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