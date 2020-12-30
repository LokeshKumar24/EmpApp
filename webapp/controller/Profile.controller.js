sap.ui.define([
         "EA/EmployeeApp1/controller/BaseController",
        "sap/ui/model/json/JSONModel"
        
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (BaseController,JSONModel) {
		"use strict";

		return BaseController.extend("EA.EmployeeApp1.controller.Profile", {
			onInit: function () {
                // debugger;

                  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.attachRoutePatternMatched(this.getProfileId, this);


            },
            path:null,
            getProfileId:function(oEvent){

                var id = oEvent.getParameter("arguments").ID;
                this.path=id;
                if(this.getOwnerComponent().getModel("profileModel")){
                    this.addProfileData(id)
                }
            },

        addProfileData:function(id){
            debugger
            var path=null
                  var detail = this.getOwnerComponent().getModel("profileModel").getProperty("/profile");
                  console.log(detail)
                  detail.map((element,index)=>{
                      if(element.Eid===id){
                        path = index;
                      }
                  })
                    this.getView().byId("ObjectPageLayout").bindElement("profileModel>/profile"+path);

            },

            

            detailData:function(data){
                debugger;
                var arr = [];
             arr.push(data);
             var oJSONModel = new JSONModel();
             

             oJSONModel.setData({
					Pdata: arr
                });
                
                // this.getOwnerComponent().setModel(oJSONModel, "profileModel");
                // var detail = this.getView().getModel("profileModel").getProperty("/pdata");

                
               // console.log(detail);
                //  var idE = detail[0].Fullname;
                
            //    this.getView().bindElement("jsonmodel2>/data2/0");
            //    this.getView().getModel("jsonmodel2").refresh('true');
            //    this.getView().byId("ObjectPageLayout").refresh();
            

            //  var oImage = this .getView().byId("ImageBackend");
            // oImage.setSrc("profileModel>/pdata/0/Picture");

            // var Name = this.getView().byId("textId");
            // Name.setText("profileModel>/pdata/0/Fullname");
               
               
            },
     
             
		});
	});
