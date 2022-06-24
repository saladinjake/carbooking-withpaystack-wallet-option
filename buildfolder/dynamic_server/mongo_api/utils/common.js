"use strict";

var cov_1pllr0hbbr = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\utils\\common.js";
  var hash = "d15b334b6494f306ab5edfa6931489091bd8c1f4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\utils\\common.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 14
        },
        end: {
          line: 48,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 54
        }
      },
      "2": {
        start: {
          line: 22,
          column: 17
        },
        end: {
          line: 22,
          column: 39
        }
      },
      "3": {
        start: {
          line: 23,
          column: 16
        },
        end: {
          line: 23,
          column: 47
        }
      },
      "4": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 15
        }
      },
      "5": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 75
        }
      },
      "6": {
        start: {
          line: 39,
          column: 19
        },
        end: {
          line: 39,
          column: 21
        }
      },
      "7": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 44,
          column: 7
        }
      },
      "8": {
        start: {
          line: 42,
          column: 21
        },
        end: {
          line: 42,
          column: 29
        }
      },
      "9": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 43,
          column: 68
        }
      },
      "10": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        loc: {
          start: {
            line: 13,
            column: 43
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 25
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        loc: {
          start: {
            line: 30,
            column: 21
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 30
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        loc: {
          start: {
            line: 38,
            column: 17
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 38
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 41,
            column: 29
          },
          end: {
            line: 41,
            column: 30
          }
        },
        loc: {
          start: {
            line: 41,
            column: 36
          },
          end: {
            line: 44,
            column: 5
          }
        },
        line: 41
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 43,
            column: 17
          },
          end: {
            line: 43,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 43,
            column: 26
          },
          end: {
            line: 43,
            column: 56
          }
        }, {
          start: {
            line: 43,
            column: 59
          },
          end: {
            line: 43,
            column: 67
          }
        }],
        line: 43
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
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d15b334b6494f306ab5edfa6931489091bd8c1f4"
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
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var Utils = (cov_1pllr0hbbr.s[0]++, {
  /**
   * @description - validate password by comparing password with hash password
   * @param {string} password
   * @param {string} hashpassword
   * @returns {boolean} boolean to show if password match or not
   */
  validatePassword: function validatePassword(password, userPassword) {
    cov_1pllr0hbbr.f[0]++;
    cov_1pllr0hbbr.s[1]++;
    return _bcrypt["default"].compareSync(password, userPassword);
  },

  /**
   * @description - encypt password
   * @param {object} password
   * @returns {object} hashpassword
   */
  hashPassword: function hashPassword(password) {
    cov_1pllr0hbbr.f[1]++;
    var salt = (cov_1pllr0hbbr.s[2]++, _bcrypt["default"].genSaltSync(15));
    var pwd = (cov_1pllr0hbbr.s[3]++, _bcrypt["default"].hashSync(password, salt));
    cov_1pllr0hbbr.s[4]++;
    return pwd;
  },

  /**
   * @description - signs token
   * @param {object} payload
   */
  jwtSigner: function jwtSigner(payload) {
    cov_1pllr0hbbr.f[2]++;
    cov_1pllr0hbbr.s[5]++;
    return _jsonwebtoken["default"].sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
  },

  /**
   * @description - remove null key from ab object
   * @param {object}
   * @returns {object}
   */
  stripNull: function stripNull(obj) {
    cov_1pllr0hbbr.f[3]++;
    var cleanObj = (cov_1pllr0hbbr.s[6]++, {});
    cov_1pllr0hbbr.s[7]++;
    Object.keys(obj).forEach(function (val) {
      cov_1pllr0hbbr.f[4]++;
      var newVal = (cov_1pllr0hbbr.s[8]++, obj[val]);
      cov_1pllr0hbbr.s[9]++;
      cleanObj = newVal ? (cov_1pllr0hbbr.b[0][0]++, _objectSpread(_objectSpread({}, cleanObj), {}, (0, _defineProperty2["default"])({}, val, newVal))) : (cov_1pllr0hbbr.b[0][1]++, cleanObj);
    });
    cov_1pllr0hbbr.s[10]++;
    return cleanObj;
  }
});
var _default = Utils;
exports["default"] = _default;
//# sourceMappingURL=common.js.map