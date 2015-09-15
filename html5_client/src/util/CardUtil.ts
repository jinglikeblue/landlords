class CardUtil
{
    //获取一副已洗好的扑克牌
    public static getDeck(): number[]
    {
        var newDeck: number[] = [];
        var count: number = 52;
        while (--count > -1)
        {
            newDeck.push(count);
        }

        return ArrayUtil.randomPermutationArray(newDeck);
    }
} 