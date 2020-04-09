/* eslint-disable no-plusplus */
'use strict';
import ApiBot from '../backend/services/postgres_api_bot';
import Router from './Router';
import $ from 'jquery';

const home_url="http://localhost:4000/";
class WebsiteLogin {
  constructor() {
    
  }
  attachEvents() {
    this.isLoggedIn();
     this.logOutEvents();
    if (document.getElementById('loginpage')) {
      //this.isLoggedIn();
      $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });

      
      this.switchFormEvents();
      this.loginEvents();
      
    }

    
   
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

  static hasClass(el, classname) {
    return el.classList.contains(classname);
  }
  logOutEvents() {
    // eslint-disable-next-line no-plusplus

    if (document.getElementById('logOut')) {

      document.body.addEventListener("click", (e)=>{
         if(e.target.getAttribute("id") =="logOut" ){
           e.preventDefault();
           console.log("logging out")
           localStorage.removeItem("userToken");
           localStorage.clear();
           //localStorage.clearItems();
            window.location.href="/";  

         }
      });

      
    }
  }




  isLoggedIn(){
    
  window.addEventListener('load', (event) => {
    

   console.log("this has been called to check")
   let  user = localStorage.getItem('userToken');
   
   if( (!document.getElementById('signup_page') && !document.getElementById('loginpage') && !document.getElementById('pass_forgot_page') ) && !localStorage.getItem('userToken')){
        
        window.location.href="/";  
    }
    else if( (!document.getElementById('loginpage') ) && !localStorage.getItem('userToken')){
       
       // window.location.href="index.html";  
    }else if( (!document.getElementById('pass_forgot_page') || !document.getElementById('loginpage') || !document.getElementById('signup_page') ) && localStorage.getItem('userToken')){
      user = localStorage.getItem('userToken');
      var regExp = /\{([^)]+)\}/;
      var matches = regExp.exec(user);
      if(user.indexOf('id')){
        console.log("yes ")
        if(JSON.parse(user)){
           user  =JSON.parse(user) ;
            if(!user.token && !document.getElementById('loginpage') && !document.getElementById('signup_page')){
              console.log("yes 2")
         
                window.location.href="./";
             }else if(user.token && (document.getElementById('signup_page') || document.getElementById('loginpage') )){
              
              window.location.href="./dashboard"
          
            }
        }
      }else{
        window.location.href="/"
      }
      
      

    }



    })
  

   


    //finally check if token has expired then log user out
    if(localStorage.getItem('userToken')){
        const user = JSON.parse(localStorage.getItem('userToken'));
        
        let recordUrl;
        
          recordUrl = 'http://localhost:12000/api/v1'+ `/faqs`; //this url is default test url for checking autorization via jwt token to see if user is still available on local storage
          //but inactive
      
        console.log('specific url: ' + recordUrl);

        fetch(recordUrl, {
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
            if (data.status === 403) { //if it falls back that user is unauthorized to view this page
              localStorage.clear();
               window.location.href="/";
            }
          })
          .catch(error => {
            throw error;
          });

    }
    

  }

}

export default WebsiteLogin;
