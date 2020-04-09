


import SOSModel from '../models/SOSModel';
import $ from 'jquery';
const SUCCESS_URL= 'http://localhost:4001/sos-history';
const POST_URL = "http://localhost:12000/api/v1/sos";
const notification_url = "http://localhost:12000/api/v1/notifications";
import Recording from './SOSRecorder';
function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
}


function GateKeepersForUser() {
  let user ;
  // if(JSON.parse(localStorage.getItem('userToken'))){
     user = JSON.parse(localStorage.getItem('userToken'));
  // }
  //back to login
  if (!user) {
    window.location.href = './';
  }

  else if(user.isVerified===false){
    window.location.href = './';
  }

  
}

export default class SOS{
	constructor(){}


	seeAllSOSNotifications(){

	}

	static index(){
		
	}

	
	attachEvents(){
     if(localStorage.getItem('userToken')){
	  if (document.getElementById('sos-page')) {

     

     
			// $("#show-map").hide();
			//  $(document).ready(function() {
			// 	// get location button functionality
			// 	$("#get-location-btn").click(function(event){
			// 		event.preventDefault();
   //       
   //        document.getElementById("record").disabled=false;
   //        document.getElementById("record").click()
			// 		$("#hide-on-click").hide();
			// 		$("#show-map").show();
			// 	});
			// });

       new Recording();

			document.getElementById("cancle-sos").addEventListener("click", function(e){
                window.location.href="./dashboard"
            })
            


	  }

	  if(document.getElementById("view-sos")){
         this.indexController()
	  }

     }else{
       
     }

	}


	static render(items) {
    const user = JSON.parse(localStorage.getItem('userToken'))
    const recordItems = document.getElementById('fetched-data-sos');
    let className;
    if (items.length === 0) {
      recordItems.innerHTML = 'No records Yet';
      recordItems.style.textAlign = 'center';
      recordItems.style.fontSize = '32px';
      recordItems.style.font = 'bold';
    } else {
      items.forEach((item) => {
        if(item.status=="Completed"){
             className ='label-success';
          }else if(item.status=="Pending"){
             className ='label-warning';
          }else{
            className="label-danger"
          }
        const eachRecord = `
           <tr>
          
               <td class=""><a href="#">CMT-USER-${user.user.account_num}</a></td>
                <td class="">${item.address}</td>
                 
                 <td class="">${formatDate(new Date(item.created_at))}</td>
                   <td class="">
                      <span class="label ${className}">${item.status}</span>
                    </td>
                    
            </tr>

       
    `;

        recordItems.innerHTML += eachRecord;
      });
    }
  }



	indexController(){
       let that = this;
    let dataPromise = SOSModel.getAllUserSOS();
    dataPromise
      .then(data => {
      	// let newData = data[0].data[0].redFlags
        SOS.render(data);
      })
      .catch(err => console.log(err));
	}


		



	

		

	
}





    /*
     Bind listeners when the page loads.
    */


  