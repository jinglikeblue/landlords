var Room = (function () {
    function Room(scoreMultiple, scoreBase) {
        //通过VO定位的Player对象
        this._players = {};
        this._vo = new RoomVO();
        this._vo.scoreMultiple = scoreMultiple;
        this._vo.scoreBase = scoreBase;
        this.changeState(RoomState.FREE);
        this._vo.createTime = egret.getTimer();
        egret.Ticker.getInstance().register(this.roomUpdate, this);
    }
    Room.prototype.dispose = function () {
        egret.Ticker.getInstance().unregister(this.roomUpdate, this);
    };
    Room.prototype.roomUpdate = function (dt) {
    };
    Room.prototype.playerEnter = function (player) {
        return true;
    };
    Room.prototype.playerExit = function (player) {
        return true;
    };
    Room.prototype.playerReady = function (player) {
        return true;
    };
    Room.prototype.playerAction = function (player, actType, data) {
        if (data === void 0) { data = null; }
    };
    Room.prototype.onAllReady = function () {
    };
    Room.prototype.changeState = function (state) {
        this._vo.state = state;
        this._vo.enterStateTime = egret.getTimer();
    };
    return Room;
})();
//# sourceMappingURL=Room.js.map