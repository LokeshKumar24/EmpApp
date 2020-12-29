sap.ui.define([
        // "sap/ui/core/mvc/Controller"
         "EA/EmployeeApp1/controller/BaseController"
        //  "EA/EmployeeApp1/controller/Base.controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (BaseController) {
		"use strict";

		return BaseController.extend("EA.EmployeeApp1.controller.Project", {
			onInit: function () {
                this.getProject();
			}
		});
	});
