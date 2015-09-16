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
            case RoomPlayerState.FREE:
                
                break;
            case RoomPlayerState.PREPARE:
                this._vo.cards.length = 0;
                this._vo.isProxy = false;
                break;
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

    public onGetCard(card: number): void
    {
        var cardScore: number = CardUtil.getCardScore(card);
        var index: number = this._vo.cards.length;
        while (--index > -1)
        {
            var tempCardScore: number = CardUtil.getCardScore(this._vo.cards[index]);
            if (cardScore > tempCardScore)
            {
                this.vo.cards.splice(index, 0, card);
            }
        }        
    }

    public onDecideFirst(pos: number): void
    {
        if (pos == this._vo.pos)
        {
            this.changeState(RoomPlayerState.CALL);
        }
        else
        {
            this.changeState(RoomPlayerState.ROB);
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