import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';
const activeUrl ="http://localhost:12000/api/v1";


export  default class CarInspectionDetail extends Component {
  
  

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
                <div className="container" id="admin" data-pageid="admin-inspection-add">

                   
                
                        


                    <div className="row">
                            
                            <div className="col-lg-12 card-box">
                           
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Add Inspection  <span className="m-l-10 text-purple font-13"><b></b></span></h4></div>
                            <div className="col-lg-2 pull-right"><div className="btn-group pull-right m-t-0">
                                   
                                    
                                </div> </div>
                            <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                            <div className="col-lg-6 m-t-10" >
                                <div className="card-box">
                                   
    
                                    <form className="form-horizontal" role="form" data-parsley-validate noValidate>
                                
                                        <div className="form-group col-sm-12">
                                                <label htmlFor="" className="col-sm-4 control-label">Status</label>
                                                <div className="col-sm-7">
                                                    <select className="form-control" id="status">
                                                        <option>Pending</option>
                                                        <option>Completed</option>
                                                        
                                                    </select>
                                                </div>
                                        </div>

                                        <div className="form-group col-sm-12">
                                            <label htmlFor="" className="col-sm-4 control-label">Car ID</label>
                                            <div className="col-sm-7">
                                                <input type="text" required  parsley-type="text" className="form-control" id="car_id" />
                                            </div>
                                        </div>

    
                                        

                                         <div className="form-group col-sm-12">
                                            <label htmlFor="" className="col-sm-4 control-label">Partner's Email</label>
                                            <div className="col-sm-7">
                                               <select className="form-control" id="email">
                                                 <option>--Select an email user--</option>
                                                        
                                                    </select>
                                            </div>
                                        </div>

    
                                        <div className="form-group col-sm-12">
                                            <label htmlFor="" className="col-sm-4 control-label">Partner's Username </label>
                                            <div className="col-sm-7">
                                                <select className="form-control" id="username" disabled>
                                                       
                                                    </select>
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-12">
                                            <label htmlFor="amount" className="col-sm-4 control-label">Phone Number</label>
                                            <div className="col-sm-7">
                                                    <input disabled type="text" id="phone_number" parsley-type="text" className="form-control" />
                                                </div>
                                            
                                        </div>
    
                                        <div className="form-group col-sm-12">
                                            <label htmlFor="" className="col-sm-4 control-label">Inspection Date</label>
                                            <div className="col-sm-7">
                                                <input type="date" required  parsley-type="text" className="form-control" id="created_date"  />
                                            </div>
                                        </div>

                                        <div className="form-group col-sm-12">
                                                <label htmlFor="inputEmail3" className="col-sm-4 control-label">Time of Inspection</label>
                                                <div className="col-sm-7">
                                                    <input type="time" required parsley-type="email" className="form-control" id="time"  />
                                                </div>
                                            </div>

                                        <div className="form-group col-sm-12">
                                            <label htmlFor="" className="col-sm-4 control-label">Comment</label>
                                            <div className="col-sm-7">
                                                <textarea type="text" required parsley-type="text" className="form-control" id="description" ></textarea>
                                            </div>
                                        </div>

    
                                        <div className="form-group">
                                            <div className="col-sm-offset-4 col-sm-8">
                                                <button type="submit" id="savemesa" className="add-opt btn btn-primary waves-effect waves-light">
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