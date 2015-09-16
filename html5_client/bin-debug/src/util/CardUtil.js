var CardUtil = (function () {
    function CardUtil() {
    }
    //获取扑克的分数
    CardUtil.getCardScore = function (card) {
        if (52 == card) {
            return CardUtil.BLACK_JOKER_SCORE;
        }
        else if (53 == card) {
            return CardUtil.RED_JOKER_SCORE;
        }
        return CardUtil.CARD_SCORE[card % 13];
    };
    //获取一副已洗好的扑克牌
    CardUtil.getDeck = function () {
        var newDeck = [];
        var count = 52;
        while (--count > -1) {
            newDeck.push(count);
        }
        return ArrayUtil.randomPermutationArray(newDeck);
    };
    //对给的牌进行一次排序(按照分数从小到大)
    CardUtil.sortCards = function (cards) {
        return null;
    };
    //从指定牌组中找出比目标牌组大的牌
    CardUtil.getSuggestion = function (targetCards, handCards) {
        if (null == handCards) {
            //没牌
            return null;
        }
        if (null == targetCards) {
            //出张最小的
            return [0];
        }
        if (handCards.length < targetCards.length) {
            //牌不够
            return null;
        }
        //各种类型的卡牌
        var targetCombinVO = null;
        //提示的卡牌
        var promptCombinVO = null;
        //对方打出的牌的bomb分数，不是炸弹则为0分
        var targetBombScore = 0;
        var len = targetCards.length;
        if (1 == len) {
            //单张
            promptCombinVO = this.getSingle(handCards, this.getCardScore(targetCards[0]));
        }
        else if (2 == len) {
            //对子、王炸
            targetCombinVO = this.getRocket(targetCards);
            if (null != targetCombinVO) {
                //王炸谁都要不起
                return null;
            }
            targetCombinVO = this.getPair(targetCards);
            if (null != targetCombinVO) {
                promptCombinVO = this.getPair(handCards, targetCombinVO.score);
            }
        }
        else if (3 == len) {
            //3张
            targetCombinVO = this.getTriplet(targetCards);
            if (null != targetCombinVO) {
                promptCombinVO = this.getPair(handCards, targetCombinVO.score);
            }
        }
        else if (4 == len) {
            //炸弹、3带1
            targetCombinVO = this.getBomb(targetCards);
            if (null != targetCombinVO) {
                promptCombinVO = this.getPair(handCards, targetCombinVO.score);
            }
        }
        else if (5 == len) {
        }
        else if (6 == len) {
        }
        else if (8 == len) {
        }
        else if (9 == len) {
        }
        else if (10 == len) {
        }
        else if (11 == len) {
        }
        else if (12 == len) {
        }
        else if (14 == len) {
        }
        else if (15 == len) {
        }
        else if (16 == len) {
        }
        else if (20 == len) {
        }
        else {
        }
        if (null == promptCombinVO) {
            //看看炸弹
            promptCombinVO = this.getBomb(handCards, targetBombScore);
            if (null == promptCombinVO) {
                //看看王炸
                promptCombinVO = this.getRocket(handCards);
            }
        }
        if (null != promptCombinVO) {
            return promptCombinVO.indexs;
        }
        return null;
    };
    //-----------------------------------------从给定的牌中挑选出需要的牌
    //-------------------警告：挑选出的是索引，不是牌的ID
    //null表示找不到
    CardUtil.getSingle = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 1) {
            return null;
        }
        for (var i = 0; i < cards.length; i++) {
            var tempScore = CardUtil.getCardScore(cards[i]);
            if (tempScore > lessScore) {
                var combinVO = new CardCombinVO();
                combinVO.cards = [cards[i]];
                combinVO.indexs = [i];
                combinVO.score = tempScore;
                return combinVO;
            }
        }
        return null;
    };
    //null表示找不到
    CardUtil.getPair = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 2) {
            return null;
        }
        for (var i = 0; i < cards.length - 1; i++) {
            if (cards[i] == cards[i + 1]) {
                var tempScore = CardUtil.getCardScore(cards[i]) * 2;
                if (tempScore > lessScore) {
                    //找到满足的牌型
                    var combinVO = new CardCombinVO();
                    combinVO.cards = [cards[i], cards[i + 1]];
                    combinVO.indexs = [i, i + 1];
                    combinVO.score = tempScore;
                    return combinVO;
                }
            }
        }
        return null;
    };
    //null表示找不到
    CardUtil.getTriplet = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 3) {
            return null;
        }
        for (var i = 0; i < cards.length - 2; i++) {
            if (cards[i] == cards[i + 2]) {
                var tempScore = CardUtil.getCardScore(cards[i]) * 3;
                if (tempScore > lessScore) {
                    //找到满足的牌型
                    var combinVO = new CardCombinVO();
                    combinVO.cards = [cards[i], cards[i + 1], cards[i + 2]];
                    combinVO.indexs = [i, i + 1, i + 2];
                    combinVO.score = tempScore;
                    return combinVO;
                }
            }
        }
        return null;
    };
    //null表示找不到
    CardUtil.getTripletWithSingle = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 4) {
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
    };
    //null表示找不到
    CardUtil.getTripletWithPair = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 5) {
            return null;
        }
        //首先要有一对牌
        //var pair: number[] = this.getPair(cards);
        //if (null == pair)
        //{
        //    return null;
        //}
        return null;
    };
    //null表示找不到
    CardUtil.getSequence = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 5) {
            return null;
        }
        return null;
    };
    //null表示找不到
    CardUtil.getSequenceOfPairs = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 6) {
            return null;
        }
        return null;
    };
    //null表示找不到
    CardUtil.getSequenceOfTriplets = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 6) {
            return null;
        }
        return null;
    };
    //null表示找不到
    CardUtil.getSequenceOfTripletsWithSingle = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 8) {
            return null;
        }
        return null;
    };
    //null表示找不到
    CardUtil.getSequenceOfTripletsWithPairs = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 10) {
            return null;
        }
        return null;
    };
    //null表示找不到
    CardUtil.getBomb = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 4) {
            return null;
        }
        return null;
    };
    //null表示找不到
    CardUtil.getRocket = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 2) {
            return null;
        }
        return null;
    };
    //null表示找不到
    CardUtil.getQuadplex = function (cards, lessScore) {
        if (lessScore === void 0) { lessScore = 0; }
        if (cards.length < 6) {
            return null;
        }
        return null;
    };
    //单张
    CardUtil.TYPE_SINGLE = 1;
    //对子
    CardUtil.TYPE_PAIR = 2;
    //三张
    CardUtil.TYPE_TRIPLET = 3;
    //3带单
    CardUtil.TYPE_TRIPLET_WITH_SINGLE = 4;
    //3带对子
    CardUtil.TYPE_TRIPLET_WITH_PAIR = 5;
    //顺子
    CardUtil.TYPE_SEQUENCE = 6;
    //连对
    CardUtil.TYPE_SEQUENCE_OF_PAIRS = 7;
    //飞机
    CardUtil.TYPE_SEQUENCE_OF_TRIPLETS = 8;
    //飞机(3带1)
    CardUtil.TYPE_SEQUENCE_OF_TRIPLETS_WITH_SINGLE = 9;
    //飞机(3带2)
    CardUtil.TYPE_SEQUENCE_OF_TRIPLETS_WITH_PAIRS = 10;
    //炸弹
    CardUtil.TYPE_BOMB = 11;
    //火箭
    CardUtil.TYPE_ROCKET = 12;
    //4带两对、4带两张
    CardUtil.TYPE_QUADPLEX = 13;
    //屏蔽的类型
    CardUtil.BAN_TYPE = [CardUtil.TYPE_TRIPLET_WITH_PAIR, CardUtil.TYPE_SEQUENCE_OF_TRIPLETS_WITH_PAIRS];
    //卡牌分数
    CardUtil.CARD_SCORE = [12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    //大鬼分数
    CardUtil.RED_JOKER_SCORE = 15;
    //小鬼分数
    CardUtil.BLACK_JOKER_SCORE = 16;
    return CardUtil;
})();
//# sourceMappingURL=CardUtil.js.map