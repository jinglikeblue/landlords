class RoomScene extends ASkinCom
{
    public card0: egret.gui.UIAsset;
    public card1: egret.gui.UIAsset;
    public card2: egret.gui.UIAsset;
    public playerLeft: PlayerOther;
    public playerRight: PlayerOther;
    public playerSelf: PlayerSelf;
    public txtMultiple: egret.gui.Label;
    public txtBase: egret.gui.Label;


    public constructor() 
    {
        super(skins.scene.RoomSceneSkin);
    }

    public init()
    {
        this.playerLeft.setData({ pos:"player_left"});
        this.playerRight.setData({ pos:"player_right"});

        this.txtMultiple.text = "0";
        this.txtBase.text = "0";
    }
} 