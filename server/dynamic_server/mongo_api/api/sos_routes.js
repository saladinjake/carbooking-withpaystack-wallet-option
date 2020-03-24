

import RedFlagController from '../controllers/sos_controller';
import TokenVerification from '../middlewares/token_validator';
import SubmitEventValidator from '../middlewares/post_sanitizer';
// import BridgeRoutes from './routes';
const SUBMIT_REDFLAG_LINK = '/sos';
const REDFLAG_GET_SPECIFIC_LINK = '/sos/:id';
const REDFLAG_LOCATION_LINK = '/sos/:id/location';
const REDFLAG_COMMENT_LINK = '/sos/:id/comment';
const REDFLAG_STATUS_LINK = '/sos/:id/status';

class RedFlagRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {
   

    this.router.post(
      '/sos',
      TokenVerification.userAuthentication,
      // SubmitEventValidator.validateSubmit,
      RedFlagController.createRedFlag,
    );

    this.router.get(
      '/sos/:id/users',
      TokenVerification.userAuthentication,
      // SubmitEventValidator.validateSubmit,
      RedFlagController.usersRedflags,
    );


    this.router.post(
      '/notifications',
      TokenVerification.userAuthentication,
      RedFlagController.sendNotifications,
    );


    this.router.get(
      '/notifications/:id',
      TokenVerification.userAuthentication,
      RedFlagController.getNotifications,
    );
    
    return this.router;
  }
}
export default RedFlagRoutes;
