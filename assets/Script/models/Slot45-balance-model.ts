export class Slot45BalanceModel
{
	private static instance: Slot45BalanceModel;
	private balance: number = 0;

	public static GetInstance()
	{
		if (!Slot45BalanceModel.instance)
			Slot45BalanceModel.instance = new Slot45BalanceModel();
		return Slot45BalanceModel.instance;
	}

	public SetBalance(balance): void
	{
		this.balance = balance;
	}

	public GetBalance(): number
	{
		return this.balance;
	}
}