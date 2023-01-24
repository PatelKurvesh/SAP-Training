sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez11_SearchField.controller.View1", {
		
		onInit:function(){
			var oModel = new sap.ui.model.json.JSONModel();
			
			oModel.loadData("model/fruits.json");
			
			this.getView().setModel(oModel);
		},
		onSearchItem:function(oEvent){
			
			//Step 1:
			var queryString = oEvent.getParameter("query");
			
			//Step 2:
			var filter = new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,queryString);
			var filter1 = new sap.ui.model.Filter("color",sap.ui.model.FilterOperator.Contains,queryString);
			var filter2 = new sap.ui.model.Filter("taste",sap.ui.model.FilterOperator.Contains,queryString);
			var filter3 = new sap.ui.model.Filter("price",sap.ui.model.FilterOperator.Contains,queryString);
			
			var masterFilter = new sap.ui.model.Filter({
				filters:[filter,filter1,filter2,filter3],
				and : false
			});
			
			//Step 3:
			var aFilter = [masterFilter];
			var fruitsList = this.getView().byId("fruits");
			fruitsList.getBinding("items").filter(aFilter);
		}

	});
});