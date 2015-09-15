var skins;
(function (skins) {
    var components;
    (function (components) {
        var buttons;
        (function (buttons) {
            var BtnPassSkin = (function (_super) {
                __extends(BtnPassSkin, _super);
                function BtnPassSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [57, 113]);
                    this.elementsContent = [this.__3_i(), this.__4_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var __egretProto__ = BtnPassSkin.prototype;
                __egretProto__.__3_i = function () {
                    var t = new egret.gui.Button();
                    t.skinName = new egret.gui.ButtonSkin("btn10_1_png", "btn10_0_png", "btn10_0_png");
                    return t;
                };
                __egretProto__.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["horizontalCenter", "source", "touchEnabled", "verticalCenter"], [0, "lab_nopass_png", false, 0]);
                    return t;
                };
                return BtnPassSkin;
            })(egret.gui.Skin);
            buttons.BtnPassSkin = BtnPassSkin;
            BtnPassSkin.prototype.__class__ = "skins.components.buttons.BtnPassSkin";
        })(buttons = components.buttons || (components.buttons = {}));
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
