sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("EA.EmployeeApp1.controller.Login", {
			onInit: function () {
               this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
            },
            onLogin:function(){
                debugger;
                var id = this.getView().byId("idUsername").getValue();
                var Password = this.getView().byId("idPassword").getValue();

                this.oRouter.navTo("RouteHome");
            }

		});
	});
