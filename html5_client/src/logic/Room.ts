class Room
{
    private _vo: RoomVO;
    //通过VO定位的Player对象
    private _players: any = {};    
    public constructor(scoreMultiple:number, scoreBase:number)
    {
        this._vo = new RoomVO();
        this._vo.scoreMultiple = scoreMultiple;
        this._vo.scoreBase = scoreBase;        
        this.changeState(RoomState.FREE);
        this._vo.createTime = egret.getTimer();
        egret.Ticker.getInstance().register(this.roomUpdate, this);
    }

    public dispose(): void
    {
        egret.Ticker.getInstance().unregister(this.roomUpdate, this);
    }

    public roomUpdate(dt: number): void
    {
        
    }

    public playerEnter(player:PlayerVO):boolean
    {
        return true;
    }

    public playerExit(player: PlayerVO): boolean
    {
        return true;
    }

    public playerReady(player: PlayerVO): boolean
    {
        return true;
    }

    public playerAction(player: PlayerVO, actType:number, data:any = null):void
    {

    }

    private onAllReady(): void
    {

    }

    private changeState(state:number): void
    {
        this._vo.state = state;
        this._vo.enterStateTime = egret.getTimer();
    }
} 