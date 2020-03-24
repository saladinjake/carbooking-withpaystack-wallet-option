import AuthRoutes from './auth_routes';
import RedFlagRoutes from './sos_routes';
import InterventionRoutes from './feedback_routes';
import UserRoutes from './user_routes';
import UploadRoutes from './api_uploads';
import CarsRoute from './cars_routes';
import FaqRoute from './faqs_routes';
import MechanicRoute from './mechanic_request';

import DriverRoutes from './driver_routes';

class BridgeRoutes {
  constructor(router) {
    this.router = router;
    this.CoreRoutes = {
      Auth:  new AuthRoutes(this.router),
      RedFlags:  new RedFlagRoutes(this.router),
      InterVentions:new InterventionRoutes(this.router),
      Users: new UserRoutes(this.router),
      Uploads: new  UploadRoutes(this.router),
      CarsRoutes: new CarsRoute(this.router),
      MechanicRoutes: new MechanicRoute(this.router),
      FaqRoutes: new FaqRoute(this.router),
      DriverRoute : new DriverRoutes(this.router)
    };
  }

  attachRoutes() {
    const keys = Object.values(this.CoreRoutes).map((item)  => {
      let classInstance = item;
      classInstance.attachRoutes();
    });
    return this.router;

  }
}
export default BridgeRoutes;
