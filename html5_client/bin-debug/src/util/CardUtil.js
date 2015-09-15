var CardUtil = (function () {
    function CardUtil() {
    }
    //获取一副已洗好的扑克牌
    CardUtil.getDeck = function () {
        var newDeck = [];
        var count = 52;
        while (--count > -1) {
            newDeck.push(count);
        }
        return ArrayUtil.randomPermutationArray(newDeck);
    };
    return CardUtil;
})();
//# sourceMappingURL=CardUtil.js.map