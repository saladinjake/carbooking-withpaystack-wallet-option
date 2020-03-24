import { InterventonService } from '../services/feedback_service';

export default class FeedBackController {
  static createIntervention(request, response) {
    InterventonService.createIntervention(request, response);
  }

  static allInterventions(request, response) {
    InterventonService.allInterventions(request, response);
  }

  static interventionId(request, response) {
    InterventonService.interventionId(request, response);
  }

  static interventionLocation(request, response) {
    InterventonService.interventionLocation(request, response);
  }

  static editInterventionComment(request, response) {
    InterventonService.editInterventionComment(request, response);
  }

  static deleteIntervention(request, response) {
    InterventonService.deleteIntervention(request, response);
  }

  static updateInterventionStatus(request, response) {
    InterventonService.updateInterventionStatus(request, response);
  }

  static activateSearch(request, response) {
    InterventonService.activateSearch(request, response);
  }
  static usersInterventions(request, response) {
    InterventonService.usersInterventions(request, response);
  }
}
