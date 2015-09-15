class PlayerSelf extends ASkinCom
{
    public txtName: egret.gui.Label;
    public imgHead: egret.gui.UIAsset;      
    public action: PlayerAction;  

    public constructor()
    {
        super(null);
    }

    public init(): void
    {
        this.action.setState(PlayerAction.STATE_LEAD);
    }
} 