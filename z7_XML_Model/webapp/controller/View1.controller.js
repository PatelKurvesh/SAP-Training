sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez7_XML_Model.controller.View1", {
		onInit:function(){
			
			var carData = new sap.ui.model.xml.XMLModel();
			
			carData.loadData("model/carData.xml");
			
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