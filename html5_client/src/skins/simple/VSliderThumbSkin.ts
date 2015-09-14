module skins.simple{
	export class VSliderThumbSkin extends egret.gui.Skin{
		private __s:Function = egret.gui.setProperties;

		public constructor(){
			super();
			
			this.elementsContent = [this.__4_i()];
			this.states = [
				new egret.gui.State ("up",
					[
					])
				,
				new egret.gui.State ("down",
					[
					])
				,
				new egret.gui.State ("disabled",
					[
					])
			];
		}

		private __4_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["percentHeight","source","percentWidth"],[100,"vslider_thumb_png",100])
			return t;
		}
	}
}