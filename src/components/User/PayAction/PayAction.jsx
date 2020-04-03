import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './plan.scss';



export class PayAction extends Component {
  constructor(props) {
    super(props);
  }

  planSteps(){
    let i, j;
    let accordion = document.getElementsByClassName('faded-into');
    for (i = 0; i < accordion.length; i++) {
      
        for (j = 0; j < accordion.length; j++) {
          accordion[j].style.display = "none";
        }
        accordion[0].classList.toggle('active');
        accordion[0].style.display="block" 
    }
  }

  

  componentDidMount() {
     let mainNav;
    if (document.getElementById("loginpage") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="none";
            mainNav.style.opacity=0;

    }

 

    

  }


  renderCars(){
 
  }

  renderPlan(){
     
   
  }

  filter(e){
    search = e.value.toLowerCase();
    console.log(e.value)
    document.querySelectorAll('.cars-info').forEach(function(row){
        var target = row.querySelector("h4 a");
        text = target.innerText.toLowerCase();

        var element = target.parentNode.parentNode.parentNode.parentNode;
           element.style.border="3px solid blue"
        if(text.match(search)){
            element.style.display="block"
        } else {
            element.style.display="none"
        }
    })
  }

  render() {
   
    return (

    <React.Fragment>
      

      <div className="content-page"  id="spread-out" >
            
                <div className="content" id="pay-action">
                    <div className="container" style={{backgroundColor: "#fff"}}>




                    <div className="react-home react-checkout" style={{backgroundColor: "#fff"}}>
            <div className="react-input-box" style={{backgroundColor: "#fff"}}>

                <div className="container"  style={{backgroundColor: "#fff"}}>
                    <div className="stepwizard col-md-offset-3 col-sm-offset-1 col-xs-offset-1" style={{backgroundColor: "#fff"}}>
                        <div className="step-row setup-panel" id="wizardControl">
                            <div className="step pay">
                                <a href="#step-1" type="button" className="btn btn-primary button-no-gradient btn-circle btn-step">1</a>
                                <p>Details</p>
                            </div>
                            <div className="step pay">
                                <a href="#step-2" type="button" className="btn btn-default button-no-gradient btn-circle" disabled="disabled">2</a>
                                <p>Summary</p>
                            </div>
                            <div className="step pay">
                                <a href="#step-3" type="button" className="btn btn-default button-no-gradient btn-circle" disabled="disabled">3</a>
                                <p>Approval</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <form role="form" action="#" method="post">

                        <div className="row setup-content well card" id="step-1">

                            <div className="row">

                                <div className="col-md-3 text-center" id="building-details">
                                    <div className="panel panel-info">
                                        <div className="panel-heading">Review Payments Details</div>
                                            <div className="panel-body">
                                                <div className="table-responsive project-list">
                                                    <table className="table table-striped"><tbody  ><tr >
                                                        <td >Amount</td>
                                                            <td >NGN<strong id="amount"></strong></td>
                                                    </tr>
                                                    <tr >
                                                        <td>Reference</td>
                                                            <td ><strong id="reference"></strong></td>
                                                    </tr></tbody></table>
                                                </div>
                                            </div>
                                                
                                    </div>
                                </div>

                               

                                <div className="col-md-9">

                                    <div className="col-md-12"><h4>Payment Method</h4></div>

                                    <div className="col-md-6">
                                        <div className="section form-group">
                                            <label for="timeframe" className="field-label control-label">Payment Method *</label>
                                            <label className="field select">
                                               <select name="industry" tabindex="9" required="required">
                                                  <option value="" selected="selected">select a payment method</option>
                                                  <option value="Paystack">Paystack</option>
                                                 <option value="Ewallet">Wallet</option>
                                                 
                                               </select>
                                            </label>
                                        </div>
                                    </div>


                                </div>

                            </div>

                          <button className="pull-right btn nextBtn next" id="next-link" aria-label="Right Align" type="button">Next
                              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
                          <button className="pull-right btn save" type="button" >Previous</button>

                        </div>

                        <div className="row setup-content well card" id="step-2">

                          <div className="row">

                            <div className="col-md-3 text-center" id="building-details">
                                <div className="panel panel-info">
                                    <div className="panel-heading">Review Billing Details</div>
                                        <div className="panel-body">
                                            <div className="table-responsive project-list">
                                                <table className="table table-striped"><tbody  ><tr >
                                                    <td >Amount</td>
                                                        <td>NGN<strong id="amount2"></strong></td>
                                                </tr>
                                                <tr >
                                                    <td>Reference</td>
                                                        <td><strong id="reference2"></strong></td>
                                                </tr></tbody></table>
                                            </div>
                                        </div>
                                            
                                </div>
                            </div>

                            

                            <div className="col-md-6">

                              <div className="col-md-12"><h4>Your Information</h4></div>

                              <div className="col-md-6">
                                  <div className="section form-group">
                                      <label className="field-label control-label">Email *</label>
                                      <input id="email" type="email" className="form-control" placeholder="your@email.com" required="required" />
                                  </div>
                              </div>

                              <div className="col-md-6">
                                  <div className="section form-group">
                                      <label className="field-label control-label">Phone *</label>
                                      <input id="phone" type="text" name="phone" className="form-control" placeholder="08068291106" required="required"  />
                                  </div>
                              </div>

                              <div className="col-md-12"><h4>Plan /Quotation Detail</h4></div>

                              <div className="col-md-6">
                                  <div className="section form-group">
                                      <label className="field-label control-label">Plan ID *</label>
                                      <input id="plan_id" type="text" className="form-control" placeholder="CMT-PLAN-4343" required="required" />
                                  </div>
                              </div>

                              <div className="col-md-6">
                                  <div className="section form-group">
                                      <label className="field-label control-label">Quotation ID</label>
                                      <input id="quotation_id" type="text" className="form-control" placeholder="CMT-QUOTE-IOE" />
                                  </div>
                              </div>

                              <div className="col-md-6">
                                  <div className="section form-group">
                                      <label className="field-label control-label">Username *</label>
                                      <input id="username" type="text" className="form-control" placeholder="Username" required="required" />
                                  </div>
                              </div>

                              <div className="col-md-6">
                                  <div className="section form-group">
                                      <label className="field-label control-label">Wallet Balance</label>
                                      <input id="users-balance" type="text" className="form-control" placeholder="0.00" />
                                  </div>
                              </div>

                            </div>

                          </div>

                          <button className="pull-right btn nextBtn next" aria-label="Right Align" type="button">Next <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
                          
                          <button className="pull-right btn prevBtn prev" aria-label="Left Align" type="button">
                              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Previous</button>

                        </div>

                        <div className="row setup-content well card" id="step-3">

                          <div className="row">

                              <div className="col-md-6">

                                  <div className="col-md-6 text-center" id="building-details">
                                      <div className="panel panel-info">
                                          <div className="panel-heading">Main Balance</div>
                                              <div className="panel-body">
                                                  <div className="table-responsive project-list">
                                                      <table className="table table-striped"><tbody  ><tr >
                                                          <td>TOTAL</td>
                                                              <td >NGN <strong id="mainBalance"></strong></td>
                                                      </tr>

                                                      </tbody>

                                                      </table>
                                                      
                                                  </div>
                                              </div>
                                               
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="panel panel-info"  id="selected-options">
                                          <div className="panel-heading">Deduction Amount</div>
                                          <div className="panel-body">
                                              <div className="table-responsive project-list">
                                                  <table className="table table-striped">
                                                      <tbody>
                                                      <tr>
                                                          <td>Deduction Amount</td>
                                                          <td >NGN<strong id="deduction">0</strong></td>
                                                      </tr>
                                                      
                                                      </tbody>
                                                  </table>
                                              </div>
                                          </div>
                                      </div>
                                    
                                      <div className="panel panel-info">
                                          <div className="panel-heading">New Balance</div>
                                          <div className="panel-body">
                                              <table className="table table-striped">
                                                      <tbody>
                                                      <tr>
                                                          <td>New balance</td>
                                                          <td >NGN<strong id="newbalance">0</strong></td>
                                                      </tr>
                                                      
                                                      </tbody>
                                                  </table>
                                          </div>
                                      </div>
                                    
                                  </div>
                              </div>

                              <div className="col-md-6">

                                  <div className="col-md-6">

                                      <h4>Review and Submit</h4>

                                      <p>
                                        <b>You Are about to make payments<br />
                                        from your wallet.<br />
                                        Your wallet account would be deducted<br />
                                        on successful transaction</b><br />
                                        
                                      </p>

                                     
                                      

                                  </div>

                                  <div className="col-md-6">

                                      <h4>Process my payments</h4>

                                      
                                  </div>

                                  

                                  

                                  <div className="col-md-12">
                                    <div className="panel panel-success">
                                      <div  id="no-obligation-panel" className="panel-body text-center">
                                        <i>No obligation cancellation policy!</i>  <span className="glyphicon glyphicon-hand-left"></span>
                                      </div>
                                    </div>
                                  </div>

                              </div>

                          </div>

                          <div className="row">

                            <div className="col-md-12">
                                <div className="safe-purchase">
                                    
                                </div>
                            </div>

                          </div>

                          <button id="deduction-action" data-url="/drop-wallet-balance" className="pull-right btn btn-submit next" type="submit">Process <span className="glyphicon glyphicon-ok"></span></button>
                          <button className="pull-right btn prevBtn prev" aria-label="Left Align" type="button">
                              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Previous</button>

                        </div>

                    </form>

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



export default PayAction;
