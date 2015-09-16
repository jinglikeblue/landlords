class Room
{
    //每个人操作的时间限制
    public static TIME_LIMIT: number = 10000;

    private _enterStateFuns: any = {};
    private _exitStateFuns: any = {};
    private _updateStateFuns: any = {};

    private _vo: RoomVO;
    //通过PlayerVO定位的RoomPlayer对象
    private _players: any = {};  
    
    //添加房间角色
    private addRoomPlayer(playerVO: any): RoomPlayer
    {
        var pos: number = this._vo.players.length;
        var rp: RoomPlayer = new RoomPlayer(playerVO, pos, this);
        rp.vo.pos = pos;
        this._vo.players[pos] = rp.vo;
        this._players[playerVO] = rp;
        return rp;
    }

    //删除房间角色
    private removeRoomPlayer(playerVO: any): number
    {
        var rp: RoomPlayer = this.getRoomPlayer(playerVO);
        if (null == rp)
        {
            return -1;
        }
        var pos: number = rp.vo.pos;
        this._vo.players.splice(pos, 1);
        this._players[playerVO] = null;
        delete this._players[playerVO];
        return pos;
    }

    //获取房间玩家
    private getRoomPlayer(playerVO: any): RoomPlayer
    {
        return this._players[playerVO];
    }

    //获取房间玩家
    private getRoomPlayerByPos(pos: number): RoomPlayer
    {
        return this.getRoomPlayer(this._vo.players[pos]);
    }



    public constructor(scoreMultiple: number, scoreBase: number)
    {
        //注册状态控制方法
        this.registStateFuns();
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
        this._updateStateFuns[this._vo.state]();
    }

    public playerEnter(player: PlayerVO): boolean
    {
        if (this._vo.players.length > 3 || this._vo.state != RoomState.FREE)
        {
            return false;
        }

        var rp: RoomPlayer = this.addRoomPlayer(player);          
        //通知其它玩家有人进入了游戏
        this.noticeRoomPlayers(RoomNoticeType.PLAYER_ENTER_ROOM, rp.vo);   
        //自动准备
        this.playerReady(player);

        return true;
    }

    public playerExit(player: PlayerVO): boolean
    {
        if (this._vo.state != RoomState.FREE)
        {
            return false;
        }

        var pos: number = this.removeRoomPlayer(player);
        if (-1 == pos)
        {
            return false;
        }

        //通知其它玩家有人离开
        this.noticeRoomPlayers(RoomNoticeType.PLAYER_EXIT_ROOM, pos);

        return true;
    }

    public playerReady(player: PlayerVO): boolean
    {
        var rp: RoomPlayer = this.getRoomPlayer(player);
        if (null == rp)
        {
            return false;
        }

        rp.changeState(RoomPlayerState.PREPARE);

        if (this._vo.players.length == 3)
        {
            for (var k in this._players)
            {
                var rp: RoomPlayer = this._players[k];
                if (rp.vo.state == RoomPlayerState.PREPARE)
                {
                    return true;
                }
            }
        }

         //所有的角色都准备好了
        this.onAllReady();
        return true;
    }

    private onAllReady(): void
    {       
        //进入叫地主阶段
        this.changeState(RoomState.CALL_LANDLORD);
    }

    //玩家执行动作
    public playerAction(player: PlayerVO, actType: number, data: any = null): void
    {

    }



    private changeState(state: number): void
    {
        //退出旧的状态
        this._exitStateFuns[this._vo.state]();
        //进入新的状态
        this._vo.state = state;
        this._vo.enterStateTime = egret.getTimer();
        this._enterStateFuns[this._vo.state]();        
    }

    private noticeRoomPlayers(nt: string, data: any): void
    {
        for (var k in this._players)
        {
            var rp: RoomPlayer = this._players[k];
            rp.onNotice(nt, data)
        }
    }


    private registStateFuns(): void
    {
        this._enterStateFuns[RoomState.FREE] = this.enterStateFree.bind(this);
        this._enterStateFuns[RoomState.CALL_LANDLORD] = this.enterStateCallLandLord.bind(this);
        this._enterStateFuns[RoomState.PLAY] = this.enterStatePlay.bind(this);

        this._exitStateFuns[RoomState.FREE] = this.exitStateFree.bind(this);
        this._exitStateFuns[RoomState.CALL_LANDLORD] = this.exitStateCallLandLord.bind(this);
        this._exitStateFuns[RoomState.PLAY] = this.exitStatePlay.bind(this);

        this._updateStateFuns[RoomState.FREE] = this.updateStateFree.bind(this);
        this._updateStateFuns[RoomState.CALL_LANDLORD] = this.updateStateCallLandLord.bind(this);
        this._updateStateFuns[RoomState.PLAY] = this.updateStatePlay.bind(this);
    }

    //------------------空闲状态
    private enterStateFree(): void
    {

    }

    private exitStateFree(): void
    {

    }
    
    private updateStateFree(): void
    {
        if (this._vo.players.length < 3)
        {
            var now: number = egret.getTimer();

            if (now - this._vo.enterStateTime >= 5000)
            {
                //如果5秒钟还没有人进来，则加入电脑
                while (this._vo.players.length < 3)
                {
                    this.playerEnter(RobotMgr.getRobot());
                }
            }
        }
    }
    
    //----------------------叫地主
    private enterStateCallLandLord(): void
    {
        //初始化游戏数据
        do
        {
            //获取一副牌
            var deck: number[] = CardUtil.getDeck();
            this._vo.cards = deck;
            this._vo.first = (Math.random() * 3) >> 0;
            this._vo.nowPlayer = this._vo.first;
            var index: number = 0;
            for (var k in this._players)
            {
                var rp: RoomPlayer = this._players[k];
                var startIndex = index * 17;
                var endIndex = startIndex + 17;
               
                for (var i: number = startIndex; i < endIndex; i++)
                {
                    rp.onGetCard(deck[i]);                    
                }
                rp.onDecideFirst(this._vo.first);
            }

            this._vo.landlordCards = deck.slice(51);
            this._vo.nextPlayerTime = egret.getTimer() + Room.TIME_LIMIT;
        } while (0);
    }

    private exitStateCallLandLord(): void
    {

    }

    private updateStateCallLandLord(): void
    {
        var now: number = egret.getTimer();
        if (now >= this._vo.nextPlayerTime)
        {
            //玩家超时
            this.getRoomPlayerByPos(this._vo.nowPlayer).onOverTime();
        }
    }


    //--------------------------玩牌阶段
    private enterStatePlay(): void
    {
    }

    private exitStatePlay(): void
    {
    }

    private updateStatePlay(): void
    {
    }
} 