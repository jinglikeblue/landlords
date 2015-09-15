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
    }

    public playerEnter(player:Player):boolean
    {
        return true;
    }

    public playerExit(player: Player): boolean
    {
        return true;
    }

    public playerReady(player: Player): boolean
    {
        return true;
    }

    public playerAction(player: Player, actType:number, data:any = null):void
    {

    }

    private onAllReady(): void
    {

    }


} 