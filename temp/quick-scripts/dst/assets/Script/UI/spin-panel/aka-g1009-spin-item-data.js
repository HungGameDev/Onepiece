
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/spin-panel/aka-g1009-spin-item-data.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5de3fSpaV9Izo/HK4K6iz1j', 'aka-g1009-spin-item-data');
// Script/UI/spin-panel/aka-g1009-spin-item-data.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G1009SpinItemData = void 0;
var G1009SpinItemData = /** @class */ (function () {
    function G1009SpinItemData() {
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
    return G1009SpinItemData;
}());
exports.G1009SpinItemData = G1009SpinItemData;
var ReelDefaultData = [
    "Ace", "Jack", "King", "Queen", "Ace",
    "Bonus", "Wild", "Scatter", "Jack", "Ace",
    "King", "Queen", "Ace", "Jack", "Ace", "Wild"
];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvc3Bpbi1wYW5lbC9ha2EtZzEwMDktc3Bpbi1pdGVtLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtRQUNJLGlCQUFZLEdBQVcsV0FBVyxDQUFDO1FBQ25DLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLDJCQUFzQixHQUFXLENBQUMsQ0FBQztRQUNuQyxvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM1Qiw4QkFBeUIsR0FBVyxHQUFHLENBQUM7UUFDeEMsOEJBQXlCLEdBQVcsR0FBRyxDQUFDO1FBQ3hDLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQiwwQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFDdEMsb0JBQWUsR0FBYSxlQUFlLENBQUM7SUFDaEQsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmYSw4Q0FBaUI7QUFpQi9CLElBQU0sZUFBZSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLO0lBQ25DLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLO0lBQ3pDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTTtDQUNsRCxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgIGNsYXNzIEcxMDA5U3Bpbkl0ZW1EYXRhIHtcbiAgICBSZWVsRGF0YVR5cGU6IHN0cmluZyA9IFwicmVlbC1kYXRhXCI7XG4gICAgU2Nyb2xsU3BlZWQ6IG51bWJlciA9IDYwO1xuICAgIFRlbnNpb25TcGVlZE11bHRpcGxpZXI6IG51bWJlciA9IDI7XG4gICAgVGVuc2lvbkR1cmF0aW9uOiBudW1iZXIgPSAyO1xuICAgIERlbGF5VGltZVNwaW5CZXR3ZWVuSXRlbXM6IG51bWJlciA9IDAuMTtcbiAgICBEZWxheVRpbWVTdG9wQmV0d2Vlbkl0ZW1zOiBudW1iZXIgPSAwLjE7XG4gICAgTW9tZW50dW1SYW5nZTogbnVtYmVyID0gMDtcbiAgICBNb21lbnR1bVNwZWVkOiBudW1iZXIgPSAwO1xuICAgIEJvdW5jZVJhbmdlOiBudW1iZXIgPSAwO1xuICAgIEJvdW5jZVNwZWVkOiBudW1iZXIgPSAwO1xuICAgIFJlZWxEYXRhOiBudW1iZXIgPSAxMDtcbiAgICBJc0JsdXJTcGluOiBib29sZWFuID0gdHJ1ZTtcbiAgICBJc0Rpc2FibGVUb3BBbmRCb3R0b206IGJvb2xlYW4gPSB0cnVlO1xuICAgIFJlZWxEZWZhdWx0RGF0YTogc3RyaW5nW10gPSBSZWVsRGVmYXVsdERhdGE7XG59XG5cbmNvbnN0IFJlZWxEZWZhdWx0RGF0YSA9IFtcbiAgICBcIkFjZVwiLCBcIkphY2tcIiwgXCJLaW5nXCIsIFwiUXVlZW5cIiwgXCJBY2VcIlxuICAgICwgXCJCb251c1wiLCBcIldpbGRcIiwgXCJTY2F0dGVyXCIsIFwiSmFja1wiLCBcIkFjZVwiXG4gICAgLCBcIktpbmdcIiwgXCJRdWVlblwiLCBcIkFjZVwiLCBcIkphY2tcIiwgXCJBY2VcIiwgXCJXaWxkXCIgICAgXG5dXG4iXX0=