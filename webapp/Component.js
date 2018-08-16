sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/sap/learning/ui5/gs/hello_world/model/models",
	"sap/ui/model/json/JSONModel",
	"com/sap/learning/ui5/gs/hello_world/controller/HelloDialog"
], function (UIComponent, Device, models, JSONModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("com.sap.learning.ui5.gs.hello_world.Component", {

		metadata: {
			manifest: "json"
			// root view is specified in app descriptor file manifest.json
			// rootView: {
			// 	"viewName": "com.sap.learning.ui5.gs.hello_world.view.Hello",
			// 	"type": "XML",
			// 	"async": true,
			// 	"id": "hello"
			// }
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());

			// i18n resource model is specified in manifest.json file, which is a better approach than specified here
			// set i18n model
			// var i18nModel = new ResourceModel({
			// 	bundleName: "com.sap.learning.ui5.gs.hello_world.i18n.i18n"
			// });
			// this.setModel(i18nModel, "i18n");
		},
		
		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
		}
	});
});