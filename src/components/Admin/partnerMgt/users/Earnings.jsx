import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';
const activeUrl ="http://localhost:12000/api/v1";


export  default class Partners extends Component {
  
  

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
                <div className="container" id="admin" data-pageid="admin-earnings">

                 
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
                                <h4 className="m-t-0 header-title"><b>Partners Management</b></h4>
                                <p className="text-muted m-b-30 font-13">
                                    Admin can manage the users registered on the System. Admin can add/modify/delete
                                    any partners earnings.
                                </p>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <form role="form">
                                            <div className="form-group contact-search m-b-30">
                                                <input type="text" id="search" className="form-control"
                                                    placeholder="Search..." />
                                                <button type="submit" className="btn btn-white"><i
                                                        className="fa fa-search"></i></button>
                                            </div> 
                                        </form>
                                    </div>
                                    <div className="col-sm-4">
                                        <a href="#custom-modal" id="add-new"
                                            className="btn btn-default btn-md waves-effect waves-light m-b-30"
                                            data-animation="fadein" data-plugin="custommodal" data-overlaySpeed="200"
                                            data-overlayColor="#36404a"><i className="md md-add"></i> Add Earnings</a>
                                    </div>
                                </div>

                                <div className="table-responsive table-bordered">
                                    <table className="table table-actions-bar" id="demo-foo-pagination" data-page-size="5" 
                                           className="table toggle-circle table-hover">
                                        <thead>

                                            <th>Date</th>
                                                    
                                                    <th>Email</th>
                                                    <th>Bank Account</th>
                                                    <th>Amount Paid</th>
                                                    <th>Car Id</th>
                                                    <th>Vehicle Plate No</th>
                                                    <th>Status</th>
                                                    <th style={{minWidth: "90px"}}>Action</th>
                                            
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





                </div> 

            </div> 




           


              

            </div> 


















            <div style={{display:"none"}} className="content-page" id="second-view">
           
            <div className="content">
                <div className="container" >

                   
                
                        


                    <div className="row">
                            
                            <div className="col-lg-12 card-box">
                            <div className="col-lg-2 pull-left"><a href="#" 
                            className="btn btn-default waves-effect waves-light pull-left m-b-10 goback"><i className="md  md-chevron-left"></i> Back to List</a> </div>
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Partner Detail <span className="m-l-10 text-purple font-13"><b id="user-id"></b></span></h4></div>
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


                                        <div id="carset"  className="card-box box"  style={{marginTop:"350px"}}>

                                        <button id="close-id"  type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>

                                        
    <img style={{  display: "block",marginLeft: "auto",marginRight: "auto",
  width: "40%"}}  src=""  id="imgcar"  /><br/>

                                          <div style={{marginLeft:"30px", fontSize:"15px"}}>Car Name: <span id="name" ></span></div><br/>

                                          <div   style={{marginLeft:"30px",fontSize:"15px" }}>Car Id: <span id="car_id"></span></div><br/>

                                          <div   style={{marginLeft:"30px", fontSize:"15px"}}>Car Description: <span id="desc"></span></div><br/>

                                           <div   style={{marginLeft:"30px",fontSize:"15px"}}>Plate No:<span id="plate_no"></span></div><br/>

                                           <button id="taken" className="btn btn-success pull-right">Chosen ✓</button>
                                        </div>

                                <div className="card-box" style={{ display:"none"}} id="viewboard">
                                        <h4>Select a car to add earnings</h4>
                                        <hr/>
                                        <div className="card-box" >
                                            <ul id="carsme"></ul>
                                        </div>


                                      
                                    
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

