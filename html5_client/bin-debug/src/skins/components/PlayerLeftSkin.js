var skins;
(function (skins) {
    var components;
    (function (components) {
        var PlayerLeftSkin = (function (_super) {
            __extends(PlayerLeftSkin, _super);
            function PlayerLeftSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [250, 246]);
                this.elementsContent = [this.imgHead_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.txtName_i(), this.cardback_i(), this.txtCardRemain_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = PlayerLeftSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return PlayerLeftSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 149, 129]);
                return t;
            };
            __egretProto__.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 168, 129]);
                return t;
            };
            __egretProto__.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 0, 168]);
                return t;
            };
            __egretProto__.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 19, 168]);
                return t;
            };
            __egretProto__.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 37, 168]);
                return t;
            };
            __egretProto__.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_11", 56, 168]);
                return t;
            };
            __egretProto__.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 75, 168]);
                return t;
            };
            __egretProto__.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 93, 168]);
                return t;
            };
            __egretProto__.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 112, 168]);
                return t;
            };
            __egretProto__.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 131, 168]);
                return t;
            };
            __egretProto__.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 149, 168]);
                return t;
            };
            __egretProto__.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 168, 168]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 0, 129]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 19, 129]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 37, 129]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_11", 56, 129]);
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 75, 129]);
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 93, 129]);
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 112, 129]);
                return t;
            };
            __egretProto__.cardback_i = function () {
                var t = new egret.gui.UIAsset();
                this.cardback = t;
                this.__s(t, ["source", "x", "y"], ["card_back_png", 95, 45]);
                return t;
            };
            __egretProto__.imgHead_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgHead = t;
                this.__s(t, ["source", "x", "y"], ["player_common_bg0_png", 2, 26]);
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 131, 129]);
                return t;
            };
            __egretProto__.txtCardRemain_i = function () {
                var t = new egret.gui.Label();
                this.txtCardRemain = t;
                this.__s(t, ["bold", "fontFamily", "stroke", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "宋体", 1, "17", "center", 0xFFB4B4, "bottom", 40, 96, 57]);
                return t;
            };
            __egretProto__.txtName_i = function () {
                var t = new egret.gui.Label();
                this.txtName = t;
                this.__s(t, ["bold", "fontFamily", "size", "stroke", "text", "textAlign", "width", "x", "y"], [true, "宋体", 20, 1, "西门吹雪", "left", 157, 2, 0]);
                return t;
            };
            PlayerLeftSkin._skinParts = ["imgHead", "txtName", "cardback", "txtCardRemain"];
            return PlayerLeftSkin;
        })(egret.gui.Skin);
        components.PlayerLeftSkin = PlayerLeftSkin;
        PlayerLeftSkin.prototype.__class__ = "skins.components.PlayerLeftSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
