'use strict';
import Router from '../../../core/Router';
import MessageBoard from '../../../core/MessageBoard';
import FetchPromiseApi from './helpers/FetchPromiseApi';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';

let activeUrl = getOnlineUrlConnection();

const sosUrl = activeUrl + '/sos';

class ApiSOSService {
  static saveSOSRequest(user) {
    GateKeepersForUser();

    fetch(sosUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 422) {
          MessageBoard.displayMsg('server error: ' + data.error);
        } else if (data.status === 200) {
          MessageBoard.displayMsg("Your sos request has been sent.");
         
        } else {
          MessageBoard.displayMsg(data.error);
          // Router.redirect('login.html');
        }
      })
      .catch(error => {
        throw error;
      });
  }

  
}

export default ApiSOSService;
