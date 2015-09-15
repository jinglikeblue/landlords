class Clock extends ASkinCom
{
    public clock: egret.gui.UIAsset;
    public txtTime: egret.gui.Label;
    private _cd: Cooldown;
    public constructor()
    {
        super(skins.components.ClockSkin);        
    }

    public init(): void
    {
        this._cd = new Cooldown();
        this.txtTime.text = "0";
    }

    public setSeconds(v: number): void
    {
        this._cd.init(v * 1000, this.cdStep, this);
    }

    public start(): void
    {
        this._cd.start();
    }

    public pause(): void
    {
        this._cd.stop();
    }

    public cdStep(ms:number): void
    {
        var secs: number = (ms / 1000) >> 0;
        this.txtTime.text = secs.toString();
    }
} 