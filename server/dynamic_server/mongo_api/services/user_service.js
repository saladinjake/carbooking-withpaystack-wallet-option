/* eslint-disable prefer-const */


import dotenv from 'dotenv';
dotenv.config();
import Database from '../models/db';
/*pAy stack*/
import request from 'request';
import _ from 'lodash';

const csv = require('csv-parser');
const uuidv4 = require('uuid/v4');
const sgMail = require('@sendgrid/mail');

var postmark = require("postmark");

import carsApi from './cars_api';

import {passport ,express} from '../App'; 
//import EarningsModel from '../models/EarningsModel';
import AuditNotificationModel from '../models/AuditNotification.model';
import Retrieval from '../models/Retrival.model';
import UserPlanModel from '../models/UserPlan.model';
import PlanModel from "../models/Plan.model";
import ItineraryModel from '../models/Itinerary.model';
import IndividualPlanModel from '../models/IndividualPlan.model';
import NotificationModel from '../models/Notification.model'
import FAQModel from "../models/FAQ.model";
import coperatePlanModel from '../models/CoperatePlan.model';
import { TokenGenerator } from '../helpers/token_generator';
import { ErrorHandler } from '../helpers/error_handler';
import { ResponseHandler } from '../helpers/response_handler';
import UserModel from '../models/User.model.js';
import PartnersModel from "../models/Partners.model.js";
import EarningsModel from '../models/EarningsModel';
//import DriversModel from "../models/Driver.model.js";
import WalletModel from '../models/Wallet.model.js';
import PaymentModel from "../models/Payments.model.js";
import QuotationsModel from "../models/Quotation.model.js"
import QuoteModel from "../models/Quote.model.js";
import AutoincrementId from '../helpers/autoincrement_mongo.js';
import EmailTokenMakerForSignUp from '../models/Token.model.js';
import ForgotPasswordToken from '../models/ForgotPassword.model.js';
import CarsModel from "../models/Cars.model.js";
import SOSModel from "../models/SOS.model";
import  InterventionsModel from '../models/Feedback.model';
import SendgridEmailSettingModel from "../models/SendgridEmailSettings.model";
import PaystackSettingModel from "../models/PaystackSettings.model";
import InstagramSettingModel from "../models/InstagramSettings.model";
import FacebookSettingModel from "../models/FacebookSettings.model";
import AwsS3Model from "../models/AWS3BucketSettings.model";
import GmailSettingModel from "../models/GmailSettings.model";

import InspectionModel from "../models/Inspection.model";
import DriveTestModel from  "../models/DriveTest.model";
import RolesAndPreviledgesModel from '../models/RolesAndPreviledges.model'
import MechModel from '../models/Repairs.model';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import path from 'path';
const sendgridTransport = require('nodemailer-sendgrid-transport');
//import SocialAuthService from './social_auth_service';
import Storage from '../helpers/storage';
import multer from 'multer';
import Mixins from '../helpers/mixins';
import fs from 'fs';
import handlebars from 'handlebars';

import MailMan from './MailMan'



// import carInfo  from "../migrations/cars_info";


//other services
import CarsService  from "./cars_services";
import FaqService  from "./faqs_service";
import  FeedbackService  from './feedback_service';
import  SOSService  from "./sos_service";



import MailConfig from '../config/email';

//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;

var gmailTransport = MailConfig.GmailTransport;
var smtpTransport = MailConfig.SMTPTransport;


const {initializePayment, verifyPayment} = require('../config/paystack')(request);


const MongooseDatabase =  Database.getInstance() || new  Database();
let BACKEND_API = "https://demouserapp.commute.ng:12000/api/v1";


var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};








export class UserService {

  static NotificationEmail( request, response,templateDir, replacements,userEmail,STATUS=201){
   //MailConfig.ViewOption(gmailTransport,hbs);
    let HelperOptions = {
      from:    ' "Commute" <noreply@commute.ng>',         //"tester@softclo.com", //'"COMMUTE TAXI SERVICE" <juwavictor@gmail.com>',
      to:  userEmail, //'Joshua.adedoyin@softclo.com',
      subject: 'Notification',
      html: 'test',
      context: {
        name:"COMMUTE TAXI",
        email: "tester@softclo.com",
        address: "3A DOTUN CLOSE, IKEJA LAGOS"
      }
    };

//     Signed out
// Adedoyin Joshua
//joshadedoyin.aj@gmail.com
   

    readHTMLFile(__dirname + templateDir, function(err, html) {
                var template = handlebars.compile(html);
               // var replacements = replacements;
                var htmlToSend = template(replacements);
                
                HelperOptions.html = htmlToSend;
                smtpTransport.sendMail(HelperOptions, (error,info) => {
                      if(error) {
                        console.log(error);
                        //res.json(error);
                        return response.status(400).send({ msg: error });
                      }
                      // console.log("email is send");
                      // console.log(info);
                      //res.json(info)
                      return response.status(200).send({status: 200 ,success:'ok', msg: 'Successfully updated  .', data: info });
                     // return res.status(STATUS).send({ msg: "successfully sent you a password reset link", status:'ok',data: info }); 
                
                });
    })   

 }

  static passwordResetsMail( request, response,userEmail,templateDir, replacementObj={username:'saladin'}, tokenSTR){
    let HelperOptions = {
      from: ' "Commute" <noreply@commute.ng>',            //'"COMMUTE TAXI SERVICE" <juwavictor@gmail.com>',
      to:  userEmail, 
      subject: 'Hellow world!',
      html: 'test',
      context: {
        name:"COMMUTE TAXI",
        email: "tester@softclo.com",
        address: "3A DOTUN CLOSE, IKEJA LAGOS"
      }
    };

   
    readHTMLFile(__dirname + templateDir, function(err, html) {
                var template = handlebars.compile(html);
                var replacements = {
                     username: replacementObj.username ,//'juwavictor@gmail.com'
                     link: BACKEND_API + '/auth/resetMyPassword\/' + tokenSTR 
                };
                var htmlToSend = template(replacements);
                
                HelperOptions.html = htmlToSend;
                smtpTransport.sendMail(HelperOptions, (error,info) => {
                      if(error) {
                        // console.log(error);
                        //res.json(error);
                        return response.status(400).send({ msg: error });
                      }
                      // console.log("email is send");
                      // console.log(info);
                      //res.json(info)
                      
                });

               

                   

             })   

 }

  static newUserMail(request,response, result, templateDir='/views/templates/signup-verification.html', tokenToSend, status=201){



    let HelperOptions = {
      from:   ' "Commute" <noreply@commute.ng>',  //'"COMMUTE TAXI SERVICE" <juwavictor@gmail.com>',  // process.env.SMTP_USER_NAME,
      to:  result.email, //'Joshua.adedoyin@softclo.com',
      subject: 'Sign Up Activation Email',
      html: 'test',
      context: {
        name:"COMMUTE TAXI",
        email:  "tester@softclo.com",
        address: "3A DOTUN CLOSE, IKEJA LAGOS"
      }
    };


   
    readHTMLFile(__dirname + templateDir, function(err, html) {
                var template = handlebars.compile(html);
                var replacements = {
                     username: result.username,
                     link:  BACKEND_API +'/auth/confirmation/' + tokenToSend, 
                
                };
                var htmlToSend = template(replacements);
                
                HelperOptions.html = htmlToSend;
                smtpTransport.sendMail(HelperOptions, (error,info) => {
                      if(error) {
                        console.log(error);
                        return response.status(400).send({ msg: error });
                       
                      }
                      console.log("email is send");
                      console.log(info);
                      //res.json(info)
                      
                       
                       




                });

               

                   

      })   

    

   

  }
  // static signup(request, response) {
  //     let { firstname, 
  //         lastname,  
  //         username, 
  //         email, 
  //         phoneNumber,
  //         user_type, 
  //         password,
           
  //   } = request.body;

   

  //   let from_mobile = false;
  //   if(request.body.from_mobile==true){
  //     from_mobile =true;
  //   }

  //   console.log(password)
  //   password = TokenGenerator.hashPassword(password.trim());
  //   let roles = '';
  //   if(request.body.roles){
  //     roles = request.body.roles
  //   }else{
  //     roles = 'user';
  //   }

  //   let Newuser =null


  //   if(request.body.from_mobile){
  //     Newuser = new UserModel({ 
  //       id: new AutoincrementId(UserModel).counter(), 
  //       firstname, 
  //       lastname, 
  //       user_type, 
  //       username, 
  //       email, 
  //       phone_number: phoneNumber, 
  //       password,
  //       is_admin: false,
  //       roles: roles,
  //       isVerified: true,
  //       //accountNumber: uuidv4()
  //        });

  //   }else{
        
  //     Newuser = new UserModel({ 
  //           id: new AutoincrementId(UserModel).counter(), 
  //           firstname, 
  //           lastname, 
  //           user_type, 
  //           username, 
  //           email, 
  //           phone_number: phoneNumber, 
  //           password,
  //           is_admin: false,
  //           roles: roles,
  //       //accountNumber: uuidv4()
  //     });


  //   }
    

     

  //   if(from_mobile==false){

  //     Newuser.save()
  //     .then(data => {
  //       const user = data;
  //       const result = {
  //         id: user.id,
  //         email: user.email,
  //         username: user.username,
  //       };
  //       let emailT = crypto.randomBytes(16).toString('hex');
  //       // Create a verification token for this user
  //       var emailtoken = new EmailTokenMakerForSignUp({ _userId: user._id, email_confirm_token: emailT });
        
  //                         // Save the verification token
  //       emailtoken.save(function (err) {
  //           if (err) { 
  //              return console.log(err.message );
  //           }
                              
  //                             //console.log(__dirname + '/views/templates/signup-verification.html')

  //          UserService.newUserMail(request,response, result,'/views/templates/signup-verification.html', emailtoken.email_confirm_token,201)
  //               const token = TokenGenerator.generateToken(result);
  //               return response.status(201).json({
  //                                          status: 201,
  //                                         data: [
  //                                                {
  //                                                  token,
  //                                                   from_mobile:true,
  //                                                   user,
  //                                                },
  //                                               ],
  //                                                message: 'User created successfully',
  //               });

  //          })


                            
  //     })
  //     .catch(err => {
  //           console.log(err+ 'error here')
  //           response.status(400).json({
  //             status: 400,
  //             error: ErrorHandler.errors().validationError,
  //           });
  //     });





  //   }else{
    

  //     Newuser.save()
  //     .then(data => {
  //       const user = data;
  //       const result = {
  //         id: user.id,
  //         email: user.email,
  //         username: user.username,
  //       };


  //       const token = TokenGenerator.generateToken(result);
  //       return response.status(201).json({
  //               status: 201,
  //               data: [
  //                      {
  //                       token,
  //                       user,
  //                      },
  //                     ],
  //                     message: 'User created successfully',
  //             });                 
  //     })
  //     .catch(err => {
  //           console.log(err+ 'error here')
  //           response.status(400).json({
  //             status: 400,
  //             error: ErrorHandler.errors().validationError,
  //           });
  //     });


  //   }

      
  // }

  // static login(request, response) {
  //   const { email, password } = request.body;
  //   UserModel.findOne({email: email})
  //     .then(data => {
  //       const user = data;
  //       console.log(user.isVerified)


  //       if (!user) {
  //         return response.status(422).json({
  //           status: 422,
  //           error: 'User does not exists',
  //         });

          
  //       }



  //       if(!user.isVerified){
  //         let link = BACKEND_API + '/auth'
  //         return response.status(422).json({
  //           status: 422,
  //           error: `<h6>Email verification step is needed. please check your email for a verification link or click the link to resend you an email verification</h6> 

  //           <a href="${link}/resend/${email}">Resend </a>`,
  //         });
  //       }
        
  //       if (!TokenGenerator.checkIfPasswordMatch(password, user.password)) {
  //         return response.status(422).json({
  //           status: 422,
  //           error: 'Invalid login details. Email or password is wrong',
  //         });
  //       }

       

  //       const result = {
  //         id: user.id,
  //         _id: user._id,
  //         email: user.email,
  //         isAdmin: user.is_admin,
  //         isVerified:user.isVerified,
  //         firstname: user.firstname,
  //         username: user.username,
  //          profile: user.avatar,
  //         plan: user.plan_name,
  //         balance: user.balance,
  //         notification_count: user.notification_count,
  //         user_type: user.user_type,
  //         username:user.username,
  //         phoneNumber: user.phone_number,
  //         roles: user.roles,
  //         test_certificate: user.test_certificate

  //       };
  //       const token = TokenGenerator.generateToken(result);
  //       return response.status(200).json({
  //         status: 200,
  //         data: [
  //           {
  //             token,
  //             user: {
  //               id: user.id,
  //                _id: user._id,
  //               email: user.email,
  //               isAdmin: user.is_admin,
  //               isVerified:user.isVerified,
  //               firstname: user.firstname,
  //               username: user.username,
  //               profile: user.avatar,
  //               plan_name: user.plan_name,
  //               balance: user.balance,
  //               notification_count: user.notification_count,
  //                user_type: user.user_type,
  //                account_num: user.accountNumber,
  //                username:user.username,
  //                phoneNumber: user.phone_number,
  //                roles: user.roles,
  //               test_certificate: user.test_certificate
  //             },
  //           },
  //         ],
  //         message: 'Successfully signed in',
  //       });
  //     })
  //     .catch(err =>
  //       response.status(400).json({
  //         status: 400,
  //         error: ErrorHandler.errors().validationError,
  //       }),
  //     );
  // }











  //web sign up and login
  static signup(request, response) {
    let { firstname, 
         lastname,  
         username, 
         email, 
         phoneNumber,
         user_type, 
         password 
   } = request.body;

   console.log(password)
   password = TokenGenerator.hashPassword(password.trim());

   const Newuser = new UserModel({ 
     id: new AutoincrementId(UserModel).counter(), 
     firstname, 
     lastname, 
     user_type, 
     username, 
     email, 
     phone_number: phoneNumber, 
     password,
     is_admin: false,
     //accountNumber: uuidv4()
      });


    Newuser.save()
     .then(data => {
       const user = data;
       const result = {
         id: user.id,
         email: user.email,
         username: user.username,
       };
       let emailT = crypto.randomBytes(16).toString('hex');
       // Create a verification token for this user
       var emailtoken = new EmailTokenMakerForSignUp({ _userId: user._id, email_confirm_token: emailT });
       

       
       // Save the verification token
       emailtoken.save(function (err) {
           if (err) { 
             return console.log(err.message );
            }
           console.log(emailtoken.email_confirm_token, emailtoken._userId)
           

           //console.log(__dirname + '/views/templates/signup-verification.html')

           let ress = UserService.newUserMail(request,response, result,'/views/templates/signup-verification.html', emailtoken.email_confirm_token,201)
            
           const token = TokenGenerator.generateToken(result);
           

                  return response.status(201).json({
                    status: 201,
                    data: [
                      {
                        token,
                        user,
                      },
                    ],
                    message: 'User created successfully',
                  });

           
           



           
       });


       
     })
     .catch(err => {
       console.log(err+ 'error here')
       response.status(400).json({
         status: 400,
         error: ErrorHandler.errors().validationError,
       });
     });
 }

 static login(request, response) {
   const { email, password } = request.body;
   UserModel.findOne({email: email})
     .then(data => {
       const user = data;
       console.log(user.isVerified)


       if (!user) {
         return response.status(422).json({
           status: 422,
           error: 'User does not exists',
         });

         
       }


       


       if(!user.isVerified){
         return response.status(422).json({
           status: 422,
           error: `<h6>Email verification step is needed. please check your email for a verification link or click the link to resend you an email verification</h6> 

           <a href="https://demouserapp.commute.ng/api/v1/auth/resend/${email}">Resend </a>`,
         });
       }
       // console.log(email);
       // console.log(password);
       if (!TokenGenerator.checkIfPasswordMatch(password, user.password)) {
         return response.status(422).json({
           status: 422,
           error: 'Invalid login details. Email or password is wrong',
         });
       }

       //request.session.user = user;




       const result = {  
         id: user.id,
         _id: user._id,
         email: user.email,
         isAdmin: user.is_admin,
         isVerified:user.isVerified,
         firstname: user.firstname,
         lastname: user.lastname,
         username: user.username,
          profile: user.avatar,
         plan: user.plan_name,
         balance: user.balance,
         notification_count: user.notification_count,
         user_type: user.user_type,
         username:user.username,
         phoneNumber: user.phone_number,
         roles: user.roles,
         test_certificate: user.test_certificate

       };
       const token = TokenGenerator.generateToken(result);


       //if request host is from user and user role is user or admin allow
      //  if(request.headers.host=="demouserapp.commute.ng" && user.roles!="Individual Driver"){
           return response.status(200).json({
         status: 200,
         data: [
           {
             token,
             user: {
               id: user.id,
                _id: user._id,
               email: user.email,
               isAdmin: user.is_admin,
               isVerified:user.isVerified,
               firstname: user.firstname,
               username: user.username,
               profile: user.avatar,
               plan_name: user.plan_name,
               balance: user.balance,
               notification_count: user.notification_count,
                user_type: user.user_type,
                account_num: user.accountNumber,
                username:user.username,
         phoneNumber: user.phone_number,
         roles: user.roles,
          test_certificate: user.test_certificate
             },
           },
         ],
         message: 'Successfully signed in',
       });
      //  }
       
     })
     .catch(err =>
       response.status(400).json({
         status: 400,
         error: ErrorHandler.errors().validationError,
       }),
     );
 }






  //web sign up and login
  static signupMobile(request, response) {
    let { firstname, 
         lastname,  
         username, 
         email, 
         phoneNumber,
         user_type, 
         password 
   } = request.body;

   console.log(password)
   password = TokenGenerator.hashPassword(password.trim());


       let from_mobile = false;
    if(request.body.from_mobile==true){
      from_mobile =true;
    }

    console.log(password)
    
    let roles = '';
    if(request.body.roles){
      roles = request.body.roles
    }else{
      roles = 'user';
    }






    

  const Newuser = new UserModel({ 
    id: new AutoincrementId(UserModel).counter(), 
    firstname, 
    lastname, 
    user_type, 
    username, 
    email, 
    phone_number: phoneNumber, 
    password,
    is_admin: false,
    isVerified: true,
    roles
    //accountNumber: uuidv4()
     });


   Newuser.save()
    .then(data => {
      const user = data;
      const result = {
        id: user.id,
        email: user.email,
        username: user.username,
      };
      let emailT = crypto.randomBytes(16).toString('hex');
      // Create a verification token for this user
      // var emailtoken = new EmailTokenMakerForSignUp({ _userId: user._id, email_confirm_token: emailT });
      

      
      // Save the verification token
      // emailtoken.save(function (err) {
      //     if (err) { 
      //       return console.log(err.message );
      //      }
      //     console.log(emailtoken.email_confirm_token, emailtoken._userId)
          

          //console.log(__dirname + '/views/templates/signup-verification.html')

          // UserService.newUserMail(request,response, result,'/views/templates/signup-verification.html', emailtoken.email_confirm_token,201)
           const token = TokenGenerator.generateToken(result);
           return response.status(201).json({
                                              status: 201,
                                              data: [
                                                {
                                                  token,
                                                  user,
                                                },
                                              ],
                                              message: 'User created successfully',
                      });



          
      // });


      
    })
    .catch(err => {
      console.log(err+ 'error here')
      response.status(400).json({
        status: 400,
        error: ErrorHandler.errors().validationError,
      });
    });
 }

 static loginMobile(request, response) {
   const { email, password } = request.body;
   UserModel.findOne({email: email})
     .then(data => {
       const user = data;
       console.log(user.isVerified)


       if (!user) {
         return response.status(422).json({
           status: 422,
           error: 'User does not exists',
         });

         
       }


       


       if(!user.isVerified){
         return response.status(422).json({
           status: 422,
           error: `<h6>Email verification step is needed. please check your email for a verification link or click the link to resend you an email verification</h6> 

           <a href="https://demouserapp.commute.ng/api/v1/auth/resend/${email}">Resend </a>`,
         });
       }
       // console.log(email);
       // console.log(password);
       if (!TokenGenerator.checkIfPasswordMatch(password, user.password)) {
         return response.status(422).json({
           status: 422,
           error: 'Invalid login details. Email or password is wrong',
         });
       }

       //request.session.user = user;


       

       const result = {  
         id: user.id,
         _id: user._id,
         email: user.email,
         isAdmin: user.is_admin,
         isVerified:user.isVerified,
         firstname: user.firstname,
         username: user.username,
          profile: user.avatar,
         plan: user.plan_name,
         balance: user.balance,
         notification_count: user.notification_count,
         user_type: user.user_type,
         username:user.username,
         phoneNumber: user.phone_number,
         roles: user.roles,
         test_certificate: user.test_certificate

       };
       const token = TokenGenerator.generateToken(result);


       //if request host is from user and user role is user or admin allow
      //  if(request.headers.host=="demouserapp.commute.ng" && user.roles!="Individual Driver"){
           return response.status(200).json({
         status: 200,
         data: [
           {
             token,
             user: {
               id: user.id,
                _id: user._id,
               email: user.email,
               isAdmin: user.is_admin,
               isVerified:user.isVerified,
               firstname: user.firstname,
               username: user.username,
               profile: user.avatar,
               plan_name: user.plan_name,
               balance: user.balance,
               notification_count: user.notification_count,
                user_type: user.user_type,
                account_num: user.accountNumber,
                username:user.username,
         phoneNumber: user.phone_number,
         roles: user.roles,
          test_certificate: user.test_certificate
             },
           },
         ],
         message: 'Successfully signed in',
       });
      //  }
       
     })
     .catch(err =>
       response.status(400).json({
         status: 400,
         error: ErrorHandler.errors().validationError,
       }),
     );
 }





  static logout(request,response){

  }

  static confirmationPost (req, res) {
   

    // Find a matching token
    EmailTokenMakerForSignUp.findOne({ email_confirm_token:  req.params.id }, function (err, token) {
       
        if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });

        // If we found a token, find a matching user email: req.body.email
        UserModel.findOne({ _id: token._userId  }, function (err, user) {
            if (!user) {
              //return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
              return  res.sendFile(path.join(__dirname + '../../../../../UI/user/page-503.html'));
            }
            if (user.isVerified) {
              //return res.status(201).send({ type: 'already-verified', msg: 'This user has already been verified.' });
              return  res.sendFile(path.join(__dirname + '/views/templates/already-verified.html'));
            

            }

            // Verify and save the user
            user.isVerified = true;
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                //res.status(200).send("The account has been verified. Please wait...");
                   
                if(user.roles!='Individual Driver'){
                  return  res.sendFile(path.join(__dirname + '/views/templates/proceed-to-login.html'));
               
                } 
                return  res.sendFile(path.join(__dirname + '/views/templates/proceed-to-login-driver.html'));
                     
                 

            });


            
        });
    });
}


static userExists(request,response){

  UserModel.findOne({ email: request.body.email }, function (err, user) {
        if (!user) {
          return response.status(404).json({
            status: 404,
            data: [
              {
              
                
              },
            ],
            message: 'User Not found ',
          });
        }
        
        
        return response.status(200).json({
            status: 200,
            data: [
              {
              email: user.email,
              phone: user.phone_number,
              username: user.username
                
              },
            ],
            message: 'User found successfully',
          });

  })
    
}


/**
* POST /resend
*/
static resendTokenPost (req, res) {
    UserModel.findOne({ email: req.params.id }, function (err, user) {
        if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
        
        if (user.isVerified) return  res.sendFile(path.join(__dirname + '/views/already-verified.html'));
        

        // Create a verification token, save it, and send email
        var token = new EmailTokenMakerForSignUp({ _userId: user.id, email_confirm_token: crypto.randomBytes(16).toString('hex') });
        // Save the token
        token.save(function (err) {
            if (err) { return res.status(500).send({ msg: err.message }); }

            
            var result = { 
              id:user.id,
              username: user.username, 
              firstname: user.firstname,
              email: user.email,
              
             

            };

            var result2 = { 
              id:user.id,
              username: user.username, 
              firstname: user.firstname,
              email: user.email,
              
             

            };

          UserService.newUserMail(req,res, result2,'/views/templates/signup-verification.html', token.email_confirm_token, 200)
           
           const token = TokenGenerator.generateToken(result);
            return res.status(200).json({
                                                status: 200,
                                                data: [
                                                  {
                                                    token,
                                                    result,
                                                  },
                                                ],
                                                message: 'User created successfully',
                        });

           

         
            
        });

    });
}


static passwordForgot(req, res){

    let email = req.body.email;
    UserModel.findOne({ email: email }, function (err, user) {
        if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
        let hashedStringToSend = crypto.randomBytes(16).toString('hex');

        Storage.setItem('hasher', hashedStringToSend);
            // Create a verification token for this user
        var ForgotModelToken = new ForgotPasswordToken({ 
             _userId: user.id, 
             email_confirm_token: hashedStringToSend,
             email_to_reset: email 
        });
            

            

            // Save the verification token
        ForgotModelToken.save(function (err) {
            if (err) { 
              return res.status(500).send({ msg: err.message });
            }


            UserService.passwordResetsMail( req, res,user.email,'/views/templates/reset-password.html', {username:user.username}, hashedStringToSend)
            return res.status(200).send({ msg: "successfully sent you a password reset link", status:'ok' }); 
                
         
        });

    });

  }


  static confirmResetPassword (req, res) {
     return  res.sendFile(path.join(__dirname + '/views/pw-reset.html'));
            
  }



  
  static changePasswordTriggerMobile(req,res){
    let password = req.body.password;
    let email = req.body.email;
   
    // console.log(req.params.id)
   
    // Find a matching token
   
        // If we found a token, find a matching user email: req.body.email
        UserModel.findOne({ email: email  }, function (err, user) {
            if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
            //if (user.email != token.email_to_reset) return res.status(400).send({ type: 'No Reset Token', msg: 'This user reset token was not set.' });

            // Verify and save the user
            user.password = TokenGenerator.hashPassword(password.trim());
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                return res.status(200).send({ msg:"The account password has been reset. Please wait..." , status:'ok'});
                //return  res.sendFile(path.join(__dirname + '/pw-reset-success.html'));
            }); 
        });
    
  }

  static setPlanIdForUser(request,response){

   
    let email = req.body.email;
    let plan_id = req.body.plan_id;
   
    // console.log(req.params.id)
   
    // Find a matching token
   
        // If we found a token, find a matching user email: req.body.email
        UserModel.findOne({ email: email  }, function (err, user) {
            if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
            //if (user.email != token.email_to_reset) return res.status(400).send({ type: 'No Reset Token', msg: 'This user reset token was not set.' });

            // Verify and save the user
            user.plan_id_to_pay = plan_id || "No plan id"
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                return res.status(200).send({ msg:"The plan id  has been updated" , status:'ok'});
                //return  res.sendFile(path.join(__dirname + '/pw-reset-success.html'));
            }); 
        });
   

  }


  
  static getPlanIdForUser(request,response){

   
    let email = req.params.id;
    
   
    // console.log(req.params.id)
   
    // Find a matching token
   
        // If we found a token, find a matching user email: req.body.email
        UserModel.findOne({ email: email  }, function (err, user) {
            if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
            //if (user.email != token.email_to_reset) return res.status(400).send({ type: 'No Reset Token', msg: 'This user reset token was not set.' });

            // Verify and save the user
            let plan_id = user.plan_id_to_pay || "No plan id"
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                return res.status(200).send({ plan_id:plan_id , status:'ok'});
                //return  res.sendFile(path.join(__dirname + '/pw-reset-success.html'));
            }); 
        });
   

  }


  static walletUpgradeViaMobile(req,res){
    let balance= req.body.accountBalance;
    let email = req.body.email;
   
    // console.log(req.params.id)
   
    // Find a matching token
   
        // If we found a token, find a matching user email: req.body.email
        UserModel.findOne({ email: email  }, function (err, user) {
            if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
            //if (user.email != token.email_to_reset) return res.status(400).send({ type: 'No Reset Token', msg: 'This user reset token was not set.' });

            // Verify and save the user
            user.balance = balance;
            user.save(function (err) {

              
                if (err) { return res.status(500).send({ msg: err.message }); }


                //add wallet transaction

                const newDonor = {id: new String(new Date()), reference, amount:(amount/100), email: customer.email,full_name: metadata.full_name,phone_number}

                const donor = new WalletModel(newDonor)
      
                donor.save().then((donor,error)=>{
                    if(!donor){
                      console.log(error)
                      return res.status(500).send({ msg: error });
                    }
                    return res.status(200).send({ msg:"The account balance has been updated" , status:'ok'});
                

                })


                  //return  res.sendFile(path.join(__dirname + '/pw-reset-success.html'));
            }); 
        });



    
  }

  static changePasswordTrigger(req,res){
    let password = req.body.password;
    let confirmPass = req.body.confirmPassword;
    if(password!= confirmPass){
      console.log('err here1')
       return res.status(400).send({ msg: 'password do not match.' });
    }
    // console.log(req.params.id)
   
    // Find a matching token
    ForgotPasswordToken.findOne({  email_confirm_token:  Storage.getItem('hasher') }, function (err, token) {
         console.log(token)
         console.log(Storage.getItem('hasher'))
        if (!token) { 
          console.log('error here 2');
          console.log(err)
          return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });

        }

        // If we found a token, find a matching user email: req.body.email
        UserModel.findOne({ email: token.email_to_reset  }, function (err, user) {
            if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
            if (user.email != token.email_to_reset) return res.status(400).send({ type: 'No Reset Token', msg: 'This user reset token was not set.' });

            // Verify and save the user
            user.password = TokenGenerator.hashPassword(password.trim());
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                return res.status(200).send({ msg:"The account password has been reset. Please wait..." , status:'ok'});
                //return  res.sendFile(path.join(__dirname + '/pw-reset-success.html'));
            }); 
        });
    });
  }

 
  
  static showProfile(request,response){//profile-admin-rights

    // UserModel.find({id: Number(request.params.id)})
    UserModel.find({email:request.params.id})
      .then(data => {
        console.log("specific profile:" + data)
        
       
        const userInfo = data; //related
        if (userInfo.length <= 0) {
                return response.status(404).json({
                  status: 404,
                  error: 'The user with the given id does not exists',
                });
        }
        return response.status(200).json({
                status: 200,
                data: [
                  {
                    userInfo,
                    message: 'Get a specific user was successful',
                  },
                ],
          });
      })
      .catch(err =>
              response.status(400).json({
                status: 400,
                error: ErrorHandler.errors().validationError,
              }),
            );
    
    
  }


  

static getAsyncRoles = async function(request,response){
    try{
        const promiseList = await RolesAndPreviledgesModel.findOne({ for_admins:  true, previledges_info: request.params.roles }).exec;
        return promistList;
    }catch(err){
        return err;
    }
}


static getAsyncUsers = async function(request,response){
    try{
        const promiseList = await RolesAndPreviledgesModel.findOne({ for_admins:  true, previledges_info: request.params.roles }).exec();
        return promistList;
    }catch(err){
        return err;
    }
}


static updateAsyncUserPreviledges = async function(request,response){
    try{
        const promiseList = await  UserModel.find({_id: request.params.id}).exec();
        return promistList;
    }catch(err){
        return err;
    }
}




  static showProfileRights(request,response){//profile-admin-rights

    console.log(request.params.roles +"what we need")


    RolesAndPreviledgesModel.findOne({ for_admins:  true, previledges_info: request.params.roles }, function (err, roles) {

        if (!roles) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }


        // Verify and save the user
        // user.avatar= avatar || user.avatar;
        roles.status =  roles.status;
        roles.view_bookings=  roles.view_bookings;
          roles.view_quotations=  roles.view_quotations;
          roles.view_transactions= roles.view_transactions;
          roles.view_payments = roles.view_payments;
          roles.view_drivers =  roles.view_drivers;
          roles.view_sos= roles.view_sos;
          roles.view_partners = roles.view_partners;
          roles.view_package= roles.view_package;
          roles.view_cars= roles.view_cars;
          roles.view_tickets = roles.view_tickets;
          roles.view_faqs = roles.view_faqs;
          roles.view_users = roles.view_users;
          roles.view_admins =  roles.view_admins;
          roles.view_settings = roles.view_settings;


        
        roles.manage_bookings= roles.manage_bookings;
          roles.manage_quotations=  roles.manage_quotations;
          roles.manage_transactions=  roles.manage_transactions;
          roles.manage_payments =roles.manage_payments;
          roles.manage_drivers = roles.manage_drivers;
          roles.manage_sos= roles.manage_sos;
          roles.manage_partners =  roles.manage_partners;
          roles.manage_package=  roles.manage_package;
          roles.manage_cars= roles.manage_cars;
          roles.manage_tickets = roles.manage_tickets;
          roles.manage_faqs =  roles.manage_faqs;
          roles.manage_users =  roles.manage_users;
          roles.manage_admins =  roles.manage_admins;
          roles.manage_settings = roles.manage_settings;

          roles.view_car_inspection = roles.view_car_inspection;
          roles.view_drive_test = roles.view_drive_test;

          roles.manage_drive_test = roles.manage_drive_test;
          roles.manage_car_inspection = roles.manage_car_inspection



    

     
        roles.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message });
          }

          console.log(user)

          //find all users of usch roles and update
          UserModel.find({ roles:  request.params.roles }, function (err, users) {

                if (!users) {
                  return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
                }

               
               console.log(roles.view_faqs,roles.view_package,roles.view_drivers)
               UserModel.updateMany({ roles: new String(request.params.roles) },
                 { $set:
                       { 


                            view_bookings: roles.view_bookings,
                            view_quotations: roles.view_quotations,
                            view_transactions: roles.view_transactions,
                            view_payments : roles.view_payments,
                            view_drivers :  roles.view_drivers,
                            view_sos: roles.view_sos,
                            view_partners :  roles.view_partners,
                            view_package:roles.view_package,
                            view_cars: roles.view_cars,
                            view_tickets : roles.view_tickets,
                            view_faqs : roles.view_faqs,
                            view_users : roles.view_users,
                            view_admins : roles.view_admins,
                            view_settings : roles.view_settings,


                          
                            manage_bookings : roles.manage_bookings,
                            manage_quotations : roles.manage_quotations,
                            manage_transactions : roles.manage_transactions,
                            manage_payments : roles.manage_payments,
                            manage_drivers : roles.manage_drivers,
                            manage_sos: roles.manage_sos,
                            manage_partners : roles.manage_partners,
                            manage_package: roles.manage_package,
                            manage_cars: roles.manage_cars,
                            manage_tickets : roles.manage_tickets,
                            manage_faqs : roles.manage_faqs,
                            manage_users : roles.manage_users,
                            manage_admins : roles.manage_admins,
                            manage_settings : roles.manage_settings,

                            view_drive_test: roles.view_drive_test,
                            view_car_inspection: roles.view_car_inspection,
                            manage_drive_test: roles.manage_drive_test,
                            manage_car_inspection: roles.manage_car_inspection


                        }
              },{ multi: true }
              
              , function(err,result)
                 {
                  if (err) {
                    console.log(err)
                    res.send(err);
                  } else {
                    
                           UserModel.find({email: request.params.id})
                                  .then(data => {
                                    console.log("specific profile:" + data)
                                    
                                   
                                    const userInfo = data; //related
                                    if (userInfo.length <= 0) {
                                            return response.status(404).json({
                                              status: 404,
                                              error: 'The user with the given id does not exists',
                                            });
                                    }
                                    return response.status(200).json({
                                            status: 200,
                                            data: [
                                              {
                                                userInfo,
                                                message: 'Get a specific user was successful',
                                              },
                                            ],
                                      });
                                  })
                                  .catch(err =>
                                          response.status(400).json({
                                            status: 400,
                                            error: ErrorHandler.errors().validationError,
                                          }),
                                        );
                  }
              
              });




           })


        }); 
      });






  }



  static getUserPreviledges(request,response){

    UserModel.find({email: request.params.id})
      .then(data => {
        console.log("specific profile:" + data)
        
       
        const userInfo = data; //related
        if (userInfo.length <= 0) {
                return response.status(404).json({
                  status: 404,
                  error: 'The user with the given id does not exists',
                });

        }
      


        return response.status(200).json({
                status: 200,
                data: [
                  {
                    userInfo,
                    message: 'Get a specific user was successful',
                  },
                ],
          });
      })
      .catch(err =>
              response.status(400).json({
                status: 400,
                error: ErrorHandler.errors().validationError,
              }),
            );

  }


  static setOldBalance(request,response){
       const {
      old_balance,
      currentBalance
    } = request.body;



    

    


    UserModel.findOne({ email:  request.params.id }, function (err, user) {

      if (!user) return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
     
      user.old_balance = old_balance|| user.old_balance;
      user.balance = currentBalance || user.balance;
      user.save(function (err,user) {
        if (err) { return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }




  static updateProfile(request,response){

    
    const {
      firstname,
      lastname,
      username,
      password,
      passwordConfirm,
      phoneNumber,
      avatar,
      certificate,
      user_type,
      email,
    } = request.body;



    if(password.length && passwordConfirm.length){
      if(password!= passwordConfirm){
        console.log('err here1')
        return res.status(400).send({ msg: 'password do not match.' });
      }
    }

    



    UserModel.findOne({ email:  request.params.id }, function (err, user) {

      if (!user) return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
      if(password=="unchanged" && passwordConfirm=="unchanged"){
       user.password= user.password;
       console.log("old:" + user.password)
      } else{
        user.password= TokenGenerator.hashPassword(password.trim());
        console.log("new pass: "+ user.password)
      }

     
      console.log(avatar)
      // Verify and save the user
      user.avatar= avatar || user.avatar;
      user.username= username || user.username;
      user.email= email || user.email;
   
      user.roles= user_type|| user.user_type;
      user.firstname= firstname|| user.firstname;
      user.lastname = lastname || user.lastname;
      user.phone_number = phoneNumber|| user.phone_number;
      user.test_certificate = certificate|| user.test_certificate;
      user.save(function (err,user) {
        if (err) { 
          console.log(err)
          return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }


  // static loginWithTwitter(request,response){
  //   //return UserService.loginWithTwitter(request,response)
  // }

  // static loginWithFaceBook(request,response){
  //  //return UserService.loginWithFaceBook(request,response)
  // }

  // static loginWithGoogle(request,response){
  //  //return UserService.loginWithGoogle(request,response)
  // }

  
  // static initializeGoogleLogin(request,response){
  //   return passport.authenticate('google', { scope : ['profile', 'email'] });
  // }

  
  static addNewPlans(request,response){
      let {
       plan_id, 
       itineraries,
      user_id,
      carsSelected,
      planName,
      price,
      planCategoryName,
      no_hours,
      username,
      email
    } = request.body;


    
     const NewUserPlan = new UserPlanModel({ 
      id: new AutoincrementId(UserPlanModel).counter(), 
      user_id,
      price,
      plan_category_name:planCategoryName,
      plan_name:planName,
      cars_on_plan: carsSelected,
      itineries: itineraries,
      duration:no_hours,
      no_hours:no_hours,
      username: username,
      email: email,
      plan_id
     });


     NewUserPlan.save()
      .then(data => {
        const user = data;
        console.log(user + "plans")

        return response.status(201).json({
          status: 201,
          data: [
            {
              
              user
            },
          ],
          message: 'User Plan created successfully',
        });
      
      })
      .catch(err => {
        console.log(err+ 'error here user plan')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

      // UserService.saveUsersItinerary(request,response);
  }


  



  static deleteItinerary(request,response){
    ItineraryModel.find({plan_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        ItineraryModel.remove({plan_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }




  static saveUsersItinerary(request, response) {
    // console.log(request.body)

  
    let {
      plan_category,
      start_location,
      destination,
      drive_option,
      no_hours,
    
      plan_name,
      status,
      start_time,
      travel_option,
      drivingschool,
      username,
      email,
      phone_number,
      plan_id
    } = request.body;


   

    
    const NewItinerary = new ItineraryModel({ 
      id: new AutoincrementId(ItineraryModel).counter(), 
       plan_category,
      start_location,
      destination,
      travel_option:drive_option,
      drive_option,
      no_hours,
      travel_option,
      plan_name,
      status,
      start_time,
      travel_option,
      drivingschool,
      user_id:request.user.id,
      username,
      email,
      phone_number,
      plan_id

       
     });

     NewItinerary.save()
      .then(data => {
        const user = data;
        const result = {
           plan_category: user.plan_category,
      start_location: user.start_location,
      destination: user.destination,
      drive_option:user.drive_option,
      no_hours:user.no_hours,
        travel_option:user.travel_option,
      plan_name,
      status,
      start_time,
      drivingschool,
      username: user.username,
      email:user.email
           // cars_id: user.cars_id
        };
        
        return response.status(201).json({
          status: 201,
          data: [
            {
              
              result
            },
          ],
          message: 'User Itinerary created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }

    static editViewUsersItinerary(request,response){

    ItineraryModel.find({user_id: Number(request.params.id)})
      .then(data => {
        console.log("specific:" + data)
        
       
        const userInfo = data; //related
        if (userInfo.length <= 0) {
                return response.status(404).json({
                  status: 404,
                  error: 'The user with the given id does not exists',
                });
        }
        return response.status(200).json({
                status: 200,
                data: [
                  {
                    userInfo,
                    message: 'Get a specific user was successful',
                  },
                ],
          });
      })
      .catch(err =>
              response.status(400).json({
                status: 400,
                error: ErrorHandler.errors().validationError,
              }),
            );
    
    
  }


  static updateUsersPlanItineraryStatus(request, response) {
    UserPlanModel.find({id: Number(request.params.id)})
  .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { status } = request.body;
    


            UserPlanModel.updateOne({id: Number(request.params.id) }, {
                    
                      status: status
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated red-flag record’s status',
                    },
                  ],
                });
              })
              .catch(err =>
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                }),
              );

  
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );
  }
   

   static updateNotificationStatus(request,response){

      NotificationModel.find({_id: request.params.id})
  .then(redId => {
        if (redId.length <= 0) {
          return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: '0',
                      message: 'Data not found',
                    },
                  ],
                });
              
        }
         const { status } = request.body;
    


            NotificationModel.updateOne({_id: request.params.id }, {
                    
                      status: 'old'
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated red-flag record’s status',
                    },
                  ],
                });
              })
              .catch(err =>
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                }),
              );

  
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );

   }

  static updateItineraryStatus(request, response) {
    ItineraryModel.find({_id: request.params.id})
  .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { status } = request.body;
     

            ItineraryModel.updateOne({_id: request.params.id }, {
                    
                      status: status
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated red-flag record’s status',
                    },
                  ],
                });
              })
              .catch(err =>
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                }),
              );

  
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );
  }


  static updateDriverRatings(request, response) {
    UserModel.find({email: request.params.id})
  .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
        let totalAvg= 0
         const { ratings } = request.body;
         if(!parseInt(redId.ratings_average,10)){
              totalAvg = parseInt(redId.ratings_average,10) + parseInt(ratings,10)
       
         }else{
           totalAvg = parseInt(redId.ratings_average,10) + parseInt(ratings,10)
       
         }

          totalAvg = (totalAvg/2)

            UserModel.updateOne({email: request.params.id }, {
                    
                      ratings_average: totalAvg
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated red-flag record’s status',
                    },
                  ],
                });
              })
              .catch(err =>
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                }),
              );

  
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );
  }





  static updateUserItineraryStatus(request, response) {
    ItineraryModel.find({id: Number(request.params.id)})
  .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { status } = request.body;
     

            ItineraryModel.updateOne({id: Number(request.params.id) }, {
                    
                      status: status
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated red-flag record’s status',
                    },
                  ],
                });
              })
              .catch(err =>
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                }),
              );

  
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );
  }





static updateUsersItinerary(request,response){
    const {
      certificate_id,
       start_location ,
       destination ,
       no_hours,
       start_time ,
       end_time , 
       drive_option,
       user_id,
       travel_option,
       cars_id
    } = request.body;


    
    ItineraryModel.findOne({ user_id:  request.params.id }, function (err, user) {

      if (!user) return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
      console.log(avatar)
      // Verify and save the user
      
      user.certificate_id= certificate_id;
      user.start_location= start_location;
      user.destination= destination;
      user.no_hours= no_hours;
      user.start_time= start_time;
      user.end_time= end_time;
      user.drive_option = drive_option;
      user.user_id = user_id;
      user.travel_option = travel_option;
      user.cars_id = cars_id;
      user.save(function (err,user) {
        if (err) { return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'successfully updated itinerary.' });
      
               

      }); 
    });
  }


  static individualPlans(request,response){
       IndividualPlanModel.find()
    
      .then(data => {
        const individualPlans = data;
        console.log(data)
        if (individualPlans.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'No Plans for IndividualPlan module has been recorded by admin',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              individualPlans,
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static coperatePlans(request,response){
       coperatePlanModel.find()
    
      .then(data => {
        const coperatePlan = data;
        console.log(data)
        if (coperatePlan.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'No Plans for CoperatePlan module has been recorded by admin',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              coperatePlan,
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

    static updateItem(request, response) {
  

  const  {
      certificate_id,
       start_location ,
       destination ,
       no_hours,
       start_time ,
       end_time , 
       drive_option,
       user_id,
       travel_option,
       
    } = request.body;



    
       ItineraryModel.findOne({ id:  request.params.id }, function (err, user) {

        if (!user){
          console.log(JSON.strigify(err))
         return response.status(400).send({ msg: 'We were unable to find a user with that email.' });

       }
        
     
      // Verify and save the user

      
       user.certificate_id= certificate_id;
      user.start_location= start_location;
      user.destination= destination;
      user.no_hours= no_hours;
      user.start_time= start_time;
      user.end_time= end_time;
      user.drive_option = drive_option;
      user.user_id = user_id;
      user.travel_option = travel_option;
      
      user.save(function (err,user) {
        if (err) { 
           console.log(err)
          return response.status(500).send({ msg: err.message });
         }
          console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
      return response.status(200).send({success:'ok', msg: 'successfully updated itinerary.' });
      
               

      });
      
       
    });
  }


  static deleteItem(request, response) {
    UserPlanModel.find({id: request.params.id})
      .then(data => {
        const redflags = data;

        if ( redflags.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The red-flag with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The red-flag with the given id does not exists',
          });
        }
        UserPlanModel.removeOne({id: request.params.id})
          .then(data => {
            const deletedRedFlag = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedRedFlag._id,
                  message: 'red-flag record has been deleted',
                },
              ],
            });
          })
          .catch(error =>
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            }),
          );
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }













  static getAllItineries(request, response) {

    ItineraryModel.find()
    
      .then(data => {
        const itinerary = data;
        console.log(data+ "either empty itins")
        if (itinerary.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no itinerary record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              itinerary,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
    
  }


  static getUsersItinerary(request,response){
    ItineraryModel.find({ email: request.params.id })
    
      .then(data => {
        const itinerary = data;
        if (itinerary.length === 0) {
          return response.status(200).json({
            status: 200,
            error: 'User has no itinerary record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              itinerary,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }


  static updateRedFlagStatus(request, response) {
   RedFlagModel.find({id: Number(request.params.id)})
  .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { status } = request.body;
     if ( Number(request.user.id) )  {


            RedFlagModel.updateOne({id: Number(request.params.id) }, {
                    
                      status: status
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated red-flag record’s status',
                    },
                  ],
                });
              })
              .catch(err =>
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                }),
              );

    } else {
          return response.status(401).json({
            status: 401,
            error: 'You must signup or login to access this route',
          });
        }
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );
  }




  static getAllUsersPlans(request,response){
    UserPlanModel.find({ email: request.params.id })
      .then(data => {
        const plans = data;
        console.log(plans)
        // if (plans.length === 0) {
        //   return response.status(404).json({
        //     status: 404,
        //     error: 'User has no plans record',
        //   });
        // }
        return response.status(200).json({
          status: 200,
          data: [
            {
              plans,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static getAllUsersQuotations(request,response){
    
    QuoteModel.find({ plan_id : new String(request.params.id) })
    
      .then(data => {
        const quote = data;
        if (quote.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no plans record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              quote,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }


  static debitWallet(request,response){
    const {oldBalance,debit_amount} = request.body;



    

    UserModel.findOne({ email: request.params.id }, function (err, user) {

      
      
      let bal = Number(user.balance) - Number(debit_amount);
      user.balance = new String(bal)


      
      user.save(function (err,user) {
        if (err) { return response.status(500).send({ msg: err.message }); }
        

         console.log(user)
          return response.status(200).send({status: 200 ,success:'ok', msg: 'Successfully updated  .' });
      }); 
    });

  }



  static updatePlanStatus(request,response){

    const  {
              status,
              amount, 
              has_updated,    
            }= request.body;





    UserPlanModel.findOne({ plan_id:new String(request.params.id) }, function (err, user) {

      // Verify and save the user
      user.status= status || user.status;
      
      user.price = amount || user.price;

      user.has_updated = has_updated || user.has_updated;

      let userItins = user.itineries;

      // userItins.map((item) =>{
      //    item.status = status;
      // } )

      // user.itineries = userItins;
      
      user.save(function (err,user) {
        if (err) { return response.status(500).send({ msg: err.message }); }


        UserPlanModel.updateMany({ plan_id: request.params.id },{
                                            $set:{   status:status, 
                                                      price: amount,
                                                      has_updated:has_updated,
                                                    "itineries.$[].status":status,
                                                  }},{ multi: true }, function(err,result){
                                     if (err) {
                                          console.log(err)
                                          response.send(err);
                                        } else {
                                          console.log(result)
                                          return response.status(200).send({status: 200 ,success:'ok', msg: 'Successfully updated itineraries of this plan .' });
                                
                                        }

          })



        


          // return response.status(200).send({status: 200 ,success:'ok', msg: 'Successfully updated  .' });
      }); 
    });


  }




  static updateItinStatus(request,response){

    const  {
              status,
              //plan_id,
              user_plan_id,
              has_received_payments,
              has_received_quote,
             
            }= request.body;


   // ItineraryModel.findOne({ plan_id:new String(request.params.id) }, function (err, user) {

   //    // Verify and save the user
   //    user.status= status || user.status;
      
    
      
   //    user.save(function (err,user) {
   //      if (err) { return response.status(500).send({ msg: err.message }); }
   //      console.log(user + 'hello')


   //        return response.status(200).send({status: 200 ,success:'ok', msg: 'Successfully updated  .' });
   //    }); 
   //  });



    ItineraryModel.updateMany({ plan_id: new String(request.params.id) },{ $set:{ 
              status: status,
              //plan_id,
              user_plan_id:new String(request.params.id),
              has_received_payments: has_received_payments,
              has_received_quote: has_received_quote
            }},{ multi: true }, function(err,result){
                         if (err) {
                              console.log(err)
                              res.send(err);
                            } else {
                              console.log(result)
                              return response.status(200).send({status: 200 ,success:'ok', msg: 'Successfully updated itineraries of this plan .' });
                    
                            }

    })   



  }



  static updateQuoteStatus(request,response){

    const  {
              status,
              amount, 
              has_updated    
            }= request.body;


    QuoteModel.findOne({ plan_id:new String(request.params.id) }, function (err, user) {

      // Verify and save the user
      user.status= status || user.status;
      
      user.amount = amount || user.amount;
      user.has_updated = has_updated || user.has_updated;
      
      user.save(function (err,user) {
        if (err) { return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')


          return response.status(200).send({status: 200 ,success:'ok', msg: 'Successfully updated  .' });
      }); 
    });

  }


  static getOnePlanById(request,response){
    UserPlanModel
    .find({id: Number(request.params.id)})
      .then(data => {
        console.log("specific:" + data)
        
       
        const userPlanInfo = data; //related
        if (userPlanInfo.length <= 0) {
          return response.status(404).json({
                  status: 404,
                  error: 'The user plan with the given id does not exists',
          });
        }
        return response.status(200).json({
                status: 200,
                data: [
                  {
                    userPlanInfo,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });
      })
      .catch(err =>
              response.status(400).json({
                status: 400,
                error: ErrorHandler.errors().validationError,
              }),
            );
    

  }



  static paystackPayMeMoney(req,res){
     const {
      fullname,
      email,
      amount,
      phone_number
      //old_balance
     } = req.body;
     console.log(fullname,
      email,
      amount)
     //const form = _.pick(req.body,['amount','email','full_name']);
      
     const form = {
      fullname,
      email,
      amount,
      phone_number
     }
    form.metadata = {
          full_name : form.fullname
    }
    form.amount *= 100;
    form.amout *=100;
      
    initializePayment(form, (error, body)=>{
          console.log(body)
          if(error){
              //handle errors
              console.log(error);
              return res.redirect('/error')
            
          }
          var response = JSON.parse(body);
          
          
          let url =response.data.authorization_url;


          
           
          //res.redirect(url)
          //console.log(url)
          //res.send(`${url}`)

          return res.status(201).json({
            status: 201,
            message: `<h6>Please click the link to make payments.<a style="color:red;text-decoration:none"  href="${url}">Proceed to payment</a></h6> 
            `,
          });
          
    });
  
  }

  static paystackCallBack(req,res){
    const {reference,trxref} = req.query;
    //console.log(req.query)
    const ref = reference;
      verifyPayment(ref, (error,body)=>{
          if(error){
              //handle errors appropriately
              console.log(error)
              return res.redirect('/error');
          }

          var response = JSON.parse(body);
          console.log(JSON.stringify(response.data) +"given here") 

          const {id,reference, amount,customer, metadata,phone_number} = response.data;  
          console.log(id,reference,amount,customer,phone_number,customer.phone)     

          
          const newDonor = {id: new String(id), reference, amount:(amount/100), email: customer.email,full_name: metadata.full_name,phone_number}

          const donor = new WalletModel(newDonor)

          donor.save().then((donor,error)=>{
              if(!donor){
                console.log(error)
                  return res.redirect('/api/v1/error');
              }


              UserModel.findOne({email: customer.email},function (err, user) {

                   if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
                  let convertedBal = Number(amount)/100;
                  user.balance = Number(user.balance)+ convertedBal;
                  user.save(function (err,user) {
                    if (err) { return res.status(500).send({ msg: err.message }); }
                    //console.log(user + 'hello')
                      //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
                      res.redirect('/api/v1/receipt/'+donor._id);
                  }); 
          });

              
          }).catch((e)=>{
             console.log(e)
              res.redirect('/api/v1/error');
          });

          
      })

  }

  static createPaymentDetail(request,response){
    // var PaymentModel = mongoose.model('PaymentModel', User);

    let {
        status,
                reference,
                plan_id,
                quotation_id,
                amount,
                username,
                email,
                phone_number ,
    } = request.body;


    // var user = new PaymentModel({ 
    //   id: new AutoincrementId(PaymentModel).counter(), 
    //     status:'Paid',
    //             reference,
    //             plan_id,
    //             quotation_id,
    //             amount,
    //             username,
    //             email,
    //             phone_number,

       
    //  })


   

    
    const NewItinerary = new PaymentModel({ 
      id: new AutoincrementId(PaymentModel).counter(), 
        status:'Successful',
                reference,
                plan_id,
                quotation_id,
                amount,
                username,
                email,
                phone_number,

       
     });

     NewItinerary.save()
      .then(data => {
        const user = data;
        const result = {
          reference,
                plan_id,
                quotation_id,
                amount,
                username,
                email,
                phone_number,
      email:user.email
           // cars_id: user.cars_id
        };
        
        return response.status(201).json({
          status: 201,
          data: [
            {
              
              result
            },
          ],
          message: 'User Itinerary created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

  }

  static paystackReceipt(req,res){
    const id = new String(req.params.id);
    WalletModel.findById(id).then((donor,error)=>{
          if(!donor){
              //handle error when the donor is not found
              console.log(error)
              res.redirect('/api/v1/error')
          }

          // res.render('success.pug',{donor});
          return  res.sendFile(path.join(__dirname + '/views/templates/topup-successful.html'));
      }).catch((e)=>{
          console.log(e)
          res.redirect('/api/v1/error')
      })
  }

  static paystackHistory(req,res){
    const id = new String(req.params.id);
    WalletModel.find({email:req.params.id}).then((donor,error)=>{
          if(!donor){
              //handle error when the donor is not found
              console.log(error)
              res.redirect('/api/v1/error')
          }
         const tranx = donor;
         console.log(tranx +"for the user")
         return res.status(200).json({
                status: 200,
                data: [
                  {
                    tranx,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });
        
      }).catch((e)=>{
          console.log(e)
          res.redirect('/api/v1/error')
      })
  }


  static paystackPayments(req,res){
    const id = new String(req.params.id);
    PaymentModel.find({email:req.params.id}).then((donor,error)=>{
          if(!donor){
              //handle error when the donor is not found
              console.log(error)
              res.redirect('/api/v1/error')
          }
         const tranx = donor;
         console.log(tranx +"for the user")
         return res.status(200).json({
                status: 200,
                data: [
                  {
                    tranx,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });
        
      }).catch((e)=>{
          console.log(e)
          res.redirect('/api/v1/error')
      })
  }


  static paystackQuotations(req,res){
    const id = new String(req.params.id);
    QuoteModel.find({email:req.params.id}).then((donor,error)=>{
          if(!donor){
              //handle error when the donor is not found
              console.log(error)
              res.redirect(BACKEND_API+ '/error')
          }
         const tranx = donor;
         console.log(tranx +"for the user")
         return res.status(200).json({
                status: 200,
                data: [
                  {
                    tranx,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });
        
      }).catch((e)=>{
          console.log(e)
          res.redirect(BACKEND_API+ '/error')
      })
  }



  static deleteQuotation(request,response){
    QuoteModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        QuoteModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }


  static deletePayment(request,response){
    PaymentModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        PaymentModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }


  static deleteWallet(request,response){
    WalletModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        WalletModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }


  static getUserNotification(request,response){

    const id = new String(request.params.id);
    console.log(id)
    NotificationModel.find({user_id:request.params.id, for_users: true}).then((donor,error)=>{
      if(!donor){
              //handle error when the donor is not found
              console.log(error)
              
      }
      const tranx = donor;
      console.log(tranx +"for the user")
      return response.status(200).json({
                status: 200,
                data: [
                  {
                    tranx,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });
        
      }).catch((e)=>{
          console.log(e)
          res.redirect(BACKEND_API+ '/error')
      })

  }


  static makeNotification(request,response){
    // console.log(request.body)
    let { 
     user_id,
      type,
      description,
  
    } = request.body;
    let for_users =true;

    if(request.body.for_users){
      for_users =false;
    }

   
    const NewNotificationModel = new NotificationModel({ 
      id: new AutoincrementId(NotificationModel).counter(), 
      user_id,
      type,
      description,
      for_users

    
      //accountNumber: uuidv4()
       });


     NewNotificationModel.save()
      .then(data => {
        const user = data;


         return response.status(201).json({
                status: 201,
                data: [
                  {
                    user,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });
        

            // UserService.NotificationEmail(request,response,'/views/templates/notification.html', {
            //          username: user_id,
            //          detail: description
            // },user_id,201)


        
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

  }



  static getAllNotification(request,response){

    var now = new Date();
var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());


    //created_at: {$gte: startOfToday}
    NotificationModel.find({for_users:true},null, {sort: { field : -1 }}).then((donor,error)=>{
      if(!donor){
              //handle error when the donor is not found
              console.log(error)
              
      }
      const allNotification = donor;
      //console.log(tranx +"for the user")
      return response.status(200).json({
                status: 200,
                data: [
                  {
                    allNotification,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });
        
      }).catch((e)=>{
          console.log(e)
          res.redirect(BACKEND_API+ '/error')
      })

  }





  createUserPlan = (req, res) => {
    const review = new UserPlanModel();
    review.username = req.body.username;
    review.rating = req.body.rating;
    review.body = req.body.body;
    review.save()
      .then((result) => {
        User.findOne({ username: review.username }, (err, user) => {
            if (user) {
                // The below two lines will add the newly saved review's 
                // ObjectID to the the User's reviews array field
                user.reviews.push(review);
                user.save();
                res.json({ message: 'Review created!' });
            }
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  }


  createUser = (req, res) => {
   const user = new UserModel();
   user.username = req.body.password;
   user.email = req.body.email;
   user.save()
       .then((result) => {
            res.json({ message: 'User created!', result });
        })
        .catch((error) => {
          res.status(500).json({ error });
        });
  }

// . . .
// returns the user object associated with the username if any
// with the reviews field containing an array of review objects 
// consisting of the reviews created by the user
getUser = (req, res) => {
    User.findOne({ username: req.params.username })
      //.populate('reviews')
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  }



  //Admin functionality


  static adminDashboard(request,response){
    

  
  }

  static manageUsers(request,response){
   UserModel.find({is_admin:false,roles:"user"})
      .then(data => {
        const users = data;
        console.log(users,"users available are here")
        if (users.length === 0) {
          return response.status(200).json({
            status: 200,

            data: [
            {
              users:[],
          
              message: 'Successful',
            },
          ],
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              users,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static deleteUser(request,response){
    UserModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        UserModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }


  static createNewUser(request,response){
       let boolVerification;
     let {
          firstname,
        lastname,
        username,
        email,
        password,
        passwordComfirm,
        phoneNumber,
        avatar,
        certificate,
        user_type,
        status,
        is_verified
      } = request.body;

     

      if(is_verified=="false"){
            boolVerification =false;
      }else{
        boolVerification =true;
      }

    password = TokenGenerator.hashPassword(password.trim());

    const Newuser = new UserModel({ 
      id: new AutoincrementId(UserModel).counter(), 
       firstname,
        lastname,
        username,
        email,
        password,
        
        phone_number: phoneNumber,
        avatar: avatar,
        certificate,
        user_type,
        status :"Active",
        is_admin:false,
        isVerified:boolVerification,



      });

     Newuser.save()
      .then(data => {
        const user = data;
        const result = {
          id: user.id,
          email: user.email,
          username: user.username,
        };
        




        const token = TokenGenerator.generateToken(result);
        return response.status(201).json({
          status: 201,
          data: [
            {
              token,
              user,
            },
          ],
          message: 'User created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

  }

  static manageUsersDetail(request,response){
     let boolVerification;
     const {
      firstname,
      lastname,
      username,
      password,
      phoneNumber,
      certificate,
      user_type,
      email,
      status,
      avatar,
      is_verified
    } = request.body;

    console.log(is_verified + ":our user verification")

    if(is_verified=="false"){
      boolVerification =false;
    }else if(is_verified=="true"){
      boolVerification =true;
    }



    if(!password.length){
      
        console.log('err here1')
        return res.status(400).send({ msg: 'password do not match.' });
      
    }

    


    UserModel.findOne({ _id:  request.params.id }, function (err, user) {

      if (!user){ 
       return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
      }
      if(password=="unchanged" ){
       user.password= user.password;
       console.log("old:" + user.password)
      } else{
        user.password= TokenGenerator.hashPassword(password.trim());
        console.log("new pass: "+ user.password)
      }

     
      // Verify and save the user
    
      user.username= username || user.username;
      user.email= email || user.email;
      user.status= status || user.status;
      user.avatar= avatar || user.avatar;
      user.user_type= user_type|| user.user_type;
      user.firstname= firstname|| user.firstname;
      user.lastname = lastname || user.lastname;
      user.phone_number = phoneNumber|| user.phone_number;
      user.test_certificate = certificate || user.test_certificate;
      //user.isVerified = boolVerification || user.isVerified;
      user.save(function (err,user) {
        if (err) { console.log(err) 
          return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }


  static manageUsersDetailVerification(request,response){
  
     const {
      isVerified
    } = request.body;

   

   
    UserModel.findOne({ _id:  request.params.id }, function (err, user) {

      if (!user){ 
       return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
      }
      user.isVerified = isVerified || user.isVerified;
      user.save(function (err,user) {
        if (err) { console.log(err) 
          return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }

  static manageAdmins(request,response){
    UserModel.find({is_admin:true})
      .then(data => {
        const admins = data;
        console.log(admins+"admins available here admins")
        if (admins.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              admins:[],
          
              message: 'Successful',
            },
          ],
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              admins,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>{
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        })
      });
  }


  static deleteAdmin(request,response){
    UserModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        UserModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }






  static createNewAdmin(request,response){
       let boolVerification;
    let {
          firstname,
        lastname,
        username,
        email,
        password,
        passwordComfirm,
        phoneNumber,
        avatar,
        //certificate,
        user_type,
        status,
        is_verified,
      } = request.body;

      if(is_verified=="false"){
            boolVerification =false;
      }else{
        boolVerification =true;
      }

    password = TokenGenerator.hashPassword(password.trim());


    

        RolesAndPreviledgesModel.findOne({ for_admins:  true, usergroup_set: user_type }, function (err, roles) {
           
          if (!roles) {
                        return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
          }
          console.log(roles)

          const Newuser = new UserModel({ 
                id: new AutoincrementId(UserModel).counter(), 
                 firstname,
                  lastname,
                  username,
                  email,
                  password,
                  
                  phone_number: phoneNumber,
                  avatar: avatar,
                  //certificate,
                  roles: user_type,
                  status :"Active",
                  is_admin:true,
                  isVerified: boolVerification,
                  view_bookings: roles.view_bookings,
                  view_quotations: roles.view_quotations,
                  view_transactions:  roles.view_transactions,
                  view_payments :roles.view_payments,
                  view_drivers :  roles.view_drivers,
                  view_sos: roles.view_sos,
                  view_partners : roles.view_partners,
                  view_package:  roles.view_package,
                  view_cars: roles.view_cars,
                  view_tickets :  roles.view_tickets,
                  view_faqs : roles.view_faqs,
                  view_users : roles.view_users,
                  view_admins :  roles.view_admins,
                  view_settings :  roles.view_settings,
                  manage_bookings: roles.manage_bookings,
                  manage_quotations: roles.manage_quotations,
                  manage_transactions:  roles.manage_transactions,
                  manage_payments : roles.manage_payments,
                  manage_drivers : roles.manage_drivers,
                  manage_sos: roles.manage_sos,
                  manage_partners : roles.manage_partners,
                  manage_package: roles.manage_package,
                  manage_cars: roles.manage_cars,
                   manage_tickets : roles.manage_tickets,
                  manage_faqs : roles.manage_faqs,
                  manage_users : roles.manage_users,
                  manage_admins : roles.manage_admins,
                  manage_settings : roles.manage_settings,


                  view_drive_test : roles.view_drive_test,
                  manage_drive_test : roles.manage_drive_test,
                  view_car_inspection : roles.view_car_inspection,
                  manage_car_inspection : roles.manage_car_inspection,



                });

               Newuser.save()
                .then(data => {
                  const user = data;

                  const result = {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                  };
                  


                  const token = TokenGenerator.generateToken(result);
                  console.log(user)
                  return response.status(201).json({
                    status: 201,
                    data: [
                      {
                        token,
                        user,
                      },
                    ],
                    message: 'User created successfully',
                  });
                })
                .catch(err => {
                  console.log(err+ 'error here')
                  response.status(400).json({
                    status: 400,
                    error: ErrorHandler.errors().validationError,
                  });
                });

  



         })
        
    




    
    
  }

  static manageAdminsDetail(request,response){
       let boolVerification;

    const {
      firstname,
      lastname,
      username,
      password,
      phoneNumber,
      avatar,
      certificate,
      user_type,
      email,
      status,
      is_verified,

    } = request.body;

    if(is_verified=="false"){
            boolVerification =false;
      }else{
        boolVerification =true;
      }



    if(!password.length){
      
        console.log('err here1')
        return res.status(400).send({ msg: 'password do not match.' });
      
    }


     RolesAndPreviledgesModel.findOne({ for_admins:  true, usergroup_set: user_type }, function (err, roles) {
           
          if (!roles) {
                        return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
          }
          console.log(roles)

    


            UserModel.findOne({ _id:  request.params.id }, function (err, user) {

              if (!user){ 
               return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
              
              }
              if(password=="unchanged" ){
               user.password= user.password;
               console.log("old:" + user.password)
              } else{
                user.password= TokenGenerator.hashPassword(password.trim());
                console.log("new pass: "+ user.password)
              }

             
              // Verify and save the user
            
              user.username= username || user.username;
              user.email= email || user.email;
              user.status= status || user.status;
              user.avatar= avatar || user.avatar;
              user.roles= user_type|| user.user_type;
              user.firstname= firstname|| user.firstname;
              user.lastname = lastname || user.lastname;
              user.phone_number = phoneNumber|| user.phone_number;
              user.test_certificate = certificate || user.test_certificate;
              //user.isVerified = boolVerification || user.isVerified;


              
            user.view_bookings=  roles.view_bookings;
          user.view_quotations= roles.view_quotations;
          user.view_transactions= roles.view_transactions;
          user.view_payments = roles.view_payments;
          user.view_drivers =  roles.view_drivers;
          user.view_sos= roles.view_sos;
          user.view_partners =  roles.view_partners;
          user.view_package= roles.view_package;
          user.view_cars= roles.view_cars;
          user.view_tickets = roles.view_tickets;
          user.view_faqs = roles.view_faqs;
          user.view_users = roles.view_users;
          user.view_admins = roles.view_admins;
          user.view_settings = roles.view_settings;


        
          user.manage_bookings= roles.manage_bookings;
          user.manage_quotations= roles.manage_quotations;
          user.manage_transactions=roles.manage_transactions;
          user.manage_payments = roles.manage_payments;
          user.manage_drivers = roles.manage_drivers;
          user.manage_sos= roles.manage_sos;
          user.manage_partners = roles.manage_partners;
          user.manage_package= roles.manage_package;
          user.manage_cars= roles.manage_cars;
          user.manage_tickets = roles.manage_tickets;
          user.manage_faqs = roles.manage_faqs;
          user.manage_users = roles.manage_users;
          user.manage_admins = roles.manage_admins;
          user.manage_settings = roles.manage_settings;


          user.view_drive_test = roles.view_drive_test;
                  user.manage_drive_test = roles.manage_drive_test;
                  user.view_car_inspection = roles.view_car_inspection;
                  user.manage_car_inspection = roles.manage_car_inspection;





              user.save(function (err,user) {
                if (err) { console.log(err) 
                  return response.status(500).send({ msg: err.message }); }
                console.log(user + 'hello')
                  //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
                  return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
              }); 
            });


     })
  }

  static manageAdminsDetailVerification(request,response){
  
     const {
      isVerified
    } = request.body;

    
   
    UserModel.findOne({ _id:  request.params.id }, function (err, user) {

      if (!user){ 
       return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
      }
      user.isVerified = isVerified || user.isVerified;
      user.save(function (err,user) {
        if (err) { console.log(err) 
          return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }

  static manageDrivers(request,response){
    UserModel.find({is_active:true,roles:'Individual Driver'})
      .then(data => {
        const drivers = data;
        console.log(drivers,"drivers are here")
        if (drivers.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              drivers:[],
          
              message: 'Successful',
            },
          ],
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              drivers,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>{
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        })
      });
  }

  static deleteDriver(request,response){
    UserModel.find({_id: request.params.id,roles:'Individual Driver'})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        UserModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }



  static createNewDriver(request,response){
       let boolVerification;

     let {
          firstname,
        lastname,
        username,
        email,
        password,
        passwordComfirm,
        phoneNumber,
        avatar,
        certificate,
        user_type,
        status,
        is_verified
      } = request.body;

      if(is_verified=="false"){
            boolVerification =false;
      }else{
        boolVerification =true;
      }

    password = TokenGenerator.hashPassword(password.trim());

    const Newuser = new UserModel({ 
      id: new AutoincrementId(UserModel).counter(), 
       firstname,
        lastname,
        username,
        email,
        password,
        
        phone_number: phoneNumber,
        avatar,
        test_certificate:certificate,
  
        status :"Active",
        is_admin:false,
        isVerified: boolVerification,
        roles: 'Individual Driver'



      });

     Newuser.save()
      .then(data => {
        const user = data;
        const result = {
          id: user.id,
          email: user.email,
          username: user.username,
        };
        




        const token = TokenGenerator.generateToken(result);
        return response.status(201).json({
          status: 201,
          data: [
            {
              token,
              user,
            },
          ],
          message: 'User created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

    
  }

  static manageDriversDetail(request,response){
       let boolVerification;

     const {
      firstname,
      lastname,
      username,
      password,
      phoneNumber,
      avatar,
      certificate,
      user_type,
      email,
      status,
      is_verified
    } = request.body;

    if(is_verified=="false"){
            boolVerification =false;
      }else{
        boolVerification =true;
      }



    if(!password.length){
      
        console.log('err here1')
        return res.status(400).send({ msg: 'password do not match.' });
      
    }

    


    UserModel.findOne({ _id:  request.params.id, roles:'Individual Driver' }, function (err, user) {

      if (!user){ 
       return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
      }
      if(password=="unchanged" ){
       user.password= user.password;
       console.log("old:" + user.password)
      } else{
        user.password= TokenGenerator.hashPassword(password.trim());
        console.log("new pass: "+ user.password)
      }

     
      // Verify and save the user
    
      user.username= username || user.username;
      user.email= email || user.email;
      user.status= status || user.status;
      user.avatar= avatar || user.avatar;
      user.roles= user_type|| user.user_type;
      user.firstname= firstname|| user.firstname;
      user.lastname = lastname || user.lastname;
      user.phone_number = phoneNumber|| user.phone_number;
      user.test_certificate = certificate || user.test_certificate;
      //user.isVerified = boolVerification || user.isVerified;
      user.save(function (err,user) {
        if (err) { console.log(err) 
          return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }

  static manageDriversDetailVerification(request,response){
  
     const {
      isVerified
    } = request.body;

   
   
    UserModel.findOne({ _id:  request.params.id }, function (err, user) {

      if (!user){ 
       return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
      }
      user.isVerified = isVerified || user.isVerified;
      user.save(function (err,user) {
        if (err) { console.log(err) 
          return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }

  static managePartners(request,response){
    PartnersModel.find()
      .then(data => {
        const partners = data;
        console.log(partners +"partners available")
        if (partners.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              partners:[],
          
              message: 'Successful',
            },
          ],
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              partners,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static deletePartner(request,response){
    PartnersModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        PartnersModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }


  static createNewPartner(request,response){
       let boolVerification;
    let address ='';
    if(request.body.address){
      address = request.body.address;
    }
      let {
            firstname,
          lastname,
          username,
          email,

          password,
          // passwordComfirm,
          phoneNumber,
          avatar,
          certificate,
          user_type,
          status,
          is_verified,
          totalCars,
          bankAccount,
          bankAccountName,
          bankAccountNumber,

      
        } = request.body;

        if(is_verified=="false"){
            boolVerification =false;
      }else{
        boolVerification =true;
      }
    

    password = TokenGenerator.hashPassword(password.trim());
   
    const Newuser = new  PartnersModel({ 
      id: new AutoincrementId(PartnersModel).counter(), 
       firstName: firstname,
        lastName: lastname,
        userName: username,
        name: firstname + " " + lastname,
        email,
        password,
        address:address,
        totalCars,
        
        phoneNumber: phoneNumber,
        phone: phoneNumber,
        avatar,
        businessName:certificate,
        roles: user_type,
        status :status,
        isVerified: boolVerification,
        totalCars,

          bankAccount,
          bankAccountName,
          bankAccountNumber,
      });

     Newuser.save()
      .then(data => {
        const user = data;
        const result = {
          id: user.id,
          email: user.email,
          username: user.username,
        };
        
        const token = TokenGenerator.generateToken(result);
        return response.status(201).json({
          status: 201,
          data: [
            {
              token,
              user,
            },
          ],
          message: 'User created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
    
  }


  static managePartnersDetail(request,response){
       let boolVerification;
    const {
      firstname,
      lastname,
      username,
      password,
      totalCars,
      phoneNumber,
      avatar,
      certificate,
      user_type,
      email,
      address,
      status,
      is_verified,

          bankAccount,
          bankAccountName,
          bankAccountNumber,

    } = request.body;

    if(is_verified=="false"){
            boolVerification =false;
      }else{
        boolVerification =true;
      }



  
      if(!password){
        console.log('err here1')
        return res.status(400).send({ msg: 'password field required' });
      }
    

    


    PartnersModel.findOne({ _id:  request.params.id }, function (err, user) {

      if(err){
        return response.status(400).send({ msg: 'Some error occured.' });
      }

      if (!user) {
        return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      }
      
      if(password==="unchanged" ){
       user.password= user.password;
       console.log("old:" + password+ "=="+  user.password)
      } else{
        user.password= TokenGenerator.hashPassword(password.trim());
        console.log("new pass: "+ password+ "=="+ user.password)
      }

     
      // Verify and save the user
      user.avatar= avatar || user.avatar;
      user.userName= username || user.userName;
      user.email= email || user.email;
      user.businessName= certificate || user.businessName;
      user.roles= user_type || user.roles;
      user.firstName= firstname|| user.firstName;
      user.lastName = lastname || user.lastName;
      user.phoneNumber = phoneNumber|| user.phoneNumber;
      user.status = status|| user.status;
      user.address= address || user.address;
      user.totalCars = totalCars || user.totalCars;
      user.bankAccount = bankAccount || user.bankAccount;
      user.bankAccountName = bankAccountName || user.bankAccountName;
      user.bankAccountNumber = bankAccountNumber || user.bankAccountNumber;
      //user.isVerified = boolVerification || user.isVerified;
      user.save(function (err,user) {
        if (err) { return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }


  static managePartnersDetailVerification(request,response){
  
     const {
      isVerified
    } = request.body;

    
   
    PartnersModel.findOne({ _id:  request.params.id }, function (err, user) {

      if (!user){ 
       return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
      }
      user.isVerified = isVerified || user.isVerified;
      user.save(function (err,user) {
        if (err) { console.log(err) 
          return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }

  
  //partners earnings
  static managePartnersEarnings(request,response){
    EarningsModel.find()
      .then(data => {
        const earnings = data;
        //console.log(partners +"partners available")
        if (earnings.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              earnings:[],
          
              message: 'Successful',
            },
          ],
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              earnings,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static deletePartnersEarnings(request,response){
    EarningsModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        EarningsModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }


  static createNewPartnersEarnings(request,response){
      
      let {
            
              
              paymentDate,
              PaymentStatus,
              PaymentAmount,
              paymentReference,
              partnerId,
              partnerEmail,
              partnerBankAccount,
              vehicleId,
              vehicleName,
              vehiclePlateNo,
        
      
        
        } = request.body;

        let pid = partnerId;

        
    const Newuser = new  EarningsModel({ 
      id: new AutoincrementId(EarningsModel).counter(), 
       
              paymentDate,
              PaymentStatus,
              PaymentAmount,
              paymentReference,
              partnerId,
              partnerEmail,
              partnerBankAccount,
              vehicleId,
              vehicleName,
              vehiclePlateNo,
              partner: pid,
      });

     Newuser.save()
      .then(data => {
        const user = data;
        const result = {
          id: user.id,
          email: user.email,
          username: user.username,
        };
        
        return response.status(201).json({
          status: 201,
          data: [
            {
              
              user,
            },
          ],
          message: 'User created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
    
  }


  static managePartnersEarningsDetail(request,response){
      

    const {
       type,
              paymentDate,
              PaymentStatus,
              PaymentAmount,
              paymentReference,
              partnerId,
              partnerEmail,
              partnerBankAccount,
              vehicleId,
              vehicleName,
              vehiclePlateNo,
              
    } = request.body;

        let pid = partnerId; 

    


    EarningsModel.findOne({ _id:  request.params.id }, function (err, user) {

      if(err){
        return response.status(400).send({ msg: 'Some error occured.' });
      }

      if (!user) {
        return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      }

     
      
      
     
      // Verify and save the user
      user.type= type || user.type;
      user.paymentDate= paymentDate || user.paymentDate;
      user.paymentStatus= PaymentStatus || user.PaymentStatus;
      user.paymentAmount= PaymentAmount || user.PaymentAmount;
      user.paymentReference= paymentReference || user.paymentReference;
      user.partnerId= partnerId || user.partnerId;
      user.partnerEmail= partnerEmail || user.partnerEmail;
      user.partnerBankAccount = partnerBankAccount || user.partnerBankAccount;
      user.vehicleId = vehicleId || user.vehicleId;
      user.vehicleName = vehicleName || user.vehicleName;
      user.vehiclePlateNo = vehiclePlateNo || user.vehiclePlateNo;
      user.partner = partnerId || user.partnerId;
      
      //user.isVerified = boolVerification || user.isVerified;
      user.save(function (err,user) {
        if (err) { return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }

  static manageProfile(request,response){
    UserModel.find({email: request.params.id})
      .then(data => {
        console.log("specific profile:" + data)
        
       
        const profile = data; //related
        if (profile.length <= 0) {
                return response.status(404).json({
                  status: 404,
                  error: 'The user with the given id does not exists',
                });
        }
        return response.status(200).json({
                status: 200,
                data: [
                  {
                    profile,
                    message: 'Get a specific user was successful',
                  },
                ],
          });
      })
      .catch(err =>{
              response.status(400).json({
                status: 400,
                error: ErrorHandler.errors().validationError,
              })
      });
    
  }

  static manageProfileDetail(request,response){
       let boolVerification;
    const {
      firstname,
      lastname,
      username,
      password,
      // passwordConfirm,
      phoneNumber,
      avatar,
      certificate,
      user_type,
      email,
      //status,
      is_verified
    } = request.body;



    if(!password.length ){
    
        console.log('err here1')
        return res.status(400).send({ msg: 'password do not match.' });
      
    }

    


    UserModel.findOne({ _id:  request.params.id }, function (err, user) {

      if (!user) {
        return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      }

      if(password=="unchanged" ){
       user.password= user.password;
       console.log("old:" + user.password)
      } else{
        user.password= TokenGenerator.hashPassword(password.trim());
        console.log("new pass: "+ user.password)
      }

     
      // Verify and save the user
      user.avatar= avatar || user.avatar;
      user.username= username || user.username;
      user.email= email || user.email;
   
      user.roles= user_type|| user.user_type;
      user.firstname= firstname|| user.firstname;
      user.lastname = lastname || user.lastname;
      user.phone_number = phoneNumber|| user.phone_number;
      user.test_certificate = certificate|| user.test_certificate;
      //user.status = status || user.status;
      //user.isVerified = boolVerification || user.isVerified
      user.save(function (err,user) {
        if (err) { 
          console.log(err)
          return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }


  static manageProfileDetailVerification(request,response){
  
     const {
      isVerified
    } = request.body;

    
   
    UserModel.findOne({ _id:  request.params.id }, function (err, user) {

      if (!user){ 
       return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
      }
      user.isVerified = isVerified || user.isVerified;
      user.save(function (err,user) {
        if (err) { console.log(err) 
          return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
  }




  static managePlanPackage(request,response){
    

    IndividualPlanModel.find()
      .then(data => {
        const individualPlans = data;

        

        console.log(individualPlans+ "individual available plans")
        if (individualPlans.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              individualPlans:[],
          
              message: 'Successful',
            },
          ],
          });
        }



        
        return response.status(200).json({
          status: 200,
          data: [
            {
              individualPlans,
          
              message: 'Successful',
            },
          ],
        });
        
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
   
  

  }


  static managePlanPackageCorporate(request,response){
    coperatePlanModel.find()
      .then(data => {
        const corporatePlans = data;

        console.log(corporatePlans+ "coperatePlans available plans")
        if (corporatePlans.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              corporatePlans:[],
          
              message: 'Successful',
            },
          ],
          });
        }


  
          
          return response.status(200).json({
            status: 200,
            data: [
              {
                
              
                corporatePlans,
            
                message: 'Successful',
              },
            ],
          });

  


        
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );

  }

  static deletePlanPackage(request,response){
    console.log(request.params + "soloewe")
     if(request.params.delete_type=="Individual"){

      IndividualPlanModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        IndividualPlanModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });


     }else if(request.params.delete_type=="Corporate"){

      coperatePlanModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        coperatePlanModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });


     }
     
  }


  static createNewPlan(request,response){

    
      let {
          plan_name,
          plan_categories,
          status,
          description,
          max_car,
          price,

          

      
        } = request.body;

        let Newuser;
        let plan;
    
    if(plan_categories==="Individual"){

      Newuser = new  IndividualPlanModel({ 
      id: new AutoincrementId(IndividualPlanModel).counter(), 
          plan_name,
          plan_categories,
          status,
          description,
          car_max:max_car,
          price
      });

     Newuser.save()
      .then(data => {
        plan = data;
        
        return response.status(201).json({
          status: 201,
          data: [
            {
              
              plan,
            },
          ],
          message: 'Plan created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
    

    }else {

       Newuser = new  coperatePlanModel({ 
      id: new AutoincrementId(coperatePlanModel).counter(), 
       plan_name,
          plan_categories,
          status,
          description,
          car_max: max_car,
          price
          
        
      });

     Newuser.save()
      .then(data => {
        plan = data;
        
        return response.status(201).json({
          status: 201,
          data: [
            {
              plan
            },
          ],
          message: 'Plan created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

    }
    
    
  }


  static managePlanPackageDetail(request,response){

    const {
      plan_name,
      plan_categories,
      description,
      max_car,
      price,
      status
    } = request.body;

   console.log(plan_name+ "is here 2")

    if(plan_name=="Individual" ){
        console.log(plan_name+ "is here")
        IndividualPlanModel.findOne({ _id:  request.params.id }, function (err, plan) {

        if (!plan) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }

        // Verify and save the user
        // user.avatar= avatar || user.avatar;
        plan.plan_name= plan_name || plan.plan_name;
        plan.plan_categories= plan_categories || plan.plan_categories;
     
        plan.price= price || plan.price;
        plan.description= description || plan.description;
        plan.car_max = max_car || plan.car_max;
        plan.status = status || plan.status;
        plan.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message });
          }
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
        }); 
      });
      
      
    }else{

      coperatePlanModel.findOne({ _id:  request.params.id }, function (err, plan) {

        if (!plan) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }

        plan.plan_name= plan_name || plan.plan_name;
        plan.plan_categories= plan_categories || plan.plan_categories;
     
        plan.price= price || plan.price;
        plan.description= description || plan.description;
        plan.car_max = max_car || plan.car_max;
        plan.status = status || plan.status;
        plan.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message }); 
          }
          console.log(plan + 'hello')
            //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
        }); 
      });
      

    }
    
  }



  static manageInspection(request,response){
 
  
        


    CarsModel.find({health_status:{'$ne':'Completed'}})
      .then(data => {
        const inspections = data;

        console.log(inspections)

        
        if (inspections.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              inspections:[],
          
              message: 'Successful',
            },
          ],
          });
        }


  
          
          return response.status(200).json({
            status: 200,
            data: [
              {
                
              
                inspections,
            
                message: 'Successful',
              },
            ],
          });

  


        
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );

  }

  static manageInspectionDetail(request,response){
     const {
           health_status, 
           confirmedInspectionDate,
           confirmedInspectionTime,
           partnerEmail
           // description,
           //  username, email,
           //  time, createdDate,
           //  phone_number


          } = request.body

    CarsModel.findOne({ _id:  request.params.id }, function (err, plan) {

        if (!plan) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }

 
        plan.health_status= health_status || plan.health_status;
        plan.confirmedInspectionTime= confirmedInspectionTime || plan.confirmedInspectionTime;
        plan.confirmedInspectionDate = confirmedInspectionDate || plan.confirmedInspectionDate;     
        
        let date = plan.confirmedInspectionDate;
        let time = plan.confirmedInspectionTime;

        console.log(confirmedInspectionTime, plan.confirmedInspectionDate)
        if(plan.status=='Pending'){
            plan.status = 'Available' ;     
        
        }
        // plan.username= username || plan.username;
        // plan.email= email || plan.email;
        // plan.time = time || plan.time;
        // plan.createdDate = createdDate || plan.createdDate;
        // plan.phone_number = phone_number ||  plan.phone_number
        plan.save(function (err,user) {
          if (err) { 
            console.log(err)

            return response.status(500).send({ msg: err.message });
          }

          //send email to partner

          UserService.NotificationEmail(request,response,'/views/templates/inspection_confirmation.html', {
                     username: partnerEmail,
                     confirmedInspectionDate: date,
                    confirmedInspectionTime:time,
                    link:process.env.DEPLOY_FRONT_URL 
            },partnerEmail,200)


            return response.status(200).send({ status:200, success:'ok', msg: 'Successfully updated user profile.' });
        }); 
      });
  }


  static createNewInspection(request,response){
    const {
           username,
            email,
            phone_number,
            description,
            createdDate,
            time,
            status,
            car_id,


          } = request.body

        let Newuser;
        let plan;
    
    

      Newuser = new  InspectionModel({ 
      id: new AutoincrementId(InspectionModel).counter(), 
         username,
            email,
            phone_number,
            description,
            createdDate,
            time,
            status,
            car_id,
      });

     Newuser.save()
      .then(data => {
        plan = data;
        
        return response.status(201).json({
          status: 201,
          data: [
            {
              
              plan,
            },
          ],
          message: 'Plan created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
    

    
    
  }
  
   static deleteInspection(request,response){
      
    

      InspectionModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        InspectionModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });


     
    
  }

  

  static manageDriveTest(request,response){

    DriveTestModel.find()
      .then(data => {
        const testDrive = data;

        console.log(testDrive+ "coperatePlans available plans")
       if (testDrive.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              testDrive:[],
          
              message: 'Successful',
            },
          ],
          });
        }


  
          
          return response.status(200).json({
            status: 200,
            data: [
              {
                
              
                testDrive,
            
                message: 'Successful',
              },
            ],
          });

  


        
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );

  }

  static addDriveTestFromItinerary(request,response){

    const {
           username,
                email,
                phone_number,
                car_id,
                status,
                description,
                
                createdDate,


          } = request.body;

        let Newuser;
        let plan;
    
    

      Newuser = new  DriveTestModel({ 
      id: new AutoincrementId(DriveTestModel).counter(), 
         username,
         email,
         phone_number,
         car_id,
         status:"Pending",
         description,       
         createdDate,
      });

     Newuser.save()
      .then(data => {
        plan = data;
        
        return response.status(201).json({
          status: 201,
          data: [
            {
              
              plan,
            },
          ],
          message: 'Plan created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
    

  }


  static createNewDriveTest(request,response){

       const {
           username,
            email,
            phone_number,
            description,
            createdDate,
            time,
            status,
            car_id,


          } = request.body;

        let Newuser;
        let plan;
    
    

      Newuser = new  DriveTestModel({ 
      id: new AutoincrementId(DriveTestModel).counter(), 
         username,
            email,
            phone_number,
            description,
            createdDate,
            time,
            test_center:time,

            status,
            car_id,
      });

     Newuser.save()
      .then(data => {
        plan = data;
        
        return response.status(201).json({
          status: 201,
          data: [
            {
              
              plan,
            },
          ],
          message: 'Plan created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
    

    
    
  }

  static manageUsersDriveTestCenterUpdate(request,response){

     const {
           test_center,
           test_center_address,


          } = request.body;
    UserModel.findOne({ _id:  request.params.id }, function (err, plan) {

        if (!plan) {
          return response.status(400).send({ msg: 'We were unable to find a user with that id.' });
        }

        // Verify and save the user
        // user.avatar= avatar || user.avatar;
        // plan.plan_name= plan_name || plan.plan_name;
        // plan.plan_categories= plan_categories || plan.plan_categories;
     
        // plan.price= price || plan.price;
        // plan.description= description || plan.description;
        // plan.car_max = max_car || plan.car_max;
        plan.test_center = test_center || plan.test_center;
        plan.test_center_address = test_center_address || plan.test_center_address
        plan.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message });
          }
           return response.status(200).send({ status:200, success:'ok', msg: 'Successfully updated .' });
        }); 
      });

  }

  static manageDriveTestDetail(request,response){

     const {
           // username,
           //  email,
           //  phone_number,
           //  description,
           //  createdDate,
           //  time,
            status,
            // car_id,


          } = request.body;
    DriveTestModel.findOne({ _id:  request.params.id }, function (err, plan) {

        if (!plan) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }

        // Verify and save the user
        // user.avatar= avatar || user.avatar;
        // plan.plan_name= plan_name || plan.plan_name;
        // plan.plan_categories= plan_categories || plan.plan_categories;
     
        // plan.price= price || plan.price;
        // plan.description= description || plan.description;
        // plan.car_max = max_car || plan.car_max;
        plan.status = status || plan.status;
        plan.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message });
          }
           return response.status(200).send({ status:200, success:'ok', msg: 'Successfully updated .' });
        }); 
      });
  }


   static deleteDriveTest(request,response){

        

      DriveTestModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        DriveTestModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });


     
    
  }


  static managePreviledges(request,response){

    // import DriveTestModel from  "../models/DriveTest.model";
// import Previledges from "../models/Roles.model";
    RolesAndPreviledgesModel.find()
      .then(data => {
        const users = data;


        if (users.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              previledges:[],
          
              message: 'Successful',
            },
          ],
          });
        }

        



       
  
          
          return response.status(200).json({
            status: 200,
            data: [
              {
                
              
                previledges: users ,
            
                message: 'Successful',
              },
            ],
          });

  


        
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );

  }


  static createNewPreviledges(request,response){
     const {previledges_description, previledges_info,usergroups_old} = request.body

        let Newuser;
        let plan;
    
    

      Newuser = new  RolesAndPreviledgesModel({ 
      id: new AutoincrementId(RolesAndPreviledgesModel).counter(), 
          previledges_description, previledges_info
      });

     Newuser.save()
      .then(data => {
        plan = data;



        RolesAndPreviledgesModel.find({ for_admins:  true }, function (err, users) {
           
                      if (!users) {
                        return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
                      }

                      let usergroup = [...usergroups_old,previledges_info]

                      RolesAndPreviledgesModel.updateMany({ for_admins:  true },{ $set:{  usergroup_set:usergroup}},{ multi: true }, function(err,result){
                         if (err) {
                              console.log(err)
                              res.send(err);
                            } else {

                            

                               UserModel.find({ for_users:  true }, function (err, users) {
           
                                      if (!users) {
                                        return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
                                      }

                                      UserModel.updateMany({ for_users:  true },{ $set:{  usergroup_set:usergroup}},{ multi: true }, function(err,result){
                                         if (err) {
                                              console.log(err)
                                              res.send(err);
                                            } else {

                                              return response.status(201).json({
                                                status: 201,
                                                data: [
                                                  {
                                                    success:'ok',
                                                    result,
                                                  },
                                                ],
                                                message: 'Updated all users with fields and status changed',
                                              });
                                            }

                                       })     



                         })












                            }

                       })     



         })
        
        // return response.status(201).json({
        //   status: 201,
        //   data: [
        //     {
              
        //       plan,
        //     },
        //   ],
        //   message: 'Plan created successfully',
        // });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });















         

                //find all users of usch roles and update
         



    

    
    
  }

  static adminPreviledgesEdit(request,response){

         const {
          view_bookings,
          view_quotations,
          view_transactions,
          view_payments,
          view_drivers,
          view_sos,
          view_partners,
          view_package,
          view_cars,
          previledges_info,
          view_tickets,
          view_faqs,
          view_users,
          view_admins,
          view_settings,
          view_car_inspection,
          view_drive_test,

          status,


          manage_bookings,
          manage_quotations,
          manage_payments,
          manage_drivers,
          manage_sos,
         manage_partners,
          manage_package,
         manage_transactions,
          manage_cars,
          manage_tickets,
          manage_faqs,
          manage_settings,
          manage_users,
          manage_admins,
          manage_drive_test,
          manage_car_inspection,
        }  = request.body;  

    


    RolesAndPreviledgesModel.findOne({ _id:  new String( request.params.id) }, function (err, roles) {

        if (!roles) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }


        // Verify and save the user
        // user.avatar= avatar || user.avatar;
        roles.status = status || roles.status;
        roles.view_bookings= view_bookings || roles.view_bookings;
          roles.view_quotations= view_quotations || roles.view_quotations;
          roles.view_transactions= view_transactions || roles.view_transactions;
          roles.view_payments = view_payments || roles.view_payments;
          roles.view_drivers = view_drivers || roles.view_drivers;
          roles.view_sos= view_sos || roles.view_sos;
          roles.view_partners = view_partners || roles.view_partners;
          roles.view_package= view_package || roles.view_package;
          roles.view_cars= view_cars || roles.view_cars;
          roles.view_tickets = view_tickets || roles.view_tickets;
          roles.view_faqs = view_faqs || roles.view_faqs;
          roles.view_users = view_users || roles.view_users;
          roles.view_admins = view_admins || roles.view_admins;
          roles.view_settings = view_settings || roles.view_settings;

          roles.view_drive_test = view_drive_test || roles.view_drive_test;
          roles.view_car_inspection = view_car_inspection || roles.view_car_inspection;


        
        roles.manage_bookings= manage_bookings || roles.manage_bookings;
          roles.manage_quotations= manage_quotations || roles.manage_quotations;
          roles.manage_transactions= manage_transactions || roles.manage_transactions;
          roles.manage_payments = manage_payments || roles.manage_payments;
          roles.manage_drivers = manage_drivers || roles.manage_drivers;
          roles.manage_sos= manage_sos || roles.manage_sos;
          roles.manage_partners = manage_partners || roles.manage_partners;
          roles.manage_package= manage_package || roles.manage_package;
          roles.manage_cars= manage_cars || roles.manage_cars;
          roles.manage_tickets = manage_tickets || roles.manage_tickets;
          roles.manage_faqs = manage_faqs || roles.manage_faqs;
          roles.manage_users = manage_users || roles.manage_users;
          roles.manage_admins = manage_admins || roles.manage_admins;
          roles.manage_settings = manage_settings || roles.manage_settings;

          roles.manage_drive_test = manage_drive_test || roles.manage_drive_test;
          roles.manage_car_inspection = manage_car_inspection || roles.manage_car_inspection;

    

     
        roles.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message });
          }

          console.log(user)

          //find all users of usch roles and update
          UserModel.find({ roles:  previledges_info }, function (err, users) {

                if (!users) {
                  return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
                }

               

               UserModel.updateMany({ roles: previledges_info },
                 { $set:
                       { view_bookings,
                          view_quotations,
                          view_transactions,
                          view_payments,
                          view_drivers,
                          view_sos,
                          view_partners,
                          view_package,
                          view_cars,
                          view_tickets,
                          view_faqs,
                          view_users,
                          view_admins,
                          view_settings,
                          status ,


                          manage_bookings,
                          manage_quotations,
                          manage_payments,
                          manage_drivers,
                          manage_sos,
                         manage_partners,
                          manage_package,
                         manage_transactions,
                          manage_cars,
                          manage_tickets,
                          manage_faqs,
                          manage_settings,
                          manage_users,
                          manage_admins,


          view_car_inspection,
          view_drive_test,
           manage_drive_test,
          manage_car_inspection,


                        }
              },{ multi: true }




               , function(err,result)
                 {
                  if (err) {
                    console.log(err)
                    res.send(err);
                  } else {
                    
                    return response.status(200).json({
                      status: 200,
                      data: [
                        {
                          success:'ok',
                          result,
                        },
                      ],
                      message: 'Updated all users with fields and status changed',
                    });
                  }
              
              });




           })


        }); 
      });
  }

  static managePreviledgesDetail(request,response){
    const {previledges_description, previledges_info} = request.body
    RolesAndPreviledgesModel.findOne({ _id:  request.params.id }, function (err, plan) {

        if (!plan) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }


        // Verify and save the user
        // user.avatar= avatar || user.avatar;
        plan.previledges_info= previledges_info || plan.previledges_info;
        plan.previledges_description= previledges_description || plan.previledges_description;
     
        plan.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message });
          }

          //find all users of usch roles and update
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
        }); 
      });
  }


  static managePreviledgesRulesDetail(request,response){
    const {field, value} = request.body
    UserModel.findOne({ _id:  request.params.id }, function (err, plan) {

        if (!plan) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }


        // Verify and save the user
        // user.avatar= avatar || user.avatar;
        plan[field]= value || plan[field];
        
     
        plan.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message });
          }
          return response.status(200).send({success:'ok', msg: 'Successfully updated user roles andd permission profile.' });
        }); 
      });
  }


   static deletePreviledges(request,response){
         //if(request.params.delete_type=="Individual"){

      RolesAndPreviledgesModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        RolesAndPreviledgesModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });


     //}
    
  }



  static manageSOS(request,response){
    SOSModel.find()
      .then(data => {
        let redFlag = data;
        console.log(redFlag,"SOS VALUES")
        if (redFlag.length === 0) {
          

          return response.status(200).json({
            status: 200,
            data: [
              {
                redFlag:[],
                message: 'No SOS found',
              },
            ],
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              redFlag,
              message: 'All sos/redflags was retrieved successfully',
            },
          ],
        });
      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }


  


  static manageSOSDetail(request,response){

    SOSModel.find({_id: request.params.id})
  .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { status } = request.body;
     

            SOSModel.updateOne({_id: request.params.id }, {
                    
                      status: status
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated red-flag record’s status',
                    },
                  ],
                });
              })
              .catch(err =>{
                console.log(err)
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                });
              });

    
      })
      .catch(error => {
         console.log(err)
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                });
      });

  }

  static deleteSOS(request,response){
    SOSModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        SOSModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }

  static deleteTicket(request,response){

    InterventionsModel.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The user with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        InterventionsModel.remove({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error =>{
         console.log(error)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

  }

  static manageTickets(request,response){
    InterventionsModel.find()
      .then(data => {
        console.log("all tickets>>>>" + data)
        let intervention = data;
        if (intervention.length === 0) {
          

          return response.status(200).json({
            status: 200,
            data: [
              {
                intervention:[],
                message: 'No records yet',
              },
            ],
          });
        }
        //console.log( intervention)
        return response.status(200).json({
          status: 200,
          data: [
            {
              intervention,
              message: 'All interventions was retrieved successfully',
            },
          ],
        });
      })
      .catch(err => {
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
    
  }


  static createNewTicket(request,res){
    const { status , subject, category, response, username,phone_number,email, assigned_to,comment} = request.body;

    const NewCars = new InterventionsModel({ 
            id:  new AutoincrementId(InterventionsModel).counter(),
            status , category, subject, response, username,phone_number,email, assigned_to,comment
      });

    NewCars.save()
      .then(data => {
        const Cars = data;
        return res.status(201).json({
          status: 201,
          data: [
            {
              id: Cars.id,
              message: 'Created car record',
            },
          ],
        });
      })
      .catch(err =>{
        console.log(err)
        res.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }

  static manageTicketsDetail(request,responses){

    InterventionsModel.find({_id: request.params.id})
  .then(redId => {
        if (redId.length <= 0) {
          return responses.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { status , category, response, username,phone_number,email, assigned_to} = request.body;
   


            InterventionsModel.updateOne({_id: request.params.id }, {
                    
                      status: status || redId.status,
                      category: category || redId.category,
                      username: username || redId.username,
                      phone_number: phone_number || redId.phone_number,
                      email: email || redId.email,
                      response: response || redId.response, 
                      assigned_to: assigned_to || redId.assigned_to,
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return responses.status(201).json({
                  status: 201,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated red-flag record’s status',
                    },
                  ],
                });
              })
              .catch(err => {
                responses.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                });
              });

    

      })
      .catch(error => {
        responses.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        });
      });

  }



  static manageUserNotificationCounter(request,responses){

    UserModel.find({email: request.params.id})
  .then(redId => {
        if (redId.length <= 0) {
          return responses.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { notification_count} = request.body;
   


            UserModel.updateOne({_id: request.params.id }, {
                    
                      notification_count: notification_count || redId.notification_count,
                      
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return responses.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated user notification record’s status',
                    },
                  ],
                });
              })
              .catch(err => {
                responses.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                });
              });

    

      })
      .catch(error => {
        responses.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        });
      });

  }

  static createNewFAQ(request,response){
    const { question , answer, status} = request.body;

    const NewCars = new FAQModel({ 
            id:  new AutoincrementId(FAQModel).counter(),
            question , answer,status
      });

    NewCars.save()
      .then(data => {
        const Cars = data;
        return response.status(201).json({
          status: 201,
          data: [
            {
              id: Cars.id,
              message: 'Created car record',
            },
          ],
        });
      })
      .catch(err =>{
        console.log(err)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }



  static manageFaqs(request,response){
   FAQModel.find()
      .then(data => {
        let faqs= data;
        console.log(faqs,"faqs")
        if (faqs.length === 0) {

          return response.status(200).json({
            status: 200,
            data: [
              {
                faqs:[],
                message: 'All faqs was retrieved successfully',
              },
            ],
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              faqs,
              message: 'All faqs was retrieved successfully',
            },
          ],
        });
      })
      .catch(err => {
         
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }

  static manageFaqsDetail(request,response){

    FAQModel.find({_id: request.params.id})
    .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { question , answer, status} = request.body;
        


             FAQModel.updateOne({_id: request.params.id }, {
                    
                      question: question || redId.question,
                      answer: answer || redId.answer,
                      status: status || redId.status,
                  
                }).then(data => {
                  
                const faq = data;
                
                return response.status(201).json({
                  status: 201,
                  data: [
                    {
                      id: faq.status,
                      message: 'Updated faq record’s detail',
                    },
                  ],
                });
              })
              .catch(err =>
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                }),
              );

  
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );


  }









  static manageCars(request,response){
     CarsModel.find()
      .then(data => {
        let carsAvailable = data;
        console.log(carsAvailable+ "all cars here")
        if (carsAvailable.length === 0) {
           cars= [];

          return response.status(200).json({
            status: 200,
            data: [
              {
               carsAvailable:[],
                message: 'All Cars was retrieved successfully',
              },
            ],
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              carsAvailable,
              message: 'All Carss was retrieved successfully',
            },
          ],
        });
      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }


  static manageCarsDetail(request,response){
    const {
      status,
      health_status,
      car_status,
      car_type,
      car_model,
      description,
      car_year,
      assigned_driver_name,
      assigned_driver_email,
      assigned_driver_phone,
      partner_id,
      inspection_detail,
      plate_number,
      license,
      assigned_driver_id,
      images,
      inspectionDate,
      vehicleIdentificationNumber,

inspectionTime,

    } = request.body;


      CarsModel.find({_id: request.params.id})
    .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { question , answer} = request.body;
        


         CarsModel.updateOne({_id: request.params.id }, {
                    
                      status: status || redId.status,
                      health_status: health_status || redId.health_status,
                      car_status: car_status || redId.car_status,
                      car_type: car_type|| redId.car_type,
                      car_model: car_model || redId.car_model,
                      description: description || redId.description,
                      car_year : car_year || redId.car_year,
                      assigned_driver_name: assigned_driver_name || redId.assigned_driver_name,
                      assigned_driver_email: assigned_driver_email || redId.assigned_driver_email,
                      assigned_driver_phone: assigned_driver_phone || redId.assigned_driver_phone,
                      partner_id: partner_id || redId.partner_id,
                      inspection_detail: inspection_detail || redId.inspection_detail,
                      plate_number: plate_number || redId.plate_number,
                      license: license || redId.license,
                      assigned_driver_id: assigned_driver_id || redId.assigned_driver_id,
                      images: images || redId.images,
                      inspectionDate: inspectionDate || redId.inspectionDate,
                      vehicleIdentificationNumber: vehicleIdentificationNumber || redId.vehicleIdentificationNumber,
                      inspectionTime : inspectionTime || redId.inspectionTime ,
                      //images
                  
                }).then(data => {
                  
                const cars = data;
                
                return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: cars._id,
                      data: cars,
                      message: 'Updated faq record’s detail',
                    },
                  ],
                });
              })
              .catch(err =>
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                }),
              );

  
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );


  }


  static createNewCar(request,response){
    const {
       status,
       health_status,
       car_status,
            color,
            model,
      car_type,
      car_model,
      description,
      car_year,
      assigned_driver_name,
      assigned_driver_email,
      assigned_driver_phone,
      partner_id,
      inspection_detail,
      plate_number,
      license,
      assigned_driver_id,
      images,
      car,

      carModel,
      vehicleIdentificationNumber,

carYear,

vehicleColor,

plateNo,

inspectionDate,

inspectionTime,

carDescription,

imagePath,

creator,

date_created,
partnerEmail,

    } = request.body;
    
    const NewCars = new CarsModel({ 
            id:  new AutoincrementId(CarsModel).counter(),
            status,
            health_status,
            car_status,
            color,
            model: car_model,
      car_type,
      car_model,
      description,
      car_year,
      assigned_driver_name,
      assigned_driver_email,
      assigned_driver_phone,
      partner_id,
      inspection_detail,
      plate_number,
      license,
      assigned_driver_id,
      images,
      car,

      

      carModel,
      vehicleIdentificationNumber,

carYear,

vehicleColor,

plateNo,

inspectionDate,

inspectionTime,

carDescription,

imagePath,

creator,

date_created,
partnerEmail,






      });

    NewCars.save()
      .then(data => {
        const Cars = data;
        return response.status(201).json({
          status: 201,
          data: [
            {
              id: Cars.id,
              message: 'Created car record',
            },
          ],
        });
      })
      .catch(err =>{
        console.log(err)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }


 static  getCarsInfo(request,response){

           return   response.status(200).json({
          status: 200,
          data: [
            {
              carInfo: carsApi,
              message: 'Created car record',
            },
          ],
        });

    // const dataValues = [];
    // fs.createReadStream('cars_api_info.csv')
    //   .pipe(csv())
    //   .on('data', (row) => {
    //     try{
    //       dataValues.push(row)
    //     }catch(e){
    //        return  response.status(400).json({
    //       status: 400,
    //       data: [
    //         {
              
    //           message: e,
    //         },
    //       ],
    //     });
    //     }
    //     //console.log(row);
    //   })
    //   .on('end', () => {
    //     //console.log('CSV file successfully processed');
    //     //console.log(dataValues)
    //     return   response.status(200).json({
    //       status: 200,
    //       data: [
    //         {
    //           carInfo: dataValues,
    //           message: 'Created car record',
    //         },
    //       ],
    //     });
    //   });
  }


  



  



  
  static manageGoogleSettings(request,response){
    
      GmailSettingModel.find()
      .then(data => {
        const googleSettings = data;
        console.log(googleSettings,"users available are here")
        if (googleSettings.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no  record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              googleSettings,
               
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static getAllRepairs(request,response){

    MechModel.find()
      .then(data => {
        const mech = data;
        //console.log(googleSettings,"users available are here")
        if (mech.length === 0) {

          return response.status(200).json({
          status: 200,
          data: [
            {
              mech:[],
               
          
              message: 'Successful',
            },
          ],
        });
          
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              mech,
               
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );

  }


  static changeRepairStatus(request,response){

    MechModel.find({_id: request.params.id})
  .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { status } = request.body;
    


            MechModel.updateOne({_id:request.params.id }, {
                    
                      status: status
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return response.status(201).json({
                  status: 201,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated red-flag record’s status',
                    },
                  ],
                });
              })
              .catch(err =>{
                console.log(err)
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                });
              });

  
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );

  }



    static getAllPartnerEarnings(request,response){

    EarningsModel.find()
      .then(data => {
        const earnings = data;
        //console.log(googleSettings,"users available are here")
        if (earnings.length === 0) {

          return response.status(200).json({
          status: 200,
          data: [
            {
              earnings:[],
               
          
              message: 'Successful',
            },
          ],
        });
          
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              earnings,
               
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );

  }


  static createNewPartnerEarnings(request,response){
    let mongoose = require('mongoose');

    const { paymentDate,
PaymentStatus,
PaymentAmount,
paymentReference,
partnerId,
partnerEmail,
partnerBankAccount,
vehicleId,
vehicleName,
vehiclePlateNo,} = request.body;

    const NewEarnings = new EarningsModel({ 
            id:  new AutoincrementId(EarningsModel).counter(),
            paymentDate,
paymentStatus: PaymentStatus,
paymentAmount: PaymentAmount,
paymentReference,
partnerId,
partnerEmail,
partnerBankAccount,
vehicleId: mongoose.Types.ObjectId(vehicleId),
vehicleName,
vehiclePlateNo,
partner: mongoose.Types.ObjectId(partnerId),
vehicle: mongoose.Types.ObjectId(vehicleId),
date_created: new Date(),
      });

    NewEarnings.save()
      .then(data => {
        const Earnings = data;
        return response.status(201).json({
          status: 201,
          data: [
            {
              id: Earnings.id,
              message: 'Created car record',
            },
          ],
        });
      })
      .catch(err =>{
        console.log(err)
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }


  static manageFacebookSettings(request,response){
     FacebookSettingModel.find()
      .then(data => {
        const facebookSettings = data;
        console.log(facebookSettings,"facebookSettings available are here")
        if (facebookSettings.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no  record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              facebookSettings,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static managePaystackSettings(request,response){
     PaystackSettingModel.find()
      .then(data => {
        const paystackSettings = data;
        console.log(paystackSettings,"paystackSettings available are here")
        if (paystackSettings.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no  record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              paystackSettings,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }


  static manageEmailSettings(request,response){
     SendgridEmailSettingModel.find()
      .then(data => {
        const sendgridSettings = data;
        console.log(sendgridSettings,"sendgridSettings available are here")
        if (sendgridSettings.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no  record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              sendgridSettings,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static manageS3BucketSettings(request,response){
     AwsS3Model.find()
      .then(data => {
        const awsSettings = data;
        console.log(awsSettings,"awsSettings available are here")
        if (awsSettings.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no  record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              awsSettings,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static manageInstagramSettings(request,response){
     InstagramSettingModel.find()
      .then(data => {
        const instagramSettings = data;
        console.log(instagramSettings,"instagramSettings available are here")
        if (instagramSettings.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no  record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              instagramSettings,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static manageSettingsDetail(request,response){

    const {
      test_secret_key,
      test_public_key,
      live_public_key,
      live_secret_key,
      api_mode,
      type

    } = request.body;
   

    switch (type){
      case "google":
       GmailSettingModel.findOne({ _id:  request.params.id }, function (err, settings) {

        if (!settings) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }
        settings.test_secret_key= test_secret_key || settings.test_secret_key;
        settings.test_public_key= test_public_key || settings.test_public_key;
     
        settings.live_secret_key= live_secret_key || settings.live_secret_key;
        settings.live_public_key= live_public_key || settings.live_public_key;
        settings.api_mode = api_mode || settings.api_mode;
        
        settings.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message }); }
          
            //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
            return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
        }); 
      });
      
        break;
      case "aws":
      
        AwsS3Model.findOne({ _id:  request.params.id }, function (err, settings) {

        if (!settings) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }

        settings.test_secret_key= test_secret_key || settings.test_secret_key;
        settings.test_public_key= test_public_key || settings.test_public_key;
     
        settings.live_secret_key= live_secret_key || settings.live_secret_key;
        settings.live_public_key= live_public_key || settings.live_public_key;
        settings.api_mode = api_mode || settings.api_mode;
        
        settings.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message }); }
          
            //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
            return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
        }); 
      });
      
        break;
      case "facebook":
      

       FacebookSettingModel.findOne({ _id:  request.params.id }, function (err, settings) {

        if (!settings) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }
        settings.test_secret_key= test_secret_key || settings.test_secret_key;
        settings.test_public_key= test_public_key || settings.test_public_key;
     
        settings.live_secret_key= live_secret_key || settings.live_secret_key;
        settings.live_public_key= live_public_key || settings.live_public_key;
        settings.api_mode = api_mode || settings.api_mode;
        
        settings.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message }); }
         
            //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
            return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
        }); 
      });
      
       break;
      case "instagram":
      

       InstagramSettingModel.findOne({ _id:  request.params.id }, function (err, settings) {

        if (!settings) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }

        settings.test_secret_key= test_secret_key || settings.test_secret_key;
        settings.test_public_key= test_public_key || settings.test_public_key;
     
        settings.live_secret_key= live_secret_key || settings.live_secret_key;
        settings.live_public_key= live_public_key || settings.live_public_key;
        settings.api_mode = api_mode || settings.api_mode;
        
        settings.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message }); }
          
            //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
            return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
        }); 
      });
      
       break;
      case "paystack":
      

       PaystackSettingModel.findOne({ _id:  request.params.id }, function (err, settings) {

        if (!settings) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }
        settings.test_secret_key= test_secret_key || settings.test_secret_key;
        settings.test_public_key= test_public_key || settings.test_public_key;
     
        settings.live_secret_key= live_secret_key || settings.live_secret_key;
        settings.live_public_key= live_public_key || settings.live_public_key;
        settings.api_mode = api_mode || settings.api_mode;
        
        settings.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message }); }
         
            //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
            return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
        }); 
      });
      
       break;
      case "sendgrid":

       SendgridEmailSettingModel.findOne({ _id:  request.params.id }, function (err, settings) {

        if (!settings) {
          return response.status(400).send({ msg: 'We were unable to find a plan with that id.' });
        }

        settings.test_secret_key= test_secret_key || settings.test_secret_key;
        settings.test_public_key= test_public_key || settings.test_public_key;
     
        settings.live_secret_key= live_secret_key || settings.live_secret_key;
        settings.live_public_key= live_public_key || settings.live_public_key;
        settings.api_mode = api_mode || settings.api_mode;
        
        settings.save(function (err,user) {
          if (err) { 
            console.log(err)
            return response.status(500).send({ msg: err.message }); }
          
            //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
            return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
        }); 
      });
      
       break;
    }

  }


  static manageBookings(request,response){
    return  UserService.manageBookings(request,response)
  }


 

   static makeQuotation(request,response){
      let  {
                   plan_id,
                  price,
                  status,
                  full_name,
                  quotation_id,
                  email,
                  reference,
                  amount,
                  createdDateOfQuotation,
                  phone_number

                }  = request.body;


    
     const NewUserPlan = new QuoteModel({ 
      id: new AutoincrementId(QuoteModel).counter(), 
      plan_id,
      price,
      status,
      full_name,
      quotation_id,
      email,
      reference,
      amount,
      createdDateOfQuotation,
      phone_number,
     });


     NewUserPlan.save()
      .then(data => {
        const user = data;
        console.log(user + "plans")

        return response.status(201).json({
          status: 201,
          data: [
            {
              
              user
            },
          ],
          message: 'User Plan created successfully',
        });
      
      })
      .catch(err => {
        console.log(err+ 'error here user plan')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

      // UserService.saveUsersItinerary(request,response);
  }
             


  static createNewPlanBooking(request,response){
    //   let {
    //    itineraries,
    //   user_id,
    //   carsSelected,
    //   planName,
    //   price,
    //   planCategoryName,
    //   no_hours,
    //   username,
    //   email,
    //   phone_number,
    //   plan_id,
    // } = request.body;

    let {
       plan_id,
                     createdDate,
                    itineraries ,
                    user_id, 
                    carsSelected,
                    // plan_name:  plan_name.options[plan_name.selectedIndex].text,   //plan_name.value,
                    price,
                    // plan_categories: plan_categories,
                    status,
                    no_hours,
                    duration,
                    phone_number,
                     plan_category,//plan_categories1.value,
              plan_name,//plan_name1.value,

                    username,
                    email,
                     has_been_updated,
    }= request.body;

   


    
     const NewUserPlan = new UserPlanModel({ 
      id: new AutoincrementId(UserPlanModel).counter(), 
     plan_id,

    
                    createdDateOfQuotation: createdDate,
                    itineries:itineraries ,
                    user_id, 
                    cars_on_plan:carsSelected,
                    // plan_name:  plan_name.options[plan_name.selectedIndex].text,   //plan_name.value,
                    price,
                    // plan_categories: plan_categories,
                    status,
                    no_hours,
                    duration,
                    phone_number,

                     plan_category_name: plan_category,//plan_categories1.value,
              plan_name,//plan_name1.value,

                    username,
                    email,
                    has_updated: 'Yes',
     });


     NewUserPlan.save()
      .then(data => {
        const user = data;
        console.log(user + "plans")

        return response.status(201).json({
          status: 201,
          data: [
            {
              
              user
            },
          ],
          message: 'User Plan created successfully',
        });
      
      })
      .catch(err => {
        console.log(err+ 'error here user plan')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

      // UserService.saveUsersItinerary(request,response);
  }



  

  static manageBookingsDetail(request,response){
    return  UserService.manageBookingsDetail(request,response)
  }

  static manageManualBooking(request,response){
    //return  UserService.manageManualBooking(request,response)
  }

  static manageItineraries(request,response){
    ItineraryModel.find()
      .then(data => {
        const itineraries = data;
        console.log(data+ "either empty itins")
        if (itineraries.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              itineraries:[],
          
              message: 'Successful',
            },
          ],
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              itineraries,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }


  static manageUsersPlan(request,response){
    UserPlanModel.find()
      //.populate('users_collections')
      .then(data => {
        const usersPlan = data;
        console.log(data+ "either empty itins")
        if (usersPlan.length === 0) {
          return response.status(200).json({
            status: 200,
            data: [
            {
              usersPlan:[],
          
              message: 'Successful',
            },
          ],
          });
        }

        return response.status(200).json({
          status: 200,
          data: [
            {
              usersPlan,
          
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }


  





  static createNewItinerary(request, response) {
    // console.log(request.body)



  
    let {
       plan_category,
       start_location,
       destination,
       travel_option:drive_option,
       no_hours,
       travel_option,
       plan_name,
       status,
       start_time,
    
       drivingschool,
       user_id,
       username,
       email,
       phone_number,
       plan_id,
       end_time,
        pickup_time,
      certificate_id,
      certificate_date
    } = request.body;


   

    
    const NewItinerary = new ItineraryModel({ 
      id: new AutoincrementId(ItineraryModel).counter(), 
       plan_category,
       start_location,
       destination,
       travel_option:drive_option,
       no_hours,
       travel_option,
       plan_name,
       status,
       start_time,
       travel_option,
       drivingschool,
       user_id,
       username,
       email,
       phone_number,
       plan_id,
       end_time,
        pickup_time,
      certificate_id,
      certificate_date

       
     });

     NewItinerary.save()
      .then(data => {
        const user = data;
        const result = {
           plan_category: user.plan_category,
      start_location: user.start_location,
      destination: user.destination,
      drive_option:user.drive_option,
      no_hours:user.no_hours,
        travel_option:user.travel_option,
      plan_name,
      status,
      start_time,
      drivingschool,
      username: user.username,
      email:user.email
           // cars_id: user.cars_id
        };
        
        return response.status(201).json({
          status: 201,
          data: [
            {
              
              result
            },
          ],
          message: 'User Itinerary created successfully',
        });
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }




  

 

  static manageItineraryDetail(request,response){


    ItineraryModel.find({_id: request.params.id})
    .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given itinerary id does not exists',
                    });
        }
         const { status, assigned_driver_id, assigned_driver_name, assigned_driver_email, assigned_driver_phone} = request.body;

    
        


        ItineraryModel.updateOne({_id: request.params.id }, {
                    
                      status: status || redId.status,
                      assigned_driver_id : assigned_driver_id || redId.assigned_driver_name,
                      assigned_driver_name : assigned_driver_name || redId.assigned_driver_name,
                      assigned_driver_email : assigned_driver_email || redId.assigned_driver_email,
                      assigned_driver_phone: assigned_driver_phone || redId.assigned_driver_phone
                      
                  
                }).then(data => {
                  
                const faq = data;
                
                return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: faq._id,
                      message: 'Updated faq record’s detail',
                    },
                  ],
                });
              })
              .catch(err =>
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                }),
              );

  
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );

    
  }

  static manageWalletHistory(req,res){
    WalletModel.find().then((donor,error)=>{
          if(!donor){
              //handle error when the donor is not found
              console.log(error)
              res.redirect(BACKEND_API+ '/error')
          }
         const tranx = donor;
         console.log(tranx)
         return res.status(200).json({
                status: 200,
                data: [
                  {
                    tranx,
                    message: 'Get all wallet amount  was successful',
                  },
                ],
          });
        
      }).catch((e)=>{
          console.log(e)
          res.redirect(BACKEND_API+ '/error')
      })

  }


  static adminDashboardTodaySales(request,response){
    //var now = new Date();
    //var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // WalletModel.find({createdDate: {$gte: startOfToday}}, function (err, docs) { 
    //    if(err){
    //      console.log(err)
    //    }

    //    return response.status(200).json({
    //             status: 200,
    //             data: [
    //               {
    //                 todaySales:docs,
    //                 message: 'Get all wallet amount  was successful',
    //               },
    //             ],
    //       });

    //  });


      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      PaymentModel.find({created_at: {$gte: today}}).exec(function(err,wallet){
           if(err){ 
              return response.status(400).json({
                status: 400,
                message: 'Get all wallet amount  was successful',     
              });

           }

             let totalToday =0;
             let todaySales_from_account = wallet.map((item,i)=>{
                 totalToday+=item.amount
              })

            return response.status(200).json({
                status: 200,
                data: [
                  {
                    todaySales:totalToday,
                    message: 'Get all wallet amount  was successful',
                  },
                ],
          });

      });


       
  }

  static adminDashboardYesterdaySales(request,response){

    var yesterdayStart = new Date();
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);
    yesterdayStart.setHours(0,0,0,0);
    //var startId = Math.floor(yesterdayStart.getTime() / 1000).toString(16) + "0000000000000000";

    var yesterdayEnd = new Date();
    yesterdayEnd.setDate(yesterdayEnd.getDate() - 1);
    yesterdayEnd.setHours(23,59,59,999);
    



    PaymentModel.find({ "createdDate": { $gt: new Date(Date.now() - 24*60*60 * 1000)} }).exec(function(err,wallet){
           if(err){  console.log(err)}



             let totalYest =0;
             let todaySales_from_account = wallet.map((item,i)=>{
                 totalYest+=item.amount
              })

             console.log(totalYest)

            return response.status(200).json({
                status: 200,
                data: [
                  {
                    yesterdaysSales:totalYest,
                    message: 'Get all wallet amount  was successful',
                  },
                ],
          });

      });

    

  }

  static adminDashboardWeeklySales(request,response){
     let oneWeekAgo = Date(new Date() - 7 * 60 * 60 * 24 * 1000);

     // WalletModel.find({createdDate: {
     //       $gte: oneWeekAgo
      
     //    }
     //  }, function (err, docs) { 

     //     if(err){
     //     console.log(err)
     //   }

     //   return response.status(200).json({
     //            status: 200,
     //            data: [
     //              {
     //                weeklySales:docs,
     //                message: 'Get all wallet amount  was successful',
     //              },
     //            ],
     //      });

     // });

     

      PaymentModel.find({ "createdDate": { $gte: oneWeekAgo} }).exec(function(err,wallet){
           if(err){  console.log(err)}



             let totalWeek =0;
             let todaySales_from_account = wallet.map((item,i)=>{
                 totalWeek+=item.amount
              })

        

            return response.status(200).json({
                status: 200,
                data: [
                  {
                    weeklySales:totalWeek,
                    message: 'Get all wallet amount  was successful',
                  },
                ],
          });

      });
  }

  static adminDashboardMonthlySales(request,response){
     const lastMonths = new Date( (new Date().getMonth() -1));
     PaymentModel.find({"createdDate": {
           
           $lte: lastMonths
        }
      }, function (err, docs) {

       if(err){
         console.log(err)
       }

       return response.status(200).json({
                status: 200,
                data: [
                  {
                    lastMonth:docs,
                    message: 'Get all wallet amount  was successful',
                  },
                ],
          });


     });


  }

  

  

   

  static adminGetAllUsers(request,response){
    
  }



  static adminGetAllUsersPlans(request,response){
    
  }



  static paystackHistoryAdmin(req,res){
    const id = new String(req.params.id);
    WalletModel.find().then((donor,error)=>{
          if(!donor){
              //handle error when the donor is not found
              console.log(error)
              res.redirect(BACKEND_API+ '/error')
          }
         const tranx = donor;
         console.log(tranx +"for the user")
         return res.status(200).json({
                status: 200,
                data: [
                  {
                    wallets:tranx,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });
        
      }).catch((e)=>{
          console.log(e)
          res.redirect(BACKEND_API+ '/error')
      })
  }


  static paystackPaymentsAdmin(req,res){
    const id = new String(req.params.id);
    PaymentModel.find().then((donor,error)=>{
          if(!donor){
              //handle error when the donor is not found
              console.log(error)
              res.redirect(BACKEND_API+ '/error')
          }
         const tranx = donor;
         console.log(tranx +"for the user")
         return res.status(200).json({
                status: 200,
                data: [
                  {
                    payments:tranx,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });
        
      }).catch((e)=>{
          console.log(e)
          res.redirect(BACKEND_API+ '/error')
      })
  }


  static paystackQuotationsAdmin(req,res){
    const id = new String(req.params.id);
    QuoteModel.find().then((donor,error)=>{
          if(!donor){
              //handle error when the donor is not found
              console.log(error)
              res.redirect(BACKEND_API+ '/error')
          }
         const tranx = donor;
         console.log(tranx +"for the user quotations")
         return res.status(200).json({
                status: 200,
                data: [
                  {
                    quotations:tranx,
                    message: 'Get a specific user plan was successful',
                  },
                ],
          });
        
      }).catch((e)=>{
          console.log(e)
          res.redirect(BACKEND_API+ '/error')
      })
  }




  static updateUsersPlanStatusAdmin(request, response) {
    
      const  {
                    status,
                    payment_status,
                    email,
                     has_updated,
                     plan_id,
                     price,
                     createdDateOfQuotation
                  }= request.body;


    UserPlanModel.findOne({ plan_id:request.params.id }, function (err, user) {

      // Verify and save the user
      user.status= status || user.status;
      user.payment_status= payment_status || user.payment_status;
      user.email= email || user.email;
   
      user.has_updated= has_updated || user.has_updated;
      user.plan_id= plan_id || user.plan_id;
      user.price = price || user.price;
      user.createdDateOfQuotation = createdDateOfQuotation || user.createdDateOfQuotation
      
      user.save(function (err,user) {
        if (err) { return response.status(500).send({ msg: err.message }); }
        console.log(user + 'hello')


           

          
          UserPlanModel.updateMany({ plan_id: request.params.id },{
                                            $set:{  //status:status, 
                                                    "itineries.$[].status":status,
                                                  }},{ multi: true }, function(err,result){
                                     if (err) {
                                          console.log(err)
                                          response.send(err);
                                        } else {
                                          console.log(result)


                                          if(user.status=="Unpaid"){

                                                 
                                               UserService.NotificationEmail(request,response,'/views/templates/notification.html', {
                                                       username: user.username,
                                                       plan_id:user.plan_id,
                                                       price: user.price,
                                                       date: createdDateOfQuotation.substring(0,10),
                                                       link: process.env.DEPLOY_FRONT_URL,   
                                                      description: "Payment is required"
                                                  },user.email,200)


                                            }else{

                                              UserService.NotificationEmail(request,response,'/views/templates/notification.html', {
                                                       username: user.username,
                                                       plan_id:user.plan_id,
                                                       price: user.price,
                                                       date: createdDateOfQuotation.substring(0,10),
                                                       link: process.env.DEPLOY_FRONT_URL,   
                                                      description: "Payment is required"  
                                                      
                                                  },user.email,200)

                                              
                                            }


                                          



                                          //return response.status(200).send({status: 200 ,success:'ok', msg: 'Successfully updated itineraries of this plan .' });
                                
                                        }

          })
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          //return response.status(200).send({status: 200 ,success:'ok', msg: 'Successfully updated  .' });
      }); 
    });


    
  }







  static updateItineraryStatusAdmin(request, response) {

     const {  status,
              user_plan_id,
              has_received_quote,
                  
                  } = request.body;
        let has_received_payments ='No';
        if(request.body.has_received_payments ){
                     has_received_payments = request.body.has_received_payments
        }
      
                  //multiple updates of the status for this itineraries attached to this plan

    // ItineraryModel.findOne({plan_id: request.params.id}, function (err, user) {

    //   if(err){
    //     console.log(err)
    //   }

    //   // Verify and save the user
    //   user.status= status || user.status;
      
    //   user.plan_id= request.params.id || user.plan_id;
    //   user.user_plan_id= user_plan_id || user.user_plan_id;
      
    //   user.save(function (err,user) {
    //     if (err) { return response.status(500).send({ msg: err.message }); }
    //     console.log(user + 'hello')
    //       //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));


          ItineraryModel.updateMany({ plan_id: user_plan_id },{
              $set:{  status:status, 
                      user_plan_id: user_plan_id,
                       has_received_quote:has_received_quote,
                        has_received_payments: has_received_payments
                      }},{ multi: true }, function(err,result){
                         if (err) {
                              console.log(err)
                              response.send(err);
                            } else {


                               
                              // console.log(result)
                              return response.status(200).send({status: 200 ,success:'ok', msg: 'Successfully updated itineraries of this plan .' });
                    
                            }

               })     

          
  }




//drivers

static driverConfirmBooking(request,response){
   return response.sendFile(path.join(__dirname + '/driver_confirm.html'));
}



static showUserInfo(request,response){

  UserModel.find({email: request.params.id})
      .then(data => {
        console.log("specific profile:" + data)
        
       
        const userInfo = data; //related
        if (userInfo.length <= 0) {
                return response.status(200).json({
                  status: 200,
                  data: [
                  {
                    userInfo,
                    message: 'Get a specific user was successful',
                  },
                ],
                });
        }
        return response.status(200).json({
                status: 200,
                data: [
                  {
                    userInfo,
                    message: 'Get a specific user was successful',
                  },
                ],
          });
      })
      .catch(err =>
              response.status(400).json({
                status: 400,
                error: ErrorHandler.errors().validationError,
              }),
            );
    

}


static getTrails(request,response){


  AuditNotificationModel.find({})
      .then(data => {
        console.log("specific profile:" + data)
        
       
        const audit = data; //related
        if (audit.length <= 0) {
                return response.status(200).json({
                  status: 200,
                  data: [
                  {
                    audit,
                    message: 'Get a specific user was successful',
                  },
                ],
                });

        }
      


        return response.status(200).json({
                status: 200,
                data: [
                  {
                    audit,
                    message: 'Get a specific user was successful',
                  },
                ],
          });
      })
      .catch(err =>{
              console.log(err +">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
              response.status(400).json({
                status: 400,
                error: ErrorHandler.errors().validationError,
              });
            });
}


static createTrail(request,response){


  let { date,
           admin,
           user,
           module_name,
           status,
           message_type,
           logMessage,
           avatar,
    } = request.body;

    

    const NewAuditTrail = new AuditNotificationModel({ 
      id: new AutoincrementId(AuditNotificationModel).counter(), 
      date,
           admin,
           user,
           module_name,
           status,
           message_type,
           logMessage,
           avatar
       });


     NewAuditTrail.save()
      .then(data => {
        const user = data;
        return response.status(201).json({
                status: 201,
                data: [
                  {
                    user,
                    message: 'AUDIT SUCCESSFULLY CREATED',
                  },
                ],
          });
        

        
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });

}



static revokecar(request,response){

  let { 

    status,
  
        date_created,
        retrievalComments,
        vehiclePlateNo,
        vehicleName,
        vehicleID,
        vehicle,
        partner,
        partnerID,
        partnerName,
        partnerEmail,
        retrievalDate,
        hasBeenRevoked,
    } = request.body;

    

    const RetrievalTrail = new Retrieval({ 
      id: new AutoincrementId(Retrieval).counter(), 
      
    status,
  
        date_created,
        retrievalComments,
        vehiclePlateNo,
        vehicleName,
        vehicleID,
        vehicle,
        partner,
        partnerID,
        partnerName,
        partnerEmail,
        retrievalDate,
        hasBeenRevoked,
       });

  
     RetrievalTrail.save()
      .then(data => {
        const user = data;
        return response.status(201).json({
                status: 201,
                data: [
                  {
                    user,
                    message: 'AUDIT SUCCESSFULLY CREATED',
                  },
                ],
          });
        

        
      })
      .catch(err => {
        console.log(err+ 'error here')
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });


}



static revokecarstatus(request,response){

  let { 

        car_status,
        hasBeenRevoked,
    } = request.body;

    

    

  


    CarsModel.findOne({ _id:  request.params.id }, function (err, car) {

      if (!car) return response.status(400).send({ msg: 'We were unable to find a user with that email.' });
      
      
      // Verify and save the user
      car.car_status= car_status || car.car_status;
      car.hasBeenRevoked= true || car.hasBeenRevoked;
      
      car.save(function (err,user) {
        if (err) { 
          console.log(err)
          return response.status(500).send({ msg: err.message });
        }

        
        
        return response.status(200).send({ status: 200,success:'ok', msg: 'Successfully updated user profile.' });
      }); 
    });
 
      
    

}


static getrevokecars(request,response){
  Retrieval.find({})
      .then(data => {
        
       
        const carsNotInUse = data; //related
        if (carsNotInUse.length <= 0) {
                return response.status(200).json({
                  status: 200,
                  data: [
                  {
                    carsNotInUse,
                    message: 'Get a specific user was successful',
                  },
                ],
                });

        }
      


        return response.status(200).json({
                status: 200,
                data: [
                  {
                    carsNotInUse,
                    message: 'Get a specific user was successful',
                  },
                ],
          });
      })
      .catch(err =>{
              
              response.status(400).json({
                status: 400,
                error: ErrorHandler.errors().validationError,
              });
            });
}



  
  
}
