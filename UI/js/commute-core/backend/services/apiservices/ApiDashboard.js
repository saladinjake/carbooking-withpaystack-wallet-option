'use strict';

import FetchPromiseApi from './helpers/FetchPromiseApi';
import Router from '../../../core/Router';
import GateKeepersForUser from './helpers/whois';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import MessageBoard from '../../../core/MessageBoard';

let activeUrl = getOnlineUrlConnection();

function dashboard() {
  if(document.getElementById("dashboard")){
    const user = JSON.parse(localStorage.getItem('userToken'));
    //window.addEventListener('DOMContentLoaded', event => {
      // event.preventDefault();
      const urls = [activeUrl + `/itinerary/${user.user.id}/user`,
                    activeUrl + `/plans/${user.user.id}/user`
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
              const tablebody2 = document.getElementById('tablebody1');
               console.log(datas)
              const itinerary = datas[0].data[0].itinerary;
              const plans = datas[1].data[0].plans;
          
             
              let template2;
              plans.map((item, i) => {
                template2 =`<tr>
                              <td><a href="plan-detail/${item.id}">PLANID${item._id}</a></td>
                                  <td>${item.plan_category_name}   ${item.plan_name} </td>
                                
                                  <td>${item.duration}hrs</td>
                                   <td>${item.itineries.length}</td>
                                    <td>
                                         <a href="plan-detail/${item.id}" class="table-action-btn btn-custom btn-purple"><i class="md md-chevron-right"></i></a>
                                    </td>
                    </tr>`;
            });
             

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
            tablebody1.insertAdjacentHTML('beforeend', template2);

        })
        .catch(error => {
          throw error;
        });
    //});

  }
}

export default dashboard;
  