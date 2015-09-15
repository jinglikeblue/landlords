class HallScene extends ASkinCom
{
    public btnSet: egret.gui.Button;
    public btnHelp: egret.gui.Button;
    public btnAdvice: egret.gui.Button;
    public btnBuy: egret.gui.Button;
    public btnStart: egret.gui.Button;
    public txtGold: egret.gui.Label;

    public constructor() 
    {
        super(skins.scene.HallSceneSkin);
    }

    public init()
    {
        
    }

    public addListeners(): void
    {
        this.btnSet.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnSet_touchBeginHandler, this);
        this.btnHelp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnHelp_touchBeginHandler, this);
        this.btnAdvice.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnAdvice_touchBeginHandler, this);

        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnStart_touchHandler, this);
    }

    public removeListeners(): void
    {
        this.btnSet.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnSet_touchBeginHandler, this);
        this.btnHelp.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnHelp_touchBeginHandler, this);
        this.btnAdvice.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnAdvice_touchBeginHandler, this);

        this.btnStart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnStart_touchHandler, this);
    }

    private btnSet_touchBeginHandler(e: egret.TouchEvent): void
    {
        egret.gui.Alert.show("开发中");
    }

    private btnHelp_touchBeginHandler(e: egret.TouchEvent): void
    {
        egret.gui.Alert.show("开发中");
    }

    private btnAdvice_touchBeginHandler(e: egret.TouchEvent): void
    {
        egret.gui.Alert.show("开发中");
    }

    private btnStart_touchHandler(e: egret.TouchEvent): void
    {
        GUIManager.showScene(new RoomScene());
    }
} 