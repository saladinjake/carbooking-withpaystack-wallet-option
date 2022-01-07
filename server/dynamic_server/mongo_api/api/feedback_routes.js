import InterventionController from '../controllers/feedback_controller';
import TokenVerification from '../middlewares/token_validator';
import SubmitEventValidator from '../middlewares/post_sanitizer';
// import BridgeRoutes from './routes';
const SUBMIT_INTERVENTION_LINK = '/feedback';
const feedback_GET_SPECIFIC_LINK = '/feedback/:id';
const INTERVENTION_LOCATION_LINK = '/feedback/:id/location';
const INTERVENTION_COMMENT_LINK = '/feedback/:id/comment';
const INTERVENTION_STATUS_LINK = '/feedback/:id/status';
class InterventionRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {
    this.router.post(
      '/feedback',
      TokenVerification.userAuthentication,
      SubmitEventValidator.validateSubmit,
      InterventionController.createIntervention,
    );
    this.router.get(
      SUBMIT_INTERVENTION_LINK,
      TokenVerification.userAuthentication,
      InterventionController.allInterventions,
    );
    this.router.get(
      feedback_GET_SPECIFIC_LINK,
      TokenVerification.userAuthentication,
      SubmitEventValidator.validateId,
      InterventionController.interventionId,
    );
    this.router.patch(
      INTERVENTION_LOCATION_LINK,
      TokenVerification.userAuthentication,
      SubmitEventValidator.validateId,
      SubmitEventValidator.validateLocation,
      InterventionController.interventionLocation,
    );
    this.router.patch(
      INTERVENTION_COMMENT_LINK,
      TokenVerification.userAuthentication,
      SubmitEventValidator.validateId,
      SubmitEventValidator.validateComment,
      InterventionController.editInterventionComment,
    );
    this.router.delete(
      INTERVENTION_STATUS_LINK,
      TokenVerification.userAuthentication,
      SubmitEventValidator.validateId,
      InterventionController.deleteIntervention,
    );
    this.router.patch(
      INTERVENTION_STATUS_LINK,
      TokenVerification.userAuthentication,
      TokenVerification.adminAuthentication,
      SubmitEventValidator.validateId,
      SubmitEventValidator.validateStatus,
      InterventionController.updateInterventionStatus,
    );
    this.router.get(
      '/users/:id/feedback/',
      TokenVerification.userAuthentication,
      SubmitEventValidator.validateId,
     InterventionController.usersInterventions,
    );
    return this.router;
  }
}

export default InterventionRoutes;
