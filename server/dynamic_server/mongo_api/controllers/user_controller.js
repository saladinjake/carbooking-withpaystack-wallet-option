/* eslint-disable prefer-const */
import { UserService } from '../services/user_service';

export default class UserController {
  static signup(request, response) {
    return UserService.signup(request, response);
  }

  static getAllNotification(request,response){
    return UserService.getAllNotification(request,response)
  }

  static testEmail(request,response){
    UserService.testEmail(request,response)
  }

  static login(request, response) {
    return UserService.login(request, response);
  }

  static confirmationPost(request,response){
    return UserService.confirmationPost(request,response)
  }

  static resendTokenPost(request,response){
    return UserService.resendTokenPost(request,response)
  }

  static passwordForgot(request, response){
    return UserService.passwordForgot(request,response);
  }


  static confirmResetPassword(request,response){
    return UserService.confirmResetPassword(request,response);
  }

  static changePasswordTrigger(request,response){
    return UserService.changePasswordTrigger(request,response);
  }

  static initializeGoogleLogin(request,response){
    return UserService.initializeGoogleLogin(request,response);
  }


  static updateProfile(request,response){
    return UserService.updateProfile(request,response)
  }

  static showProfile(request,response){
    return UserService.showProfile(request,response)
  }

  static showProfileRights(request,response){
    return UserService.showProfileRights(request,response)
  }

  

  static individualPlans(request,response){
    return UserService.individualPlans(request,response);
  }

  static coperatePlans(request,response){
    return UserService.coperatePlans(request,response);
  }

  static addNewPlans(request,response){
     return UserService.addNewPlans(request,response)
  }

  static getAllUsersPlans(request,response){
    return UserService.getAllUsersPlans(request,response);
  }

  static getAllUsersQuotations(request,response){
    return UserService.getAllUsersQuotations(request,response);
  }

  static debitWallet(request,response){
    return UserService.debitWallet(request,response);
  }

  static updatePlanStatus(request,response){
    return UserService.updatePlanStatus(request,response)
  }

  static updateItinStatus(request,response){
    return UserService.updateItinStatus(request,response)
  }

  static updateQuoteStatus(request,response){
    return UserService.updateQuoteStatus(request,response)
  }

  

  static getUserCars(request,response){
    return UserService.getUserCars(request,response);
  }


  static getOnePlanById(request,response){
    return UserService.getOnePlanById(request,response)
  }

  static updateItem(request,response){
    return UserService.updateItem(request,response)
  }

  static deleteItem(request,response){
    return UserService.deleteItem(request,response)
  }

  


  static saveUsersItinerary(request,response){
    return UserService.saveUsersItinerary(request,response);
  }

  static updateItineraryStatusAdmin(request,response){
    return UserService.updateItineraryStatusAdmin(request,response)
  }

  static updateItineraryStatus(request,response){
    return UserService.updateItineraryStatus(request,response)

  }

   static updateUsersPlanStatusAdmin(request,response){
      return UserService.updateUsersPlanStatusAdmin(request,response)
   }


  static paystackPayMeMoney(req,res){
    return UserService.paystackPayMeMoney(req,res);
  }

  static paystackCallBack(req,res){
    return UserService.paystackCallBack(req,res);
  }

  static paystackReceipt(req,res){
    return UserService.paystackReceipt(req,res);
  }

  static paystackHistory(req,res){
    return UserService.paystackHistory(req,res);
  }

  static paystackPayments(req,res){
    return UserService.paystackPayments(req,res);
  }

  static paystackQuotations(req,res){
    return UserService.paystackQuotations(req,res)
  }
  

  static editViewUsersItinerary(request,response){
    return UserService.editViewUsersItinerary(request,response);
  }

   static updateUsersItinerary(request,response){
    return UserService.updateUsersItinerary(request,response);
  }
   
   static getUsersItinerary(request,response){
    return UserService.getUsersItinerary(request,response);
  }

  static makeNotification(request,response){
    return UserService.makeNotification(request,response);
  }

  static getUserNotification(request,response){
    return UserService.getUserNotification(request,response);
  }








  
  



  // static handleImageUpload(request,response){
  //    // return UserService.handleImageUpload(request,response);
  // }

  // static handleVideoUpload(request,response){
  //    // return UserService.handleVideoUpload(request,response)
  // }
  // static handleProfileUpload(request,response){
  //   // return UserService.handleProfileUpload(request,response);
  // }



  // static loginWithTwitter(request,response){
  //   return UserService.loginWithTwitter(request,response)
  // }

  // static loginWithFaceBook(request,response){
  //  return UserService.loginWithFaceBook(request,response)
  // }

 

  // static loginWithGoogle(request,response){
  //  return UserService.loginWithGoogle(request,response)
  // }


  //admin user


  static adminDashboard(request,response){
    return UserService.adminDashboard(request,response)
  }

  static adminDashboardTodaySales(request,response){
    return UserService.adminDashboardTodaySales(request,response)
  }

  static adminDashboardYesterdaySales(request,response){
    return UserService.adminDashboardYesterdaySales(request,response)
  }

  static adminDashboardWeeklySales(request,response){
    return UserService.adminDashboardWeeklySales(request,response)
  }

  static adminDashboardMonthlySales(request,response){
    return UserService.adminDashboardMonthlySales(request,response)
  }

  

  static manageUsers(request,response){
   return UserService.manageUsers(request,response)
  }

  static deleteUser(request,response){
    return UserService.deleteUser(request,response)
  }

  static addUserByAdmin(request,response){
     return UserService.createNewUser(request,response)
  }

  static manageUsersDetail(request,response){
    return UserService.manageUsersDetail(request,response)
  }

  static manageUsersDetailVerification(request,response){
    return UserService.manageUsersDetailVerification(request,response)
  }

  static manageAdmins(request,response){
    return UserService.manageAdmins(request,response)
  }

  static deleteAdmin(request,response){
    return UserService.deleteAdmin(request,response)
  }

  static manageAdminsDetail(request,response){
    return UserService.manageAdminsDetail(request,response)
  }

  static manageAdminsDetailVerification(request,response){
    return UserService.manageAdminsDetailVerification(request,response)
  }

  static addAdminByAdmin(request,response){
     return UserService.createNewAdmin(request,response)
  }

  static manageDrivers(request,response){
    return UserService.manageDrivers(request,response)
  }

  static addDriverByAdmin(request,response){
    return UserService.createNewDriver(request,response)
  }

  static deleteDriver(request,response){
    return UserService.deleteDriver(request,response)
  }

  static manageDriversDetail(request,response){
    return UserService.manageDriversDetail(request,response)
  }

  static manageDriversDetailVerification(request,response){
    return UserService.manageDriversDetailVerification(request,response)
  }

  static managePartners(request,response){
    return UserService.managePartners(request,response)
  }

  static deletePartner(request,response){
    return UserService.deletePartner(request,response)
  }

  static addPartnerByAdmin(request,response){
    return UserService.createNewPartner(request,response)
  }


  static managePartnersDetail(request,response){
    return UserService.managePartnersDetail(request,response)
  }

  static managePartnersDetailVerification(request,response){
    return UserService.managePartnersDetailVerification(request,response)
  }






  static managePlanPackage(request,response){
    return UserService.managePlanPackage(request,response)
  }

   static managePlanPackageCorporate(request,response){
    return UserService.managePlanPackageCorporate(request,response)
  }

  static createNewPlan(request,response){
    return UserService.createNewPlan(request,response)
  }

  static deletePlanPackage(request,response){
    return UserService.deletePlanPackage(request,response);
  }


  static managePlanPackageDetail(request,response){
    return UserService.managePlanPackageDetail(request,response)
  }




  




  static manageSOS(request,response){
    return UserService.manageSOS(request,response)
  }


  static manageSOSDetail(request,response){
    return  UserService.manageSOSDetail(request,response)
  }

  static deleteSOS(request,response){
    return UserService.deleteSOS(request,response)
  }








    static manageGoogleSettings(request,response){
    return  UserService.manageGoogleSettings(request,response)
  }


  static manageFacebookSettings(request,response){
    return  UserService.manageFacebookSettings(request,response)
  }

  static managePaystackSettings(request,response){
    return  UserService.managePaystackSettings(request,response)
  }


  static manageEmailSettings(request,response){
    return  UserService.manageEmailSettings(request,response)
  }

  static manageS3BucketSettings(request,response){
    return  UserService.manageS3BucketSettings(request,response)
  }

  static manageInstagramSettings(request,response){
    return  UserService.manageInstagramSettings(request,response)
  }

  static manageSettingsDetail(request,response){
    return UserService.manageSettingsDetail(request,response)
  }


  static manageTickets(request,response){
    return  UserService.manageTickets(request,response)
  }

  static manageTicketsDetail(request,response){
    return  UserService.manageTicketsDetail(request,response)
  }

  static deleteTicket(request,response){
    return  UserService.deleteTicket(request,response)
  }

  static createNewTicket(request,response){
    return  UserService.createNewTicket(request,response)
  }

  
  static manageFaqs(request,response){
   return  UserService.manageFaqs(request,response)
  }

  static showUserInfo(request,response){
    return  UserService.showUserInfo(request,response)
  }

  static setOldBalance(request,response){
      return  UserService.setOldBalance(request,response)
  }

  static manageFaqsDetail(request,response){
    return  UserService.manageFaqsDetail(request,response)
  }

  static createNewFAQ(request,response){
     return  UserService.createNewFAQ(request,response)
  }


  static manageProfile(request,response){
    return  UserService.manageProfile(request,response)
  }

  static manageProfileDetail(request,response){
    return UserService.manageProfileDetail(request,response);
  }

  static manageProfileDetailVerification(request,response){
    return UserService.manageProfileDetailVerification(request,response)
  }

  
  static manageItineraries(request,response){
    return  UserService.manageItineraries(request,response)
  }

  static manageUsersPlan(request,response){
    return UserService.manageUsersPlan(request,response)
  }


  static manageItineraryDetail(request,response){
    return  UserService.manageItineraryDetail(request,response)
  }

  static manageUserNotificationCounter(request,response){
    return UserService.manageUserNotificationCounter(request,response)
  }




  static paystackHistoryAdmin(req,res){
    return UserService.paystackHistoryAdmin(req,res);
  }

  static paystackPaymentsAdmin(req,res){
    return UserService.paystackPaymentsAdmin(req,res);
  }

  static paystackQuotationsAdmin(req,res){
    return UserService.paystackQuotationsAdmin(req,res)
  }


  static deleteQuotation(req,res){
    return UserService.deleteQuotation(req,res);
  }

  static deleteWallet(req,res){
    return UserService.deleteWallet(req,res);
  }

  static deletePayment(req,res){
    return UserService.deletePayment(req,res)
  }



  static manageInspection(request,response){
    return  UserService.manageInspection(request,response) 
  }

   static manageInspectionDetail(request,response){
    return  UserService.manageInspectionDetail(request,response)
  }

  static createNewInspection(request,response){
    return  UserService.createNewInspection(request,response) 
  }

   static deleteInspection(request,response){
    return  UserService.deleteInspection(request,response)
  }



  static manageDriveTest(request,response){
    return  UserService.manageDriveTest(request,response)
  }

  static manageDriveTestDetail(request,response){
    return  UserService.manageDriveTestDetail(request,response)
  }

  static createNewDriveTest(request,response){
    return  UserService.createNewDriveTest(request,response) 
  }

  static addDriveTestFromItinerary(request,response){
     return UserService.addDriveTestFromItinerary(request,response)
  }

   static deleteDriveTest(request,response){
    return  UserService.deleteDriveTest(request,response)
  }

  static manageUsersDriveTestCenterUpdate(request,response){
    return UserService.manageUsersDriveTestCenterUpdate(request,response)
  }



 static getUserPreviledges(request,response){
  return UserService.getUserPreviledges(request,response)
 }


  static managePreviledges(request,response){
    return  UserService.managePreviledges(request,response)
  }

  static managePreviledgesDetail(request,response){
    return  UserService.managePreviledgesDetail(request,response)
  }

  static createNewPreviledges(request,response){
    return  UserService.createNewPreviledges(request,response) 
  }

   static deletePreviledges(request,response){
    return  UserService.deletePreviledges(request,response)
  }

  static adminPreviledgesEdit(request,response){
    UserService.adminPreviledgesEdit(request,response)
  }






  static manageCars(request,response){
    return UserService.manageCars(request,response)
  }

  static getCarsInfo(request,response){
    return UserService.getCarsInfo(request,response)
  }

  static manageCarsDetail(request,response){
    return UserService.manageCarsDetail(request,response)
  }

  static createNewCar(request,response){
    return UserService.createNewCar(request,response)
  }


  static makeQuotation(request,response){
    return UserService.makeQuotation(request,response)
  }




  static manageBookings(request,response){
    return  UserService.manageBookings(request,response)
  }

  static manageBookingsDetail(request,response){
    return  UserService.manageBookingsDetail(request,response)
  }

  static createNewItinerary(request,response){
     return  UserService.createNewItinerary(request,response)
  }


  static createNewPlanBooking(request,response){
     return  UserService.createNewPlanBooking(request,response)
  }

  static createPaymentDetail(request,response){
      return  UserService.createPaymentDetail(request,response)
  }

 


  static manageManualBooking(request,response){
    return  UserService.manageManualBooking(request,response)
  }


  
  static manageTechSupport(request,response){
    return  UserService.manageTechSupport(request,response)
  }

  



  
  static adminGetAllUsers(request,response){
    return UserService.adminGetAllUsers(request,response);
  }


   static getTrails(request,response){
    return  UserService.getTrails(request,response)
  }

  



  
  static createTrail(request,response){
    return UserService.createTrail(request,response);
  }










  //drivers

  static driverConfirmBooking(request,response){
     return UserService.driverConfirmBooking(request,response); 
  }


  static getAllRepairs(request,response){
    return UserService.getAllRepairs(request,response); 

  }

  static changeRepairStatus(request,response){
    return UserService.changeRepairStatus(request,response); 

  }



}
