
export  class G1009SpinItemData {
    ReelDataType: string = "reel-data";
    ScrollSpeed: number = 60;
    TensionSpeedMultiplier: number = 2;
    TensionDuration: number = 2;
    DelayTimeSpinBetweenItems: number = 0.1;
    DelayTimeStopBetweenItems: number = 0.1;
    MomentumRange: number = 0;
    MomentumSpeed: number = 0;
    BounceRange: number = 0;
    BounceSpeed: number = 0;
    ReelData: number = 10;
    IsBlurSpin: boolean = true;
    IsDisableTopAndBottom: boolean = true;
    ReelDefaultData: string[] = ReelDefaultData;
}

const ReelDefaultData = [
    "Ace", "Jack", "King", "Queen", "Ace"
    , "Bonus", "Jackpot", "Scatter", "Jack", "Ace"
    , "King", "Queen", "Ace", "Jack", "Ace", "Jackpot"    
]
