/* eslint-disable no-plusplus */
'use strict';
import ApiBot from '../backend/services/postgres_api_bot';
import Router from './Router';

class WebsiteLogin {
  constructor() {
    
  }
  attachEvents() {
    if (document.getElementById('loginpage')) {
      //this.isLoggedIn();
      this.switchFormEvents();
      this.loginEvents();
      this.logOutEvents();
    }
    this.isLoggedIn();
  }
  switchFormEvents() {
    
  }
  loginEvents() {
   if(document.getElementById('login_btn')){
      let loginBtn = document.getElementById('login_btn');
      let that = this;
      loginBtn.onclick = function(event) {
        event.preventDefault();
        that.authenticate(event);
      };
    }
  }
  authenticate(event) {
    let that = this;
    event.preventDefault();
    ApiBot.authenticateUser();
  }
  logOutEvents() {
    // eslint-disable-next-line no-plusplus

    // if (document.querySelectorAll('.logOut')) {
    //   for (let i = 0; i < this.logOutBtn.length; i++) {
    //     this.logOutBtn[i].addEventListener('click', () => {
    //       localStorage.removeItem('userToken');
    //       Router.redirect((page = 'index.html'));
    //     });
    //   }
    // }
  }

  isLoggedIn(){
   let  user = localStorage.getItem('userToken');
   console.log(typeof user + "is here")
   if( (!document.getElementById('signup_page') && !document.getElementById('loginpage') ) && !localStorage.getItem('userToken')){
        window.location.href="index.html";  
    }
    else if( (!document.getElementById('loginpage') ) && !localStorage.getItem('userToken')){
       // window.location.href="index.html";  
    }else if( (!document.getElementById('loginpage') || !document.getElementById('signup_page') ) && localStorage.getItem('userToken')){
      user = localStorage.getItem('userToken');
      var regExp = /\{([^)]+)\}/;
      var matches = regExp.exec(user);
      if(user.indexOf('id')){
        console.log("yes ")
        user  = JSON.parse(user);
        if(!user.token && !document.getElementById('loginpage') && !document.getElementById('signup_page')){
          console.log("yes 2")
            window.location.href="index.html";
         }else if(user.token && (document.getElementById('signup_page') || document.getElementById('loginpage') )){
          console.log("yes 3")
           
               window.location.href="dashboard.html"
          
        }
      }else{
        window.location.href="index.html"
      }
      
      

    }
  }

}

export default WebsiteLogin;
