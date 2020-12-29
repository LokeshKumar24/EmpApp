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

		return BaseController.extend("EA.EmployeeApp1.controller.Others", {
			onInit: function () {

            },
            
             TSheet:null,
             TimeSheetUpload:function(){
               debugger;
                if(!this.TSheet){
                    this.TSheet = new sap.ui.xmlfragment("EA.EmployeeApp1.view.TimeSheet",this);
                    this.getView().addDependent(this.TSheet);
                }
                this.changePass.open();

            },
            onClose:function(){
                this.TSheet.close();
            },
		});
	});
