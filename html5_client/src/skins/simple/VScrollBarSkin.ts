module skins.simple{
	export class VScrollBarSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["track","thumb"];
		private __s:Function = egret.gui.setProperties;
		public thumb:egret.gui.Button;
		public track:egret.gui.UIAsset;

		public constructor(){
			super();
			
			this.__s(this,["minHeight","minWidth"],[10,10])
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
			return VScrollBarSkin._skinParts;
		}
		private thumb_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.thumb = t;
			this.__s(t,["height","horizontalCenter","skinName","width"],[20,0,skins.simple.VScrollBarThumbSkin,10])
			return t;
		}
		private track_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.track = t;
			this.__s(t,["bottom","percentHeight","horizontalCenter","source","top","width"],[10,100,0,"vscrolltrack_png",10,10])
			return t;
		}
	}
}