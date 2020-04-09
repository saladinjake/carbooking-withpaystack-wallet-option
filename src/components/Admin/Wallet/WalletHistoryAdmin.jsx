import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const activeUrl ="http://localhost:12000/api/v1";


export  default class WalletHistoryAdmin extends Component {
  
  

  componentDidMount() {
     let mainNav;
     if (document.getElementById("loggedInOnly") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="block";
            mainNav.style.opacity=1;
    }
  }

  render() {
    const style1 ={
        visibility:"hidden", 
        display:"none"
    }
   
    return (

    <React.Fragment>
      

    <div className="content-page" id="first-view">
       
        <div className="content" id="admin" data-pageid="admin-payments">
            <div className="container">

               
                

          
        
            <div className="row">
              <div className="col-sm-12">
                <div className="card-box">
                  <h4 className="m-t-0 header-title"><b>Payment History</b></h4>
                

                  <div className="form-inline m-b-20">
                      <div className="row">
                        
                        <div className="col-sm-6 text-lg-center text-right pull-right">
                          <div className="form-group">
                              <input id="search" type="text" placeholder="Enter Plan ID..." className="form-control input-sm" autocomplete="on" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    
            
                  <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                  <table id="demo-foo-pagination" data-page-size="5" 
                       data-search="true" className="table toggle-circle table-hover">
                    <thead>
                      <tr>
                        <th data-toggle="true"> Date</th>
                        <th> Reference Code</th>
                        <th data-hide="phone"> Plan ID </th>
                        <th data-hide="phone"> Total Amount </th>
                      
                        <th data-hide="phone"> Quotation ID</th>
                          <th data-hide="phone"> Status </th>
                      </tr>
                    </thead>
                    <tbody id="tablebody1">
                      
                      
                      
                      
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="5">
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






   <div style={{display:"none"}} className="content-page fade in" id="second-view">
           
            <div className="content">
                <div className="container" >

                   
                
                        


                    <div className="row">
                            
                            <div className="col-lg-12 card-box">
                            <div className="col-lg-2 pull-left"><a href="#" 
                            className="btn btn-default waves-effect waves-light pull-left m-b-10 goback"><i className="md  md-chevron-left" id="goback"></i> Back to List</a> </div>
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Payment Detail <span className="m-l-10 text-purple font-13"><b id="user-id"></b></span></h4></div>
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






