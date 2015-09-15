var skins;
(function (skins) {
    var components;
    (function (components) {
        var buttons;
        (function (buttons) {
            var BtnResetSkin = (function (_super) {
                __extends(BtnResetSkin, _super);
                function BtnResetSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [54, 111]);
                    this.elementsContent = [this.__3_i(), this.__4_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var __egretProto__ = BtnResetSkin.prototype;
                __egretProto__.__3_i = function () {
                    var t = new egret.gui.Button();
                    t.skinName = new egret.gui.ButtonSkin("btn3_1_png", "btn3_0_png", "btn3_0_png");
                    return t;
                };
                __egretProto__.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["horizontalCenter", "source", "touchEnabled", "verticalCenter"], [0, "lab_reset_png", false, 0]);
                    return t;
                };
                return BtnResetSkin;
            })(egret.gui.Skin);
            buttons.BtnResetSkin = BtnResetSkin;
            BtnResetSkin.prototype.__class__ = "skins.components.buttons.BtnResetSkin";
        })(buttons = components.buttons || (components.buttons = {}));
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
