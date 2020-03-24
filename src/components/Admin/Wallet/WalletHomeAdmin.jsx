import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export class WalletAdmin extends Component {


  componentDidMount() {
     let mainNav;
    if (document.getElementById("loginpage") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="none";
            mainNav.style.opacity=0;

          }

  }

  render() {
   
    return (
      <React.Fragment>

     

       <div className="content-page" id="first-view">
                <div className="content" id="admin" data-pageid="admin-wallets">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title"></h4>
                                <p className="text-muted page-title-alt"></p>
                            </div>
                        </div>

                      

                        
                        
                                      <div className="row">
                            
                            <div className="col-lg-12 card-box">
                            <div className="col-lg-2 pull-left">

                            <a style={{display: "none"}}  href="#" className="btn btn-default waves-effect waves-light pull-left m-b-10"  data-toggle="modal" data-target="#con-close-modal"><i className="md  md-add hover-target"  data-toggle="modal" data-target="#con-close-modal"></i> Top up Wallet</a></div>

                             
                            <div style={{display: "none"}} className="col-lg-8"><h4 className="m-b-10 header-title">Wallet balance<span className="m-l-10 text-purple "><b id="new-balance"></b></span></h4></div>
                            <div className="col-lg-2 pull-right"><div className="btn-group pull-right m-t-0">
                                    <button type="button" className="btn btn-inverse dropdown-toggle waves-effect waves-light"
                                        data-toggle="dropdown" aria-expanded="false">Options <span className="m-l-5"><i
                                                className="md md-expand-more"></i></span></button>
                                    <ul className="dropdown-menu drop-menu-right" role="menu">
                                        <li><a href="./admin-paid-history">Payment History</a></li>
                                        <li><a href="./admin-quote-subscription-history">Quotation History</a></li>
                                        <li><a href="./admin-wallet">Wallet History</a></li>
                                        <li className="divider"></li>
                                       
                                    </ul>
                                </div> </div>
                            <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                            <div className="col-lg-12 m-t-10" >
                                <div className="card-box">
                                   
    
                                    <table id="demo-foo-pagination" data-page-size="5" 
                       data-search="true" className="table toggle-circle table-hover">
                    <thead>
                      <tr>
                        <th data-toggle="true"> Date</th>
                        <th> Reference Code</th>
                        <th data-hide="phone"> Username </th>
                        <th data-hide="phone"> Total Amount </th>
                        <th data-hide="phone"> Email</th>
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
                </div>



                <div style={{display:"none"}} className="content-page fade in" id="second-view">
           
            <div className="content">
                <div className="container" >

                   
                
                        


                    <div className="row">
                            
                            <div className="col-lg-12 card-box">
                            <div className="col-lg-2 pull-left"><a href="#" 
                            className="btn btn-default waves-effect waves-light pull-left m-b-10 goback"><i className="md  md-chevron-left" id="goback"></i> Back to List</a> </div>
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Wallet Detail <span className="m-l-10 text-purple font-13"><b id="user-id"></b></span></h4></div>
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



export default WalletAdmin;





