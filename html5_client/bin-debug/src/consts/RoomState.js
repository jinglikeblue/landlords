var RoomState = (function () {
    function RoomState() {
    }
    //空闲阶段
    RoomState.FREE = 0;
    //所有人准备阶段
    RoomState.ALL_READY = 1;
    //叫地主阶段
    RoomState.CALL_LANDLORD = 2;
    //游戏中
    RoomState.PLAY = 3;
    return RoomState;
})();
//# sourceMappingURL=RoomState.js.map