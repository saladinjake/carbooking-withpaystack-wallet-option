'use strict';
import WebsiteLogin from '../core/Login';
import WebsiteSignUp from '../core/SignUp';
import WebsitePasswordReset from '../core/ForgotPassword';
// import WebsiteInactivityLockScreen from '../core/LockScreen';
// import WebsiteProfile from '../frontend/controllers/Profile';
// import WebsiteFeedback from '../frontend/controllers/Feedback';
// import WebsiteSOS from '../frontend/controllers/SOS';
// import WebsiteLoading  from '../core/Loading';
// import WebsiteHome from '../frontend/controllers/Home';
// import WebsiteItineraryHistory from '../frontend/controllers/ItineraryHistory';
// import WebsitePlanHistory from '../frontend/controllers/PlanHistory';
// import WebsiteSingleRecord from '../frontend/controllers/PlanDetail';
// import WebsitePlanCategory from '../frontend/controllers/Plan';
//import WebsiteRepairs from '../frontend/controllers/CarRepair';
const FrontendRepoBootstrap = {
  
  SignUp: new WebsiteSignUp(),
  Login: new WebsiteLogin(),
  PasswordReset: new WebsitePasswordReset(),
  //Profile: new WebsiteProfile(),
  // ItineraryHistory: new WebsiteItineraryHistory(),
  // PlanHistory: new WebsitePlanHistory(),
  // PlanCategorySelect: new WebsitePlanCategory(),
  //   Home: new WebsiteHome(),


 

  // Feedback:  new WebsiteFeedback(),
  // SOS: new WebsiteSOS(),
  // PlanDetail: new WebsiteSingleRecord(),
  
  //Repairs: new WebsiteRepairs(),
   //InactivityLockScreen: new WebsiteInactivityLockScreen(),
};
export default FrontendRepoBootstrap;
