var RoomPlayerState = (function () {
    function RoomPlayerState() {
    }
    //空闲
    RoomPlayerState.FREE = 0;
    //已准备
    RoomPlayerState.PREPARE = 1;
    //叫地主
    RoomPlayerState.CALL = 2;
    //抢地主
    RoomPlayerState.ROB = 3;
    //出牌
    RoomPlayerState.PUSH = 4;
    //等待其它玩家
    RoomPlayerState.WAITING = 5;
    return RoomPlayerState;
})();
//# sourceMappingURL=RoomPlayerState.js.map