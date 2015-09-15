class ArrayUtil
{
    /**
     *将数组中的内容进行一次随机排序
     * @param inputArray
     * @author Jing
     * @site www.annjing.cn
     * @return
     *
     */
    public static randomPermutationArray(inputArray: any[]): any[]
    {
        var outputArray: any[] = [];

        var i: number = 0;

        while (i < inputArray.length)
        {
            var randomIndex: number = Math.floor(inputArray.length * Math.random());
            outputArray.push(inputArray[randomIndex]);
            inputArray.splice(randomIndex, 1);
        }

        return outputArray;
    }
}