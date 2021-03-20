'use strict';
import ApiBotServices from '../../backend/services/postgres_api_bot';
//import AbstractModel from './AbstractModel';
class InterventionModel {
  static getAllData() {
    return ApiBotServices.fetchDataInterventions('/feedback');
  }

  static getSpecificData() {
    return ApiBotServices.getById();
  }

  static submitFormData() {
    return ApiBotServices.submitFormData();
  }

  static deleteOneRecord() {
    return ApiBotServices.deleteOneRecord();
  }
  static updateOneLocation() {
    return ApiBotServices.updateOneLocation();
  }
  static updateOneComment() {
    return ApiBotServices.updateOneComment();
  }
  static updateOneStatus() {
    return ApiBotServices.updateOneStatus();
  }
}
export default InterventionModel;
