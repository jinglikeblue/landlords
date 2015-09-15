var skins;
(function (skins) {
    var components;
    (function (components) {
        var buttons;
        (function (buttons) {
            var BtnNoRobSkin = (function (_super) {
                __extends(BtnNoRobSkin, _super);
                function BtnNoRobSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [63, 158]);
                    this.elementsContent = [this.__3_i(), this.__4_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var __egretProto__ = BtnNoRobSkin.prototype;
                __egretProto__.__3_i = function () {
                    var t = new egret.gui.Button();
                    this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [0, new egret.gui.ButtonSkin("btn13_1_png", "btn13_0_png", "btn13_0_png"), 0]);
                    return t;
                };
                __egretProto__.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["horizontalCenter", "source", "touchEnabled", "verticalCenter"], [0, "lab_norob_png", false, 0]);
                    return t;
                };
                return BtnNoRobSkin;
            })(egret.gui.Skin);
            buttons.BtnNoRobSkin = BtnNoRobSkin;
            BtnNoRobSkin.prototype.__class__ = "skins.components.buttons.BtnNoRobSkin";
        })(buttons = components.buttons || (components.buttons = {}));
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
//# sourceMappingURL=BtnNoRobSkin.js.map