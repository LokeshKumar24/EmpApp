sap.ui.define([      
          "sap/ui/core/mvc/Controller",
          "sap/ui/model/json/JSONModel",
          "sap/m/MessageToast"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller,JSONModel,MessageToast) {
		"use strict";

		return Controller.extend("EA.EmployeeApp1.controller.BaseController", {
            Eid:null,
            loginDetails:null,
            oRouter : null,
            profile:null,
			onInit: function () {
                
            },
            //login data and validations
            getLogin:function(){
                var that = this;
              var serviceurl="/sap/opu/odata/sap/ZAPP_EMP_SRV/";

             var oJModel =  new sap.ui.model.odata.ODataModel(serviceurl);
      
            var data=oJModel.read("/LOGINSet", {
                success:function(data){
                    // debugger;
                     that.loginDetails = data.results;
                     console.log(that.loginDetails)
                                   
                },
                error:function(){
                    alert("Login data is not received");
                }
            });

            },
            checkLogin:function(id,password){
               // debugger
                this.loginDetails.forEach(element => {
                    if(element.Eid === id && element.Password === password){
                        this.oRouter.navTo("SplitApp",{ID:id});
                    }
                });

            },
            //home data
            getHome:function(){
                // debugger
                var that = this;
                var serviceurl="/sap/opu/odata/sap/ZAPP_EMP_SRV/";
                
                var oJModel =  new sap.ui.model.odata.ODataModel(serviceurl);
                
            var data=oJModel.read("/HOMESet", {
                success:function(data){
                   // debugger;
                    
                     console.log(data.results)
                                   
                },
                error:function(){
                    alert("Home data is not received");
                }
            });

            },

            // project data
            getProject:function(){
                //  debugger
                   var that = this;
              var serviceurl="/sap/opu/odata/sap/ZAPP_EMP_SRV/";

             var oJModel =  new sap.ui.model.odata.ODataModel(serviceurl);
      
            var data=oJModel.read("/PROJECTSet", {
                success:function(data){
                   //  debugger;
                    
                     console.log(data.results)
                                   
                },
                error:function(){
                    alert("Project data is not received");
                }
            });

            },
            //get others data
            getOthers:function(){
                //debugger
                  var that = this;
              var serviceurl="/sap/opu/odata/sap/ZAPP_EMP_SRV/";

             var oJModel =  new sap.ui.model.odata.ODataModel(serviceurl);
      
            var data=oJModel.read("/REQUESTSet", {
                success:function(data){
                    // debugger;
                    
                     console.log(data.results)
                                   
                },
                error:function(){
                    alert("Request data is not received");
                }
            });

            },
            // getProfile:function(){
            //     // debugger
            //       var that = this;
            //     //  var id= this.Eid;
            //   var serviceurl="/sap/opu/odata/sap/ZAPP_EMP_SRV/";

            //  var oJModel =  new sap.ui.model.odata.ODataModel(serviceurl);
      
            // var data=oJModel.read("/PROFILESet", {
            //     success:function(data){
            //         //  debugger;
            //          console.log(data.results)
            //         that.getOwnerComponent().setModel(new JSONModel({profile:data.results}),"profileModel");
            //           that.addProfileData()             
            //     },
            //     error:function(){
            //         alert("Profile data is not received");
            //     }
            // });

            // },

            loginRouter:function(){
                  
                var that = this;
               
                var oJSONModel = new JSONModel();
                this.getOwnerComponent().setModel(oJSONModel, "jsonmodel");
             
                 
                
                
            
            },
            
             masterData : function(data){
              debugger;
             var arr = [];
             arr.push(data.results);
            //  console.log(oData1);
             var oJSONModel = new JSONModel();
             

             oJSONModel.setData({
					LData: OData
                });
                
                this.getView().setModel(oJSONModel, "jsonmodel");
               
               
            },

        getProfileData:function(){
              var that = this;
               
                var oJSONModel = new JSONModel();
                 this.getOwnerComponent().setModel(oJSONModel, "profileModel");
                 var serviceurl="/sap/opu/odata/sap/ZAPP_EMP_SRV/";

             var oJModel =  new sap.ui.model.odata.ODataModel(serviceurl);
      
            
            var data=oJModel.read('/PROFILESet('+this.Eid+')', {
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
            

             var oImage = this .getView().byId("ImageBackend");
            oImage.setSrc("profileModel>/pdata/0/Picture");

            var Name = this.getView().byId("textId");
            Name.setText("profileModel>/pdata/0/Fullname");
               

        }
		});
	});
