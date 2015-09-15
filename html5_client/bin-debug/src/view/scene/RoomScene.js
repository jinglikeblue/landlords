var RoomScene = (function (_super) {
    __extends(RoomScene, _super);
    function RoomScene() {
        _super.call(this, skins.scene.RoomSceneSkin);
    }
    var __egretProto__ = RoomScene.prototype;
    __egretProto__.init = function () {
        this.playerLeft.setData({ pos: "player_left" });
        this.playerRight.setData({ pos: "player_right" });
        this.txtMultiple.text = "0";
        this.txtBase.text = "0";
    };
    return RoomScene;
})(ASkinCom);
RoomScene.prototype.__class__ = "RoomScene";
