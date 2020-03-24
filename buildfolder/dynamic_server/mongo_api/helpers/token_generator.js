"use strict";

var cov_8wuqwto73 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\token_generator.js";
  var hash = "2c4972ff0ad9eabb50f99efd1e244927fb85a75a";
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
          line: 9,
          column: 18
        },
        end: {
          line: 11,
          column: 6
        }
      },
      "2": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 17
        }
      },
      "3": {
        start: {
          line: 16,
          column: 27
        },
        end: {
          line: 16,
          column: 56
        }
      },
      "4": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 26
        }
      },
      "5": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 8,
            column: 3
          }
        },
        loc: {
          start: {
            line: 8,
            column: 29
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        loc: {
          start: {
            line: 15,
            column: 32
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
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
            column: 56
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 20
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
    hash: "2c4972ff0ad9eabb50f99efd1e244927fb85a75a"
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
exports.TokenGenerator = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

cov_8wuqwto73.s[0]++;

_dotenv["default"].config();

var TokenGenerator =
/*#__PURE__*/
function () {
  function TokenGenerator() {
    _classCallCheck(this, TokenGenerator);
  }

  _createClass(TokenGenerator, null, [{
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
      var hashedPassword = (cov_8wuqwto73.s[3]++, _bcryptjs["default"].hashSync(password, 10));
      cov_8wuqwto73.s[4]++;
      return hashedPassword;
    }
  }, {
    key: "checkIfPasswordMatch",
    value: function checkIfPasswordMatch(hashedPassword, password) {
      cov_8wuqwto73.f[2]++;
      cov_8wuqwto73.s[5]++;
      // console.log(bcrypt.compareSync(hashedPassword, password))
      return _bcryptjs["default"].compareSync(hashedPassword, password);
    }
  }]);

  return TokenGenerator;
}();

exports.TokenGenerator = TokenGenerator;
//# sourceMappingURL=token_generator.js.map