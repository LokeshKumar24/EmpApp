sap.ui.define([
        // "sap/ui/core/mvc/Controller",
         "EA/EmployeeApp1/controller/BaseController",
        //  "EA/EmployeeApp1/controller/Base.controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (BaseController,JSONModel) {
		"use strict";

		return BaseController.extend("EA.EmployeeApp1.controller.Login", {
            
            
			onInit: function () {
                this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
                var that = this;
               
                var oJSONModel = new JSONModel();
                this.getOwnerComponent().setModel(oJSONModel, "jsonmodel");
             
                 
                
                
             var serviceurl="/sap/opu/odata/sap/ZAPP_EMP_SRV/";

             var oJModel =  new sap.ui.model.odata.ODataModel(serviceurl);
      
            // var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZAPP_EMP_SRV/");
            var data=oJModel.read("/LOGINSet", {
                success:function(data){
                    // debugger;
                   
                   
                    // that.getView().setModel(new JSONModel({LoginData: data.results}),"jsonmodel");
                    oJSONModel.setData({
                        LData:data.results
                    });

                    that.getOwnerComponent().setModel(oJSONModel, "jsonmodel");
             
                   
                    
                    // set the model
                    //  that.masterData(OData);  
                                  
                },
                error:function(){
                    alert("error");
                }
            });

                
                

               
            

            },


             masterData : function(data){
            //  debugger;
             var arr = [];
             arr.push(data.results);
            //  console.log(oData1);
             var oJSONModel = new JSONModel();
             

             oJSONModel.setData({
					LData: OData
                });
                
                this.getView().setModel(oJSONModel, "jsonmodel");
               
               
            }, 
        
            onLogin:function(){
                 debugger;
                // var id = this.getView().getModel("login").getProperty("/id");
                // var Password = this.getView().getModel("login").getProperty("/password");

                var id = this.getView().byId("eid").getValue();
                var password = this.getView().byId("epass").getValue();

                this.Eid = id;
                   

                //    var oViews=["Home","Profile","Project","Others"];
                var oArr = [];
                var LoginId={
                    Eid:id
                }
                 
                 oArr.push(LoginId);
            
                  var data={
                        loginD: oArr
                       }
                 this.getOwnerComponent().setModel(new JSONModel(data),"loginModel");
                 var oLModel = this.getOwnerComponent().getModel("loginModel").getProperty("/loginD/0/Eid");


                 

                var oModel = this.getOwnerComponent().getModel("jsonmodel").getProperty("/LData");
                for (var i=0; i<oModel.length; i++){
                    if(oModel[i].Eid === id && oModel[i].Password === password){
                         this.oRouter.navTo("SplitApp");
                    }

                }

                

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
