import { GAME_MANAGER_EVENT, GameManager1009, JackpotInfo, JackpotMessage, PlayerData1009, PopupInfoMessage, StartGameData1009 } from "../GameManager/Slot45-GameManager";
import { Slot45WinLineResult } from "../UI/present-win/Slot45-present-win-panel";
import { NEAR_WIN_SYMBOL, SlottyParameter, reelCount, rowCount } from "../Slot45-game-config";
import { ComboData } from "../avenger-game/model/combo-data";
import { Slot45BalanceModel } from "../models/Slot45-balance-model";
import { Slot45BetModel } from "../models/Slot45-bet-model";
import { Slot45EventManager } from "./events/Slot45-event-manager";

const { ccclass, property } = cc._decorator;

export const SLOTTY_ITEM = {
	'Bonus': 'Bonus',
	'Scatter': 'Scatter',
	'Jackpot': 'Jackpot',
	'Ace': 'Ace',
	'King': 'King',
	'Queen': 'Queen',
	'Jack': 'Jack',
}

export const WIN_LINE_MAPPING = [
	[5, 6, 7, 8, 9],
	[0, 1, 2, 3, 4],
	[10, 11, 12, 13, 14],
	[5, 6, 2, 8, 9],
	[5, 6, 12, 8, 9],
	[0, 1, 7, 13, 14],
	[10, 11, 7, 3, 4],
	[0, 11, 2, 13, 4],
	[10, 1, 12, 3, 14],
	[5, 1, 12, 3, 9],
	[10, 6, 2, 8, 14],
	[1, 6, 12, 8, 4],
	[5, 11, 7, 3, 9],
	[5, 1, 7, 13, 9],
	[10, 6, 7, 8, 14],
	[0, 6, 7, 8, 4],
	[5, 11, 12, 13, 9],
	[5, 1, 2, 3, 9],
	[10, 11, 7, 3, 4],
	[0, 1, 7, 13, 14]
];

@ccclass
export default class ConnectServer extends cc.Component {

	private gameManager1009: GameManager1009;

	private currentSession: any;
	private betInfos: any;
	private isFreespins: boolean = false;
	private totalFreespins: number = 0;
	private dataJackpot: any;

	constructor() {
		super();

		this.gameManager1009 = GameManager1009.getInstance();
	}

	protected onLoad(): void {
		this.register();
	}

	start() {
		//hard set bet multipliser = 9
		Slot45BetModel.GetInstance().SetBetMultiplier(WIN_LINE_MAPPING.length);
		this.gameManager1009.startGame();

		// this.gameManager1009.getJPHistory(0, 8).then((data) => {
		// 	console.log('getJPHistory', data);
		// })

		// this.gameManager1009.getBetHistory(0, 8).then((data) => {
		// 	console.log('getBetHistory', data);
		// })

		if (this.dataJackpot) {
			setTimeout(() => {
				Slot45EventManager.GetInstance().notify('JackpotUpdate', this.dataJackpot);
			}, 100);
		}
	}

	private register(): void {

		this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.START_GAME_SUCCESS, (data: StartGameData1009) => {
			console.log('START_GAME_SUCCESS', data);

			this.currentSession = data.playerState;
			this.betInfos = data.betInfos;
			let betPerLines = data.betInfos.map(betInfo => betInfo.betDenom);
			Slot45BetModel.GetInstance().SetBetPerLines(betPerLines);

			Slot45BalanceModel.GetInstance().SetBalance(this.gameManager1009.getPlayerMoney());

			Slot45EventManager.GetInstance().notify("BetInfos", this.betInfos);
			if (data.hasOwnProperty("playerState") && data.playerState) {
				// Slot45BetModel.GetInstance().SetCurrentBetPerLine(data.playerState.datas[0].content.bet);
				Slot45BetModel.GetInstance().SetCurrentBetPerLine(100);
			}
			if (data.hasOwnProperty("allJackpotInfos")) {
				this.dataJackpot = data.allJackpotInfos;
			}
			if (this.currentSession && this.currentSession.hasOwnProperty("freeGameRemain") && this.currentSession.freeGameRemain > 0) {
				this.isFreespins = true;
				setTimeout(() => {
					let resuilt = this.processNormalData();

					resuilt.featureDatas.push({
						hitRule: "freespins",
						totalFreespins: this.currentSession.freeGameRemain,
						isRetrigger: false,

					});
					Slot45EventManager.GetInstance().notify("resume", resuilt);
				}, 100);
			}
			else {
				if (this.currentSession && this.currentSession.hasOwnProperty("bonusGameRemain") && this.currentSession.bonusGameRemain > 0) {

					setTimeout(() => {
						let resuilt = this.processNormalData();
						resuilt.featureDatas = [];
						Slot45EventManager.GetInstance().notify("resumeBonus", resuilt);
					}, 100);
				}
				else {
					Slot45EventManager.GetInstance().notify("init");
				}
			}
		})

		this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.NORMAL_GAME_RESULT, (data: PlayerData1009) => {
			console.log('NORMAL_GAME_RESULT', data);
			this.currentSession = data;
			this.nextScrollData();
		})

		this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.FREE_GAME_RESULT, (data: PlayerData1009) => {
			console.log('FREE_GAME_RESULT', data);
			this.currentSession = data;
			this.nextScrollData();
		})

		this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.BONUS_GAME_RESULT, (data: PlayerData1009) => {
			console.log('BONUS_GAME_RESULT', data);
			this.currentSession = data;
			this.nextScrollData();
		})

		this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.PLAYER_MONEY_UPDATE, (data: number) => {
			console.log('PLAYER_MONEY_UPDATE', data);
			// Slot45BalanceModel.GetInstance().SetBalance(data);
			// Slot45EventManager.GetInstance().notify("BalanceChange", data);
		})

		this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.JACKPOT_UPDATE, (data: { [key: string]: JackpotInfo }) => {
			console.log('JACKPOT_UPDATE', data);
			Slot45EventManager.GetInstance().notify('JackpotUpdate', data);
		})

		this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.JACKPOT_SHOW_MULTIPLE, (data: { [key: string]: JackpotMessage }) => {
			console.log('JACKPOT_SHOW_MULTIPLE', data);
			Slot45EventManager.GetInstance().notify('JackpotShowMultiple', data);
		})

		this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.JACKPOT_HIDE_MULTIPLE, (data: { [key: string]: JackpotMessage }) => {
			console.log('JACKPOT_SHOW_MULTIPLE', data);
			Slot45EventManager.GetInstance().notify('JackpotHideMultiple');
		})

		this.gameManager1009.registerEvent(GAME_MANAGER_EVENT.POPUP_INFO_MESSAGE, (data: PopupInfoMessage) => {
			console.log('POPUP_INFO_MESSAGE', data);
			Slot45EventManager.GetInstance().notify('PopupInfoMessage', data);
		})

		Slot45EventManager.GetInstance().register("SpinRequest", this.onSpinRequest.bind(this));
		Slot45EventManager.GetInstance().register("PickUpRequest", this.onPickUpRequest.bind(this));
		Slot45EventManager.GetInstance().register("EndRound", this.onEndRound.bind(this));
		Slot45EventManager.GetInstance().register("ShowBetPanel", this.onEndRound.bind(this));
		Slot45EventManager.GetInstance().register("UpdateBetLine", this.onUpdateBetLine.bind(this));
	}

	private onUpdateBetLine(betLines: number[]) {
		Slot45BetModel.GetInstance().SetBetMultiplier(betLines.length);
		Slot45EventManager.GetInstance().notify("ShowBetPanel");
	}

	private onPickUpRequest(item: number): void {
		this.gameManager1009.bonusPlay(item);
	}

	private onSpinRequest(requestData): void {
		if (requestData.isFreespin) {
			this.gameManager1009.freeSpin();
		}
		else {
			let betDenom = Slot45BetModel.GetInstance().GetCurrentBetPerLine();
			let betInfo = this.betInfos.filter((betInfo) => betInfo.betDenom == betDenom)[0];
			this.gameManager1009.normalSpin(betInfo.betId);
		}
	}

	private processNormalData(): any {
		this.fakeBalanceSpin();
		let isEndround = false;
		let isRetrigger = false;
		let isExpandWild = false;
		let winPoint = 0;
		let featureData = {};
		featureData = {
			hitRule: "freespins",
			totalFreespins: this.currentSession.freeGameTotal,
			isRetrigger: false,
		};
		let featureDatas = [];
		let winBonus = [];
		var cellsResult = [];
		let WinLines: Slot45WinLineResult[] = [];
		let winScatters = [];
		let freespintotalWinPoint = 0;
		let jackpotWinPoint = 0;
		let jackpotWinLine : Slot45WinLineResult = null;
		let totalWinPoint = 0;
		let freespinLeft = 0;
		let bonusGameDatas = null;
		let comboData: ComboData[] = [];

		var countCombo = 0;
		this.currentSession.datas.forEach(element => {
			switch (element.data) {
				case "playedSpin":
					if (countCombo == 0) {
						cellsResult = this.createCellsResult(element.content);
					}
					else {
						comboData[countCombo - 1].SetCells(this.createCellsResult(element.content));
					}
					break;
				case "winLine":
					var content = element.content;
					var arrNumber = [];
					arrNumber.push(content.hitSetID);
					var winLineData = new Slot45WinLineResult(content.hitSet, content.pay, arrNumber, content.what);
					if (countCombo == 0) {
						WinLines.push(winLineData);
						winPoint += winLineData.GetWinPoint();
					}
					else {
						comboData[countCombo - 1].GetWinLines().push(winLineData);
						comboData[countCombo - 1].AddWinPoint(winLineData.GetWinPoint());
					}
					break;
				case "explodedCells":
					countCombo++;
					comboData.push(new ComboData(element.content))
					break;
				case "spinTrigger":
					if (element.content.bonus == "freespins") {
						featureDatas.push({
							hitRule: "freespins",
							totalFreespins: element.content.spins,
							isRetrigger: this.isFreespins,
						});
						this.isFreespins = true;
						freespinLeft = element.content.spins || 0;
						// var scatters = [];
						// let cells = countCombo > 0 ? comboData[countCombo - 1].GetCells() : cellsResult;
						// for (let index = 0; index < cells.length; index++) {
						// 	let cell = cells[index];
						// 	if (cell == "Scatter") {
						// 		scatters.push(index);
						// 	}
						// }
						winScatters.push(new Slot45WinLineResult(element.content.trigger.hitSet, 0, [-1], "Scatter", false, true));
					}
					break;
				case "spinTriggerBonus":
					featureDatas.push({
						hitRule: "bonus",
						totalFreespins: 0,
						isRetrigger: false,
					});
					// let bonus = [];
					// let cells = countCombo > 0 ? comboData[countCombo - 1].GetCells() : cellsResult;
					// for (let index = 0; index < cells.length; index++) {
					// 	let cell = cells[index];

					// 	if (cell == "Bonus") {
					// 		bonus.push(index);
					// 	}
					// }
					winBonus.push(new Slot45WinLineResult(element.content.trigger.hitSet, element.content.pay, [-1], "Bonus", false, true));
					break;
				case "jackpotWin":
					var content = element.content;
					var arrNumber = [];
					arrNumber.push(content.hitSetID);
					var winLineData = new Slot45WinLineResult(content.hitSet, content.pay, arrNumber, content.what);
					if (countCombo == 0) {
						WinLines.push(winLineData);
						winPoint += winLineData.GetWinPoint();
					}
					else {
						comboData[countCombo - 1].GetWinLines().push(winLineData);
						comboData[countCombo - 1].AddWinPoint(winLineData.GetWinPoint());
					}

					jackpotWinPoint = content.pay;
					jackpotWinLine = winLineData;
					break;
				case "gameEnd":
					isEndround = true;
					totalWinPoint = element.content.win || 0;
					break;
				default:
					break;
			}
		});
		return {
			Cells: cellsResult,
			WinLines: WinLines,
			allWinLine: null,
			ScatterSpin: [],
			WinScatters: winScatters,
			WinBonus: winBonus,
			featureDatas: featureDatas,
			freespinLeft: freespinLeft,
			totalFreespins: this.totalFreespins,
			isFreespins: this.isFreespins,
			isEndround: isEndround,
			winPoint: winPoint,
			totalWinPoint: totalWinPoint,
			freespintotalWinPoint: freespintotalWinPoint,
			jackpotWinPoint: jackpotWinPoint,
			jackpotWinLine: jackpotWinLine,
			bonusGameDatas: bonusGameDatas,
			comboData: comboData
		}
	}

	private processNormalData1(): any {
		this.fakeBalanceSpin();
		if (this.currentSession.hasOwnProperty("freeGameMatrix")) {
			this.currentSession.normalGameMatrix = this.currentSession.freeGameMatrix;
		}
		if (this.currentSession.hasOwnProperty("freeGamePaylines")) {
			this.currentSession.normalPayLines = this.currentSession.freeGamePaylines;
		}
		if (this.currentSession.data.hasOwnProperty("freeMatrixOrigin")) {
			this.currentSession.data.normalMatrixOrigin = this.currentSession.data.freeMatrixOrigin;
		}

		let isEndround = false;
		let isRetrigger = false;
		let isExpandWild = false;
		let winPoint = 0;
		let featureData = {};
		let featureDatas = [];
		let winBonus = [];
		let expandWildIndices = [];
		let cellsResult = [];
		let WinLines: Slot45WinLineResult[] = [];
		let winScatters = [];
		let freespintotalWinPoint = 0;
		let jackpotWinPoint = 0;
		let jackpotWinLine = [];
		let totalWinPoint = 0;
		let freespinLeft = 0;
		let bonusGameDatas = null;
		featureData = {
			hitRule: "freespins",
			totalFreespins: this.currentSession.freeGameTotal,
			isRetrigger: false,
		};
		//parse items
		// let items = []
		// this.currentSession.normalGameMatrix.forEach(item => items.push(SLOTTY_ITEM[item]));
		// console.warn('itemsitems: ', items);
		// let count = 0;
		// for (let reelIndex = 0; reelIndex < reelCount; reelIndex++) {
		// 	for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
		// 		let cellIndex = SlottyParameter.GetCellIndex(reelIndex, rowIndex);
		// 		cellsResult[cellIndex] = items[count++];
		// 	}
		// }
		cellsResult = this.createCellsResult(this.currentSession.normalGameMatrix);
		// get winScatter

		//parse winline
		if (this.currentSession.hasOwnProperty("normalPayLines")) {
			this.currentSession.normalPayLines.forEach(normalPayLine => {
				WinLines.push(
					new Slot45WinLineResult(WIN_LINE_MAPPING[normalPayLine.pwl - 1].slice(0, normalPayLine.pwrc), normalPayLine.pwa, [normalPayLine.pwl - 1], SLOTTY_ITEM[normalPayLine.psc], false, NEAR_WIN_SYMBOL.includes((SLOTTY_ITEM[normalPayLine.psc]))));
			});
		}
		WinLines.forEach(winLine => winPoint += winLine.GetWinPoint());

		isRetrigger = this.isFreespins;
		//parse freespins
		if (this.currentSession.hasOwnProperty("freeGameTotal") && this.currentSession.hasOwnProperty("freeGameRemain") && this.currentSession.freeGameTotal == this.currentSession.freeGameRemain) {
			this.isFreespins = true;
			featureDatas.push({
				hitRule: "freespins",
				totalFreespins: this.currentSession.freeGameTotal,
				isRetrigger: false,

			});

			if (this.currentSession.state == 1) {
				let scatters = [];
				for (let index = 0; index < cellsResult.length; index++) {
					let cell = cellsResult[index];

					if (cell == "Scatter") {
						scatters.push(index);
					}
				}
				winScatters.push(new Slot45WinLineResult(scatters, 0, [-1], "Scatter", false, true));

			}
		}
		freespinLeft = this.currentSession.freeGameRemain || 0;
		//parse bonus
		if (this.currentSession.hasOwnProperty("bonusGameRemain") && this.currentSession.bonusGameRemain > 0) {
			featureDatas.push({
				hitRule: "bonus",
				totalFreespins: 0,
				isRetrigger: false,
			});
			if (this.currentSession.bonusGameTotal == this.currentSession.bonusGameRemain) {
				let bonus = [];
				for (let index = 0; index < cellsResult.length; index++) {
					let cell = cellsResult[index];

					if (cell == "Bonus") {
						bonus.push(index);
					}
				}
				winBonus.push(new Slot45WinLineResult(bonus, 0, [-1], "Bonus", false, true));
			}
		}

		if (this.currentSession.hasOwnProperty("bonusMatrix")) {
			let bonusTotalMultiple = 0;
			let bonusCurrentMultiple = 0;
			let currentIndex = this.currentSession.bonusMatrix.length;
			for (let index = 0; index < this.currentSession.bonusMatrix.length; index++) {
				let resuilt = this.currentSession.bonusMatrix[index];
				let pickupDatas = resuilt.split(";");
				bonusTotalMultiple += Number(pickupDatas[0]);
				if (currentIndex > index) {
					bonusCurrentMultiple += Number(pickupDatas[0]);
				}
			}

			bonusGameDatas = {
				bonusTotalWinPoint: this.currentSession.bonusGameWinAmount || 0,
				bonusMultiple: Number(this.currentSession.data.lastOpenSymbolBonus) || 0,
				bonusTotalMultiple: bonusTotalMultiple,
				bonusCurrentStateIndex: currentIndex,
				bonusCurrentMultiple: bonusCurrentMultiple
			};
		}
		//expanding wild

		//parse jackpot
		if (this.currentSession.hasOwnProperty("jackpotPayLine") && this.currentSession.jackpotPayLine.length > 0) {
			let jackpotTotalWin = 0;

			// this.currentSession.jackpotPayLine.forEach(result => {
			let jackpotLine = this.currentSession.jackpotPayLine[0].split(";");
			jackpotTotalWin += Number(jackpotLine[1]);
			let winLineNumber = jackpotLine[2] - 1;
			let coreWinLine = [];
			let hitSet = WIN_LINE_MAPPING[winLineNumber];
			hitSet.forEach(index => {
				let cell = cellsResult[index];
				if (cell == "Core") {
					coreWinLine.push(index);
				}
			})
			jackpotWinLine.push(new Slot45WinLineResult(coreWinLine, 0, [winLineNumber], "Core", false, true));
			// });

			jackpotWinPoint = jackpotTotalWin;
		}
		if (this.currentSession.hasOwnProperty("data")) {
			if (this.currentSession.data.hasOwnProperty("normalMatrixOrigin") || this.currentSession.data.hasOwnProperty("freeMatrixOrigin")) {
				//convert  matrix origin to cellresult
				let items = [];
				let newCellsResult = [];
				this.currentSession.data.normalMatrixOrigin.forEach(item => items.push(SLOTTY_ITEM[item]));
				let count = 0;
				for (let reelIndex = 0; reelIndex < reelCount; reelIndex++) {
					for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
						let cellIndex = SlottyParameter.GetCellIndex(reelIndex, rowIndex);
						newCellsResult[cellIndex] = items[count++];
					}
				}
				for (let reelIndex = 0; reelIndex < reelCount; reelIndex++) {
					let count = 0;
					for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
						let cellIndex = SlottyParameter.GetCellIndex(reelIndex, rowIndex);
						if (cellsResult[cellIndex] == "Core") {
							count++;
							if (count == 3) {
								isExpandWild = true;
								let indices = [];
								for (let newRowIndex = 0; newRowIndex < rowCount; newRowIndex++) {
									let newCellIndex = SlottyParameter.GetCellIndex(reelIndex, newRowIndex);
									if (newCellsResult[newCellIndex] == "Core") {
										newCellsResult[newCellIndex] = "Reactor";
										indices.push(newCellIndex);
									}
								}
								if (indices.length > 2) {
									expandWildIndices.push(indices[1]);
								} else {
									expandWildIndices.push(indices[0]);
								}
							}
						}
					}
				}
				cellsResult = Object.assign([], newCellsResult);
			}
		}

		if (this.currentSession.hasOwnProperty("isFinish") && freespinLeft == 0) {
			isEndround = true;
		}

		freespintotalWinPoint = this.currentSession.freeWinAmount || 0;
		totalWinPoint = this.currentSession.totalWinAmount || 0;

		//parse combo win
		let comboData = [];
		if (this.currentSession.hasOwnProperty("comboData")) {
			comboData = this.getComboData(this.currentSession.comboData);
		}

		return {
			Cells: cellsResult,
			WinLines: WinLines,
			allWinLine: null,
			WinScatters: winScatters,
			WinBonus: winBonus,
			featureDatas: featureDatas,
			freespinLeft: freespinLeft,
			totalFreespins: this.totalFreespins,
			isFreespins: this.isFreespins,
			isEndround: isEndround,
			isExpandWild: isExpandWild,
			expandWildIndices: expandWildIndices,
			winPoint: winPoint,
			totalWinPoint: totalWinPoint,
			freespintotalWinPoint: freespintotalWinPoint,
			jackpotWinPoint: jackpotWinPoint,
			jackpotWinLine: jackpotWinLine,
			bonusGameDatas: bonusGameDatas,
			comboData: comboData
		}
	}

	private getComboData(rawcomboData) {
		var comboData = [];
		rawcomboData.forEach(rawData => {
			let data = {
				explodedCells: [],
				Cells: [],
				WinLines: [],
				allWinLine: null,
				winPoint: 0
			};
			data.explodedCells = rawData.explodedCells;
			data.Cells = this.createCellsResult(rawData.normalGameMatrix);
			if (this.currentSession.hasOwnProperty("normalPayLines")) {
				this.currentSession.normalPayLines.forEach(normalPayLine => {
					data.WinLines.push(
						new Slot45WinLineResult(WIN_LINE_MAPPING[normalPayLine.pwl - 1].slice(0, normalPayLine.pwrc), normalPayLine.pwa, [normalPayLine.pwl - 1], SLOTTY_ITEM[normalPayLine.psc], false, NEAR_WIN_SYMBOL.includes((SLOTTY_ITEM[normalPayLine.psc]))));
				});
			}
			data.WinLines.forEach(winLine => data.winPoint += winLine.GetWinPoint());
			comboData.push(data);
		});
		return comboData;
	}

	private createCellsResult(arrItem) {
		var cellsResult = [];
		for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
			for (let reelIndex = 0; reelIndex < reelCount; reelIndex++) {
				var item = arrItem[reelIndex][rowIndex];
				let cellIndex = SlottyParameter.GetCellIndex(reelIndex, rowIndex);
				cellsResult.push(SLOTTY_ITEM[item]);
			}
		}
		return cellsResult;
	}

	private nextScrollData(): void {
		let result = this.processNormalData();
		setTimeout(() => {
			Slot45EventManager.GetInstance().notify("NextScrollData", result);
			if (result.freespinLeft == 0) {
				this.isFreespins = false;
			}
		}, 100);
	}

	private fakeBalanceSpin() {
		if (!this.isFreespins) {
			let newBalance = Slot45BalanceModel.GetInstance().GetBalance() - Slot45BetModel.GetInstance().GetTotalBetPoint();
			Slot45BalanceModel.GetInstance().SetBalance(newBalance);
			Slot45EventManager.GetInstance().notify("BalanceChange", newBalance);
		}
	}

	private onEndRound() {
		let newBalance = this.gameManager1009.getPlayerMoney();
		Slot45BalanceModel.GetInstance().SetBalance(newBalance);
		Slot45EventManager.GetInstance().notify("BalanceChange", newBalance);
	}
}