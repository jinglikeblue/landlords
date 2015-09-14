module skins.simple{
	export class ToggleButtonSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["iconDisplay","labelDisplay"];
		private __s:Function = egret.gui.setProperties;
		public __7:egret.gui.UIAsset;
		public iconDisplay:egret.gui.UIAsset;
		public labelDisplay:egret.gui.Label;

		public constructor(){
			super();
			
			this.__s(this,["height","minWidth"],[60,140])
			this.elementsContent = [this.__7_i(),this.__9_i()];
			this.states = [
				new egret.gui.State ("up",
					[
					])
				,
				new egret.gui.State ("down",
					[
						new egret.gui.SetProperty("__7","source","togglebutton_over_png"),
						new egret.gui.SetProperty("labelDisplay","textColor",0x1e7465)
					])
				,
				new egret.gui.State ("disabled",
					[
						new egret.gui.SetProperty("__7","source","togglebutton_disabled_png"),
						new egret.gui.SetProperty("labelDisplay","textColor",0xcccccc)
					])
				,
				new egret.gui.State ("upAndSelected",
					[
						new egret.gui.SetProperty("__7","source","togglebutton_selected_png"),
						new egret.gui.SetProperty("labelDisplay","textColor",0xeeedec)
					])
				,
				new egret.gui.State ("downAndSelected",
					[
						new egret.gui.SetProperty("__7","source","togglebutton_over_png"),
						new egret.gui.SetProperty("labelDisplay","textColor",0x1e7465)
					])
				,
				new egret.gui.State ("disabledAndSelected",
					[
						new egret.gui.SetProperty("__7","source","togglebutton_disabled_png"),
						new egret.gui.SetProperty("labelDisplay","textColor",0xcccccc)
					])
			];
		}

		public get skinParts():Array<string>{
			return ToggleButtonSkin._skinParts;
		}
		private __8_i():egret.gui.HorizontalLayout{
			var t:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
			this.__s(t,["gap","horizontalAlign","verticalAlign"],[0,"center","middle"])
			return t;
		}
		private __9_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.__s(t,["bottom","left","right","top"],[10,10,10,10])
			t.layout = this.__8_i();
			t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			return t;
		}
		private iconDisplay_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.iconDisplay = t;
			return t;
		}
		private labelDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.labelDisplay = t;
			this.__s(t,["fontFamily","size","textAlign","textColor","verticalAlign"],["Tahoma",20,"center",0x1e7465,"middle"])
			return t;
		}
		private __7_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__7 = t;
			this.__s(t,["percentHeight","source","percentWidth"],[100,"togglebutton_normal_png",100])
			return t;
		}
	}
}