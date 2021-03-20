'use strict';
import ApiBotService from '../services/postgres_api_bot';
import ApiAdminBotService from '../services/adminservices/postgres_api_admin_bot';
import InterventionModel from '../../frontend/models/InterventionModel';
import ApiAdminBots from '../services/adminservices/postgres_api_admin_bot';

class InterventionAdminModel extends InterventionModel {
  constructor() {
    super();
  }

  static getBothRecord() {
    return ApiAdminBots.getBothRecord();
  }
}
export default InterventionAdminModel;
