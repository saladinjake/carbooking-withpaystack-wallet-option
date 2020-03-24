'use strict';

import FetchPromiseApi from './helpers/FetchPromiseApi';
import Router from '../../../core/Router';
import GateKeepersForUser from './helpers/whois';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import MessageBoard from '../../../core/MessageBoard';

let activeUrl = getOnlineUrlConnection();
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

function ApiItineraryHistory() {
  if(document.getElementById("itinerary-history")){
    const user = JSON.parse(localStorage.getItem('userToken'));
    //window.addEventListener('DOMContentLoaded', event => {
      // event.preventDefault();
      const urls = [activeUrl + `/itinerary/${user.user.id}/user`,
        
      ];


      

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

              const tablebody = document.getElementById('tablebody-it');


              // if(datas.status="404"){
              //   let Notemplate2='';
              //   Notemplate2 =`<tr>
              //                 <td><a href="#"></a></td>
              //                     <td></td>
              //                     <td></td>
              //                     <td></td>
              //                     <td></td>
              //                       <td>
                                        
              //                       </td>
              //       </tr>`;
              //       tablebody.insertAdjacentHTML('beforeend', Notemplate2);

              //  }else{
               
             
                     //console.log(datas)
                    const itinerary = [... new Set(datas[0].data[0].itinerary)];
                    
                  let eachRecord=``;
                  itinerary.map((item, i) => {
                      if(item.status=="completed"){
                         item.status=`<span class="label label-table label-success">${item.status}</span>`;
                       }else{
                         item.status= `<span class="label label-table label-danger">${item.status}</span>`;
                       }
                      
                      eachRecord = `
                      <tr key={i}>
                          <td> ${formatDate(new Date(item.created_at))} </td>
                          <td>${item.plan_category}</td>
                          <td>${item.start_location} </td>
                          <td>${item.destination}</td>
                          <td> ${formatDate(new Date(item.start_time))}</td>
                          <td>${item.drive_option}</td>
                           <td>${item.no_hours}</td>  
                            <td>${item.status}</td>
                     </tr>`; 
                      tablebody.insertAdjacentHTML('beforeend', eachRecord); 
                  });
                 
          // }

        })
        .catch(error => {
          throw error;
        });
    //});

  }
}

export default ApiItineraryHistory;
  