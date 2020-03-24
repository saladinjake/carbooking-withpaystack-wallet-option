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

        <div className="content-page">
          
            <div className="content">
                <div className="container" id="admin">

                 
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
                                    any users.
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
                                            data-overlayColor="#36404a"><i className="md md-add"></i> Add User</a>
                                    </div>
                                </div>

                                <div className="table-responsive table-bordered">
                                    <table className="table table-actions-bar" id="demo-foo-pagination" data-page-size="5" 
                                           className="table toggle-circle table-hover">
                                        <thead>

                                            <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Email</th>
                                                    <th>Phone Numbers</th>
                                                    <th>Total Cars</th>
                                                    <th>Status</th>
                                                    <th style={{minWidth: "90px"}}>Action</th>
                                            
                                        </thead>

                                        <tbody>
                                            

                                                 <tr>                                              
                                                    <td>Tomaslau</td>
                                                    <td>Kelo</td>
                                                    <td><a href="#">tomaslau@dummy.com</a></td>
                                                    <td>
                                                        <b><a href="" className="text-dark"><b>09082992001</b></a> </b>
                                                    </td>
                                                    
                                                    <td>3</td>
                                                    <td><span className="label label-success">Active</span></td>
                                                    <td>
                                                        <a href="./admin-partners-detail" className="table-action-btn"><i className="md md-edit"></i></a>
                                                        <a href="#" className="table-action-btn"><i className="md md-close"></i></a>
                                                    </td>
                                                </tr>
                                                
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div> 


                    </div>





                </div> 

            </div> 




           <div id="custom-modal" className="modal-demo">
            <button type="button" className="close" onclick="Custombox.close();">
                <span>&times;</span><span className="sr-only">Close</span>
            </button>
            <h4 className="custom-modal-title">Add User</h4>
            <div className="custom-modal-text text-left">
                <form role="form">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">First Name</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Enter name" />
                    </div>

                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Last Name</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Enter name" />
                    </div>

                    <div className="form-group col-sm-6">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </div>

                    <div className="form-group col-sm-6">
                        <label htmlFor="position">Phone number</label>
                        <input type="text" className="form-control" id="position" placeholder="Enter number" />
                    </div>

                    <div className="form-group col-sm-6">
                        <label htmlFor="position">User Certificate Number</label>
                        <input type="text" className="form-control" id="carYear" placeholder="e.g CM-USER-CERT-2020884" />
                    </div>


                    <div className="form-group col-sm-6">
                        <label htmlFor="position">Status</label>
                        <select className="selectpicker" data-style="btn-white">
                            <option>Active</option>
                            <option>Disabled</option>
                            <option>Suspended</option>
                        </select>
                    </div>

                    <div className="form-group col-sm-12"></div>

                    <button type="submit" className="btn btn-default waves-effect waves-light m-l-10">Save</button>
                    <button type="button" className="btn btn-danger waves-effect waves-light m-l-10">Cancel</button>
                    

                </form>
            </div>
        </div>




            </div> 

           


	  );

	}
}