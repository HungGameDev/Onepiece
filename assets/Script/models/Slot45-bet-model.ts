export class Slot45BetModel
{
	private static instance: Slot45BetModel;
	private betPerLines: number[] = [];
	private currentBetPerLine: number = 0;
	private betMultiplier: number = 1;

	public static GetInstance()
	{
		if (!Slot45BetModel.instance)
			Slot45BetModel.instance = new Slot45BetModel();
		return Slot45BetModel.instance;
	}

	public SetBetMultiplier(betMultiplier: number)
	{
		this.betMultiplier = betMultiplier;
	}

	public GetBetMultiplier(): number
	{
		return this.betMultiplier;
	}

	public GetTotalBetPoint(): number
	{
		return this.betMultiplier * this.currentBetPerLine;
	}

	public TryGetTotalBetPointByBetMultiplier(betMultiplier: number): number
	{
		return betMultiplier * this.currentBetPerLine;
	}
	public GetBetPointByIndex(index:number): number
	{
		if (index == -1 || index > this.betPerLines.length - 1)
			return 0;
		return this.betPerLines[index];
	}

	public SetBetPerLines(betPerLines: number[]): void
	{
		this.currentBetPerLine = betPerLines[0];
		this.betPerLines = betPerLines;
	}

	public SetCurrentBetPerLine(betPerLine: number): void
	{
		this.currentBetPerLine = betPerLine;
	}

	public GetCurrentBetPerLine(): number
	{
		return this.currentBetPerLine;
	}

	public IncreaseBetPerLine(): void
	{
		this.currentBetPerLine = this.GetNextBetPerLine();
	}

	public DecreaseBetPerLine(): void
	{
		this.currentBetPerLine = this.GetPreviousBetPerLine();
	}

	public GetNextBetPerLine(): number
	{
		let index = (this.betPerLines.indexOf(this.currentBetPerLine) + 1) % this.betPerLines.length;
		return this.betPerLines[index];
	}

	public GetNextTotalBetPoint(): number
	{
		let index = (this.betPerLines.indexOf(this.currentBetPerLine) + 1) % this.betPerLines.length;
		return  this.betMultiplier * this.betPerLines[index];
	}

	public GetNextTotalBetPointbyIndex(index:number): number
	{
		return  this.betMultiplier * this.betPerLines[index];
	}

	public GetNextBetPerLineIndex(): number
	{	
		return  (this.betPerLines.indexOf(this.currentBetPerLine) + 1) % this.betPerLines.length;
	}

	public SetBetbyIndex(index:number): void
	{
		this.currentBetPerLine= this.betPerLines[index];
	}

	public GetBetPerLinebyIndex(index:number): number
	{
		return this.betPerLines[index];
	}

	public SetBetToMin(): void
	{
		this.currentBetPerLine= this.betPerLines[0];
	}

	public GetPreviousBetPerLine(): number
	{
		let index = (this.betPerLines.indexOf(this.currentBetPerLine) - 1) % this.betPerLines.length;
		return this.betPerLines[index];
	}

}