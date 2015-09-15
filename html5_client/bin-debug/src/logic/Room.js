var Room = (function () {
    function Room(scoreMultiple, scoreBase) {
        this._enterStateFuns = {};
        this._exitStateFuns = {};
        this._updateStateFuns = {};
        //通过PlayerVO定位的RoomPlayer对象
        this._players = {};
        //注册状态控制方法
        this.registStateFuns();
        this._vo = new RoomVO();
        this._vo.scoreMultiple = scoreMultiple;
        this._vo.scoreBase = scoreBase;
        this.changeState(RoomState.FREE);
        this._vo.createTime = egret.getTimer();
        egret.Ticker.getInstance().register(this.roomUpdate, this);
    }
    //添加房间角色
    Room.prototype.addRoomPlayer = function (playerVO) {
        var pos = this._vo.players.length;
        var rp = new RoomPlayer(playerVO, pos);
        rp.vo.pos = pos;
        this._vo.players[pos] = rp.vo;
        this._players[playerVO] = rp;
        return rp;
    };
    //删除房间角色
    Room.prototype.removeRoomPlayer = function (playerVO) {
        var rp = this.getRoomPlayer(playerVO);
        if (null == rp) {
            return -1;
        }
        var pos = rp.vo.pos;
        this._vo.players.splice(pos, 1);
        this._players[playerVO] = null;
        delete this._players[playerVO];
        return pos;
    };
    //获取房间玩家
    Room.prototype.getRoomPlayer = function (playerVO) {
        return this._players[playerVO];
    };
    Room.prototype.dispose = function () {
        egret.Ticker.getInstance().unregister(this.roomUpdate, this);
    };
    Room.prototype.roomUpdate = function (dt) {
        this._updateStateFuns[this._vo.state]();
    };
    Room.prototype.playerEnter = function (player) {
        if (this._vo.players.length > 3 || this._vo.state != RoomState.FREE) {
            return false;
        }
        var rp = this.addRoomPlayer(player);
        //通知其它玩家有人进入了游戏
        this.noticeRoomPlayers(RoomNoticeType.PLAYER_ENTER_ROOM, rp.vo);
        //自动准备
        this.playerReady(player);
        return true;
    };
    Room.prototype.playerExit = function (player) {
        if (this._vo.state != RoomState.FREE) {
            return false;
        }
        var pos = this.removeRoomPlayer(player);
        if (-1 == pos) {
            return false;
        }
        //通知其它玩家有人离开
        this.noticeRoomPlayers(RoomNoticeType.PLAYER_EXIT_ROOM, pos);
        return true;
    };
    Room.prototype.playerReady = function (player) {
        var rp = this.getRoomPlayer(player);
        if (null == rp) {
            return false;
        }
        rp.changeState(RoomPlayerState.PREPARE);
        if (this._vo.players.length == 3) {
            for (var k in this._players) {
                var rp = this._players[k];
                if (rp.vo.state == RoomPlayerState.PREPARE) {
                    return true;
                }
            }
        }
        //所有的角色都准备好了
        this.onAllReady();
        return true;
    };
    Room.prototype.onAllReady = function () {
        //进入叫地主阶段
        this.changeState(RoomState.CALL_LANDLORD);
    };
    //玩家执行动作
    Room.prototype.playerAction = function (player, actType, data) {
        if (data === void 0) { data = null; }
    };
    Room.prototype.changeState = function (state) {
        //退出旧的状态
        this._exitStateFuns[this._vo.state]();
        //进入新的状态
        this._vo.state = state;
        this._vo.enterStateTime = egret.getTimer();
        this._enterStateFuns[this._vo.state]();
    };
    Room.prototype.noticeRoomPlayers = function (nt, data) {
        for (var k in this._players) {
            var rp = this._players[k];
            rp.onNotice(nt, data);
        }
    };
    Room.prototype.registStateFuns = function () {
        this._enterStateFuns[RoomState.FREE] = this.enterStateFree.bind(this);
        this._enterStateFuns[RoomState.CALL_LANDLORD] = this.enterStateCallLandLord.bind(this);
        this._enterStateFuns[RoomState.PLAY] = this.enterStatePlay.bind(this);
        this._exitStateFuns[RoomState.FREE] = this.exitStateFree.bind(this);
        this._exitStateFuns[RoomState.CALL_LANDLORD] = this.exitStateCallLandLord.bind(this);
        this._exitStateFuns[RoomState.PLAY] = this.exitStatePlay.bind(this);
        this._updateStateFuns[RoomState.FREE] = this.updateStateFree.bind(this);
        this._updateStateFuns[RoomState.CALL_LANDLORD] = this.updateStateCallLandLord.bind(this);
        this._updateStateFuns[RoomState.PLAY] = this.updateStatePlay.bind(this);
    };
    //------------------空闲状态
    Room.prototype.enterStateFree = function () {
    };
    Room.prototype.exitStateFree = function () {
    };
    Room.prototype.updateStateFree = function () {
        if (this._vo.players.length < 3) {
            var now = egret.getTimer();
            if (now - this._vo.enterStateTime >= 5000) {
                while (this._vo.players.length < 3) {
                    this.playerEnter(RobotMgr.getRobot());
                }
            }
        }
    };
    //----------------------叫地主
    Room.prototype.enterStateCallLandLord = function () {
        //初始化游戏数据
    };
    Room.prototype.exitStateCallLandLord = function () {
    };
    Room.prototype.updateStateCallLandLord = function () {
    };
    //--------------------------玩牌阶段
    Room.prototype.enterStatePlay = function () {
    };
    Room.prototype.exitStatePlay = function () {
    };
    Room.prototype.updateStatePlay = function () {
    };
    return Room;
})();
//# sourceMappingURL=Room.js.map