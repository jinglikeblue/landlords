module skins.simple{
	export class TextInputSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["textDisplay","promptDisplay"];
		private __s:Function = egret.gui.setProperties;
		public promptDisplay:egret.gui.Label;
		public textDisplay:egret.gui.EditableText;

		public constructor(){
			super();
			
			this.__s(this,["minHeight","minWidth"],[30,100])
			this.elementsContent = [this.__5_i(),this.textDisplay_i()];
			this.promptDisplay_i();
			
			this.states = [
				new egret.gui.State ("normal",
					[
					])
				,
				new egret.gui.State ("disabled",
					[
						new egret.gui.SetProperty("textDisplay","textColor",0xAAAAAA)
					])
				,
				new egret.gui.State ("normalWithPrompt",
					[
						new egret.gui.AddItems("promptDisplay","","last","")
					])
				,
				new egret.gui.State ("disabledWithPrompt",
					[
						new egret.gui.AddItems("promptDisplay","","last","")
					])
			];
		}

		public get skinParts():Array<string>{
			return TextInputSkin._skinParts;
		}
		private promptDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.promptDisplay = t;
			this.__s(t,["left","maxDisplayedLines","size","textColor","touchChildren","touchEnabled","verticalCenter"],[10,1,20,0xa9a9a9,false,false,0])
			return t;
		}
		private __5_i():egret.gui.UIAsset{
			var t:egret.gui.UIAsset = new egret.gui.UIAsset();
			this.__s(t,["percentHeight","source","percentWidth"],[100,"textbox_png",100])
			return t;
		}
		private textDisplay_i():egret.gui.EditableText{
			var t:egret.gui.EditableText = new egret.gui.EditableText();
			this.textDisplay = t;
			this.__s(t,["bottom","percentHeight","left","right","size","textColor","top","percentWidth"],[8,100,10,10,20,0x000000,8,100])
			return t;
		}
	}
}