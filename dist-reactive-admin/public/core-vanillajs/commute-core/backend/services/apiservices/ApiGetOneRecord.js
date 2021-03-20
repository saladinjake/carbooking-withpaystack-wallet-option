'use strict';
import GateKeepersForUser from './helpers/whois';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import FetchPromiseApi from './helpers/FetchPromiseApi';

let activeUrl = getOnlineUrlConnection();

class ApiGetOneRecord {
  static getDataById() {
    GateKeepersForUser();
    const user = JSON.parse(localStorage.getItem('userToken'));
    let recordUrl;
    let recordType;
    const reportType = localStorage.getItem('reportType');
    const reportId = localStorage.getItem('Id');
    if (reportType === 'sos') {
      recordUrl = activeUrl + `/sos/${reportId}`;
      recordType = 'sos';
    } else if (reportType === 'create-ticket') {
      recordUrl = activeUrl + `/feedback/${reportId}`;
      recordType = 'create-ticket';
    }
    console.log('specific url: ' + recordUrl);

    //window.addEventListener('load', (event) => {
    //event.preventDefault();
    return fetch(recordUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
          const records = data.data[0].intervention;
          const { status, location, comment, images, videos } = records;
          return records;
        }
      })
      .catch(error => {
        throw error;
      });
    //});
  }
}
export default ApiGetOneRecord;
