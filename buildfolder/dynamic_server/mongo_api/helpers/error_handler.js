"use strict";

var cov_15hzcnzntb = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\error_handler.js";
  var hash = "1947bb6c9b439386764f665ca3bae1b8d5a81e05";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\error_handler.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 5,
          column: 5
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 18
        }
      },
      "2": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 14,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 2,
            column: 3
          }
        },
        loc: {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 7,
            column: 3
          }
        },
        line: 2
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 50
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 38
          },
          end: {
            line: 10,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 10,
            column: 45
          },
          end: {
            line: 10,
            column: 48
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1947bb6c9b439386764f665ca3bae1b8d5a81e05"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorHandler = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ErrorHandler = /*#__PURE__*/function () {
  function ErrorHandler() {
    (0, _classCallCheck2["default"])(this, ErrorHandler);
  }

  (0, _createClass2["default"])(ErrorHandler, null, [{
    key: "errors",
    value: function errors() {
      cov_15hzcnzntb.f[0]++;
      var errors = (cov_15hzcnzntb.s[0]++, {
        validationError: 'Missing input fields'
      });
      cov_15hzcnzntb.s[1]++;
      return errors;
    } // 404 error will override 422 error

  }, {
    key: "sendError",
    value: function sendError(response, message) {
      var code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_15hzcnzntb.b[0][0]++, 422);
      cov_15hzcnzntb.f[1]++;
      cov_15hzcnzntb.s[2]++;
      response.status(code).json({
        status: code,
        error: message
      });
    }
  }]);
  return ErrorHandler;
}();

exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error_handler.js.map