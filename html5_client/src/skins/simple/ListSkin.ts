module skins.simple{
	export class ListSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["dataGroup"];
		private __s:Function = egret.gui.setProperties;
		public dataGroup:egret.gui.DataGroup;

		public constructor(){
			super();
			
			this.elementsContent = [this.__4_i()];
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
			return ListSkin._skinParts;
		}
		private __4_i():egret.gui.Scroller{
			var t:egret.gui.Scroller = new egret.gui.Scroller();
			this.__s(t,["percentHeight","horizontalScrollPolicy","percentWidth"],[100,"off",100])
			t.viewport = this.dataGroup_i();
			return t;
		}
		private dataGroup_i():egret.gui.DataGroup{
			var t:egret.gui.DataGroup = new egret.gui.DataGroup();
			this.dataGroup = t;
			t.layout = this.__3_i();
			return t;
		}
		private __3_i():egret.gui.VerticalLayout{
			var t:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
			this.__s(t,["gap","horizontalAlign"],[0,"contentJustify"])
			return t;
		}
	}
}