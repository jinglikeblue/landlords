module skins.simple{
	export class ToggleSwitchSkin extends egret.gui.Skin{
		public __10:egret.gui.UIAsset;
		public __11:egret.gui.UIAsset;
		public __12:egret.gui.UIAsset;
		public __7:egret.gui.UIAsset;
		public __8:egret.gui.UIAsset;
		public __9:egret.gui.UIAsset;
		private __s:Function = egret.gui.setProperties;

		public constructor(){
			super();
			
			this.elementsContent = [this.__7_i(),this.__8_i(),this.__9_i(),this.__10_i(),this.__11_i(),this.__12_i()];
			this.states = [
				new egret.gui.State ("up",
					[
						new egret.gui.SetProperty("__7","visible",true),
						new egret.gui.SetProperty("__8","visible",true),
						new egret.gui.SetProperty("__9","visible",true)
					])
				,
				new egret.gui.State ("down",
					[
						new egret.gui.SetProperty("__7","visible",true),
						new egret.gui.SetProperty("__8","visible",true),
						new egret.gui.SetProperty("__9","visible",true)
					])
				,
				new egret.gui.State ("disabled",
					[
						new egret.gui.SetProperty("__7","visible",true),
						new egret.gui.SetProperty("__8","visible",true),
						new egret.gui.SetProperty("__9","visible",true)
					])
				,
				new egret.gui.State ("upAndSelected",
					[
						new egret.gui.SetProperty("__10","visible",true),
						new egret.gui.SetProperty("__11","visible",true),
						new egret.gui.SetProperty("__12","visible",true)
					])
				,
				new egret.gui.State ("downAndSelected",
					[
						new egret.gui.SetProperty("__10","visible",true),
						new egret.gui.SetProperty("__11","visible",true),
						new egret.gui.SetProperty("__12","visible",true)
					])
				,
				new egret.gui.State ("disabledAndSelected",
					[
						new egret.gui.SetProperty("__10","visible",true),
						new egret.gui.SetProperty("__11","visible",true),
						new egret.gui.SetProperty("__12","visible",true)
					])
			];
		}

		private __10_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__10 = t;
			this.__s(t,["source","visible"],["onoffbutton_on_track_png",false])
			return t;
		}
		private __11_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__11 = t;
			this.__s(t,["right","source","verticalCenter","visible"],[1,"onoffbutton_on_thumb_png",0,false])
			return t;
		}
		private __12_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__12 = t;
			this.__s(t,["left","source","verticalCenter","visible"],[15,"onoffbutton_on_label_png",0,false])
			return t;
		}
		private __7_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__7 = t;
			this.__s(t,["source","visible"],["onoffbutton_off_track_png",false])
			return t;
		}
		private __8_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__8 = t;
			this.__s(t,["left","source","verticalCenter","visible"],[1,"onoffbutton_off_thumb_png",0,false])
			return t;
		}
		private __9_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__9 = t;
			this.__s(t,["right","source","verticalCenter","visible"],[15,"onoffbutton_off_label_png",0,false])
			return t;
		}
	}
}