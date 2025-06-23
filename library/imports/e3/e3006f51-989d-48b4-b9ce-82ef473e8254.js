"use strict";
cc._RF.push(module, 'e30069RmJ1ItLnOgu9HPoJU', 'Slot45-balance-model');
// Script/models/Slot45-balance-model.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot45BalanceModel = void 0;
var Slot45BalanceModel = /** @class */ (function () {
    function Slot45BalanceModel() {
        this.balance = 0;
    }
    Slot45BalanceModel.GetInstance = function () {
        if (!Slot45BalanceModel.instance)
            Slot45BalanceModel.instance = new Slot45BalanceModel();
        return Slot45BalanceModel.instance;
    };
    Slot45BalanceModel.prototype.SetBalance = function (balance) {
        this.balance = balance;
    };
    Slot45BalanceModel.prototype.GetBalance = function () {
        return this.balance;
    };
    return Slot45BalanceModel;
}());
exports.Slot45BalanceModel = Slot45BalanceModel;

cc._RF.pop();