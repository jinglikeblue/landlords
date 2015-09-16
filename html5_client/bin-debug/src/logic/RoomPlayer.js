var RoomPlayer = (function () {
    function RoomPlayer(vo, pos, room) {
        this._vo = new RoomPlayerVO();
        this._vo.playerVO = vo;
        this._vo.pos = pos;
        this._room = room;
        this.changeState(RoomPlayerState.FREE);
    }
    Object.defineProperty(RoomPlayer.prototype, "vo", {
        get: function () {
            return this._vo;
        },
        enumerable: true,
        configurable: true
    });
    RoomPlayer.prototype.changeState = function (state) {
        this._vo.state = state;
        switch (state) {
            case RoomPlayerState.FREE:
                break;
            case RoomPlayerState.PREPARE:
                this._vo.cards.length = 0;
                this._vo.isProxy = false;
                break;
            case RoomPlayerState.CALL:
                if (this._vo.playerVO.isRobot) {
                }
                break;
            case RoomPlayerState.ROB:
                break;
            case RoomPlayerState.PUSH:
                break;
        }
    };
    RoomPlayer.prototype.onGetCard = function (card) {
        var cardScore = CardUtil.getCardScore(card);
        var index = this._vo.cards.length;
        while (--index > -1) {
            var tempCardScore = CardUtil.getCardScore(this._vo.cards[index]);
            if (cardScore > tempCardScore) {
                this.vo.cards.splice(index, 0, card);
            }
        }
    };
    RoomPlayer.prototype.onDecideFirst = function (pos) {
        if (pos == this._vo.pos) {
            this.changeState(RoomPlayerState.CALL);
        }
        else {
            this.changeState(RoomPlayerState.ROB);
        }
    };
    //主要用来通知其它玩家的操作信息
    RoomPlayer.prototype.onNotice = function (nt, data) {
        if (this._vo.playerVO.isRobot) {
        }
        NoticeManager.sendNotice(new Notice(nt, data));
    };
    /**
    * 玩家超时
    */
    RoomPlayer.prototype.onOverTime = function () {
        switch (this._vo.state) {
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
    };
    //自动出牌
    RoomPlayer.prototype.autoPush = function () {
    };
    //AI出牌
    RoomPlayer.prototype.aiPush = function () {
    };
    return RoomPlayer;
})();
//# sourceMappingURL=RoomPlayer.js.map