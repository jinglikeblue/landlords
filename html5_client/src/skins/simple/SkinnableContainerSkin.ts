module skins.simple{
	export class SkinnableContainerSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["contentGroup"];
		private __s:Function = egret.gui.setProperties;
		public contentGroup:egret.gui.Group;

		public constructor(){
			super();
			
			this.__s(this,["maxWidth","minHeight","minWidth"],[710,230,470])
			this.elementsContent = [this.contentGroup_i()];
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
			return SkinnableContainerSkin._skinParts;
		}
		private contentGroup_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.contentGroup = t;
			this.__s(t,["percentHeight","percentWidth"],[100,100])
			return t;
		}
	}
}