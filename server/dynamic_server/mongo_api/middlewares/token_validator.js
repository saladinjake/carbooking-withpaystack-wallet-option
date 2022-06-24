import jwt from 'jsonwebtoken';
import { ResponseHandler } from '../helpers/response_handler';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
export default class TokenVerification {
  static userAuthentication(request, response, next) {
    const token = request.header('x-access-token');
    //console.log(token)
    if (!token) {
      console.log('error validating token');
      return response.status(401).json({
        status: 401,
        error: 'You must signup or login to access this route',
      });
    }
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      request.user = decoded;
      return next();
    } catch (err) {
      return response.status(403).json({
        status: 403,
        error: 'Authentication failed',
      });
    }
  }

  static adminAuthentication(request, response, next) {
    const token = request.header('x-access-token');

    if (!token) {
      console.log('error validating token');
      return response.status(401).json({
        status: 401,
        error: 'You must signup or login to access this route',
      });
    }
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      request.user = decoded;

      if (request.user.isAdmin === false) {
        return response.status(403).json({
          status: 403,
          error: 'You do not have the admin rights to perform this action',
        });
      }
      return next();
    } catch (err) {
      return response.status(403).json({
        status: 403,
        error: 'Authentication failed',
      });
    }
  }
}
