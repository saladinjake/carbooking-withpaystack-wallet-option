'use strict';
import ApiBotService from '../services/postgres_api_bot';
import ApiAdminBots from '../services/adminservices/postgres_api_admin_bot';


class AdminModel  {
  constructor() {
    
  }

  static runEndpoints() {
  	console.log("called admin")
    return ApiAdminBots.runEndpoints();
  }
}
export default AdminModel;
