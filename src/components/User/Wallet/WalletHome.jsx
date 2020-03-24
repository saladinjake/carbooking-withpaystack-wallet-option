import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export class Wallet extends Component {


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

      <a id="portfolio" style={{textAlign:"center",fontSize:"15px",marginTop:"-20px"}} href="#" className="link-to-portfolio hover-target"  data-toggle="modal" data-target="#con-close-modal"><i className="md md-add text-info"></i></a>

       <div className="content-page" id="spreadout">
                <div className="content" id="wallet-page">
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

                            <a   href="#" className="btn btn-default waves-effect waves-light pull-left m-b-10"  data-toggle="modal" data-target="#con-close-modal"><i className="md  md-add hover-target"  data-toggle="modal" data-target="#con-close-modal"></i> Top up Wallet</a></div>

                             
                            <div className="col-lg-8"><h4 className="m-b-10 header-title">Wallet balance<span className="m-l-10 text-purple "><b id="new-balance"></b></span></h4></div>
                            <div className="col-lg-2 pull-right"><div className="btn-group pull-right m-t-0">
                                    <button type="button" className="btn btn-inverse dropdown-toggle waves-effect waves-light"
                                        data-toggle="dropdown" aria-expanded="false">Options <span className="m-l-5"><i
                                                className="md md-expand-more"></i></span></button>
                                    <ul className="dropdown-menu drop-menu-right" role="menu">
                                        <li><a href="./paid-history">Payment History</a></li>
                                        <li><a href="./quote-subscription-history">Quotation History</a></li>
                                        <li><a href="./wallet">Wallet History</a></li>
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
                    <tbody id="tablebodyx">
                     
                      
                      
                      
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



          <div id="con-close-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
                                        <div className="modal-dialog"> 
                                            <div className="modal-content"> 
                                                <div> 
                                                        <div className="info-msg">
                                                                <i className="fa fa-info-circle"></i>
                                                                
                                                              </div>

                                                              <div className="success-msg" id="msg-suc">
                                                                <i className="fa fa-check"></i>
                                                                
                                                              </div>

                                                              <div className="warning-msg">
                                                                <i className="fa fa-warning"></i>
                                                                
                                                              </div>

                                                              <div className="error-msg" id="msg" >
                                                                <i className="fa fa-times-circle"></i>
                                                                
                                                               </div>
      
            
                                                    <button  type="button" className="close" data-dismiss="modal" aria-hidden="true" id="close-modalbtn">×</button> 
                                                    <h4 id="title-header" className="modal-title"></h4> 
                                                    
                                                </div> 
                                                <div className="modal-body" id="relink"> 
                                                    <div className="row"> 
                                                        <div className="col-md-6"> 
                                                            <div className="form-group"> 
                                                                
                                                                <input type="hidden" className="form-control" id="field-1" placeholder=""  /> 
                                                            </div> 
                                                        </div> 
                                                        <div className="col-md-6"> 
                                                            <div className="form-group"> 
                                                                
                                                                <input type="hidden" className="form-control" id="field-2" placeholder="" /> 
                                                            </div> 
                                                        </div> 
                                                    </div> 
                                                    <div className="row"> 
                                                        <div className="col-md-12"> 
                                                            <div className="form-group"> 
                                                                <label htmlFor="field-3" className="control-label">Amount</label> 
                                                                <input type="text" className="form-control" id="field-3" placeholder="" /> 
                                                            </div> 
                                                        </div> 
                                                    </div> 

                                                    <div className="form-group"> 
                                                               
                                                                <input type="hidden" className="form-control" id="field-4" placeholder="" /> 
                                                            </div> 
                                                     
                                                </div> 
                                                <div className="modal-footer"> 
                                                    <button type="button" className="btn btn-danger waves-effect" data-dismiss="modal" style={{width:"120px",height:"40px",fontSize:"12px"}}>Cancel</button> 
                                                    <button id="tou_up" type="button" className="btn btn-default waves-effect waves-light topup" style={{width:"120px",height:"40px",fontSize:"12px"}}>Topup</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
            
            

            </React.Fragment>
    );
  }

}



export default Wallet;





