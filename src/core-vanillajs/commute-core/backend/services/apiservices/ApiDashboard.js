'use strict';

import FetchPromiseApi from './helpers/FetchPromiseApi';
import Router from '../../../core/Router';
import GateKeepersForUser from './helpers/whois';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import MessageBoard from '../../../core/MessageBoard';
import $ from "jquery"


const loadQuotation = (url) =>{

  let postUrl = url + "/" + localStorage.getItem("setPlan") + '/user' 
  let user = JSON.parse(localStorage.getItem('userToken'))
  fetch(postUrl, {
      method: 'GET',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {

         console.log(data)
        if (data.status === 200) {

          const records = data.data[0].quote;
          const { status, amount, email, username, phone_number, plan_id, quotation_id } = records;
          //planned-quotation


          let tablebody2 = document.getElementById('planned-quotation');
              
                      let className='';
                      let eachRecord=``;
                     records.map((item, i) => {

                       

                          
                       
                        if(item.status=="Unpaid"){
                             className=`label-table label-danger`;
                             localStorage.setItem('paymentOptions',
                              JSON.stringify({
                                amount: item.amount,
                                reference: item.reference,
                                quotation_id: item.quotation_id,
                                plan_id: item.plan_id,

                              }))
                             //item.status=`${item.status}`;
                          }else if(item.status=="Paid"){
                            className=`label-table  label-success`
                            //item.status= `<span class="label ">${item.status}</span>`;
                          }else{
                            className =`label-table label-warning`;
                            
                            //item.status=`<span class="label ">${item.status}</span>`;
                          }
                          eachRecord = `
                          <tr id="${i}">
                                <td class="">${formatDate(new Date(item.created_at))} </td>
                          <td class="">${item.plan_id}</td>
                          <td class="">${item.quotation_id} </td>
                          <td class="">${item.amount}</td>
                           <td class="">${item.reference}</td>
                            
                            <td class=""><span class="label ${className}">${item.status}</span></td>
                                                                           
                         </tr>`; 
                         tablebody2.insertAdjacentHTML('beforeend', eachRecord); 
                      });
               
        }
      })
      .catch(error => {
        throw error;
      });
}

window.setItem = (t) =>{
  let dataRequired = JSON.parse(localStorage.getItem('paymentOptions'))
  //alert(dataRequired.amount)
  let paymentDetail = {
    amount:t.dataset.price || dataRequired.amount,
    reference: t.dataset.reference || dataRequired.reference,
    email: t.dataset.email,
    quotation_id: t.dataset.quotation_id || dataRequired.quotation_id,
    plan_id: t.dataset.plan_id || dataRequired.plan_id,
    phone: t.dataset.phone,
    firstname: t.dataset.firstname,
    balance : t.dataset.userbalance
  };
 localStorage.setItem('quoteToPay', JSON.stringify(paymentDetail))
}

//console.log(/^[a-zA-Z]'?([a-zA-Z]|\.| |-){4,}$/.test('solomon\'s'), 'from dash')
let activeUrl = getOnlineUrlConnection();
var executed = false;

 var current_page = 1;
    var records_per_page = 6;

let itinerary = []
let plans = [];

var InforObj = [];


window.setClickedItinerary = (o) =>{
  console.log("hello clicked..")
  if(o.dataset.status=="ongoing"){
                             
       o.dataset.status=`<span class="label label-table label-danger">${o.dataset.status}</span>`;
  }else if(o.dataset.status=="completed"){
                          
     o.dataset.status= `<span class="label label-table label-success">${o.dataset.status}</span>`;
  }else{
                            
    o.dataset.status=`<span class="label label-table label-warning">${o.dataset.status}</span>`;
  }
  //document.getElementById("itin_ids").innerHTML= o.dataset.id;
  //document.getElementById("itin_status").innerHTML= o.dataset.status;
  //pickupti

  
  document.getElementById("start_date").value= o.dataset.start_time;
  document.getElementById("start_time").value = o.dataset.end_time || '00:00:00'
  document.getElementById("startloc").value= o.dataset.start_location
  document.getElementById("destination").value= o.dataset.destination
  document.getElementById("near_driver").value= "Driver not yet Assigned"
  document.getElementById("travel_option").value= o.dataset.travel_option

  localStorage.setItem('startlocation',o.dataset.start_location);
  localStorage.setItem('endlocation',o.dataset.destination)
}



function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " //+ strTime;
}


function searchTable() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("foo-table-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("demo-foo-pagination");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}




window.getPlanId = (item) =>{
  localStorage.setItem("setPlan",item.dataset.plan_id);
  //alert(item.dataset.plan_id)
  
  window.location.replace("http://localhost:4000/plan-detail")
}


let planClicked ={};
planClicked._id =0;

function dashboard() {

  $("#map-set").hide();


// $("#show").click(function(){
//   $("p").show();
// });
  // const loader = document.querySelector('#loader');
  // loader.style.display = 'block';

  // const mockupPreview = document.getElementById("mockup-loading")
  // mockupPreview.style.display="block"

  const gtd= document.getElementById("gtd");
  if(document.getElementById("dashboard") || document.getElementById('plan-detail')){


   
    const user = JSON.parse(localStorage.getItem('userToken'));
    //window.addEventListener('DOMContentLoaded', event => {
      // event.preventDefault();
    const urls = [activeUrl + `/itinerary/${user.user.id}/user`,
                    activeUrl + `/plans/${user.user.id}/user`,
                    
    ];



     if(!executed){
       executed =true
     

      

      const promises = urls.map(url =>
        fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': user.token,
          },
           mode: 'cors',
        }).then(response => response.json()),
      );



      Promise.all(promises)
        .then(datas => {

            
            itinerary =[...new Set(datas[0].data[0].itinerary)] || [];
            plans = [...new Set(datas[1].data[0].plans)] || [];
            //console.log(JSON.stringify(plans)+"main plan")
            let currentPlan = plans[plans.length -1] || []; // last plan user embarked on
            
            localStorage.setItem('currentUserPlan', currentPlan);

            

           
           

            // console.log(datas)
           if(document.getElementById("dashboard")){
              document.getElementById("idvalue").innerHTML=currentPlan.plan_id

               document.getElementById("plan-detail").addEventListener("click", (e)=>{
               //magical
                 e.preventDefault();
                 //console.log("current plan id:"+ currentPlan._id)
                document.getElementById("plan-current-"+currentPlan._id).click();
             })


               document.getElementById("foo-table-input").addEventListener("keyup",(e)=>{
                 searchTable();
               })


              let tablebody = document.getElementById('tablebody');
              let tablebody2 = document.getElementById('tablebody1');
              document.getElementById("plan-id").innerHTML = currentPlan.plan_name || "Current Plan";
              //console.log(itinerary.length+ ":it length")
              

                      let eachRecord=``;
                      itinerary.map((item, i) => {
                        if(item.status=="ongoing"){
                             
                             item.status=`<span class="label label-table label-danger">${item.status}</span>`;
                          }else if(item.status=="completed"){
                          
                            item.status= `<span class="label label-table label-success">${item.status}</span>`;
                          }else{
                            
                            item.status=`<span class="label label-table label-warning">${item.status}</span>`;
                          }
                          eachRecord = `
                          <tr id="${i}">
                                <td class="">${formatDate(new Date(item.created_at))} </td>
                          <td class="">${item.plan_category}</td>
                          <td class="">${item.start_location} </td>
                          <td class="">${item.destination}</td>
                            
                            <td class="">${item.status}</td>
                                                                           
                         </tr>`; 
                         tablebody.insertAdjacentHTML('beforeend', eachRecord); 
                      });
               
                         
                      // const tablebody = document.getElementById('tablebody');
                        // var paginatedItinerary = Paginator(itinerary);
                        let template2;
                        let classFor =``;
                        let planAction = ``;
                        plans.map((item, i) => {
                           //console.log(item)
                           if(item.has_updated=="Yes"){ //if quotation has been sent
                             //item.price= `Quote not yet sent.`;
                             //item.payment_status=`<span class="label label-table label-danger">${item.payment_status}</span>`;
                             

                            if(item.status=="Paid"){
                                classFor =`label-success`;
                                item.price= `₦ ${item.price}`;
                                planAction = ` <td class="">
                                                       <a disabled href="#" class="table-action-btn  btn-purple"><i class="glyphicon glyphicon-ok"></i></a>
                                                  </td>`
                            //item.payment_status= `<span class="label label-table label-success">${item.payment_status}</span>`+ `₦ ${item.price}`;
                            }else{
                               classFor =`label-danger`;
                             planAction = ` <td class="">
                                                   <a onclick="getPlanId(this)" id="plan-current-${item.plan_id}" href="#" data-plan_id="${item.plan_id}" data-id="${item.plan_id}" class="table-action-btn btn-custom btn-purple"><i class="md md-chevron-right"></i></a>
                                              </td>`
                            }
                          }else if(item.has_updated=="No"){
                            classFor="label-warning"
                            item.price= `Quote not yet sent.`;
                             //item.payment_status=`<span class="label label-table label-danger">${item.payment_status}</span>`;
                             planAction = ` <td class="">
                                                   <a id="plan-current-${item.plan_id}" onclick="getPlanId(this)" data-plan_id="${item.plan_id}" data-id="${item.plan_id}" href="#" class="table-action-btn btn-custom btn-purple"><i class="md md-chevron-right"></i></a>
                                              </td>`
                            //item.price= `₦ ${item.price}`;
                            //item.payment_status=`<span class="label label-table label-warning">${item.payment_status}</span>`;
                          }
                          template2 =`<tr>
                                        <td class=""><a onclick="getPlanId(this)" data-plan_id="${item.plan_id}" data-id="${item.plan_id}" href="plan-detail">${item.plan_id}</a></td>
                                            <td class="">   ${item.plan_name} </td>
                                          
                                            <td class="">${item.no_hours} hrs</td>
                                            <td class=""><span class="label ${classFor}">${item.status}</span></td>
                                            <td class=""><span class="label label-warning">Charges:</span>NGN  ${item.price}</td>
                                            <td class="">  ${planAction}</td>
                                             
                              </tr>`;
                              tablebody1.insertAdjacentHTML('beforeend', template2);
                      });
                        
                       
                 


            }
            // loader.style.display="none"
            // mockupPreview.style.display="none"
               
               // cars attached to itineraries
            if(document.getElementById("plan-detail")){

                   
                   const clickedId = localStorage.getItem("setPlan");

                   //alert(clickedId)
                 // console.log(clickedId)
                  planClicked = plans.find(item => item.plan_id==clickedId );
                  //console.log(JSON.stringify(planClicked) +"was this")
                  if(planClicked){
                    if(document.getElementById("plan_id")){
                      document.getElementById("plan_id").innerHTML=planClicked.plan_id || 'No Plan';
                    }
                    //
                  

                  let carbounds = document.getElementById("car-chosen");
                  // var selectedCars = [...new Set(plans[0].cars_on_plan)];
                   var selectedCars = [...new Set(planClicked.cars_on_plan)];
                   //console.log(planClicked.cars_on_plan)
                  let car_record='';

                  console.log(selectedCars)

                  //console.log(JSON.stringify(selectedCars)+"all cars for this guy")
                  selectedCars.map((item, i) => {
                          car_record += `
                           <a href="#"><div class="col-sm-6  col-md-6 col-lg-4" >
                                <div class="widget-bg-color-icon card-box">
                                    <div class="bg-icon bg-icon-info pull-left" >
                                        <img src="${item.image|| item.images}" style="height:90px"/>
                                    </div>
                                    <div class="col-lg-6 pull-right text-right">
                                        <h3 class="text-dark"><b className="">${item.car_type} ${item.model} ${item.car_year}</b></h3>
                                        <p class="text-muted"></p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div></a>`; 
                         
                });
                carbounds.innerHTML=car_record; 


                  //itineries attached to plan
                  let planned_itineraries = document.getElementById("planned-itineraries");
                  var selectedItineraries = [...new Set(planClicked.itineries)];
                  //console.log(planClicked+"taken")
                 

                  let className='';
                  let itineraries_record='';
                  console.log(planClicked)
                  let payButton = ``;
                  selectedItineraries.map((item, i) => {
                           if(item.status=="Ongoing"){
                             className="label-danger";
                             //item.status=`<span class="label label-table label-danger">${item.status}</span>`;

                             payButton=`<td class="">
                                    <a  href="#" onclick="setClickedItinerary(this)" data-driver="${planClicked.cars_on_plan[0].assigned_driver_name}" data-driver_email="${planClicked.cars_on_plan[0].assigned_driver_email}" data-driver-plate_num="${planClicked.cars_on_plan[0].assigned_driver_phone}" data-driver_loc="${planClicked.cars_on_plan[0].assigned_driver_location}" data-status="${item.status}"  data-id="${item.id}" data-travel_option="${item.travel_option}" data-pickup_time=${item.pickup_time} data-start_time="${formatDate(new Date(item.start_time))}" data-end_time="${item.end_time}"  data-start_location="${item.start_location}" data-destination="${item.destination}" data-drive_option="${item.drive_option}"  class="table-action-btn btn-custom btn-purple right-bar-toggle"><i class="md md-chevron-right"></i></a>
                                </td>`;

                            
                          }else if(item.status=="Completed"){
                             className="label-success";
                            //item.status= `<span class="label label-table label-success">${item.status}</span>`;
                            payButton= `<td class="">
                                       <button class="btn btn-danger" disabled>Completed</button>
                            </td>`;
                          }else{
                            className="label-warning";

                            payButton=`<td class="">
                                    <a  href="#" onclick="setClickedItinerary(this)" data-driver="${planClicked.cars_on_plan[0].assigned_driver_name}" data-driver_email="${planClicked.cars_on_plan[0].assigned_driver_email}" data-driver-plate_num="${planClicked.cars_on_plan[0].assigned_driver_phone}" data-driver_loc="${planClicked.cars_on_plan[0].assigned_driver_location}" data-status="${item.status}"  data-id="${item.id}" data-travel_option="${item.travel_option}" data-pickup_time=${item.pickup_time} data-start_time="${formatDate(new Date(item.start_time))}" data-end_time="${item.end_time}"  data-start_location="${item.start_location}" data-destination="${item.destination}" data-drive_option="${item.drive_option}"  class="table-action-btn btn-custom btn-purple right-bar-toggle"><i class="md md-chevron-right"></i></a>
                                </td>`;

                            //   payButton= `<td class="">
                            //            <a onclick="setItem(this)"   data-amount="${item.amount}"    data-reference="${item.reference}"   data-quotation_id="${item.quotation_id}" data-plan_id="${item.plan_id}" data-userbalance="${user.user.balance}" data-phone="${user.user.phoneNumber}" data-firstname="${user.user.firstname}" data-email="${user.user.email}" href="./pay-action"  class="btn btn-primary" >Make payment</a>
                            // </td>`;

                          

                            
                          }
                          itineraries_record = `
                          <tr id="${i}">
                                <td class="">${formatDate(new Date(item.start_time))} </td> 
                                <td class="">${item.start_location}</td>
                                <td class="">${item.destination} </td>
                                <td class="">${item.drive_option}</td>
                            
                                <td class=""><span class="label label-table ${className}">${item.status}</span></td>
                                ${payButton}
                                
                                                                               
                         </tr>`; 
                         planned_itineraries.insertAdjacentHTML('beforeend', itineraries_record); 
                      });


                  let tablebody2 = document.getElementById('tablebody1');
               
                          let dataRequired = JSON.parse(localStorage.getItem('paymentOptions'))

                          // if(!dataRequired.reference){

                          //  dataRequired =  {
                          //     amount: '',
                          //     reference:'',
                          //     email: '',
                          //     quotation_id: '',
                          //     plan_id: '',
                          //     phone: '',
                          //     firstname: '',
                          //     balance : ''
                          //   };
                          // }
                  
                        // var paginatedItinerary = Paginator(itinerary);
                        let template2;
                        let actionBtn =``;

                        [planClicked].map((item, i) => {
                           if(item.status=="Unpaid" ||  item.status=='Paid'){
                             //item.price=`<span class="label label-table label-danger">${item.payment_status}</span>`;
                             if(item.has_updated=='Yes'){

                                if(item.status=='Paid'){
                                    item.reference='CMT-REF-'+item.plan_id;
                                 item.quotation_id='CMT-QUT-'+item.plan_id;
                                 actionBtn = `<div class="">
                                       <a    data-amount="${item.price}"    data-reference="${item.reference}"   data-quotation_id="${item.quotation_id}" data-plan_id="${item.plan_id}" data-userbalance="${user.user.balance}" data-phone="${user.user.phoneNumber}" data-firstname="${user.user.firstname}" data-email="${user.user.email}" href="#"  class="label label-success" >Successful Payment</a>
                                 </div><h4>Payment Reference : ${item.reference}</h4>`
                               }else{
                                 item.reference='CMT-REF-'+item.plan_id;
                                 item.quotation_id='CMT-QUT-'+item.plan_id;
                                 actionBtn = `<div class="">
                                       <a onclick="setItem(this)"   data-amount="${item.price}"    data-reference="${item.reference}"   data-quotation_id="${item.quotation_id}" data-plan_id="${item.plan_id}" data-userbalance="${user.user.balance}" data-phone="${user.user.phoneNumber}" data-firstname="${user.user.firstname}" data-email="${user.user.email}" href="./pay-action"  class="btn btn-primary" >Make payment</a>
                                 </div>`

                               }
                             }else{
                                actionBtn = `<div class="">
                                       <a onclick="setItem(this)"   data-amount="0"    data-reference=""   data-quotation_id="" data-plan_id="" data-userbalance="${user.user.balance}" data-phone="${user.user.phoneNumber}" data-firstname="${user.user.firstname}" data-email="${user.user.email}" href="#" disabled  class="btn btn-primary" >Make payment</a>
                                 </div>`
                             }
                             
                           }else{
                             item.price= ` ${item.price}`;
                            actionBtn =`<td class="">
                                        ${item.price}  <span class="label label-success">${item.status}</span>                          
                                        </td>`


                           }
                          template2 =`<tr>
                                        <div class=""><strong>Plan ID : <a href="plan-detail">${item.plan_id}</a></strong></div><br/>
                                            <div class=""><strong>Plan :   ${item.plan_name} </div><br/>
                                          
                                            <div class=""><strong>Plan Category : ${item.plan_category_name} </strong></div><br/>
                                            <div class=""><strong>Created Date : ${formatDate(new Date(item.created_at))} </strong></div><br/>
                                            ${actionBtn}

                                            <div style="display:none" class=""><strong>Duration: ${item.duration} hrs</strong></div><br/>
                                            
                                              

                                              
                              </tr>`;
                              tablebody1.insertAdjacentHTML('beforeend', template2);
                      });

                       //quotation will show here... load quotation with the given plan id
                    let url = 'http://localhost:12000/api/v1/quotations'  
                    loadQuotation(url);

                        


                        //start trip detail right side view
                        initialize()



                      
                        
              }
              
            
            }

        })
        .catch(error => {
            //loader.style.display = 'block';
            //mockupPreview.style.display="block"
            //gtd.style.display="none"

          throw error;
        });
    //});

    }



  }
}


window.initializeMap = () => {

    //Add the event listener after Google Mpas and window is loaded
    $('#start').click(function (e) {

       $("#plan-detail").hide();
         $("#mapout").show();
         document.getElementById('mapout').style.opacity=1



      e.preventDefault()
         var mapOptions = {
      center: { lat: 6.5244, lng: 3.3792},// 6.5244, 3.3792
      zoom: 8
  };
  var map = new google.maps.Map(document.getElementById('gmaps-types'), mapOptions);


  var geocoder = new google.maps.Geocoder();
  var directionsService = new google.maps.DirectionsService;  
  var directionsDisplay = new google.maps.DirectionsRenderer;

  showUserDrift(localStorage.getItem("startlocation"), localStorage.getItem('endlocation'), geocoder, map);
  showTravelRoute(map, directionsService, directionsDisplay,   localStorage.getItem("startlocation") , localStorage.getItem('endlocation'))
  let nearMyCordinates = getuserLoc(localStorage.getItem("startlocation"))
  
  driversNearBy(map,nearMyCordinates )


    });
}




function getuserLoc(address){

  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            
             
            let  lat =results[0].geometry.location.lat();
            let  lng =results[0].geometry.location.lng()
            

            //console.log(userpos)
            // let userpos =lat + ',' + lng;
            // console.log(userpos)

            //return userpos

          }else{
            alert("wrong")
          }
     })     
}


function showTravelRoute(map, directionsService, directionsDisplay, source , destination){
  

      directionsDisplay.setMap(map); 

      calculateAndDisplayRoute(directionsService, directionsDisplay, source, destination)
}

 function calculateAndDisplayRoute(directionsService, directionsDisplay, source, destination) {  
  directionsService.route({  
    origin: source,  
    destination: destination,  
    travelMode: google.maps.TravelMode.DRIVING  
  }, function(response, status) {  
    if (status === google.maps.DirectionsStatus.OK) {  
      directionsDisplay.setDirections(response);  
    } else {  
      window.alert('Directions request failed due to ' + status);  
    }  
  });  
}


function getAlldriversOntheMap(map){

}

function driversNearBy(MAP, startLocationCordinates){ //lat , long
   const user = JSON.parse(localStorage.getItem('userToken'));

   //let cords = startLocationCordinates.split(',')

   // console.log(startLocationCordinates)
   
   // startLocationCordinatesLat =parseFloat(cords[0]);
   // startLocationCordinatesLng = parseFloat(cords[1]);

  //let nearDriver = activeUrl + `/driverLocation/`+ startLocationCordinatesLat + '/'+ startLocationCordinatesLng;
  let drivers = activeUrl + `/drivers`


  fetch(drivers, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': user.token,
          },
           mode: 'cors',
        }).then(response => response.json())
      .then(result =>{
        results.map((item,i)=>{
               console.log(item.location)
        })

      }).catch(e=>{
        console.log(e)
      })
}

function showUserDrift(startlocAdress, destinationAddress, geocoder, resultsMap){
  

  var address1 =  startlocAdress;                //document.getElementById('address').value;
  var address2 =  destinationAddress;
  geocoder.geocode({'address': address1}, function(results, status) {
          if (status === 'OK') {
            console.log(results[0].geometry.location + "is your location")
            //resultsMap.setCenter(results[0].geometry.location);
            //alert(results[0].geometry.location)
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location,
              animation: google.maps.Animation.DROP, 
            });


            var contentString = '<div id="content"><h1>Pickup Location.' +
                    `</h1><p>${address1}</p></div>`;
 



 
          const infowindow = new google.maps.InfoWindow({
                            content: contentString,
                            maxWidth: 200
          });
         
          marker.addListener('click', function () {
                    
                            infowindow.open(marker.get('map'), marker);
                            InforObj[0] = infowindow;
          });

           marker.addListener('mouseover', function () {
                    
                            infowindow.open(marker.get('map'), marker);
                            InforObj[0] = infowindow;
          });
















          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
  });


  geocoder.geocode({'address': address2}, function(results, status) {
          if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                  map: resultsMap,
                  position: results[0].geometry.location,
                  animation: google.maps.Animation.DROP, 
                });


                var contentString = '<div id="content"><h1>Destination.' +
                        `</h1><p>${address2}</p></div>`;
     



     
                const infowindow = new google.maps.InfoWindow({
                                  content: contentString,
                                  maxWidth: 200
                });
               
                marker.addListener('click', function () {
                          
                                  infowindow.open(marker.get('map'), marker);
                                  InforObj[0] = infowindow;
                });

                 marker.addListener('mouseover', function () {
                          
                                  infowindow.open(marker.get('map'), marker);
                                  InforObj[0] = infowindow;
                });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
  });

}





export default dashboard;
  