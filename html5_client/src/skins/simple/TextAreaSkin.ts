module skins.simple{
	export class TextAreaSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["textDisplay"];
		private __s:Function = egret.gui.setProperties;
		public textDisplay:egret.gui.EditableText;

		public constructor(){
			super();
			
			this.__s(this,["minHeight","minWidth"],[30,100])
			this.elementsContent = [this.__3_i(),this.textDisplay_i()];
			this.states = [
				new egret.gui.State ("normal",
					[
					])
				,
				new egret.gui.State ("disabled",
					[
						new egret.gui.SetProperty("textDisplay","textColor",0xAAAAAA)
					])
			];
		}

		public get skinParts():Array<string>{
			return TextAreaSkin._skinParts;
		}
		private __3_i():egret.gui.UIAsset{
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