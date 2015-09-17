class RoomVO
{
    //玩家
    public players: RoomPlayerVO[] = [];
    //房间状态
    public state: number = 0;
    //房间进入当前状态的时间
    public enterStateTime: number = 0;
    //倍数
    public scoreMultiple: number = 0;
    //低分
    public scoreBase: number = 0;
    //回合
    public turn: number = 0;
    //谁是第一个叫地主的
    public firstPos: number;
    //地主
    public landlordPos: number;
    //房间的创建时间
    public createTime: number = 0;
    //当前回合行动玩家
    public nowPlayerPos: number;
    //到下一个玩家执行的时间
    public nextPlayerTime: number = -1;
    //游戏的卡牌
    public cards: number[];
    //三张地主牌
    public landlordCards: number[];
    //最后出牌的玩家
    public lastPlayPos: number;
    //最后出的牌
    public lastCards: number[];
   
}