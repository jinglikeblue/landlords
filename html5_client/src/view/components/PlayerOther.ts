class PlayerOther extends ASkinCom
{
    public static STATE_THINKING: string = "thinking";
    public static STATE_ACTION: string = "action";
    public static STATE_CARD: string = "card";

    public txtName: egret.gui.Label;
    public imgHead: egret.gui.UIAsset;
    public txtCardRemain: egret.gui.Label;
    public cardback: egret.gui.UIAsset;

    private _clock: Clock;

    private _cardStartPos: egret.Point;
    private _cardGap: number;
    private _clockPos: egret.Point;
    private _labelPos: egret.Point;

    public constructor()
    {
        super(null);
    }

    public init():void
    {
        this.txtCardRemain.text = "0";
    }

    public onSetData(): void
    {
        if (this.data != null)
        {
            var cfg: any = DC.cfg[this.data.pos];
            this._cardStartPos = new egret.Point(cfg.card_start[0], cfg.card_start[1]);
            this._cardGap = cfg.card_gap;
            this._clockPos = new egret.Point(cfg.clock_pos[0], cfg.clock_pos[1]);
            this._labelPos = new egret.Point(cfg.label_pos[0], cfg.label_pos[1]);
        }
    }
}