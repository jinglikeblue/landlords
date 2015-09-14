module skins.simple{
	export class HSliderSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["track","trackHighlight","thumb"];
		private __s:Function = egret.gui.setProperties;
		public thumb:egret.gui.Button;
		public track:egret.gui.UIAsset;
		public trackHighlight:egret.gui.UIAsset;

		public constructor(){
			super();
			
			this.__s(this,["minHeight","minWidth"],[13,50])
			this.elementsContent = [this.track_i(),this.trackHighlight_i(),this.thumb_i()];
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
			return HSliderSkin._skinParts;
		}
		private thumb_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.thumb = t;
			this.__s(t,["height","skinName","verticalCenter","width"],[24,skins.simple.HSliderThumbSkin,0,24])
			return t;
		}
		private trackHighlight_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.trackHighlight = t;
			this.__s(t,["height","source","verticalCenter"],[10,"hslider_fill_png",0])
			return t;
		}
		private track_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.track = t;
			this.__s(t,["height","source","verticalCenter","percentWidth"],[10,"hslider_track_png",0,100])
			return t;
		}
	}
}