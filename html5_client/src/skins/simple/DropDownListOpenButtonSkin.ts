module skins.simple{
	export class DropDownListOpenButtonSkin extends egret.gui.Skin{
		public __4:egret.gui.UIAsset;
		public __5:egret.gui.UIAsset;
		private __s:Function = egret.gui.setProperties;

		public constructor(){
			super();
			
			this.__s(this,["height","minWidth"],[60,140])
			this.elementsContent = [this.__4_i(),this.__5_i()];
			this.states = [
				new egret.gui.State ("up",
					[
					])
				,
				new egret.gui.State ("down",
					[
						new egret.gui.SetProperty("__4","source","DropDownListButtonSkin_down_png"),
						new egret.gui.SetProperty("__5","source","dropdownlist_arrow_down_png")
					])
				,
				new egret.gui.State ("disabled",
					[
					])
			];
		}

		private __4_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__4 = t;
			this.__s(t,["percentHeight","source","percentWidth"],[100,"DropDownListButtonSkin_up_png",100])
			return t;
		}
		private __5_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__5 = t;
			this.__s(t,["right","source","verticalCenter"],[4,"dropdownlist_arrow_up_png",0])
			return t;
		}
	}
}