

import MechController from '../controllers/mech_controller';
import UserSanitizer from '../middlewares/user_sanitizer';

import TokenVerification from '../middlewares/token_validator';
import SubmitEventValidator from '../middlewares/post_sanitizer';

class MechanicRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {
    this.router.post(
      '/mechanic-request',
      TokenVerification.userAuthentication,
      MechController.create,
    );

    this.router.get(
      '/mechanic-request/:id/users',
      TokenVerification.userAuthentication,
      MechController.users,
    );
    
    this.router.get(
      '/mechanic-request',
      TokenVerification.userAuthentication,
      MechController.all,
    );

    

    this.router.patch(
      "/mech-request/:id/update",
      TokenVerification.userAuthentication,
      MechController.update,
    );



    return this.router;
  }
}
export default MechanicRoutes;
