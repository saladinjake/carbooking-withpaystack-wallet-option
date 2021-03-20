'use strict';
import ApiLoginService from './apiservices/ApiLoginService';
import ApiSignUpService from './apiservices/ApiSignUpService';
import ApiGetAllRecord from './apiservices/ApiGetAllRecord';
import ApiGetOneRecord from './apiservices/ApiGetOneRecord';
import ApiSaveOneRecord from './apiservices/ApiSaveOneRecord';
import ApiSOSRequest from './apiservices/ApiSOSRequest';
import ApiDeleteOneStatusRecord from './apiservices/ApiDeleteOneStatusRecord';
import ApiProfile from './apiservices/ApiUserProfile';


import ApiEditOneCommentRecord from './apiservices/ApiEditOneCommentRecord';
import ApiUpdateOneLocationRecord from './apiservices/ApiUpdateOneLocationRecord';
import ApiUpdateStatusRecord from './apiservices/ApiUpdateStatusRecord';

import ApiGetBothRecord from './apiservices/ApiGetBothRecord'; //for admin
import ApiAllUsersRecords from './apiservices/ApiAllUsersRecords';


class ApiBotService {
  constructor() {}
  static authenticateUser() {
    return ApiLoginService.validate();
  }

  static passwordReset() {
    return  ApiLoginService.passwordReset();
  }

  static authorizeUser() {
    return ApiSignUpService.authorize();
  }

  static fetchUserProfile(){
    return ApiProfile.fetchUserProfile();
  }

  static updateProfile(){
    return ApiProfile.updateProfile();
  }


  static fetchDataInterventions(url = '/interventions') {
    return ApiGetAllRecord.getData(url);
  }


  static saveSOSRequest(user){
    console.log('calling')
    return ApiSOSRequest.saveSOSRequest(user)
  }

  static fetchDataRedFlags(url = '/red-flags') {
    return ApiGetAllRecord.getData(url);
  }
  static getById() {
    return ApiGetOneRecord.getDataById();
  }

  static submitFormData() {
    return ApiSaveOneRecord.triggerEvents();
  }

  static deleteOneRecord() {
    return ApiDeleteOneStatusRecord.deleteDataById();
  }
  static updateOneLocation() {
    return ApiUpdateOneLocationRecord.updateOneLocationById();
  }
  static updateOneComment() {
    return ApiEditOneCommentRecord.editOneCommentById();
  }
  static updateOneStatus() {
    return ApiUpdateStatusRecord.updateOneStatus();
  }

  static fetchBothRecords() {
    return ApiGetBothRecord.getData();
  }




  static getCurrentUsersPosts(){
    return ApiAllUsersRecords.getData();
  }

  genRandomId() {
    return Math.floor(Math.random() * 9000 + 2000);
  }
}

export default ApiBotService;
