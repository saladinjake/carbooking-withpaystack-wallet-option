import InterventionController from '../controllers/intervention_controller';


class ApiSearch {
  constructor(router) {
    this.router = router;

    let that = this;

    
  }
  attachRoutes() {
    this.router.post('/search',InterventionController.activateSearch)    
  }

  
}
