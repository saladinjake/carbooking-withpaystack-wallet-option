"use strict";

var cov_1pllr0hbbr = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\utils\\common.js";
  var hash = "16b5712f8f9310d5599e4f2a00104be694ffd75b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\utils\\common.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 14
        },
        end: {
          line: 47,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 54
        }
      },
      "2": {
        start: {
          line: 21,
          column: 17
        },
        end: {
          line: 21,
          column: 39
        }
      },
      "3": {
        start: {
          line: 22,
          column: 16
        },
        end: {
          line: 22,
          column: 47
        }
      },
      "4": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 15
        }
      },
      "5": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 75
        }
      },
      "6": {
        start: {
          line: 38,
          column: 19
        },
        end: {
          line: 38,
          column: 21
        }
      },
      "7": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 43,
          column: 7
        }
      },
      "8": {
        start: {
          line: 41,
          column: 21
        },
        end: {
          line: 41,
          column: 29
        }
      },
      "9": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 68
        }
      },
      "10": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 43
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 25
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 21
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 29
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        loc: {
          start: {
            line: 37,
            column: 17
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 37
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 40,
            column: 29
          },
          end: {
            line: 40,
            column: 30
          }
        },
        loc: {
          start: {
            line: 40,
            column: 38
          },
          end: {
            line: 43,
            column: 5
          }
        },
        line: 40
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 42,
            column: 17
          },
          end: {
            line: 42,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 42,
            column: 26
          },
          end: {
            line: 42,
            column: 56
          }
        }, {
          start: {
            line: 42,
            column: 59
          },
          end: {
            line: 42,
            column: 67
          }
        }],
        line: 42
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
    hash: "16b5712f8f9310d5599e4f2a00104be694ffd75b"
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      cleanObj = newVal ? (cov_1pllr0hbbr.b[0][0]++, _objectSpread({}, cleanObj, (0, _defineProperty2["default"])({}, val, newVal))) : (cov_1pllr0hbbr.b[0][1]++, cleanObj);
    });
    cov_1pllr0hbbr.s[10]++;
    return cleanObj;
  }
});
var _default = Utils;
exports["default"] = _default;
//# sourceMappingURL=common.js.map