var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var ShowcaseSkin = (function (_super) {
            __extends(ShowcaseSkin, _super);
            function ShowcaseSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.list_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.__23_i(), this.__24_i(), this.__25_i(), this.__26_i(), this.__27_i(), this.__28_i(), this.__29_i(), this.__30_i(), this.__31_i(), this.__32_i(), this.__33_i(), this.__34_i(), this.__35_i(), this.__36_i(), this.__37_i(), this.__38_i(), this.__39_i(), this.__40_i(), this.__41_i(), this.__42_i(), this.__43_i(), this.__44_i(), this.__45_i(), this.__46_i(), this.__47_i(), this.__48_i(), this.__49_i(), this.__50_i(), this.__51_i(), this.__52_i(), this.__53_i(), this.__54_i(), this.__55_i(), this.__56_i(), this.__57_i(), this.__58_i(), this.__59_i(), this.__60_i(), this.__61_i(), this.__62_i(), this.__63_i(), this.__64_i(), this.__65_i(), this.__66_i(), this.__67_i(), this.__68_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = ShowcaseSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ShowcaseSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["20", 323, 573]);
                return t;
            };
            __egretProto__.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["20", 353, 573]);
                return t;
            };
            __egretProto__.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["20", 382, 573]);
                return t;
            };
            __egretProto__.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["0", 116, 683]);
                return t;
            };
            __egretProto__.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["21", 146, 683]);
                return t;
            };
            __egretProto__.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["23", 176, 683]);
                return t;
            };
            __egretProto__.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["24", 205, 683]);
                return t;
            };
            __egretProto__.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["25", 235, 683]);
                return t;
            };
            __egretProto__.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["20", 264, 683]);
                return t;
            };
            __egretProto__.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["20", 294, 683]);
                return t;
            };
            __egretProto__.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["20", 323, 683]);
                return t;
            };
            __egretProto__.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["20", 353, 683]);
                return t;
            };
            __egretProto__.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["20", 382, 683]);
                return t;
            };
            __egretProto__.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["lord_boy_png", 15, 592]);
                return t;
            };
            __egretProto__.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["farmer_girl_png", 388, 72]);
                return t;
            };
            __egretProto__.__26_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["farmer_boy_png", 16, 72]);
                return t;
            };
            __egretProto__.__27_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["card_back_png", 111, 95]);
                return t;
            };
            __egretProto__.__28_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["card_back_png", 332, 92]);
                return t;
            };
            __egretProto__.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 335, 181]);
                return t;
            };
            __egretProto__.__30_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 357, 181]);
                return t;
            };
            __egretProto__.__31_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 379, 181]);
                return t;
            };
            __egretProto__.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_11", 400, 181]);
                return t;
            };
            __egretProto__.__33_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 422, 181]);
                return t;
            };
            __egretProto__.__34_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 334, 217]);
                return t;
            };
            __egretProto__.__35_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 356, 217]);
                return t;
            };
            __egretProto__.__36_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 378, 217]);
                return t;
            };
            __egretProto__.__37_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_11", 399, 217]);
                return t;
            };
            __egretProto__.__38_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 421, 217]);
                return t;
            };
            __egretProto__.__39_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_13", 334, 252]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["fillColor", "percentHeight", "percentWidth", "x", "y"], [0x00D0FF, 100, 100, 0, -1]);
                return t;
            };
            __egretProto__.__40_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_14", 356, 252]);
                return t;
            };
            __egretProto__.__41_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_15", 377, 252]);
                return t;
            };
            __egretProto__.__42_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_16", 399, 252]);
                return t;
            };
            __egretProto__.__43_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_17", 421, 252]);
                return t;
            };
            __egretProto__.__44_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 25, 175]);
                return t;
            };
            __egretProto__.__45_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 47, 175]);
                return t;
            };
            __egretProto__.__46_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 69, 175]);
                return t;
            };
            __egretProto__.__47_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_11", 90, 175]);
                return t;
            };
            __egretProto__.__48_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 112, 175]);
                return t;
            };
            __egretProto__.__49_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_0", 24, 211]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["0", 116, 573]);
                return t;
            };
            __egretProto__.__50_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_1", 46, 211]);
                return t;
            };
            __egretProto__.__51_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_10", 68, 211]);
                return t;
            };
            __egretProto__.__52_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_11", 89, 211]);
                return t;
            };
            __egretProto__.__53_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_12", 111, 211]);
                return t;
            };
            __egretProto__.__54_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_13", 334, 277]);
                return t;
            };
            __egretProto__.__55_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_14", 356, 277]);
                return t;
            };
            __egretProto__.__56_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_15", 377, 277]);
                return t;
            };
            __egretProto__.__57_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_16", 399, 277]);
                return t;
            };
            __egretProto__.__58_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_17", 421, 277]);
                return t;
            };
            __egretProto__.__59_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_13", 24, 246]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["21", 146, 573]);
                return t;
            };
            __egretProto__.__60_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_14", 46, 246]);
                return t;
            };
            __egretProto__.__61_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_15", 67, 246]);
                return t;
            };
            __egretProto__.__62_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_16", 89, 246]);
                return t;
            };
            __egretProto__.__63_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_17", 111, 246]);
                return t;
            };
            __egretProto__.__64_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_13", 23, 282]);
                return t;
            };
            __egretProto__.__65_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_14", 45, 282]);
                return t;
            };
            __egretProto__.__66_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_15", 66, 282]);
                return t;
            };
            __egretProto__.__67_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_16", 88, 282]);
                return t;
            };
            __egretProto__.__68_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["small_17", 110, 282]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["23", 176, 573]);
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["24", 205, 573]);
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["25", 235, 573]);
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["20", 264, 573]);
                return t;
            };
            __egretProto__.list_i = function () {
                var t = new egret.gui.List();
                this.list = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "skinName", "y"], [0, skins.simple.ItemRendererSkin, skins.simple.ListSkin, 150]);
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["20", 294, 573]);
                return t;
            };
            ShowcaseSkin._skinParts = ["list"];
            return ShowcaseSkin;
        })(egret.gui.Skin);
        scene.ShowcaseSkin = ShowcaseSkin;
        ShowcaseSkin.prototype.__class__ = "skins.scene.ShowcaseSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
