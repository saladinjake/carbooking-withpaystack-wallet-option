import dotenv from 'dotenv';
dotenv.config();
import UserController from '../controllers/user_controller';
import UserSanitizer from '../middlewares/user_sanitizer';

// for social media auth
import JWT from 'jsonwebtoken';
import { TokenGenerator } from '../helpers/token_generator';

import { passport } from  '../App';
import  config from  '../config/mongo_config';
import request from 'request';



// import BridgeRoutes from './routes';
const SIGNUP_LINK = '/auth/signup';
const LOGIN_LINK = '/auth/login';
class AuthRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {
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

    this.router.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
    });
  //   return this.router;

  
const createToken = auth => {
    return JWT.sign({
        id: auth.id
    }, process.env.SECRET, { expiresIn: 60 * 120 });
}
// module.exports = {
//     facebookOAuth: async (req, res, next) => {
//         if(!req.user) {
//             return res.send(401, 'User not authenticated');
//         }
//         req.token = createToken(req.user);
//         res.setHeader('x-auth-token', req.token);
//         res.status(200).json(req.token);
//     }
// };
    // send to google to do the authentication
    this.router.get('/auth/facebook',
        passport.authenticate('facebook'),
        function(req, res){});
    this.router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {session: false, failureRedirect: '/' }),
        function(req, res) {
           //console.log(req.user)
        if(!req.user) {
            return res.send(401, 'User not authenticated');
        }

        if(req.user){
          console.log(req.user)
        }

        
        req.token = createToken(req.user);
        res.setHeader('x-auth-token', req.token);
        res.status(200).json(req.token);
        // res.redirect(`/${req.roken}`);
        
    });

    this.router.get('/auth/twitter',
        passport.authenticate('twitter'),
        function(req, res){});
    this.router.get('/auth/twitter/callback',
        passport.authenticate('twitter', { failureRedirect: '/' }),
        function(req, res) {
          res.redirect('http://localhost:4000');
        });

      
    this.router.get('/auth/google',
        passport.authenticate('google', { scope: [
          'https://www.googleapis.com/auth/plus.login',
          'https://www.googleapis.com/auth/plus.profile.emails.read'
        ] }
      ));
    this.router.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/' }),
        
        function(req, res) {
          res.redirect('http://localhost:4000');
    });

    this.router.get('/auth/instagram',
        passport.authenticate('instagram'),
        function(req, res){});
    this.router.get('/auth/instagram/callback',
        passport.authenticate('instagram', { failureRedirect: '/' }),
        function(req, res) {
          res.redirect('/account');
    });



  }
}
export default AuthRoutes;
