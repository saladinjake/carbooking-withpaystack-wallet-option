/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
export default class ResponseHandler {
  static sendResponse(response, status = 201, data = [{}]) {
    return response.status(status).json({
      status: status,
      data: data,
      // message: message
    });
  }

  static sendError(response, status = 400, message) {
    return response.status(status).send({
      status: status,
      error: message,
    });
  }
}
