class Cooldown
{
    private _initTime: number;
    private _remain: number;
    private _startTimer: number;
    private _callback: Function;
    
    //设置倒计时的毫秒数
    public init(ms: number, callback:Function, thisObj:any): void
    {
        this.reset();
        this._initTime = this._remain = ms;
        this._callback = callback.bind(thisObj);
    }

    public start(): void
    {
        this._startTimer = egret.getTimer();
        egret.Ticker.getInstance().register(this.ticker, this);
    }

    public stop(): void
    {
        egret.Ticker.getInstance().unregister(this.ticker, this);
    }

    public reset(): void
    {
        this.stop();
        this._remain = this._initTime;
    }

    public ticker(dt): void
    {
        this._remain -= dt;
        if (this._remain <= 0)
        {
            this._remain = 0;
            this.stop();
        }

        if (this._callback != null)
        {
            this._callback(this._remain);
        }
    }

    



} 