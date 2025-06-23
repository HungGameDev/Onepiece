export class G1009BalanceModel
{
	private static instance: G1009BalanceModel;
	private balance: number = 0;

	public static GetInstance()
	{
		if (!G1009BalanceModel.instance)
			G1009BalanceModel.instance = new G1009BalanceModel();
		return G1009BalanceModel.instance;
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