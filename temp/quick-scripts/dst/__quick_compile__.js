
(function () {
var scripts = [{"deps":{"./assets/Script/base/sound/aka-g1009-sound-handler":1,"./assets/Script/avenger-game/avenger-total-win/combo-win-point":2,"./assets/Script/base/state-machine/state/aka-g1009-bonus-state":3,"./assets/Script/base/aka-g1009-connect-server":4,"./assets/Script/aka-g1009-game-config":5,"./assets/Script/avenger-game/exploding-panel/avenger-smoke-panel":6,"./assets/Script/models/aka-g1009-bet-model":7,"./assets/Script/avenger-game/border-win-cell-panel/border-win-cell-panel":8,"./assets/Script/config/sound-config":9,"./assets/Script/avenger-game/spin-panel/avenger-spin-panel":10,"./assets/Script/avenger-game/model/combo-data":11,"./assets/Script/base/sound/ak-g1009-sfs-player":12,"./assets/Script/aka-g1009-slotty-setting":13,"./assets/Script/avenger-game/exploding-panel/avenger-exploding-cell":14,"./assets/Script/base/state-machine/abstract/aka-g1009-state":15,"./assets/Script/avenger-game/exploding-panel/avenger-exploding-panel":16,"./assets/Script/avenger-game/avenger-total-win/total-win-panel":17,"./assets/Script/avenger-game/spin-panel/avenger-spin-panel-config":18,"./assets/Script/base/sound/aka-g1009-sound-controller":19,"./assets/Script/avenger-game/spin-panel/avenger-spin-item":20,"./assets/Script/base/sound/aka-g1009-sound-player":21,"./assets/Script/base/state-machine/state/aka-g1009-feature-win-state":22,"./assets/Script/base/state-machine/state/aka-g1009-win-state":23,"./assets/Script/base/state-machine/state/aka-g1009-spin-state":24,"./assets/Script/base/state-machine/state/aka-g1009-feature-trigger-state":25,"./assets/Script/base/state-machine/state/aka-g1009-jackpot-state":26,"./assets/Script/base/state-machine/state/aka-g1009-bet-state":27,"./assets/Script/base/state-machine/state/aka-g1009-init-state":28,"./assets/Script/base/state-machine/state/aka-g1009-expand-wild-state":29,"./assets/Script/models/aka-g1009-balance-model":30,"./assets/Script/UI/big-win/aka-g1009-big-win-actor":31,"./assets/Script/GameManager/aka_1009-JoinGameData":32,"./assets/Script/Test/aka_1009_TestGameManager":33,"./assets/Script/UI/bonus-game/aka-g1009-bonus-trigger-actor":34,"./assets/Script/UI/feature/aka-g1009-feature-trigger-actor":35,"./assets/Script/UI/change-bet/aka-g1009-change-bet-actor":36,"./assets/Script/UI/freespins/aka-g1009-freespins-retrigger-actor":37,"./assets/Script/UI/history-popup/aka-g1009-popup-history-item":38,"./assets/Script/UI/jackpot/aka-g1009-jackpot-banner":39,"./assets/Script/UI/popup/aka-g1009-bet-button":40,"./assets/Script/UI/present-win/aka-g1009-present-win-panel":41,"./assets/Script/UI/provider/aka-g1009-sprite-frame-provider":42,"./assets/Script/UI/spin-panel/aka-g1009-spin-item-data":43,"./assets/Script/base/Util/aka-g1009-number-converter":44,"./assets/Script/base/animation/aka-g1009-animation":45,"./assets/Script/base/controller/aka-g1009-game-controller":46,"./assets/Script/base/events/aka-g1009-event-manager":47,"./assets/Script/GameManager/aka_1009-SpinGameData":48,"./assets/Script/UI/aka-g1009-notification-message":50,"./assets/Script/UI/freespins/aka-g1009-freespins-trigger-actor":51,"./assets/Script/UI/history-popup/aka-g1009-popup-history":52,"./assets/Script/GameManager/aka_1009-SpinGameData2":53,"./assets/Script/UI/feature/aka-g1009-feature-win-actor":54,"./assets/Script/UI/freespins/aka-g1009-freespins-content-activation-actor":55,"./assets/Script/UI/jackpot/aka-g1009-jackpot-actor":56,"./assets/Script/UI/popup/aka-g1009-button-controller":57,"./assets/Script/UI/popup/aka-g1009-button-home":58,"./assets/Script/UI/history-popup/aka-g1009-popup-jackpot-history":59,"./assets/Script/UI/history-popup/aka-g1009-popup-history-detail":60,"./assets/Script/UI/popup/aka-g1009-button":61,"./assets/Script/UI/popup/aka-g1009-button-spin":62,"./assets/Script/UI/feature/aka-g1009-feature-content-activation-actor":63,"./assets/Script/UI/popup/aka-g1009-info-toggle-button":64,"./assets/Script/UI/history-popup/aka-g1009-popup-jackpot-history-item":65,"./assets/Script/UI/popup/aka-g1009-popup-error":66,"./assets/Script/UI/popup/aka-g1009-jackpot-info-content":67,"./assets/Script/UI/popup/aka-g1009-select-bet-panel":68,"./assets/Script/UI/popup/aka-g1009-popup-select-bet":69,"./assets/Script/UI/popup/aka-g1009-bet-button-v2":70,"./assets/Script/UI/popup/aka-g1009-system-panel":71,"./assets/Script/UI/popup/aka-g1009-round-popup":72,"./assets/Script/UI/popup/aka-g1009-toggle-simulator":73,"./assets/Script/UI/present-win/aka-g1009-present-win-line-panel":74,"./assets/Script/UI/popup/aka-g1009-info-toggle-panel":75,"./assets/Script/UI/popup/aka-g1009-info-page":76,"./assets/Script/UI/spin-panel/aka-g1009-spin-item":77,"./assets/Script/UI/popup/aka-g1009-bet-toggle-button":78,"./assets/Script/UI/spin-panel/aka-g1009-cell-item":79,"./assets/Script/base/aka-g1009-perist-root-node":80,"./assets/Script/UI/spin-panel/aka-g1009-spin-panel":81,"./assets/Script/base/Util/aka_date-util":82,"./assets/Script/base/animation/aka-g1009-spine-animation-handler":83,"./assets/Script/base/animation/aka-g1009-animation-provider":84,"./assets/Script/base/animation/aka-g1009-spine-animation":85,"./assets/Script/base/sound/aka-g1009-music-player":86,"./assets/Script/base/sound/aka-g1009-sound-button-click":87,"./assets/Script/UI/present-win/aka-g1009-win-line":88,"./assets/Script/UI/present-win/aka-g1009-win-cell-item":89,"./assets/Script/base/aka-g1009-simulator-server":90,"./assets/Script/GameManager/aka_1009-GameManager":49},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../config/sound-config":9,"../events/aka-g1009-event-manager":47,"../sound/aka-g1009-sound-controller":19},"path":"preview-scripts/assets/Script/base/sound/aka-g1009-sound-handler.js"},{"deps":{"../../base/Util/aka-g1009-number-converter":44,"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/avenger-game/avenger-total-win/combo-win-point.js"},{"deps":{"../../controller/aka-g1009-game-controller":46,"../../events/aka-g1009-event-manager":47,"../abstract/aka-g1009-state":15,"./aka-g1009-bet-state":27,"./aka-g1009-feature-trigger-state":25,"./aka-g1009-spin-state":24},"path":"preview-scripts/assets/Script/base/state-machine/state/aka-g1009-bonus-state.js"},{"deps":{"../GameManager/aka_1009-GameManager":49,"../UI/present-win/aka-g1009-present-win-panel":41,"../aka-g1009-game-config":5,"../avenger-game/model/combo-data":11,"../models/aka-g1009-balance-model":30,"../models/aka-g1009-bet-model":7,"./events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/base/aka-g1009-connect-server.js"},{"deps":{},"path":"preview-scripts/assets/Script/aka-g1009-game-config.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-smoke-panel.js"},{"deps":{},"path":"preview-scripts/assets/Script/models/aka-g1009-bet-model.js"},{"deps":{"../../aka-g1009-game-config":5,"../../base/animation/aka-g1009-animation-provider":84,"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/avenger-game/border-win-cell-panel/border-win-cell-panel.js"},{"deps":{},"path":"preview-scripts/assets/Script/config/sound-config.js"},{"deps":{"../../UI/spin-panel/aka-g1009-spin-panel":81},"path":"preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-panel.js"},{"deps":{},"path":"preview-scripts/assets/Script/avenger-game/model/combo-data.js"},{"deps":{"./aka-g1009-sound-player":21},"path":"preview-scripts/assets/Script/base/sound/ak-g1009-sfs-player.js"},{"deps":{"./base/events/aka-g1009-event-manager":47,"./base/state-machine/state/aka-g1009-init-state":28},"path":"preview-scripts/assets/Script/aka-g1009-slotty-setting.js"},{"deps":{"../../base/animation/aka-g1009-animation-provider":84},"path":"preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-exploding-cell.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/state-machine/abstract/aka-g1009-state.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"../spin-panel/avenger-spin-item":20,"./avenger-exploding-cell":14},"path":"preview-scripts/assets/Script/avenger-game/exploding-panel/avenger-exploding-panel.js"},{"deps":{"../../base/Util/aka-g1009-number-converter":44,"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/avenger-game/avenger-total-win/total-win-panel.js"},{"deps":{},"path":"preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-panel-config.js"},{"deps":{"../events/aka-g1009-event-manager":47,"./ak-g1009-sfs-player":12,"./aka-g1009-music-player":86},"path":"preview-scripts/assets/Script/base/sound/aka-g1009-sound-controller.js"},{"deps":{"../../UI/spin-panel/aka-g1009-spin-item":77,"../../base/events/aka-g1009-event-manager":47,"./avenger-spin-panel-config":18},"path":"preview-scripts/assets/Script/avenger-game/spin-panel/avenger-spin-item.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/sound/aka-g1009-sound-player.js"},{"deps":{"../../controller/aka-g1009-game-controller":46,"../../events/aka-g1009-event-manager":47,"../abstract/aka-g1009-state":15,"./aka-g1009-bet-state":27,"./aka-g1009-feature-trigger-state":25},"path":"preview-scripts/assets/Script/base/state-machine/state/aka-g1009-feature-win-state.js"},{"deps":{"../../controller/aka-g1009-game-controller":46,"../../events/aka-g1009-event-manager":47,"../abstract/aka-g1009-state":15,"./aka-g1009-bet-state":27,"./aka-g1009-feature-trigger-state":25,"./aka-g1009-feature-win-state":22,"./aka-g1009-jackpot-state":26,"./aka-g1009-spin-state":24},"path":"preview-scripts/assets/Script/base/state-machine/state/aka-g1009-win-state.js"},{"deps":{"../../controller/aka-g1009-game-controller":46,"../../events/aka-g1009-event-manager":47,"../abstract/aka-g1009-state":15,"./aka-g1009-bet-state":27,"./aka-g1009-expand-wild-state":29,"./aka-g1009-feature-trigger-state":25,"./aka-g1009-feature-win-state":22,"./aka-g1009-win-state":23},"path":"preview-scripts/assets/Script/base/state-machine/state/aka-g1009-spin-state.js"},{"deps":{"../../events/aka-g1009-event-manager":47,"../abstract/aka-g1009-state":15,"./aka-g1009-bonus-state":3,"./aka-g1009-feature-win-state":22,"./aka-g1009-spin-state":24},"path":"preview-scripts/assets/Script/base/state-machine/state/aka-g1009-feature-trigger-state.js"},{"deps":{"../../controller/aka-g1009-game-controller":46,"../../events/aka-g1009-event-manager":47,"../abstract/aka-g1009-state":15,"./aka-g1009-bet-state":27,"./aka-g1009-feature-trigger-state":25,"./aka-g1009-feature-win-state":22,"./aka-g1009-spin-state":24},"path":"preview-scripts/assets/Script/base/state-machine/state/aka-g1009-jackpot-state.js"},{"deps":{"../../events/aka-g1009-event-manager":47,"../abstract/aka-g1009-state":15,"./aka-g1009-spin-state":24},"path":"preview-scripts/assets/Script/base/state-machine/state/aka-g1009-bet-state.js"},{"deps":{"../abstract/aka-g1009-state":15,"./aka-g1009-bet-state":27,"./aka-g1009-bonus-state":3,"./aka-g1009-spin-state":24},"path":"preview-scripts/assets/Script/base/state-machine/state/aka-g1009-init-state.js"},{"deps":{"../../controller/aka-g1009-game-controller":46,"../../events/aka-g1009-event-manager":47,"../abstract/aka-g1009-state":15,"./aka-g1009-bet-state":27,"./aka-g1009-feature-trigger-state":25,"./aka-g1009-feature-win-state":22,"./aka-g1009-spin-state":24,"./aka-g1009-win-state":23},"path":"preview-scripts/assets/Script/base/state-machine/state/aka-g1009-expand-wild-state.js"},{"deps":{},"path":"preview-scripts/assets/Script/models/aka-g1009-balance-model.js"},{"deps":{"../../base/Util/aka-g1009-number-converter":44,"../../base/events/aka-g1009-event-manager":47,"../../models/aka-g1009-bet-model":7},"path":"preview-scripts/assets/Script/UI/big-win/aka-g1009-big-win-actor.js"},{"deps":{},"path":"preview-scripts/assets/Script/GameManager/aka_1009-JoinGameData.js"},{"deps":{"../GameManager/aka_1009-GameManager":49},"path":"preview-scripts/assets/Script/Test/aka_1009_TestGameManager.js"},{"deps":{"../../base/controller/aka-g1009-game-controller":46,"../../base/events/aka-g1009-event-manager":47,"../feature/aka-g1009-feature-trigger-actor":35},"path":"preview-scripts/assets/Script/UI/bonus-game/aka-g1009-bonus-trigger-actor.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/feature/aka-g1009-feature-trigger-actor.js"},{"deps":{"../../base/Util/aka-g1009-number-converter":44,"../../base/events/aka-g1009-event-manager":47,"../../models/aka-g1009-balance-model":30,"../../models/aka-g1009-bet-model":7},"path":"preview-scripts/assets/Script/UI/change-bet/aka-g1009-change-bet-actor.js"},{"deps":{"../../base/controller/aka-g1009-game-controller":46,"../../base/events/aka-g1009-event-manager":47,"../feature/aka-g1009-feature-trigger-actor":35},"path":"preview-scripts/assets/Script/UI/freespins/aka-g1009-freespins-retrigger-actor.js"},{"deps":{"../../base/Util/aka-g1009-number-converter":44,"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/history-popup/aka-g1009-popup-history-item.js"},{"deps":{"../../base/Util/aka-g1009-number-converter":44,"../../base/events/aka-g1009-event-manager":47,"../../models/aka-g1009-bet-model":7},"path":"preview-scripts/assets/Script/UI/jackpot/aka-g1009-jackpot-banner.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"../../models/aka-g1009-balance-model":30,"../../models/aka-g1009-bet-model":7,"./aka-g1009-button":61},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-bet-button.js"},{"deps":{"../../aka-g1009-game-config":5,"../../base/controller/aka-g1009-game-controller":46,"../../base/events/aka-g1009-event-manager":47,"../../models/aka-g1009-bet-model":7,"./aka-g1009-win-cell-item":89},"path":"preview-scripts/assets/Script/UI/present-win/aka-g1009-present-win-panel.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/provider/aka-g1009-sprite-frame-provider.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/spin-panel/aka-g1009-spin-item-data.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/Util/aka-g1009-number-converter.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/animation/aka-g1009-animation.js"},{"deps":{"../../UI/present-win/aka-g1009-present-win-panel":41,"../events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/base/controller/aka-g1009-game-controller.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/events/aka-g1009-event-manager.js"},{"deps":{},"path":"preview-scripts/assets/Script/GameManager/aka_1009-SpinGameData.js"},{"deps":{"./aka_1009-JoinGameData":32,"./aka_1009-SpinGameData2":53,"events":91},"path":"preview-scripts/assets/Script/GameManager/aka_1009-GameManager.js"},{"deps":{"../base/Util/aka-g1009-number-converter":44,"../base/events/aka-g1009-event-manager":47,"./provider/aka-g1009-sprite-frame-provider":42},"path":"preview-scripts/assets/Script/UI/aka-g1009-notification-message.js"},{"deps":{"../../base/controller/aka-g1009-game-controller":46,"../../base/events/aka-g1009-event-manager":47,"../feature/aka-g1009-feature-trigger-actor":35},"path":"preview-scripts/assets/Script/UI/freespins/aka-g1009-freespins-trigger-actor.js"},{"deps":{"../../GameManager/aka_1009-GameManager":49,"../../base/Util/aka_date-util":82,"../../base/events/aka-g1009-event-manager":47,"./aka-g1009-popup-history-item":38},"path":"preview-scripts/assets/Script/UI/history-popup/aka-g1009-popup-history.js"},{"deps":{},"path":"preview-scripts/assets/Script/GameManager/aka_1009-SpinGameData2.js"},{"deps":{"../../base/Util/aka-g1009-number-converter":44,"../../base/controller/aka-g1009-game-controller":46,"../../base/events/aka-g1009-event-manager":47,"../../models/aka-g1009-balance-model":30},"path":"preview-scripts/assets/Script/UI/feature/aka-g1009-feature-win-actor.js"},{"deps":{"../../base/controller/aka-g1009-game-controller":46,"../../base/events/aka-g1009-event-manager":47,"../feature/aka-g1009-feature-content-activation-actor":63},"path":"preview-scripts/assets/Script/UI/freespins/aka-g1009-freespins-content-activation-actor.js"},{"deps":{"../../base/Util/aka-g1009-number-converter":44,"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/jackpot/aka-g1009-jackpot-actor.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"./aka-g1009-button":61},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-button-controller.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-button-home.js"},{"deps":{"../../base/Util/aka_date-util":82,"../../base/events/aka-g1009-event-manager":47,"./aka-g1009-popup-history":52,"./aka-g1009-popup-jackpot-history-item":65},"path":"preview-scripts/assets/Script/UI/history-popup/aka-g1009-popup-jackpot-history.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"../provider/aka-g1009-sprite-frame-provider":42},"path":"preview-scripts/assets/Script/UI/history-popup/aka-g1009-popup-history-detail.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-button.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-button-spin.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/feature/aka-g1009-feature-content-activation-actor.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-info-toggle-button.js"},{"deps":{"../../base/Util/aka-g1009-number-converter":44},"path":"preview-scripts/assets/Script/UI/history-popup/aka-g1009-popup-jackpot-history-item.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-popup-error.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"../../models/aka-g1009-bet-model":7},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-jackpot-info-content.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-select-bet-panel.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"../../models/aka-g1009-balance-model":30,"../../models/aka-g1009-bet-model":7},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-popup-select-bet.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"../../base/Util/aka-g1009-number-converter":44,"../../models/aka-g1009-bet-model":7,"./aka-g1009-bet-button":40},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-bet-button-v2.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"./aka-g1009-toggle-simulator":73},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-system-panel.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-round-popup.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-toggle-simulator.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"./aka-g1009-win-line":88},"path":"preview-scripts/assets/Script/UI/present-win/aka-g1009-present-win-line-panel.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-info-toggle-panel.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-info-page.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"./aka-g1009-cell-item":79},"path":"preview-scripts/assets/Script/UI/spin-panel/aka-g1009-spin-item.js"},{"deps":{"../../base/events/aka-g1009-event-manager":47,"./aka-g1009-info-toggle-button":64},"path":"preview-scripts/assets/Script/UI/popup/aka-g1009-bet-toggle-button.js"},{"deps":{"../../base/animation/aka-g1009-animation-provider":84,"../provider/aka-g1009-sprite-frame-provider":42},"path":"preview-scripts/assets/Script/UI/spin-panel/aka-g1009-cell-item.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/aka-g1009-perist-root-node.js"},{"deps":{"../../aka-g1009-game-config":5,"../../base/Util/aka-g1009-number-converter":44,"../../base/events/aka-g1009-event-manager":47,"./aka-g1009-spin-item":77,"./aka-g1009-spin-item-data":43},"path":"preview-scripts/assets/Script/UI/spin-panel/aka-g1009-spin-panel.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/Util/aka_date-util.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/animation/aka-g1009-spine-animation-handler.js"},{"deps":{},"path":"preview-scripts/assets/Script/base/animation/aka-g1009-animation-provider.js"},{"deps":{"./aka-g1009-animation":45,"./aka-g1009-spine-animation-handler":83},"path":"preview-scripts/assets/Script/base/animation/aka-g1009-spine-animation.js"},{"deps":{"./aka-g1009-sound-player":21},"path":"preview-scripts/assets/Script/base/sound/aka-g1009-music-player.js"},{"deps":{"../events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/base/sound/aka-g1009-sound-button-click.js"},{"deps":{},"path":"preview-scripts/assets/Script/UI/present-win/aka-g1009-win-line.js"},{"deps":{"../../aka-g1009-game-config":5,"../../base/animation/aka-g1009-animation-provider":84,"../provider/aka-g1009-sprite-frame-provider":42},"path":"preview-scripts/assets/Script/UI/present-win/aka-g1009-win-cell-item.js"},{"deps":{"../UI/present-win/aka-g1009-present-win-panel":41,"../models/aka-g1009-balance-model":30,"../models/aka-g1009-bet-model":7,"./events/aka-g1009-event-manager":47},"path":"preview-scripts/assets/Script/base/aka-g1009-simulator-server.js"},{"deps":{},"path":"preview-scripts/__node_modules/events/events.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    