import { Slot45WinLineResult } from "../../UI/present-win/Slot45-present-win-panel";

export class ComboData {
    private explodedCells: number[];
    private Cells: string[];
    private winPoint: number;
    private WinLines: Slot45WinLineResult[];

    public constructor(explodedCells: number[]) {
        this.explodedCells = explodedCells;
        this.Cells = null;
        this.winPoint = 0;
        this.WinLines = [];
    }

    public GetExplodedCells(): number[] {
        return this.explodedCells;
    }

    public GetWinPoint(): number {
        return this.winPoint;
    }

    public GetCells(): string[] {
        return this.Cells;
    }


    public GetWinLines(): Slot45WinLineResult[] {
        return this.WinLines;
    }

    public SetExplodedCells(explodedCells): void {
        this.explodedCells = explodedCells;
    }

    public SetWinPoint(winPoint): void {
        this.winPoint = winPoint;
    }

    public AddWinPoint(point): void {
        this.winPoint = this.winPoint + point;
    }

    public SetCells(Cells): void {
        this.Cells = Cells;
    }


    public SetWinLines(WinLines): void {
        this.WinLines = WinLines;
    }
}