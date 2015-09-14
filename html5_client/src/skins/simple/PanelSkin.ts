module skins.simple{
	export class PanelSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["titleDisplay","moveArea","contentGroup"];
		private __s:Function = egret.gui.setProperties;
		public contentGroup:egret.gui.Group;
		public moveArea:egret.gui.Group;
		public titleDisplay:egret.gui.Label;

		public constructor(){
			super();
			
			this.__s(this,["maxWidth","minHeight","minWidth"],[710,230,470])
			this.elementsContent = [this.__3_i(),this.moveArea_i(),this.contentGroup_i()];
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
			return PanelSkin._skinParts;
		}
		private __4_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["bottom","left","right","source","top"],[-4,-2,-2,"panel_headeback_png",-2])
			return t;
		}
		private contentGroup_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.contentGroup = t;
			this.__s(t,["bottom","clipAndEnableScrolling","top","percentWidth"],[0,true,50,100])
			return t;
		}
		private moveArea_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.moveArea = t;
			this.__s(t,["height","left","right"],[50,0,0])
			t.elementsContent = [this.__4_i(),this.titleDisplay_i()];
			return t;
		}
		private __3_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["bottom","left","right","source","top"],[-10,-4,-10,"panel_back_png",-4])
			return t;
		}
		private titleDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.titleDisplay = t;
			this.__s(t,["fontFamily","left","maxDisplayedLines","minHeight","right","size","textAlign","textColor","verticalAlign","verticalCenter"],["Tahoma",5,1,28,5,26,"center",0x727070,"middle",0])
			return t;
		}
	}
}