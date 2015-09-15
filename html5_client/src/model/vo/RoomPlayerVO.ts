class RoomPlayerVO
{
    //PlayerVO
    public playerVO: PlayerVO;
    //手上的牌
    public cards: number[] = [];
    //状态
    public state: number = -1;
    //动作结束时间
    public actionEndTime: number = -1;
    //是否托管了
    public isProxy: boolean = false;
    //位置
    public pos: number = -1;
    

} 