import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';
const activeUrl ="http://localhost:12000/api/v1";


export  default class PartnerDetail extends Component {
  
  

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

       <div className="content-page">
           
            <div className="content">
                <div className="container" id="admin" data-pageid="admin-partners-detail">

                   
                
                        


                    <div className="row">
                            
                            <div className="col-lg-12 card-box">
                            <div className="col-lg-2 pull-left"><a href="#" 
                            className="btn btn-default waves-effect waves-light pull-left m-b-10"><i className="md  md-chevron-left"></i> Back to List</a> </div>
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Partner Detail <span className="m-l-10 text-purple font-13"><b>CMUSER2020003</b></span></h4></div>
                            <div className="col-lg-2 pull-right"><div className="btn-group pull-right m-t-0">
                                    <button type="button" className="btn btn-inverse dropdown-toggle waves-effect waves-light"
                                        data-toggle="dropdown" aria-expanded="false">Options <span className="m-l-5"><i
                                                className="md md-expand-more"></i></span></button>
                                    <ul className="dropdown-menu drop-menu-right" role="menu">
                                        <li><a href="#">Delete</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </div> </div>
                            <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                            <div className="col-lg-6 m-t-10" >
                                <div className="card-box">
                                   
    
                                    <form className="form-horizontal" role="form" data-parsley-validate noValidate>
                                
                                        <div className="form-group col-sm-12">
                                                <label for="" className="col-sm-4 control-label">Status</label>
                                                <div className="col-sm-7">
                                                    <select className="form-control">
                                                        <option>Active</option>
                                                        <option>Disabled</option>
                                                        <option>Suspended</option>
                                                    </select>
                                                </div>
                                        </div>
    
                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">First Name</label>
                                            <div className="col-sm-7">
                                                <input type="text" required parsley-type="text" className="form-control" id="" value="Tomaslau" />
                                            </div>
                                        </div>
    
                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">Last Name</label>
                                            <div className="col-sm-7">
                                                <input type="text" required parsley-type="text" className="form-control" id="" value="Kelo" />
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-12">
                                            <label for="amount" className="col-sm-4 control-label">Phone Number</label>
                                            <div className="col-sm-7">
                                                    <input type="text" required parsley-type="text" className="form-control" value="0804587965" />
                                                </div>
                                            
                                        </div>
    
                                        <div className="form-group col-sm-12">
                                            <label for="" className="col-sm-4 control-label">User Name</label>
                                            <div className="col-sm-7">
                                                <input type="text" required parsley-type="text" className="form-control" id="" value="Tomaslau Kelo" />
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-12">
                                                <label for="inputEmail3" className="col-sm-4 control-label">Email Address</label>
                                                <div className="col-sm-7">
                                                    <input type="email" required disabled parsley-type="email" className="form-control" id="inputEmail3" value="tomaslau@dummy.com" />
                                                </div>
                                            </div>

                                        <div className="form-group col-sm-12">
                                                <label for="" className="col-sm-4 control-label">Total Cars</label>
                                                <div className="col-sm-7">
                                                    <input type="text" required disabled parsley-type="text" className="form-control" id="" value="3" />
                                                </div>
                                            </div>
    
                                        <div className="form-group">
                                            <div className="col-sm-offset-4 col-sm-8">
                                                <button type="submit" className="btn btn-primary waves-effect waves-light">
                                                    Save Changes
                                                </button>
                                                
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