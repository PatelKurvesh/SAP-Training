sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez12_Fragment.controller.View1", {
		
		onInit : function(){
			var oModel = new sap.ui.model.json.JSONModel();
			
			oModel.loadData("model/fruits.json");
			
			this.getView().setModel(oModel);
		},
		
		onOpenFrag : function(){
			this.hello = new sap.ui.xmlfragment("Practicez12_Fragment.fragments.fruits",this);
			this.getView().addDependent(this.hello);
			this.hello.open();
		},
		
		onDialogClose : function(){
			this.hello.close();
		}

	});
});