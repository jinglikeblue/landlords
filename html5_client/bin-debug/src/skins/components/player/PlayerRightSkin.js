var skins;
(function (skins) {
    var components;
    (function (components) {
        var player;
        (function (player) {
            var PlayerRightSkin = (function (_super) {
                __extends(PlayerRightSkin, _super);
                function PlayerRightSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [264, 304]);
                    this.elementsContent = [this.imgHead_i(), this.txtName_i(), this.cardback_i(), this.txtCardRemain_i()];
                    this.cards_i();
                    this.action_i();
                    this.clock_i();
                    this.states = [
                        new egret.gui.State("thinking", [
                            new egret.gui.AddItems("clock", "", "last", "")
                        ]),
                        new egret.gui.State("action", [
                            new egret.gui.AddItems("action", "", "last", "")
                        ]),
                        new egret.gui.State("card", [
                            new egret.gui.AddItems("cards", "", "last", "")
                        ])
                    ];
                }
                var __egretProto__ = PlayerRightSkin.prototype;
                Object.defineProperty(__egretProto__, "skinParts", {
                    get: function () {
                        return PlayerRightSkin._skinParts;
                    },
                    enumerable: true,
                    configurable: true
                });
                __egretProto__.cardback_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.cardback = t;
                    this.__s(t, ["source", "x", "y"], ["card_back_png", 170, 45]);
                    return t;
                };
                __egretProto__.cards_i = function () {
                    var t = new egret.gui.SkinnableContainer();
                    this.cards = t;
                    this.__s(t, ["height", "width", "x", "y"], [120, 245, 57, 129]);
                    return t;
                };
                __egretProto__.clock_i = function () {
                    var t = new Clock();
                    this.clock = t;
                    this.__s(t, ["skinName", "x", "y"], [skins.components.ClockSkin, 162, 129]);
                    return t;
                };
                __egretProto__.imgHead_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.imgHead = t;
                    this.__s(t, ["source", "x", "y"], ["player_common_bg0_png", 221, 26]);
                    return t;
                };
                __egretProto__.action_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.action = t;
                    this.__s(t, ["source", "x", "y"], ["lab_call_png", 179, 129]);
                    return t;
                };
                __egretProto__.txtCardRemain_i = function () {
                    var t = new egret.gui.Label();
                    this.txtCardRemain = t;
                    this.__s(t, ["bold", "fontFamily", "stroke", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "宋体", 1, "17", "center", 0xFFB4B4, "bottom", 40, 171, 57]);
                    return t;
                };
                __egretProto__.txtName_i = function () {
                    var t = new egret.gui.Label();
                    this.txtName = t;
                    this.__s(t, ["bold", "fontFamily", "size", "stroke", "text", "textAlign", "width", "x", "y"], [true, "宋体", 20, 1, "潘金莲", "right", 160, 142, 0]);
                    return t;
                };
                PlayerRightSkin._skinParts = ["imgHead", "txtName", "cardback", "txtCardRemain", "cards", "action", "clock"];
                return PlayerRightSkin;
            })(egret.gui.Skin);
            player.PlayerRightSkin = PlayerRightSkin;
            PlayerRightSkin.prototype.__class__ = "skins.components.player.PlayerRightSkin";
        })(player = components.player || (components.player = {}));
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
