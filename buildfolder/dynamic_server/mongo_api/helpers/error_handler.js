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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorHandler = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ErrorHandler =
/*#__PURE__*/
function () {
  function ErrorHandler() {
    _classCallCheck(this, ErrorHandler);
  }

  _createClass(ErrorHandler, null, [{
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