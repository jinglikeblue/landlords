class RobotMgr
{
    private static robotPool: PlayerVO[] = [];
    private static usedPool: PlayerVO[] = [];

    public static initPool(cfg:any): void
    {
        this.robotPool.length = 0;
        this.usedPool.length = 0;
        for (var k in cfg.robot)
        {
            var data: any = cfg.robot[k];
            var vo: PlayerVO = new PlayerVO();
            for (var field in data)
            {
                vo[field] = data[field];
            }
            vo.isRobot = true;
            this.robotPool.push(vo);
        }
    }

    //获取一个机器人
    public static getRobot(): PlayerVO
    {
        var vo: PlayerVO = this.robotPool.shift();
        this.usedPool.push(vo);
        return vo;
    }
} 