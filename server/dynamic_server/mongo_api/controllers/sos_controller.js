

import { RedFlagService } from '../services/sos_service';
//import SOSModel from '../models/SOSModel';
import $ from 'jquery';
const SUCCESS_URL= 'http://localhost:4001/sos-history.html';


export default class SOSController {
  static createRedFlag(request, response) {
    RedFlagService.createRedFlag(request, response);
  }

  static allRedFlags(request, response) {
    RedFlagService.allRedFlags(request, response);
  }

  static redFlagId(request, response) {
    RedFlagService.redFlagId(request, response);
  }

  static sendNotifications(request, response) {
    RedFlagService.sendNotifications(request, response);
  }

  static getNotifications(request, response) {
    RedFlagService.getNotifications(request, response);
  }

  static editRedFlag(request, response) {
    RedFlagService.editRedFlag(request, response);
  }

  static editRedFlagComment(request, response) {
    RedFlagService.editRedFlagComment(request, response);
  }

  static deleteRedFlag(request, response) {
    RedFlagService.deleteRedFlag(request, response);
  }

  static updateRedFlagStatus(request, response) {
    RedFlagService.updateRedFlagStatus(request, response);
  }
  static usersRedflags(request, response) {
    RedFlagService.usersRedflags(request, response);
  }

  
}
