'use strict';
import Router from '../../../core/Router';
import MessageBoard from '../../../core/MessageBoard';
import FetchPromiseApi from './helpers/FetchPromiseApi';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import $ from 'jquery';
const emailRegularExpression = /\S+@\S+\.\S+/;
alertify.set('notifier','position', 'bottom-left');

let activeUrl = getOnlineUrlConnection();
const admin_url =  './admin-dashboard';
let user_dashpane = './dashboard';
let driver_dashpane='./dashboard-driver'

let loginUrl = activeUrl + '/auth/login';
let resetPwUrl = activeUrl + '/auth/forgot_password'


let API = process.env.DEPLOY_FRONT_URL;
let APP = process.env.DEPLOY_BACK_URL;

class ApiLoginService {
  static validate() {

    //if request is from driver app handle it

    if(document.getElementById('drivers-login')){
       loginUrl = activeUrl + '/auth/drivers-login';
    }

    //alert(loginUrl)
    let email = document.getElementById('userName').value;
    let password = document.getElementById('userPw').value;
    let dome2 = document.getElementById('login_btn');
    dome2.innerHTML="loading..."
    dome2.disabled=true;

    console.log(userName);
    if (!userName) {
       MessageBoard.displayMsg('Email is required');
       setTimeout(()=>{  MessageBoard.displayMsg('');},6000)
       var notification = alertify.notify('Email is required', 'error', 5, function(){  console.log('dismissed'); });
      
    }
    if (!userPw) {
       MessageBoard.displayMsg('Password is required');
       var notification = alertify.notify('Password is required', 'error', 5, function(){  console.log('dismissed'); });
      

       setTimeout(()=>{  MessageBoard.displayMsg('');},4000)
    }

    const credentials = {
      email,
      password,
    };

    fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 422) {
           // swal("Good job!", "You clicked the button!", "success");

          setTimeout(()=>{
            dome2.disabled=false;
            dome2.innerHTML='LOG IN';
          },4000)

          $('form').addClass('ahashakeheartache');

          $('input').addClass('ahashakeheartache')

          $('form').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
              $('form').delay(200).removeClass('ahashakeheartache');
           });

          MessageBoard.displayMsg( data.error);
          var notification = alertify.notify(data.error, 'error', 5, function(){  console.log('dismissed'); });
        } else if (data.status === 200) {
          setTimeout(()=>{
            dome2.disabled=false;
            dome2.innerHTML='LOG IN';
          },4000)
          localStorage.setItem('userToken', JSON.stringify(data.data[0]));
          localStorage.login == 'true';
          localStorage.setItem('userToken', JSON.stringify(data.data[0]));


       


          MessageBoard.displayMsg(data.message);

          // swal("Good job!", "You clicked the button!", "success");

          var notification = alertify.notify(data.message, 'success', 5, function(){  console.log('dismissed'); });


          if( data.data[0].user.isAdmin ){
              window.location.href=admin_url
          }
          // else if(data.data[0].user.roles=='Individual Driver'){
          //     window.location.href=driver_dashpane
          // }

          else if(data.data[0].user.roles=='user' ){
              window.location.href=user_dashpane
          } 

          // if(data.data[0].user.roles!='user'){
          //    user_dashpane=driver_dashpane
          // }

          // data.data[0].user.isAdmin
          //   ? (window.location.replace(admin_url) )
          //   : (window.location.replace(user_dashpane));
        }else if(data.status==409){
          $('input').addClass('ahashakeheartache')

          // swal("Good job!", "You clicked the button!", "success");

          MessageBoard.displayMsg(data.error);
          var notification = alertify.notify(data.error, 'error', 5, function(){  console.log('dismissed'); });
          setTimeout(()=>{
            dome2.disabled=false;
            dome2.innerHTML='LOG IN';
          },4000)

          $('form').addClass('ahashakeheartache');

          $('form').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
              $('form').delay(200).removeClass('ahashakeheartache');
           });


      
        }
        else if(data.status==404){
          $('input').addClass('ahashakeheartache')
          MessageBoard.displayMsg(data.error);
          // swal("Good job!", "You clicked the button!", "success");
          var notification = alertify.notify(data.error, 'error', 5, function(){  console.log('dismissed'); });
          setTimeout(()=>{
            dome2.disabled=false;
            dome2.innerHTML='LOG IN';
          },4000)

          $('form').addClass('ahashakeheartache');

          $('form').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
              $('form').delay(200).removeClass('ahashakeheartache');
           });



           
        }
         else if(data.status==400){
          $('input').addClass('ahashakeheartache')
          console.log(data)
          // swal("Good job!", "You clicked the button!", "success");
          MessageBoard.displayMsg("credentials entered could not be found.");
          var notification = alertify.notify("credentials entered could not be found.", 'error', 5, function(){  console.log('dismissed'); });
         setTimeout(()=>{
            dome2.disabled=false;
            dome2.innerHTML='LOG IN';
          },4000)
          // MessageBoard.displayMsg(data.error );
          //Router.redirect('./');

          $('form').addClass('ahashakeheartache');

          $('form').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
              $('form').delay(200).removeClass('ahashakeheartache');
           });



          
        }
      })
      .catch(error => {
        setTimeout(()=>{
            dome2.disabled=false;
            dome2.innerHTML='LOG IN';
          },4000)
        //throw error;
        $('input').addClass('ahashakeheartache')
        MessageBoard.displayMsg(error + 'here');
        $('form').addClass('ahashakeheartache');

          $('form').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
              $('form').delay(200).removeClass('ahashakeheartache');
           });


        // swal("Good job!", "You clicked the button!", "success");
      });
  }

  static passwordReset(){

    if(document.getElementById('recovery-drivers')){
       resetPwUrl = activeUrl + '/auth/drivers-forgot_password';
    }//drivers-forgot_password

    //alert(resetPwUrl)





    let email = document.getElementById('email').value;
    const emailForm = document.getElementById('e-form');
    const successAnimationStart = document.getElementById("success-mark")
    // if (!email) {
    //    MessageBoard.displayMsg('Email is required.');
    //         var notification = alertify.notify('Email is required.', 'error', 5, function(){  console.log('dismissed'); });
     
    //    return false;
    //    //setTimeout(()=>{  MessageBoard.displayMsg('');},6000)
    // }

    if(!emailRegularExpression.test(email)){
      MessageBoard.displayMsg('Email is invalid.');
      var notification = alertify.notify('Email is invalid.', 'error', 5, function(){  console.log('dismissed'); });
     
      return false;
    }
    

    const credentials = {
      email
    };

    fetch(resetPwUrl, {
      method: 'POST',
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        //alert(data)
        if (data.status) {
           emailForm.style.display='none';
           setTimeout(()=>{  MessageBoard.displayMsg('Password reset mail sent.');},6000)
           var notification = alertify.notify('Password reset mail sent.', 'error', 5, function(){  console.log('dismissed'); });
     
           //setTimeout(()=>{  MessageBoard.displayMsg('');},9000)
           setTimeout(function () {
              successAnimationStart.style.display="block"
                 
            }, 5000);

        } else {
          MessageBoard.displayMsg("Enter your email");
          setTimeout(()=>{  MessageBoard.displayMsg('');},9000)
          var notification = alertify.notify("Enter your email", 'error', 5, function(){  console.log('dismissed'); });
     
         // alert(error)
        }
      })
      .catch(error => {
        //alert(error + "here")
        throw error;
      });

  }
}


const button = document.querySelector('#login_btn')
const loader = document.querySelector('#loader-container')
const confirmation = document.querySelector('#confirmation-container')


// button.addEventListener('click', (e) => {
//   e.preventDefault()
//   showLoader()
//   showConfirmation()
//   resetLogin()
// })

const showLoader = () => {
  loader.classList.add('loader-open')
  loader.classList.remove('loader-close')
}

const showConfirmation = () => {
  setTimeout(() => {
    confirmation.classList.add('confirmation-open')
    confirmation.classList.remove('confirmation-close')
  }, 2000)
}

const resetLogin = () => {
  setTimeout(() => {
    loader.classList.add('loader-close')
    loader.classList.remove('loader-open')
    confirmation.classList.add('confirmation-close')
    confirmation.classList.remove('confirmation-open')
  }, 4000)
}

export default ApiLoginService;
