module skins.simple{
	export class TabBarSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["dataGroup"];
		private __s:Function = egret.gui.setProperties;
		public dataGroup:egret.gui.DataGroup;

		public constructor(){
			super();
			
			this.__s(this,["minHeight","minWidth"],[20,60])
			this.elementsContent = [this.dataGroup_i()];
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
			return TabBarSkin._skinParts;
		}
		private dataGroup_i():egret.gui.DataGroup{
			var t:egret.gui.DataGroup = new egret.gui.DataGroup();
			this.dataGroup = t;
			this.__s(t,["percentHeight","itemRenderer","itemRendererSkinName","percentWidth"],[100,new egret.gui.ClassFactory(egret.gui.TabBarButton),skins.simple.TabBarButtonSkin,100])
			t.layout = this.__3_i();
			return t;
		}
		private __3_i():egret.gui.HorizontalLayout{
			var t:egret.gui.HorizontalLayout = new egret.gui.HorizontalLayout();
			this.__s(t,["gap","horizontalAlign","verticalAlign"],[-1,"justify","contentJustify"])
			return t;
		}
	}
}