module skins.simple{
	export class TreeItemRendererSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["disclosureButton","iconDisplay","labelDisplay","contentGroup"];
		private __s:Function = egret.gui.setProperties;
		public contentGroup:egret.gui.Group;
		public disclosureButton:egret.gui.ToggleButton;
		public iconDisplay:egret.gui.UIAsset;
		public labelDisplay:egret.gui.Label;

		public constructor(){
			super();
			
			this.minHeight = 22;
			this.elementsContent = [this.contentGroup_i()];
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

		public get skinParts():Array<string>{
			return TreeItemRendererSkin._skinParts;
		}
		private contentGroup_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.contentGroup = t;
			this.__s(t,["bottom","top"],[0,0])
			t.layout = this.__4_i();
			t.elementsContent = [this.disclosureButton_i(),this.iconDisplay_i(),this.labelDisplay_i()];
			return t;
		}
		private disclosureButton_i():egret.gui.ToggleButton{
			var t:egret.gui.ToggleButton = new egret.gui.ToggleButton();
			this.disclosureButton = t;
			this.__s(t,["skinName","verticalCenter"],[skins.simple.TreeDisclosureButtonSkin,0])
			return t;
		}
		private iconDisplay_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.iconDisplay = t;
			this.__s(t,["height","width"],[24,24])
			return t;
		}
		private labelDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.labelDisplay = t;
			this.__s(t,["bottom","fontFamily","left","maxDisplayedLines","right","textAlign","textColor","top","verticalAlign"],[3,"Tahoma",5,1,5,"center",0x707070,3,"middle"])
			return t;
		}
		private __4_i():egret.gui.HorizontalLayout{
			var t:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
			this.__s(t,["gap","verticalAlign"],[1,"middle"])
			return t;
		}
	}
}