var Room = (function () {
    function Room(scoreMultiple, scoreBase) {
        //通过VO定位的Player对象
        this._players = {};
        this._vo = new RoomVO();
        this._vo.scoreMultiple = scoreMultiple;
        this._vo.scoreBase = scoreBase;
    }
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
    return Room;
})();
//# sourceMappingURL=Room.js.map