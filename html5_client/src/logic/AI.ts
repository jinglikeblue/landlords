class AI
{
    /**
    * 由AI来决定是否叫地主
    */
    public static isCall(roomVO:RoomVO, handCards:number[]): boolean
    {
        return false;
    }

    /**
    * 由AI来决定是否抢地主
    */
    public static isRob(roomVO: RoomVO, handCards: number[]): boolean
    {
        return false;
    }

    /**
    * 由AI来决定出什么牌
    * 返回NULL表示不出牌
    */
    public static push(deskCards:number[], handCards:number[], isTeam:boolean): number[]
    {
        return null;
    }
} 