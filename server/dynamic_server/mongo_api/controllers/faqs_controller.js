import { FaqsService } from '../services/faqs_service';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
export default class FaqsController {
  static createQnA(request, response) {
    return FaqsService.createQnA(request, response);
  }

  static getAllQnA(request, response) {
    return FaqsService.getAllQnA(request, response);
  }

  // static carsId(request, response) {
  //   return FaqsService.QnAId(request, response);
  // }

  // static editCars(request, response) {
  //   return FaqsService.editQnA(request, response);
  // }
}
