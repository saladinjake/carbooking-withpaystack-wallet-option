import CarsController from '../controllers/cars_controller';
import TokenVerification from '../middlewares/token_validator';
import SubmitEventValidator from '../middlewares/post_sanitizer';
// import BridgeRoutes from './routes';
const SUBMIT_REDFLAG_LINK = '/cars';
const REDFLAG_GET_SPECIFIC_LINK = '/cars/:id';
const REDFLAG_LOCATION_LINK = '/cars/:id/partners';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
class CarsRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {
    this.router.post(
      '/cars',
      TokenVerification.userAuthentication,
      CarsController.createCarProfile,
    );

    this.router.get('/cars', TokenVerification.userAuthentication, CarsController.getAllCars);

    return this.router;
  }
}
export default CarsRoutes;
