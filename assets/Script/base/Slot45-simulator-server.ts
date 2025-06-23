import { G1009WinLineResult } from "../UI/present-win/Slot45-present-win-panel";
import { G1009BalanceModel } from "../models/Slot45-balance-model";
import { G1009BetModel } from "../models/Slot45-bet-model";
import { G1009EventManager } from "./events/Slot45-event-manager";

const { ccclass, property } = cc._decorator;
const TOTAL_FREESPINS = 5;
@ccclass
export default class G1009SimulatorServer extends cc.Component {

	result: any = null;
	winlineContent: number[][];
	WinLines: G1009WinLineResult[];
	winLineAndScatter: G1009WinLineResult[];
	winScatters: G1009WinLineResult[];
	winBonus: G1009WinLineResult[];
	private isFreespins: boolean = false;
	private freespinLeft: number = 0;
	private totalFreespins: number = 0;
	private isRetrigger: boolean = false;
	private totalWinPoint: number = 0;

	protected onLoad(): void {
		this.register();
		this.WinLines = [
			new G1009WinLineResult([0, 1, 2, 3, 4], 25000, [1]),
			new G1009WinLineResult([5, 6, 7, 8, 9], 25000, [0]),
			new G1009WinLineResult([10, 11, 12, 13, 14], 25000, [2])
		];
		this.winLineAndScatter = [
			new G1009WinLineResult([0, 1, 2, 3, 4], 40000, [1], "A"),
			new G1009WinLineResult([5, 6, 7, 8, 9], 40000, [0], "Q"),
		];
		this.winScatters = [
			new G1009WinLineResult([10, 12, 14], 0, [-1], "Scatter")
		];

		this.winBonus = [
			new G1009WinLineResult([1, 2, 3], 0, [-1], "Bonus")
		];

		this.winlineContent = [[5, 6, 7, 8, 9], [0, 1, 2, 3, 4], [10, 11, 12, 13, 14]];
		//, [0, 6, 12, 8, 4], [10, 6, 3, 8, 14]
		G1009BetModel.GetInstance().SetBetPerLines([100, 250, 1000, 2500, 10000, 25000,50000]);
		G1009BetModel.GetInstance().SetBetMultiplier(20);
		G1009BalanceModel.GetInstance().SetBalance(1000);
	}

	protected start(): void {
		setTimeout(() => {
			G1009EventManager.GetInstance().notify("init");
		}, 0.1);
	}

	private register(): void {
		G1009EventManager.GetInstance().register("SpinRequest", this.onSpinRequest.bind(this));
	}

	private fakeBalanceSpin() {
		if (!this.isFreespins)
		{
			let newBalance = G1009BalanceModel.GetInstance().GetBalance() - G1009BetModel.GetInstance().GetTotalBetPoint();
			G1009BalanceModel.GetInstance().SetBalance(newBalance);
			G1009EventManager.GetInstance().notify("BalanceChange");
		}
	}

	private onSpinRequest(): void {
		let isEndround = false;
		let isRetrigger = false;
		let isExpandWild = false;
		let winPoint = 0;
		let featureData = {};
		let featureDatas = [];
		let winBonus = [];
		let jackpotWinPoint = 0;
		let expandWildIndices = 0;
		featureData = {
			hitRule: "freespins",
			totalFreespins: TOTAL_FREESPINS,
			isRetrigger: false,
		};
		this.fakeBalanceSpin();
		let cellsResult = this.generateDemoResult();
		//fake winline
		let WinLines: G1009WinLineResult[] = [];
		let winScatters = [];

		// //fake freespin Win and bonus win
		({ featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround } = this.fakeFreespinWin(featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround));

		// //fake freespin Win short with bigwin
		// ({ featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices,  isEndround } = this.fakeBigWinInShortFreespins(featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround));

		//fake jackpot
		// ({ featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint } = this.fakeJackpot(featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint));

		//check bug
		// ({ featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint } = this.fakebug(featureDatas, featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint));

		WinLines.forEach(winLine => winPoint += winLine.GetWinPoint());

		this.result = {
			Cells: cellsResult,
			WinLines: WinLines,
			WinScatters: winScatters,
			WinBonus: winBonus,
			featureDatas: featureDatas,
			freespinLeft: this.freespinLeft,
			totalFreespins: this.totalFreespins,
			isFreespins: this.isFreespins,
			isEndround: isEndround,
			isExpandWild: isExpandWild,
			expandWildIndices: expandWildIndices,
			winPoint: winPoint,
			totalWinPoint: this.totalWinPoint,
			jackpotWinPoint: jackpotWinPoint,
		}
		if (this.freespinLeft == 0)
		{
			this.isFreespins = false;
		}

		this.simulatorServer();
	}

	private fakebug(featureDatas: any[], featureData: {}, cellsResult: string[], WinLines: G1009WinLineResult[], winScatters: any[], winBonus: any[], isExpandWild: boolean, expandWildIndices: number, isEndround: boolean, jackpotWinPoint: number) {
		cellsResult = [
			"K",
			"Core",
			"Core",
			"Q",
			"Scatter",
			"Wrench",
			"Wrench",
			"Core",
			"Scatter",
			"K",
			"Scatter",
			"A",
			"Core",
			"Q",
			"Helmet"
		]
		// WinLines = Object.assign([], this.WinLines);
		// WinLines[0].SetWinSymbol(cellsResult[0]);
		// WinLines[1].SetWinSymbol(cellsResult[5]);
		// WinLines[2].SetWinSymbol(cellsResult[10]);
		// isExpandWild = true;
		// expandWildIndices = 12;
		// jackpotWinPoint = 1000000;
		return { featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint };
	}

	private fakeJackpot(featureDatas: any[], featureData: {}, cellsResult: string[], WinLines: G1009WinLineResult[], winScatters: any[], winBonus: any[], isExpandWild: boolean, expandWildIndices: number, isEndround: boolean, jackpotWinPoint: number) {
		cellsResult[0] = "Core";
		cellsResult[1] = "Core";
		cellsResult[12] = "Reactor";
		cellsResult[3] = "Core";
		cellsResult[4] = "Core";
		WinLines = Object.assign([], this.WinLines);
		WinLines[0].SetWinSymbol(cellsResult[0]);
		WinLines[1].SetWinSymbol(cellsResult[5]);
		WinLines[2].SetWinSymbol(cellsResult[10]);
		isExpandWild = true;
		expandWildIndices = 12;
		jackpotWinPoint = 1000000;
		return { featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround, jackpotWinPoint };
	}

	private fakeBigWinInShortFreespins(featureDatas: any[], featureData: {}, cellsResult: string[], WinLines: G1009WinLineResult[], winScatters: any[], winBonus: any[], isExpandWild: boolean, expandWildIndices: number, isEndround: boolean) {
		if (!this.isFreespins)
		{
			this.totalWinPoint = 0;
			this.isFreespins = true;
			featureDatas.push(featureData);
			this.freespinLeft = 2;
			this.totalFreespins = 2;
			cellsResult = ["A", "A", "A", "A", "A", "Q", "Q", "Q", "Q", "Q", "Scatter", "K", "Scatter", "Core", "Scatter"];
			WinLines = this.winLineAndScatter;
			winScatters = this.winScatters;
		}
		else
		{
			this.freespinLeft--;
			//fake winline
			WinLines = Object.assign([], this.WinLines);
			WinLines[0].SetWinSymbol(cellsResult[0]);
			WinLines[1].SetWinSymbol(cellsResult[5]);
			WinLines[2].SetWinSymbol(cellsResult[10]);

			//fake expand wild
			cellsResult[7] = "Reactor";
			isExpandWild = true;

			if (this.freespinLeft == 0)
			{
				isEndround = true;
			}
		}
		return { featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround };
	}

	private fakeFreespinWin(featureDatas: any[], featureData: {}, cellsResult: string[], WinLines: G1009WinLineResult[], winScatters: any[], winBonus: any[], isExpandWild: boolean, expandWildIndices: number, isEndround: boolean) {
		if (!this.isFreespins)
		{
			this.totalWinPoint = 0;
			this.isFreespins = true;
			featureDatas.push(featureData);
			this.freespinLeft = TOTAL_FREESPINS;
			this.totalFreespins = TOTAL_FREESPINS;
			cellsResult = ["A", "A", "A", "A", "A", "Q", "Q", "Q", "Q", "Q", "Scatter", "K", "Scatter", "Core", "Scatter"];
			WinLines = this.winLineAndScatter;
			winScatters = this.winScatters;
		}

		else
		{
			this.freespinLeft--;
			if (this.freespinLeft == TOTAL_FREESPINS - 1)
			{
				featureData = {
					hitRule: "bonus",
					totalFreespins: 0,
					isRetrigger: false,
				};
				featureDatas.push(featureData);
				cellsResult[1] = "Bonus";
				cellsResult[2] = "Bonus";
				cellsResult[3] = "Bonus";
				winBonus = this.winBonus;
			}
			else
			{
				//fake winline
				WinLines = Object.assign([], this.WinLines);
				WinLines[0].SetWinSymbol(cellsResult[0]);
				WinLines[1].SetWinSymbol(cellsResult[5]);
				WinLines[2].SetWinSymbol(cellsResult[10]);


				//fake expand wild
				cellsResult[7] = "Reactor";
				isExpandWild = true;
			}
			if (this.freespinLeft == 0)
			{
				isEndround = true;
			}
		}
		return { featureData, cellsResult, WinLines, winScatters, winBonus, isExpandWild, expandWildIndices, isEndround };
	}

	private generateDemoResult(): string[] {
		let demoArray = [
			"A", "K", "Q", "J", "Bonus", "Communicator", "Helmet", "Mechanic"
			, "Pilot", "Wrench", "Core"];

		let templateResult = [];
		for (let index = 0; index < 15; index++)
		{
			let randomIndex = Math.floor(Math.random() * (demoArray.length - 1));
			templateResult[index] = demoArray[randomIndex];
		}
		this.WinLines.forEach(line => {
			let randomIndex = Math.floor(Math.random() * (demoArray.length - 1));
			line.GetWinLine().forEach(winlineContentIndex => {
				templateResult[winlineContentIndex] = demoArray[randomIndex];
			});
		});
		return templateResult;
	}

	private simulatorServer() {
		let delaytime = Math.floor(Math.random() * 2);
		let sep = cc.sequence(
			cc.delayTime(delaytime)
			, cc.callFunc(() => {
				G1009EventManager.GetInstance().notify("NextScrollData", this.result);
			}, this));
		this.node.runAction(sep);
	}
}