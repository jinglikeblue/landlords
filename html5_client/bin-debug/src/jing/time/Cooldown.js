var Cooldown = (function () {
    function Cooldown() {
    }
    var __egretProto__ = Cooldown.prototype;
    //设置倒计时的毫秒数
    __egretProto__.init = function (ms, callback, thisObj) {
        this.reset();
        this._initTime = this._remain = ms;
        this._callback = callback.bind(thisObj);
    };
    __egretProto__.start = function () {
        this._startTimer = egret.getTimer();
        egret.Ticker.getInstance().register(this.ticker, this);
    };
    __egretProto__.stop = function () {
        egret.Ticker.getInstance().unregister(this.ticker, this);
    };
    __egretProto__.reset = function () {
        this.stop();
        this._remain = this._initTime;
    };
    __egretProto__.ticker = function (dt) {
        this._remain -= dt;
        if (this._remain <= 0) {
            this._remain = 0;
            this.stop();
        }
        if (this._callback != null) {
            this._callback(this._remain);
        }
    };
    return Cooldown;
})();
Cooldown.prototype.__class__ = "Cooldown";
