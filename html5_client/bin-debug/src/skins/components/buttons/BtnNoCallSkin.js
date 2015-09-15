var skins;
(function (skins) {
    var components;
    (function (components) {
        var buttons;
        (function (buttons) {
            var BtnNoCallSkin = (function (_super) {
                __extends(BtnNoCallSkin, _super);
                function BtnNoCallSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [63, 158]);
                    this.elementsContent = [this.__3_i(), this.__4_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var __egretProto__ = BtnNoCallSkin.prototype;
                __egretProto__.__3_i = function () {
                    var t = new egret.gui.Button();
                    t.skinName = new egret.gui.ButtonSkin("btn13_1_png", "btn13_0_png", "btn13_0_png");
                    return t;
                };
                __egretProto__.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["horizontalCenter", "source", "touchEnabled", "verticalCenter"], [0, "lab_nocall_png", false, 0]);
                    return t;
                };
                return BtnNoCallSkin;
            })(egret.gui.Skin);
            buttons.BtnNoCallSkin = BtnNoCallSkin;
            BtnNoCallSkin.prototype.__class__ = "skins.components.buttons.BtnNoCallSkin";
        })(buttons = components.buttons || (components.buttons = {}));
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
