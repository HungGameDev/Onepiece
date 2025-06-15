
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/GameManager/aka_1009-GameManager');
require('./assets/Script/GameManager/aka_1009-JoinGameData');
require('./assets/Script/GameManager/aka_1009-SpinGameData');
require('./assets/Script/GameManager/aka_1009-SpinGameData2');
require('./assets/Script/Test/aka_1009_TestGameManager');
require('./assets/Script/UI/aka-g1009-notification-message');
require('./assets/Script/UI/big-win/aka-g1009-big-win-actor');
require('./assets/Script/UI/bonus-game/aka-g1009-bonus-trigger-actor');
require('./assets/Script/UI/change-bet/aka-g1009-change-bet-actor');
require('./assets/Script/UI/feature/aka-g1009-feature-content-activation-actor');
require('./assets/Script/UI/feature/aka-g1009-feature-trigger-actor');
require('./assets/Script/UI/feature/aka-g1009-feature-win-actor');
require('./assets/Script/UI/freespins/aka-g1009-freespins-content-activation-actor');
require('./assets/Script/UI/freespins/aka-g1009-freespins-retrigger-actor');
require('./assets/Script/UI/freespins/aka-g1009-freespins-trigger-actor');
require('./assets/Script/UI/history-popup/aka-g1009-popup-history-detail');
require('./assets/Script/UI/history-popup/aka-g1009-popup-history-item');
require('./assets/Script/UI/history-popup/aka-g1009-popup-history');
require('./assets/Script/UI/history-popup/aka-g1009-popup-jackpot-history-item');
require('./assets/Script/UI/history-popup/aka-g1009-popup-jackpot-history');
require('./assets/Script/UI/jackpot/aka-g1009-jackpot-actor');
require('./assets/Script/UI/jackpot/aka-g1009-jackpot-banner');
require('./assets/Script/UI/popup/aka-g1009-bet-button-v2');
require('./assets/Script/UI/popup/aka-g1009-bet-button');
require('./assets/Script/UI/popup/aka-g1009-bet-toggle-button');
require('./assets/Script/UI/popup/aka-g1009-button-controller');
require('./assets/Script/UI/popup/aka-g1009-button-home');
require('./assets/Script/UI/popup/aka-g1009-button-spin');
require('./assets/Script/UI/popup/aka-g1009-button');
require('./assets/Script/UI/popup/aka-g1009-info-page');
require('./assets/Script/UI/popup/aka-g1009-info-toggle-button');
require('./assets/Script/UI/popup/aka-g1009-info-toggle-panel');
require('./assets/Script/UI/popup/aka-g1009-jackpot-info-content');
require('./assets/Script/UI/popup/aka-g1009-popup-error');
require('./assets/Script/UI/popup/aka-g1009-popup-select-bet');
require('./assets/Script/UI/popup/aka-g1009-round-popup');
require('./assets/Script/UI/popup/aka-g1009-select-bet-panel');
require('./assets/Script/UI/popup/aka-g1009-system-panel');
require('./assets/Script/UI/popup/aka-g1009-toggle-simulator');
require('./assets/Script/UI/present-win/aka-g1009-present-win-line-panel');
require('./assets/Script/UI/present-win/aka-g1009-present-win-panel');
require('./assets/Script/UI/present-win/aka-g1009-win-cell-item');
require('./assets/Script/UI/present-win/aka-g1009-win-line');
require('./assets/Script/UI/provider/aka-g1009-sprite-frame-provider');
require('./assets/Script/UI/spin-panel/aka-g1009-cell-item');
require('./assets/Script/UI/spin-panel/aka-g1009-spin-item-data');
require('./assets/Script/UI/spin-panel/aka-g1009-spin-item');
require('./assets/Script/UI/spin-panel/aka-g1009-spin-panel');
require('./assets/Script/aka-g1009-game-config');
require('./assets/Script/aka-g1009-slotty-setting');
require('./assets/Script/avenger-game/avenger-total-win/combo-win-point');
require('./assets/Script/avenger-game/avenger-total-win/total-win-panel');
require('./assets/Script/avenger-game/border-win-cell-panel/border-win-cell-panel');
require('./assets/Script/avenger-game/exploding-panel/avenger-exploding-cell');
require('./assets/Script/avenger-game/exploding-panel/avenger-exploding-panel');
require('./assets/Script/avenger-game/exploding-panel/avenger-smoke-panel');
require('./assets/Script/avenger-game/model/combo-data');
require('./assets/Script/avenger-game/spin-panel/avenger-spin-item');
require('./assets/Script/avenger-game/spin-panel/avenger-spin-panel-config');
require('./assets/Script/avenger-game/spin-panel/avenger-spin-panel');
require('./assets/Script/base/Util/aka-g1009-number-converter');
require('./assets/Script/base/Util/aka_date-util');
require('./assets/Script/base/aka-g1009-connect-server');
require('./assets/Script/base/aka-g1009-perist-root-node');
require('./assets/Script/base/aka-g1009-simulator-server');
require('./assets/Script/base/animation/aka-g1009-animation-provider');
require('./assets/Script/base/animation/aka-g1009-animation');
require('./assets/Script/base/animation/aka-g1009-spine-animation-handler');
require('./assets/Script/base/animation/aka-g1009-spine-animation');
require('./assets/Script/base/controller/aka-g1009-game-controller');
require('./assets/Script/base/events/aka-g1009-event-manager');
require('./assets/Script/base/sound/ak-g1009-sfs-player');
require('./assets/Script/base/sound/aka-g1009-music-player');
require('./assets/Script/base/sound/aka-g1009-sound-button-click');
require('./assets/Script/base/sound/aka-g1009-sound-controller');
require('./assets/Script/base/sound/aka-g1009-sound-handler');
require('./assets/Script/base/sound/aka-g1009-sound-player');
require('./assets/Script/base/state-machine/abstract/aka-g1009-state');
require('./assets/Script/base/state-machine/state/aka-g1009-bet-state');
require('./assets/Script/base/state-machine/state/aka-g1009-bonus-state');
require('./assets/Script/base/state-machine/state/aka-g1009-expand-wild-state');
require('./assets/Script/base/state-machine/state/aka-g1009-feature-trigger-state');
require('./assets/Script/base/state-machine/state/aka-g1009-feature-win-state');
require('./assets/Script/base/state-machine/state/aka-g1009-init-state');
require('./assets/Script/base/state-machine/state/aka-g1009-jackpot-state');
require('./assets/Script/base/state-machine/state/aka-g1009-spin-state');
require('./assets/Script/base/state-machine/state/aka-g1009-win-state');
require('./assets/Script/config/sound-config');
require('./assets/Script/models/aka-g1009-balance-model');
require('./assets/Script/models/aka-g1009-bet-model');

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