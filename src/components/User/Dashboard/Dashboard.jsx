import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItineraryHistoryList from '../History/ItineraryHistoryList'
import $ from 'jquery';
const activeUrl ="http://localhost:12000/api/v1";


export  default class Dashboard extends Component {
  
  

  componentDidMount() {
     let mainNav;
     if (document.getElementById("loggedInOnly") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="block";
            mainNav.style.opacity=1;

    }

    if(localStorage.getItem('userToken')){
       let user  = JSON.parse(localStorage.getItem('userToken'));
       document.getElementById("userWelcomeSection").innerHTML = "Welcome " + user.user.firstname + ", How is your day going";
       document.getElementById("plan-id").innerHTML=user.user.plan_name;

    }

  

  }

  goAway(url){
   return window.location.href=url;
  }

  render() {
    const style1 ={
        visibility:"hidden", 
        display:"none"
    }
   
    return (
      

      <div  className="content-page page-wrap" id="spread-out">
                
                <div className="content" id="dashboard">
                    <div className="container">

<a id="portfolio" style={{textAlign:"center",fontSize:"15px"}} href="./create-plan" className="link-to-portfolio hover-target "><i className="md md-add text-info"></i></a>
                        
                        <div className="row">
                            <div className="col-sm-12">
                               

                                <h4 className="page-title">Dashboard</h4>
                                <p id="userWelcomeSection" className="text-muted page-title-alt"> </p>
                            </div>
                        </div>

                        <div className="row">


                        
                        

                            

                            <a id="plan-detail" href="./plan-detail">
                            <div data-id="plan-detail" data-href="./plan-detail" className="col-sm-6  col-md-6 col-lg-3">
                            <div className="widget-bg-color-icon card-box p-t-10 p-b-10">
                                    <div className="text-dark">
                                        <h4 className="text-custom"><b className="" style={{fontSize:"14px"}}> Current Plan</b></h4>
                                    </div>
                                    <div className="">
                                        <h5 className="text-dark"><b style={{fontSize:"14px"}} className="" id="plan-id">No Plan</b></h5>
                                        <p className="text-muted" id="idvalue">No plan id</p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div></div></a>


                            <a  id="topup-wallet" href="./wallet"><div className="col-sm-6  col-md-6 col-lg-3 bg-red">
                                <div className="widget-bg-color-icon card-box">
                                    <div className="bg-icon bg-icon-custom pull-left">
                                        <i className="md md-account-balance-wallet text-custom"></i>
                                    </div>
                                    <div className="col-lg-6 pull-right text-right">
                                        <h3 className="text-dark" style={{fontSize:"14px"}}><b className="">Topup wallet</b></h3>
                                        <p className="text-muted"></p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div></a>

                            <a  id="plan" href="./create-plan"><div className="col-sm-6  col-md-6 col-lg-3">
                                <div className="widget-bg-color-icon card-box">
                                    <div className="bg-icon bg-icon-info pull-left">
                                        <i className="md md-add text-info"></i>
                                    </div>
                                    <div className="col-lg-6 pull-right text-right">
                                        <h3 className="text-dark" style={{fontSize:"14px"}}><b className="">Create 
                                            <span style={style1} > Create </span> <span>new plan</span></b></h3>
                                        <p className="text-muted"></p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div></a>

                            <a id="request-car-repair" href="./request-car-repair"><div className="col-sm-6  col-md-6 col-lg-3">
                                <div className="widget-bg-color-icon card-box">
                                    <div className="bg-icon bg-icon-custom pull-left">
                                        <i className="md-directions-car text-custom"></i>
                                    </div>
                                    <div className="col-lg-6 pull-right text-right">
                                        <h3 className="text-dark" style={{fontSize:"14px"}}><b className="">Request car <span style={style1}></span> repair</b></h3>
                                        <p className="text-muted"></p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div></a>
                        </div>

                   
                        
                         <div className="row">

                            


                            <div className="col-lg-12">
                                <div className="card-box">
                                  <a id="itinerary-history" style={{width:"80px", fontSize:"12px", marginRight: "12px", fontSize: "14px"}} href="./itinerary-history" className="pull-right btn btn-default btn-sm waves-effect waves-light footable-page ">View all</a>

                                  <br/>


                                    <h4 className="text-dark header-title m-t-0">Upcoming Itineraries</h4>
                                
                                        
                                               
                                    

                                    <div className="table-responsive card-box">
                                             <br/>
                                              <div className="col-sm-6 text-lg-center text-right pull-right">
                                                    <div className="form-group">
                                                        <input id="foo-table-input" type="text" placeholder="Search by location" className="form-control input-sm" autoComplete="on" />
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                                        <table id="demo-foo-pagination" data-page-size="7" 
                                           data-search="true" className="table toggle-circle table-hover">

                                            <thead>
                                                <tr>

                                                

                                                  <th data-toggle="true" className="col-lg-4">Created Date</th>
                                                    <th className="col-lg-2">Plan Category</th>
                                                    <th data-hide="phone" className="col-lg-4">Start Location</th>
                                                    <th data-hide="phone" className="col-lg-4">Destination</th>
                                                    
                                                     <th data-hide="all" className="col-lg-2">Status</th>
                                                   
                                                </tr>
                                            </thead>
                                           
                                            <tbody id="tablebody">
                                                
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
                      



                        <div className="row">

                            

                            <div className="col-lg-12">
                                <div className="card-box">
                                    <a href="./plan-history" style={{width:"80px", fontSize:"12px", marginRight: "12px", fontSize: "14px"}}  className="pull-right btn btn-default btn-sm waves-effect waves-light footable-page">View all</a>
                                    <h4 className="text-dark header-title m-t-0">Plan History</h4>
                                    <p className="text-muted m-b-30 font-13">
                                        
                                    </p>

                                    <div className="table-responsive card-box">
                                       <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                                        <table className="table table-actions-bar">
                                            <thead>
                                                <tr>
                                                    <th>Plan ID</th>
                                                    <th>Plan Type</th>
                                                    <th>Duration</th>
                                                    <th>Status</th>
                                                    <th>Total Amount</th>
                                                    <th style={{minWidth: "80px"}}></th>
                                                </tr>
                                            </thead>
                                            <tbody id="tablebody1">
                                                
                                               

                                            </tbody>
                                        </table>
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






