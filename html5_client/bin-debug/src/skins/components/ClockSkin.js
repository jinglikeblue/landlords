var skins;
(function (skins) {
    var components;
    (function (components) {
        var ClockSkin = (function (_super) {
            __extends(ClockSkin, _super);
            function ClockSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [60, 60]);
                this.elementsContent = [this.clock_i(), this.txtTime_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = ClockSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ClockSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.clock_i = function () {
                var t = new egret.gui.UIAsset();
                this.clock = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [3, "clock_png", 0]);
                return t;
            };
            __egretProto__.txtTime_i = function () {
                var t = new egret.gui.Label();
                this.txtTime = t;
                this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "宋体", 24, 18, "22", "center", 0x000000, "bottom", 30, 15, 18]);
                return t;
            };
            ClockSkin._skinParts = ["clock", "txtTime"];
            return ClockSkin;
        })(egret.gui.Skin);
        components.ClockSkin = ClockSkin;
        ClockSkin.prototype.__class__ = "skins.components.ClockSkin";
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
//# sourceMappingURL=ClockSkin.js.map