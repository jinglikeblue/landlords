var skins;
(function (skins) {
    var components;
    (function (components) {
        var player;
        (function (player) {
            var PlayerSelfSkin = (function (_super) {
                __extends(PlayerSelfSkin, _super);
                function PlayerSelfSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [480, 480]);
                    this.elementsContent = [this.imgHead_i(), this.txtName_i(), this.action_i()];
                }
                var __egretProto__ = PlayerSelfSkin.prototype;
                Object.defineProperty(__egretProto__, "skinParts", {
                    get: function () {
                        return PlayerSelfSkin._skinParts;
                    },
                    enumerable: true,
                    configurable: true
                });
                __egretProto__.imgHead_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.imgHead = t;
                    this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "player_common_bg0_png", 10, 390]);
                    return t;
                };
                __egretProto__.action_i = function () {
                    var t = new PlayerAction();
                    this.action = t;
                    this.__s(t, ["skinName", "x", "y"], [skins.components.player.PlayActionSkin, 0, 0]);
                    return t;
                };
                __egretProto__.txtName_i = function () {
                    var t = new egret.gui.Label();
                    this.txtName = t;
                    this.__s(t, ["bold", "fontFamily", "size", "stroke", "text", "textAlign", "width", "x", "y"], [true, "宋体", 20, 1, "帅到想毁容", "left", 160, 307, 400]);
                    return t;
                };
                PlayerSelfSkin._skinParts = ["imgHead", "txtName", "action"];
                return PlayerSelfSkin;
            })(egret.gui.Skin);
            player.PlayerSelfSkin = PlayerSelfSkin;
            PlayerSelfSkin.prototype.__class__ = "skins.components.player.PlayerSelfSkin";
        })(player = components.player || (components.player = {}));
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
