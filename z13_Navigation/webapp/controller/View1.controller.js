sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez13_Navigation.controller.View1", {
		
		onInit : function(){
			 var fruits = new sap.ui.model.json.JSONModel();
			 
			 fruits.loadData("model/fruits.json");
			 
			 this.getView().setModel(fruits);
		},
		onNext : function(){
			var oView2 = sap.ui.getCore().byId("__xmlview0--idApp").getPages()[1];
			sap.ui.getCore().byId("__xmlview0--idApp").to(oView2);
		},
		onItemPress : function(oEvent){
			var item = oEvent.getParameter("listItem");
			var sPath = item.getBindingContext().sPath;
			var oView2 = sap.ui.getCore().byId("__xmlview0--idApp").getPages()[1];
			oView2.bindElement(sPath);
			sap.ui.getCore().byId("__xmlview0--idApp").to(oView2);
		}

	});
});