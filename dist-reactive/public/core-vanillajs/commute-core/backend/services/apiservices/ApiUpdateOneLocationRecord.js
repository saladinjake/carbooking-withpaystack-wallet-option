'use strict';
import GateKeepersForUser from './helpers/whois';
import FetchPromiseApi from './helpers/FetchPromiseApi';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import MessageBoard from '../../../core/MessageBoard';

let activeUrl = getOnlineUrlConnection();

class ApiUpdateOneLocationRecord {
  static hasClass(el, classname) {
    return el.classList.contains(classname);
  }
  static updateOneLocationById() {
    GateKeepersForUser();
    let linkOfApi;

    const user = JSON.parse(localStorage.getItem('userToken'));

    const clickedId = localStorage.getItem('Id');
    const reportType = localStorage.getItem('reportType');
    if (reportType === 'red-flag') {
      linkOfApi = activeUrl + `/red-flags/${clickedId}/location`;
    } else if (reportType === 'intervention') {
      linkOfApi = activeUrl + `/interventions/${clickedId}/location`;
    }
    const newLocation = document.getElementById('locationInput').value;
    const updatedLocation = document.getElementById('your-new_loc');
    let autoLoc = '';
    document.addEventListener('click', function(event) {
      event.preventDefault();
      if (ApiUpdateOneLocationRecord.hasClass(event.target, 'auto-get-loc')) {
        console.log('getting geolocation');
        if (!('geolocation' in navigator)) {
          return;
        }
        navigator.geolocation.getCurrentPosition(
          function(position) {
            autoLoc = `${position.coords.latitude}, ${position.coords.longitude}`;
            console.log(location);
          },
          function(err) {
            console.log(err);
            alert("Couldn't fetch location!");
            autoLoc = newLocation;
          },
          { timeout: 7000 },
        );
      }
    });

    if (!(newLocation && newLocation.trim().length)) {
      MessageBoard.displayMsg('<p style="color:red";>Please choose a location</p>');
    }

    // if(autoLoc && autoLoc.trim().length){
    // 	newLocation = autoLoc
    // }

    updatedLocation.innerHTML = newLocation;

    const editData = {
      location: newLocation,
    };

    return fetch(linkOfApi, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
      body: JSON.stringify(editData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
          MessageBoard.displayMsg('Updated Location data record');
        } else {
          console.log('update loc error');
          return MessageBoard.displayMsg('Could not perform Update location operation');
        }
      });
  }
}

export default ApiUpdateOneLocationRecord;
