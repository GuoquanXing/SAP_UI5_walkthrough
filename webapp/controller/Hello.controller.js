sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("com.sap.learning.ui5.gs.hello_world.controller.Hello", {
		onInit : function () {
      },
      
      onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});
});