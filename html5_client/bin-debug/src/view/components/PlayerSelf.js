var PlayerSelf = (function (_super) {
    __extends(PlayerSelf, _super);
    function PlayerSelf() {
        _super.call(this, null);
    }
    var __egretProto__ = PlayerSelf.prototype;
    __egretProto__.init = function () {
        this.action.setState(PlayerAction.STATE_LEAD);
    };
    return PlayerSelf;
})(ASkinCom);
PlayerSelf.prototype.__class__ = "PlayerSelf";
