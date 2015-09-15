var PlayerState = (function () {
    function PlayerState() {
    }
    //空闲
    PlayerState.FREE = 0;
    //已准备
    PlayerState.PREPARE = 1;
    //叫地主
    PlayerState.CALL = 2;
    //抢地主
    PlayerState.ROB = 3;
    //出牌
    PlayerState.PUSH = 4;
    //等待其它玩家
    PlayerState.WAITING = 5;
    return PlayerState;
})();
//# sourceMappingURL=PlayerState.js.map