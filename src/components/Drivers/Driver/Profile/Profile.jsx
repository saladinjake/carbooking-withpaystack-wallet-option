import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export class Profile extends Component {


  componentDidMount() {
     let mainNav;
    if (document.getElementById("loginpage") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="none";
            mainNav.style.opacity=0;

    }

  }

  change(){
     console.log('change')
  }

  render() {
   
    return (
      

       <div className="content-page" id="spread-out">
           
            <div className="content" id="profile-page">
                <div className="container" id="drivers-profile">

                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="page-title">Profile Page</h4>
                            <ol className="breadcrumb">
                                <li><a href="#">UserProfile</a></li>
                                <li><a href="#">Forms</a></li>
                                <li className="active">Form Validation</li>
                            </ol>
                        </div>
                    </div>



                    <div className="row" style={{marginTop: "30px"}}>


                        <div className="col-lg-6">
                            <div className="card-box">
                              

                                  

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

       


                                <form action="#" className="form-horizontal" role="form" data-parsley-validate noValidate encType="multipart/form-data" method="post">
                                    <div className="form-group">
                                        <label htmlFor="profileImage" className="col-sm-4 control-label"></label>
                                        <div className="col-sm-7">
                                           <input type="hidden" id="avatar-url" name="avatar-url" defaultValue="./public/assets/images/avatar.png"  />
                                            <img  id="preview" style={{border:"1px solid gray",width:"100px"}} src="./public/assets/images/avatar.png" alt="Avatar" className="avatar" />
                                             <p id="status">Please select a file</p>  

                                               
                                             

                                                  <div className="upload-btn-wrapper">

                                                      <input type="file" name="myfile" id="file-input"  />
                                                       <label htmlFor="myfile"><img src="/public/assets/images/camera.png"  style={{width:"50px",height:"50px" }} id="clickme" />
                                                       </label>
                                                      
                                                    </div>

                                            <ul  id="displayImages"></ul>

                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className="col-sm-4 control-label">Username</label>
                                        <div className="col-sm-7">
                                            <input type="text" required parsley-type="text" className="form-control"
                                                id="username"/>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{display:"none"}}>
                                        <label htmlFor="usertype" className="col-sm-4 control-label">User Type</label>
                                        <div className="col-sm-7">

                                            <select disabled className="form-control" id="user_type">
                                                <option >Individual</option>
                                                <option>Corperate</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="firstName" className="col-sm-4 control-label">First Name</label>
                                        <div className="col-sm-7">
                                            <input type="text" required parsley-type="text" className="form-control"
                                                id="firstname" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName" className="col-sm-4 control-label">Last Name</label>
                                        <div className="col-sm-7">
                                            <input type="text" required parsley-type="text" className="form-control"
                                                id="lastname" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName" className="col-sm-4 control-label">Phone</label>
                                        <div className="col-sm-7">
                                            <input type="text" required parsley-type="text" className="form-control"
                                                id="phoneNumber"  />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="certificate" className="col-sm-4 control-label">Self Drive Certificate</label>
                                        <div className="col-sm-7">
                                            <input  type="text" required  className="form-control"
                                                id="certificate" placeholder="" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="col-sm-4 control-label">Email</label>
                                        <div className="col-sm-7">
                        <input  id="email"  type="email" required  className="form-control" required parsley-type="email" 
                                                  />
                                        </div>
                                    </div>


                                   
                                    <div className="form-group">
                                        <label htmlFor="hori-pass1" className="col-sm-4 control-label">Password*</label>
                                        <div className="col-sm-7">
                                            <input id="password" type="password" placeholder="Password" required
                                                className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hori-pass2" className="col-sm-4 control-label">Confirm Password
                                            *</label>
                                        <div className="col-sm-7">
                                            <input data-parsley-equalto="#password-confirm" type="password" required
                                                placeholder="Password" className="form-control" id="password-confirm" />
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <div className="col-sm-offset-4 col-sm-8">
                                            <button style={{width:"100px", fontSize:"14px",float:"left",marginRight:"4px"}} id="new_content" type="submit" className="btn btn-primary waves-effect waves-light new_content">
                                                Update
                                            </button>
                                            <button style={{width:"105px", fontSize:"14px"}} id="new_content2" type="reset" className="btn btn-default waves-effect waves-light m-l-5 new_content2">
                                                Cancel 
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                       
                        <div className="col-md-12 col-lg-6" style={{float:"right"}} id="content-download">
                            <div className="panel panel-default">
                                
                                <div className="panel-body">
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <h4 className="text-right"><img src="public/assets/images/CommuteLogos-02.png"
                                                    alt="velonic" /></h4>

                                        </div>
                                        <div className="pull-right">
                                            <h4>License Permit <br/>
                                                <strong>2015-04-23654789</strong>
                                            </h4>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="pull-left m-t-30">
                                                <address>
                                                    <strong>Commute Ltd.</strong><br/>
                                                    TS30, Road 9B, Unit 3, <br/>
                                                    Lekki Gardens, Lekki - Epe Expy,<br/>
                                                    Lagos Nigeria<br/>
                                                    <abbr title="Phone">P:</abbr> (234) 908-191920081
                                                </address>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="row">
                                            <div className="col-md-12">
    
                                                <div className="pull-left m-t-15">
                                                    <strong>
                                                        To whom it may concern
                                                    </strong>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    <div style={{paddingTop: "15px"}}></div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive" >
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                                    vitae eleifend justo. Donec efficitur vestibulum quam, a
                                                    iaculis erat pellentesque et. Morbi est odio, pulvinar id sem
                                                    non, cursus varius tortor. Proin tortor nisi, volutpat
                                                    posuere ex ac, sagittis elementum dolor. Etiam tellus neque,
                                                    sollicitudin vel ante id, ullamcorper imperdiet turpis. In
                                                    dignissim tellus id sodales pharetra. Curabitur convallis
                                                    orci mauris, lacinia adipiscing elit.sollicitudin vel ante id, ullamcorper imperdiet turpis. In
                                                    dignissim tellus id sodales pharetra. Curabitur convallis
                                                    orci mauris, lacinia adipiscing elit.sollicitudin vel ante id, ullamcorper imperdiet turpis. In
                                                    dignissim tellus id sodales pharetra. Curabitur convallis
                                                    orci mauris, lacinia adipiscing elit.sollicitudin vel ante id, ullamcorper imperdiet turpis. In
                                                    dignissim tellus id sodales pharetra. Curabitur convallis
                                                    orci mauris, lacinia adipiscing elit.sollicitudin vel ante id, ullamcorper imperdiet turpis. In
                                                    dignissim tellus id sodales pharetra. Curabitur convallis
                                                    orci mauris, lacinia adipiscing elit.sollicitudin vel ante id, ullamcorper imperdiet turpis. In
                                                    dignissim tellus id sodales pharetra. Curabitur convallis
                                                    orci mauris, lacinia adipiscing elit. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{paddingTop: "15px"}}></div>
                                    <div className="row" style={{borderRadius: "0px"}}>
                                        <div className="col-md-3 col-md-offset-9">
                                            <p className="text-right"><b>Yours Sincerely</b> <br/>
                                                <img src="public/assets/images/CommuteLogos-02.png" style={{width: "100px"}} />
                                            </p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="hidden-print">
                                        <div className="pull-right">
                                            
                                            <a id="download-pdf" href="#" style={{width:"100px", fontSize:"14px",marginRight:"4px"}} className="btn btn-primary waves-effect waves-light">Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>

                </div> 

            </div> 
         
</div>
            
    );
  }

}



export default Profile;
