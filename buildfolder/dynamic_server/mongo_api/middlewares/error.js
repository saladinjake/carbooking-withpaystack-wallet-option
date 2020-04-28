// const httpStatus = require('http-status');
// const expressValidation = require('express-validation');
// const APIError = require('../utils/APIError');
// const { env } = require('../config/vars');
// /**
//  * Error handler. Send stacktrace only during development
//  * @public
//  */
// const handler = (err, req, res, next) => {
//   const response = {
//     code: err.status,
//     message: err.message || httpStatus[err.status],
//     errors: err.errors,
//     stack: err.stack,
//   };
//   if (env !== 'development') {
//     delete response.stack;
//   }
//   res.status(err.status);
//   res.json(response);
//   res.end();
// };
// exports.handler = handler;
// /**
//  * If error is not an instanceOf APIError, convert it.
//  * @public
//  */
// exports.converter = (err, req, res, next) => {
//   let convertedError = err;
//   if (err instanceof expressValidation.ValidationError) {
//     convertedError = new APIError({
//       message: 'Erro de Validação',
//       errors: err.errors,
//       status: err.status,
//       stack: err.stack,
//     });
//   } else if (!(err instanceof APIError)) {
//     convertedError = new APIError({
//       message: err.message,
//       status: err.status,
//       stack: err.stack,
//     });
//   }
//   return handler(convertedError, req, res);
// };
// /**
//  * Catch 404 and forward to error handler
//  * @public
//  */
// exports.notFound = (req, res, next) => {
//   const err = new APIError({
//     message: 'Not found',
//     status: httpStatus.NOT_FOUND,
//   });
//   return handler(err, req, res);
// };
"use strict";

var cov_1794yk66ef = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\middlewares\\error.js";
  var hash = "9f1019731267363223ef505133903d7271330ced";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\middlewares\\error.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9f1019731267363223ef505133903d7271330ced"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();
//# sourceMappingURL=error.js.map