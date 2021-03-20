'use strict';
import ApiBotService from '../postgres_api_bot';

class ApiAdminBotService extends ApiBotService {
  constructor() {
    super();
  }
  static getBothRecord() {
    return ApiAdminBotService.fetchBothRecords();
  }
}

export default ApiAdminBotService;
