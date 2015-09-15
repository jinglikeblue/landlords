var RoomPlayerVO = (function () {
    function RoomPlayerVO() {
        //手上的牌
        this.cards = [];
        //状态
        this.state = -1;
        //动作结束时间
        this.actionEndTime = -1;
        //是否托管了
        this.isProxy = false;
        //位置
        this.pos = -1;
    }
    return RoomPlayerVO;
})();
//# sourceMappingURL=RoomPlayerVO.js.map