sap.ui.define([
         "EA/EmployeeApp1/controller/BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/base/Log"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (BaseController,JSONModel,Log) {
		"use strict";

		return BaseController.extend("EA.EmployeeApp1.controller.SplitApp", {
			onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.attachRoutePatternMatched(this.onClick, this);

            },
           
            onClick: function (oEvent) {
// debugger
        var path = oEvent.getParameter("arguments").ID;
        this.Id=path
             console.log(path)
		},
            request:null,
            onRequest:function(){
                debugger
                if(!this.request){
                    this.request = new sap.ui.xmlfragment("EA.EmployeeApp1.view.Request",this);
                    this.getView().addDependent(this.request);
                }
                this.request.open();

            },
            onClose:function(){
                this.request.close();
            },

            	onListItemPress: function (oEvent) {
                //  debugger
            var sToPageId = oEvent.getParameter("listItem").mProperties.title;


			this.byId("SplitApp").toDetail(this.createId(sToPageId));
        },
         onLogout:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouter.navTo("RouteLogin");
           
            }

            
		});
	});
