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

                break;
            case RoomPlayerState.ROB:

                break;
            case RoomPlayerState.PUSH:

                break;
        }
    }

    private turnToCall(): void
    {

    }

    private turnToRob(): void
    {
        if (this._vo.playerVO.isRobot)
        {

        }
    }

    private turnToPlay(deskCards:number[]): void
    {
        if (this._vo.playerVO.isRobot)
        {

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
    public onNotice(nt:string, pos:number, data:any = null): void
    {
        switch (nt)
        {
            case RoomNoticeType.PLAYER_ENTER_ROOM:
            case RoomNoticeType.PLAYER_READY:
            case RoomNoticeType.PLAYER_EXIT_ROOM:
                if (false == this._vo.playerVO.isRobot)
                {
                    //通知玩家
                    NoticeManager.sendNotice(new RoomNotice(nt, pos, data));
                }
                break;
            case RoomNoticeType.GAME_TO_CALL:
                if (pos == this._vo.pos && this._vo.playerVO.isRobot)
                {
                    this._room.callForLandlord(this._vo.playerVO, AI.isCall(this._room.vo, this._vo.cards));
                }
                else
                {
                    NoticeManager.sendNotice(new RoomNotice(nt, pos, data));
                }
                break;
            case RoomNoticeType.GAME_TO_ROB:
                if (pos == this._vo.pos && this._vo.playerVO.isRobot)
                {
                    this._room.robForLandlord(this._vo.playerVO, AI.isRob(this._room.vo, this._vo.cards));
                }
                else
                {
                    NoticeManager.sendNotice(new RoomNotice(nt, pos, data));
                }
                break;
            case RoomNoticeType.GAME_TO_PLAY:
                if (pos == this._vo.pos && this._vo.playerVO.isRobot)
                {
                    this.aiPush();
                }
                else
                {
                    NoticeManager.sendNotice(new RoomNotice(nt, pos, data));
                }
                break;
            case RoomNoticeType.GAME_CALLED:
            case RoomNoticeType.GAME_PLAYED:
            case RoomNoticeType.GAME_ROBED:
                if (false == this._vo.playerVO.isRobot)
                {
                    NoticeManager.sendNotice(new RoomNotice(nt, pos, data));
                }
                break;
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
                this._room.callForLandlord(this._vo.playerVO, false);
                break;
            case RoomPlayerState.ROB:
                this._room.robForLandlord(this._vo.playerVO, false);
                break;
            case RoomPlayerState.PUSH:
                this.autoPlay();
                break;
        }
    }

    //自动出牌
    public autoPlay(): void
    {
        this._room.play(this._vo.playerVO, AI.play(this._room.vo.lastCards, this._vo.cards, this._room.isOneTeam(this._vo.pos, this._room.vo.lastPlayPos)));
    }

    //AI出牌
    public aiPush(): void
    {
        this.autoPlay();
    }

} 