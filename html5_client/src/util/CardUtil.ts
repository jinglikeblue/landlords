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

    //对给的牌进行一次排序(按照分数从小到大)
    public static sortCards(cards: number[]): number[]
    {
        return null;
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
            return [0];
        }

        if (handCards.length < targetCards.length)
        {
            //牌不够
            return null;
        }

        //各种类型的卡牌
        var targetCombinVO:CardCombinVO = null;
        //提示的卡牌
        var promptCombinVO: CardCombinVO = null;
        //对方打出的牌的bomb分数，不是炸弹则为0分
        var targetBombScore: number = 0;

        var len: number = targetCards.length;
        if (1 == len)
        {
            //单张
            promptCombinVO = this.getSingle(handCards, this.getCardScore(targetCards[0]));
        }
        else if (2 == len)
        {
            //对子、王炸
            targetCombinVO = this.getRocket(targetCards);
            if (null != targetCombinVO)
            {
                //王炸谁都要不起
                return null;
            }

            targetCombinVO = this.getPair(targetCards);
            if (null != targetCombinVO)
            {
                promptCombinVO = this.getPair(handCards, targetCombinVO.score);
            }
        }
        else if (3 == len)
        {
            //3张
            targetCombinVO = this.getTriplet(targetCards);
            if (null != targetCombinVO)
            {
                promptCombinVO = this.getPair(handCards, targetCombinVO.score);
            }
        }
        else if (4 == len)
        {
            //炸弹、3带1
            targetCombinVO = this.getBomb(targetCards);
            if (null != targetCombinVO)
            {
                promptCombinVO = this.getPair(handCards, targetCombinVO.score);
            }
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


        if (null == promptCombinVO)
        {
            //看看炸弹
            promptCombinVO = this.getBomb(handCards, targetBombScore);
            if (null == promptCombinVO)
            {
                //看看王炸
                promptCombinVO = this.getRocket(handCards);
            }
        }

        if (null != promptCombinVO)
        {
            return promptCombinVO.indexs;
        }
        return null;
    }

    //-----------------------------------------从给定的牌中挑选出需要的牌
    //-------------------警告：挑选出的是索引，不是牌的ID

    //null表示找不到
    private static getSingle(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 1)
        {
            return null;
        }

        for (var i: number = 0; i < cards.length; i++)
        {
            var tempScore: number = CardUtil.getCardScore(cards[i]);
            if (tempScore > lessScore)
            {
                var combinVO: CardCombinVO = new CardCombinVO();
                combinVO.cards = [cards[i]];
                combinVO.indexs = [i];
                combinVO.score = tempScore;
                return combinVO;
            }
        }

        return null;
    }

    //null表示找不到
    private static getPair(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 2)
        {
            return null;
        }

        for (var i: number = 0; i < cards.length - 1; i++)
        {
            if (cards[i] == cards[i + 1])
            {
                var tempScore: number = CardUtil.getCardScore(cards[i]) * 2;
                if (tempScore > lessScore)
                {
                    //找到满足的牌型
                    var combinVO: CardCombinVO = new CardCombinVO();
                    combinVO.cards = [cards[i], cards[i + 1]];
                    combinVO.indexs = [i, i + 1];
                    combinVO.score = tempScore;
                    return combinVO;
                }
            }
        }
        return null;
    }

    //null表示找不到
    private static getTriplet(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 3)
        {
            return null;
        }

        for (var i: number = 0; i < cards.length - 2; i++)
        {
            if (cards[i] == cards[i + 2])
            {
                var tempScore: number = CardUtil.getCardScore(cards[i]) * 3;
                if (tempScore > lessScore)
                {
                    //找到满足的牌型
                    var combinVO: CardCombinVO = new CardCombinVO();
                    combinVO.cards = [cards[i], cards[i + 1], cards[i + 2]];
                    combinVO.indexs = [i, i + 1, i + 2];
                    combinVO.score = tempScore;
                    return combinVO;
                }
            }
        }
        return null;
    }

    //null表示找不到
    private static getTripletWithSingle(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 4)
        {
            return null;
        }

        //var triplets: number[] = this.getTriplet(cards, lessScore);
        //cards

        //for (var i: number = 0; i < cards.length - 2; i++)
        //{
        //    if (cards[i] == cards[i + 2])
        //    {
        //        var tempScore: number = CardUtil.getCardScore(cards[i]) * 3;
        //        if (tempScore > lessScore)
        //        {
        //            var singleCardIndex: number = i;
        //            //找到满足的牌型
        //            if (i == 0)
        //            {
        //                singleCardIndex = 3;
        //            }
        //            return [cards[i], cards[i + 1], cards[i + 2], cards[singleCardIndex]];
        //        }
        //    }
        //}

        return null;
    }

    //null表示找不到
    private static getTripletWithPair(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 5)
        {
            return null;
        }

        //首先要有一对牌
        //var pair: number[] = this.getPair(cards);
        //if (null == pair)
        //{
        //    return null;
        //}



        return null;
    }

    //null表示找不到
    private static getSequence(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 5)
        {
            return null;
        }

        return null;
    }

    //null表示找不到
    private static getSequenceOfPairs(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 6)
        {
            return null;
        }

        return null;
    }

    //null表示找不到
    private static getSequenceOfTriplets(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 6)
        {
            return null;
        }

        return null;
    }

    //null表示找不到
    private static getSequenceOfTripletsWithSingle(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 8)
        {
            return null;
        }

        return null;
    }

    //null表示找不到
    private static getSequenceOfTripletsWithPairs(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 10)
        {
            return null;
        }

        return null;
    }

    //null表示找不到
    private static getBomb(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 4)
        {
            return null;
        }

        return null;
    }

    //null表示找不到
    private static getRocket(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 2)
        {
            return null;
        }

        return null;
    }

    //null表示找不到
    private static getQuadplex(cards: number[], lessScore: number = 0): CardCombinVO
    {
        if (cards.length < 6)
        {
            return null;
        }

        return null;
    }
} 