export class ErrorHandler {
  static errors() {
    const errors = {
      validationError: 'Missing input fields',
    };
    return errors;
  }

  // 404 error will override 422 error
  static sendError(response, message, code = 422) {
    response.status(code).json({
      status: code,
      error: message,
    });
  }
}
