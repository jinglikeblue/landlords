module skins.simple{
	export class AlertSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["titleDisplay","closeButton","moveArea","contentDisplay","firstButton","secondButton"];
		private __s:Function = egret.gui.setProperties;
		public closeButton:egret.gui.Button;
		public contentDisplay:egret.gui.Label;
		public firstButton:egret.gui.Button;
		public moveArea:egret.gui.Group;
		public secondButton:egret.gui.Button;
		public titleDisplay:egret.gui.Label;

		public constructor(){
			super();
			
			this.__s(this,["maxWidth","minHeight","minWidth"],[710,230,370])
			this.elementsContent = [this.__1_i(),this.moveArea_i(),this.contentDisplay_i(),this.__4_i()];
		}

		public get skinParts():Array<string>{
			return AlertSkin._skinParts;
		}
		private __2_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["percentHeight","source","percentWidth"],[100,"panel_headeback_png",100])
			return t;
		}
		private __3_i():egret.gui.HorizontalLayout{
			var t:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
			this.__s(t,["gap","horizontalAlign","paddingLeft","paddingRight"],[10,"center",20,20])
			return t;
		}
		private __4_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.__s(t,["bottom","horizontalCenter"],[25,0])
			t.layout = this.__3_i();
			t.elementsContent = [this.firstButton_i(),this.secondButton_i()];
			return t;
		}
		private closeButton_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.closeButton = t;
			this.__s(t,["right","skinName","verticalCenter"],[10,skins.simple.CloseButtonSkin,0])
			return t;
		}
		private contentDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.contentDisplay = t;
			this.__s(t,["bottom","fontFamily","left","padding","right","size","textAlign","textColor","top","verticalAlign"],[45,"Tahoma",1,10,1,22,"center",0x727070,36,"middle"])
			return t;
		}
		private firstButton_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.firstButton = t;
			this.__s(t,["height","label","width"],[50,"OK",115])
			return t;
		}
		private moveArea_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.moveArea = t;
			this.__s(t,["height","left","right"],[55,3,9])
			t.elementsContent = [this.__2_i(),this.titleDisplay_i(),this.closeButton_i()];
			return t;
		}
		private secondButton_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.secondButton = t;
			this.__s(t,["height","label","width"],[50,"cancel",115])
			return t;
		}
		private __1_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["percentHeight","source","percentWidth"],[100,"panel_back_png",100])
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