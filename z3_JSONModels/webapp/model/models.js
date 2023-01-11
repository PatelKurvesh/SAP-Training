sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createMyModel : function(sPath){
			//Step 1: Declare a brand new Model object
			var jsonModel = new sap.ui.model.json.JSONModel();
			//Step 2: set the data to the Model
			jsonModel.loadData(sPath);
			jsonModel.setDefaultBindingMode("OneWay");
			return jsonModel;
		}

	};
});