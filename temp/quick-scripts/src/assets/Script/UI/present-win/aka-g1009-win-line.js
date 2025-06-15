"use strict";
cc._RF.push(module, '0366agUf6NF+r+LJWwYSyzs', 'aka-g1009-win-line');
// Script/UI/present-win/aka-g1009-win-line.ts

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
var G1009WinLineActor = /** @class */ (function (_super) {
    __extends(G1009WinLineActor, _super);
    function G1009WinLineActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lineIndex = -1;
        _this.image = null;
        return _this;
    }
    G1009WinLineActor.prototype.onLoad = function () {
        this.image = this.node.getComponent(cc.Sprite);
    };
    G1009WinLineActor.prototype.Show = function () {
        this.node.active = true;
    };
    G1009WinLineActor.prototype.Hide = function () {
        this.node.active = false;
    };
    __decorate([
        property
    ], G1009WinLineActor.prototype, "lineIndex", void 0);
    G1009WinLineActor = __decorate([
        ccclass
    ], G1009WinLineActor);
    return G1009WinLineActor;
}(cc.Component));
exports.default = G1009WinLineActor;

cc._RF.pop();