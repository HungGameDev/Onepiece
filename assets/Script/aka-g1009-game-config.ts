export const reelCount: number = 5;
export const rowCount: number = 3;
export const NEAR_WIN_SYMBOL = ['Scatter', 'Core', 'Bonus', 'Reactor'];
export const NEAR_WIN_SYMBOL_NORMAL_ANIMATION = ['Scatter', 'Core', 'Bonus'];
export const JACKPOT_ITEM_SYMBOL = ['Core', 'Reactor'];

export class SlottyParameter {

	public static GetReelCount(): number {
		return reelCount;
	}

	public static GetCellIndex(reelIndex: number, rowIndex: number): number {
		return reelIndex + (rowIndex * reelCount);
	}

	public static GetReelIndex(cellIndex: number): number {
		return cellIndex % reelCount;
	}

	public static GetRowIndex(cellIndex: number): number {
		return Math.floor(cellIndex / reelCount);
	}
}