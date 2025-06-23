import { G1009WinLineResult } from "../../UI/present-win/Slot45-present-win-panel";
import { G1009EventManager } from "../events/Slot45-event-manager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class G1009GameController extends cc.Component {
	private static instance: G1009GameController;

	private data: any = null;
	private featureDatas: any[] = [];
	private isTurbo: boolean = false;
	private oldata: any = null;
	private freespinTotalWinPoint: number = 0;
	private jackpotTotalWinPoint: number = 0;
	private totalWinPoint: number = 0;
	private isFreespins: boolean = false;
	private isAuto: boolean = false;

	private comboCount: number = 0;

	public static GetInstance() {
		if (!G1009GameController.instance)
			G1009GameController.instance = new G1009GameController();
		return G1009GameController.instance;
	}

	private register(): void {
		G1009EventManager.GetInstance().register("ActiveAuto", this.onActiveAuto.bind(this));
		G1009EventManager.GetInstance().register("StopAuto", this.onStopAuto.bind(this));
		G1009EventManager.GetInstance().register("Turbo", this.onTurbo.bind(this));
		G1009EventManager.GetInstance().register("SpinStarted", this.onSpinStarted.bind(this));
		G1009EventManager.GetInstance().register("NextScrollData", this.onNextScrollData.bind(this));
		G1009EventManager.GetInstance().register("featureWinCompleted", this.onfeatureWinCompleted.bind(this));
		G1009EventManager.GetInstance().register("featureWinstarted", this.onfeatureWinstarted.bind(this));
		G1009EventManager.GetInstance().register("BonusWinStarted", this.onBonusWinStarted.bind(this));
		G1009EventManager.GetInstance().register("BonusWinComplete", this.onBonusWinComplete.bind(this));
		G1009EventManager.GetInstance().register("resume", this.onResume.bind(this));
		G1009EventManager.GetInstance().register("resumeBonus", this.onResumeBonus.bind(this));
		G1009EventManager.GetInstance().register("EnterFreespins", this.onEnterFreespins.bind(this));
		G1009EventManager.GetInstance().register("EndRound", this.onEndRound.bind(this));


		G1009EventManager.GetInstance().register("StartPresentWinCombo", this.onStartPresentWinCombo.bind(this));
	}

	private onStartPresentWinCombo() {
		this.comboCount++;
	}

	private onActiveAuto(): void {
		this.isAuto = true;
	}

	private onStopAuto(): void {
		this.isAuto = false;
	}

	private onEndRound(): void {
		console.warn("onEndRound: ",this.comboCount);
		this.comboCount = 0;
	}

	public IsActiveAuto(): boolean {
		return this.isAuto;
	}

	protected onLoad(): void {
		if (G1009GameController.instance) {
			throw new Error("Error: Instantiation failed: Use GameController.getInstance() instead of new.");
		}
		G1009GameController.instance = this;
		this.register();
	}

	private onResume(data: any) {
		// this.data = data;
		// this.oldata = Object.assign({}, data);
		// this.featureDatas = data.featureDatas;
	}

	private onResumeBonus(data: any) {
		//this.oldata = Object.assign({}, data);
	}

	private onBonusWinStarted(): void {
	}

	private onBonusWinComplete(): void {
		var filterFeatureDatas = this.data.featureDatas.filter(x => !x.hitRule.includes("bonus"))
		this.featureDatas = filterFeatureDatas;
		this.data.featureDatas = filterFeatureDatas;
		G1009EventManager.GetInstance().notify("featureWinCompleted", { hitRule: "bonus" });
	}

	private onSpinStarted(): void {
		this.comboCount = 0;
		var requestData = { isFreespin: this.CheckIsFreespin() }
		G1009EventManager.GetInstance().notify("SpinRequest", requestData);
	}

	private onTurbo(isTurbo: boolean) {
		this.isTurbo = isTurbo;
	}

	private onNextScrollData(data: any): void {
		this.data = this.processSpinData(data);
		if (data.featureDatas.length > 0) {
			this.featureDatas = Object.assign([], data.featureDatas);
		}
		if (data.hasOwnProperty("freespintotalWinPoint")) {
			this.freespinTotalWinPoint = data.freespintotalWinPoint;
		}
		if (data.hasOwnProperty("totalWinPoint")) {
			this.totalWinPoint = data.totalWinPoint;
		}
		if (data.hasOwnProperty("freespintotalWinPoint")) {
			this.freespinTotalWinPoint = data.freespintotalWinPoint;
		}
		if (!!this.data.bonusGameDatas) {
			G1009EventManager.GetInstance().notify("PickUpdata", this.data.bonusGameDatas);
		}
		G1009EventManager.GetInstance().notify("DataRespond", data.Cells);
		G1009EventManager.GetInstance().notify("WinDataRespond", this.data);
	}

	private onfeatureWinCompleted(): void {
		this.onEndRound();
	}

	private onfeatureWinstarted(): void {
		this.isFreespins = false;
		// if (this.oldata == null) { this.oldata = this.data; }
		// cc.tween(this.node).delay(1).call(() => {
		// 	G1009EventManager.GetInstance().notify("SetOldItems", this.oldata);

		// 	this.oldata.featureDatas = [];
		// }).start();
	}

	public CheckExpandWild(data: any = null): boolean {
		if (data == null) { data = this.data; }
		return data != null && data.isExpandWild;
	}

	public CheckWinLineData(data: any = null): boolean {
		if (data == null) { data = this.data; }
		return data != null && (data.allWinLine || data.WinScatters.length > 0 || data.WinBonus.length > 0);
	}

	public CheckBonusFeatureTrigger(data: any = null): boolean {
		if (data == null) { data = this.data; }
		return data != null && data.featureDatas.length > 0;
	}

	public CheckFreespinEnd(data: any = null): boolean {
		if (data == null) { data = this.data; }
		return data != null && data.isFreespins && data.freespinLeft == 0;
	}

	public CheckFreespinContinue(data: any = null): boolean {
		if (data == null) { data = this.data; }
		return data != null && data.freespinLeft > 0;
	}

	public CheckFreespinTrigger(featureDatas: any = null): boolean {
		if (this.CheckBonusPointTrigger(featureDatas))
			return false;
		if (featureDatas == null) { featureDatas = this.featureDatas; }

		var featureData = featureDatas.find(x => x.hitRule.includes("freespins"));
		return featureDatas && featureDatas.length > 0 && featureData != null && !featureData.isRetrigger;
	}

	public CheckBonusPointTrigger(featureDatas: any = null): boolean {
		if (featureDatas == null) { featureDatas = this.featureDatas; }
		var featureData = featureDatas.find(x => x.hitRule.includes("bonus"));
		return featureDatas != null && featureDatas.length > 0 && featureData != null;
	}

	public CheckFreespinRetrigger(featureDatas: any = null): boolean {
		if (this.CheckBonusPointTrigger(featureDatas))
			return false;
		if (featureDatas == null) { featureDatas = this.featureDatas; }
		var featureData = featureDatas.find(x => x.hitRule.includes("freespins"));
		return featureDatas != null && featureDatas.length > 0 && featureData != null && featureData.isRetrigger;
	}

	public CheckComboWinPresentation(): boolean {
		return this.comboCount < this.data.comboData.length;
	}

	public GetFeatureWinData(): any {
		return this.featureDatas[0] || null;
	}

	public GetFreespinTotalWinPoint(): any {
		return this.freespinTotalWinPoint;
	}

	public GetTotalWinPoint(): any {
		return this.totalWinPoint;
	}

	public GetExpandWildIndices(): any {
		return this.data.expandWildIndices;
	}

	public GetComboData(): any {
		var comboData = this.data.comboData[this.comboCount];
		this.processAllWinLinesComboData(comboData);
		return comboData;
	}

	private processAllWinLinesComboData(inputData: any): any {
		let winLine = inputData.WinLines;
		let allWinResource = this.generateWinAllResource(winLine);
		if (allWinResource.GetWinPoint() > 0) {
			inputData.allWinLine = allWinResource;
		}
		winLine.sort(function (a: { winPoint: number; }, b: { winPoint: number; }) { return b.winPoint - a.winPoint });
		inputData.WinLines = winLine;
	}

	private processSpinData(inputData: any): any {
		let data = Object.assign({}, inputData);
		let winLine = data.WinLines;
		let allWinResource = this.generateWinAllResource(winLine);
		let winScatters = data.WinScatters;
		let winBonus = data.WinBonus;
		if ((this.CheckFreespinContinue(inputData) && this.CheckFreespinRetrigger(data.featureDatas)) || this.CheckBonusFeatureTrigger(inputData)) {
			winLine = [];
			winBonus.forEach((lineBonus: any) => winLine.push(lineBonus));
			winScatters.forEach((lineScatter: any) => winLine.push(lineScatter));
		}
		else if (this.CheckFreespinContinue()) {
			winLine = [];
		}
		if (allWinResource.GetWinPoint() > 0) {
			// winLine.push(allWinResource);
			data.allWinLine = allWinResource;
		}
		winLine.sort(function (a: { winPoint: number; }, b: { winPoint: number; }) { return b.winPoint - a.winPoint });
		data.WinLines = winLine;
		return data;
	}

	private generateWinAllResource(winLines: G1009WinLineResult[]): any {
		let winAllSymbols: any[] = [];
		let winPoint = 0;
		let winNumber: number[] = [];
		for (let index = 0; index < winLines.length; index++) {
			let winline = winLines[index].GetWinLine();
			winline.forEach(item => { winAllSymbols.push(item) });
			winPoint = winPoint + winLines[index].GetWinPoint();
			winLines[index].GetWinNumber().forEach(number => winNumber.push(number));

		}
		winAllSymbols = Array.from(new Set(winAllSymbols));
		return new G1009WinLineResult(winAllSymbols, winPoint, winNumber, '', true);
	}

	public CheckTurbo(): boolean {
		return this.isTurbo;
	}

	private onEnterFreespins(): void {
		this.isFreespins = true;
	}

	public CheckIsFreespin(): boolean {
		return this.isFreespins;
	}

	public GetWinBonus():G1009WinLineResult{
		return this.data.WinBonus;
	}
}
