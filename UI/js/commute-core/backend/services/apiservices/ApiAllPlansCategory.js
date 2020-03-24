
import GateKeepersForUser from './helpers/whois';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
// import $ from 'jquery';
 var price;
     var plan;
     var cart ;
     var carPrice;
     var carName;
     var car;
     var planCounter =1;
     var allplans = document.getElementsByClassName('plan');
     var element;
     var overlaySelected;
     var maxCars=4; 
     var selectedCars =0; 
     var overlaySelectedCars; 
     var elementCars;
     var planList;
     var planName;
     // var prev;
     // var next;
     var rootParentSection;
     var next2;

     const currentView = 1;
     const maxViewSteps = 3;
     const steps = ["choose-plan", "choose-cars","add-itineries"];

let activeUrl = getOnlineUrlConnection();
let mainUrl = activeUrl;
  var slideIndex = 1;
  var prev, next;
$(document).ready(function(){
  if(document.getElementById("planpage")){
   showSlides(slideIndex); 

   if(localStorage.getItem('planSelected')){
    var selectedPlansTaken = localStorage.getItem('planSelected');
    alert(selectedPlansTaken)
   }

   prev = document.getElementById("previous");
   next = document.getElementById("next");

   prev.addEventListener("click", (e)=>{
     plusSlides(-1)
   })
  

   next.addEventListener("click", (e)=>{
     plusSlides(1)
   })

 }  

})




// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }


  
  var index = slideIndex-1;
  slides[index].style.display = "block";
  slides[index].style.opacity=1;
}

selectedUserPlans()
function selectedUserPlans(){
     
    

     

    let chosenPlan;
     document.addEventListener("DOMContentLoaded", function(event) {
       if(localStorage.getItem("planSelected")){
        chosenPlan  = localStorage.getItem("planSelected");
       }
       // prev = document.getElementById("previous");
       // next = document.getElementById("next");



        

     });


    
     
// document.addEventListener("DOMContentLoaded", function(event) {

    document.body.addEventListener('click', function(e){
      e.preventDefault();
      if(e.target.classList.contains('plan')){
  
           if(planCounter >1){

              $('#overlay').fadeIn(200,function(){
                 // document.gcd etElementById("messenger").innerHTML="cant choose more than one plan"
                  $('#box').animate({'top':'220px'},200);
              });

               $('#boxclose').click(function(){
                    $('#box').animate({'top':'-200px'},500,function(){
                        $('#overlay').fadeOut('fast');
                    });
                });
            
             document.getElementById("msg-").innerHTML="cant choose more than one plan"
             
             // return false
           }else{
            //$('#modal-1').toggleClass("md-show"); //you can list several class names 
                var id = e.target.getAttribute("id");
                //next.setAttribute('disabled', false);
                next.style.display="block"
              
                overlaySelected = document.getElementById(id+ "-plan");
                var closer = document.getElementById(id+ '-boxclose');

                 // Removes an element from the document
               element = e.target.parentNode.parentNode;
               element.style.border="3px solid blue";

               rootParentSection =  e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
               //alert(rootParentSection.id)

               localStorage.setItem("planSelected",e.target.id)


                closer.style.display="block";

                closer.addEventListener('click',()=>{
                  planCounter =1;
                   element.style.border="none";
                   closer.style.display="none";
                })
            
                overlaySelected.style.opacity=0.9;

               price = e.target.getAttribute('data-price');
               planName = e.target.getAttribute('data-plan');

               planList = {
                price,
                planName
               };
          
           }
           planCounter+=1;
           localStorage.setItem("planSelectedCount",planCounter)
           return true;
           
        }
           
       },false);







    var carList = [];
     
     var allcars = document.getElementsByClassName('car-select');
  
      document.body.addEventListener('click', function(e){
          e.preventDefault();

        
         if(e.target.classList.contains('car-select')){
           if(selectedCars >maxCars){
             
             $('#overlay').fadeIn(200,function(){
               $("#messenger").html('cant choose more than 3 cars')
                 // document.getElementById("messenger").innerHTML="cant choose more than one plan"
                  $('#box').animate({'top':'220px'},200);
              });

              $('#boxclose').click(function(){
                    $('#box').animate({'top':'-200px'},500,function(){
                        $('#overlay').fadeOut('fast');
                    });
            });
               
             document.getElementById("msg-").innerHTML = "cant choose more than 3 cars";
    
          }else{


            //$('#modal-1').toggleClass("md-show"); //you can list several class names 
            var id = e.target.getAttribute("id");
          
            overlaySelectedCars = document.getElementById(id+ "-plan");
            
            overlaySelectedCars.style.opacity=0.5;

             carPrice = e.target.getAttribute('data-price');
           carName = e.target.getAttribute('data-carmodel');
           const carImage= e.target.getAttribute('data-image');

            carList.push({
                price: carPrice,
                name: carName,
                image: carImage
            })

          

            elementCars = e.target.parentNode.parentNode;
           elementCars.style.border="3px solid blue";

           rootParentSection =  e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
          //alert(rootParentSection.id + "is here")
           }
         }
         selectedCars+=1;
           

          
           
       },false);

       let ItineraryList =[];
       document.body.addEventListener('click', function(e){
        e.preventDefault();
        if(e.target.id=="submitItinerary"){
            var location = document.getElementById("location").value;
            var destination = document.getElementById("destination").value;
            var testCert = document.getElementById("drive-test-certificate").value;
            var startDate = document.getElementById("start").value;
            var endDate = document.getElementById("end").value;
            var driverOpt = document.getElementById("driver-option");
            const optDriver = driverOpt.options[driverOpt.selectedIndex].text;
            var certDate = document.getElementById("datepicker-autoclose").value;
            var travelOpt = document.getElementById("traveloption")
            const optTraveler = travelOpt.options[travelOpt.selectedIndex].text;
            var noHrs = document.getElementById("no_hrs").value;
            var carsSelected = carList;
            var planChosen = planList;

            const userPlanItineries = {
              location,
              destination,
              testCert,
              startDate,
              endDate,
              optDriver,
              certDate,
              optTraveler,
              noHrs,
              // carsSelected,
              // planName: planChosen.planName,
              // price: planChosen.price
            };

            ItineraryList.push(userPlanItineries);

            var _tr;
            _tr = `<tr> 
                <td>${startDate}</td>
                <td>${location}</td>
                <td>${destination}</td>
                <td>${optDriver}</td>
                <td>
                  <a href="#" class="table-action-btn"><i className="md md-chevron-right"></i></a>    
                  </td>
                </tr>`;
                $(_tr).hide().insertAfter("#startPoint").fadeIn('slow');
            

            const userOnline = JSON.parse(localStorage.getItem('userToken'));
            console.log(ItineraryList)
              let it_url = mainUrl + `/itinerary/${userOnline.user.id}/user`;
            fetch(  it_url , {
          method: 'POST',
          headers: {
             'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': userOnline.token,

          },
          body: JSON.stringify( userPlanItineries),
           mode: 'cors',
        }).then(response => response.json())
            .then(data =>{

            }).catch(e => { console.log(e)})


        }
        
            

        

    })
     



  



     




// });

     

}
class ApiGetAllPlansRecord {
 

  static getData(urlType) {
    const carsUrl = activeUrl + '/cars';
    GateKeepersForUser();
    if (urlType == '/individual/plans/view') {
      activeUrl = activeUrl + urlType;
    }else{
      activeUrl = activeUrl + urlType;
    }
    
    const user = JSON.parse(localStorage.getItem('userToken'));
    const urls = [ activeUrl , carsUrl];
    let displayPlanTemplate, carLists ,planList, displayCarsTemplates;
    
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
      
     
     return  Promise.all(promises)
        .then(datas => {
          console.log(datas)

          if (datas[1].data[0].carsAvailable) {
            carLists = datas[1].data[0].carsAvailable;
            let car_count = 101;
            carLists.map((item,i) =>{
               displayCarsTemplates +=`<div class="col-sm-6 col-lg-3 col-md-4 mobiles">
              <a class="boxclose" id="btnc-${car_count}-boxclose"></a>

                                    <div class="product-list-box thumb ">
                                        <a href="#" class="image-popup" title="Screenshot-1">
                                            <img style="width:200px; height:200px;" src="${item.images[0]}" class="thumb-img" alt="work-thumbnail" />
                                        </a>

                                        <div class="product-action">
                                            
                                        </div>
                                        <div class="cars-info">
                                            <h4 class="m-t-0 text-center"><a id="car-info-${car_count}" href="#" class="text-dark">${item.car_type}</a> </h4>
                                         
                                        </div>
                     

                                          <button style="margin:0px auto"  id="btnc-${car_count}"  class="btn btn-primary waves-effect waves-light cd-add-to-cart js-cd-add-to-cart car-select" data-id="btn-${car_count}" data-type="car-select" data-price="1000" data-type="car" data-carmodel="Range Rover" data-image="public/assets/images/products/big/2.png" data-id="1" >Select</button>

                                    </div>
                                    <div class="overlay-plan-cars"  id="btnc-${car_count}-plan">
    <a href="#" class="icon" title="User Profile">
      <i class="fa fa-check"></i>
    </a>
    
  </div>
                                </div>
`;
 car_count++;
            });
          }
          
          document.getElementById("add-cars-template").innerHTML=displayCarsTemplates;
          
          if (datas[0].data[0].individualPlans) {
            planList = datas[0].data[0].individualPlans;
            
            
           //alert(recordList.length)
            planList.map((item,i)=>{
                       // alert(recordList[i].plan_categories)
                       if(true){

                        displayPlanTemplate +=`<div  class="col-sm-6 col-md-6 col-lg-3">
                         <a class="boxclose" id="btn-${i}-boxclose"></a>
                                <div class="price_card text-center">
                                  <div class="pricing-header bg-purple">
                                    <span class="price" style="fontSize:24px">₦ ${item.price}</span>
                                    <span class="name">${item.plan_name} ${item.plan_categories}</span>
                                  </div>
                                  <div class="col-lg-12 m-t-20">
                                  <div class="col-sm-12 col-md-12 col-lg-12 center-block text-center">
                                  <p>${item.description}</p>
                                  </div></div>
                                  <button id="btn-${i}" data-id="btn-${i}" data-type="plan" data-plan="${item.plan_name} ${item.plan_categories}" data-price="${item.price}" class=" btn btn-primary waves-effect waves-light w-md cd-add-to-cart js-cd-add-to-cart plan">Choose</button>
                                </div> 
                                <div className="overlay-plan" id="btn-${i}-plan">
                                  <a href="#" class="icon" title="User Profile">
                                    <i class="fa fa-check"></i>
                                  </a>
                                 
                                </div>
                                                            </div> 
                              `;
                  }
 
            });

           document.getElementById("plan-section").innerHTML=displayPlanTemplate;


          } else if (data.data[0].coperatePlans) {
            planList = data.data[0].coperatePlans;
          
            return planList;
          }
       
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }
}

export default ApiGetAllPlansRecord;
