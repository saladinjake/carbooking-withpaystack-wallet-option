import DriverController from '../controllers/driver_controller';
import DriverSanitizer from '../middlewares/driver_sanitizer';
import DriverModel from "../models/Driver.model";

import TokenVerification from '../middlewares/token_validator';
import SubmitEventValidator from '../middlewares/post_sanitizer';
// for social media auth
import JWT from 'jsonwebtoken';
import { TokenGenerator } from '../helpers/token_generator';
import { passport } from  '../App';
import  config from  '../config/mongo_config';
import request from 'request';
// import BridgeRoutes from './routes';
const SIGNUP_LINK = '/auth/drivers-signup';
const LOGIN_LINK = '/auth/drivers-login';

import cors from 'cors';
let corsOption = {
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        exposedHeaders: ['x-auth-token'],
        'Access-Control-Allow-Origin': '*'
};


class DriversRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }
  attachRoutes() {
    /*
 * Respond to GET requests to /account.
 * Upon request, render the 'account.html' web page in views/ directory.
 */
  // simplelogins
    this.router.post(
      '/auth/drivers-signup',
      DriverSanitizer.validateSignUp,
      DriverSanitizer.checkIfDriverExists,
      DriverController.signup,
    );
    this.router.post('/auth/drivers-login', 
      DriverSanitizer.validateLogin,
      DriverSanitizer.checkIfDriverIsBanned,
      DriverController.login
     );
    this.router.post('/auth/drivers-forgot_password', DriverController.passwordForgot);
    this.router.get('/auth/drivers-confirmation/:id', DriverController.confirmationPost);
    this.router.get('/auth/drivers-resend/:id', DriverController.resendTokenPost);
    this.router.get('/auth/drivers-resetMyPassword/:id', DriverController.confirmResetPassword);//show form
    this.router.post('/auth/drivers-resetpassword', DriverController.changePasswordTrigger);
    this.router.get('/drivers-logout', function(req, res){
      req.logout();
      res.redirect('/');
    });
  
    this.router.get('/drivers-profile/update/:id',
      TokenVerification.userAuthentication,
    	DriverController.showProfile
    );
    this.router.post('/drivers-profile/update/:id',
      TokenVerification.userAuthentication,
    	DriverSanitizer.validateSignUp,
    	DriverController.updateProfile
    );
    this.router.get('/drivers-assigned-user-trips/:id',
      TokenVerification.userAuthentication,
      DriverController.getDriversAssignedTrips
    );
    this.router.get('/drivers-assigned-cars/:id',
      TokenVerification.userAuthentication,
      DriverController.getAssignedDriverToCars
    )
    this.router.post(
      '/drivers-sos',
      TokenVerification.userAuthentication,
      // SubmitEventValidator.validateSubmit,
      DriverController.createRedFlag,
    );
    this.router.get(
      '/drivers-sos/:id/users',
      TokenVerification.userAuthentication,
      // SubmitEventValidator.validateSubmit,
      DriverController.usersRedflags,
    );
    this.router.post(
      '/drivers-notifications',
      TokenVerification.userAuthentication,
      DriverController.sendNotifications,
    );
    this.router.get(
      '/drivers-notifications/:id',
      TokenVerification.userAuthentication,
      DriverController.getNotifications,
    );




    
  

    
    

    //  //drivers
    //  this.router.get('/confirm-booking-request',
    //   //TokenVerification.userAuthentication, 
    //   DriverController.driverConfirmBooking
    // );



    // //update driver socket id
    // this.router.put("/driverLocationSocket/:id", function(req, res, next){
    //   var io = req.app.io;
    //   if(!req.body){
    //     res.status(400);
    //     res.json({
    //       "error":"Bad Data"
    //     });
    //   } else {
    //     console.log(req.params.id)
    //     DriverModel.updateOne({id:req.params.id},
    //       {$set: {socketId:req.body.socketId}}, function(err, updateDetails) {
    //         if(err){
    //           res.send(err);
    //         }else{
    //           console.log(updateDetails )
    //           res.send(updateDetails);
    //         }
    //     });
    //   }
    // });

    // //get nearby driver
    // this.router.get("/driverLocation/:latitude/:longitude", function (req, res, next) {
    //   //DriverModel.ensureIndex({"coordinate": "2dsphere"});
    //   DriverModel.find({
    //     "location": {
    //      "$near": {
    //       "$maxDistance": 1000,
    //       "$geometry": {
    //        "type": "Point",
    //        "coordinates": [parseFloat(req.params.latitude), parseFloat(request.params.longitude)]
    //       }
    //      }
    //     }
    //    }, function (err, location) {
    //           if (err) {
    //             res.send(err);
    //           } else {
    //             res.send(location);
    //           }
    //         });
    // });

    // //Get Single Driver and emit track by user to driver
    // this.router.get("/driverLocation/:id", function (req, res, next) {
    //   var io = req.app.io;
    //   DriverModel.findOne({ driverId: req.params.id }, function (err, location) {
    //     if (err) {
    //       res.send(err);
    //     }
    //     res.send(location);
    //     io.emit("trackDriver", location);
    //   });
    // });

    // //Update Location by driver to user
    // this.router.put("/driverLocation/:id", function (req, res, next) {
    //   var io = req.app.io;
    //   var location = req.body;
    //   var latitude = parseFloat(location.latitude);
    //   var longitude = parseFloat(location.longitude);
    //   if (!location) {
    //     res.status(400);
    //     res.json({
    //       "error": "Bad Data"
    //     });
    //   } else {
    //     DriverModel.update({ _id: req.params.id }, {
    //       $set: {
    //         socketId: location.socketId,
    //         coordinate: {
    //           "type": "Point",
    //           coordinates: [
    //             longitude,
    //             latitude
    //           ]
    //         }
    //       }
    //     }, function (err, updateDetails) {
    //       if (err) {
    //         console.log(updateDetails);
    //         res.send(err);
    //       }
    //       if (updateDetails) {

    //         //Get updated location
    //         db.driversLocation.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (error, updatedLocation) {
    //           if (error) {
    //             res.send(error);
    //           }
    //           res.send(updatedLocation);
    //           io.emit("action", {
    //             type: "UPDATE_DRIVER_LOCATION",
    //             payload: updatedLocation
    //           });
    //         });
    //       }
    //     });
    //   }
    // });


    
    return this.router;
  }
}
export default DriversRoutes;
