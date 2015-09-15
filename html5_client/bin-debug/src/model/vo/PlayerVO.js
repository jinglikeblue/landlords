var PlayerVO = (function () {
    function PlayerVO() {
        //ID
        this.id = "";
        //名称
        this.name = "";
        //金币数
        this.gold = 0;
        //手上的牌
        this.cards = [];
        //状态
        this.state = 0;
        //动作结束时间
        this.actionEndTime = 0;
        //是否机器人
        this.isRobot = false;
    }
    return PlayerVO;
})();
//# sourceMappingURL=PlayerVO.js.map