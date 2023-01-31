sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez13_Navigation.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Practicez13_Navigation.view.App
		 */
			onInit: function() {
				var oApp = this.getView().byId("idApp");
				
				var oView1 = new sap.ui.view({
					id:"idView1",
					viewName:"Practicez13_Navigation.view.View1",
					type:"XML"
				});
				
				var oView2 = new sap.ui.view({
					id:"idView2",
					viewName:"Practicez13_Navigation.view.View2",
					type:"XML"
				});
				
				oApp.addPage(oView1);
				oApp.addPage(oView2);
				oApp.setInitialPage(oView1);
				
		
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Practicez13_Navigation.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Practicez13_Navigation.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Practicez13_Navigation.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});