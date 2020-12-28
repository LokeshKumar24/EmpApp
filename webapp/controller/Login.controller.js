sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("EA.EmployeeApp1.controller.Login", {
			onInit: function () {
               this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
               this.getView().setModel(new JSONModel(),"ch");
                this.getView().setModel(new JSONModel(),"login");

            },
            onLogin:function(){
                debugger;
                var id = this.getView().getModel("login").getProperty("/id");
                var Password = this.getView().getModel("login").getProperty("/password");

                this.oRouter.navTo("SplitApp");
            },
            changePass:null,
            changePassword:function(){
               // debugger;
                if(!this.changePass){
                    this.changePass = new sap.ui.xmlfragment("EA.EmployeeApp1.view.changePassword",this);
                    this.getView().addDependent(this.changePass);
                }
                this.changePass.open();

            },
            onClose:function(){
                this.changePass.close();
            },
            newPassword:function(){
                debugger
             var id = this.getView().getModel("ch").getProperty("/id");
			var newPass = this.getView().getModel("ch").getProperty("/newPass");
            var confPass = this.getView().getModel("ch").getProperty("/confPass");
            sap.m.MessageToast.show("Password updated Successfully");
            }

		});
	});
