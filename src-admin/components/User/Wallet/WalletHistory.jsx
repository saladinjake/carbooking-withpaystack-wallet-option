import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItineraryHistoryList from '../History/ItineraryHistoryList'

const activeUrl ="http://localhost:12000/api/v1";


export  default class WalletHistory extends Component {
  
  

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
      

    <div className="content-page" id="spread-out">
       
        <div className="content animated animatedFadeInUp fadeInUp " id="payment-page">
            <div className="container">

               
                

          
        
            <div className="row">
              <div className="col-sm-12">
                <div className="card-box">
                  <h4 className="m-t-0 header-title"><b>Payment History</b></h4>
                

                  <div className="form-inline m-b-20">
                      <div className="row">
                        
                        <div className="col-sm-6 text-lg-center text-right pull-right">
                          <div className="form-group">
                              <input id="demo-foo-search" type="text" placeholder="Search" className="form-control input-sm" autocomplete="on" />
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
                    <tbody id="tablebody1a">
                      
                      
                      
                      
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
           
            
            
            
            
    );
  }

}






