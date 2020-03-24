


import {MechService } from '../services/mech_service';

export default class MechController {
  static create(request, response) {
    return MechService.create(request, response);
  }

  static all(request, response) {
    return MechService.all(request, response);
  }

  static users(request, response) {
    return MechService.users(request, response);
  }

  static update(request,response){
  	return MechService.update(request,response)
  }

  
}
