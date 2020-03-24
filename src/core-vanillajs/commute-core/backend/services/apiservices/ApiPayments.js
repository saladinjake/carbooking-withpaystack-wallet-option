'use strict';
import GateKeepersForUser from './helpers/whois';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import FetchPromiseApi from './helpers/FetchPromiseApi';



let activeUrl = getOnlineUrlConnection();
export default class ApiWallet{
  static getUsersPaymentTrnx(){
  	if(document.getElementById("payment-page")){
	GateKeepersForUser();


    const user = JSON.parse(localStorage.getItem('userToken'));
    let recordUrl;
    const reportId = localStorage.getItem('Id');
      recordUrl = activeUrl + `/payment-payments/${user.user.email}`;
    console.log('specific url: ' + recordUrl);
    //window.addEventListener('load', (event) => {
    //event.preventDefault();
    
    return fetch(recordUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
           const records = data.data[0].tranx;
          
          return records;
        }
      })
      .catch(error => {
        throw error;
      });
    //});
  }
}
}