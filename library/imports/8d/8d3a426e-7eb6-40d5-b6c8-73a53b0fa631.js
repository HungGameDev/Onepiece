"use strict";
cc._RF.push(module, '8d3a4JufrZA1bbIc6U7D6Yx', 'aka-g1009-button-home');
// Script/UI/popup/aka-g1009-button-home.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009PopupError = /** @class */ (function (_super) {
    __extends(G1009PopupError, _super);
    function G1009PopupError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    G1009PopupError.prototype.onExitClick = function () {
        cc.director.loadScene('home-page');
    };
    G1009PopupError = __decorate([
        ccclass
    ], G1009PopupError);
    return G1009PopupError;
}(cc.Component));
exports.default = G1009PopupError;

cc._RF.pop();