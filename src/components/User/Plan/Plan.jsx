import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './plan.scss';



export class Plan extends Component {
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
            
                <div className="content" id="planpage">
                    <div className="container">

                    
                        <div className="row">
                            <div className="col-sm-12">
                                

                                <h4 className="page-title"></h4>
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="#">Ubold</a>
                                    </li>
                                    <li>
                                        <a href="#">Components</a>
                                    </li>
                                    <li className="active">
                                        Form Wizard
                                    </li>
                                </ol>
                            </div>
                        </div>

                             <div className="info-msg">
                    <i className="fa fa-info-circle"></i>
                    
                  </div>

                  <div className="success-msg" id="msg-suc">
                    <i className="fa fa-check"></i>
                    
                  </div>

                  <div className="warning-msg">
                    <i className="fa fa-warning"></i>
                    
                  </div>

                  

                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card-box">
                                    
                                    <p className="text-muted m-b-30 font-13">
                                        
                                    </p>
                                    
                                  
                       
                  <h4  id="msg-" >
                
                    
                  </h4>
                  
                  
                      <div className="slideshow-container">
                      
                        <section className="mySlides fade " id="choose-plan">
                        <h3 className="m-t-0 header-title">Select Plan</h3>
                                                <div className="row pricing-plan p-b-0">
                          <div className="col-md-12">
                            <div className="row deck" id="plan-section">
                              
                                
                            </div> 
                          </div> 
                        </div> 

                        </section>
                                         
                        <section className="mySlides fade" id="choose-cars">
                                   <h3  className="m-t-0 header-title" id="searchResult">Select Car</h3>                  
                        <div className="row m-t-10 m-b-10 ">

                            
                            <div className="col-sm-4 pull-right">
                                
                                    <div className="form-group contact-search m-b-0">
                                        <input type="text" id="search" className="form-control searchme" placeholder="Search here..."  />
                                        <button  type="submit" className="btn btn-white"><i className="fa fa-search"></i></button>
                                    </div> 
                    
                            </div>

                           

                        </div>

                        <br/><br/><br/>
                         

                        <div className="container">
  {/*<div className="row">


                        <div className="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
                                  <div className="MultiCarousel-inner"  >
                                   
                                     
                                      
                                  </div>
                                  <button className="btn btn-primary leftLst">-</button>
                                  <button className="btn btn-primary rightLst">-</button>
                              </div>
 </div> </div>*/}



                                   <div className="car-carousel" id="car-carousel">
   {/*<a className="prev">❮</a>*/}
   <div className="slide-container">
      <ul className="slidesx"  id="travelcars">
       
      </ul>
  </div>
 {/* <a className="next">❯</a>*/}
</div>

</div>

                       



                                                
                                            </section>


                                             
 
   
  
  
                                            
                                            <section className="mySlides fade" id="add-itineries">
                                                 
                      
                        <div className="row row-iti">
                          <div className="col-sm-5 pull-left column-itinerary1">
                            <div className="card-box">
                              <div className="row p-l-0 p-r-0">
                                <div className="col-md-12">
                                <h4 className="m-t-0 header-title text-custom "><b>Add Itinerary</b></h4>
                                
                              <p className="text-muted m-b-30 font-18">
                                
                              </p>
                                  <h4 className="m-t-0 header-title"><b></b></h4>
                                  <p className="text-muted m-b-30 font-13">
                                  
                                  </p>
                                  
                                  <form role="form">
                                    
                                    <div className="form-group">
                                      <label htmlFor="inputDestination">Pickup Location</label>
                                      <input type="text" className="form-control" id="location" placeholder="Enter Pickup Location" data-container="body" title="" data-toggle="popover" data-placement="top" data-content="Please note that a car will be available 24 to 48 hours after itinerary is saved." data-original-title="" />
                                      
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="inputDestination">Destination</label>
                                      <input type="text" className="form-control" id="destination" placeholder="Enter Destination" />
                                    </div>
                                      <div className="col-md-12 col-lg-12 p-l-0 p-r-0 ">
                                    
                                      
                                      <div className="">
                                        
                                        <div className="form-group col-xs-12  p-l-0">
                                        <label className="control-label">Enter Date</label>
                                        <input type="date" id="start" className="form-control" placeholder="mm/dd/yyyy" />
                                        </div>
                                      </div>
                                      <div className="">
                                        <div className="form-group col-xs-12 p-l-0">
                                        <label className="control-label">Enter Time</label>
                                        <input id="end" type="time" className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label">Select Driver Option</label>
                                      <div>
                                        <select className="form-control selectpicker show-tick" data-style="btn-white" id="driver-option" defaultValue="driver">
                                          <option value="driver">I would like a driver</option>
                                          <option value="self-driven">I would like to drive myself</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div id="self-driven-fields">
                                    <div className="form-group">
                                      <label htmlFor="inputDestination" >Drive Test Certificate ID</label>
                                      <input type="text" value="" className="form-control" id="drive-test-certificate" placeholder="Drive Test Certificate ID"  readOnly/>
                                    </div>

                                      <div id="plan-category" style={{display:"none"}}>
                                    <div className="form-group">
                                      <label htmlFor="inputDestination" >Plan Type</label>
                                      <input disabled type="text" value="" className="form-control" id="plan_name" placeholder="" readOnly />
                                    </div>
                                    </div>

                                    <div id="plan-category">
                                    <div className="form-group" style={{display:"none"}}>
                                      <label htmlFor="inputDestination" >Plan Name</label>
                                      <input disabled type="text" value="" className="form-control" id="plan_category" placeholder="" readOnly />
                                    </div>
                                    </div>

                                    <div className="col-md-12 col-lg-12 p-l-0 p-r-0 " id="drive-test-fields">
                                      <div className="">
                                        <div className="form-group col-xs-12 col-md-6 col-sm-6 p-l-0">
                                        <label className="control-label">Test Center</label>
                                          <select className="form-control selectpicker show-tick" data-style="btn-white" id="driving-school" defaultValue="ikeja">
                                            <option disabled >Select Driving School</option>
                                            <option>Ikeja</option>
                                            <option>Ojodu Berger</option>
                                            <option>Oshodi</option>
                                            <option>Amuwo-Odofin</option>
                                            <option>Ajah</option>
                                            <option>Ikoyi</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="">
                                        <div className="form-group col-xs-12 col-md-6 col-sm-6 p-r-0">
                                        <label className="control-label">Test Date</label>
                                        <input type="date" className="form-control" placeholder="mm/dd/yyyy" id="datepicker" />
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    
                                    <div id="driver-fields">
                                    <div className="col-md-12 col-lg-12 p-l-0 p-r-0 ">
                                    
                                      
                                      <div className="">
                                        
                                        <div className="form-group col-xs-12 col-md-6 col-sm-6 p-l-0">
                                        <label className="control-label">Choose City Option</label>
                                          <select className="form-control selectpicker show-tick" data-style="btn-white" id="traveloption" defaultValue={"Select City Option"}>
                                            <option disabled >Select City Option</option>
                                            <option>Inter City</option>
                                            <option>Intra City</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="">
                                        <div className="form-group col-xs-12 col-md-6 col-sm-6 p-r-0">
                                        <label className="control-label">Number of Hours</label>
                                        <input id="no_hrs" className="form-control" type="text" required="" placeholder="Number of Hours e.g 5" />
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    
                                    
            
                                  
                                    
                                    <button id="submitItinerary" type="submit" className="btn btn-purple btn-block btn-lg waves-effect waves-light">Add Itinerary</button>
                                  </form>
                                </div>
                                
                              
                            </div>
                          </div>
                        </div>
                        
                        


                            <div className="col-lg-7 pull-right column-itinerary2">
                                <div className="">
                                   
                                    <h4 className="text-dark header-title m-t-0">Itinerary List</h4>
                                    <p className="text-muted m-b-30 font-13">
                                        
                                    </p>
                                    

                                    <div className="table-responsive">
                                        <table id="demo-foo-pagination" data-page-size="5" 
                       data-search="true" className="table table-actions-bar">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Pickup Location</th>
                                                    <th>Destination</th>
                                                
                                                    <th style={{minWidth: "50px"}}></th>
                                                </tr>
                                            </thead>
                                            <tbody id="tablebody">
                                                
                                                <tr id="startPoint"><td colSpan="2"></td></tr>
                                                
                                                  
                                              


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

                                            </section>
                                           
                                        </div>
                                          <div className="circleBase type1" style={{position:"fixed",bottom:"10px"}}></div>
                                         <br/><br/><br/>
                                        <div style={{ marginBottom:"140px"}}>
                                         <button style={{width:"80px",marginRight:"12px",fontSize:"12px"}} id="previous" type="submit" className="btn btn-primary waves-effect waves-light w-md cd-add-to-cart js-cd-add-to-cart">Previous</button>

                                          
                                           
                                         <button style={{width:"120px", fontSize:"12px", marginRight: "12px", fontSize: "12px", float:"right",position:"absolute",bottom:"130px", right:"10px"}} id="requestQuote" type="submit" className="pull-right btn btn-primary waves-effect waves-light w-md cd-add-to-cart js-cd-add-to-cart">Request Quote</button>
                                        

                                         <button style={{width:"80px",marginRight:"12px",fontSize:"12px", float:"left"}} id="next" type="submit" className=" btn btn-primary waves-effect waves-light w-md cd-add-to-cart js-cd-add-to-cart">Next</button>



                                </div>

                                  <div id="placeme" style={{}}></div>
                                               
                                         </div>
                            </div>
                        </div>






                      
                                        
                                       
                              


                                    


                        </div>
                            </div>
                        </div>         
                   
             

                        <div id="con-close-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
                                        <div className="modal-dialog"> 
                                            <div className="modal-content"> 
                                                <div className="modal-header"> 
                                                        <div className="info-msg">
                                                                <i className="fa fa-info-circle"></i>
                                                                
                                                              </div>

                                                              <div className="success-msg" id="msg-suc">
                                                                <i className="fa fa-check"></i>
                                                                
                                                              </div>

                                                              <div  className="warning-msg">
                                                                <i className="fa fa-warning"></i>
                                                                
                                                              </div>

                                                              <div className="error-msg" id="msg" >
                                                                <i className="fa fa-times-circle"></i>
                                                                
                                                               </div>
      
            
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 id="title-header" className="modal-title"></h4> 
                                                </div> 
                                                <div className="modal-body"> 
                                                    <div className="row"> 
                                                        <div className="col-md-6" > 
                                                            <div className="form-group"> 
                                                                <label htmlFor="field-1" className="control-label">Location</label> 
                                                                <input type="text" className="form-control pac-container" id="field-1" placeholder=""  /> 
                                                            </div> 
                                                        </div> 
                                                        <div className="col-md-6"> 
                                                            <div className="form-group"> 
                                                                <label htmlFor="field-2" className="control-label">Destination</label> 
                                                                <input type="text" className="form-control pac-container" id="field-2" placeholder="" /> 
                                                            </div> 
                                                        </div> 
                                                    </div> 
                                                    <br/> <br/>
                                                    <div className="row"> 
                                                        <div className="col-md-12"> 
                                                            <div className="form-group"> 
                                                                <label htmlFor="field-3" className="control-label">Start Date</label> 
                                                                <input type="date" className="form-control" id="field-3" placeholder="" /> 
                                                            </div> 
                                                        </div> 
                                                    </div> 
                                                    <div className="row"> 
                                                        <div className="col-md-4"> 
                                                            <div className="form-group"> 
                                                                <label htmlFor="field-4" className="control-label">End Date</label> 
                                                                <input type="date" className="form-control" id="field-4" placeholder="" /> 
                                                            </div> 
                                                        </div> 
                                                        <div className="col-md-4"> 
                                                            <div className="form-group"> 
                                                                <label htmlFor="field-5" className="control-label">No Hours</label> 
                                                                <input type="time" className="form-control" id="field-5" placeholder="" /> 
                                                            </div> 
                                                        </div> 
                                                        <div className="col-md-4"> 
                                                            <div className="form-group"> 
                                                                <label htmlFor="field-6" className="control-label">Drive Option</label> 
                                                               <select className="form-control selectpicker show-tick" data-style="btn-white" id="field-6" defaultValue="ikeja">
                                            <option disabled >Select Driving Plan</option>
                                            <option>Self Driven</option>
                                            <option>Would require an assistantance of a driver</option>
                                            
                                          </select>
                                                            </div> 
                                                        </div> 
                                                    </div> 
                                                    <div className="row"> 
                                                        <div className="col-md-12"> 
                                                            <div className="form-group no-margin"> 
                                                                <label htmlFor="field-7" className="control-label">Driving School</label> 
                                                                <select className="form-control selectpicker show-tick" data-style="btn-white" id="field-7" defaultValue="ikeja">
                                            <option disabled >Select Driving School</option>
                                            <option>Ikeja</option>
                                            <option>Ojodu Berger</option>
                                            <option>Oshodi</option>
                                            <option>Amuwo-Odofin</option>
                                            <option>Ajah</option>
                                            <option>Ikoyi</option>
                                          </select>
                                                            </div> 
                                                        </div> 
                                                    </div> 
                                                </div> 
                                                <div className="modal-footer"> 
                                                <button type="button" className="btn btn-warning waves-effect waves-light delete_content">Delete</button>

                                                     
                                                    <button type="button" className="btn btn-info waves-effect waves-light edit_content">Save changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>




            
            

                               
             </React.Fragment>

                    
            
    );
  }

}



export default Plan;
