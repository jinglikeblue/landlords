module skins.scene{
	export class ShowcaseSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["list"];
		private __s:Function = egret.gui.setProperties;
		public list:egret.gui.List;

		public constructor(){
			super();
			
			this.__s(this,["height","width"],[800,480])
			this.elementsContent = [this.__3_i(),this.list_i(),this.__4_i(),this.__5_i(),this.__6_i(),this.__7_i(),this.__8_i(),this.__9_i(),this.__10_i(),this.__11_i(),this.__12_i(),this.__13_i(),this.__14_i(),this.__15_i(),this.__16_i(),this.__17_i(),this.__18_i(),this.__19_i(),this.__20_i(),this.__21_i(),this.__22_i(),this.__23_i(),this.__24_i(),this.__25_i(),this.__26_i(),this.__27_i(),this.__28_i(),this.__29_i(),this.__30_i(),this.__31_i(),this.__32_i(),this.__33_i(),this.__34_i(),this.__35_i(),this.__36_i(),this.__37_i(),this.__38_i(),this.__39_i(),this.__40_i(),this.__41_i(),this.__42_i(),this.__43_i(),this.__44_i(),this.__45_i(),this.__46_i(),this.__47_i(),this.__48_i(),this.__49_i(),this.__50_i(),this.__51_i(),this.__52_i(),this.__53_i(),this.__54_i(),this.__55_i(),this.__56_i(),this.__57_i(),this.__58_i(),this.__59_i(),this.__60_i(),this.__61_i(),this.__62_i(),this.__63_i(),this.__64_i(),this.__65_i(),this.__66_i(),this.__67_i(),this.__68_i()];
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
			return ShowcaseSkin._skinParts;
		}
		private __11_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["20",323,573])
			return t;
		}
		private __12_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["20",353,573])
			return t;
		}
		private __13_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["20",382,573])
			return t;
		}
		private __14_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["0",116,683])
			return t;
		}
		private __15_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["21",146,683])
			return t;
		}
		private __16_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["23",176,683])
			return t;
		}
		private __17_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["24",205,683])
			return t;
		}
		private __18_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["25",235,683])
			return t;
		}
		private __19_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["20",264,683])
			return t;
		}
		private __20_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["20",294,683])
			return t;
		}
		private __21_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["20",323,683])
			return t;
		}
		private __22_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["20",353,683])
			return t;
		}
		private __23_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["20",382,683])
			return t;
		}
		private __24_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["lord_boy_png",15,592])
			return t;
		}
		private __25_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["farmer_girl_png",388,72])
			return t;
		}
		private __26_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["farmer_boy_png",16,72])
			return t;
		}
		private __27_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["card_back_png",111,95])
			return t;
		}
		private __28_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["card_back_png",332,92])
			return t;
		}
		private __29_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_0",335,181])
			return t;
		}
		private __30_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_1",357,181])
			return t;
		}
		private __31_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_10",379,181])
			return t;
		}
		private __32_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_11",400,181])
			return t;
		}
		private __33_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_12",422,181])
			return t;
		}
		private __34_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_0",334,217])
			return t;
		}
		private __35_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_1",356,217])
			return t;
		}
		private __36_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_10",378,217])
			return t;
		}
		private __37_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_11",399,217])
			return t;
		}
		private __38_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_12",421,217])
			return t;
		}
		private __39_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_13",334,252])
			return t;
		}
		private __3_i():egret.gui.Rect{
			var t:egret.gui.Rect = new egret.gui.Rect();
			this.__s(t,["fillColor","percentHeight","percentWidth","x","y"],[0x00D0FF,100,100,0,-1])
			return t;
		}
		private __40_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_14",356,252])
			return t;
		}
		private __41_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_15",377,252])
			return t;
		}
		private __42_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_16",399,252])
			return t;
		}
		private __43_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_17",421,252])
			return t;
		}
		private __44_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_0",25,175])
			return t;
		}
		private __45_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_1",47,175])
			return t;
		}
		private __46_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_10",69,175])
			return t;
		}
		private __47_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_11",90,175])
			return t;
		}
		private __48_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_12",112,175])
			return t;
		}
		private __49_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_0",24,211])
			return t;
		}
		private __4_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["0",116,573])
			return t;
		}
		private __50_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_1",46,211])
			return t;
		}
		private __51_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_10",68,211])
			return t;
		}
		private __52_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_11",89,211])
			return t;
		}
		private __53_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_12",111,211])
			return t;
		}
		private __54_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_13",334,277])
			return t;
		}
		private __55_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_14",356,277])
			return t;
		}
		private __56_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_15",377,277])
			return t;
		}
		private __57_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_16",399,277])
			return t;
		}
		private __58_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_17",421,277])
			return t;
		}
		private __59_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_13",24,246])
			return t;
		}
		private __5_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["21",146,573])
			return t;
		}
		private __60_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_14",46,246])
			return t;
		}
		private __61_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_15",67,246])
			return t;
		}
		private __62_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_16",89,246])
			return t;
		}
		private __63_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_17",111,246])
			return t;
		}
		private __64_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_13",23,282])
			return t;
		}
		private __65_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_14",45,282])
			return t;
		}
		private __66_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_15",66,282])
			return t;
		}
		private __67_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_16",88,282])
			return t;
		}
		private __68_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["small_17",110,282])
			return t;
		}
		private __6_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["23",176,573])
			return t;
		}
		private __7_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["24",205,573])
			return t;
		}
		private __8_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["25",235,573])
			return t;
		}
		private __9_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["20",264,573])
			return t;
		}
		private list_i():egret.gui.List{
			var t:egret.gui.List = new egret.gui.List();
			this.list = t;
			this.__s(t,["horizontalCenter","itemRendererSkinName","skinName","y"],[0,skins.simple.ItemRendererSkin,skins.simple.ListSkin,150])
			return t;
		}
		private __10_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["source","x","y"],["20",294,573])
			return t;
		}
	}
}