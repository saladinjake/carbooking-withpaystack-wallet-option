function removeClassx(e, c) {
  var elm = document.querySelectorAll('.sub-toggle');
  for (var i = 0; i < elm.length; i++) {
    if (c == 'active') {
      elm[i].classList.remove('active');
    } else {
      if (!elm[i].classList.contains('active')) elm[i].querySelector('.list').classList.remove('show');
    }
  }
}

export default class MenuTemplate{
	constructor(){
	 this.headerTemplate = document.getElementById("headerTemplate");
		this.navigationTemplate = document.getElementById("closed");
	  
	  
	  this.frontendMenuTemplate =`

                            <li class="text-muted menu-title">Navigation</li>
                            
                            <li class="">
                                <a href="./dashboard" class="waves-effect dashboard_links"><i class="md md-dashboard"></i> <span class="span-hide"> Dashboard </span> </a>
                            </li>
                            
                            <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="ti-location-pin"></i> <span class="span-hide"> Plans </span> <span class="span-hide menu-arrow"></span></a>
                                <ul class="list-unstyled list">
                                    <li><a id="create-plan-id" href="./create-plan">Create Plan</a></li>
                                    <li><a href="./plan-history">Plan History</a></li>
                                </ul>
                            </li>

                                                        
                            <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="md-account-balance-wallet"></i> <span class="span-hide"> Wallet </span> <span class="span-hide menu-arrow"></span></a>
                                <ul class="list-unstyled list">
                                    <li><a href="./wallet">Topup Balance</a></li>
                                    <li><a href="./paid-history">Payment History</a></li>
                                    <li><a href="./quote-subscription-history">Quotation History</a></li>
                                </ul>
                            </li>

                                                    
                            <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="md-headset"></i> <span class="span-hide"> Support </span> <span class="span-hide menu-arrow"></span></a>
                                <ul class="list-unstyled list">
                                     <li><a href="./create-ticket">Create Ticket</a></li>
                                     <li><a href="./submitted-ticket">View Ticket</a></li>
                                    <li><a href="./faqs">FAQ</a></li>
                                </ul>
                            </li>

                            <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="ti-light-bulb"></i> <span class="span-hide"> SOS </span> <span class="span-hide menu-arrow"></span></a>
                                <ul class="list-unstyled list">
                                    <li><a href="./sos-request">Report SOS</a></li>
                                    <li><a href="./sos-history">View SOS</a></li>
                                </ul>
                            </li>
                            
                            <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="md-directions-car"></i> <span class="span-hide"> Request Car Repair </span><span class="span-hide menu-arrow"></span></a>
                                  <ul class="list-unstyled list">
                                     <li><a href="./request-car-repair">Request Repair</a></li>
                                    <li><a href="./request-repairs-history">Car Request History</a></li>
                                    
                                </ul>
                                
                            </li>
                      
            
`;
	  this.backendMenuTemplate =`
      
        
                    

                        <li class="text-muted menu-title">Navigation</li>

                       
                       
                       

                        <li class="has_sub sub-toggle">
                            

                                <a href="javascript:void(0);" class="waves-effect"><i class="ti-dashboard"></i><span>
                                    Home</span> <span class="menu-arrow"></span>  </a>
                                    <ul class="list-unstyled list">
                                     
                                        <li><a href="./admin-dashboard">Admin Dashboard</a></li>
                                        <li><a href="./activity-logger">Activity Logs</a></li>
                                         
                                    </ul>
                        </li>

                        <li class="has_sub ">
                            <a href="admin-users" class="waves-effect"><i class="ti-location-pin"></i> <span> User
                                </span> </a>

                        </li>

                        <li class="has_sub ">
                            <a href="./admin-drivers" class="waves-effect"><i class="ti-location-pin"></i> <span> Drivers
                                </span> </a>

                        </li>

                        


                        <li class="has_sub ">
                            <a href="./admin-partners" class="waves-effect"><i class="ti-tag"></i> <span> Partners </span>
                            </a>
                        </li>

                        <li class="has_sub ">
                                <a href="admin-plan-package" class="waves-effect"><i class="ti-tag"></i> <span> Plan
                                        Packages </span> </a>
                            </li>

                         <li class="has_sub">
                            <a href="./admin-sos" class="waves-effect"><i class="ti-alert"></i> <span> SOS
                                </span></a>    
                        </li>

                        <li class="has_sub sub-toggle">
                            <a href="javascript:void(0);" class="waves-effect"><i class="ti-headphone"></i> <span>
                                    Support Management</span> <span class="menu-arrow"></span>  </a>
                                    <ul class="list-unstyled list">
                                        <!-- <li><a href="./admin-user-complaints">User Complaint</a></li>
                                        <li><a href="./admin-driver-complaints">Driver Complaint</a></li> -->
                                        <li><a href="./admin-tickets">Tickets</a></li>
                                        <li><a href="./admin-enquiries">Enquiries</a></li>
                                        <li><a href="./admin-feedback">Feedback</a></li>
                                        <li><a href="./admin-tech-support">Technical Support</a></li>
                                        <li><a href="./admin-faqs">FAQ</a></li>   
                                    </ul>
                            
                        </li>

                        <li class="has_sub sub-toggle">
                            <a href="javascript:void(0);" class="waves-effect"><i class="ti-settings"></i> <span>
                                    Settings </span> <span class="menu-arrow"></span> </a>
                            <ul class="list-unstyled list">
                                <li><a href="./admin-settings-paystack">Paystack API</a></li>
                                <li><a href="./admin-settings-google">Google API</a></li>
                                <li><a href="./admin-settings-facebook">Facebook API</a></li>
                                <li><a href="./admin-settings-instagram">Instagram API</a></li>
                                <li><a href="./admin-settings-email">Mail API</a></li>
                                <li><a href="./admin-settings-bucket">AWS S3 API</a></li>
                            </ul>
                        </li>


                        <li class="has_sub">
                                <a href="./admin-profile" class="waves-effect"><i class="fa fa-user"></i> <span> My Profile
                                    </span></a>    
                        </li>


                         <li class="has_sub sub-toggle">
                            <a href="#" class="waves-effect"><i class="md md-payment"></i> <span> Payment Module</span> <span class="menu-arrow"></span> </a>
                            <ul class="list-unstyled list">
                                <li><a href="./admin-quote-subscription-history">Quotations</a></li>
                                <li><a href="./admin-paid-history">Payments</a></li>
                                <li><a href="./admin-wallet">Topup Transactions</a></li>
                            </ul>
                        </li>


                        <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="ti-receipt"></i> <span> Bookings</span> <span class="menu-arrow"></span> </a>
                                <ul class="list-unstyled list">
                                    <li><a href="./admin-bookings">Bookings</a></li>
                                    <li><a href="./admin-itineraries">Itineraries / Trips </a></li>
                                    <li><a href="./admin-manual-booking">Manual Booking</a></li>
                                </ul>
                        </li>


                        <li class="has_sub ">
                                <a href="./admin-cars-mgt" class="waves-effect"><i class="ti-car"></i> <span> Car
                                        Management </span> </a>
                        </li>

                         

                        <li class="has_sub">
                            <a href="./admin-inspection" class="waves-effect"><i class="ti-car"></i> <span> Car Inspections
                                </span></a>    
                        </li>

                        <li class="has_sub">
                            <a href="./admin-drive-test" class="waves-effect"><i class="ti-car"></i> <span> Drive Tests
                                </span></a>    
                        </li>






                        <li class="has_sub sub-toggle">
                                <a href="javascript:void(0);" class="waves-effect"><i class="ti-user"></i> <span> Admin
                                        Management </span> <span class="menu-arrow"></span> </a>
                                <ul class="list-unstyled list">
                                    <li><a href="./admin-admins">Admins</a></li>
                                    <li><a href="./admin-previledges">Roles & Privileges</a></li>
                                </ul>
                            </li>



                        

                         


                      


                        



                        

                        

                        

                        


                        

                            


                      

                       

                        

                        

                        

                        

                    
              `;
	  this.frontendHeader=`
          <div class="topbar">

                <div class="topbar-left">
                    <div class="text-center">
                       
                        <a href="./" class="logo">
                            <i class="icon-c-logo"> <img src="public/assets/images/CommuteLogos-13.png" /> </i>
                            <span><img src="public/assets/images/CommuteLogos-02.png" /></span>
                        </a>
                    </div>
                </div>

                <div class="navbar navbar-default" role="navigation">
                    <div class="container">
                        <div class="">
                            <div class="pull-left">
                                <button class="button-menu-mobile open-left waves-effect waves-light" id="menu-toggle">
                                    <i class="md md-menu"></i>
                                </button>
                                <span class="clearfix"></span>
                            </div>

                            <form role="search" class="navbar-left app-search pull-left hidden-xs">
                            <input type="text" placeholder="Search..." class="form-control">
                            <a href=""><i class="fa fa-search"></i></a>
                            </form>

                        

                            <ul class="nav navbar-nav navbar-right pull-right">
                                <li class="dropdown top-menu-item-xs">
                                <a href="./topup-wallet" class="text-custom header-title wallet-balance-top hidden-xs" id="balance"></a>
                                </li>
                                <li class="dropdown top-menu-item-xs">
                                    <a href="#" data-target="#" class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                                        <i class="icon-bell"></i> <span id="notifyCount" class="badge badge-xs badge-danger">0</span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-lg">
                                        
                                        <li class="notifi-title"><span class="label label-default pull-right">New 0</span>Notification</li>
                                        <li class="list-group slimscroll-noti notification-list">
                                        
                                           <a href="#" class="list-group-item">
                                              
                                           </a>

                                         
                                        
                                        <li>
                                            <a href="#" class="list-group-item text-right">
                                                <small class="font-600"><a href="./notification">See all notifications</a></small>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="hidden-xs">
                                    <a href="#" id="btn-fullscreen" class="waves-effect waves-light"><i class="icon-size-fullscreen"></i></a>
                                </li>
                                
                                <li class="dropdown top-menu-item-xs">
                                    <a href="" class="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true"><img src="./public/assets/images/avatar.png" alt="user-img" class="img-circle" id="user-profile" /> </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="./profile"><i class="ti-user m-r-10 text-custom"></i> Profile</a></li>
                                        
                                        <li class="divider"></li>
                                        <li><a id="logOut" href="#" ><i class="logOut ti-power-off m-r-10 text-danger"></i> Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                            
                            
                        </div>
                     
                    </div>
                </div>
            </div>

	  `;
	  this.backendHeader=`<!-- Top Bar Start -->
        <div class="topbar">

            <!-- LOGO -->
            <div class="topbar-left">
                <div class="text-center">
                    <!-- <a href="index.html" class="logo"><i class="icon-magnet icon-c-logo"></i><span>Ub<i class="md md-album"></i>ld</span></a>-->
                    <!-- Image Logo here -->
                    <a href="index.html" class="logo">
                        <i class="icon-c-logo"> <img src="assets/images/commute-logo.png" height="42" /> </i>
                        <span><img src="assets/images/commutelogo.png" height="50" /></span>
                    </a>
                </div>
            </div>

            <!-- Button mobile view to collapse sidebar menu -->
            <div class="navbar navbar-default" role="navigation">
                <div class="container">
                    <div class="">
                        <div class="pull-left">
                            <button class="button-menu-mobile open-left waves-effect waves-light">
                                <i class="md md-menu"></i>
                            </button>
                            <span class="clearfix"></span>
                        </div>

                        

                        <form role="search" class="navbar-left app-search pull-left hidden-xs">
                            <input type="text" placeholder="Search..." class="form-control">
                            <a href=""><i class="fa fa-search"></i></a>
                        </form>


                        <ul class="nav navbar-nav navbar-right pull-right">
                            <li class="dropdown top-menu-item-xs">
                                <a href="#" data-target="#" class="dropdown-toggle waves-effect waves-light"
                                    data-toggle="dropdown" aria-expanded="true">
                                    <i class="icon-bell"></i> <span class="badge badge-xs badge-danger">3</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-lg">
                                    <li class="notifi-title"><span class="label label-default pull-right">New
                                            3</span>Notification</li>
                                    <li class="list-group slimscroll-noti notification-list">
                                        <!-- list item-->
                                        <a href="javascript:void(0);" class="list-group-item">
                                            <div class="media">
                                                <div class="pull-left p-r-10">
                                                    <em class="fa fa-diamond noti-primary"></em>
                                                </div>
                                                <div class="media-body">
                                                    <h5 class="media-heading">A new order has been placed A new order
                                                        has been placed</h5>
                                                    <p class="m-0">
                                                        <small>There are new settings available</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>

                                        <!-- list item-->
                                        <a href="javascript:void(0);" class="list-group-item">
                                            <div class="media">
                                                <div class="pull-left p-r-10">
                                                    <em class="fa fa-cog noti-warning"></em>
                                                </div>
                                                <div class="media-body">
                                                    <h5 class="media-heading">New settings</h5>
                                                    <p class="m-0">
                                                        <small>There are new settings available</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>

                                        <!-- list item-->
                                        <a href="javascript:void(0);" class="list-group-item">
                                            <div class="media">
                                                <div class="pull-left p-r-10">
                                                    <em class="fa fa-bell-o noti-custom"></em>
                                                </div>
                                                <div class="media-body">
                                                    <h5 class="media-heading">Updates</h5>
                                                    <p class="m-0">
                                                        <small>There are <span class="text-primary font-600">2</span>
                                                            new updates available</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>

                                        <!-- list item-->
                                        <a href="javascript:void(0);" class="list-group-item">
                                            <div class="media">
                                                <div class="pull-left p-r-10">
                                                    <em class="fa fa-user-plus noti-pink"></em>
                                                </div>
                                                <div class="media-body">
                                                    <h5 class="media-heading">New user registered</h5>
                                                    <p class="m-0">
                                                        <small>You have 10 unread messages</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>

                                        <!-- list item-->
                                        <a href="javascript:void(0);" class="list-group-item">
                                            <div class="media">
                                                <div class="pull-left p-r-10">
                                                    <em class="fa fa-diamond noti-primary"></em>
                                                </div>
                                                <div class="media-body">
                                                    <h5 class="media-heading">A new order has been placed A new order
                                                        has been placed</h5>
                                                    <p class="m-0">
                                                        <small>There are new settings available</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>

                                        <!-- list item-->
                                        <a href="javascript:void(0);" class="list-group-item">
                                            <div class="media">
                                                <div class="pull-left p-r-10">
                                                    <em class="fa fa-cog noti-warning"></em>
                                                </div>
                                                <div class="media-body">
                                                    <h5 class="media-heading">New settings</h5>
                                                    <p class="m-0">
                                                        <small>There are new settings available</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="list-group-item text-right">
                                           <small class="font-600"><a href="./notification">See all notifications</a></small>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="hidden-xs">
                                <a href="#" id="btn-fullscreen" class="waves-effect waves-light"><i
                                        class="icon-size-fullscreen"></i></a>
                            </li>
                            <!-- <li class="hidden-xs">
                                <a href="#" class="right-bar-toggle waves-effect waves-light"><i
                                        class="icon-settings"></i></a>
                            </li> -->
                            <li class="dropdown top-menu-item-xs">
                                <a href="" class="dropdown-toggle profile waves-effect waves-light"
                                    data-toggle="dropdown" aria-expanded="true"><img
                                        src="assets/images/users/avatar-1.jpg" alt="user-img" class="img-circle"> </a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:void(0)"><i class="ti-user m-r-10 text-custom"></i>
                                            Profile</a></li>
                                    <!-- <li><a href="javascript:void(0)"><i class="ti-settings m-r-10 text-custom"></i>
                                            Settings</a></li>
                                    <li><a href="javascript:void(0)"><i class="ti-lock m-r-10 text-custom"></i> Lock
                                            screen</a></li>
                                    <li class="divider"></li> -->
                                    <li><a href="javascript:void(0)"><i class="ti-power-off m-r-10 text-danger"></i>
                                            Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
        <!-- Top Bar End -->`;


        this.driverMenuTemplate =`


        <li class="text-muted menu-title">Navigation</li>
                            
                            <li class="has-sub">
                                <a href="./dashboard-driver" class="waves-effect"><i class="md md-dashboard"></i> <span class="span-hide"> Dashboard </span> </a>
                            </li>
                            
                            <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="ti-location-pin"></i> <span class="span-hide"> Trips </span> <span class="span-hide menu-arrow"></span></a>
                                <ul class="list-unstyled list">
                                    
                                     <li>
            <a href="/drivers-completedtrips">Completed Trips</a>
          </li>
          <li>
            <a href="/drivers-upcomingtrips">Upcoming Trips</a>
          </li>
                                </ul>
                            </li>


               <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="ti-location-pin"></i> <span class="span-hide"> Profile </span> <span class="span-hide menu-arrow"></span></a>
                                <ul class="list-unstyled list">

                            <li>
            <a href="/drivers-profile">Edit Profile</a>
          </li>
          <li>
            <a href="/drivers-assignedvehiclehistory">Assigned Vehicle History</a>
          </li>
           </ul>
                            </li>

                                                        
                           

                                                    
                            <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="md-headset"></i> <span class="span-hide"> Support </span> <span class="span-hide menu-arrow"></span></a>
                                <ul class="list-unstyled list">
                                     <li><a href="./drivers-createticket">Create Ticket</a></li>
                                     <li><a href="./drivers-submittedticket">View Ticket</a></li>
                                    <li><a href="./drivers-faqs">FAQ</a></li>
                                </ul>
                            </li>

                            <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="ti-light-bulb"></i> <span class="span-hide"> SOS </span> <span class="span-hide menu-arrow"></span></a>
                                <ul class="list-unstyled list">
                                    <li><a href="./drivers-sos-request">Report SOS</a></li>
                                    <li><a href="./drivers-sos-history">View SOS</a></li>
                                </ul>
                            </li>
                            
                            <li class="has_sub sub-toggle">
                                <a href="#" class="waves-effect"><i class="md-directions-car"></i> <span class="span-hide"> Request Car Repair </span><span class="span-hide menu-arrow"></span></a>
                                  <ul class="list-unstyled list">
                                     <li><a href="./drivers-request-car-repair">Request Repair</a></li>
                                    <li><a href="./drivers-request-repairs-history">Car Request History</a></li>
                                    
                                </ul>
                                
                            </li>
                      




     `;

	  
	}

    renderDriverNavigation(){

     
        this.navigationTemplate.innerHTML = this.driverMenuTemplate;

        setTimeout(()=>{
           var mClass = '.sub-toggle'
            var menu = document.querySelectorAll('.sub-toggle');
            menu.forEach(function(o) {
              o.addEventListener('click', function(e) {
               // e.preventDefault();
                removeClassx(o, 'active');
                this.classList.add('active');
                removeClassx(o);
                this.querySelector('.list').classList.toggle('show');
              });
            }); 
        },3000)
    
    
    }

	attachEvents(){
       
        if(localStorage.getItem("userToken")){
          let user = JSON.parse(localStorage.getItem('userToken'));
         
          if(user.user.isAdmin){
            //setTimeout(()=>{
              return this.renderAdminNavigation()
            //},7000)
          
          }else if(user.user.roles=="Individual Driver"){
            return this.renderDriverNavigation();
          }
            
        return this.renderUserNavigation();

      }
       
		
	}

	renderUserNavigation(){
		
		// this.headerTemplate.innerHTML = this.frontendHeader;
		this.navigationTemplate.innerHTML = this.frontendMenuTemplate;
        setTimeout(()=>{
           var mClass = '.sub-toggle'
            var menu = document.querySelectorAll('.sub-toggle');
            menu.forEach(function(o) {
              o.addEventListener('click', function(e) {
                //e.preventDefault();
                removeClassx(o, 'active');
                this.classList.add('active');
                removeClassx(o);
                this.querySelector('.list').classList.toggle('show');
              });
            }); 
        },3000)
         
	}

	renderAdminNavigation(){
      //this.headerTemplate.innerHTML = this.backendHeader;
      
		this.navigationTemplate.innerHTML = this.backendMenuTemplate;

        setTimeout(()=>{
           var mClass = '.sub-toggle'
            var menu = document.querySelectorAll('.sub-toggle');
            menu.forEach(function(o) {
              o.addEventListener('click', function(e) {
               // e.preventDefault();
                removeClassx(o, 'active');
                this.classList.add('active');
                removeClassx(o);
                this.querySelector('.list').classList.toggle('show');
              });
            }); 
        },3000)
	}
}




