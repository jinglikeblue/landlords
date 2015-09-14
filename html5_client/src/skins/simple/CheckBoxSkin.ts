module skins.simple{
	export class CheckBoxSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["labelDisplay"];
		private __s:Function = egret.gui.setProperties;
		public __8:egret.gui.UIAsset;
		public labelDisplay:egret.gui.Label;

		public constructor(){
			super();
			
			this.elementsContent = [this.__9_i()];
			this.states = [
				new egret.gui.State ("up",
					[
					])
				,
				new egret.gui.State ("down",
					[
						new egret.gui.SetProperty("__8","source","checkbox_select_over_png")
					])
				,
				new egret.gui.State ("disabled",
					[
						new egret.gui.SetProperty("__8","source","checkbox_unselect_disabled_png")
					])
				,
				new egret.gui.State ("upAndSelected",
					[
						new egret.gui.SetProperty("__8","source","checkbox_select_normal_png")
					])
				,
				new egret.gui.State ("downAndSelected",
					[
						new egret.gui.SetProperty("__8","source","checkbox_unselect_over_png")
					])
				,
				new egret.gui.State ("disabledAndSelected",
					[
						new egret.gui.SetProperty("__8","source","checkbox_select_disabled_png")
					])
			];
		}

		public get skinParts():Array<string>{
			return CheckBoxSkin._skinParts;
		}
		private __8_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__8 = t;
			this.__s(t,["fillMode","height","source","verticalCenter","width"],["scale",24,"checkbox_unselect_normal_png",1,24])
			return t;
		}
		private __9_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.__s(t,["percentHeight","percentWidth"],[100,100])
			t.layout = this.__7_i();
			t.elementsContent = [this.__8_i(),this.labelDisplay_i()];
			return t;
		}
		private labelDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.labelDisplay = t;
			this.__s(t,["fontFamily","maxDisplayedLines","size","textAlign","textColor","verticalAlign"],["Tahoma",1,20,"center",0x707070,"middle"])
			return t;
		}
		private __7_i():egret.gui.HorizontalLayout{
			var t:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
			t.verticalAlign = "middle";
			return t;
		}
	}
}