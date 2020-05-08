import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';
const activeUrl ="http://localhost:12000/api/v1";


export  default class AdminDashboard extends Component {
  
  

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
       

    }

  

  }
	render(){
	  return (
        <div className="content-page">
            
            <div className="content">
                <div className="container" id="admin" data-pageid="admin-dashboard">

                   
                    <div className="row" >
                        <div className="col-sm-12">
                            <div className="btn-group pull-right m-t-15">
                                <button type="button" className="btn btn-default dropdown-toggle waves-effect waves-light"
                                    data-toggle="dropdown" aria-expanded="false">Settings <span className="m-l-5"><i
                                            className="fa fa-cog"></i></span></button>
                                <ul className="dropdown-menu drop-menu-right" role="menu">
                                    <li><a href="./admin-profile">Profile</a></li>
                                    <li><a href="./admin-admins">Admins Mgt</a></li>
                                    
                                </ul>
                            </div>

                           <h4 className="page-title">Dashboard</h4>
                            <p id="userWelcomeSection" className="text-muted page-title-alt"> </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="widget-bg-color-icon card-box">
                                <div className="bg-icon bg-icon-info pull-left">
                                    <i className="md md-perm-identity text-info"></i>
                                </div>
                                <div className="text-right">
                                    <h3 className="text-dark"><b className="counta" id="user-total"></b></h3>
                                    <p className="text-muted">Total Users</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="widget-bg-color-icon card-box">
                                <div className="bg-icon bg-icon-custom pull-left">
                                    <i className="md md-local-taxi text-custom"></i>
                                </div>
                                <div className="text-right">
                                    <h3 className="text-dark"><b className="counta" id="drivers-total"></b></h3>
                                    <p className="text-muted">Total Drivers</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="widget-bg-color-icon card-box">
                                <div className="bg-icon bg-icon-info pull-left">
                                    <i className="md md-people text-info"></i>
                                </div>
                                <div className="text-right">
                                    <h3 className="text-dark"><b className="counta" id="partners-total"></b></h3>
                                    <p className="text-muted">Total Partners</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="widget-bg-color-icon card-box">
                                <div className="bg-icon bg-icon-custom pull-left">
                                    <i className="md md-time-to-leave text-custom"></i>
                                </div>
                                <div className="text-right">
                                    <h3 className="text-dark"><b className="counta" id="cars-total"></b></h3>
                                    <p className="text-muted">Total Cars</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="card-box">
                                <h4 className="text-dark header-title m-t-0 m-b-30">Total Revenue</h4>

                                <div className="widget-chart text-center">



                                     
                                   
                                    <h5 className="text-muted m-t-20">Total sales made today</h5>
                                    <h2 className="font-600" id="total-sales"></h2>
                                    <ul className="list-inline m-t-15">
                                        <li>
                                            <h5 className="text-muted m-t-20">Yesterday</h5>
                                            <h4 className="m-b-0" id="yesterday"></h4>
                                        </li>
                                        <li>
                                            
                                            <h4 className="m-b-0" id="last-week"></h4>
                                        </li>
                                        <li>
                                            
                                            <h4 className="m-b-0" id="last-mth"></h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-8">
                            <div className="card-box">
                                <a href="./admin-itineraries" className="pull-right btn btn-default btn-sm waves-effect waves-light">View
                                    All</a>
                                <h4 className="text-dark header-title m-t-0">Recent Itineraries</h4>
                                <p className="text-muted m-b-30 font-13">
                                    A list of the most recent itineraries created by users.
                                </p>

                                <div className="table-responsive table-bordered">
                                    <table className="table table-actions-bar toggle-circle table-hover" id="demo-foo-pagination" data-page-size="5" 
                                           >
                                        <thead>
                                            <tr>
                                                <th>Created</th>
                                               
                                                <th>Email</th>
                                                <th>Package Category</th>
                                                <th>Start Location</th>
                                                <th>Destination</th>
                                                <th>Status</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody id="tablebody1">
                                           
                                            
    

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

                            <div className="portlet">
                                
                                <div className="portlet-heading">
                                       
                                    <h3 className="portlet-title text-dark text-uppercase">
                                        Ticket List
                                    </h3>
                                    <div className="portlet-widgets">
                                        <a href="#" data-toggle="reload"><i className="ion-refresh"></i></a>
                                        <span className="divider"></span>
                                        <a data-toggle="collapse" data-parent="#accordion1" href="#portlet2"><i
                                                className="ion-minus-round"></i></a>
                                        <span className="divider"></span>
                                        <a href="#" data-toggle="remove"><i className="ion-close-round"></i></a>
                                    </div>
                                    <a href="./admin-tickets" className="pull-right btn btn-default btn-sm waves-effect waves-light">View
                                            All</a>
                                    <div className="clearfix"></div>
                                </div>
                                <div id="portlet2" className="panel-collapse collapse in">
                                    <div className="portlet-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover mails m-0 table table-actions-bar">
                                        <thead>
                                            <tr>
                                                
                                                <th>Date/Time</th>
                                                <th>User ID</th>
                                                    <th>Ticket Type</th>
                                                    <th>Subject</th>
                                                    <th>TicketID</th>
                                                    <th>Status</th>
                                                
                                            </tr>
                                        </thead>

                                        <tbody id="tablebody2">
                                            

                                              

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









    
        <div className="chat-box">
            <div className="chat-head">
                <h2>Notification</h2>
                <img src="https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png" title="Expand Arrow" width="16" />
            </div>
            <div className="chat-body">
                <div className="msg-insert" id="notice_board2">
 
  
</div>
                
            </div>
        </div>
 





{/*<div className="frame-notification">
  <div className="panel-notification">
    <div className="header flex">
            <div className="menu-icon">
                <div className="dash-top"></div>
                <div className="dash-bottom"></div>
                <div className="circle circle-1"></div>
            </div>
            <span className="title">Notifications</span>
        </div>
        
        <div className="notifications clearfix">
            <div className="line"></div>
            <div className="notification">
                <div className="circle"></div>
                <span className="time">9:24 AM</span>
                <p><b>John Walker</b> posted a photo on your wall.</p>
            </div>
            
        </div>
  </div>
    
    <div className="menu-notification">
        <ul>
            <li className="hvr-underline-from-left"><span className="fa fa-dashboard"></span>Notifications</li>
            <li className="hvr-underline-from-left"><span className="fa fa-user"></span>Log Trails</li>
            <li className="hvr-underline-from-left"><span className="fa fa-bell"></span>To Do List</li>
            <li className="hvr-underline-from-left"><span className="fa fa-comments"></span>Messages</li>
        </ul>
    </div>
    
</div> */}





            </div>

	  );

	}
}