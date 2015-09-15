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
    public first: PlayerVO;
    //地主
    public landlord: PlayerVO;
    //房间的创建时间
    public createTime: number = 0;
    //当前回合行动玩家
    public nowPlayer: PlayerVO;

   
}