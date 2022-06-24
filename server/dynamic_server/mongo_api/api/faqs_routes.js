import FaqsController from '../controllers/faqs_controller';
import TokenVerification from '../middlewares/token_validator';
import SubmitEventValidator from '../middlewares/post_sanitizer';
// import BridgeRoutes from './routes';
const SUBMIT_REDFLAG_LINK = '/faqs';
const REDFLAG_GET_SPECIFIC_LINK = '/faqs/:id';
const REDFLAG_LOCATION_LINK = '/faqs/:id/edit';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
class FaqsRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {
    this.router.post('/faqs', TokenVerification.userAuthentication, FaqsController.createQnA);

    this.router.get('/faqs', TokenVerification.userAuthentication, FaqsController.getAllQnA);

    return this.router;
  }
}
export default FaqsRoutes;
