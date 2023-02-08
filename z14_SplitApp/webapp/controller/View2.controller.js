sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez14_SplitApp.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Practicez14_SplitApp.view.View2
		 */
			onInit : function(){
				
			var splitApp = new sap.ui.model.json.JSONModel();
			
			splitApp.loadData("model/splitApp.json");
			
			this.getView().setModel(splitApp);
			},
			
			List2 : function(){
			this.hello = new sap.ui.xmlfragment("Practicez14_SplitApp.fragments.buy",this);
			this.getView().addDependent(this.hello);
			this.hello.open();
			},
			onDialogClose : function(){
				this.hello.close();
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Practicez14_SplitApp.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Practicez14_SplitApp.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Practicez14_SplitApp.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});