
'use strict';
import PlanCategoryModel from '../models/PlanCategoryModel';
class WebsitePlanCategory {
  constructor() {   
  }

  attachEvents() {
    if (document.getElementById('planpage')) {
      this.indexPageController();
    
    }
  }

  indexPageController() {
  	const user = JSON.parse(localStorage.getItem('userToken'));
  	console.log(user.user)
  	if(user.user.user_type==='Individual'){
  		 return PlanCategoryModel.getAllIndividualPlans()
  	}
  	 return PlanCategoryModel.getAllCoperatePlans()
   
  }






}

export default WebsitePlanCategory;


