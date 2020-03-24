'use strict';

import FetchPromiseApi from './helpers/FetchPromiseApi';
import Router from '../../../core/Router';
import GateKeepersForUser from './helpers/whois';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import MessageBoard from '../../../core/MessageBoard';

let activeUrl = getOnlineUrlConnection();

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
              const tablebody = document.getElementById('tablebody');
             
               console.log(datas)
              const itinerary = datas[0].data[0].itinerary;
              
          
             
             
             

            let eachRecord=``;
            itinerary.map((item, i) => {
                eachRecord = `
                <tr key={i}>
                    <td>${item.start_location} </td>
                    <td>${item.destination}</td>
                    <td>${item.start_time}</td>
                    <td>${item.drive_option}</td>
                                                                     
               </tr>`;  
            });
            tablebody.insertAdjacentHTML('beforeend', eachRecord);
           

        })
        .catch(error => {
          throw error;
        });
    //});

  }
}

export default ApiItineraryHistory;
  