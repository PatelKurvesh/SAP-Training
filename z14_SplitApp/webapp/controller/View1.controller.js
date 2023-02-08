sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez14_SplitApp.controller.View1", {
		
		onInit : function(){
			
		var splitApp = new sap.ui.model.json.JSONModel();
		
		splitApp.loadData("model/splitApp.json");
		
		this.getView().setModel(splitApp);
		},
		
		onNext : function(){
			var oView2 = sap.ui.getCore().byId("__xmlview0--idApp").getPages()[1];
			sap.ui.getCore().byId("__xmlview0--idApp").to(oView2);
		},
		
		onItemPress : function(oEvent){
			
			// var oData = oEvent.getParameter("listItem");
			// var sPath = oData.getBindingContext().sPath;
			// var oView2 = sap.ui.getCore().byId("__xmlview0--idApp").getPages()[1];
			// oView2.bindElement(sPath);
			// sap.ui.getCore().byId("__xmlview0--idApp").to(oView2);
			
			var item = oEvent.getParameter("listItem");
			var sPath = item.getBindingContext().sPath;
			var oView2 = this.getView().getParent().getParent().getDetailPages()[0];
			oView2.bindElement(sPath);
			sap.ui.getCore().byId("__xmlview0--idApp").to(oView2);
		}

	});
});