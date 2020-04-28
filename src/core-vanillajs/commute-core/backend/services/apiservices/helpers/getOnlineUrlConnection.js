'use strict';
const localUrl = process.env.DEPLOY_BACK_URL || 'https://localhost:12000/api/v1';
const serverUrl = localUrl;
let resolvedUrl;
function getOnlineUrlConnection() {
 
  return localUrl;
}

let data = getOnlineUrlConnection();
console.log('data is :' + data);
export default getOnlineUrlConnection;
