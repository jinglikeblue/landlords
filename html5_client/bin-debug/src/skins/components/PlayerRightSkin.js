var skins;
(function (skins) {
    var components;
    (function (components) {
        var PlayerRightSkin = (function (_super) {
            __extends(PlayerRightSkin, _super);
            function PlayerRightSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [264, 304]);
                this.elementsContent = [this.imgHead_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.txtName_i(), this.cardback_i(), this.txtCardRemain_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
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
            __egretProto__.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 248, 129]);
                return t;
            };
            __egretProto__.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 267, 129]);
                return t;
            };
            __egretProto__.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 99, 168]);
                return t;
            };
            __egretProto__.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 118, 168]);
                return t;
            };
            __egretProto__.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 136, 168]);
                return t;
            };
            __egretProto__.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_11", 155, 168]);
                return t;
            };
            __egretProto__.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 174, 168]);
                return t;
            };
            __egretProto__.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 192, 168]);
                return t;
            };
            __egretProto__.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 211, 168]);
                return t;
            };
            __egretProto__.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 230, 168]);
                return t;
            };
            __egretProto__.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 248, 168]);
                return t;
            };
            __egretProto__.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 267, 168]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 99, 129]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 118, 129]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 136, 129]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_11", 155, 129]);
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 174, 129]);
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 192, 129]);
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 211, 129]);
                return t;
            };
            __egretProto__.cardback_i = function () {
                var t = new egret.gui.UIAsset();
                this.cardback = t;
                this.__s(t, ["source", "x", "y"], ["card_back_png", 170, 45]);
                return t;
            };
            __egretProto__.imgHead_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgHead = t;
                this.__s(t, ["source", "x", "y"], ["player_common_bg0_png", 221, 26]);
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 230, 129]);
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
            PlayerRightSkin._skinParts = ["imgHead", "txtName", "cardback", "txtCardRemain"];
            return PlayerRightSkin;
        })(egret.gui.Skin);
        components.PlayerRightSkin = PlayerRightSkin;
        PlayerRightSkin.prototype.__class__ = "skins.components.PlayerRightSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
