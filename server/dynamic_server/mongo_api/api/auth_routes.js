import dotenv from 'dotenv';
dotenv.config();
import UserController from '../controllers/user_controller';
import UserSanitizer from '../middlewares/user_sanitizer';

// for social media auth
import JWT from 'jsonwebtoken';


import { passport } from  '../App';
import  config from  '../config/mongo_config';
import request from 'request';



import UserModel from '../models/User.model';
import { TokenGenerator } from '../helpers/token_generator';
import { ErrorHandler } from '../helpers/error_handler';
import { ResponseHandler } from '../helpers/response_handler';

import AutoincrementId from '../helpers/autoincrement_mongo.js';

import fs from 'fs';
import handlebars from 'handlebars';



let url = require('url');
const { google } = require('googleapis');



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



let OAuth2Data ={
  "web":
  {
      "client_id":"46702496041-pfat3fit27106mn6agmjlfvbk4aj1uph.apps.googleusercontent.com",
      "project_id":"commutedevproja123",
      "auth_uri":"https://accounts.google.com/o/oauth2/auth",
      "token_uri":"https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
      "client_secret":"AqbSwS1NCdnXrERZFV73JIjk",
      "redirect_uris":["https://localhost:12000/api/v1/auth/google/callback"],
      "javascript_origins":["https://demouserapp.commute.ng"]

      }
}






const CLIENT_ID = OAuth2Data.web.client_id;
const CLIENT_SECRET = OAuth2Data.web.client_secret;
const REDIRECT_URL = OAuth2Data.web.redirect_uris[0];

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
var authed = false;




// import BridgeRoutes from './routes';
const SIGNUP_LINK = '/auth/signup';
const LOGIN_LINK = '/auth/login';



function keyGen(keyLength) {
  var i, key = "", characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  var charactersLength = characters.length;

  for (i = 0; i < keyLength; i++) {
      key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
  }

  return key;
}




class googleApix {
  constructor(){
      // const {client_id, client_secret, redirectUri } = credentials;
      this.oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
  }

  generateUrl(scopes=["profile", "email"]){
      const url = this.oAuth2Client.generateAuthUrl({
          access_type: 'offline',
          scope: scopes.join(' ')
      })
      return url;
  }

  async getUserInfo(code){
      const credentials = await this.oAuth2Client.getToken(code)
      this.oAuth2Client.setCredentials(credentials.tokens);
      // const plus = google.plus({
      //     version: 'v1',
      //     auth: this.oAuth2Client,
      // });

      const gmail = google.gmail({ 
                  version: 'v1',
                   auth: this.oAuth2Client 
                });
        
      const data = await gmail.users.getProfile({userId: 'me'});
      return data;
  }
}

let googleApi = new googleApix()





const requestGmailAuth = (req, res, next) =>{
  let url = googleApi.generateUrl(['https://www.googleapis.com/auth/gmail.readonly'])
  res.redirect(url);
}

const getGmailUserInfo =  async (req, res, next) =>{
  const qs = new url.URL(req.url, process.env.DEPLOY_BACK_URL).searchParams;
  let code = qs.get('code')
  if(!code){
      next(new Error('No code provided'))
  }
  googleApi.getUserInfo(code)
      .then(function(responseA){
          // res.send(response.data)  //get user data from google
          let userpw = keyGen(12);


         res.send( responseA.data)

      //     if(responseA.data.emailAddress){


      //  } //end if email is returned from google
          

      }).catch(function(e){
          next(new Error(e.message))
  })
}









const getGmailUserInfoLogin =  async (req, res, next) =>{
  const qs = new url.URL(req.url, process.env.DEPLOY_BACK_URL).searchParams;
  let code = qs.get('code')
  if(!code){
      next(new Error('No code provided'))
  }
  googleApi.getUserInfo(code)
      .then(function(responseA){



        //if the email is found
        if(responseA.data.emailAddress){

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


       let templateDir = '../services/views/socialauth_success.html';

                    //show user page successful
                    


       return  res.sendFile( templateDir);
       
     })
     .catch(err =>
       response.status(400).json({
         status: 400,
         error: ErrorHandler.errors().validationError,
       }),
     );



      } //end if email is returned     



      }).catch(function(e){
          next(new Error(e.message))
  })
}



class AuthRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {

    this.router.get('/request/gmail/auth', requestGmailAuth)
    this.router.get('/auth/google/callback', getGmailUserInfo)



    this.router.get('/request/gmail/auth/login', requestGmailAuth)
    this.router.get('/auth/google/callback', getGmailUserInfoLogin)

    // simplelogins
    this.router.get('/', (request, response) =>
      response.status(200).json({
        message: 'Welcome to commute API',
      }),
    );
    this.router.post(
      '/auth/signup',
      UserSanitizer.validateSignUp,
      UserSanitizer.checkIfUserExists,
      UserController.signup,
    );
    this.router.post('/auth/login', 
      UserSanitizer.validateLogin,
      UserSanitizer.checkIfUserIsBanned,
      UserController.login
     );
    this.router.get('/auth/confirmation/:id', UserController.confirmationPost);
    this.router.get('/auth/resend/:id', UserController.resendTokenPost);
    this.router.post('/auth/forgot_password', UserController.passwordForgot);
    this.router.get('/auth/resetMyPassword/:id', UserController.confirmResetPassword);//show form
    this.router.post('/auth/resetpassword', UserController.changePasswordTrigger);
    this.router.post('/auth/resetpassword/mobile', UserController.changePasswordTriggerMobile);

    this.router.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
    });
  //   return this.router;



 

//begin login steps
//   this.router.get('/google', (req, res) => {
//     if (!authed) {
//         // Generate an OAuth URL and redirect there
//         const url = oAuth2Client.generateAuthUrl({
//             access_type: 'offline',
//             scope: 'https://www.googleapis.com/auth/gmail.readonly'
//         });
//         console.log(url)
//         res.redirect(url);
//     } else {
//         const gmail = google.gmail({ 
//           version: 'v1',
//            auth: oAuth2Client 
//         });


//         gmail.users.labels.list({
//             userId: 'me',
//         }, (err, res) => {
//             if (err) return console.log('The API returned an error: ' + err);
//             const labels = res.data.labels;
//             if (labels.length) {
//                 console.log('Labels:');
//                 labels.forEach((label) => {
//                     console.log(`- ${label.name}`);
//                 });
//             } else {
//                 console.log('No labels found.');
//             }
//         });
//         // res.send({
//         //   data:data
//         // })
//     }
// })



// //login ends
// this.router.get('/auth/google/callback', (req, res)  =>{
//     const code = req.query.code
//     if (code) {
//         // Get an access token based on our OAuth code
//         oAuth2Client.getToken(code, function (err, tokens) {
//             if (err) {
//                 console.log('Error authenticating')
//                 console.log(err);
//             } else {
//                 console.log('Successfully authenticated');
//                 oAuth2Client.setCredentials(tokens);
//                 authed = true;
 
                
//                 const plus = google.plus({
//                     version: 'v1',
//                     auth: oAuth2Client,
//                 });
                
//                 plus.people.get({userId: 'me'}, function (err,data) {
//                   if(err){
//                     console.log(err)
//                   }else{
//                     console.log(data)
//                   }

//                 });

        
       

//                 res.redirect('http://localhost:4000')
//             }
//         });
//     }
// });


  
const createToken = (req, res) => {
   console.log(req.user)
   let resultingTokenShibilish ={
     id: req.user.id,
     email: req.user.email,
     username: req.user.username
   };
    const accessToken = JWT.sign(resultingTokenShibilish, process.env.SECRET, { expiresIn: 60 * 120 });
   
    req.token =  accessToken;
    res.setHeader('x-auth-token', req.token);
    res.status(200).json({
                          status: 200,
                           data: [
                                  {
                                      token:req.token,
                                      user: req.user,
                                  },
                          ],
                           message: 'User created successfully',
                        });


    //res.redirect(`/${req.roken}`);
}


      this.router.get('/google/start',
         passport.authenticate('google', { session: false, scope: ['openid', 'profile', 'email'] }));
      this.router.get('/google/redirect',
         passport.authenticate('google', { session: false }),
         createToken);

      // this.router.get('/auth/facebook/',
      //   passport.authenticate('facebook', { session: false, scope: ['public_profile'] }));
      // this.router.get('/auth/facebook/callback/',
      //    passport.authenticate('facebook', { session: false }),
      //    createToken);


      this.router.get('/auth/facebook/callback/',
         (request,response,next)=>{
           console.log("hit facebook")
         });


       //working code...



  }
}
export default AuthRoutes;
