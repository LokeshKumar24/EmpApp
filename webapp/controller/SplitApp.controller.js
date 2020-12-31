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

            oRouter.attachRoutePatternMatched(this.getId, this);
            
        },
        // to get the profile id
        getId: function (oEvent) {
            // debugger
            var path = oEvent.getParameter("arguments").ID;
            this.Id=path
            this.addProfileData();
             console.log(path)
        },
        // leave and asset request fragment
            request:null,
            onRequest:function(){
                debugger
                if(!this.request){
                    this.request = new sap.ui.xmlfragment("EA.EmployeeApp1.view.Request",this);
                    this.getView().addDependent(this.request);
                }
                this.request.open();

            },
            // close the leave request fragment
            onClose:function(){
                this.request.close();
            },

            	onListItemPress: function (oEvent) {
                //  debugger
            var sToPageId = oEvent.getParameter("listItem").mProperties.title;

			this.byId("SplitApp").toDetail(this.createId(sToPageId));
        },

        //logout
         onLogout:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouter.navTo("RouteLogin");
           
            },


            //profile changes
            
        addProfileData:function(){
         //   debugger
         if(this.getOwnerComponent().getModel("profileModel")){
            var id=this.Id;
            var path=null
                  var detail = this.getOwnerComponent().getModel("profileModel").getProperty("/profile");
                 // console.log(detail)
                  detail.map((element,index)=>{
                      if(element.Eid===id){
                         // debugger
                        path = index;
                    }
                    detail[index].Picture = element.Picture.toLowerCase()
                  })
                  this.getOwnerComponent().setModel(new JSONModel({profile:detail}),"profileModel")
                    this.getView().byId("ObjectPageLayout").bindElement("profileModel>/profile/"+path);
                }
            }

            
		});
	});
