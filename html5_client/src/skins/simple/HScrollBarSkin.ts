module skins.simple{
	export class HScrollBarSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["track","thumb"];
		private __s:Function = egret.gui.setProperties;
		public thumb:egret.gui.Button;
		public track:egret.gui.UIAsset;

		public constructor(){
			super();
			
			this.__s(this,["minHeight","minWidth"],[10,20])
			this.elementsContent = [this.track_i(),this.thumb_i()];
			this.states = [
				new egret.gui.State ("normal",
					[
					])
				,
				new egret.gui.State ("disabled",
					[
					])
			];
		}

		public get skinParts():Array<string>{
			return HScrollBarSkin._skinParts;
		}
		private thumb_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.thumb = t;
			this.__s(t,["height","skinName","verticalCenter","width"],[10,skins.simple.HScrollBarThumbSkin,0,24])
			return t;
		}
		private track_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.track = t;
			this.__s(t,["height","left","right","source","verticalCenter","percentWidth"],[10,10,10,"hscrolltrack_png",0,100])
			return t;
		}
	}
}