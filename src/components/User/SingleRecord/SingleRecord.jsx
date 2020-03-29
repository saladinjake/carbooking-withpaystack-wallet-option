/* eslint-disable global-require */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class SingleRecord extends Component {
  componentDidMount() {
     let mainNav;
     if (document.getElementById("loggedInOnly") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="block";
            mainNav.style.opacity=1;

    }




  }
  render() {
    return (

    <React.Fragment>
        
             
            
             <div className="content-page" id="spread-out">
              
                <div className="content" id="plan-detail">
                    <div className="container">

                       
                           <div id="note">
     Sorry. You cannot start this trip . If quotation details has been sent to you please endeavour to make payments.
</div>


                        <div className="row card-box">
            <div className="m-b-20">
              <h4 className="page-title" id="plan_id">PLANID2304758 </h4>  
            </div>
            <div className="divider"></div>
                            <div className="col-lg-12"> 
                                <ul className="nav nav-tabs tabs">
                                    <li className="active tab" style={{backgroundColor:"#fff"}}>
                                        <a href="#home-2" data-toggle="tab" aria-expanded="false"> 
                                            <span className="visible-xs"><i className="fa fa-home"></i></span> 
                                            <span className="hidden-xs">Plan Details</span> 
                                        </a> 
                                    </li> 
                                    <li className="tab" style={{backgroundColor:"#fff"}}> 
                                        <a href="#profile-2" data-toggle="tab" aria-expanded="false"> 
                                            <span className="visible-xs"><i className="fa fa-user"></i></span> 
                                            <span className="hidden-xs">Itineraries</span> 
                                        </a> 
                                    </li> 
                                    <li className="tab" style={{backgroundColor:"#fff"}}> 
                                        <a href="#messages-2" data-toggle="tab" aria-expanded="true"> 
                                            <span className="visible-xs"><i className="fa fa-envelope-o"></i></span> 
                                            <span className="hidden-xs">Quotation</span> 
                                        </a> 
                                    </li> 
                                  
                                </ul> 
                                <div className="tab-content"> 
                                    <div className="tab-pane active" id="home-2" style={{backgroundColor:"#fff"}}> 
                                        <div className="">
                                        <table    id="demo-foo-pagination" data-page-size="5" 
                                           data-search="true" className="table toggle-circle table-hover">
                                            <thead>
                                                <tr>
                                                    {/*<th data-toggle="true" className="col-lg-2" >Plan ID</th>
                                                    <th data-hide="phone" className="col-lg-2" >Plan</th>
                                                    <th data-hide="phone" className="col-lg-3">Category</th>
                                                    <th data-hide="phone" className="col-lg-3">Duration</th>
                                                    <th data-hide="phone" className="col-lg-1">Created Date</th>
                                                    <th data-hide="phone" className="col-lg-1">Amount/Status</th>*/}
                          <th className="col-lg-2"></th>
                                                </tr>
                                            </thead>
                                            <tbody id="tablebody1">
                                                
                                             
                                              


                                            </tbody>
                                        </table>
                                    </div>

                                      
                                  
                    <div className="col-lg-12">
                    <h4 className="text-custom page-title m-t-30 m-b-20"> Cars Selected </h4>
                    
                      <div className="row" id="car-chosen">
                           
                        </div>

   
                    </div>
                      
                      
                      
                  </div>
                      
                      
                                    <div className="tab-pane" id="profile-2" style={{backgroundColor:"#fff"}}>
                                        <div className="table-responsive table-hover">
                                        <table    className="table table-actions-bar">
                                            <thead>
                                                <tr>
                                                    <th className="col-lg-2" data-sortable="true">Date Time</th>
                                                    <th className="col-lg-3">Pickup Location</th>
                                                    <th className="col-lg-3">Destination</th>
                                                    <th className="col-lg-1">Driver Option</th>
                                                    <th className="col-lg-1">Status</th>
                          <th className="col-lg-2"></th>
                                                </tr>
                                            </thead>
                                            <tbody id="planned-itineraries">
                                                
                                             
                                              


                                            </tbody>
                                        </table>
                                    </div>


                                    </div> 
                  
                  
                                    <div className="tab-pane" id="messages-2" style={{backgroundColor:"#fff"}}>
                                         <div className="table-responsive table-hover">

                                        <table    className="table table-actions-bar">
                                            <thead>
                                                <tr>
                                                    <th className="col-lg-2" data-sortable="true">Date/ Time</th>
                                                    <th className="col-lg-3">Plan ID</th>
                                                    <th className="col-lg-3">Quotation ID</th>
                                                    <th className="col-lg-2">Amount</th>
                                                    <th className="col-lg-3">Reference</th>
                                                    <th className="col-lg-1">Status</th>
                                                     <th className="col-lg-3">Action</th>
                          <th className="col-lg-2"></th>
                                                </tr>
                                            </thead>
                                            <tbody id="planned-quotation">
                                                
                                             
                                              


                                            </tbody>
                                        </table>
                     
                                        </div>
                                    </div> 
                                </div> 
                            </div> 

                         
                        </div>
                        


                    </div> 
                               
                </div> 

           </div> 












           <div className="side-bar right-bar nicescroll" tabindex="5000" style={{overflow: "hidden", outline: "none"}}>
                <a href="#" className="btn btn-default btn-md pull-left right-bar-toggle" style={{fontSize:"18px"}}><i className="md md-close hidden text-white waves-effect waves-light p-r-20 p-l-20"></i>Close</a><h4 className="text-center">Itinerary Detail</h4>
                <div className="contact-list m-t-30 nicescroll" tabindex="5001" style={{overflow: "hidden", outline: "none"}}>
                    <form className="form m-t-0" action="index.html">

                        <div className="row col-md-12 col-lg-12 ">
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="form-group">
                                <p id="itin-ids" className="h4" ></p>
                                </div>
                            </div> 
                        
                        
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="form-group">
                                <p id="itin-status"></p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row col-md-12 col-lg-12 ">
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="form-group">
                                <input className="form-control" type="text" disabled="true" id="start_date" />
                                </div>
                            </div>
                        
                        
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="form-group">
                                <input id="start_time" className="form-control" type="text" disabled="true" placeholder=""  />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row col-md-12 col-lg-12 ">
                            <div className="col-xs-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                <input id="startloc" className="form-control" type="text" disabled="true" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row col-md-12 col-lg-12 ">
                            <div className="col-xs-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                <input id="destination" className="form-control" type="text" disabled="true"  />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row col-md-12 col-lg-12 ">
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="form-group">
                                <input id="near_driver" className="form-control" type="text" disabled="true" />
                                </div>
                            </div>
                        
                        
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="form-group">
                                <input id="travel_option" className="form-control" type="text" disabled="true" placeholder=""  />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row col-md-12 col-lg-12 m-t-30 ">
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="form-group">
                                <button className="start-itinerary btn btn-purple btn-block text-uppercase waves-effect waves-light m-b-30" type="submit" id="start">
                                    Start Trip
                                </button>
                                </div>
                            </div>
                        
                        
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="form-group">
                                <button className="btn btn-purple btn-custom btn-block text-uppercase waves-effect waves-light m-b-30" type="submit" id="cancel">
                                    Cancel Trip
                                </button>
                                </div>
                            </div>
                        </div>
                        
                    </form>

                </div>
            

            <div id="ascrail2001" className="nicescroll-rails right1" >


            <div className="right2">

            </div>

            </div>

            <div id="ascrail2001-hr" className="nicescroll-rails right3">

            <div className="right4"></div>

            </div>

            </div>






              <div className="content-page fade in" id="mapout"  style={{opacity: "0"}}>
              
                <div className="content" >
                    <div className="container">

                       
                        


                        <div className="row card-box">

              <div >
                             <div className="row">
                                <div className="col-sm-12">
                                    <div className="btn-group pull-right m-t-15">
                                        <button type="button" className="btn btn-default dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false">Settings <span className="m-l-5"><i className="fa fa-cog"></i></span></button>
                                        <ul className="dropdown-menu drop-menu-right" role="menu">
                                            
                                        </ul>
                                    </div>

                                    <h4 className="page-title">Google Maps</h4>
                                    <ol className="breadcrumb">
                                        <li><a href="#">Ubold</a></li>
                                        <li><a href="#">Maps</a></li>
                                        <li className="active">Gmaps</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 col-sm-12 col-md-12">
                                    <div className="card-box">
                                        <h4 className="m-t-0 m-b-20 header-title"><b>Commute Taxi Map</b></h4>
                                        
                                        <div id="gmaps-types" className="gmaps" style={{height:"100vh"}}></div>

                                   
                                    </div>
                                </div>
                                
                                
                            </div>
        </div>



     </div>
       </div>
       </div>
       </div>
       



          <div id="slideout">
    <div id="containclickme">
        <div className="metro three-d" id="click-me"></div>
    </div>
</div>
            

           </React.Fragment>    
        
    );
  }
}



