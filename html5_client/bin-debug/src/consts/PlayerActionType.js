var PlayerActionType = (function () {
    function PlayerActionType() {
    }
    //叫地主
    PlayerActionType.CALL = 1;
    //不叫
    PlayerActionType.NO_CALL = 2;
    //抢地主
    PlayerActionType.ROB = 3;
    //不抢
    PlayerActionType.NO_ROB = 4;
    //不出
    PlayerActionType.PASS = 5;
    //出牌
    PlayerActionType.PUSH = 6;
    return PlayerActionType;
})();
//# sourceMappingURL=PlayerActionType.js.map