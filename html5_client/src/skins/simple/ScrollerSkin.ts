module skins.simple{
	export class ScrollerSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["horizontalScrollBar","verticalScrollBar"];
		private __s:Function = egret.gui.setProperties;
		public horizontalScrollBar:egret.gui.HScrollBar;
		public verticalScrollBar:egret.gui.VScrollBar;

		public constructor(){
			super();
			
			this.__s(this,["maxWidth","minHeight","minWidth"],[710,230,370])
			this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
		}

		public get skinParts():Array<string>{
			return ScrollerSkin._skinParts;
		}
		private horizontalScrollBar_i():egret.gui.HScrollBar{
			var t:egret.gui.HScrollBar = new egret.gui.HScrollBar();
			this.horizontalScrollBar = t;
			t.skinName = skins.simple.HScrollBarSkin;
			return t;
		}
		private verticalScrollBar_i():egret.gui.VScrollBar{
			var t:egret.gui.VScrollBar = new egret.gui.VScrollBar();
			this.verticalScrollBar = t;
			t.skinName = skins.simple.VScrollBarSkin;
			return t;
		}
	}
}