var PlayerAction = (function (_super) {
    __extends(PlayerAction, _super);
    function PlayerAction() {
        _super.call(this, skins.components.player.PlayActionSkin);
    }
    var __egretProto__ = PlayerAction.prototype;
    __egretProto__.init = function () {
    };
    __egretProto__.addListeners = function () {
        this.btnNoCall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnCall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnNoRob.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnRob.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnPass.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnReset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnTip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnPush.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.btnNoCall.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnCall.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnNoRob.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnRob.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnPass.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnReset.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnTip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
        this.btnPush.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn_tapHandler, this);
    };
    __egretProto__.btn_tapHandler = function (e) {
        switch (e.currentTarget) {
            case this.btnNoCall:
                this.setState(PlayerAction.STATE_ROB);
                break;
            case this.btnCall:
                break;
            case this.btnNoRob:
                this.setState(PlayerAction.STATE_LEAD);
                break;
            case this.btnRob:
                break;
            case this.btnPass:
                this.setState(PlayerAction.STATE_CALL);
                break;
            case this.btnReset:
                break;
            case this.btnTip:
                break;
            case this.btnPush:
                break;
        }
    };
    PlayerAction.STATE_CALL = "call";
    PlayerAction.STATE_ROB = "rob";
    PlayerAction.STATE_LEAD = "lead";
    return PlayerAction;
})(ASkinCom);
PlayerAction.prototype.__class__ = "PlayerAction";
//# sourceMappingURL=PlayerAction.js.map