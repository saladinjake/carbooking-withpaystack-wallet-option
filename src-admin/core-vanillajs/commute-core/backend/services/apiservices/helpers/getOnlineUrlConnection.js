'use strict';





const localUrl =  "http://localhost:12000/api/v1"  //"https://demouserapp.commute.ng:12000/api/v1"//process.env.DEPLOY_BACK_URL;
const serverUrl = localUrl;
let resolvedUrl;
function getOnlineUrlConnection() {
 
  return localUrl;
}

let data = getOnlineUrlConnection();
console.log('data is :' + data);
export default getOnlineUrlConnection;
