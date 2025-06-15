import { G1009EventManager } from "../../base/events/aka-g1009-event-manager";


const {ccclass, property} = cc._decorator;
const MAX_PAGE_INDEX = 1;
@ccclass
export default class G1009InfoPageActor extends cc.Component {
 
    @property(cc.ScrollView)
    private scrollView: cc.ScrollView = null;

    @property(cc.Node)
    private content: cc.Node = null;


    @property(cc.Button)
    private preButton: cc.Button = null;
    @property(cc.Button)
    private nextButton: cc.Button = null;

    currentToggleId: number = 0;
    protected onLoad(): void {
        this.register();
    }
    private register(): void {
        G1009EventManager.GetInstance().register("ChangeInfoPage", this.onChangeInfoPage.bind(this));
        G1009EventManager.GetInstance().register("ScrollToNextPage", this.onNextPageClick.bind(this));
        G1009EventManager.GetInstance().register("ScrollToPrevertPage", this.onPrevertPageClick.bind(this));
        G1009EventManager.GetInstance().register("HideInfoPanel", this.onHideClick.bind(this));
        G1009EventManager.GetInstance().register("ShowInfoPanel", this.onShowClick.bind(this));
    }
   
    
    private onChangeInfoPage(toggleId: number): void {
        if (this.currentToggleId != toggleId)
        {
            this.currentToggleId = toggleId;
            this.scrollView.scrollTo(new cc.Vec2(toggleId / MAX_PAGE_INDEX), 0.5);
            this.resetButton();
            if (this.currentToggleId == MAX_PAGE_INDEX)
                this.nextButton.interactable = false;
            if (this.currentToggleId == 0)
                this.preButton.interactable = false;
        }
    }

    private onNextPageClick(): void {
        if (this.currentToggleId < MAX_PAGE_INDEX)
        {
            this.currentToggleId += 1;          
            this.scrollView.scrollTo(new cc.Vec2(this.currentToggleId / MAX_PAGE_INDEX), 0.5);
            G1009EventManager.GetInstance().notify("ChangeInfoPage", this.currentToggleId);
            this.resetButton();
            if (this.currentToggleId == MAX_PAGE_INDEX)
            this.nextButton.interactable = false;
        }
    }
    
    private onPrevertPageClick(): void {
        if (this.currentToggleId > 0)
        {
            this.currentToggleId -= 1;         
            this.scrollView.scrollTo(new cc.Vec2(this.currentToggleId / MAX_PAGE_INDEX), 0.5);
            G1009EventManager.GetInstance().notify("ChangeInfoPage", this.currentToggleId);
            this.resetButton();
            if (this.currentToggleId == 0)
            this.preButton.interactable = false;
        }
    }

    private resetButton():void
    {
        this.preButton.interactable = true;
        this.nextButton.interactable = true;
    }

    private onHideClick(): void {
        this.content.active = false;
    }

    private onShowClick(): void {
        this.content.active = true;
        if (this.currentToggleId == MAX_PAGE_INDEX)
            this.nextButton.interactable = false;
        if (this.currentToggleId == 0)
            this.preButton.interactable = false;
    }
}
