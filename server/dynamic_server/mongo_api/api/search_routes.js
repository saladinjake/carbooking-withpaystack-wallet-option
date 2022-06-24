import InterventionController from '../controllers/intervention_controller';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
class ApiSearch {
  constructor(router) {
    this.router = router;

    let that = this;
  }
  attachRoutes() {
    this.router.post('/search', InterventionController.activateSearch);
  }
}
