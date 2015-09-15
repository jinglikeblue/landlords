var skins;
(function (skins) {
    var components;
    (function (components) {
        var buttons;
        (function (buttons) {
            var BtnTipSkin = (function (_super) {
                __extends(BtnTipSkin, _super);
                function BtnTipSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [55, 96]);
                    this.elementsContent = [this.__3_i(), this.__4_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var __egretProto__ = BtnTipSkin.prototype;
                __egretProto__.__3_i = function () {
                    var t = new egret.gui.Button();
                    t.skinName = new egret.gui.ButtonSkin("btn4_1_png", "btn4_0_png", "btn4_0_png");
                    return t;
                };
                __egretProto__.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["horizontalCenter", "source", "touchEnabled", "verticalCenter"], [0.5, "lab_tip_png", false, -3.5]);
                    return t;
                };
                return BtnTipSkin;
            })(egret.gui.Skin);
            buttons.BtnTipSkin = BtnTipSkin;
            BtnTipSkin.prototype.__class__ = "skins.components.buttons.BtnTipSkin";
        })(buttons = components.buttons || (components.buttons = {}));
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
