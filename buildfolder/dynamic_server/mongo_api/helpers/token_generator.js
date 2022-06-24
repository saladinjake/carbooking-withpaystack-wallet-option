"use strict";

var cov_8wuqwto73 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\token_generator.js";
  var hash = "813e2e98d91e11542a3941a37e242b2a10668873";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\token_generator.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 16
        }
      },
      "1": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 13,
          column: 6
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 17
        }
      },
      "3": {
        start: {
          line: 18,
          column: 27
        },
        end: {
          line: 18,
          column: 56
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 26
        }
      },
      "5": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 29
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 32
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 56
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "813e2e98d91e11542a3941a37e242b2a10668873"
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
exports.TokenGenerator = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

cov_8wuqwto73.s[0]++;

_dotenv["default"].config();
/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/


var TokenGenerator = /*#__PURE__*/function () {
  function TokenGenerator() {
    (0, _classCallCheck2["default"])(this, TokenGenerator);
  }

  (0, _createClass2["default"])(TokenGenerator, null, [{
    key: "generateToken",
    value: function generateToken(data) {
      cov_8wuqwto73.f[0]++;
      var token = (cov_8wuqwto73.s[1]++, _jsonwebtoken["default"].sign(data, process.env.SECRET, {
        expiresIn: '48h'
      }));
      cov_8wuqwto73.s[2]++;
      return token;
    }
  }, {
    key: "hashPassword",
    value: function hashPassword(password) {
      cov_8wuqwto73.f[1]++;
      var hashedPassword = (cov_8wuqwto73.s[3]++, _bcrypt["default"].hashSync(password, 10));
      cov_8wuqwto73.s[4]++;
      return hashedPassword;
    }
  }, {
    key: "checkIfPasswordMatch",
    value: function checkIfPasswordMatch(hashedPassword, password) {
      cov_8wuqwto73.f[2]++;
      cov_8wuqwto73.s[5]++;
      // console.log(bcrypt.compareSync(hashedPassword, password))
      return _bcrypt["default"].compareSync(hashedPassword, password);
    }
  }]);
  return TokenGenerator;
}();

exports.TokenGenerator = TokenGenerator;
//# sourceMappingURL=token_generator.js.map