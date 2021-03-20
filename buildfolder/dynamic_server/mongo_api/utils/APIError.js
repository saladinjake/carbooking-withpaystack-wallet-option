"use strict";

var cov_375na9vgf = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\utils\\APIError.js";
  var hash = "b701f7eab83c23f0d0cd4f8d14db3b33ecc8f132";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\utils\\APIError.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 19
        },
        end: {
          line: 1,
          column: 41
        }
      },
      "1": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 19
        }
      },
      "2": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 38
        }
      },
      "3": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 27
        }
      },
      "4": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 25
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 25
        }
      },
      "6": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 29
        }
      },
      "7": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 30
        }
      },
      "8": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 23
        }
      },
      "9": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 42,
          column: 7
        }
      },
      "10": {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 46,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 5
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 5
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 39
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 45
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 37,
            column: 13
          },
          end: {
            line: 37,
            column: 45
          }
        }],
        line: 37
      },
      "1": {
        loc: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 38,
            column: 20
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 38,
            column: 15
          },
          end: {
            line: 38,
            column: 20
          }
        }],
        line: 38
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0],
      "1": [0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b701f7eab83c23f0d0cd4f8d14db3b33ecc8f132"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var httpStatus = (cov_375na9vgf.s[0]++, require('http-status'));
/**
 * @extends Error
 */

var ExtendableError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2["default"])(ExtendableError, _Error);

  function ExtendableError(_ref) {
    var _this;

    var message = _ref.message,
        errors = _ref.errors,
        status = _ref.status,
        isPublic = _ref.isPublic,
        stack = _ref.stack;
    (0, _classCallCheck2["default"])(this, ExtendableError);
    cov_375na9vgf.f[0]++;
    cov_375na9vgf.s[1]++;
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ExtendableError).call(this, message));
    cov_375na9vgf.s[2]++;
    _this.name = _this.constructor.name;
    cov_375na9vgf.s[3]++;
    _this.message = message;
    cov_375na9vgf.s[4]++;
    _this.errors = errors;
    cov_375na9vgf.s[5]++;
    _this.status = status;
    cov_375na9vgf.s[6]++;
    _this.isPublic = isPublic;
    cov_375na9vgf.s[7]++;
    _this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.

    cov_375na9vgf.s[8]++;
    _this.stack = stack; // Error.captureStackTrace(this, this.constructor.name);

    return _this;
  }

  return ExtendableError;
}((0, _wrapNativeSuper2["default"])(Error));
/**
 * Class representing an API error.
 * @extends ExtendableError
 */


var APIError =
/*#__PURE__*/
function (_ExtendableError) {
  (0, _inherits2["default"])(APIError, _ExtendableError);

  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to customer or not.
   */
  function APIError(_ref2) {
    var message = _ref2.message,
        errors = _ref2.errors,
        stack = _ref2.stack,
        _ref2$status = _ref2.status,
        status = _ref2$status === void 0 ? (cov_375na9vgf.b[0][0]++, httpStatus.INTERNAL_SERVER_ERROR) : _ref2$status,
        _ref2$isPublic = _ref2.isPublic,
        isPublic = _ref2$isPublic === void 0 ? (cov_375na9vgf.b[1][0]++, false) : _ref2$isPublic;
    (0, _classCallCheck2["default"])(this, APIError);
    cov_375na9vgf.f[1]++;
    cov_375na9vgf.s[9]++;
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(APIError).call(this, {
      message: message,
      errors: errors,
      status: status,
      isPublic: isPublic,
      stack: stack
    }));
  }

  return APIError;
}(ExtendableError);

cov_375na9vgf.s[10]++;
module.exports = APIError;
//# sourceMappingURL=APIError.js.map