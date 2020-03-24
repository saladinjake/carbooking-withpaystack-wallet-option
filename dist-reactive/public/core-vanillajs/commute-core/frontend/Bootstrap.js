'use strict';
import WebsiteLogin from '../core/Login';
import WebsiteSignUp from '../core/SignUp';
import WebsitePasswordReset from '../core/ForgotPassword';
// import WebsiteInactivityLockScreen from '../core/LockScreen';
import WebsiteProfile from '../frontend/controllers/Profile';
import WebsiteFeedback from '../frontend/controllers/Feedback';
import WebsiteSOS from '../frontend/controllers/SOS';
import WebsiteLoading  from '../core/Loading';
require('../frontend/controllers/Plan');
//import WebsiteRepairs from '../frontend/controllers/CarRepair';
const FrontendRepoBootstrap = {
  
  SignUp: new WebsiteSignUp(),
  Login: new WebsiteLogin(),
  //InactivityLockScreen: new WebsiteInactivityLockScreen(),
  PasswordReset: new WebsitePasswordReset(),
  Profile: new WebsiteProfile(),
  Feedback:  new WebsiteFeedback(),
  SOS: new WebsiteSOS(),
  //Repairs: new WebsiteRepairs(),
  
};
export default FrontendRepoBootstrap;
