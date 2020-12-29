sap.ui.define([
        // "sap/ui/core/mvc/Controller",
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

            //     var oViews=["Home","Profile","Project","Others"];
            //     var views=[];
            //     oViews.forEach(element=>{
            //     views.push({name:element})
            //     });
            //   var data={
            //              views: views
            //           }
            //     this.getView().setModel(new JSONModel(data),"master")
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
            	onOrientationChange: function (oEvent) {
			var bLandscapeOrientation = oEvent.getParameter("landscape"),
				sMsg = "Orientation now is: " + (bLandscapeOrientation ? "Landscape" : "Portrait");
			sap.m.MessageToast.show(sMsg, { duration: 5000 });
		},

            	onListItemPress: function (oEvent) {
                  debugger
            var sToPageId = oEvent.getParameter("listItem").mProperties.title;

			this.byId("SplitApp").toDetail(this.createId(sToPageId));
		}

            
		});
	});
