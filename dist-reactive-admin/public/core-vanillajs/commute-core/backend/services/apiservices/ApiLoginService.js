'use strict';
import Router from '../../../core/Router';
import MessageBoard from '../../../core/MessageBoard';
import FetchPromiseApi from './helpers/FetchPromiseApi';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';

let activeUrl = getOnlineUrlConnection();





const loginUrl = activeUrl + '/auth/login';
const resetPwUrl = activeUrl + '/auth/forgot_password'
class ApiLoginService {
  static validate() {
    let email = document.getElementById('userName').value;
    let password = document.getElementById('userPw').value;
    console.log(userName);
    if (!userName) {
       MessageBoard.displayMsg('Email is required');

       setTimeout(()=>{  MessageBoard.displayMsg('');},6000)
    }
    if (!userPw) {
       MessageBoard.displayMsg('Password is required');

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
          MessageBoard.displayMsg( data.error);
        } else if (data.status === 200) {
          localStorage.setItem('userToken', JSON.stringify(data.data[0]));
          localStorage.login == 'true';
          localStorage.setItem('userToken', JSON.stringify(data.data[0]));
          MessageBoard.displayMsg(data.message);
          data.data[0].user.isAdmin
            ? (window.location.href = 'admin.html')
            : (window.location.href = 'dashboard.html');
        } else {
          MessageBoard.displayMsg(data.error);
          Router.redirect('login.html');
        }
      })
      .catch(error => {
        //throw error;
        MessageBoard.displayMsg(error);
      });
  }

  static passwordReset(){

    let email = document.getElementById('email').value;
    const emailForm = document.getElementById('e-form');
    const successAnimationStart = document.getElementById("success-mark")
    if (!email) {
       MessageBoard.displayMsg('Email is required');

       setTimeout(()=>{  MessageBoard.displayMsg('');},6000)
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
        if (data) {
         emailForm.style.display='none';
            setTimeout(function () {
               successAnimationStart.style.display="block"
               
            }, 10);
        } else {
          MessageBoard.displayMsg('some error occured');
          
        }
      })
      .catch(error => {
        throw error;
      });

  }
}

export default ApiLoginService;
