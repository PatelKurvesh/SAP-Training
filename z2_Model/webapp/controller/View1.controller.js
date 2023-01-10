sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez2_Model.controller.View1", {
		
		onInit : function() {
			
			//Step 1: Declare brand new model object
			var jsonModel = new sap.ui.model.json.JSONModel();
			
			//Step 2: Set the data to the model
			// jsonModel.setData({
			// 	"empData":{
			// 		"empName":"Kurveh",
			// 		"empSal":90000
			// 	}
			// });
			
			jsonModel.setData({
				"studentData":{
					"CE":[
						{"Name":"Kurvesh","No":2037},
						{"Nmae":"Sharad","No":2041}
						],
						"IT":[
							{"Name":"Hirwa","No":2011}
							]
				}
				
									
			 });
			
			//Step 3: Set the model to your app/view/control level
			
				//app level:
				// sap/ui.getCore().setModel(jsonModel);
				//view level
				this.getView().setModel(jsonModel);
				//controll level
				// this.getView().byId("").setModel();
		}
		
		

	});
});