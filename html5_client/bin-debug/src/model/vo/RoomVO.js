var RoomVO = (function () {
    function RoomVO() {
        //玩家
        this.players = [];
        //房间状态
        this.state = 0;
        //倍数
        this.scoreMultiple = 0;
        //低分
        this.scoreBase = 0;
        //回合
        this.turn = 0;
        //房间的创建时间
        this.createTime = 0;
        //房间进入当前状态的时间
        this.currentStateTime = 0;
    }
    return RoomVO;
})();
//# sourceMappingURL=RoomVO.js.map