import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';
const activeUrl ="http://localhost:12000/api/v1";


export  default class ManualBookings extends Component {
  
  

  componentDidMount() {
     let mainNav;
     if (document.getElementById("loggedInOnly") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="block";
            mainNav.style.opacity=1;

    }

    if(localStorage.getItem('userToken')){
      

    }


    $("select#driver-option").change(function(){
          $(this).find("option:selected").each(function(){
            console.log(this);
            var optionValue = $(this).attr("value");
            console.log(optionValue);
            if(optionValue == "self-driven"){
             
              $("div#self-driven-fields").show();
              
              var driveTestCertificate = $("input#drive-test-certificate").attr("value");
              console.log(driveTestCertificate);
              if(driveTestCertificate!=""){
                $("div#drive-test-fields").hide();
              }
              
             
            } else{
              $("div#self-driven-fields").hide();
         
            }
          });
        }).change();

  

  }
	render(){
	  return (

        <div className="content-page">
          
            <div className="content">
                <div className="container" id="admin" data-pageid="plan-manual-bookings-admin">

                 
                    
                    <div className="row">
                            
                    <div className="col-lg-12 card-box">
                      <div className="col-lg-2 pull-left"><a href="#" id="gobackFor"
                            className="gobackFor btn btn-default waves-effect waves-light pull-left m-b-10"><i className="md  md-chevron-left"></i> Back to List</a> </div>
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Create Booking <span className="m-l-10 text-purple font-13"><b></b></span></h4></div>
                            <div className="col-lg-2 pull-right"><div className="btn-group pull-right m-t-0">
                                    <button type="button" className="btn btn-inverse dropdown-toggle waves-effect waves-light"
                                        data-toggle="dropdown" aria-expanded="false">Options <span className="m-l-5"><i
                                                className="md md-expand-more"></i></span></button>
                                    <ul className="dropdown-menu drop-menu-right" role="menu">
                                        <li><a href="./admin-bookings">Booking List</a></li>
                                      
                                        <li className="divider"></li>
                                   
                                    </ul>
                                </div> </div>
                            <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                            <div className="col-lg-12 m-t-10" >
                                <div className="">


                                
                                <p className="text-muted m-b-30 font-13">
                                    Admin can manage the bookings registered on the System. Admin can add/modify/delete
                                    any  booking plan.
                                </p>
                                 <form className="form-horizontal" role="form" data-parsley-validate noValidate>
                                        
                                        <div className="col-md-6 m-t-30">
                                        <div className="form-group col-sm-12">
                                            <label for="username" className="col-sm-4 control-label text-left">ID</label>
                                            <div className="col-sm-7">
                                                <input type="text"  className="form-control"
                                                    id="plan_id" placeholder="PLANID2020004" />
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-12">
                                            <label for="username" className="col-sm-4 control-label text-left">Date</label>
                                            <div className="col-sm-7">
                                                <input type="date"  className="form-control"
                                                    id="date" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">Plan Status</label>
                                            <div className="col-sm-7">
                                                <select className="form-control" id="status">
                                                    <option>Pending</option>
                                                    <option>Ongoing</option>
                                                    <option>Completed</option>
                                                </select>
                                            </div>
                                        </div>

                                        </div>

                                        <div className="col-md-6 m-t-30">


                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">Email</label>
                                            <div className="col-sm-7">
                                                <select className="form-control" id="email">
                                                   <option>--Select an email--</option>
                                                </select>
                                            </div>
                                        </div>
    
                                    

                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">Username</label>
                                            <div className="col-sm-7">
                                                <select className="form-control" id="username">
                                                    <option>--Select user--</option>
                                                   
                                                </select>
                                            </div>
                                        </div>



                                            

                                            <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">Plan Status</label>
                                            <div className="col-sm-7">
                                                <select className="form-control" id="status">
                                                    <option>pending</option>
                                                    <option>ongoing</option>
                                                    <option>completed</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-12">
                                                <label for="inputEmail3" className="col-sm-4 control-label">Phone Number</label>
                                                <div className="col-sm-7">
                                                    <input type="text"  className="form-control" id="phone_number" />
                                                </div>
                                            </div>

                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">Plan Package Category</label>
                                            <div className="col-sm-7">
                                                <select className="form-control" id="plan_name">
                                                    <option value="Option 1">Individual</option>
                                                    <option value="Option 2">Corporate</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">Plan Package</label>
                                            <div className="col-sm-7">
                                                <select className="form-control" id="plan_categories">
                                                    <option>Commute Saver</option>
                                                    <option>Commute Richly</option>
                                                    <option>Commute Weekend</option>
                                                </select>
                                            </div>
                                        </div>

                                        </div>

                                        <div className="clearfix"></div>

                                        <h4 className="m-t-10">Cars</h4>
                                        <div className="m-t-10 m-b-30" style={{border:"0.5px solid #4c3392"}}></div>
                                        <div className="clearfix"></div>

                                        <div className="col-md-12">
                           
                                            <div className="col-sm-6  col-md-6 col-lg-4">
                                                <div className="widget-bg-color-icon card-box">
                                                <label for="" className="control-label m-b-10">Car 1</label>
                                                    <div className="">
                                                        <select className="form-control" id="car1">
                                                            <option selected disabled>Kindly select car</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                
                                            <div className="col-sm-6  col-md-6 col-lg-4">
                                                <div className="widget-bg-color-icon card-box">
                                                <label for="" className="control-label m-b-10">Car 2</label>
                                                    <div className="">
                                                        <select className="form-control" id="car2">
                                                            <option selected disabled>Kindly select car</option>
                                                            
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                
                                            <div className="col-sm-6  col-md-6 col-lg-4">
                                                <div className="widget-bg-color-icon card-box">
                                                    <label for="" className="control-label m-b-10">Car 3</label>
                                                    <div className="">
                                                        <select className="form-control" id="car3">
                                                            <option selected disabled>Kindly select car</option>
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="clearfix"></div>

                                        <h4 className="m-t-10">Itineraries</h4>
                                        <div className="m-t-10 m-b-30" style={{border:"0.5px solid #4c3392"}}></div>
                                        <div className="clearfix"></div>

                                                            <section className=" fade in" id="add-itineries">
                                                 
                      
                        
                        <div className="row row-iti">
                          <div className="col-sm-5 pull-left column-itinerary1">
                            <div className="card-box">
                              <div className="row p-l-0 p-r-0">
                                <div className="col-md-12">
                                <h4 className="m-t-0 header-title text-custom "><b>Add Itinerary</b></h4>
                                
                              <p className="text-muted m-b-30 font-18">
                                
                              </p>
                                  <h4 className="m-t-0 header-title"><b></b></h4>
                                  <p className="text-muted m-b-30 font-13">
                                  
                                  </p>
                                  
                                  <form role="form">
                                    
                                    <div className="form-group">
                                      <label htmlFor="inputDestination">Pickup Location</label>
                                      <input type="text" className="form-control" id="location" placeholder="Enter Pickup Location" data-container="body" title="" data-toggle="popover" data-placement="top" data-content="Please note that a car will be available 24 to 48 hours after itinerary is saved." data-original-title="" />
                                      
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="inputDestination">Destination</label>
                                      <input type="text" className="form-control" id="destination" placeholder="Enter Destination" />
                                    </div>
                                      <div className=" ">
                                    
                                      
                                      <div className="">
                                        
                                        <div className="form-group">
                                        <label className="control-label">Enter Date</label>
                                        <input type="date" id="start" className="form-control" placeholder="mm/dd/yyyy" />
                                        </div>
                                      </div>
                                      <div className="">
                                        <div className="form-group">
                                        <label className="control-label">Enter Time</label>
                                        <input id="end" type="time" className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label">Select Driver Option</label>
                                      <div>
                                        <select className="form-control selectpicker show-tick" data-style="btn-white" id="driver-option" defaultValue="driver">
                                          <option value="driver">I would like a driver</option>
                                          <option value="self-driven">I would like to drive myself</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div id="self-driven-fields">
                                    <div className="form-group">
                                      <label htmlFor="inputDestination" >Drive Test Certificate ID</label>
                                      <input type="text"  className="form-control" id="drive-test-certificate" placeholder="Drive Test Certificate ID"  />
                                    </div>

                                      <div id="plan-category" style={{display:"none"}}>
                                    <div className="form-group">
                                      <label htmlFor="inputDestination" >Plan Type</label>
                                      <input  type="text" value="" className="form-control" id="plan_name" placeholder=""  />
                                    </div>
                                    </div>

                                    <div id="plan-category">
                                    <div className="form-group" style={{display:"none"}}>
                                      <label htmlFor="inputDestination" >Plan Name</label>
                                      <input type="text" value="" className="form-control" id="plan_category" placeholder=""  />
                                    </div>
                                    </div>

                                    <div className="col-md-12 col-lg-12 p-l-0 p-r-0 " id="drive-test-fields" >
                                      <div className="form-group">
                                        <div className="">
                                        <label className="control-label">Test Center</label>
                                          <select className="form-control selectpicker show-tick" data-style="btn-white" id="driving-school" defaultValue="ikeja">
                                            <option disabled >Select Driving School</option>
                                            <option>Ikeja</option>
                                            <option>Ojodu Berger</option>
                                            <option>Oshodi</option>
                                            <option>Amuwo-Odofin</option>
                                            <option>Ajah</option>
                                            <option>Ikoyi</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <div className=" ">
                                        <label className="control-label">Test Date</label>
                                        <input type="date" className="form-control" placeholder="mm/dd/yyyy" id="testdate" />
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    
                                    <div id="driver-fields">
                                    <div className="col-md-12 col-lg-12 p-l-0 ">
                                    
                                      
                                      <div className="form-group" >
                                        
                                        <div className="">
                                        <label className="control-label">Choose City Option</label>
                                          <select className="form-control selectpicker show-tick" data-style="btn-white" id="traveloption" defaultValue={"Select City Option"}>
                                            <option disabled >Select City Option</option>
                                            <option>Inter City</option>
                                            <option>Intra City</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <div className="">
                                        <label className="control-label">Number of Hours</label>
                                        <input id="no_hrs" className="form-control" type="text" required="" placeholder="Number of Hours e.g 5" />
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    
                                    
            
                                  
                                    
                                    <button id="submitItinerary" type="submit" className="btn btn-purple btn-block btn-lg waves-effect waves-light">Add Itinerary</button>
                                  </form>
                                </div>
                                
                              
                            </div>
                          </div>
                        </div>
                        
                        


                            <div className="col-lg-8 pull-right column-itinerary2">
                                <div className="">
                                   
                                    <h4 className="text-dark header-title m-t-0">Itinerary List</h4>
                                    <p className="text-muted m-b-30 font-13">
                                        
                                    </p>
                                    

                                    <div className="table-responsive">
                                        <table id="demo-foo-pagination" data-page-size="5" 
                       data-search="true" className="table table-actions-bar">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Pickup Location</th>
                                                    <th>Destination</th>
                                                
                                                    <th style={{minWidth: "50px"}}></th>
                                                </tr>
                                            </thead>
                                            <tbody id="tablebody">
                                                
                                                <tr id="startPoint"><td colSpan="2"></td></tr>
                                                
                                                  
                                              


                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan="5">
                                                    <div className="text-right">
                                                        <ul className="pagination pagination-split m-t-30"></ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                        </table>
                                    </div>

                                </div>
                            </div>
                            
                                           
                                                
                                            </div> 

                                            </section>
                        
                                            
                                        <div className="clearfix m-b-30"></div>

                                        <h4 className="m-t-30">Quotations and Payment</h4>
                                        <div className="m-t-10 m-b-30" style={{border:"0.5px solid #4c3392"}}></div>
                                        <div className="clearfix"></div>

                                        
                                        <div className="col-md-6">
                                            <div className="form-group col-sm-12">
                                                <label for="username" className="col-sm-4 control-label text-left">Quotation ID</label>
                                                <div className="col-sm-7">
                                                    <input type="text" required  className="form-control" disabled
                                                        id="quote-id"  placeholder="CMQUT2020004" />
                                                </div>
                                            </div>
    
                                            <div className="form-group col-sm-12">
                                                <label for="username" className="col-sm-4 control-label text-left">Quotation Date</label>
                                                <div className="col-sm-7">
                                                    <input type="date" required  className="form-control"
                                                        id="quote-date"  placeholder="14 Jan 2020" />
                                                </div>
                                            </div>

                                            <div className="form-group col-sm-12">
                                                <label for="amount" className="col-sm-4 control-label">Quotation Amount (₦)</label>
                                                <div className="col-sm-7">
                                                        <input id="quote-amount" type="text" required className="form-control" placeholder="40,000" />
                                                    </div>  
                                            </div>

                                            <div className="form-group col-sm-12">
                                                <label for="" className="col-sm-4 control-label">Quotation Status</label>
                                                <div className="col-sm-7">
                                                    <select id="quote-status" className="form-control" >
                                                         <option>--choose--</option>
                                                        <option>Paid</option>
                                                        <option>Unpaid</option>
                                                    </select>
                                                </div>
                                            </div>



                                                  <div className="form-group">
                                                        <div className="col-sm-offset-4 col-sm-8">
                                                            <button type="submit" id="submitPlan" className="btn btn-primary waves-effect waves-light">
                                                                Send/Update Quotation
                                                            </button>
                                                           
                                                        </div>
                                                    </div>
    
                                            </div>
    
                                            <div className="col-md-6">

                                            <div className="form-group col-sm-12">
                                                <label for="username" className="col-sm-4 control-label text-left">Payment ID</label>
                                                <div className="col-sm-7">
                                                    <input type="text"   disabled className="form-control"
                                                        id="quote-payment-id" placeholder="CMPAY2020004" />
                                                </div>
                                            </div>

    
                                            <div className="form-group col-sm-12">
                                                <label for="amount" className="col-sm-4 control-label">Plan Payment Amount</label>
                                                <div className="col-sm-7">
                                                        <input disabled type="text"  id="quote-payment-amount"    className="form-control" placeholder="400,000" />
                                                    </div>  
                                            </div>
    
                                            <div className="form-group col-sm-12">
                                                <label for="" className="col-sm-4 control-label">Payment Reference</label>
                                                <div className="col-sm-7">
                                                    <input type="text"  className="form-control" id="paystack-reference" disabled placeholder="PAYSTK2099874" />
                                                </div>
                                            </div>
    
                                            <div className="form-group col-sm-12" style={{display:"none"}}>
                                                <label for="" className="col-sm-4 control-label">Payment Status</label>
                                                <div className="col-sm-7">
                                                    <select className="form-control" id="paystack-status">
                                                        <option>--choose--</option>
                                                        <option>Successful</option>
                                                        <option>Failed</option>
                                                    </select>
                                                </div>
                                            </div>
    
                                            </div>
                    

                </form>

                                
                            </div>

                        </div> 


                    </div>





            

            </div> 


 </div> 

        
             

             
                                   

            </div> 





            </div> 

           


	  );

	}
}                                                                                       