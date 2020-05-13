'use strict';
import Router from '../../../../core/Router';
import MessageBoard from '../../../../core/MessageBoard';
// import $ from 'jquery';

const validNameRegularExpression = /^[A-Za-z]{3,30}$/;
const othernamesRegularExpression = /^[a-zA-Z]'?([a-zA-Z]|\.| |-){4,}$/;
const usernameRegularExpression = /^[A-Za-z0-9]{3,20}$/;
const emailRegularExpression = /\S+@\S+\.\S+/;
const passwordRegularExpression = /^[A-Za-z0-9]{4,}$/;
const phoneNumberRegularExpression = /^(\+?234|0)?[789]\d{9}$/;

class HelpWithSignUp {
  static validatePassword(password, confirmPassword) {

    if (password === confirmPassword) {
      return true;
    }
    MessageBoard.displayMsg('Password do not match.');
    return false;
  }

  static validateSignup({
    firstname,
    lastname,
    user_type,
    username,
    email,
    phoneNumber,
    password,
  }) {

   

    let hasBeenValidated = true;
    if (!validNameRegularExpression.test(firstname)) {
      MessageBoard.displayMsg('Invalid firstname');
      hasBeenValidated = false;
      console.log('fn err')
    }

    if (!validNameRegularExpression.test(lastname)) {
      MessageBoard.displayMsg('Invalid lastname');
      hasBeenValidated = false;
      console.log('ln err')
    }

    if (!othernamesRegularExpression.test(user_type)) {
      MessageBoard.displayMsg('Invalid usertype');
      hasBeenValidated = false;
      console.log('ot err')
    }

    if (!usernameRegularExpression.test(username)) {
      MessageBoard.displayMsg('Invalid username');
      hasBeenValidated = false;
      console.log('un err')
    }

    if (!emailRegularExpression.test(email)) {
      MessageBoard.displayMsg('Invalid email');
      hasBeenValidated = false;
      console.log('em err')
    }

    if (!phoneNumberRegularExpression.test(phoneNumber)) {
      MessageBoard.displayMsg('Invalid phone number');
      hasBeenValidated = false;
      console.log('ph err')
    }

    if (!passwordRegularExpression.test(password)) {
      MessageBoard.displayMsg('Invalid password');
      hasBeenValidated = false;
      console.log('pw err')
    }
    return hasBeenValidated;
  }

  static triggerValidation() {

    
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('me-password').value;
    console.log(password)
    const confirmPassword = document.getElementById('confirmPassword').value;

    



    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    
    const username = document.getElementById('username').value;

    //const othernames = document.getElementById('othernames').value;
    var user_typeSelect = document.getElementById('user_type');
    const user_type = user_typeSelect.options[user_typeSelect.selectedIndex].text;


    console.log(user_type);
    const info = {
      firstname,
      lastname,
      user_type,
      username,
      email,
      phoneNumber,
      password,
    };

    const isValid = HelpWithSignUp.validateSignup(info);
    if (!isValid) {
      console.log('false from HelpWithSignUp.validateSignup(info)');
      return false;
    }
    const result = HelpWithSignUp.validatePassword(info.password, confirmPassword);
    if (!result) {
      console.log('false from HelpWithSignUp.validatePassword(info.password, confirmPassword)');
      return false;
    }
    return info;
  }


}

if(document.getElementById("email")){

 var inputFields = ['#email', '#phoneNumber', "#firstname", "#lastname", "#username", "#me-password", "#confirmPassword"]
       $(function(){
          inputFields.forEach((input_id)=>{
              $(input_id).bind({
                  blur: function(){
                    if(input_id=="#email"){
                        if($(this).val() != ''){

                          if(emailRegularExpression.test($(this).val())){
                            $(input_id +'-container').removeClass('invalid-email').addClass('valid-email');
                            $(this).removeClass('invalid');
                            $(this).addClass('valid');
                          }else{
                            $(input_id +'-container').removeClass('valid-email').addClass('invalid-email');
                            $(this).removeClass('valid');
                            $(this).addClass('invalid');
                          }
                        }
                    }else if(input_id=="#me-password"){
                      if($(this).val() != ''){
                          if( passwordRegularExpression.test($(this).val())){
                            $(input_id +'-container').removeClass('invalid-email').addClass('valid-email');
                            $(this).removeClass('invalid');
                            $(this).addClass('valid');
                          }else{
                            $(input_id +'-container').removeClass('valid-email').addClass('invalid-email');
                            $(this).removeClass('valid');
                            $(this).addClass('invalid');
                          }
                        }

                    }else if(input_id=="#phoneNumber"){


                      if($(this).val() != ''){
                          if( phoneNumberRegularExpression.test($(this).val())){
                            $(input_id +'-container').removeClass('invalid-email').addClass('valid-email');
                            $(this).removeClass('invalid');
                            $(this).addClass('valid');
                          }else{
                            $(input_id +'-container').removeClass('valid-email').addClass('invalid-email');
                            $(this).removeClass('valid');
                            $(this).addClass('invalid');
                          }
                      }
                    }else if(input_id=="#confirmPassword"){


                      if($(this).val() != ''){
                          if( passwordRegularExpression.test($(this).val())){
                            $(input_id +'-container').removeClass('invalid-email').addClass('valid-email');
                            $(this).removeClass('invalid');
                            $(this).addClass('valid');
                          }else{
                            $(input_id +'-container').removeClass('valid-email').addClass('invalid-email');
                            $(this).removeClass('valid');
                            $(this).addClass('invalid');
                          }
                      }
                    }else if(input_id=="#username"){


                      if($(this).val() != ''){
                          if( usernameRegularExpression.test($(this).val())){
                            $(input_id +'-container').removeClass('invalid-email').addClass('valid-email');
                            $(this).removeClass('invalid');
                            $(this).addClass('valid');
                          }else{
                            $(input_id +'-container').removeClass('valid-email').addClass('invalid-email');
                            $(this).removeClass('valid');
                            $(this).addClass('invalid');
                          }
                      }
                    }else if(input_id=="#firstname"){


                      if($(this).val() != ''){
                          if( usernameRegularExpression.test($(this).val())){
                            $(input_id +'-container').removeClass('invalid-email').addClass('valid-email');
                            $(this).removeClass('invalid');
                            $(this).addClass('valid');
                          }else{
                            $(input_id +'-container').removeClass('valid-email').addClass('invalid-email');
                            $(this).removeClass('valid');
                            $(this).addClass('invalid');
                          }
                      }
                    }else if(input_id=="#lastname"){


                      if($(this).val() != ''){
                          if( usernameRegularExpression.test($(this).val())){
                            $(input_id +'-container').removeClass('invalid-email').addClass('valid-email');
                            $(this).removeClass('invalid');
                            $(this).addClass('valid');
                          }else{
                            $(input_id +'-container').removeClass('valid-email').addClass('invalid-email');
                            $(this).removeClass('valid');
                            $(this).addClass('invalid');
                          }
                      }
                    }


                    
                  }
              });

          })
       
      });
       
}   

function isEmail(email) {
 
}

export default HelpWithSignUp;


