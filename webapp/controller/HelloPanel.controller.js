sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("com.sap.learning.ui5.gs.hello_world.controller.HelloPanel", {
      onSayHello : function () {
      	MessageToast.show("Hello");
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
      },
      
       onOpenDialog : function () {
       	//delegate the dialog creation to project component
       	this.getOwnerComponent().openHelloDialog();
       	
       	// manual creation from scratch, to be depreciated
       	/**
         var oView = this.getView();
         var oDialog = oView.byId("helloDialog");
         // create dialog lazily
         if (!oDialog) {
            // create dialog via fragment factory
            // The third parameter of the sap.ui.xmlfragment function is optional and allows passing in a reference to a (controller) object. 
            // For our dialog we reference the HelloPanel controller. However, the third parameter does not necessarily have to be a controller but can be any object. Just don't forget the this parameter.
            oDialog = sap.ui.xmlfragment(oView.getId(), "com.sap.learning.ui5.gs.hello_world.view.HelloDialog", this);
            oView.addDependent(oDialog);
         }
         oDialog.open();
         **/
      }
      
  //    onCloseDialog : function () {
		// 	this.getView().byId("helloDialog").close();
		// }
   });
});