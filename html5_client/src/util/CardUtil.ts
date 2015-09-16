class CardUtil
{
    //单张
    public static TYPE_SINGLE: number = 1;
    //对子
    public static TYPE_PAIR: number = 2;
    //三张
    public static TYPE_TRIPLET: number = 3;
    //3带单
    public static TYPE_TRIPLET_WITH_SINGLE: number = 4;
    //3带对子
    public static TYPE_TRIPLET_WITH_PAIR: number = 5;
    //顺子
    public static TYPE_SEQUENCE: number = 6;
    //连对
    public static TYPE_SEQUENCE_OF_PAIRS: number = 7;
    //飞机
    public static TYPE_SEQUENCE_OF_TRIPLETS: number = 8;
    //飞机(3带1)
    public static TYPE_SEQUENCE_OF_TRIPLETS_WITH_SINGLE: number = 9;
    //飞机(3带2)
    public static TYPE_SEQUENCE_OF_TRIPLETS_WITH_PAIRS: number = 10;
    //炸弹
    public static TYPE_BOMB: number = 11;
    //火箭
    public static TYPE_ROCKET: number = 12;
    //4带两对、4带两张
    public static TYPE_QUADPLEX: number = 13;

    //屏蔽的类型
    public static BAN_TYPE: number[] = [CardUtil.TYPE_TRIPLET_WITH_PAIR, CardUtil.TYPE_SEQUENCE_OF_TRIPLETS_WITH_PAIRS];


    //卡牌分数
    public static CARD_SCORE: number[] = [12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    //大鬼分数
    public static RED_JOKER_SCORE: number = 15;
    //小鬼分数
    public static BLACK_JOKER_SCORE: number = 16;

    //获取扑克的分数
    public static getCardScore(card: number): number
    {
        if (52 == card)
        {
            return CardUtil.BLACK_JOKER_SCORE;
        }
        else if (53 == card)
        {
            return CardUtil.RED_JOKER_SCORE;
        }

        return CardUtil.CARD_SCORE[card % 13];
    }
    
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

    //从指定牌组中找出比目标牌组大的牌
    public static getSuggestion(targetCards: number[], handCards: number[]): number[]
    {
        if (null == handCards)
        {
            //没牌
            return null;
        }

        if (null == targetCards)
        {
            //出张最小的
            return [handCards[0]];
        }

        if (handCards.length < targetCards.length)
        {
            //牌不够
            return null;
        }

        var len: number = targetCards.length;
        if (1 == len)
        {
            //单张
        }
        else if (2 == len)
        {
            //对子、王炸
        }
        else if (3 == len)
        {
            //3张
        }
        else if (4 == len)
        {
            //炸弹、3带1
        }
        else if (5 == len)
        {
            //顺子、3带2
        }
        else if (6 == len)
        {
            //顺子、2个3张、连对、4带2
        }
        else if (8 == len)
        {
            //顺子、飞机、连对、4带2对
        }
        else if (9 == len)
        {
            //顺子、3个3张
        }
        else if (10 == len)
        {
            //顺子、连对、2个3带2
        }
        else if (11 == len)
        {
            //顺子
        }
        else if (12 == len)
        {
            //顺子、3个3带1、连对
        }
        else if (14 == len)
        {
            //连对
        }
        else if (15 == len)
        {
            //3个3带2
        }
        else if (16 == len)
        {
            //连对、4个3带1
        }
        else if (20 == len)
        {
            //连对、5个3带1、4个3带2
        }
        else
        {
            //错误的牌型
        }
    }

    //-1表示牌型不对
    private static getPairScore(cards: number[]): number
    {
        if (cards[0] == cards[1])
        {
            return this.getCardScore(cards[0]) * 2;
        }
        return -1;
    }

    //-1表示牌型不对
    private static getTripletScore(cards: number[]): number
    {
        if (cards[0] == cards[1] && cards[0] == cards[2])
        {
            return this.getCardScore(cards[0]) * 3;
        }
        return -1;
    }

    //-1表示牌型不对
    private static getTripletWithSingleScore(cards: number[]): number
    {
        
        return -1;
    }

    //-1表示牌型不对
    private static getTripletWithPairScore(cards: number[]): number
    {
        return -1;
    }

    //-1表示牌型不对
    private static getSequenceScore(cards: number[]): number
    {
        return -1;
    }

    //-1表示牌型不对
    private static getSequenceOfPairsScore(cards: number[]): number
    {
        return -1;
    }

    //-1表示牌型不对
    private static getSequenceOfTripletsScore(cards: number[]): number
    {
        return -1;
    }

    //-1表示牌型不对
    private static getSequenceOfTripletsWithSingleScore(cards: number[]): number
    {
        return -1;
    }

    //-1表示牌型不对
    private static getSequenceOfTripletsWithPairsScore(cards: number[]): number
    {
        return -1;
    }

    //-1表示牌型不对
    private static getBombScore(cards: number[]): number
    {
        return -1;
    }

    //-1表示牌型不对
    private static getRocketScore(cards: number[]): number
    {
        return -1;
    }

    //-1表示牌型不对
    private static getQuadplexScore(cards: number[]): number
    {
        return -1;
    }



    //-----------------------------------------从给定的牌中挑选出需要的牌

    //null表示找不到
    private static getPair(cards: number[], lessScore:number = 0):number[]
    {
        return null;
    }

    //null表示找不到
    private static getTriplet(cards: number[], lessScore:number = 0): number[]
    {
        return null;
    }

    //null表示找不到
    private static getTripletWithSingle(cards: number[], lessScore:number = 0): number[]
    {

        return null;
    }

    //null表示找不到
    private static getTripletWithPair(cards: number[], lessScore:number = 0): number[]
    {
        return null;
    }

    //null表示找不到
    private static getSequence(cards: number[], lessScore:number = 0): number[]
    {
        return null;
    }

    //null表示找不到
    private static getSequenceOfPairs(cards: number[], lessScore:number = 0): number[]
    {
        return null;
    }

    //null表示找不到
    private static getSequenceOfTriplets(cards: number[], lessScore:number = 0): number[]
    {
        return null;
    }

    //null表示找不到
    private static getSequenceOfTripletsWithSingle(cards: number[], lessScore:number = 0): number[]
    {
        return null;
    }

    //null表示找不到
    private static getSequenceOfTripletsWithPairs(cards: number[], lessScore:number = 0): number[]
    {
        return null;
    }

    //null表示找不到
    private static getBomb(cards: number[], lessScore:number = 0): number[]
    {
        return null;
    }

    //null表示找不到
    private static getRocket(cards: number[], lessScore:number = 0): number
    {
        return null;
    }

    //null表示找不到
    private static getQuadplex(cards: number[], lessScore:number = 0): number
    {
        return null;
    }
} 