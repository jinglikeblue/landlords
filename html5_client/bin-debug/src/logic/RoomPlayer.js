var RoomPlayer = (function () {
    function RoomPlayer(vo, pos) {
        this._vo = new RoomPlayerVO();
        this._vo.playerVO = vo;
        this._vo.pos = pos;
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
    };
    RoomPlayer.prototype.onNotice = function (nt, data) {
        if (this._vo.playerVO.isRobot) {
        }
        NoticeManager.sendNotice(new Notice(nt, data));
    };
    return RoomPlayer;
})();
//# sourceMappingURL=RoomPlayer.js.map