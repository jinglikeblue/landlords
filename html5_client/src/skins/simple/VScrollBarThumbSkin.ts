module skins.simple{
	export class VScrollBarThumbSkin extends egret.gui.Skin{
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
			this.__s(t,["fillMode","percentHeight","horizontalCenter","source","width"],["scale",100,0,"vscrollbtn_png",10])
			return t;
		}
	}
}