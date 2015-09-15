var ArrayUtil = (function () {
    function ArrayUtil() {
    }
    /**
     *将数组中的内容进行一次随机排序
     * @param inputArray
     * @author Jing
     * @site www.annjing.cn
     * @return
     *
     */
    ArrayUtil.randomPermutationArray = function (inputArray) {
        var outputArray = [];
        var i = 0;
        while (i < inputArray.length) {
            var randomIndex = Math.floor(inputArray.length * Math.random());
            outputArray.push(inputArray[randomIndex]);
            inputArray.splice(randomIndex, 1);
        }
        return outputArray;
    };
    return ArrayUtil;
})();
//# sourceMappingURL=ArrayUtil.js.map