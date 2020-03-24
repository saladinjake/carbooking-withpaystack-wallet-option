'use strict';
const localUrl = 'http://localhost:12000/api/v1';
const serverUrl = localUrl;
let resolvedUrl;
function getOnlineUrlConnection() {
  fetch(serverUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  })
    .then(response => response.json())
    .then(data => {
      if (data) {
        return (resolvedUrl = serverUrl);
      } else {
        return (resolvedUrl = localUrl);
      }
    })
    .catch(e => console.log(e));

  if (!resolvedUrl) {
    resolvedUrl = localUrl;
  }

  // return resolvedUrl;
  return localUrl;
}

let data = getOnlineUrlConnection();
console.log('data is :' + data);
export default getOnlineUrlConnection;
