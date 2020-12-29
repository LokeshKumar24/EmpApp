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
                 debugger;
                this.getProfile(this.Eid)
                // var oLModel = this.getOwnerComponent().getModel("loginModel").getProperty("/loginD/0/Eid");
                var oLModel = "SW001";
                // var oLModel = this.Eid;
            
                var that = this;
               
                var oJSONModel = new JSONModel();
                 this.getOwnerComponent().setModel(oJSONModel, "profileModel");
                 var serviceurl="/sap/opu/odata/sap/ZAPP_EMP_SRV/";

             var oJModel =  new sap.ui.model.odata.ODataModel(serviceurl);
      
            
            var data=oJModel.read("/PROFILESet('"+ oLModel +"')", {
                success:function(data){
                    debugger;
                    // set the model
                    //  that.detailData(data);
                     console.log(data); 
                     

                      oJSONModel.setData({
                        Pdata:data
                    });

                   that.getOwnerComponent().setModel(oJSONModel, "profileModel");
                   var detail = that.getOwnerComponent().getModel("profileModel").getProperty("/Pdata");
                    that.getView().byId("ObjectPageLayout").bindElement("profileModel>/Pdata");
               
                   
            },


                error:function(){
                    alert("error");
                }
            });



            },

            

            detailData:function(data){
                debugger;
                var arr = [];
             arr.push(data);
             var oJSONModel = new JSONModel();
             

             oJSONModel.setData({
					Pdata: arr
                });
                
                this.getOwnerComponent().setModel(oJSONModel, "profileModel");
                var detail = this.getView().getModel("profileModel").getProperty("/pdata");

                
                console.log(detail);
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
