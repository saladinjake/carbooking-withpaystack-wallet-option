'use strict';
import PlanHistoryModel from '../models/PlanHistoryModel';


class WebsitePlanHistory {
  constructor() {   
  }

  attachEvents() {
    if (document.getElementById('plan-history')) {
      this.indexPageController();
      
    }
  }

  indexPageController() {

   
   
    return PlanHistoryModel.planHistory()
  }

}

export default WebsitePlanHistory;
