sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    return Controller.extend("com.training.exer1millares.controller.MainView", {
        onInit() {
        },     

        onAddItem: function () {
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },
        
        fnDisplayMsg: function (sMsg) {
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");

            var oCCLabel = this.getView().byId("idLblCC");
            var ooCCInput = this.getView().byId("idInputCC");           
            MessageToast.show(sSelectedKey); 
        
            if (sSelectedKey === "GCASH") {
                // show the mobile field
                ooCCInput.setVisible(false);
                ooCCInput.setVisible(false);
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                
            }
            else if (sSelectedKey === "CC") {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);               
                oCCLabel.setVisible(true);
                ooCCInput.setVisible(true);
            }
            else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                ooCCInput.setVisible(false);
                ooCCInput.setVisible(false);
            }
        },
        
        onPressCheckout: function (){
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();

            // Check if first name is blank
            if (oInputFNameValue === "" && oInputLNameValue === ""){
                sap.m.MessageToast.show("Required Field is blank"); 
            }
        }
    });
});