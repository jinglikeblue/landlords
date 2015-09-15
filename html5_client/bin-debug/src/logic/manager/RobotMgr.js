var RobotMgr = (function () {
    function RobotMgr() {
    }
    var __egretProto__ = RobotMgr.prototype;
    RobotMgr.initPool = function (cfg) {
        this.robotPool.length = 0;
        this.usedPool.length = 0;
        for (var k in cfg.robot) {
            var data = cfg.robot[k];
            var vo = new PlayerVO();
            for (var field in data) {
                vo[field] = data[field];
            }
            vo.isRobot = true;
            this.robotPool.push(vo);
        }
    };
    //获取一个机器人
    RobotMgr.getRobot = function () {
        var vo = this.robotPool.shift();
        this.usedPool.push(vo);
        return vo;
    };
    RobotMgr.robotPool = [];
    RobotMgr.usedPool = [];
    return RobotMgr;
})();
RobotMgr.prototype.__class__ = "RobotMgr";
//# sourceMappingURL=RobotMgr.js.map