sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez10_ListControll.controller.View1", {
		
		onInit : function(){
			var oModel = new sap.ui.model.json.JSONModel();
			
			oModel.loadData("model/list.json");
			
			this.getView().setModel(oModel);                         
			
			
		}

	});
});