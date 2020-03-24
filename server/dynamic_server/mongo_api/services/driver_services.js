import dotenv from 'dotenv';
dotenv.config();
import Database from '../models/db';

const csv = require('csv-parser');
const uuidv4 = require('uuid/v4');


import {passport ,express} from '../App'; 
import IndividualPlanModel from '../models/IndividualPlan.model';
import NotificationModel from '../models/Notification.model'
import FAQModel from "../models/FAQ.model";
import coperatePlanModel from '../models/CoperatePlan.model';
import { TokenGenerator } from '../helpers/token_generator';
import { ErrorHandler } from '../helpers/error_handler';
import { ResponseHandler } from '../helpers/response_handler';

import PartnersModel from "../models/Partners.model.js";
import UserModel from "../models/User.model.js";
import AutoincrementId from '../helpers/autoincrement_mongo.js';
import EmailTokenMakerForSignUp from '../models/Token.model.js';
import ForgotPasswordToken from '../models/ForgotPassword.model.js';
import CarsModel from "../models/Cars.model.js";
import SOSModel from "../models/SOS.model";
import  InterventionsModel from '../models/Feedback.model';
import SendgridEmailSettingModel from "../models/SendgridEmailSettings.model";
import ItineraryModel from '../models/Itinerary.model'
import InspectionModel from "../models/Inspection.model";
import DriveTestModel from  "../models/DriveTest.model";
import RolesAndPreviledgesModel from '../models/RolesAndPreviledges.model'

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

/*pAy stack*/
import request from 'request';
import _ from 'lodash';

// import carInfo  from "../migrations/cars_info";




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

export class DriverService{
	static signup(request, response) {
    // console.log(request.body)
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
      roles:'Individual Driver',
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
        var emailtoken = new EmailTokenMakerForSignUp({ _userId: user.id, email_confirm_token: emailT });
        

        
        // Save the verification token
        emailtoken.save(function (err) {
            if (err) { 
              return console.log(err.message );
             }
            console.log(emailtoken.email_confirm_token, emailtoken._userId)
            var smtpConfig = {
              host: 'smtp.gmail.com',
              port: 587,
              service:'gmail',
              secure: true, // use SSL, 
                            // you can try with TLS, but port is then 587
              auth: {
                user:  'juwavictor@gmail.com',//process.env.APPLICATION_GMAIL, // Your email id
                pass:  'saladin123!@jhjhj#'// process.env.APPLICATION_GMAIL_PASSWORD
              }
            };
         

            // Configure Nodemailer SendGrid Transporter
            const transporter = nodemailer.createTransport(
              sendgridTransport({
                auth: {
                  api_user: process.env.SENDGRID_USERNAME,    // SG username
                  api_key: process.env.SENDGRID_PASSWORD, // SG password
                },
              })
            );

            
            
            var mailOptions = { 
              from:  'juwavictor@gmail.com', //process.env.APPLICATION_GMAIL, 
              to: user.email, 
              subject: 'Account Verification Token', 
              // text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + request.headers.host + '\/api/v1/auth/confirmation\/' + emailtoken.email_confirm_token + '.\n' 
              //html: ``,

            };

             
    
    
  


            readHTMLFile(__dirname + '/templates/drivers-signup-verification.html', function(err, html) {
                var template = handlebars.compile(html);
                var replacements = {
                     username: user.firstname,
                     link: 'http:\/\/' + request.headers.host + '\/api/v1/auth/drivers-confirmation\/' + emailtoken.email_confirm_token 
                };
                var htmlToSend = template(replacements);
                
                 mailOptions.html = htmlToSend;
                transporter.sendMail(mailOptions, function (error, response) {
                    if (error) {
                        console.log(error+"eroor here");
                        //callback(error);
                    }
                });
            });


        });


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

            <a href="http://localhost:12000/api/v1/auth/drivers-resend/${email}">Resend </a>`,
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
          //plan: user.plan_name,
          //balance: user.balance,
          notification_count: user.notification_count,
          user_type: user.user_type,
          username:user.username,
          phoneNumber: user.phone_number,
          roles: user.roles,

        };
        const token = TokenGenerator.generateToken(result);
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
                //plan_name: user.plan_name,
                //balance: user.balance,
                notification_count: user.notification_count,
                 user_type: user.user_type,
                 account_num: user.accountNumber,
                 username:user.username,
                 phoneNumber: user.phone_number,
                 roles: user.roles,
              },
            },
          ],
          message: 'Successfully signed in',
        });
      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static logout(request,response){
//     router.post('/logout', function(req, res) {
//   logout.logoutUser(req, res, function(err, data) {
//     if (err) {
//       res.json({ 'error': data.error, 'message': data.message });
//     } else {
//       res.json({ 'success': data.success, 'message': data.message });
//     }
//   });
// });
  }

  static confirmationPost (req, res) {
   

    // Find a matching token
    EmailTokenMakerForSignUp.findOne({ email_confirm_token:  req.params.id }, function (err, token) {
       
        if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });

        // If we found a token, find a matching user email: req.body.email
        UserModel.findOne({ id: token._userId  }, function (err, user) {
            if (!user) {
              //return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
              return  res.sendFile(path.join(__dirname + '../../../../../UI/user/page-503.html'));
            }
            if (user.isVerified) {
              //return res.status(201).send({ type: 'already-verified', msg: 'This user has already been verified.' });
              return  res.sendFile(path.join(__dirname + '/templates/drivers-already-verified.html'));
            

            }

            // Verify and save the user
            user.isVerified = true;
            user.save(function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                //res.status(200).send("The account has been verified. Please wait...");
               
                 return  res.sendFile(path.join(__dirname + '/templates/drivers-proceed-to-login.html'));
               

            });


            
        });
    });
}


/**
* POST /resend
*/
static resendTokenPost (req, res) {
    UserModel.findOne({ email: req.params.id }, function (err, user) {
        if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
        
        if (user.isVerified) return  res.sendFile(path.join(__dirname + '/drivers-already-verified.html'));
        

        // Create a verification token, save it, and send email
        var token = new EmailTokenMakerForSignUp({ _userId: user.id, email_confirm_token: crypto.randomBytes(16).toString('hex') });
        // Save the token
        token.save(function (err) {
            if (err) { return res.status(500).send({ msg: err.message }); }

            // Send the email
           

                        const transporter = nodemailer.createTransport(
              sendgridTransport({
                auth: {
                  api_user: process.env.SENDGRID_USERNAME,    // SG username
                  api_key: process.env.SENDGRID_PASSWORD, // SG password
                },
              })
            );

            
            var mailOptions = { 
              from:  'juwavictor@gmail.com', //process.env.APPLICATION_GMAIL, 
              to: user.email, 
              subject: 'Account Verification Token', 
              // text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + request.headers.host + '\/api/v1/auth/confirmation\/' + emailtoken.email_confirm_token + '.\n' 
              //html: ``,

            };

            console.log(__dirname + '/templates/signup-verification.html')

            readHTMLFile(__dirname + '/templates/drivers-signup-verification.html', function(err, html) {
                var template = handlebars.compile(html);
                var replacements = {
                     username: user.firstname,
                     link: 'http:\/\/' + req.headers.host + '\/api/v1/auth/drivers-confirmation\/' + token.email_confirm_token 
                };
                var htmlToSend = template(replacements);
                
                 mailOptions.html = htmlToSend;
                transporter.sendMail(mailOptions, function (error, response) {
                    if (error) {
                        console.log(error+"eroor here");
                        //callback(error);
                    }
                   // return res.status(200).send({ msg: "sent email request" });
                });
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
            // send email to the given users email for password reset confirmation
            var smtpConfig = {
                      host: 'smtp.gmail.com',
                      port: 587,
                      service:'gmail',
                      //secure: true, // use SSL, 
                                    // you can try with TLS, but port is then 587
                      auth: {
                        user: 'juwavictor@gmail.com', // Your email id
                        pass: 'saladin123!@#' // Your password
                      }
            };

              
    
           
                    // Send the email
           var transporter = nodemailer.createTransport({
               service: 'SendGrid', 
               auth: { 
                user: process.env.SENDGRID_USERNAME,
                 pass: process.env.SENDGRID_PASSWORD 
               } 
            });
            
            var mailOptions = { 
               from:  'juwavictor@gmail.com', //process.env.APPLICATION_GMAIL, 
               to: user.email, 
               subject: 'Account Verification Token', 
            };

            readHTMLFile(__dirname + '/templates/drivers-reset-password.html', function(err, html) {
                var template = handlebars.compile(html);
                var replacements = {
                     username: user.firstname,
                     link: 'http:\/\/' + req.headers.host + '\/api/v1/auth/drivers-resetMyPassword\/' + hashedStringToSend 
                };
                var htmlToSend = template(replacements);
                
                 mailOptions.html = htmlToSend;
                transporter.sendMail(mailOptions, function (error, response) {
                    if (err) { return res.status(500).send({ msg: err.message }); }
                    return res.status(200).send({ msg: "successfully sent you a password reset link", status:'ok' }); 
                });
            });

        });

    });

  }


  static confirmResetPassword (req, res) {
     return  res.sendFile(path.join(__dirname + '/drivers-pw-reset.html'));
          //this.router.post('/auth/drivers-resetpassword', DriverController.changePasswordTrigger);  
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

 
  
  static showProfile(request,response){

    UserModel.find({id: Number(request.params.id)})
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

    


    UserModel.findOne({ id:  request.params.id }, function (err, user) {

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
      user.roles = user_type || user.roles,
      //user.user_type= user_type|| user.user_type;
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





  static getAssignedDriverToCars(request, response){

    CarsModel.find({assigned_driver_email: request.params.id})
      .then(data => {
        console.log("specific car assigned:" + data)
        
       
        const carsInfo = data; //related
        // if (carsInfo.length <= 0) {
        //         return response.status(404).json({
        //           status: 404,
        //           error: 'The user with the given id does not exists',
        //         });
        // }
        return response.status(200).json({
                status: 200,
                data: [
                  {
                    carsInfo,
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
  

  static getDriversAssignedTrips(request, response){

    ItineraryModel.find({assigned_driver_email: request.params.id})
      .then(data => {
        console.log("specific profile:" + data)
        
       
        const tripsInfo = data; //related
        // if (tripsInfo.length <= 0) {
        //         return response.status(404).json({
        //           status: 404,
        //           error: 'The user with the given id does not exists',
        //         });
        // }
        return response.status(200).json({
                status: 200,
                data: [
                  {
                    tripsInfo,
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

  





  

  static completedTrips(request, response) {
    ItineraryModel.find({status: 'Completed'})
      .then(data => {
        
       
        const tripsInfo = data; //related
        // if (tripsInfo.length <= 0) {
        //         return response.status(404).json({
        //           status: 404,
        //           error: 'The user with the given id does not exists',
        //         });
        // }
        return response.status(200).json({
                status: 200,
                data: [
                  {
                    tripsInfo,
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




 











}