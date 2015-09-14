module skins.simple{
	export class DropDownListSkin extends egret.gui.Skin{
		private static _skinParts:Array<string> = ["openButton","labelDisplay","dataGroup","scroller","dropDown","popUp"];
		private __s:Function = egret.gui.setProperties;
		public dataGroup:egret.gui.DataGroup;
		public dropDown:egret.gui.Group;
		public labelDisplay:egret.gui.Label;
		public openButton:egret.gui.Button;
		public popUp:egret.gui.PopUpAnchor;
		public scroller:egret.gui.Scroller;

		public constructor(){
			super();
			
			this.elementsContent = [this.openButton_i(),this.labelDisplay_i(),this.popUp_i()];
			this.states = [
				new egret.gui.State ("normal",
					[
						new egret.gui.SetProperty("labelDisplay","textColor",0x111111)
					])
				,
				new egret.gui.State ("open",
					[
						new egret.gui.SetProperty("labelDisplay","textColor",0x222222),
						new egret.gui.SetProperty("popUp","displayPopUp",true)
					])
				,
				new egret.gui.State ("disabled",
					[
					])
			];
		}

		public get skinParts():Array<string>{
			return DropDownListSkin._skinParts;
		}
		private dataGroup_i():egret.gui.DataGroup{
			var t:egret.gui.DataGroup = new egret.gui.DataGroup();
			this.dataGroup = t;
			this.__s(t,["percentHeight","itemRendererSkinName","percentWidth"],[100,skins.simple.DropDownListItemRendererSkin,100])
			t.layout = this.__4_i();
			return t;
		}
		private dropDown_i():egret.gui.Group{
			var t:egret.gui.Group = new egret.gui.Group();
			this.dropDown = t;
			this.__s(t,["height","visible"],[400,true])
			t.elementsContent = [this.scroller_i()];
			return t;
		}
		private labelDisplay_i():egret.gui.Label{
			var t:egret.gui.Label = new egret.gui.Label();
			this.labelDisplay = t;
			this.__s(t,["fontFamily","paddingLeft","touchChildren","touchEnabled","verticalAlign","verticalCenter"],["Tahoma",10,false,false,"middle",0])
			return t;
		}
		private openButton_i():egret.gui.Button{
			var t:egret.gui.Button = new egret.gui.Button();
			this.openButton = t;
			this.__s(t,["percentHeight","skinName","percentWidth"],[100,skins.simple.DropDownListOpenButtonSkin,100])
			return t;
		}
		private popUp_i():egret.gui.PopUpAnchor{
			var t:egret.gui.PopUpAnchor = new egret.gui.PopUpAnchor();
			this.popUp = t;
			this.__s(t,["displayPopUp","percentHeight","popUpPosition","percentWidth"],[false,100,"screenCenter",100])
			t.popUp = this.dropDown_i();
			return t;
		}
		private scroller_i():egret.gui.Scroller{
			var t:egret.gui.Scroller = new egret.gui.Scroller();
			this.scroller = t;
			this.__s(t,["percentHeight","horizontalScrollPolicy","percentWidth"],[100,"off",100])
			t.viewport = this.dataGroup_i();
			return t;
		}
		private __4_i():egret.gui.VerticalLayout{
			var t:egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
			this.__s(t,["gap","horizontalAlign"],[0,"justify"])
			return t;
		}
	}
}