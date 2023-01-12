sap.ui.define([
	"sap/ui/core/mvc/Controller"
	
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez4_Aggregation.controller.View1", {
		
	onInit : function() {
		var student = new sap.ui.model.json.JSONModel();
		
		student.loadData("model/studentData.json");
	
		this.getView().setModel(student);
	}

	});
});