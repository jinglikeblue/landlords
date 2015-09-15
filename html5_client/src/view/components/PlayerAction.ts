class PlayerAction extends ASkinCom
{
    public static STATE_CALL: string = "call";
    public static STATE_ROB: string = "rob";
    public static STATE_LEAD: string = "lead";

    public clock: Clock;
    public btnNoCall: egret.gui.Button;
    public btnCall: egret.gui.Button;
    public btnNoRob: egret.gui.Button;
    public btnRob: egret.gui.Button;
    public btnPass: egret.gui.Button;
    public btnReset: egret.gui.Button;
    public btnTip: egret.gui.Button;
    public btnPush: egret.gui.Button;

    public constructor()
    {
        super(skins.components.player.PlayActionSkin);
    }

    public init(): void
    {
        
    }

    public addListeners(): void
    {
        this.btnNoCall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnCall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnNoRob.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnRob.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnPass.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnTip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnPush.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
    }

    public removeListeners(): void
    {
        this.btnNoCall.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnCall.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnNoRob.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnRob.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnPass.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnReset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnTip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnPush.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
    }

    private btn_tapHandler(e: egret.TouchEvent): void
    {
        switch (e.currentTarget)
        {
            case this.btnNoCall:
                this.setState(PlayerAction.STATE_ROB);
                break;
            case this.btnCall:
                break;
            case this.btnNoRob:
                this.setState(PlayerAction.STATE_LEAD);
                break;
            case this.btnRob:
                break;
            case this.btnPass:
                this.setState(PlayerAction.STATE_CALL);
                break;
            case this.btnReset:
                break;
            case this.btnTip:
                break;
            case this.btnPush:
                break;
        }
    }
} 