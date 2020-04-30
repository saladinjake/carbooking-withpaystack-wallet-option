'use strict';
import Router from './Router';
import MessageBoard from './MessageBoard';
import ApiBot from '../backend/services/postgres_api_bot';

class WebsiteSignUp {
  constructor() {}
  attachEvents() {
    let that = this;


    // if(localStorage.getItem('userToken')){
    //   console.log(typeof localStorage.getItem('userToken') )
    //   if(typeof localStorage.getItem('userToken') ==='string'){
    //      window.location.href = './index.html';
    //   }else if(typeof localStorage.getItem('userToken')==='object'){
    //     window.location.href="./dashboard.html"
    //   }
       
    // }

    //only if this btn exists can user signup
    if (document.getElementById('signup_page')) {
      this.isLoggedIn();
      console.log("you are in sign up")
      let signUp = document.getElementById('signup_btn');
      signUp.addEventListener('click', e => {
        e.preventDefault();
        that.authorize(e);
      });


      const pwHint = document.getElementById('me-password');
    pwHint.addEventListener('focus', () =>{
      MessageBoard.displayMsg('Password should contain alphabets and characters or numbers');

       // setTimeout(()=>{  MessageBoard.displayMsg('');},6000)
    });


    }
  }

  authorize(event) {
    event.preventDefault();
    ApiBot.authorizeUser();
  }

  isLoggedIn(){
    let user ;
    // if(JSON.parse(localStorage.getItem('userToken'))){
    //    user = JSON.parse(localStorage.getItem('userToken'));
    //    if(user){
    //      window.location.href="dashboard.html"
    //    }
    // }
  }

}

export default WebsiteSignUp;
