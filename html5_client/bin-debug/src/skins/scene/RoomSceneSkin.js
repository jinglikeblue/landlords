var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var RoomSceneSkin = (function (_super) {
            __extends(RoomSceneSkin, _super);
            function RoomSceneSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__1_i(), this.playerSelf_i(), this.__2_i(), this.btnRobot_i(), this.btnSet_i(), this.btnExit_i(), this.btnBuy_i(), this.card0_i(), this.card1_i(), this.card2_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.playerLeft_i(), this.playerRight_i(), this.txtMultiple_i(), this.txtBase_i()];
            }
            var __egretProto__ = RoomSceneSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return RoomSceneSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__2_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "title_bg_png", 4]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["gold_back_png", 324, 745]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["gold_png", 299, 746]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["rate_png", 61, 709]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["grade_png", 60, 746]);
                return t;
            };
            __egretProto__.btnBuy_i = function () {
                var t = new egret.gui.Button();
                this.btnBuy = t;
                this.__s(t, ["enabled", "skinName", "x", "y"], [true, new egret.gui.ButtonSkin("charge1_png", "charge0_png", "charge0_png"), 309, 9.5]);
                return t;
            };
            __egretProto__.btnExit_i = function () {
                var t = new egret.gui.Button();
                this.btnExit = t;
                this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("return1_png", "return0_png", "return0_png"), 68, 9]);
                return t;
            };
            __egretProto__.btnRobot_i = function () {
                var t = new egret.gui.Button();
                this.btnRobot = t;
                this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("trustee1_png", "trustee0_png", "trustee0_png"), 121, 9.5]);
                return t;
            };
            __egretProto__.btnSet_i = function () {
                var t = new egret.gui.Button();
                this.btnSet = t;
                this.__s(t, ["enabled", "skinName", "x", "y"], [true, new egret.gui.ButtonSkin("set1_png", "set0_png", "set0_png"), 363, 9]);
                return t;
            };
            __egretProto__.card0_i = function () {
                var t = new egret.gui.UIAsset();
                this.card0 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [58, "card_back_png", 42, 177, 7]);
                return t;
            };
            __egretProto__.card1_i = function () {
                var t = new egret.gui.UIAsset();
                this.card1 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [58, "card_back_png", 42, 221, 7]);
                return t;
            };
            __egretProto__.card2_i = function () {
                var t = new egret.gui.UIAsset();
                this.card2 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [58, "card_back_png", 42, 265, 7]);
                return t;
            };
            __egretProto__.playerLeft_i = function () {
                var t = new PlayerOther();
                this.playerLeft = t;
                this.__s(t, ["skinName", "x", "y"], [skins.components.player.PlayerLeftSkin, 17, 91]);
                return t;
            };
            __egretProto__.playerRight_i = function () {
                var t = new PlayerOther();
                this.playerRight = t;
                this.__s(t, ["skinName", "x", "y"], [skins.components.player.PlayerRightSkin, 162, 91]);
                return t;
            };
            __egretProto__.playerSelf_i = function () {
                var t = new PlayerSelf();
                this.playerSelf = t;
                this.__s(t, ["height", "skinName", "x", "y"], [478, skins.components.player.PlayerSelfSkin, 0, 319]);
                return t;
            };
            __egretProto__.__1_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "bg_png";
                return t;
            };
            __egretProto__.txtBase_i = function () {
                var t = new egret.gui.Label();
                this.txtBase = t;
                this.__s(t, ["bold", "stroke", "text", "textColor", "verticalAlign", "x", "y"], [true, 1, "12", 0xFFFFFF, "bottom", 124, 741]);
                return t;
            };
            __egretProto__.txtMultiple_i = function () {
                var t = new egret.gui.Label();
                this.txtMultiple = t;
                this.__s(t, ["bold", "stroke", "text", "textColor", "verticalAlign", "x", "y"], [true, 1, "12", 0xFFFFFF, "bottom", 124, 704]);
                return t;
            };
            RoomSceneSkin._skinParts = ["playerSelf", "btnRobot", "btnSet", "btnExit", "btnBuy", "card0", "card1", "card2", "playerLeft", "playerRight", "txtMultiple", "txtBase"];
            return RoomSceneSkin;
        })(egret.gui.Skin);
        scene.RoomSceneSkin = RoomSceneSkin;
        RoomSceneSkin.prototype.__class__ = "skins.scene.RoomSceneSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
//# sourceMappingURL=RoomSceneSkin.js.map