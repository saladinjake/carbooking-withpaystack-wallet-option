/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
import { ErrorHandler } from '../helpers/error_handler';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
const locationRegex = /^([-+]?\d{1,2}([.]\d+)?),\s*([-+]?\d{1,3}([.]\d+)?)$/;
const validIdRegex = /^[1-9]{1,}/;
export default class SubmitEventValidator {
  static validateSubmit(request, response, next) {
    const { location, images, subject, comment, reportType } = request.body;

    if (!(reportType && reportType.length)) {
      return ErrorHandler.sendError(response, 'Category must be a string');
    }

    // if (!(location && location.length)) {
    //   return ErrorHandler.sendError(response, 'Location must be a string');
    // }
    // if (typeof location !== 'string' || !locationRegex.test(location)) {
    //   return ErrorHandler.sendError(response, 'location does not match a Lat Long coordinates');
    // }
    var imageToSubmit = 'no image';
    if (!images) {
      imageToSubmit = 'no image preview';
      //return ErrorHandler.sendError(response, 'Please enter an image url');
    }

    
    if (!subject) {
      return ErrorHandler.sendError(response, 'Please enter a subject');
    }
    

    if (!comment) {
      return ErrorHandler.sendError(response, 'Please enter a comment');
    }

    if (typeof comment !== 'string') {
      return ErrorHandler.sendError(response, 'comment must be a string of characters');
    }
    return next();
  }

  static validateLocation(request, response, next) {
    const { location } = request.body;
    if (!(location && location.length)) {
      return ErrorHandler.sendError(response, 'Location must be a string');
    }
    if (typeof location !== 'string' || !locationRegex.test(location)) {
      return ErrorHandler.sendError(response, 'location does not match a Lat Long coordinates');
    }
    return next();
  }

  static validateStatus(request, response, next) {
    const { status } = request.body;
    if (!(status && status.length)) {
      return ErrorHandler.sendError(response, 'Status is required');
    }
    if (
      typeof status !== 'string' ||
      (status !== 'under investigation' && status !== 'resolved' && status !== 'rejected')
    ) {
      return ErrorHandler.sendError(
        response,
        'Invalid status, status must be a string containing under investigation, resolved or rejected',
      );
    }
    return next();
  }

  static validateComment(request, response, next) {
    const { comment } = request.body;
    if (!comment) {
      return ErrorHandler.sendError(response, 'Please enter a comment');
    }

    if (typeof comment !== 'string') {
      return ErrorHandler.sendError(response, 'comment must be a string of characters');
    }
    return next();
  }

  static validateId(request, response, next) {
    if (!validIdRegex.test(request.params.id)) {
      console.log('error validating id');
      return ErrorHandler.sendError(response, 'The given id is not a number');
    }
    return next();
  }
}
