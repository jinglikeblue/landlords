var HallScene = (function (_super) {
    __extends(HallScene, _super);
    function HallScene() {
        _super.call(this, skins.scene.HallSceneSkin);
    }
    var __egretProto__ = HallScene.prototype;
    __egretProto__.init = function () {
    };
    __egretProto__.addListeners = function () {
        this.btnSet.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnSet_touchBeginHandler, this);
        this.btnHelp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnHelp_touchBeginHandler, this);
        this.btnAdvice.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnAdvice_touchBeginHandler, this);
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnStart_touchHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.btnSet.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnSet_touchBeginHandler, this);
        this.btnHelp.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnHelp_touchBeginHandler, this);
        this.btnAdvice.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnAdvice_touchBeginHandler, this);
        this.btnStart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnStart_touchHandler, this);
    };
    __egretProto__.btnSet_touchBeginHandler = function (e) {
        egret.gui.Alert.show("开发中");
    };
    __egretProto__.btnHelp_touchBeginHandler = function (e) {
        egret.gui.Alert.show("开发中");
    };
    __egretProto__.btnAdvice_touchBeginHandler = function (e) {
        egret.gui.Alert.show("开发中");
    };
    __egretProto__.btnStart_touchHandler = function (e) {
        GUIManager.showScene(new RoomScene());
    };
    return HallScene;
})(ASkinCom);
HallScene.prototype.__class__ = "HallScene";
