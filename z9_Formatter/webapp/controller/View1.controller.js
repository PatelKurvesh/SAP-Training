sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"Practicez9_Formatter/utils/formatter"
], function(Controller,formatter) {
	"use strict";

	return Controller.extend("Practicez9_Formatter.controller.View1", {
		
		formatter:formatter,
		
		
			onInit:function(){
			
			var carData = new sap.ui.model.json.JSONModel();
			
			carData.loadData("model/carData.json");
			
			this.getView().setModel(carData);
		},
		
		onSubmit:function(){
			var formValue = this.getView().getModel().getProperty("/cData");
			
			var tap=this.getView().getModel().getProperty("/carData");
			
			tap.push(formValue);
			
			this.getView().getModel().getProperty("/carData");
		},
		
		onClear:function(){
			var company = this.byId("com");
			var name = this.byId("cName");
			var color = this.byId("cColor");
			var price = this.byId("cPrice");
			
			company.setValue("");
			name.setValue("");
			color.setValue("");
			price.setValue("");
		},
		onRowSelect:function(oEvent){
			// debugger;
			//Step 1: Get the context of the selected element
			var data = oEvent.getParameter("rowContext").sPath;
			
			//Step 2: bind the context to target element
			var oform = this.getView().byId("car");
			
			//Step 3: bindElement is available for every controller in ui5
			oform.bindElement(data);
		}

	});
});