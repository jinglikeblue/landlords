var PlayerOther = (function (_super) {
    __extends(PlayerOther, _super);
    function PlayerOther() {
        _super.call(this, null);
    }
    var __egretProto__ = PlayerOther.prototype;
    __egretProto__.init = function () {
        this.txtCardRemain.text = "0";
    };
    __egretProto__.onSetData = function () {
        if (this.data != null) {
            var cfg = DC.cfg[this.data.pos];
            this._cardStartPos = new egret.Point(cfg.card_start[0], cfg.card_start[1]);
            this._cardGap = cfg.card_gap;
            this._clockPos = new egret.Point(cfg.clock_pos[0], cfg.clock_pos[1]);
            this._labelPos = new egret.Point(cfg.label_pos[0], cfg.label_pos[1]);
        }
    };
    PlayerOther.STATE_THINKING = "thinking";
    PlayerOther.STATE_ACTION = "action";
    PlayerOther.STATE_CARD = "card";
    return PlayerOther;
})(ASkinCom);
PlayerOther.prototype.__class__ = "PlayerOther";
