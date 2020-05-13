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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var httpStatus = (cov_375na9vgf.s[0]++, require('http-status'));
/**
 * @extends Error
 */

var ExtendableError =
/*#__PURE__*/
function (_Error) {
  _inherits(ExtendableError, _Error);

  function ExtendableError(_ref) {
    var _this;

    var message = _ref.message,
        errors = _ref.errors,
        status = _ref.status,
        isPublic = _ref.isPublic,
        stack = _ref.stack;

    _classCallCheck(this, ExtendableError);

    cov_375na9vgf.f[0]++;
    cov_375na9vgf.s[1]++;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExtendableError).call(this, message));
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
}(_wrapNativeSuper(Error));
/**
 * Class representing an API error.
 * @extends ExtendableError
 */


var APIError =
/*#__PURE__*/
function (_ExtendableError) {
  _inherits(APIError, _ExtendableError);

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

    _classCallCheck(this, APIError);

    cov_375na9vgf.f[1]++;
    cov_375na9vgf.s[9]++;
    return _possibleConstructorReturn(this, _getPrototypeOf(APIError).call(this, {
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