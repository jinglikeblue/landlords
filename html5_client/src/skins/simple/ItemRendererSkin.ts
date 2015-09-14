module skins.simple{
	export class ItemRendererSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["labelDisplay"];
		private __s:Function = egret.gui.setProperties;
		public __4:egret.gui.UIAsset;
		public labelDisplay:egret.gui.Label;

		public constructor(){
			super();
			
			this.height = 85;
			this.elementsContent = [this.__4_i(),this.labelDisplay_i(),this.__5_i()];
			this.states = [
				new egret.gui.State ("up",
					[
					])
				,
				new egret.gui.State ("down",
					[
						new egret.gui.SetProperty("__4","source","app_list_item_select_png"),
						new egret.gui.SetProperty("labelDisplay","textColor",0xf0f0f0)
					])
				,
				new egret.gui.State ("disabled",
					[
					])
			];
		}

		public get skinParts():Array<string>{
			return ItemRendererSkin._skinParts;
		}
		private __5_i():egret.gui.Rect{
			var t:egret.gui.Rect = new egret.gui.Rect();
			this.__s(t,["bottom","fillColor","height","percentWidth"],[0,0x888888,0.5,100])
			return t;
		}
		private labelDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.labelDisplay = t;
			this.__s(t,["fontFamily","left","size","textColor","verticalCenter"],["Tahoma",32,24,0x111111,0])
			return t;
		}
		private __4_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__4 = t;
			this.__s(t,["percentHeight","source","percentWidth"],[100,"app_list_item_up_png",100])
			return t;
		}
	}
}