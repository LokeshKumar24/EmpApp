sap.ui.define([
        // "sap/ui/core/mvc/Controller",
         "EA/EmployeeApp1/controller/Base",
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
                var that = this;
                var OData;
                var oJSONModel = new JSONModel();
                this.getView().setModel(oJSONModel, "jsonmodel");
             
                 
                
                
                // var sUrl = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZAPP_EMP_SRV/");
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZAPP_EMP_SRV/");
            var data=oModel.read("/LOGINSet", {
                success:function(data1){
                    debugger;
                   // alert("success");
                    OData= data.results;
                    console.log(data.results); 
                    that.getView().setModel(new JSONModel({LoginData: data.results}),"jsonmodel");
                   
                    
                    // set the model
                    //  that.masterData(OData);  
                                  
                },
                error:function(){
                    alert("error");
                }
            });

                
                

               
            //    this.getView().setModel(new JSONModel(),"ch");
            //     this.getView().setModel(new JSONModel(),"login");

            },


             masterData : function(OData){
             debugger;
             var arr = [];
             arr.push(data1.results);
            //  console.log(oData1);
             var oJSONModel = new JSONModel();
             

             oJSONModel.setData({
					LoginData: OData
                });
                
                this.getView().setModel(oJSONModel, "jsonmodel");
                // var detail = this.getView().getModel("jsonmodel").getProperty("/data");
                // console.log(detail);
                // var idE3 = detail[0].Eid;
                // console.log(idE3);
               
               
            },
            onLogin:function(){
                debugger;
                // var id = this.getView().getModel("login").getProperty("/id");
                // var Password = this.getView().getModel("login").getProperty("/password");

                var id = this.getView().byId("eid").getValue();
                var password = this.getView().byId("epass").getValue();
                 this.oRouter.navTo("SplitApp");

                // var oModel = this.getView().getModel("jsonmodel").getProperty("/LoginData");
                // for (var i=0; i<=oModel.length; i++){
                //     if(oModel[i].Eid === id && oModel[i].Password === password){
                //          this.oRouter.navTo("SplitApp");
                //     }else{
                //         // sap.m.MessageToast.show("Please Enter Login Credentials");
                //         alert("ERROR");
                //     }

                // }

                
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
