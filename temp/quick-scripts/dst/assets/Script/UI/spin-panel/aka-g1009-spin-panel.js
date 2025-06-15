
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/spin-panel/aka-g1009-spin-panel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52feerC68JA74OBJ7NJdQMU', 'aka-g1009-spin-panel');
// Script/UI/spin-panel/aka-g1009-spin-panel.ts

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
var aka_g1009_game_config_1 = require("../../aka-g1009-game-config");
var aka_g1009_number_converter_1 = require("../../base/Util/aka-g1009-number-converter");
var aka_g1009_event_manager_1 = require("../../base/events/aka-g1009-event-manager");
var aka_g1009_spin_item_1 = require("./aka-g1009-spin-item");
var aka_g1009_spin_item_data_1 = require("./aka-g1009-spin-item-data");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var G1009SpinPanelActor = /** @class */ (function (_super) {
    __extends(G1009SpinPanelActor, _super);
    function G1009SpinPanelActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spinItems = [];
        _this.spinItemData = new aka_g1009_spin_item_data_1.G1009SpinItemData();
        _this.spinningItems = [];
        _this.isTurbo = false;
        _this.isStopImmediately = false;
        _this.spinItemScrollCount = 0;
        _this.spinItemStopCount = 0;
        _this.spinItemReadyBounceUpCount = 0;
        _this.isReadyToStop = false;
        _this.landingCount = 0;
        _this.tensions = [];
        _this.dataResponded = [];
        _this.expandWildIndices = [];
        _this.tweenHideItem = null;
        return _this;
    }
    G1009SpinPanelActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("Turbo", this.OnTurbo.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SpinStarted", this.OnSpinStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("DataRespond", this.onDataRespond.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("StopImmediately", this.stopImmediately.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SetItems", this.SetItems.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("SetOldItems", this.SetOldItems.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("TensionStarted", this.onTensionStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("TensionGenerated", this.onTensionGenerated.bind(this));
        //G1009EventManager.GetInstance().register("PresentWinStart", this.onHideItems.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ResetAllLine", this.onResetAllLine.bind(this));
        // G1009EventManager.GetInstance().register("JackpotStarted", this.onHideItems.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("PresentAllWinComplete", this.onPresentAllWinComplete.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ExpandWildStarted", this.onExpandWildStarted.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ExpandWildHide", this.onExpandWildHide.bind(this));
    };
    G1009SpinPanelActor.prototype.onLoad = function () {
        this.register();
        var initData = Object.assign({}, this.spinItemData);
        for (var index = 0; index < this.spinItems.length; index++) {
            var spinItem = this.spinItems[index];
            spinItem.Init(initData);
            spinItem.onStopSpinCompleted = this.spinItemStopCompleted.bind(this);
            spinItem.onReadyToStop = this.readyToStop.bind(this);
            spinItem.onReadyBounceUp = this.spinItemReadyBounceUp.bind(this);
        }
        this.reset();
        this.spinItems.forEach(function (spinItem) { return spinItem.Enable(); });
    };
    G1009SpinPanelActor.prototype.onTensionGenerated = function (indices) {
        this.tensions = indices;
    };
    G1009SpinPanelActor.prototype.onTensionStarted = function (id) {
        this.spinItems[id].TensionStarted();
    };
    G1009SpinPanelActor.prototype.readyToStop = function () {
        this.spinItemScrollCount++;
    };
    G1009SpinPanelActor.prototype.OnTurbo = function (isTurbo) {
        this.isTurbo = isTurbo;
    };
    G1009SpinPanelActor.prototype.onDataRespond = function (spinResult) {
        var _this = this;
        this.dataResponded = spinResult;
        if (this.isStopImmediately && this.checkReadyToStop()) {
            this.stopSpin(spinResult);
        }
        else {
            aka_g1009_number_converter_1.default.Instance().WaitUntil(this.checkReadyToStop.bind(this)).then(function () {
                _this.stopSpin(spinResult);
            });
        }
    };
    G1009SpinPanelActor.prototype.OnSpinStarted = function () {
        this.reset();
        this.resetExpandWild();
        this.spinItems.forEach(function (spinItem) { return spinItem.Enable(); });
        this.spin(this.isTurbo);
        if (this.isTurbo === true) {
            this.stopImmediately();
        }
    };
    G1009SpinPanelActor.prototype.spin = function (isTurbo) {
        var _this = this;
        this.spinningItems = this.spinItems;
        var delayTime = isTurbo ? 0 : this.spinItemData.DelayTimeSpinBetweenItems;
        var _loop_1 = function (index) {
            var spinItem = this_1.spinItems[index];
            var seq = cc.sequence(cc.delayTime(delayTime * index), cc.callFunc(function () {
                spinItem.Spin();
                if (index == _this.spinItems.length - 1) {
                    _this.isReadyToStop = true;
                }
            }, this_1, spinItem));
            this_1.node.runAction(seq);
        };
        var this_1 = this;
        for (var index = 0; index < this.spinItems.length; index++) {
            _loop_1(index);
        }
    };
    G1009SpinPanelActor.prototype.stopImmediately = function () {
        var _this = this;
        this.landingCount = 0;
        this.isStopImmediately = true;
        if (this.checkDataResponde() && this.checkReadyToStop()) {
            this.node.stopAllActions();
            for (var index = this.spinItemStopCount; index < this.spinningItems.length; index++) {
                if (this.spinningItems[index].state == aka_g1009_spin_item_1.ESpinningState.Idle) {
                    this.spinningItems[index].Spin();
                }
            }
            this.spinningItems.forEach(function (i) { return i.StopImmediately(_this.isTurbo); });
            this.spinningItems.forEach(function (i) { return i.Stop(_this.dataResponded); });
            if (this.spinItemStopCount >= this.spinningItems.length) {
                this.checkSpinEnd();
            }
        }
    };
    G1009SpinPanelActor.prototype.checkReadyToStop = function () {
        return this.isReadyToStop && this.spinItemScrollCount == this.spinItems.length;
    };
    G1009SpinPanelActor.prototype.spinItemStopCompleted = function (cellIndices) {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("SpinItemStopCompleted", {
            cellIndices: cellIndices,
        });
        this.spinItemStopCount++;
        this.checkSpinEnd();
    };
    G1009SpinPanelActor.prototype.spinItemReadyBounceUp = function () {
        this.spinItemReadyBounceUpCount++;
        if (this.isStopImmediately && this.spinItemReadyBounceUpCount == this.spinningItems.length) {
            this.spinItems.forEach(function (spinItem) { return spinItem.AllowBounceUp(); });
        }
    };
    G1009SpinPanelActor.prototype.checkSpinEnd = function () {
        var isSpinEnd = this.spinItemStopCount >= this.spinningItems.length && this.landingCount == 0;
        if (isSpinEnd) {
            this.spinEnd();
        }
    };
    G1009SpinPanelActor.prototype.spinEnd = function () {
        this.reset();
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("SpinComplete");
    };
    G1009SpinPanelActor.prototype.stopSpin = function (items) {
        if (this.isStopImmediately) {
            this.stopImmediately();
            return;
        }
        var _loop_2 = function (index) {
            var spinItem = this_2.spinningItems[index];
            var tensionDuration = 0;
            if (this_2.tensions.indexOf(index) != -1) {
                tensionDuration = this_2.spinItemData.TensionDuration * (this_2.tensions.indexOf(index) + 1);
            }
            var seq = cc.sequence(cc.delayTime(this_2.spinItemData.DelayTimeStopBetweenItems * index + tensionDuration), cc.callFunc(function () {
                spinItem.Stop(items);
            }, this_2, spinItem));
            this_2.node.runAction(seq);
        };
        var this_2 = this;
        for (var index = 0; index < this.spinningItems.length; index++) {
            _loop_2(index);
        }
    };
    G1009SpinPanelActor.prototype.onExpandWildStarted = function (expandWildIndices) {
        var _this = this;
        this.expandWildIndices = Object.assign([], expandWildIndices);
        expandWildIndices.forEach(function (cellIndex) {
            var reelIndex = aka_g1009_game_config_1.SlottyParameter.GetReelIndex(cellIndex);
            cc.tween(_this.spinItems[reelIndex].node)
                .to(0.1, { opacity: 0 })
                .start();
        });
    };
    G1009SpinPanelActor.prototype.onExpandWildHide = function () {
        this.spinItems.forEach(function (spinItem) {
            spinItem.node.y = 0;
            spinItem.node.opacity = 255;
        });
    };
    G1009SpinPanelActor.prototype.onLandingGenerated = function (data) {
        this.landingCount = data.length;
    };
    G1009SpinPanelActor.prototype.onLandingStarted = function () {
    };
    G1009SpinPanelActor.prototype.onLandingCompleted = function () {
        this.landingCount--;
        this.checkSpinEnd();
    };
    G1009SpinPanelActor.prototype.SetItems = function (reelData) {
        this.spinItems.forEach(function (spinItem) { return spinItem.SetItems(reelData); });
    };
    G1009SpinPanelActor.prototype.SetOldItems = function (data) {
        var indices = data.expandWildIndices.map(function (index) { return aka_g1009_game_config_1.SlottyParameter.GetReelIndex(index); });
        this.spinItems.forEach(function (spinItem, index) {
            if (!indices.includes(aka_g1009_game_config_1.SlottyParameter.GetReelIndex(index))) {
                spinItem.node.opacity = 255;
            }
            else {
                spinItem.node.opacity = 0;
            }
        });
        this.spinItems.forEach(function (spinItem) { return spinItem.SetOldItems(data.Cells); });
        if (data.WinLines.length > 0) {
            this.onHideItems();
        }
    };
    G1009SpinPanelActor.prototype.onHideItems = function () {
        var _this = this;
        // this.spinItems.forEach(spinItem => spinItem.node.opacity = 0)
        this.tweenHideItem = cc.tween(this.node).delay(0.1).call(function () {
            _this.spinItems.forEach(function (spinItem) { return spinItem.node.opacity = 0; });
        }).start();
    };
    G1009SpinPanelActor.prototype.onResetAllLine = function () {
        this.resetItemNotExpandWild();
    };
    G1009SpinPanelActor.prototype.checkDataResponde = function () {
        return this.dataResponded.length > 0;
    };
    G1009SpinPanelActor.prototype.reset = function () {
        this.isReadyToStop = false;
        this.spinItemReadyBounceUpCount = 0;
        this.isStopImmediately = false;
        this.spinItemStopCount = 0;
        this.spinItemScrollCount = 0;
        this.spinningItems = [];
        this.tensions = [];
        this.spinItems.forEach(function (spinItem) { return spinItem.Reset(); });
        this.resetItemNotExpandWild();
        this.dataResponded = [];
    };
    G1009SpinPanelActor.prototype.resetItemNotExpandWild = function () {
        this.tweenHideItem && this.tweenHideItem.stop();
        var indices = this.expandWildIndices.map(function (index) { return aka_g1009_game_config_1.SlottyParameter.GetReelIndex(index); });
        this.spinItems.forEach(function (spinItem, index) {
            if (!indices.includes(aka_g1009_game_config_1.SlottyParameter.GetReelIndex(index))) {
                spinItem.node.opacity = 255;
            }
            else {
                spinItem.node.opacity = 0;
            }
        });
    };
    G1009SpinPanelActor.prototype.resetExpandWild = function () {
        this.expandWildIndices = [];
        this.spinItems.forEach(function (spinItem) { return spinItem.node.opacity = 255; });
    };
    G1009SpinPanelActor.prototype.onPresentAllWinComplete = function () {
        this.spinItems.forEach(function (spinItem) { return spinItem.Reset(); });
        this.resetItemNotExpandWild();
    };
    __decorate([
        property(aka_g1009_spin_item_1.default)
    ], G1009SpinPanelActor.prototype, "spinItems", void 0);
    G1009SpinPanelActor = __decorate([
        ccclass
    ], G1009SpinPanelActor);
    return G1009SpinPanelActor;
}(cc.Component));
exports.default = G1009SpinPanelActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvc3Bpbi1wYW5lbC9ha2EtZzEwMDktc3Bpbi1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBOEQ7QUFDOUQseUZBQW1FO0FBQ25FLHFGQUE4RTtBQUM5RSw2REFBMkU7QUFDM0UsdUVBQStEO0FBQ3pELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBb1JDO1FBalJBLGVBQVMsR0FBeUIsRUFBRSxDQUFDO1FBRTdCLGtCQUFZLEdBQXNCLElBQUksNENBQWlCLEVBQUUsQ0FBQztRQUMxRCxtQkFBYSxHQUF5QixFQUFFLENBQUM7UUFDekMsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6Qix1QkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMseUJBQW1CLEdBQVcsQ0FBQyxDQUFDO1FBQ2hDLHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QixnQ0FBMEIsR0FBVyxDQUFDLENBQUM7UUFDdkMsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0Isa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3Qix1QkFBaUIsR0FBYSxFQUFFLENBQUM7UUFDakMsbUJBQWEsR0FBYSxJQUFJLENBQUM7O0lBbVF4QyxDQUFDO0lBalFRLHNDQUFRLEdBQWhCO1FBQ0MsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNFLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFB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QUVPLHFEQUF1QixHQUEvQjtRQUNDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQWhSRDtRQURDLFFBQVEsQ0FBQyw2QkFBa0IsQ0FBQzswREFDUTtJQUhqQixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQW9SdkM7SUFBRCwwQkFBQztDQXBSRCxBQW9SQyxDQXBSZ0QsRUFBRSxDQUFDLFNBQVMsR0FvUjVEO2tCQXBSb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2xvdHR5UGFyYW1ldGVyIH0gZnJvbSBcIi4uLy4uL2FrYS1nMTAwOS1nYW1lLWNvbmZpZ1wiO1xuaW1wb3J0IEcxMDA5VXRpbCBmcm9tIFwiLi4vLi4vYmFzZS9VdGlsL2FrYS1nMTAwOS1udW1iZXItY29udmVydGVyXCI7XG5pbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuaW1wb3J0IEcxMDA5U3Bpbkl0ZW1BY3RvciwgeyBFU3Bpbm5pbmdTdGF0ZSB9IGZyb20gXCIuL2FrYS1nMTAwOS1zcGluLWl0ZW1cIjtcbmltcG9ydCB7IEcxMDA5U3Bpbkl0ZW1EYXRhIH0gZnJvbSBcIi4vYWthLWcxMDA5LXNwaW4taXRlbS1kYXRhXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5U3BpblBhbmVsQWN0b3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cdEBwcm9wZXJ0eShHMTAwOVNwaW5JdGVtQWN0b3IpXG5cdHNwaW5JdGVtczogRzEwMDlTcGluSXRlbUFjdG9yW10gPSBbXTtcblxuXHRwcml2YXRlIHNwaW5JdGVtRGF0YTogRzEwMDlTcGluSXRlbURhdGEgPSBuZXcgRzEwMDlTcGluSXRlbURhdGEoKTtcblx0cHJpdmF0ZSBzcGlubmluZ0l0ZW1zOiBHMTAwOVNwaW5JdGVtQWN0b3JbXSA9IFtdO1xuXHRwcml2YXRlIGlzVHVyYm86IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBpc1N0b3BJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIHNwaW5JdGVtU2Nyb2xsQ291bnQ6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgc3Bpbkl0ZW1TdG9wQ291bnQ6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgc3Bpbkl0ZW1SZWFkeUJvdW5jZVVwQ291bnQ6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgaXNSZWFkeVRvU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGxhbmRpbmdDb3VudDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSB0ZW5zaW9uczogbnVtYmVyW10gPSBbXTtcblx0cHJpdmF0ZSBkYXRhUmVzcG9uZGVkOiBzdHJpbmdbXSA9IFtdO1xuXHRwcml2YXRlIGV4cGFuZFdpbGRJbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xuXHRwcml2YXRlIHR3ZWVuSGlkZUl0ZW06IGNjLlR3ZWVuID0gbnVsbDtcblxuXHRwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJUdXJib1wiLCB0aGlzLk9uVHVyYm8uYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNwaW5TdGFydGVkXCIsIHRoaXMuT25TcGluU3RhcnRlZC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiRGF0YVJlc3BvbmRcIiwgdGhpcy5vbkRhdGFSZXNwb25kLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTdG9wSW1tZWRpYXRlbHlcIiwgdGhpcy5zdG9wSW1tZWRpYXRlbHkuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNldEl0ZW1zXCIsIHRoaXMuU2V0SXRlbXMuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNldE9sZEl0ZW1zXCIsIHRoaXMuU2V0T2xkSXRlbXMuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlRlbnNpb25TdGFydGVkXCIsIHRoaXMub25UZW5zaW9uU3RhcnRlZC5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiVGVuc2lvbkdlbmVyYXRlZFwiLCB0aGlzLm9uVGVuc2lvbkdlbmVyYXRlZC5iaW5kKHRoaXMpKTtcblx0XHQvL0cxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJQcmVzZW50V2luU3RhcnRcIiwgdGhpcy5vbkhpZGVJdGVtcy5iaW5kKHRoaXMpKTtcblx0XHRHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiUmVzZXRBbGxMaW5lXCIsIHRoaXMub25SZXNldEFsbExpbmUuYmluZCh0aGlzKSk7XG5cdFx0Ly8gRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkphY2twb3RTdGFydGVkXCIsIHRoaXMub25IaWRlSXRlbXMuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlByZXNlbnRBbGxXaW5Db21wbGV0ZVwiLCB0aGlzLm9uUHJlc2VudEFsbFdpbkNvbXBsZXRlLmJpbmQodGhpcykpO1xuXHRcdEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJFeHBhbmRXaWxkU3RhcnRlZFwiLCB0aGlzLm9uRXhwYW5kV2lsZFN0YXJ0ZWQuYmluZCh0aGlzKSk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIkV4cGFuZFdpbGRIaWRlXCIsIHRoaXMub25FeHBhbmRXaWxkSGlkZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG5cdFx0dGhpcy5yZWdpc3RlcigpO1xuXHRcdGxldCBpbml0RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3Bpbkl0ZW1EYXRhKTtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zcGluSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRjb25zdCBzcGluSXRlbSA9IHRoaXMuc3Bpbkl0ZW1zW2luZGV4XTtcblx0XHRcdHNwaW5JdGVtLkluaXQoaW5pdERhdGEpO1xuXHRcdFx0c3Bpbkl0ZW0ub25TdG9wU3BpbkNvbXBsZXRlZCA9IHRoaXMuc3Bpbkl0ZW1TdG9wQ29tcGxldGVkLmJpbmQodGhpcyk7XG5cdFx0XHRzcGluSXRlbS5vblJlYWR5VG9TdG9wID0gdGhpcy5yZWFkeVRvU3RvcC5iaW5kKHRoaXMpO1xuXHRcdFx0c3Bpbkl0ZW0ub25SZWFkeUJvdW5jZVVwID0gdGhpcy5zcGluSXRlbVJlYWR5Qm91bmNlVXAuYmluZCh0aGlzKTtcblx0XHR9XG5cdFx0dGhpcy5yZXNldCgpO1xuXHRcdHRoaXMuc3Bpbkl0ZW1zLmZvckVhY2goc3Bpbkl0ZW0gPT4gc3Bpbkl0ZW0uRW5hYmxlKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBvblRlbnNpb25HZW5lcmF0ZWQoaW5kaWNlczogbnVtYmVyW10pOiB2b2lkIHtcblx0XHR0aGlzLnRlbnNpb25zID0gaW5kaWNlcztcblx0fVxuXG5cdHByaXZhdGUgb25UZW5zaW9uU3RhcnRlZChpZDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5zcGluSXRlbXNbaWRdLlRlbnNpb25TdGFydGVkKCk7XG5cdH1cblxuXHRwcml2YXRlIHJlYWR5VG9TdG9wKCk6IHZvaWQge1xuXHRcdHRoaXMuc3Bpbkl0ZW1TY3JvbGxDb3VudCsrO1xuXHR9XG5cblx0cHJpdmF0ZSBPblR1cmJvKGlzVHVyYm86IGJvb2xlYW4pIHtcblx0XHR0aGlzLmlzVHVyYm8gPSBpc1R1cmJvO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkRhdGFSZXNwb25kKHNwaW5SZXN1bHQ6IHN0cmluZ1tdKSB7XG5cdFx0dGhpcy5kYXRhUmVzcG9uZGVkID0gc3BpblJlc3VsdDtcblx0XHRpZiAodGhpcy5pc1N0b3BJbW1lZGlhdGVseSAmJiB0aGlzLmNoZWNrUmVhZHlUb1N0b3AoKSkge1xuXHRcdFx0dGhpcy5zdG9wU3BpbihzcGluUmVzdWx0KTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRHMTAwOVV0aWwuSW5zdGFuY2UoKS5XYWl0VW50aWwodGhpcy5jaGVja1JlYWR5VG9TdG9wLmJpbmQodGhpcykpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN0b3BTcGluKHNwaW5SZXN1bHQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIE9uU3BpblN0YXJ0ZWQoKSB7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHRcdHRoaXMucmVzZXRFeHBhbmRXaWxkKCk7XG5cdFx0dGhpcy5zcGluSXRlbXMuZm9yRWFjaChzcGluSXRlbSA9PiBzcGluSXRlbS5FbmFibGUoKSk7XG5cdFx0dGhpcy5zcGluKHRoaXMuaXNUdXJibyk7XG5cdFx0aWYgKHRoaXMuaXNUdXJibyA9PT0gdHJ1ZSkge1xuXHRcdFx0dGhpcy5zdG9wSW1tZWRpYXRlbHkoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3Bpbihpc1R1cmJvOiBib29sZWFuKSB7XG5cdFx0dGhpcy5zcGlubmluZ0l0ZW1zID0gdGhpcy5zcGluSXRlbXM7XG5cdFx0bGV0IGRlbGF5VGltZSA9IGlzVHVyYm8gPyAwIDogdGhpcy5zcGluSXRlbURhdGEuRGVsYXlUaW1lU3BpbkJldHdlZW5JdGVtcztcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zcGluSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRjb25zdCBzcGluSXRlbSA9IHRoaXMuc3Bpbkl0ZW1zW2luZGV4XTtcblx0XHRcdGxldCBzZXEgPSBjYy5zZXF1ZW5jZShcblx0XHRcdFx0Y2MuZGVsYXlUaW1lKGRlbGF5VGltZSAqIGluZGV4KVxuXHRcdFx0XHQsIGNjLmNhbGxGdW5jKCgpID0+IHtcblx0XHRcdFx0XHRzcGluSXRlbS5TcGluKCk7XG5cdFx0XHRcdFx0aWYgKGluZGV4ID09IHRoaXMuc3Bpbkl0ZW1zLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdHRoaXMuaXNSZWFkeVRvU3RvcCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB0aGlzLCBzcGluSXRlbSkpO1xuXHRcdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihzZXEpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RvcEltbWVkaWF0ZWx5KCkge1xuXHRcdHRoaXMubGFuZGluZ0NvdW50ID0gMDtcblx0XHR0aGlzLmlzU3RvcEltbWVkaWF0ZWx5ID0gdHJ1ZTtcblxuXHRcdGlmICh0aGlzLmNoZWNrRGF0YVJlc3BvbmRlKCkgJiYgdGhpcy5jaGVja1JlYWR5VG9TdG9wKCkpIHtcblx0XHRcdHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuXHRcdFx0Zm9yICh2YXIgaW5kZXggPSB0aGlzLnNwaW5JdGVtU3RvcENvdW50OyBpbmRleCA8IHRoaXMuc3Bpbm5pbmdJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdFx0aWYgKHRoaXMuc3Bpbm5pbmdJdGVtc1tpbmRleF0uc3RhdGUgPT0gRVNwaW5uaW5nU3RhdGUuSWRsZSkge1xuXHRcdFx0XHRcdHRoaXMuc3Bpbm5pbmdJdGVtc1tpbmRleF0uU3BpbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNwaW5uaW5nSXRlbXMuZm9yRWFjaChpID0+IGkuU3RvcEltbWVkaWF0ZWx5KHRoaXMuaXNUdXJibykpO1xuXHRcdFx0dGhpcy5zcGlubmluZ0l0ZW1zLmZvckVhY2goaSA9PiBpLlN0b3AodGhpcy5kYXRhUmVzcG9uZGVkKSk7XG5cblx0XHRcdGlmICh0aGlzLnNwaW5JdGVtU3RvcENvdW50ID49IHRoaXMuc3Bpbm5pbmdJdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5jaGVja1NwaW5FbmQoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrUmVhZHlUb1N0b3AoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXNSZWFkeVRvU3RvcCAmJiB0aGlzLnNwaW5JdGVtU2Nyb2xsQ291bnQgPT0gdGhpcy5zcGluSXRlbXMubGVuZ3RoO1xuXHR9XG5cblx0cHJpdmF0ZSBzcGluSXRlbVN0b3BDb21wbGV0ZWQoY2VsbEluZGljZXM6IG51bWJlcltdKTogdm9pZCB7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJTcGluSXRlbVN0b3BDb21wbGV0ZWRcIiwge1xuXHRcdFx0Y2VsbEluZGljZXM6IGNlbGxJbmRpY2VzLFxuXHRcdH0pO1xuXHRcdHRoaXMuc3Bpbkl0ZW1TdG9wQ291bnQrKztcblx0XHR0aGlzLmNoZWNrU3BpbkVuZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzcGluSXRlbVJlYWR5Qm91bmNlVXAoKTogdm9pZCB7XG5cdFx0dGhpcy5zcGluSXRlbVJlYWR5Qm91bmNlVXBDb3VudCsrO1xuXHRcdGlmICh0aGlzLmlzU3RvcEltbWVkaWF0ZWx5ICYmIHRoaXMuc3Bpbkl0ZW1SZWFkeUJvdW5jZVVwQ291bnQgPT0gdGhpcy5zcGlubmluZ0l0ZW1zLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5zcGluSXRlbXMuZm9yRWFjaChzcGluSXRlbSA9PiBzcGluSXRlbS5BbGxvd0JvdW5jZVVwKCkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY2hlY2tTcGluRW5kKCk6IHZvaWQge1xuXHRcdGxldCBpc1NwaW5FbmQgPSB0aGlzLnNwaW5JdGVtU3RvcENvdW50ID49IHRoaXMuc3Bpbm5pbmdJdGVtcy5sZW5ndGggJiYgdGhpcy5sYW5kaW5nQ291bnQgPT0gMDtcblxuXHRcdGlmIChpc1NwaW5FbmQpIHtcblx0XHRcdHRoaXMuc3BpbkVuZCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3BpbkVuZCgpOiB2b2lkIHtcblx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0RzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJTcGluQ29tcGxldGVcIik7XG5cdH1cblxuXHRwcml2YXRlIHN0b3BTcGluKGl0ZW1zOiBzdHJpbmdbXSkge1xuXHRcdGlmICh0aGlzLmlzU3RvcEltbWVkaWF0ZWx5KSB7XG5cdFx0XHR0aGlzLnN0b3BJbW1lZGlhdGVseSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnNwaW5uaW5nSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRjb25zdCBzcGluSXRlbSA9IHRoaXMuc3Bpbm5pbmdJdGVtc1tpbmRleF07XG5cdFx0XHRsZXQgdGVuc2lvbkR1cmF0aW9uID0gMDtcblx0XHRcdGlmICh0aGlzLnRlbnNpb25zLmluZGV4T2YoaW5kZXgpICE9IC0xKSB7XG5cdFx0XHRcdHRlbnNpb25EdXJhdGlvbiA9IHRoaXMuc3Bpbkl0ZW1EYXRhLlRlbnNpb25EdXJhdGlvbiAqICh0aGlzLnRlbnNpb25zLmluZGV4T2YoaW5kZXgpICsgMSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzZXEgPSBjYy5zZXF1ZW5jZShcblx0XHRcdFx0Y2MuZGVsYXlUaW1lKHRoaXMuc3Bpbkl0ZW1EYXRhLkRlbGF5VGltZVN0b3BCZXR3ZWVuSXRlbXMgKiBpbmRleCArIHRlbnNpb25EdXJhdGlvbilcblx0XHRcdFx0LCBjYy5jYWxsRnVuYygoKSA9PiB7XG5cdFx0XHRcdFx0c3Bpbkl0ZW0uU3RvcChpdGVtcyk7XG5cdFx0XHRcdH0sIHRoaXMsIHNwaW5JdGVtKSk7XG5cdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKHNlcSk7XG5cdFx0fVxuXHR9XG5cblx0b25FeHBhbmRXaWxkU3RhcnRlZChleHBhbmRXaWxkSW5kaWNlczogbnVtYmVyW10pOiB2b2lkIHtcblx0XHR0aGlzLmV4cGFuZFdpbGRJbmRpY2VzID0gT2JqZWN0LmFzc2lnbihbXSwgZXhwYW5kV2lsZEluZGljZXMpO1xuXHRcdGV4cGFuZFdpbGRJbmRpY2VzLmZvckVhY2goY2VsbEluZGV4ID0+IHtcblx0XHRcdGxldCByZWVsSW5kZXggPSBTbG90dHlQYXJhbWV0ZXIuR2V0UmVlbEluZGV4KGNlbGxJbmRleCk7XG5cdFx0XHRjYy50d2Vlbih0aGlzLnNwaW5JdGVtc1tyZWVsSW5kZXhdLm5vZGUpXG5cdFx0XHRcdC50bygwLjEsIHsgb3BhY2l0eTogMCB9KVxuXHRcdFx0XHQuc3RhcnQoKTtcblx0XHR9KTtcblx0fVxuXG5cdG9uRXhwYW5kV2lsZEhpZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5zcGluSXRlbXMuZm9yRWFjaChzcGluSXRlbSA9PiB7XG5cdFx0XHRzcGluSXRlbS5ub2RlLnkgPSAwO1xuXHRcdFx0c3Bpbkl0ZW0ubm9kZS5vcGFjaXR5ID0gMjU1O1xuXHRcdH0pO1xuXHR9XG5cblx0b25MYW5kaW5nR2VuZXJhdGVkKGRhdGE6IG51bWJlcltdKTogdm9pZCB7XG5cdFx0dGhpcy5sYW5kaW5nQ291bnQgPSBkYXRhLmxlbmd0aDtcblx0fVxuXG5cdG9uTGFuZGluZ1N0YXJ0ZWQoKTogdm9pZCB7XG5cdH1cblxuXHRvbkxhbmRpbmdDb21wbGV0ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5sYW5kaW5nQ291bnQtLTtcblx0XHR0aGlzLmNoZWNrU3BpbkVuZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBTZXRJdGVtcyhyZWVsRGF0YTogc3RyaW5nW10pIHtcblx0XHR0aGlzLnNwaW5JdGVtcy5mb3JFYWNoKHNwaW5JdGVtID0+IHNwaW5JdGVtLlNldEl0ZW1zKHJlZWxEYXRhKSk7XG5cdH1cblxuXHRwcml2YXRlIFNldE9sZEl0ZW1zKGRhdGE6IGFueSkge1xuXHRcdGxldCBpbmRpY2VzID0gZGF0YS5leHBhbmRXaWxkSW5kaWNlcy5tYXAoKGluZGV4OiBudW1iZXIpID0+IFNsb3R0eVBhcmFtZXRlci5HZXRSZWVsSW5kZXgoaW5kZXgpKTtcblx0XHR0aGlzLnNwaW5JdGVtcy5mb3JFYWNoKChzcGluSXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdGlmICghaW5kaWNlcy5pbmNsdWRlcyhTbG90dHlQYXJhbWV0ZXIuR2V0UmVlbEluZGV4KGluZGV4KSkpIHtcblx0XHRcdFx0c3Bpbkl0ZW0ubm9kZS5vcGFjaXR5ID0gMjU1O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3Bpbkl0ZW0ubm9kZS5vcGFjaXR5ID0gMDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLnNwaW5JdGVtcy5mb3JFYWNoKHNwaW5JdGVtID0+IHNwaW5JdGVtLlNldE9sZEl0ZW1zKGRhdGEuQ2VsbHMpKTtcblx0XHRpZiAoZGF0YS5XaW5MaW5lcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm9uSGlkZUl0ZW1zKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBvbkhpZGVJdGVtcygpOiB2b2lkIHtcblx0XHQvLyB0aGlzLnNwaW5JdGVtcy5mb3JFYWNoKHNwaW5JdGVtID0+IHNwaW5JdGVtLm5vZGUub3BhY2l0eSA9IDApXG5cdFx0dGhpcy50d2VlbkhpZGVJdGVtID0gY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSgwLjEpLmNhbGwoKCkgPT4ge1xuXHRcdFx0dGhpcy5zcGluSXRlbXMuZm9yRWFjaChzcGluSXRlbSA9PiBzcGluSXRlbS5ub2RlLm9wYWNpdHkgPSAwKVxuXHRcdH0pLnN0YXJ0KCk7XG5cdH1cblxuXHRwcml2YXRlIG9uUmVzZXRBbGxMaW5lKCk6IHZvaWQge1xuXHRcdHRoaXMucmVzZXRJdGVtTm90RXhwYW5kV2lsZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGVja0RhdGFSZXNwb25kZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhUmVzcG9uZGVkLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRwcml2YXRlIHJlc2V0KCkge1xuXHRcdHRoaXMuaXNSZWFkeVRvU3RvcCA9IGZhbHNlO1xuXHRcdHRoaXMuc3Bpbkl0ZW1SZWFkeUJvdW5jZVVwQ291bnQgPSAwO1xuXHRcdHRoaXMuaXNTdG9wSW1tZWRpYXRlbHkgPSBmYWxzZTtcblx0XHR0aGlzLnNwaW5JdGVtU3RvcENvdW50ID0gMDtcblx0XHR0aGlzLnNwaW5JdGVtU2Nyb2xsQ291bnQgPSAwO1xuXHRcdHRoaXMuc3Bpbm5pbmdJdGVtcyA9IFtdO1xuXHRcdHRoaXMudGVuc2lvbnMgPSBbXTtcblx0XHR0aGlzLnNwaW5JdGVtcy5mb3JFYWNoKHNwaW5JdGVtID0+IHNwaW5JdGVtLlJlc2V0KCkpO1xuXHRcdHRoaXMucmVzZXRJdGVtTm90RXhwYW5kV2lsZCgpO1xuXHRcdHRoaXMuZGF0YVJlc3BvbmRlZCA9IFtdO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNldEl0ZW1Ob3RFeHBhbmRXaWxkKCk6IHZvaWQge1xuXHRcdHRoaXMudHdlZW5IaWRlSXRlbSAmJiB0aGlzLnR3ZWVuSGlkZUl0ZW0uc3RvcCgpO1xuXHRcdGxldCBpbmRpY2VzID0gdGhpcy5leHBhbmRXaWxkSW5kaWNlcy5tYXAoaW5kZXggPT4gU2xvdHR5UGFyYW1ldGVyLkdldFJlZWxJbmRleChpbmRleCkpO1xuXHRcdHRoaXMuc3Bpbkl0ZW1zLmZvckVhY2goKHNwaW5JdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKCFpbmRpY2VzLmluY2x1ZGVzKFNsb3R0eVBhcmFtZXRlci5HZXRSZWVsSW5kZXgoaW5kZXgpKSkge1xuXHRcdFx0XHRzcGluSXRlbS5ub2RlLm9wYWNpdHkgPSAyNTU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzcGluSXRlbS5ub2RlLm9wYWNpdHkgPSAwO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNldEV4cGFuZFdpbGQoKTogdm9pZCB7XG5cdFx0dGhpcy5leHBhbmRXaWxkSW5kaWNlcyA9IFtdO1xuXHRcdHRoaXMuc3Bpbkl0ZW1zLmZvckVhY2goc3Bpbkl0ZW0gPT4gc3Bpbkl0ZW0ubm9kZS5vcGFjaXR5ID0gMjU1KTtcblx0fVxuXG5cdHByaXZhdGUgb25QcmVzZW50QWxsV2luQ29tcGxldGUoKTogdm9pZCB7XG5cdFx0dGhpcy5zcGluSXRlbXMuZm9yRWFjaChzcGluSXRlbSA9PiBzcGluSXRlbS5SZXNldCgpKTtcblx0XHR0aGlzLnJlc2V0SXRlbU5vdEV4cGFuZFdpbGQoKTtcblx0fVxufVxuIl19