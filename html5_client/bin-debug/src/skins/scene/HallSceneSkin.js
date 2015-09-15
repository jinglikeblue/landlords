var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var HallSceneSkin = (function (_super) {
            __extends(HallSceneSkin, _super);
            function HallSceneSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btnAdvice_i(), this.btnHelp_i(), this.btnSet_i(), this.btnStart_i(), this.btnBuy_i(), this.__4_i(), this.txtGold_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = HallSceneSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return HallSceneSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["gold_png", 176, 460]);
                return t;
            };
            __egretProto__.btnAdvice_i = function () {
                var t = new egret.gui.Button();
                this.btnAdvice = t;
                this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("h_advice0_png", "h_advice1_png", "h_advice1_png"), 235, 15]);
                return t;
            };
            __egretProto__.btnBuy_i = function () {
                var t = new egret.gui.UIAsset();
                this.btnBuy = t;
                this.__s(t, ["source", "x", "y"], ["gold_back_png", 201, 459]);
                return t;
            };
            __egretProto__.btnHelp_i = function () {
                var t = new egret.gui.Button();
                this.btnHelp = t;
                this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("h_help0_png", "h_help1_png", "h_help1_png"), 313, 15]);
                return t;
            };
            __egretProto__.btnSet_i = function () {
                var t = new egret.gui.Button();
                this.btnSet = t;
                this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("h_set0_png", "h_set1_png", "h_set1_png"), 390, 15]);
                return t;
            };
            __egretProto__.btnStart_i = function () {
                var t = new egret.gui.Button();
                this.btnStart = t;
                this.__s(t, ["enabled", "horizontalCenter", "skinName", "verticalCenter"], [true, 0, new egret.gui.ButtonSkin("quick_0_png", "quick_1_png", "quick_1_png"), 0]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg1_png", 0, 0]);
                return t;
            };
            __egretProto__.txtGold_i = function () {
                var t = new egret.gui.Label();
                this.txtGold = t;
                this.__s(t, ["size", "stroke", "text", "textAlign", "textColor", "x", "y"], [16, 1, "12345678", "center", 0xFCD054, 206, 464]);
                return t;
            };
            HallSceneSkin._skinParts = ["btnAdvice", "btnHelp", "btnSet", "btnStart", "btnBuy", "txtGold"];
            return HallSceneSkin;
        })(egret.gui.Skin);
        scene.HallSceneSkin = HallSceneSkin;
        HallSceneSkin.prototype.__class__ = "skins.scene.HallSceneSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
