class RoomPlayer
{
    private _vo: RoomPlayerVO;
    private _room: Room;

    public get vo(): RoomPlayerVO
    {        
        return this._vo;
    }

    public constructor(vo:PlayerVO, pos:number, room:Room)
    {
        this._vo = new RoomPlayerVO();
        this._vo.playerVO = vo;
        this._vo.pos = pos;
        this._room = room;
        this.changeState(RoomPlayerState.FREE);
    }

    public changeState(state: number): void
    {
        this._vo.state = state;
        switch (state)
        {
            case RoomPlayerState.CALL:
                if (this._vo.playerVO.isRobot)
                {

                }
                break;
            case RoomPlayerState.ROB:
                break;
            case RoomPlayerState.PUSH:
                break;
        }
    }

    //主要用来通知其它玩家的操作信息
    public onNotice(nt:string, data:any): void
    {
        if (this._vo.playerVO.isRobot)
        {
        }
        NoticeManager.sendNotice(new Notice(nt, data));
    }

    public onGotCards(landlordPos: number): void
    {
        if (landlordPos == this._vo.pos)
        {
            this.changeState(RoomPlayerState.CALL);
        }
        else
        {
            this.changeState(RoomPlayerState.ROB);
        }
    }

    /**
    * 玩家超时
    */
    public onOverTime(): void
    {
        switch (this._vo.state)
        {
            case RoomPlayerState.CALL:
                this._room.playerAction(this._vo.playerVO, PlayerActionType.NO_CALL);
                break;
            case RoomPlayerState.ROB:
                this._room.playerAction(this._vo.playerVO, PlayerActionType.NO_ROB);
                break;
            case RoomPlayerState.PUSH:
                this.autoPush();
                break;
        }
    }

    //自动出牌
    public autoPush(): void
    {

    }

    //AI出牌
    public aiPush(): void
    {

    }

} 