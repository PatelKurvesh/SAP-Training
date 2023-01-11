sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"Practicez3_JSONModels/model/models"
], function(Controller,dataModel) {
	"use strict";

	return Controller.extend("Practicez3_JSONModels.controller.View1", {
		
		onInit : function(){
			var sName = dataModel.createMyModel("model/sName.json");
			var sAge = dataModel.createMyModel("model/sAge.json");
			var sGender = dataModel.createMyModel("model/sGender.json");
			var sClass = dataModel.createMyModel("model/sClass.json");
			
			
			//Step 3: set the model to your app / view / controll level
		 	this.getView().setModel(sName);
			this.getView().setModel(sAge,"studAge");
			this.getView().setModel(sGender,"studGender");
			this.getView().setModel(sClass,"studClass");
		}

	});
});