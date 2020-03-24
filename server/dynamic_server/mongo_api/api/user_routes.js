import UserController from '../controllers/user_controller';
import UserSanitizer from '../middlewares/user_sanitizer';

import TokenVerification from '../middlewares/token_validator';
import SubmitEventValidator from '../middlewares/post_sanitizer';

import DriverModel from "../models/Driver.model";

import cors from 'cors';
let corsOption = {
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        exposedHeaders: ['x-auth-token'],
        'Access-Control-Allow-Origin': '*'
    };



//for e wallet transactions

const validate = require('express-validation');
const controllerWallet = require('../controllers/ewallet.controller');
//const { authorize, ADMIN, LOGGED_CUSTOMER } = require('../../middlewares/auth');
const {
  listCustomers,
  walletDeposit,
  walletTransfer,
  createCustomer,
  replaceCustomer,
  updateCustomer,
} = require('../helpers/customer.validation');

class UserRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {
    /*
 * Respond to GET requests to /account.
 * Upon request, render the 'account.html' web page in views/ directory.
 */
    this.router.get('/profile/update/:id',
      TokenVerification.userAuthentication,
    	UserController.showProfile
    );//
    this.router.post('/profile/update/:id',
      TokenVerification.userAuthentication,
    	UserSanitizer.validateSignUp,
    	UserController.updateProfile
    );

    this.router.get("/get-cars-info-user",
    TokenVerification.userAuthentication,
    UserController.getCarsInfo
  );

    this.router.get(
        '/individual/plans/view',
        TokenVerification.userAuthentication,
        UserController.individualPlans
      );
    this.router.get(
        '/coperate/plans/view',
        TokenVerification.userAuthentication,
        UserController.coperatePlans
      );
    this.router.post(
      '/plans/:id/user',
      TokenVerification.userAuthentication,
      UserController.addNewPlans,
    );
    this.router.get(
      '/plans/:id/user',
      TokenVerification.userAuthentication,
      UserController.getAllUsersPlans,
    );

     this.router.get(
      '/quotations/:id/user',
      TokenVerification.userAuthentication,
      UserController.getAllUsersQuotations,
    );

    this.router.get(
      '/plans/:id',
      TokenVerification.userAuthentication,
      UserController.getOnePlanById,
    );

    this.router.patch(
      '/plans/:id',
      TokenVerification.userAuthentication,
      UserController.updateItem,
    );

    this.router.delete(
      '/plans/:id',
      TokenVerification.userAuthentication,
      UserController.deleteItem,
    );

    this.router.put(
      '/debit-wallet-transactions/:id/user',
       TokenVerification.userAuthentication,
       UserController.debitWallet,

    );


     

     this.router.put(
      '/plan-status/:id/update',
       TokenVerification.userAuthentication,
       UserController.updatePlanStatus,
    );

     this.router.put(
      '/itin-status/:id/update',
       TokenVerification.userAuthentication,
       UserController.updateItinStatus,
    );

     this.router.put(
      '/quote-status/:id/update',
       TokenVerification.userAuthentication,
      UserController.updateQuoteStatus,
    );

     this.router.post('/add-drive-test-for-user',
         TokenVerification.userAuthentication,
      UserController.addDriveTestFromItinerary,
         
      )














    this.router.get(
      '/cars/:id/user',
      TokenVerification.userAuthentication,
      UserController.getUserCars,
    );


    this.router.post(
      '/itinerary/:id/user',
      TokenVerification.userAuthentication,
      UserController.saveUsersItinerary,
    );


    this.router.get(
      '/itinerary/:id/user',
      TokenVerification.userAuthentication,
      UserController.getUsersItinerary,
    );
    
    //update itineray status
    this.router.put(
      '/itinerary/:id/status',
      TokenVerification.userAuthentication,
      UserController.updateItineraryStatus,
    );
    





    this.router.get(
      '/itinerary/:id/user/edit',
      TokenVerification.userAuthentication,
      UserController.editViewUsersItinerary,
    );

    this.router.post(
      '/itinerary/:id/user/edit',
      TokenVerification.userAuthentication,
      UserController.updateUsersItinerary,
    );

    this.router
      .route('/balance/:id')
      .get( TokenVerification.userAuthentication,  controllerWallet.getBalance);

    this.router
      .route('/transactions')
      .get( TokenVerification.userAuthentication,  controllerWallet.getTransactions);

    this.router
      .route('/deposit')
      .post( TokenVerification.userAuthentication, 
        validate(walletDeposit), controllerWallet.deposit);



    this.router.post('/paystack/pay',//cors(corsOption), 
      TokenVerification.userAuthentication,
      UserController.paystackPayMeMoney
    );

    this.router.get('/paystack/callback', 
      // TokenVerification.userAuthentication,
      UserController.paystackCallBack
    );

    this.router.get('/receipt/:id',
      // TokenVerification.userAuthentication, 
      UserController.paystackReceipt
    );

     this.router.get('/payment-history/:id',
      TokenVerification.userAuthentication, 
      UserController.paystackHistory
    );


     this.router.get('/payment-payments/:id',
      TokenVerification.userAuthentication, 
      UserController.paystackPayments
    );

     this.router.post('/makepayments',
      TokenVerification.userAuthentication, 
      UserController.createPaymentDetail
      )

     this.router.get('/payment-quotations/:id',
      TokenVerification.userAuthentication, 
      UserController.paystackQuotations
    );

     this.router.post('/notification',
      TokenVerification.userAuthentication, 
       //UserSanitizer.checkIfUserDoesntExists,
      UserController.makeNotification
      );
     this.router.get('/notification/:id',
      TokenVerification.userAuthentication, 
      UserController.getUserNotification
      );


  // this.router.get("/drivers",     //read done
  //   TokenVerification.userAuthentication, 
  //   UserController.getDrivers
  // );

    
    
    this.router
      .route('/transfer')
      .post( TokenVerification.userAuthentication, validate(walletTransfer), controllerWallet.transfer);

    this.router
      .route('/withdrawal')
      .post( TokenVerification.userAuthentication, validate(walletDeposit), controllerWallet.withdrawal);


   this.router.get('/',(req, res) => {
       res.render('index.pug');
  });

    
  this.router.get('/error', (req, res)=>{
      res.render('error.pug');
  })

 
  this.router.get('/testpaystack',(req, res) => {
      res.render('index.pug');
  });




  //adminusers

  //admin : users routes
  this.router.post("/admin-add-user", //create done
    TokenVerification.adminAuthentication,
    UserSanitizer.checkIfUserExists,
    UserController.addUserByAdmin
  );

  this.router.get("/admin-users", //read - done
    TokenVerification.adminAuthentication,
    UserController.manageUsers
  );

  this.router.put("/admin-users-detail/:id", //update
    TokenVerification.adminAuthentication,
    UserController.manageUsersDetail
  );

  this.router.put("/admin-users-detail-verification/:id", //update
    TokenVerification.adminAuthentication,
    UserController.manageUsersDetailVerification
  );

  this.router.delete("/users/:id/delete", //delete - done
    TokenVerification.adminAuthentication,
    UserController.deleteUser
  )//

  

  

  //end of admin user routes

  this.router.post("/add-admin", //create done
    TokenVerification.adminAuthentication,
    UserSanitizer.checkIfUserExists,
    UserController.addAdminByAdmin
  );


  this.router.get("/admin-admins", //read done
    TokenVerification.adminAuthentication,
    UserController.manageAdmins
  );



  this.router.put("/admin-admins-detail/:id", //edit done
    TokenVerification.adminAuthentication,
    UserController.manageAdminsDetail
  );

  this.router.put("/admin-admins-detail-verification/:id", //update
    TokenVerification.adminAuthentication,
    UserController.manageAdminsDetailVerification
  );

  this.router.delete("/users/:id/delete", //delete - done
    TokenVerification.adminAuthentication,
    UserController.deleteUser
  )//




   this.router.post("/add-driver", //create done
    TokenVerification.adminAuthentication,
    UserSanitizer.checkIfDriverExists,
    UserController.addDriverByAdmin
  );

  this.router.get("/admin-drivers",     //read done
    TokenVerification.adminAuthentication,
    UserController.manageDrivers
  );

  

  this.router.put("/admin-drivers-detail/:id", // update
    TokenVerification.adminAuthentication,
    UserController.manageDriversDetail
  );

  this.router.put("/admin-drivers-detail-verification/:id", //update
    TokenVerification.adminAuthentication,
    UserController.manageDriversDetailVerification
  );

  this.router.delete("/drivers/:id/delete", //delete done
    TokenVerification.adminAuthentication,
    UserController.deleteDriver
  );





  this.router.get("/admin-partners", //read done
    TokenVerification.adminAuthentication,
    UserController.managePartners
  );

  this.router.delete("/partners/:id/delete",//delete done
    TokenVerification.adminAuthentication,
    UserController.deletePartner
  )

  this.router.put("/admin-partners-detail/:id", //update done
    TokenVerification.adminAuthentication,
    UserController.managePartnersDetail
  );

  this.router.put("/admin-partners-detail-verification/:id", //update
    TokenVerification.adminAuthentication,
    UserController.managePartnersDetailVerification
  );

  this.router.post("/add-partner", //create done
    TokenVerification.adminAuthentication,
    UserSanitizer.checkIfPartnerExists,
    UserController.addPartnerByAdmin
  );

  this.router.get("/admin-profile/:id", //read done
    TokenVerification.adminAuthentication,
    UserController.manageProfile
  );

  this.router.put("/admin-profile-detail/:id", //update not completed
    TokenVerification.adminAuthentication,
    UserController.manageProfileDetail
  )

  this.router.put("/admin-profile-detail-verification/:id", //update
    TokenVerification.adminAuthentication,
    UserController.manageProfileDetailVerification
  );



  this.router.get("/admin-plan-package",  // read done
    TokenVerification.adminAuthentication,
    UserController.managePlanPackage
  );

  this.router.get("/admin-plan-package-corporate", //read done
    TokenVerification.adminAuthentication,
    UserController.managePlanPackageCorporate
  );

  this.router.post("/add-plan", //create 
    TokenVerification.adminAuthentication,
    UserController.createNewPlan
  );


  this.router.put("/admin-plan-package-detail/:id",// update done
    TokenVerification.adminAuthentication,
    UserController.managePlanPackageDetail
  );

  this.router.delete("/plan-package/:id/delete/:delete_type",//delete done
    TokenVerification.adminAuthentication,
    UserController.deletePlanPackage
  );


  this.router.get("/admin-sos", //read done
    TokenVerification.adminAuthentication,
    UserController.manageSOS
  )

  this.router.put("/admin-sos-detail/:id", //update
    TokenVerification.adminAuthentication,
    UserController.manageSOSDetail
  );

  this.router.delete("/redflag-sos/:id/delete", //delete done
    TokenVerification.adminAuthentication,
    UserController.deleteSOS
  );

  //admin cant create any sos



  //tickets 

  this.router.get("/admin-tickets", //read done
    TokenVerification.adminAuthentication,
    UserController.manageTickets
  )


  this.router.put("/admin-ticket-detail/:id", //update 
    TokenVerification.adminAuthentication,
    UserController.manageTicketsDetail
  );

  this.router.delete("/tickets/:id/delete", //delete done
    TokenVerification.adminAuthentication,
    UserController.deleteTicket
  );

  this.router.post("/add-ticket",          //done for admin
    TokenVerification.adminAuthentication,
    UserController.createNewTicket
  )

  

  this.router.get("/admin-faqs",  //done
    TokenVerification.adminAuthentication,
    UserController.manageFaqs
  )
  
  this.router.put("/admin-faqs-detail/:id", //done
    TokenVerification.adminAuthentication,
    UserController.manageFaqsDetail
  );

  this.router.post("/add-faq", //done
    TokenVerification.adminAuthentication,
    UserController.createNewFAQ
  );


  this.router.get("/admin-settings-google", //done
    TokenVerification.adminAuthentication,
    UserController.manageGoogleSettings
  )

  this.router.get("/admin-settings-facebook", //done
    TokenVerification.adminAuthentication,
    UserController.manageFacebookSettings
  )

  this.router.get("/admin-settings-paystack", //done --- revisit this
    TokenVerification.adminAuthentication,
    UserController.managePaystackSettings
  )


  this.router.get("/admin-settings-email", //done
    TokenVerification.adminAuthentication,
    UserController.manageEmailSettings
  )


  this.router.get("/admin-settings-bucket", //done
    TokenVerification.adminAuthentication,
    UserController.manageS3BucketSettings
  )

  this.router.get("/admin-settings-instagram",//done
    TokenVerification.adminAuthentication,
    UserController.manageInstagramSettings
  );


  this.router.get("/admin-settings-instagram",//done
    TokenVerification.adminAuthentication,
    UserController.manageInstagramSettings
  );

  this.router.put("/admin-settings-detail/:id",
    TokenVerification.adminAuthentication,
    UserController.manageSettingsDetail
  );



  
  



  

  this.router.get("/admin-itineraries",  //done
    TokenVerification.adminAuthentication,
    UserController.manageItineraries
  )

  this.router.get("/admin-users-plan", //done
    TokenVerification.adminAuthentication,
    UserController.manageUsersPlan
  );




  this.router.put("/admin-itinerary-details/:id", //done
    TokenVerification.adminAuthentication,
    UserController.manageItineraryDetail
  );

  this.router.put("/notification-update/:id", //done
    TokenVerification.adminAuthentication,
     UserController.manageUserNotificationCounter
  )

   


  


  

  // this.router.get("/admin-wallet",
  //   TokenVerification.adminAuthentication,
  //   UserController.manageWalletHistory
  // )

  this.router.get("/admin-bookings",
    TokenVerification.adminAuthentication,
    UserController.manageBookings
  );

  this.router.put("/admin-bookings-detail",
    TokenVerification.adminAuthentication,
    UserController.manageBookingsDetail
  );

  this.router.post('/make-quotation',
    TokenVerification.adminAuthentication,
    UserController.makeQuotation
    )

  



  this.router.post("/admin-manual-booking",
    TokenVerification.adminAuthentication,

    UserController.manageManualBooking
  );

  

  

  this.router.get("/admin",
    TokenVerification.adminAuthentication,
    UserController.adminDashboard
  );

  this.router.get("/admin-sales-today",
    TokenVerification.adminAuthentication,
    UserController.adminDashboardTodaySales
  )



  this.router.get("/admin-sales-yesterday",
    TokenVerification.adminAuthentication,
    UserController.adminDashboardYesterdaySales
  )


  this.router.get("/admin-sales-lastweek",
    TokenVerification.adminAuthentication,
    UserController.adminDashboardWeeklySales
  );


  this.router.get("/admin-users-month-ago",
    TokenVerification.adminAuthentication,
    UserController.adminDashboardMonthlySales
  );


  this.router.get('/payment-history',
      TokenVerification.adminAuthentication, 
      UserController.paystackHistoryAdmin
    );


     this.router.get('/payment-payments',
      TokenVerification.adminAuthentication, 
      UserController.paystackPaymentsAdmin
    );

     this.router.get('/payment-quotations',
      TokenVerification.adminAuthentication, 
      UserController.paystackQuotationsAdmin
    );



     this.router.delete('/payment/:id/delete',
      TokenVerification.adminAuthentication, 
      UserController.deletePayment
    );


     this.router.delete('/wallet/:id/delete',
      TokenVerification.adminAuthentication, 
      UserController.deleteWallet
    );

     this.router.delete('/quotation/:id/delete',
      TokenVerification.adminAuthentication, 
      UserController.deleteQuotation
    );



  this.router.put("/userplan-status-update/:id",
    TokenVerification.adminAuthentication,
    UserController.updateUsersPlanStatusAdmin
  );


  this.router.put("/user-itinerary-status-update/:id",
    TokenVerification.adminAuthentication,
    UserController.updateItineraryStatusAdmin
  );//admin-itinerary-add


  this.router.post("/admin-itinerary-add",
    TokenVerification.adminAuthentication,

    UserSanitizer.checkIfUserDoesntExists,
    UserController.createNewItinerary
  );

  this.router.post("/admin-plan-add",  //add booking
    TokenVerification.adminAuthentication,
     UserSanitizer.checkIfUserDoesntExists,
    UserController.createNewPlanBooking
  );





  this.router.post("/add-cars", //done
    TokenVerification.adminAuthentication,
    UserController.createNewCar
  );


  this.router.get("/admin-cars-mgt", //done
    TokenVerification.adminAuthentication,
    UserController.manageCars
  );

  this.router.get("/get-cars-info",
    TokenVerification.adminAuthentication,
    UserController.getCarsInfo
  );


  this.router.put("/admin-cars-detail/:id",
    TokenVerification.adminAuthentication,
    UserController.manageCarsDetail
  );





  this.router.get("/admin-inspection", //read
    TokenVerification.adminAuthentication,
    UserController.manageInspection
  );

  this.router.post("/add-inspection", //create 
    TokenVerification.adminAuthentication,
    UserController.createNewInspection
  );


  this.router.put("/admin-inspection-detail/:id",// update 
    TokenVerification.adminAuthentication,
    UserController.manageInspectionDetail
  );

  this.router.delete("/inspection/:id/delete",//delete 
    TokenVerification.adminAuthentication,
    UserController.deleteInspection
  );





  this.router.get("/admin-drive-test",
    UserController.manageDriveTest
  )


  this.router.put("/admin-drive-test-detail/:id",
    TokenVerification.adminAuthentication,
    UserController.manageDriveTestDetail
  )

   this.router.post("/add-drive-test", //create 
    TokenVerification.adminAuthentication,
    UserController.createNewDriveTest
  );


   this.router.delete("/drive-test/:id/delete",//delete 
    TokenVerification.adminAuthentication,
    UserController.deleteDriveTest
  );


   
    this.router.put("/update-testcenter/:id",
    TokenVerification.adminAuthentication,
    UserController.manageUsersDriveTestCenterUpdate
  )


  

  this.router.get("/admin-previledges", //read done
    TokenVerification.adminAuthentication,
    UserController.managePreviledges
  );

  this.router.post("/add-roles", //create 
    TokenVerification.adminAuthentication,
    UserController.createNewPreviledges
  );


   this.router.put("/admin-previledges-update/:id", //create 
    TokenVerification.adminAuthentication,
    UserController.adminPreviledgesEdit
  );


   this.router.get('/get-admin-previledges/:id',
      TokenVerification.adminAuthentication,
    UserController.getUserPreviledges
    );


   this.router.get('/fetchuserinfo/:id',
      TokenVerification.userAuthentication,
      UserController.showUserInfo
    );


   this.router.put("/old_balance/:id", //create 
    TokenVerification.userAuthentication,
    UserController.setOldBalance
  );





  this.router.put("/admin-role-detail/:id",// update done
    TokenVerification.adminAuthentication,
    UserController.managePreviledgesDetail
  );

  this.router.delete("/roles/:id/delete",//delete done
    TokenVerification.adminAuthentication,
    UserController.deletePreviledges
  );

  this.router.get('/profile-admin-rights/update/:id',
      TokenVerification.userAuthentication,
      UserController.showProfileRights
    );//showProfileRights(request,response)




















     //drivers
     this.router.get('/confirm-booking-request',
      //TokenVerification.userAuthentication, 
      UserController.driverConfirmBooking
    );



    //update driver socket id
    this.router.put("/driverLocationSocket/:id", function(req, res, next){
      var io = req.app.io;
      if(!req.body){
        res.status(400);
        res.json({
          "error":"Bad Data"
        });
      } else {
        console.log(req.params.id)
        DriverModel.updateOne({id:req.params.id},
          {$set: {socketId:req.body.socketId}}, function(err, updateDetails) {
            if(err){
              res.send(err);
            }else{
              console.log(updateDetails )
              res.send(updateDetails);
            }
        });
      }
    });

    //get nearby driver
    this.router.get("/driverLocation/:latitude/:longitude", function (req, res, next) {
      //DriverModel.ensureIndex({"coordinate": "2dsphere"});
      DriverModel.find({
        "location": {
         "$near": {
          "$maxDistance": 1000,
          "$geometry": {
           "type": "Point",
           "coordinates": [parseFloat(req.params.latitude), parseFloat(request.params.longitude)]
          }
         }
        }
       }, function (err, location) {
              if (err) {
                res.send(err);
              } else {
                res.send(location);
              }
            });
    });

    //Get Single Driver and emit track by user to driver
    this.router.get("/driverLocation/:id", function (req, res, next) {
      var io = req.app.io;
      DriverModel.findOne({ driverId: req.params.id }, function (err, location) {
        if (err) {
          res.send(err);
        }
        res.send(location);
        io.emit("trackDriver", location);
      });
    });

    //Update Location by driver to user
    this.router.put("/driverLocation/:id", function (req, res, next) {
      var io = req.app.io;
      var location = req.body;
      var latitude = parseFloat(location.latitude);
      var longitude = parseFloat(location.longitude);
      if (!location) {
        res.status(400);
        res.json({
          "error": "Bad Data"
        });
      } else {
        DriverModel.update({ _id: req.params.id }, {
          $set: {
            socketId: location.socketId,
            coordinate: {
              "type": "Point",
              coordinates: [
                longitude,
                latitude
              ]
            }
          }
        }, function (err, updateDetails) {
          if (err) {
            console.log(updateDetails);
            res.send(err);
          }
          if (updateDetails) {

            //Get updated location
            db.driversLocation.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (error, updatedLocation) {
              if (error) {
                res.send(error);
              }
              res.send(updatedLocation);
              io.emit("action", {
                type: "UPDATE_DRIVER_LOCATION",
                payload: updatedLocation
              });
            });
          }
        });
      }
    });


    
    return this.router;
  }
}
export default UserRoutes;
