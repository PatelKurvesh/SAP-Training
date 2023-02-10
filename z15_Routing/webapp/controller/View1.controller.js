sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez15_Routing.controller.View1", {
		
		onInit : function(){
		/*	var oInfo = new sap.ui.model.json.JSONModel();
			oInfo.loadData("model/student.json");
			this.getView().setModel(oInfo);
			sap.ui.getCore().setModel(oInfo);*/
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("View1");
		
		},
		
		onNext : function(oEvent){
			
			
			// var oView2 = sap.ui.getCore().byId("__component0---View2");
			// this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// this.oRouter.getRoute("View1");
			this.oRouter.navTo("NewRecord");
		},
	
		
		onRowSelect : function(oEvent){
			var oData = oEvent.getParameter("rowContext").getObject();
			this.oRouter.navTo("View2",{
				EnNo : oData.enNo          
			});
		}

	});
});