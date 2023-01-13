sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez5_Expression_binding.controller.View1", {
		
		onInit:function(){
		
		
		
		var student = new sap.ui.model.json.JSONModel();
		
		student.loadData("model/sData.json");
	
		this.getView().setModel(student);
		},
		
		onSubmit:function(oEvent){
			//Step 1:
			var formValue = this.getView().getModel().getProperty("/sData");
			
			//Step 2:
			var iTab = this.getView().getModel().getProperty("/studentData");
			
			//Step 3:
			iTab.push(formValue);
			
			//Step 4:
			this.getView().getModel().setProperty("/studentData",iTab);
			
			
			
			
		},
	
		onClear:function(){
			var sNo = this.byId("sNo");
			var sName = this.byId("sName");
			var sBranch = this.byId("sBranch");
			var sCGPA = this.byId("sCGPA");
			var sStatus = this.byId("sStatus");
			var sPlaced = this.byId("sPlaced");
			
			sNo.setValue("");
			sName.setValue("");
			sBranch.setValue("");
			sCGPA.setValue("");
			sStatus.setValue("");
			sPlaced.setValue("");
			

		}
		
		

	});
});