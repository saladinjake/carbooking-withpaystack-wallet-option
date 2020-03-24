'use strict';
function GateKeepersForUser() {
  let user ;
  if(JSON.parse(localStorage.getItem('userToken'))){
     user = JSON.parse(localStorage.getItem('userToken'));
  }
  //back to login
  if (!user) {
    window.location.href = './index.html';
  }

  else if(user.isVerified===false){
  	window.location.href = './index.html';
  }

  
}

export default GateKeepersForUser;

