"use strict";

var cov_5atryx1l5 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\config\\vars.js";
  var hash = "d7d6a369174794216dae5a8b891944d021ca9531";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\config\\vars.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 3,
          column: 16
        }
      },
      "1": {
        start: {
          line: 4,
          column: 13
        },
        end: {
          line: 4,
          column: 28
        }
      },
      "2": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 25,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 22,
            column: 29
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 21,
            column: 8
          },
          end: {
            line: 21,
            column: 35
          }
        }, {
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 22,
            column: 29
          }
        }],
        line: 20
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 8
          },
          end: {
            line: 24,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 24,
            column: 48
          },
          end: {
            line: 24,
            column: 58
          }
        }, {
          start: {
            line: 24,
            column: 61
          },
          end: {
            line: 24,
            column: 66
          }
        }],
        line: 24
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d7d6a369174794216dae5a8b891944d021ca9531"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

cov_5atryx1l5.s[0]++;

_dotenv["default"].config();

var path = (cov_5atryx1l5.s[1]++, require('path')); // import .env variables
// require('dotenv-safe').load({
//   path: path.join(__dirname, '../../.env'),
//   sample: path.join(__dirname, '../../.env.example'),
// });

cov_5atryx1l5.s[2]++;
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  masterAccount: process.env.MASTER_ACCOUNT_NUMBER,
  masterAccountPassword: process.env.MASTER_ACCOUNT_PASSWORD,
  mongo: {
    uri: process.env.NODE_ENV === 'test' ? (cov_5atryx1l5.b[0][0]++, process.env.MONGO_URI_TESTS) : (cov_5atryx1l5.b[0][1]++, process.env.MONGO_URI)
  },
  logs: process.env.NODE_ENV === 'production' ? (cov_5atryx1l5.b[1][0]++, 'combined') : (cov_5atryx1l5.b[1][1]++, 'dev')
};
//# sourceMappingURL=vars.js.map