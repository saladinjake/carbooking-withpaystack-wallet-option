import { CarsService } from '../services/cars_services';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
export default class CarsController {
  static createCarProfile(request, response) {
    return CarsService.createCarProfile(request, response);
  }

  static getAllCars(request, response) {
    return CarsService.getAllCars(request, response);
  }

  static carsId(request, response) {
    return CarsService.carsId(request, response);
  }

  static editCars(request, response) {
    return CarsService.editCars(request, response);
  }

  static usersCars(request, response) {
    return CarsService.usersSelectedCars(request, response);
  }
}
