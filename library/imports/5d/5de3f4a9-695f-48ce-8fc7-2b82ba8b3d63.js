"use strict";
cc._RF.push(module, '5de3fSpaV9Izo/HK4K6iz1j', 'Slot45-spin-item-data');
// Script/UI/spin-panel/Slot45-spin-item-data.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot45SpinItemData = void 0;
var Slot45SpinItemData = /** @class */ (function () {
    function Slot45SpinItemData() {
        this.ReelDataType = "reel-data";
        this.ScrollSpeed = 60;
        this.TensionSpeedMultiplier = 2;
        this.TensionDuration = 2;
        this.DelayTimeSpinBetweenItems = 0.1;
        this.DelayTimeStopBetweenItems = 0.1;
        this.MomentumRange = 0;
        this.MomentumSpeed = 0;
        this.BounceRange = 0;
        this.BounceSpeed = 0;
        this.ReelData = 10;
        this.IsBlurSpin = true;
        this.IsDisableTopAndBottom = true;
        this.ReelDefaultData = ReelDefaultData;
    }
    return Slot45SpinItemData;
}());
exports.Slot45SpinItemData = Slot45SpinItemData;
var ReelDefaultData = [
    "Ace", "Jack", "King", "Queen", "Ace",
    "Bonus", "Jackpot", "Scatter", "Jack", "Ace",
    "King", "Queen", "Ace", "Jack", "Ace", "Jackpot"
];

cc._RF.pop();