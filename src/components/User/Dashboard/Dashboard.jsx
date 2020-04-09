import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItineraryHistoryList from '../History/ItineraryHistoryList'
import $ from 'jquery';
const activeUrl ="http://localhost:12000/api/v1";


export  default class Dashboard extends Component {
  
  

  componentDidMount() {
     let mainNav;
     if (document.getElementById("loggedInOnly") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="block";
            mainNav.style.opacity=1;

    }

    if(localStorage.getItem('userToken')){
       let user  = JSON.parse(localStorage.getItem('userToken'));
       document.getElementById("userWelcomeSection").innerHTML = "Welcome " + user.user.firstname + ", How is your day going";
       document.getElementById("plan-id").innerHTML=user.user.plan_name;

    }

  

  }

  goAway(url){
   return window.location.href=url;
  }

  render() {
    const style1 ={
        visibility:"hidden", 
        display:"none"
    }
   
    return (
      

      <div  className="content-page page-wrap" id="spread-out">
                
                <div className="content" id="dashboard">
                    <div className="container animated animatedFadeInUp fadeInUp">

<a id="portfolio" style={{textAlign:"center",fontSize:"15px"}} href="./create-plan" className="link-to-portfolio hover-target "><i className="md md-add text-info"></i></a>
                        
                        <div className="row">
                            <div className="col-sm-12">
                               

                                <h4 className="page-title">Dashboard</h4>
                                <p id="userWelcomeSection" className="text-muted page-title-alt"> </p>
                            </div>
                        </div>

                        <div className="row animated animatedFadeInUp fadeInUp">


                        
                        

                            

                            <a id="plan-detail" href="./plan-detail" className="tooltipLink" data-tooltip="lets you view the all planned itineraries and planned trips">
                            <div data-id="plan-detail" data-href="./plan-detail" className="col-sm-6  col-md-6 col-lg-3">
                            <div className="widget-bg-color-icon card-box p-t-10 p-b-10">
                                    <div className="text-dark">
                                        <h4 className="text-custom"><b className="" style={{fontSize:"14px"}}> Current Plan</b></h4>
                                    </div>
                                    <div className="">
                                        <h5 className="text-dark"><b style={{fontSize:"14px"}} className="" id="plan-id">No Plan</b></h5>
                                        <p className="text-muted" id="idvalue">No plan id</p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div></div></a>


                            <a  id="topup-wallet" href="./wallet"><div className="col-sm-6  col-md-6 col-lg-3 bg-red">
                                <div className="widget-bg-color-icon card-box">
                                    <div className="bg-icon bg-icon-custom pull-left">
                                        <i className="md md-account-balance-wallet text-custom"></i>
                                    </div>
                                    <div className="col-lg-6 pull-right text-right">
                                        <h3 className="text-dark" style={{fontSize:"14px"}}><b className="">Topup wallet</b></h3>
                                        <p className="text-muted"></p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div></a>

                            <a  id="plan" href="./create-plan"><div className="col-sm-6  col-md-6 col-lg-3">
                                <div className="widget-bg-color-icon card-box">
                                    <div className="bg-icon bg-icon-info pull-left">
                                        <i className="md md-add text-info"></i>
                                    </div>
                                    <div className="col-lg-6 pull-right text-right">
                                        <h3 className="text-dark" style={{fontSize:"14px"}}><b className="">Create 
                                            <span style={style1} > Create </span> <span>new plan</span></b></h3>
                                        <p className="text-muted"></p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div></a>

                            <a id="request-car-repair" href="./request-car-repair"><div className="col-sm-6  col-md-6 col-lg-3">
                                <div className="widget-bg-color-icon card-box">
                                    <div className="bg-icon bg-icon-custom pull-left">
                                        <i className="md-directions-car text-custom"></i>
                                    </div>
                                    <div className="col-lg-6 pull-right text-right">
                                        <h3 className="text-dark" style={{fontSize:"14px"}}><b className="">Request car <span style={style1}></span> repair</b></h3>
                                        <p className="text-muted"></p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div></a>
                        </div>

                   
                        
                         <div className="row">

                            


                            <div className="col-lg-12">
                                <div className="card-box">
                                  <a id="itinerary-history" style={{width:"80px", fontSize:"12px", marginRight: "12px", fontSize: "14px"}} href="./itinerary-history" className="pull-right btn btn-default btn-sm waves-effect waves-light footable-page ">View all</a>

                                  <br/>


                                    <h4 className="text-dark header-title m-t-0">Upcoming Itineraries</h4>
                                
                                        
                                               
                                    

                                    <div className="table-responsive card-box">
                                             <br/>
                                              <div className="col-sm-6 text-lg-center text-right pull-right">
                                                    <div className="form-group">
                                                        <input id="foo-table-input" type="text" placeholder="Search by location" className="form-control input-sm" autoComplete="on" />
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                            <div className="m-t-10 animated animatedFadeInUp fadeInUp" style={{border:"1px solid #4c3392"}}></div>

                            
                                       <div id="tableviewItins">
                                        <table id="demo-foo-pagination" data-page-size="7" 
                                           data-search="true" className="table toggle-circle table-hover">




                                            <thead>
                                                 <tr>
                                                    <th data-toggle="true" className="col-lg-4">Created Date</th>
                                                    <th data-hide="phone" className="col-lg-4">Plan Category</th>
                                                    <th data-hide="phone" className="col-lg-4">Start Location</th>
                                                    <th data-hide="phone" className="col-lg-3">Destination</th>
                                                    <th data-hide="phone" className="col-lg-4">Start Time</th>
                                                    <th data-hide="phone" className="col-lg-2">Drive Option</th>
                                                    <th data-hide="phone" className="col-lg-2">Duration (hrs)</th>
                                                     <th data-hide="all" className="col-lg-2">Status</th>
                                                </tr>
                                            </thead>
                                           
                                            <tbody id="tablebody">
                                                
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

                                        <div id="svgItins" style={{margin:"0px auto",width:"400px", height:"200px"}}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000" version="1.1">
    <text x="500" y="60" text-anchor="middle" font-size="60" font-weight="bold" font-family="sans-serif">Blank record!!! All itineraries created would be listed here.</text>
    <g transform="translate(0,-52.362161)">
        <g transform="translate(-1155.6145,248.49753)">
            <path d="M 1634.663,87.035654 C 1617.9639,69.655578 1597.4593,60.461778 1574.5615,59.941382 L 1431.794,58.752658" />
            <path d="M 1662.7111,42.209616 C 1628.3659,6.8542772 1575.838,7.3593529 1575.838,7.3593529 L 1426.22,7.86443 1405,25.933588 l -130.7143,0 -0.1209,24.524597 -17.7985,0.0284 -0.1208,24.524594 -17.7985,0.0284 1.5153,501.540731 358.8238,0 14.9177,17.38181 89.1726,0.0866 16.2597,-17.97354 363.7984,0 0.5051,-500.530575 -21.7182,0.505076 0,-34.345186 -21.7183,0 0,-34.850263 -289.9138,0 c 0,0 -50.1709,0.3367182 -87.3782,35.355334 z" />
            <path d="m 1751.4286,29.505016 c -38.9509,4.104965 -52.3954,11.240389 -79.477,33.5281 l -0.027,480.566354 c 18.4452,-14.18504 46.2497,-22.92235 66.9522,-23.10968 9.909,-0.0897 280.6181,-1.48986 280.6181,-1.48986 l -0.079,-490.566342 z" />
            <path d="m 1655.2092,63.036196 c -22.4838,-25.05294 -53.6272,-34.848987 -76.8776,-35.239847 l -149.5913,0.178571 7.4134,100.83684 -128.7194,9.10189 -0.6529,383.37708 274.4686,0.53571 c 26.9172,1.01695 45.7337,4.06318 74.1288,21.41216 z" />
            <path d="m 1426.22,7.86443 -138.2755,127.10911 0,403.10291 296.2546,-1.01015 c 25.8425,0.24287 51.7087,10.75633 79.7702,26.79554" />
            <path d="m 2040.0031,41.704545 0.3392,492.966355 -302.8961,2.14286 c -23.1854,-0.0165 -42.2798,9.83484 -73.4769,27.04808" />
            <path d="m 1274.1648,50.458185 0.1209,500.886385 309.2857,0 c 27.4827,-0.4498 56.0962,15.10854 80.3979,25.55298" />
            <path d="m 1256.2455,75.011179 0,489.493841 327.3259,0 c 25.8067,-0.21472 58.0622,12.72159 79.8928,14.91791" />
            <path d="m 1385.9293,42.714691 -92.429,0 0,86.955549" />
            <path d="m 1316.9643,68.076445 42.5,0" />
            <path d="m 1315.8929,90.933588 18.7499,0" />
            <path d="M 1635.1681,119.61307 C 1618.469,102.233 1597.9644,93.039198 1575.0666,92.518802 l -140.6732,-1.188724" />
            <path d="m 1635.6732,152.9481 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -138.0865,-1.18873" />
            <path d="m 1636.1783,185.77806 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -248.4076,-1.18873" />
            <path d="m 1373.5715,56.34675 2.5,33.515411" />
            <path d="m 1350.7143,78.816112 1.0715,13.724611" />
            <path d="m 1405,25.933588 6.0714,83.928572 -103.2143,7.85714" />
            <path d="m 1636.1783,218.6352 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -248.4076,-1.18873" />
            <path d="m 1636.1783,251.28314 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -248.4076,-1.18873" />
            <path d="m 1636.1783,284.61817 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -248.4076,-1.18873" />
            <path d="m 1636.1783,318.45828 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -248.4076,-1.18873" />
            <path d="m 1473.2938,326.21428 -145.6246,-1.18873" />
            <path d="m 1692.1552,82.167238 c 17.2029,-17.450455 40.916,-21.128516 64.5047,-21.651017 l 237.7746,0.320904" />
            <path d="m 1692.1552,113.4658 c 17.2029,-17.450456 40.916,-21.128517 64.5047,-21.651017 l 237.7746,0.320903" />
            <path d="m 1692.1552,147.79326 c 17.2029,-17.45047 40.916,-21.12853 64.5047,-21.65103 l 237.7746,0.32091" />
            <path d="m 1692.1552,181.6159 c 17.2029,-17.45047 40.916,-21.12853 64.5047,-21.65103 l 237.7746,0.32091" />
            <path d="m 1692.1238,215.2186 c 16.7754,-17.45948 39.8991,-21.13944 62.9015,-21.66221 l 135.4361,0.32107" />
            <path d="m 2061.7214,76.049731 0,479.169569 -319.2214,-0.17857 c -22.1729,-0.30528 -51.1432,8.11928 -78.5307,21.85682" />
        </g>
        <g transform="matrix(0.98756762,-0.1571948,0.1571948,0.98756762,-1182.3183,622.45437)">
            <path d="m 1789.8211,281.67144 4.9456,12.22201" />
            <path d="m 1991.5685,187.73792 -181.9256,74.40494 -39.6429,34.28571 51.4286,-1.78571 182.2827,-74.40494 c 2.6202,-14.16723 -1.2946,-25.06699 -12.1428,-32.5 z" />
            <path d="m 1811.3081,262.66524 c 12.545,-0.76311 13.1069,2.49883 4.4411,9.80302 11.2946,-1.49973 13.2696,2.38373 4.4718,10.29542 11.2248,-2.00422 12.4168,2.22109 4.6196,10.38208" stroke-width="2" />
            <path d="m 1818.75,271.07143 142.8454,-58.37138" stroke-width="4" />
            <path d="m 1823.3929,281.07143 142.5747,-58.31811" stroke-width="4" />
            <path d="m 1967.5009,197.78344 c 10.1442,8.1706 13.2701,19.28434 13.0058,31.8198" />
            <path d="m 1962.9552,199.67748 c 10.1442,8.1706 13.2701,19.28434 13.0058,31.8198" />
            <path d="m 1958.9146,201.06644 c 10.1442,8.1706 13.2701,19.28434 13.0058,31.8198" />
            <path d="m 1955.0003,202.83421 c 10.1442,8.1706 13.2701,19.28434 13.0058,31.8198" />
        </g>
    </g>
</svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                           

                        </div>
                      



                        <div className="row">

                            

                            <div className="col-lg-12">
                                <div className="card-box">
                                    <a href="./plan-history" style={{width:"80px", fontSize:"12px", marginRight: "12px", fontSize: "14px"}}  className="pull-right btn btn-default btn-sm waves-effect waves-light footable-page">View all</a>
                                    <h4 className="text-dark header-title m-t-0">Plan History</h4>
                                    <p className="text-muted m-b-30 font-13">
                                        
                                    </p>

                                    <div className="table-responsive card-box">
                                       <div className="clearfix"></div>
                            <div className="m-t-10 animated animatedFadeInUp fadeInUp" style={{border:"1px solid #4c3392"}}></div>
                                        <table className="table table-actions-bar" id="tableviewPlans">
                                            <thead>
                                                <tr>
                                                    <th>Plan ID</th>
                                                    <th>Plan Type</th>
                                                    <th>Duration</th>
                                                    <th>Status</th>
                                                    <th>Total Amount</th>
                                                    <th style={{minWidth: "80px"}}></th>
                                                </tr>
                                            </thead>
                                            <tbody id="tablebody1">
                                                
                                               

                                            </tbody>
                                        </table>

                                        
                                    </div>


                                    <div id="svgPlans" style={{margin:"0px auto",width:"400px", height:"200px"}}>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000" version="1.1">
    <text x="500" y="60" text-anchor="middle" font-size="60" font-weight="bold" font-family="sans-serif">Blank Record!!!. Plan packages created would be listed here.</text>
    <g transform="translate(0,-52.362161)">
        <g transform="translate(-1155.6145,248.49753)">
            <path d="M 1634.663,87.035654 C 1617.9639,69.655578 1597.4593,60.461778 1574.5615,59.941382 L 1431.794,58.752658" />
            <path d="M 1662.7111,42.209616 C 1628.3659,6.8542772 1575.838,7.3593529 1575.838,7.3593529 L 1426.22,7.86443 1405,25.933588 l -130.7143,0 -0.1209,24.524597 -17.7985,0.0284 -0.1208,24.524594 -17.7985,0.0284 1.5153,501.540731 358.8238,0 14.9177,17.38181 89.1726,0.0866 16.2597,-17.97354 363.7984,0 0.5051,-500.530575 -21.7182,0.505076 0,-34.345186 -21.7183,0 0,-34.850263 -289.9138,0 c 0,0 -50.1709,0.3367182 -87.3782,35.355334 z" />
            <path d="m 1751.4286,29.505016 c -38.9509,4.104965 -52.3954,11.240389 -79.477,33.5281 l -0.027,480.566354 c 18.4452,-14.18504 46.2497,-22.92235 66.9522,-23.10968 9.909,-0.0897 280.6181,-1.48986 280.6181,-1.48986 l -0.079,-490.566342 z" />
            <path d="m 1655.2092,63.036196 c -22.4838,-25.05294 -53.6272,-34.848987 -76.8776,-35.239847 l -149.5913,0.178571 7.4134,100.83684 -128.7194,9.10189 -0.6529,383.37708 274.4686,0.53571 c 26.9172,1.01695 45.7337,4.06318 74.1288,21.41216 z" />
            <path d="m 1426.22,7.86443 -138.2755,127.10911 0,403.10291 296.2546,-1.01015 c 25.8425,0.24287 51.7087,10.75633 79.7702,26.79554" />
            <path d="m 2040.0031,41.704545 0.3392,492.966355 -302.8961,2.14286 c -23.1854,-0.0165 -42.2798,9.83484 -73.4769,27.04808" />
            <path d="m 1274.1648,50.458185 0.1209,500.886385 309.2857,0 c 27.4827,-0.4498 56.0962,15.10854 80.3979,25.55298" />
            <path d="m 1256.2455,75.011179 0,489.493841 327.3259,0 c 25.8067,-0.21472 58.0622,12.72159 79.8928,14.91791" />
            <path d="m 1385.9293,42.714691 -92.429,0 0,86.955549" />
            <path d="m 1316.9643,68.076445 42.5,0" />
            <path d="m 1315.8929,90.933588 18.7499,0" />
            <path d="M 1635.1681,119.61307 C 1618.469,102.233 1597.9644,93.039198 1575.0666,92.518802 l -140.6732,-1.188724" />
            <path d="m 1635.6732,152.9481 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -138.0865,-1.18873" />
            <path d="m 1636.1783,185.77806 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -248.4076,-1.18873" />
            <path d="m 1373.5715,56.34675 2.5,33.515411" />
            <path d="m 1350.7143,78.816112 1.0715,13.724611" />
            <path d="m 1405,25.933588 6.0714,83.928572 -103.2143,7.85714" />
            <path d="m 1636.1783,218.6352 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -248.4076,-1.18873" />
            <path d="m 1636.1783,251.28314 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -248.4076,-1.18873" />
            <path d="m 1636.1783,284.61817 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -248.4076,-1.18873" />
            <path d="m 1636.1783,318.45828 c -16.6991,-17.38007 -37.2037,-26.57387 -60.1015,-27.09426 l -248.4076,-1.18873" />
            <path d="m 1473.2938,326.21428 -145.6246,-1.18873" />
            <path d="m 1692.1552,82.167238 c 17.2029,-17.450455 40.916,-21.128516 64.5047,-21.651017 l 237.7746,0.320904" />
            <path d="m 1692.1552,113.4658 c 17.2029,-17.450456 40.916,-21.128517 64.5047,-21.651017 l 237.7746,0.320903" />
            <path d="m 1692.1552,147.79326 c 17.2029,-17.45047 40.916,-21.12853 64.5047,-21.65103 l 237.7746,0.32091" />
            <path d="m 1692.1552,181.6159 c 17.2029,-17.45047 40.916,-21.12853 64.5047,-21.65103 l 237.7746,0.32091" />
            <path d="m 1692.1238,215.2186 c 16.7754,-17.45948 39.8991,-21.13944 62.9015,-21.66221 l 135.4361,0.32107" />
            <path d="m 2061.7214,76.049731 0,479.169569 -319.2214,-0.17857 c -22.1729,-0.30528 -51.1432,8.11928 -78.5307,21.85682" />
        </g>
        <g transform="matrix(0.98756762,-0.1571948,0.1571948,0.98756762,-1182.3183,622.45437)">
            <path d="m 1789.8211,281.67144 4.9456,12.22201" />
            <path d="m 1991.5685,187.73792 -181.9256,74.40494 -39.6429,34.28571 51.4286,-1.78571 182.2827,-74.40494 c 2.6202,-14.16723 -1.2946,-25.06699 -12.1428,-32.5 z" />
            <path d="m 1811.3081,262.66524 c 12.545,-0.76311 13.1069,2.49883 4.4411,9.80302 11.2946,-1.49973 13.2696,2.38373 4.4718,10.29542 11.2248,-2.00422 12.4168,2.22109 4.6196,10.38208" stroke-width="2" />
            <path d="m 1818.75,271.07143 142.8454,-58.37138" stroke-width="4" />
            <path d="m 1823.3929,281.07143 142.5747,-58.31811" stroke-width="4" />
            <path d="m 1967.5009,197.78344 c 10.1442,8.1706 13.2701,19.28434 13.0058,31.8198" />
            <path d="m 1962.9552,199.67748 c 10.1442,8.1706 13.2701,19.28434 13.0058,31.8198" />
            <path d="m 1958.9146,201.06644 c 10.1442,8.1706 13.2701,19.28434 13.0058,31.8198" />
            <path d="m 1955.0003,202.83421 c 10.1442,8.1706 13.2701,19.28434 13.0058,31.8198" />
        </g>
    </g>
</svg>

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






