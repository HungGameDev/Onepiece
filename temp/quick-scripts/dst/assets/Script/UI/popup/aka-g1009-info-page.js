
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/popup/aka-g1009-info-page.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d8acNkafNHgozJl/aJaJYt', 'aka-g1009-info-page');
// Script/UI/popup/aka-g1009-info-page.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MAX_PAGE_INDEX = 1;
var G1009InfoPageActor = /** @class */ (function (_super) {
    __extends(G1009InfoPageActor, _super);
    function G1009InfoPageActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.content = null;
        _this.preButton = null;
        _this.nextButton = null;
        _this.currentToggleId = 0;
        return _this;
    }
    G1009InfoPageActor.prototype.onLoad = function () {
        this.register();
    };
    G1009InfoPageActor.prototype.register = function () {
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ChangeInfoPage", this.onChangeInfoPage.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ScrollToNextPage", this.onNextPageClick.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ScrollToPrevertPage", this.onPrevertPageClick.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("HideInfoPanel", this.onHideClick.bind(this));
        aka_g1009_event_manager_1.G1009EventManager.GetInstance().register("ShowInfoPanel", this.onShowClick.bind(this));
    };
    G1009InfoPageActor.prototype.onChangeInfoPage = function (toggleId) {
        if (this.currentToggleId != toggleId) {
            this.currentToggleId = toggleId;
            this.scrollView.scrollTo(new cc.Vec2(toggleId / MAX_PAGE_INDEX), 0.5);
            this.resetButton();
            if (this.currentToggleId == MAX_PAGE_INDEX)
                this.nextButton.interactable = false;
            if (this.currentToggleId == 0)
                this.preButton.interactable = false;
        }
    };
    G1009InfoPageActor.prototype.onNextPageClick = function () {
        if (this.currentToggleId < MAX_PAGE_INDEX) {
            this.currentToggleId += 1;
            this.scrollView.scrollTo(new cc.Vec2(this.currentToggleId / MAX_PAGE_INDEX), 0.5);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ChangeInfoPage", this.currentToggleId);
            this.resetButton();
            if (this.currentToggleId == MAX_PAGE_INDEX)
                this.nextButton.interactable = false;
        }
    };
    G1009InfoPageActor.prototype.onPrevertPageClick = function () {
        if (this.currentToggleId > 0) {
            this.currentToggleId -= 1;
            this.scrollView.scrollTo(new cc.Vec2(this.currentToggleId / MAX_PAGE_INDEX), 0.5);
            aka_g1009_event_manager_1.G1009EventManager.GetInstance().notify("ChangeInfoPage", this.currentToggleId);
            this.resetButton();
            if (this.currentToggleId == 0)
                this.preButton.interactable = false;
        }
    };
    G1009InfoPageActor.prototype.resetButton = function () {
        this.preButton.interactable = true;
        this.nextButton.interactable = true;
    };
    G1009InfoPageActor.prototype.onHideClick = function () {
        this.content.active = false;
    };
    G1009InfoPageActor.prototype.onShowClick = function () {
        this.content.active = true;
        if (this.currentToggleId == MAX_PAGE_INDEX)
            this.nextButton.interactable = false;
        if (this.currentToggleId == 0)
            this.preButton.interactable = false;
    };
    __decorate([
        property(cc.ScrollView)
    ], G1009InfoPageActor.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Node)
    ], G1009InfoPageActor.prototype, "content", void 0);
    __decorate([
        property(cc.Button)
    ], G1009InfoPageActor.prototype, "preButton", void 0);
    __decorate([
        property(cc.Button)
    ], G1009InfoPageActor.prototype, "nextButton", void 0);
    G1009InfoPageActor = __decorate([
        ccclass
    ], G1009InfoPageActor);
    return G1009InfoPageActor;
}(cc.Component));
exports.default = G1009InfoPageActor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvcG9wdXAvYWthLWcxMDA5LWluZm8tcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBOEU7QUFHeEUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRXpCO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBaUZDO1FBOUVXLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUdqQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBSXhCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFckMscUJBQWUsR0FBVyxDQUFDLENBQUM7O0lBbUVoQyxDQUFDO0lBbEVhLG1DQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDTyxxQ0FBUSxHQUFoQjtRQUNJLDJDQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0YsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUYsMkNBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRywyQ0FBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxD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LENBQUM7SUFDNUMsQ0FBQztJQTdFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDOzBEQUNpQjtJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNjO0lBSWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ2dCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ2lCO0lBWnBCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBaUZ0QztJQUFELHlCQUFDO0NBakZELEFBaUZDLENBakYrQyxFQUFFLENBQUMsU0FBUyxHQWlGM0Q7a0JBakZvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHMTAwOUV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi8uLi9iYXNlL2V2ZW50cy9ha2EtZzEwMDktZXZlbnQtbWFuYWdlclwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgTUFYX1BBR0VfSU5ERVggPSAxO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEcxMDA5SW5mb1BhZ2VBY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgcHJpdmF0ZSBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSBwcmVCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIG5leHRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBjdXJyZW50VG9nZ2xlSWQ6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiQ2hhbmdlSW5mb1BhZ2VcIiwgdGhpcy5vbkNoYW5nZUluZm9QYWdlLmJpbmQodGhpcykpO1xuICAgICAgICBHMTAwOUV2ZW50TWFuYWdlci5HZXRJbnN0YW5jZSgpLnJlZ2lzdGVyKFwiU2Nyb2xsVG9OZXh0UGFnZVwiLCB0aGlzLm9uTmV4dFBhZ2VDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5yZWdpc3RlcihcIlNjcm9sbFRvUHJldmVydFBhZ2VcIiwgdGhpcy5vblByZXZlcnRQYWdlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJIaWRlSW5mb1BhbmVsXCIsIHRoaXMub25IaWRlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkucmVnaXN0ZXIoXCJTaG93SW5mb1BhbmVsXCIsIHRoaXMub25TaG93Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgXG4gICAgXG4gICAgcHJpdmF0ZSBvbkNoYW5nZUluZm9QYWdlKHRvZ2dsZUlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRvZ2dsZUlkICE9IHRvZ2dsZUlkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb2dnbGVJZCA9IHRvZ2dsZUlkO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvKG5ldyBjYy5WZWMyKHRvZ2dsZUlkIC8gTUFYX1BBR0VfSU5ERVgpLCAwLjUpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRvZ2dsZUlkID09IE1BWF9QQUdFX0lOREVYKVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUb2dnbGVJZCA9PSAwKVxuICAgICAgICAgICAgICAgIHRoaXMucHJlQnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk5leHRQYWdlQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUb2dnbGVJZCA8IE1BWF9QQUdFX0lOREVYKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb2dnbGVJZCArPSAxOyAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUbyhuZXcgY2MuVmVjMih0aGlzLmN1cnJlbnRUb2dnbGVJZCAvIE1BWF9QQUdFX0lOREVYKSwgMC41KTtcbiAgICAgICAgICAgIEcxMDA5RXZlbnRNYW5hZ2VyLkdldEluc3RhbmNlKCkubm90aWZ5KFwiQ2hhbmdlSW5mb1BhZ2VcIiwgdGhpcy5jdXJyZW50VG9nZ2xlSWQpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRvZ2dsZUlkID09IE1BWF9QQUdFX0lOREVYKVxuICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgb25QcmV2ZXJ0UGFnZUNsaWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VG9nZ2xlSWQgPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb2dnbGVJZCAtPSAxOyAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvKG5ldyBjYy5WZWMyKHRoaXMuY3VycmVudFRvZ2dsZUlkIC8gTUFYX1BBR0VfSU5ERVgpLCAwLjUpO1xuICAgICAgICAgICAgRzEwMDlFdmVudE1hbmFnZXIuR2V0SW5zdGFuY2UoKS5ub3RpZnkoXCJDaGFuZ2VJbmZvUGFnZVwiLCB0aGlzLmN1cnJlbnRUb2dnbGVJZCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VG9nZ2xlSWQgPT0gMClcbiAgICAgICAgICAgIHRoaXMucHJlQnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEJ1dHRvbigpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMucHJlQnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25IaWRlQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2hvd0NsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRvZ2dsZUlkID09IE1BWF9QQUdFX0lOREVYKVxuICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VG9nZ2xlSWQgPT0gMClcbiAgICAgICAgICAgIHRoaXMucHJlQnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==