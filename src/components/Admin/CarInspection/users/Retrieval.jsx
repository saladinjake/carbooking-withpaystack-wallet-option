import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';
const activeUrl ="http://localhost:12000/api/v1";


export  default class AdminCarRequest extends Component {
  
  

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
                <div className="container" id="admin" data-pageid="admin-retrievals">
                    <div  style={{display: "none"}} id="add-new"></div>
                 
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="page-title"></h4>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Users</li>
                            </ol>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-box">
                                <h4 className="m-t-0 header-title"><b>Retrieval Management</b></h4>
                                <p className="text-muted m-b-30 font-13">
                                    Please select the car you need to revoke.
                                </p>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <form role="form">
                                            <div className="form-group contact-search m-b-30">
                                                <input type="text" id="search" className="form-control product-search"
                                                    placeholder="Search..." />
                                                <button type="submit" className="btn btn-white"><i
                                                        className="fa fa-search"></i></button>
                                            </div> 
                                        </form>
                                    </div>
                                    <div className="col-sm-4" style={{display: "none"}}>
                                        <a href="./admin-inspection-detail" 
                                            className="btn btn-default btn-md waves-effect waves-light m-b-30"
                                           ><i className="md md-add"></i> Add Inspection</a>
                                    </div>
                                </div>

                                <div className="table-responsive table-bordered">

                                    <div id="tablebody1">
                                            



                                        </div>

                                    <table style={{display:"none"}} className="table table-actions-bar" id="demo-foo-pagination" data-page-size="5" 
                                           className="table toggle-circle table-hover">
                                        

                                        
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





                </div> 

            </div> 


                  



            </div> 












                       




                            <div className="m-b-15" id="main-display">
                                

                                





                            </div>
















            <div style={{display:"none"}} className="content-page" id="second-view">
           
            <div className="content">
                <div className="container" >

                   
                
                        


                    <div className="row">
                            
                            <div className="col-lg-12 card-box">
                            <div className="col-lg-2 pull-left"><a href="#" 
                            className="btn btn-default waves-effect waves-light pull-left m-b-10 goback"><i className="md  md-chevron-left"></i> Back to List</a> </div>
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Car Detail <span className="m-l-10 text-purple font-13"><b id="user-id"></b></span></h4></div>
                            <div className="col-lg-2 pull-right"><div className="btn-group pull-right m-t-0">
                                    
                                </div> </div>
                            <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                            <div className="col-lg-6 m-t-10" >
                                <div className="card-box">
                                   
                                     <div id="modalbody1"></div>
                                   
                                </div>
                            </div>


                            <div className="col-lg-6 m-t-10" >
                                <div className="card-box">
                                   
                                        <div className="card-box">
                                            <img src="" id="car" className="responsive"/>

                                           <span id="notinuse" className="label label-danger">Car has been revoked</span>

                                           <span id="inuse" className="label label-success">Car still in use</span>
                                        </div>

                                        

                                        
                                    
                                </div>

                                <br/><br/><br/>
                                <button id="reclaim" className="btn btn-danger  pull-left">Revoke Car</button>


                                        <button  id="unreclaim" className="btn btn-success pull-right">Reclaim</button>


                                {/*<h4>Car Retrieval Form</h4>
                                <form className="form-horizontal" role="form" data-parsley-validate noValidate>
                                
                                        <div className="form-group col-sm-12">
                                                <label htmlFor="" className="col-sm-4 control-label">Retrieval Status</label>
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
                                                <input disabled type="text" required  parsley-type="text" className="form-control" id="car_id" />
                                            </div>
                                        </div>

    
                                        

                                        

    
                                        <div className="form-group col-sm-12">
                                            <label htmlFor="" className="col-sm-4 control-label">Partner's Email </label>
                                            <div className="col-sm-7">
                                                <input disabled type="text" id="partneremail" parsley-type="text" className="form-control" />
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
                                                <input disabled type="date" required  parsley-type="text" className="form-control" id="created_date"  />
                                            </div>
                                        </div>

                                        

                                        <div className="form-group col-sm-12">
                                            <label htmlFor="" className="col-sm-4 control-label">Comment</label>
                                            <div className="col-sm-7">
                                                <textarea type="text" required parsley-type="text" className="form-control" id="comment" ></textarea>
                                            </div>
                                        </div>

    
                                        <div className="form-group">
                                            <div className="col-sm-offset-4 col-sm-8">
                                                <button type="submit" id="savemeq" className="add-opt btn btn-primary waves-effect waves-light">
                                                    Update Changes
                                                </button>
                                               
                                            </div>
                                        </div> 
                                    </form>*/}



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