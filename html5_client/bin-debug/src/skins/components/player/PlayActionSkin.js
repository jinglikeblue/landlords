var skins;
(function (skins) {
    var components;
    (function (components) {
        var player;
        (function (player) {
            var PlayActionSkin = (function (_super) {
                __extends(PlayActionSkin, _super);
                function PlayActionSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [150, 480]);
                    this.elementsContent = [this.clock_i()];
                    this.btnPass_i();
                    this.btnReset_i();
                    this.btnTip_i();
                    this.btnPush_i();
                    this.btnNoRob_i();
                    this.btnRob_i();
                    this.btnCall_i();
                    this.btnNoCall_i();
                    this.states = [
                        new egret.gui.State("call", [
                            new egret.gui.AddItems("btnCall", "", "last", ""),
                            new egret.gui.AddItems("btnNoCall", "", "last", "")
                        ]),
                        new egret.gui.State("rob", [
                            new egret.gui.AddItems("btnNoRob", "", "last", ""),
                            new egret.gui.AddItems("btnRob", "", "last", "")
                        ]),
                        new egret.gui.State("lead", [
                            new egret.gui.AddItems("btnPass", "", "last", ""),
                            new egret.gui.AddItems("btnReset", "", "last", ""),
                            new egret.gui.AddItems("btnTip", "", "last", ""),
                            new egret.gui.AddItems("btnPush", "", "last", "")
                        ])
                    ];
                }
                var __egretProto__ = PlayActionSkin.prototype;
                Object.defineProperty(__egretProto__, "skinParts", {
                    get: function () {
                        return PlayActionSkin._skinParts;
                    },
                    enumerable: true,
                    configurable: true
                });
                __egretProto__.btnNoCall_i = function () {
                    var t = new egret.gui.SkinnableComponent();
                    this.btnNoCall = t;
                    this.__s(t, ["skinName", "touchChildren", "x", "y"], [skins.components.buttons.BtnNoCallSkin, true, 70, 70]);
                    return t;
                };
                __egretProto__.btnNoRob_i = function () {
                    var t = new egret.gui.SkinnableComponent();
                    this.btnNoRob = t;
                    this.__s(t, ["skinName", "touchChildren", "x", "y"], [skins.components.buttons.BtnNoRobSkin, true, 70, 70]);
                    return t;
                };
                __egretProto__.btnPass_i = function () {
                    var t = new egret.gui.SkinnableComponent();
                    this.btnPass = t;
                    this.__s(t, ["skinName", "touchChildren", "x", "y"], [skins.components.buttons.BtnPassSkin, true, 17, 70]);
                    return t;
                };
                __egretProto__.btnPush_i = function () {
                    var t = new egret.gui.SkinnableComponent();
                    this.btnPush = t;
                    this.__s(t, ["skinName", "touchChildren", "x", "y"], [skins.components.buttons.BtnPushSkin, true, 356, 70]);
                    return t;
                };
                __egretProto__.btnReset_i = function () {
                    var t = new egret.gui.SkinnableComponent();
                    this.btnReset = t;
                    this.__s(t, ["skinName", "touchChildren", "x", "y"], [skins.components.buttons.BtnResetSkin, true, 134, 72]);
                    return t;
                };
                __egretProto__.btnRob_i = function () {
                    var t = new egret.gui.SkinnableComponent();
                    this.btnRob = t;
                    this.__s(t, ["skinName", "touchChildren", "x", "y"], [skins.components.buttons.BtnRobSkin, true, 270, 70]);
                    return t;
                };
                __egretProto__.btnTip_i = function () {
                    var t = new egret.gui.SkinnableComponent();
                    this.btnTip = t;
                    this.__s(t, ["skinName", "touchChildren", "x", "y"], [skins.components.buttons.BtnTipSkin, true, 252, 71]);
                    return t;
                };
                __egretProto__.clock_i = function () {
                    var t = new Clock();
                    this.clock = t;
                    this.__s(t, ["horizontalCenter", "skinName", "y"], [11, skins.components.ClockSkin, 0]);
                    return t;
                };
                __egretProto__.btnCall_i = function () {
                    var t = new egret.gui.SkinnableComponent();
                    this.btnCall = t;
                    this.__s(t, ["skinName", "touchChildren", "x", "y"], [skins.components.buttons.BtnCallSkin, true, 270, 70]);
                    return t;
                };
                PlayActionSkin._skinParts = ["clock", "btnPass", "btnReset", "btnTip", "btnPush", "btnNoRob", "btnRob", "btnCall", "btnNoCall"];
                return PlayActionSkin;
            })(egret.gui.Skin);
            player.PlayActionSkin = PlayActionSkin;
            PlayActionSkin.prototype.__class__ = "skins.components.player.PlayActionSkin";
        })(player = components.player || (components.player = {}));
    })(components = skins.components || (skins.components = {}));
})(skins || (skins = {}));
