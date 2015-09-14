module skins.simple{
	export class TabBarButtonSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["labelDisplay"];
		private __s:Function = egret.gui.setProperties;
		public __7:egret.gui.UIAsset;
		public labelDisplay:egret.gui.Label;

		public constructor(){
			super();
			
			this.__s(this,["height","minWidth"],[60,140])
			this.elementsContent = [this.__7_i(),this.labelDisplay_i()];
			this.states = [
				new egret.gui.State ("up",
					[
					])
				,
				new egret.gui.State ("down",
					[
						new egret.gui.SetProperty("__7","source","button_down_png")
					])
				,
				new egret.gui.State ("disabled",
					[
						new egret.gui.SetProperty("__7","source","button_disabled_png")
					])
				,
				new egret.gui.State ("upAndSelected",
					[
						new egret.gui.SetProperty("__7","source","button_down_png")
					])
				,
				new egret.gui.State ("downAndSelected",
					[
						new egret.gui.SetProperty("__7","source","button_down_png")
					])
				,
				new egret.gui.State ("disabledAndSelected",
					[
						new egret.gui.SetProperty("__7","source","button_down_png")
					])
			];
		}

		public get skinParts():Array<string>{
			return TabBarButtonSkin._skinParts;
		}
		private labelDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.labelDisplay = t;
			this.__s(t,["bottom","fontFamily","left","right","size","textAlign","textColor","top","verticalAlign"],[12,"Tahoma",10,10,20,"center",0x111111,8,"middle"])
			return t;
		}
		private __7_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__7 = t;
			this.__s(t,["percentHeight","source","percentWidth"],[100,"button_normal_png",100])
			return t;
		}
	}
}