import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';
const activeUrl ="http://localhost:12000/api/v1";


export  default class ProfileDetail extends Component {
  
  

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
                <div className="container" id="admin" data-pageid="admin-settings-email">

                   
                
                     <div className="row">
                        <div className="col-sm-12">
                            <h4 className="page-title"></h4>
                            <ol className="breadcrumb">
                                <li><a href="./">Home</a></li>
                                <li className="active">Users</li>
                            </ol>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-box">
                                <h4 className="m-t-0 header-title"><b>Email Settings</b></h4>
                                <p className="text-muted m-b-30 font-13">
                                    Admin can manage the plan registered on the System. Admin can modify
                                    any global settings.
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
                                    
                                </div>

                               <div className="table-responsive table-bordered">
                                    <table className="table table-actions-bar" id="demo-foo-pagination" data-page-size="5" 
                                           className="table toggle-circle table-hover">
                                        <thead>
                                            <tr>
                                                
                                                <th className="col-lg-2">Api Mode</th>
                                                <th className="col-lg-2">Test Secret Key</th>
                                                <th className="col-lg-2">Test Public Key</th>
                                                <th className="col-lg-4">Live Secret Key</th>
                                                <th className="col-lg-2">Live Public Key</th>
                                    
                                                <th style={{minWidth: "90px"}}>Action</th>
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
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Email Detail <span className="m-l-10 text-purple font-13"><b id="user-id"></b></span></h4></div>
                            <div className="col-lg-2 pull-right"><div className="btn-group pull-right m-t-0">
                                </div> </div>
                            <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                            <div className="col-lg-6 m-t-10" >
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