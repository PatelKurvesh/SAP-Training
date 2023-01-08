sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Practicez1_Login.controller.View1", {
		
		onBtnClick: function(abc){
			var uName = this.getView().byId("name").getValue(); 
			var pwd = this.getView().byId("pwd").getValue();
			
			if(uName=="admin" && pwd=="admin"){
				document.write("login successfully");
			}
			else{
				alert("Re-enter your detail");
			}
			var button = new sap.m.Button();
		}

	});
});