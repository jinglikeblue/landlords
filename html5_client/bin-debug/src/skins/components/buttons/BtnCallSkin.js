var skins;
(function (skins) {
    var components;
    (function (components) {
        var buttons;
        (function (buttons) {
            var BtnCallSkin = (function (_super) {
                __extends(BtnCallSkin, _super);
                function BtnCallSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [63, 158]);
                    this.elementsContent = [this.__3_i(), this.__4_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var __egretProto__ = BtnCallSkin.prototype;
                __egretProto__.__3_i = function () {
                    var t = new egret.gui.Button();
                    t.skinName = new egret.gui.ButtonSkin("btn12_1_png", "btn12_0_png", "btn12_0_png");
                    return t;
                };
                __egretProto__.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["horizontalCenter", "source", "touchEnabled", "verticalCenter"], [0, "lab_call_png", false, 0]);
                    return t;
                };
                return BtnCallSkin;
            })(egret.gui.Skin);
            buttons.BtnCallSkin = BtnCallSkin;
            BtnCallSkin.prototype.__class__ = "skins.components.buttons.BtnCallSkin";
        })(buttons = components.buttons || (components.buttons = {}));
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
