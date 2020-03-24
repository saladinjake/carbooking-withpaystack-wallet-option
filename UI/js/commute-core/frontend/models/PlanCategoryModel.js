'use strict';
import ApiBotServices from '../../backend/services/postgres_api_bot';
//import AbstractModel from './AbstractModel';
class PlanCategoryModel {
  static getAllIndividualPlans() {
    return ApiBotServices.fetchDataIndividualPlans('/individual/plans/view');
  }

  static getAllCoperatePlans() {
    return ApiBotServices.fetchDataCoperatePlans('/coperate/plans/view');
  }

}
export default PlanCategoryModel;
