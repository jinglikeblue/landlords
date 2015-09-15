class RoomPlayer
{
    private _vo: RoomPlayerVO;

    public get vo(): RoomPlayerVO
    {        
        return this._vo;
    }

    public constructor(vo:PlayerVO, pos:number)
    {
        this._vo = new RoomPlayerVO();
        this._vo.playerVO = vo;
        this._vo.pos = pos;
        this.changeState(RoomPlayerState.FREE);
    }

    public changeState(state: number): void
    {
        this._vo.state = state;
    }

    public onNotice(nt:string, data:any): void
    {
        if (this._vo.playerVO.isRobot)
        {
        }
        NoticeManager.sendNotice(new Notice(nt, data));
    }
} 