/* eslint-disable prefer-const */
import { DriverService } from '../services/driver_services';
import { DriverRedFlagService } from '../services/sos_service_drivers'

export default class DriverController {
  static signup(request, response) {
    return DriverService.signup(request, response);
  }

  static login(request, response) {
    return DriverService.login(request, response);
  }

  static confirmationPost(request,response){
    return DriverService.confirmationPost(request,response)
  }

  static resendTokenPost(request,response){
    return DriverService.resendTokenPost(request,response)
  }

  static passwordForgot(request, response){
    return DriverService.passwordForgot(request,response);
  }




  static confirmResetPassword(request,response){
    return DriverService.confirmResetPassword(request,response);
  }

  static changePasswordTrigger(request,response){
    return DriverService.changePasswordTrigger(request,response);
  }

  

  static updateProfile(request,response){
    return DriverService.updateProfile(request,response)
  }

  static showProfile(request,response){
    return DriverService.showProfile(request,response)
  }




  static createRedFlag(request, response){
   return DriverRedFlagService.createRedFlag(request, response);
  }

  static allRedFlags(request, response){
    return DriverRedFlagService.allRedFlags(request, response);
  }

  static redFlagId(request, response){
    return DriverRedFlagService.redFlagId(request, response);
  }

  static sendNotifications(request, response){
    return DriverRedFlagService.sendNotifications(request, response);
  }

  static getNotifications(request, response){
    return DriverRedFlagService.getNotifications(request, response);
  }

  static editRedFlag(request, response){
    return DriverRedFlagService.editRedFlag(request, response);
  }

  static editRedFlagComment(request, response){
    return DriverRedFlagService.editRedFlagComment(request, response);
  }

  static deleteRedFlag(request, response){
    return DriverRedFlagService.deleteRedFlag(request, response);
  }

  static updateRedFlagStatus(request, response){
    return DriverRedFlagService.updateRedFlagStatus(request, response);
  }
  static usersRedflags(request, response){
    DriverRedFlagService.usersRedflags(request, response);
  }


  static getDriversAssignedTrips(request, response){
      DriverService.getDriversAssignedTrips(request, response)
  }

  static getAssignedDriverToCars(request, response){
      DriverService.getAssignedDriverToCars(request, response)
  }



  

  











  //drivers

  static driverConfirmBooking(request,response){
     return DriverService.driverConfirmBooking(request,response); 
  }



}
