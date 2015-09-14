module skins.simple{
	export class CloseButtonSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["labelDisplay"];
		private __s:Function = egret.gui.setProperties;
		public __4:egret.gui.UIAsset;
		public labelDisplay:egret.gui.Label;

		public constructor(){
			super();
			
			this.elementsContent = [this.__4_i(),this.labelDisplay_i()];
			this.states = [
				new egret.gui.State ("up",
					[
						new egret.gui.SetProperty("labelDisplay","textColor",0x111111)
					])
				,
				new egret.gui.State ("down",
					[
						new egret.gui.SetProperty("__4","source","closebtn_down_png"),
						new egret.gui.SetProperty("labelDisplay","textColor",0x222222)
					])
				,
				new egret.gui.State ("disabled",
					[
						new egret.gui.SetProperty("__4","source","closebtn_disabled_png"),
						new egret.gui.SetProperty("labelDisplay","textColor",0xcccccc)
					])
			];
		}

		public get skinParts():Array<string>{
			return CloseButtonSkin._skinParts;
		}
		private labelDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.labelDisplay = t;
			this.__s(t,["bottom","fontFamily","left","right","size","textAlign","top","verticalAlign"],[12,"Tahoma",10,10,20,"center",8,"middle"])
			return t;
		}
		private __4_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__4 = t;
			this.__s(t,["percentHeight","source","percentWidth"],[100,"closebtn_up_png",100])
			return t;
		}
	}
}