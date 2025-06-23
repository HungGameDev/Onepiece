"use strict";
cc._RF.push(module, '52feerC68JA74OBJ7NJdQMU', 'Slot45-spin-panel');
// Script/UI/spin-panel/Slot45-spin-panel.ts

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
var Slot45_game_config_1 = require("../../Slot45-game-config");
var Slot45_number_converter_1 = require("../../base/Util/Slot45-number-converter");
var Slot45_event_manager_1 = require("../../base/events/Slot45-event-manager");
var Slot45_spin_item_1 = require("./Slot45-spin-item");
var Slot45_spin_item_data_1 = require("./Slot45-spin-item-data");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot45SpinPanelActor = /** @class */ (function (_super) {
    __extends(Slot45SpinPanelActor, _super);
    function Slot45SpinPanelActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spinItems = [];
        _this.spinItemData = new Slot45_spin_item_data_1.Slot45SpinItemData();
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
    Slot45SpinPanelActor.prototype.register = function () {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("Turbo", this.OnTurbo.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SpinStarted", this.OnSpinStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("DataRespond", this.onDataRespond.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("StopImmediately", this.stopImmediately.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SetItems", this.SetItems.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("SetOldItems", this.SetOldItems.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("TensionStarted", this.onTensionStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("TensionGenerated", this.onTensionGenerated.bind(this));
        //Slot45EventManager.GetInstance().register("PresentWinStart", this.onHideItems.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ResetAllLine", this.onResetAllLine.bind(this));
        // Slot45EventManager.GetInstance().register("JackpotStarted", this.onHideItems.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("PresentAllWinComplete", this.onPresentAllWinComplete.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ExpandWildStarted", this.onExpandWildStarted.bind(this));
        Slot45_event_manager_1.Slot45EventManager.GetInstance().register("ExpandWildHide", this.onExpandWildHide.bind(this));
    };
    Slot45SpinPanelActor.prototype.onLoad = function () {
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
    Slot45SpinPanelActor.prototype.onTensionGenerated = function (indices) {
        this.tensions = indices;
    };
    Slot45SpinPanelActor.prototype.onTensionStarted = function (id) {
        this.spinItems[id].TensionStarted();
    };
    Slot45SpinPanelActor.prototype.readyToStop = function () {
        this.spinItemScrollCount++;
    };
    Slot45SpinPanelActor.prototype.OnTurbo = function (isTurbo) {
        this.isTurbo = isTurbo;
    };
    Slot45SpinPanelActor.prototype.onDataRespond = function (spinResult) {
        var _this = this;
        this.dataResponded = spinResult;
        if (this.isStopImmediately && this.checkReadyToStop()) {
            this.stopSpin(spinResult);
        }
        else {
            Slot45_number_converter_1.default.Instance().WaitUntil(this.checkReadyToStop.bind(this)).then(function () {
                _this.stopSpin(spinResult);
            });
        }
    };
    Slot45SpinPanelActor.prototype.OnSpinStarted = function () {
        this.reset();
        this.resetExpandWild();
        this.spinItems.forEach(function (spinItem) { return spinItem.Enable(); });
        this.spin(this.isTurbo);
        if (this.isTurbo === true) {
            this.stopImmediately();
        }
    };
    Slot45SpinPanelActor.prototype.spin = function (isTurbo) {
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
    Slot45SpinPanelActor.prototype.stopImmediately = function () {
        var _this = this;
        this.landingCount = 0;
        this.isStopImmediately = true;
        if (this.checkDataResponde() && this.checkReadyToStop()) {
            this.node.stopAllActions();
            for (var index = this.spinItemStopCount; index < this.spinningItems.length; index++) {
                if (this.spinningItems[index].state == Slot45_spin_item_1.ESpinningState.Idle) {
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
    Slot45SpinPanelActor.prototype.checkReadyToStop = function () {
        return this.isReadyToStop && this.spinItemScrollCount == this.spinItems.length;
    };
    Slot45SpinPanelActor.prototype.spinItemStopCompleted = function (cellIndices) {
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("SpinItemStopCompleted", {
            cellIndices: cellIndices,
        });
        this.spinItemStopCount++;
        this.checkSpinEnd();
    };
    Slot45SpinPanelActor.prototype.spinItemReadyBounceUp = function () {
        this.spinItemReadyBounceUpCount++;
        if (this.isStopImmediately && this.spinItemReadyBounceUpCount == this.spinningItems.length) {
            this.spinItems.forEach(function (spinItem) { return spinItem.AllowBounceUp(); });
        }
    };
    Slot45SpinPanelActor.prototype.checkSpinEnd = function () {
        var isSpinEnd = this.spinItemStopCount >= this.spinningItems.length && this.landingCount == 0;
        if (isSpinEnd) {
            this.spinEnd();
        }
    };
    Slot45SpinPanelActor.prototype.spinEnd = function () {
        this.reset();
        Slot45_event_manager_1.Slot45EventManager.GetInstance().notify("SpinComplete");
    };
    Slot45SpinPanelActor.prototype.stopSpin = function (items) {
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
    Slot45SpinPanelActor.prototype.onExpandWildStarted = function (expandWildIndices) {
        var _this = this;
        this.expandWildIndices = Object.assign([], expandWildIndices);
        expandWildIndices.forEach(function (cellIndex) {
            var reelIndex = Slot45_game_config_1.SlottyParameter.GetReelIndex(cellIndex);
            cc.tween(_this.spinItems[reelIndex].node)
                .to(0.1, { opacity: 0 })
                .start();
        });
    };
    Slot45SpinPanelActor.prototype.onExpandWildHide = function () {
        this.spinItems.forEach(function (spinItem) {
            spinItem.node.y = 0;
            spinItem.node.opacity = 255;
        });
    };
    Slot45SpinPanelActor.prototype.onLandingGenerated = function (data) {
        this.landingCount = data.length;
    };
    Slot45SpinPanelActor.prototype.onLandingStarted = function () {
    };
    Slot45SpinPanelActor.prototype.onLandingCompleted = function () {
        this.landingCount--;
        this.checkSpinEnd();
    };
    Slot45SpinPanelActor.prototype.SetItems = function (reelData) {
        this.spinItems.forEach(function (spinItem) { return spinItem.SetItems(reelData); });
    };
    Slot45SpinPanelActor.prototype.SetOldItems = function (data) {
        var indices = data.expandWildIndices.map(function (index) { return Slot45_game_config_1.SlottyParameter.GetReelIndex(index); });
        this.spinItems.forEach(function (spinItem, index) {
            if (!indices.includes(Slot45_game_config_1.SlottyParameter.GetReelIndex(index))) {
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
    Slot45SpinPanelActor.prototype.onHideItems = function () {
        var _this = this;
        // this.spinItems.forEach(spinItem => spinItem.node.opacity = 0)
        this.tweenHideItem = cc.tween(this.node).delay(0.1).call(function () {
            _this.spinItems.forEach(function (spinItem) { return spinItem.node.opacity = 0; });
        }).start();
    };
    Slot45SpinPanelActor.prototype.onResetAllLine = function () {
        this.resetItemNotExpandWild();
    };
    Slot45SpinPanelActor.prototype.checkDataResponde = function () {
        return this.dataResponded.length > 0;
    };
    Slot45SpinPanelActor.prototype.reset = function () {
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
    Slot45SpinPanelActor.prototype.resetItemNotExpandWild = function () {
        this.tweenHideItem && this.tweenHideItem.stop();
        var indices = this.expandWildIndices.map(function (index) { return Slot45_game_config_1.SlottyParameter.GetReelIndex(index); });
        this.spinItems.forEach(function (spinItem, index) {
            if (!indices.includes(Slot45_game_config_1.SlottyParameter.GetReelIndex(index))) {
                spinItem.node.opacity = 255;
            }
            else {
                spinItem.node.opacity = 0;
            }
        });
    };
    Slot45SpinPanelActor.prototype.resetExpandWild = function () {
        this.expandWildIndices = [];
        this.spinItems.forEach(function (spinItem) { return spinItem.node.opacity = 255; });
    };
    Slot45SpinPanelActor.prototype.onPresentAllWinComplete = function () {
        this.spinItems.forEach(function (spinItem) { return spinItem.Reset(); });
        this.resetItemNotExpandWild();
    };
    __decorate([
        property(Slot45_spin_item_1.default)
    ], Slot45SpinPanelActor.prototype, "spinItems", void 0);
    Slot45SpinPanelActor = __decorate([
        ccclass
    ], Slot45SpinPanelActor);
    return Slot45SpinPanelActor;
}(cc.Component));
exports.default = Slot45SpinPanelActor;

cc._RF.pop();