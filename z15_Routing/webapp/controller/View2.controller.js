sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("Practicez15_Routing.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Practicez15_Routing.view.View2
		 */
			onInit: function() {
			/*	var oInfo = new sap.ui.model.json.JSONModel();
				oInfo.loadData("model/student.json");
				this.getView().setModel(oInfo);*/
				 
				this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				this.oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatched,this);
				this.oRouter.getRoute("NewRecord").attachPatternMatched(this.addNewRec,this);
		
				// this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				// this.oRouter.getRoute("View2");
			},
			onRouteMatched: function(oEvent){
				this.getView().bindElement("/Student/" + oEvent.getParameter("arguments").EnNo );
			},
			onSavePress : function(){
			/*	this.addNewRec === true{
					this.addNewRec = false
				}else{
					
				}*/
			/*	this.formValue = this.getView().getModel().getProperty("/Student");
				var oModel = this.getView().getModel();
				this.getView().getModel().setModel(oModel);
				*/
				// this.oRouter.navTo("View1");
				// Display success message
				MessageToast.show("Data saved successfully");
				
			},
			onBack :function(){
			
			this.oRouter.navTo("View1"); 
		},
		onClearPress : function(){
			var oNo = this.getView().byId("in1");
			var oName = this.getView().byId("in2");
			var oClg = this.getView().byId("in3");
			var oCourse = this.getView().byId("in4");
			var oSem = this.getView().byId("in5");
			// var oSr = this.getView().byId("in6");
			
			oNo.setValue("");
			oName.setValue("");
			oClg.setValue("");
			oCourse.setValue("");
			oSem.setValue("");
			// oSr.setValue("");
			
		},
		addNewRec : function(){
		
			this.getView().byId("in1").unbindValue();
			this.getView().byId("in2").unbindValue();
			this.getView().byId("in3").unbindValue();
			this.getView().byId("in4").unbindValue();
			this.getView().byId("in5").unbindValue();
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Practicez15_Routing.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Practicez15_Routing.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Practicez15_Routing.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});