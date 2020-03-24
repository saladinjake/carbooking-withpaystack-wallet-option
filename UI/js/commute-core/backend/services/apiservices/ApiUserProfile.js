'use strict';
import GateKeepersForUser from './helpers/whois';
import FetchPromiseApi from './helpers/FetchPromiseApi';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import MessageBoard from '../../../core/MessageBoard';
let success_url= 'http://localhost:4000/dashboard';
let activeUrl = getOnlineUrlConnection();


class ApiUpdateProfile {
  static hasClass(el, classname) {
    return el.classList.contains(classname);
  }
  static fetchUserProfile() {
    GateKeepersForUser();
   


    const user = JSON.parse(localStorage.getItem('userToken'));
     let linkOfApi = activeUrl + '/profile/update/'+ user.user.id;
     console.log(linkOfApi)
    

    return fetch(linkOfApi, {
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
     
        if (data) {
         // MessageBoard.displayMsg('Found users profile');
          console.log(JSON.stringify(data.data[0].userInfo[0].id))
          let userRecord = data.data[0].userInfo[0];
          console.log(userRecord)
          // const { email, phone_number, password, firstname, lastname, user_type, username } = userRecord;

          document.getElementById('email').value = userRecord.email;
          document.getElementById('phoneNumber').value = userRecord.phone_number
          document.getElementById('password').value = '';
          document.getElementById('password-confirm').value='';

          document.getElementById('firstname').value = userRecord.firstname;
          document.getElementById('lastname').value= userRecord.lastname;
           document.getElementById('user_type').value= userRecord.user_type;
          document.getElementById('username').value= userRecord.username;
          document.getElementById('avatar-img2').src= userRecord.avatar;

          console.log(userRecord.avatar)

          
        } else {
          
          return MessageBoard.displayMsg('Could not perform Update location operation');
        }
      }).catch(e => {
        return MessageBoard.displayMsg(e);
      })
  }

  static updateProfile(){
     GateKeepersForUser();
     const user = JSON.parse(localStorage.getItem('userToken'));
     let linkOfApi = activeUrl + '/profile/update/'+ user.user.id;
     console.log(linkOfApi)

     let email = document.getElementById('email').value  ;
     let phoneNumber = document.getElementById('phoneNumber').value;
     let password =    document.getElementById('password').value ;
     let passwordConfirm =    document.getElementById('password-confirm').value;
     let firstname =    document.getElementById('firstname').value;
     let lastname =    document.getElementById('lastname').value;
      //const othernames = document.getElementById('othernames').value;
    var user_typeSelect = document.getElementById('user_type');
    const user_type = user_typeSelect.options[user_typeSelect.selectedIndex].text;

     let username =    document.getElementById('username').value;
     let avatar = document.getElementById('file-input').src;
     var fullPath = avatar;
     var filename = fullPath.replace(/^.*[\\\/]/, '');
     avatar = filename;


     let certificate = document.getElementById("certificate").value;
     

     if (!(avatar && avatar.trim().length)) {
       MessageBoard.displayMsg('Please enter a avatar');
       setTimeout(()=>{
        MessageBoard.displayMsg('');
       }, 4000);
    }

     if (!(certificate && certificate.trim().length)) {
      certificate ='COMMUTE-122-211-333111'
      //return MessageBoard.displayMsg('Please enter a certificate');
    }

    if (!(email && email.trim().length)) {
      MessageBoard.displayMsg('Please enter a email');
      setTimeout(()=>{
        MessageBoard.displayMsg('');
       }, 4000);
    }

    if (!(phoneNumber && phoneNumber.trim().length)) {
      MessageBoard.displayMsg('Please enter a phone number');
      setTimeout(()=>{
        MessageBoard.displayMsg('');
       }, 4000);
    }
    if (!(firstname && firstname.trim().length)) {
      MessageBoard.displayMsg('Please enter a firstname');
      setTimeout(()=>{
        MessageBoard.displayMsg('');
       }, 4000);
    }
    if (!(lastname && lastname.trim().length)) {
      MessageBoard.displayMsg('Please enter a lastname');
      setTimeout(()=>{
        MessageBoard.displayMsg('');
       }, 4000);
    }
    if (!(user_type && user_type.trim().length)) {
      MessageBoard.displayMsg('Please enter a type');
      setTimeout(()=>{
        MessageBoard.displayMsg('');
       }, 4000);
    }

    if (!(password && password.trim().length)) {
      MessageBoard.displayMsg('Please enter a password');
      setTimeout(()=>{
        MessageBoard.displayMsg('');
       }, 4000);
    }

    if (!(passwordConfirm && passwordConfirm.trim().length)) {
      MessageBoard.displayMsg('Please enter the confirm password ');
      setTimeout(()=>{
        MessageBoard.displayMsg('');
       }, 4000);
    }

    if(password!= passwordConfirm){
       MessageBoard.displayMsg('password do not match.' );
       setTimeout(()=>{
        MessageBoard.displayMsg('');
       }, 4000);
      }


     let userProfile ={
      email,
      phoneNumber,
      password,
      passwordConfirm,
      firstname,
      lastname,
      user_type,
      username,
      avatar,
      certificate

     };

     return fetch(linkOfApi, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
      body: JSON.stringify(userProfile)
      
    })
      .then(response => response.json())
      .then(data => {
        if(data.success){
          setTimeout(()=>{
            window.location.replace(success_url);
          }, 5000)
          
        }
      })
      .catch(e => {
        return MessageBoard.displayMsg(e);
      })


  }

}



export default ApiUpdateProfile;
