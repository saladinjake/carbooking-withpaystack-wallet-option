import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';
const activeUrl ="http://localhost:12000/api/v1";


export  default class BookingDetail extends Component {
  
  

  componentDidMount() {
     let mainNav;
     if (document.getElementById("loggedInOnly") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="block";
            mainNav.style.opacity=1;

    }

    if(localStorage.getItem('userToken')){
      

    }

  

  }
	render(){
	  return (

      <React.Fragment>

        <div className="content-page" id="first-view">
          
            <div className="content">
                <div className="container" id="admin" data-pageid="plan-detail-admin">
                 

                 <div className="row">
                            
                            <div className="col-lg-12 card-box">
                            
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Plan Booking Detail <span className="m-l-10 text-purple font-13"><b id="plan-id"></b></span></h4></div>
                            
                            <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                            <div className="col-lg-12 m-t-10" >
                                <div className="">
                                    
    
                                    <form className="form-horizontal" role="form" data-parsley-validate noValidate>
                                        
                                        <div className="col-md-6 m-t-30">
                                        <div className="form-group col-sm-12">
                                            <label for="username" className="col-sm-4 control-label text-left">ID</label>
                                            <div className="col-sm-7">
                                                <input type="text" required parsley-type="text" className="form-control"
                                                    id="id" disabled placeholder="PLANID2020004" />
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-12">
                                            <label for="username" className="col-sm-4 control-label text-left">Date</label>
                                            <div className="col-sm-7">
                                                <input type="text" required parsley-type="text" className="form-control"
                                                    id="date" disabled placeholder="14 Jan 2020" />
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">Plan Status</label>
                                            <div className="col-sm-7">
                                                <select id="status" className="form-control" disabled>
                                                    <option>Paid</option>
                                                    <option>Unpaid</option>
                                                    <option>Completed</option>
                                                </select>
                                            </div>
                                        </div>

                                        </div>

                                        <div className="col-md-6 m-t-30">
    
                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">User Name</label>
                                            <div className="col-sm-7">
                                                <input id="username" type="text" required disabled parsley-type="text" className="form-control" value="Jane Doe" />
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-12">
                                                <label for="inputEmail3" className="col-sm-4 control-label">Email Address</label>
                                                <div className="col-sm-7">
                                                    <input type="email" required disabled parsley-type="email" className="form-control" id="email" value="jane.doe@email.com" />
                                                </div>
                                            </div>

                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">Plan Package</label>
                                            <div className="col-sm-7">
                                                <input type="text" required disabled parsley-type="text" className="form-control" id="category" placeholder="Goom Logistics Saver" />
                                            </div>
                                        </div>

                                        </div>

                                        <div className="clearfix"></div>

                                        <h4 className="m-t-10">Cars</h4>
                                        <div className="m-t-10 m-b-30" style={{border:"0.5px solid #4c3392"}}></div>
                                        <div className="clearfix"></div>

                                        <div className="col-md-12" id="carlist">
                           

                                        </div>


                                        <div className="clearfix"></div>

                                        <h4 className="m-t-10">Itineraries</h4>
                                        <div className="m-t-10 m-b-30" style={{border:"0.5px solid #4c3392"}}></div>
                                        <div className="clearfix"></div>

                                        
                                            <div className="table-responsive col-md-12">
                                                <table className="table table-hover mails m-0 table table-actions-bar">
                                                    <thead>
                                                        <tr>
                                                            <th className="col-lg-2">Date Time</th>
                                                            <th className="col-lg-3">Start Location</th>
                                    <th className="col-lg-3">Destination</th>
                                    <th className="col-lg-3">Categrory</th>
                                        <th className="col-lg-1">Driver</th>
                                        <th className="col-lg-1">City</th>
                            <th className="col-lg-1 text-center">Hours</th>
                            <th className="col-lg-1">Status</th>
                                <th style={{minWidth: "90px"}}>Action</th>
                                                        </tr>
                                                    </thead>
            
                                                    <tbody id="tablebody">
                                                       
                                                        
                                                    </tbody>
                                                </table>
                                            </div>

                                            
                                        <div className="clearfix m-b-30"></div>

                                        <h4 className="m-t-30">Process And Update Users Quotations and Payment</h4>
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
                                                    <input type="text" required disabled  className="form-control"
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
                                                            <button type="submit" id="send-quote" className="btn btn-primary waves-effect waves-light">
                                                                Send/Update Quotation
                                                            </button>
                                                           
                                                        </div>
                                                    </div>
    
                                            </div>
    
                                            <div className="col-md-6">

                                            <div className="form-group col-sm-12">
                                                <label for="username" className="col-sm-4 control-label text-left">Payment ID</label>
                                                <div className="col-sm-7">
                                                    <input type="text" required  disabled className="form-control"
                                                        id="quote-payment-id" placeholder="CMPAY2020004" />
                                                </div>
                                            </div>

    
                                            <div className="form-group col-sm-12">
                                                <label for="amount" className="col-sm-4 control-label">Plan Payment Amount</label>
                                                <div className="col-sm-7">
                                                        <input disabled type="text"  id="quote-payment-amount" required   className="form-control" placeholder="400,000" />
                                                    </div>  
                                            </div>
    
                                            <div className="form-group col-sm-12">
                                                <label for="" className="col-sm-4 control-label">Payment Reference</label>
                                                <div className="col-sm-7">
                                                    <input type="text" required   className="form-control" id="paystack-reference" disabled placeholder="PAYSTK2099874" />
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













            <div style={{display:"none"}} className="content-page fade in" id="second-view">
           
            <div className="content">
                <div className="container" >

                   
                
                        


                    <div className="row">
                            
                            <div className="col-lg-12 card-box">
                            <div className="col-lg-2 pull-left"><a href="#" 
                            className="btn btn-default waves-effect waves-light pull-left m-b-10 goback"><i className="md  md-chevron-left" id="goback"></i> Back to List</a> </div>
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Itinerary Detail <span className="m-l-10 text-purple font-13"><b id="user-id"></b></span></h4></div>
                            <div className="col-lg-2 pull-right"><div className="btn-group pull-right m-t-0">
                                    
                                    
                                </div> </div>
                            <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                            <div className="col-lg-12 m-t-10" >
                                <div className="card-box">
                                   
    
                                    <div id="modalbody1"></div>
                                </div>
                            </div>
    
                          
    
    
    
                        </div>
                    </div>
    
    




                </div> 

            </div> 


            </div>




            </React.Fragment> 

           


	  );

	}
}                                                                                       