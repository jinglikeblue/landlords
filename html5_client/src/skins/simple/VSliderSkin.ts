module skins.simple{
	export class VSliderSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["track","trackHighlight","thumb"];
		private __s:Function = egret.gui.setProperties;
		public thumb:egret.gui.Button;
		public track:egret.gui.UIAsset;
		public trackHighlight:egret.gui.UIAsset;

		public constructor(){
			super();
			
			this.__s(this,["minHeight","minWidth"],[13,13])
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
			return VSliderSkin._skinParts;
		}
		private thumb_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.thumb = t;
			this.__s(t,["height","horizontalCenter","skinName","width"],[24,0,skins.simple.VSliderThumbSkin,24])
			return t;
		}
		private trackHighlight_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.trackHighlight = t;
			this.__s(t,["horizontalCenter","source","width"],[0,"vslider_fill_png",10])
			return t;
		}
		private track_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.track = t;
			this.__s(t,["percentHeight","horizontalCenter","source","width"],[100,0,"vslider_track_png",10])
			return t;
		}
	}
}