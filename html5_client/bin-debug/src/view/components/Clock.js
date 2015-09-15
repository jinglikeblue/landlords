var Clock = (function (_super) {
    __extends(Clock, _super);
    function Clock() {
        _super.call(this, skins.components.ClockSkin);
    }
    var __egretProto__ = Clock.prototype;
    __egretProto__.init = function () {
        this._cd = new Cooldown();
        this.txtTime.text = "0";
    };
    __egretProto__.setSeconds = function (v) {
        this._cd.init(v * 1000, this.cdStep, this);
    };
    __egretProto__.start = function () {
        this._cd.start();
    };
    __egretProto__.pause = function () {
        this._cd.stop();
    };
    __egretProto__.cdStep = function (ms) {
        var secs = (ms / 1000) >> 0;
        this.txtTime.text = secs.toString();
    };
    return Clock;
})(ASkinCom);
Clock.prototype.__class__ = "Clock";
//# sourceMappingURL=Clock.js.map