module skins.simple{
	export class ButtonSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["iconDisplay","labelDisplay"];
		private __s:Function = egret.gui.setProperties;
		public __4:egret.gui.UIAsset;
		public iconDisplay:egret.gui.UIAsset;
		public labelDisplay:egret.gui.Label;

		public constructor(){
			super();
			
			this.__s(this,["minHeight","minWidth"],[60,140])
			this.elementsContent = [this.__4_i(),this.__6_i()];
			this.states = [
				new egret.gui.State ("up",
					[
					])
				,
				new egret.gui.State ("down",
					[
						new egret.gui.SetProperty("__4","source","button_down_png"),
						new egret.gui.SetProperty("labelDisplay","textColor",0x222222)
					])
				,
				new egret.gui.State ("disabled",
					[
						new egret.gui.SetProperty("__4","source","button_disabled_png"),
						new egret.gui.SetProperty("labelDisplay","textColor",0xcccccc)
					])
			];
		}

		public get skinParts():Array<string>{
			return ButtonSkin._skinParts;
		}
		private __5_i():egret.gui.HorizontalLayout{
			var t:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
			this.__s(t,["gap","horizontalAlign","verticalAlign"],[0,"center","middle"])
			return t;
		}
		private __6_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.__s(t,["bottom","left","right","top"],[10,10,10,10])
			t.layout = this.__5_i();
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
			this.__s(t,["fontFamily","paddingLeft","paddingRight","size","textAlign","textColor","verticalAlign"],["Tahoma",5,5,20,"center",0x111111,"middle"])
			return t;
		}
		private __4_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__4 = t;
			this.__s(t,["percentHeight","source","percentWidth"],[100,"button_normal_png",100])
			return t;
		}
	}
}