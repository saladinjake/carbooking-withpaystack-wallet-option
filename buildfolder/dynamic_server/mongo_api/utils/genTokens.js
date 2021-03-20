"use strict";

var cov_1sjqpivp6w = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\utils\\genTokens.js";
  var hash = "c8bd20bb6cc65351d01712f33cceed96f6db3f4c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\utils\\genTokens.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 2,
          column: 16
        }
      },
      "1": {
        start: {
          line: 3,
          column: 10
        },
        end: {
          line: 3,
          column: 33
        }
      },
      "2": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "3": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 11,
          column: 11
        }
      },
      "4": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 23,
          column: 2
        }
      },
      "5": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 40
        }
      },
      "6": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 20
        }
      },
      "7": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 47
        }
      },
      "8": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 60
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 18
          },
          end: {
            line: 5,
            column: 19
          }
        },
        loc: {
          start: {
            line: 5,
            column: 33
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 17
          },
          end: {
            line: 15,
            column: 18
          }
        },
        loc: {
          start: {
            line: 15,
            column: 42
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
            line: 19,
            column: 13
          },
          end: {
            line: 19,
            column: 14
          }
        },
        loc: {
          start: {
            line: 19,
            column: 32
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 19
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c8bd20bb6cc65351d01712f33cceed96f6db3f4c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

cov_1sjqpivp6w.s[0]++;

_dotenv["default"].config();

var jwt = (cov_1sjqpivp6w.s[1]++, require('jsonwebtoken'));
cov_1sjqpivp6w.s[2]++;

var createToken = function createToken(auth) {
  cov_1sjqpivp6w.f[0]++;
  cov_1sjqpivp6w.s[3]++;
  return jwt.sign({
    id: auth.id
  }, process.env.SECRET, {
    expiresIn: 60 * 120
  });
};

cov_1sjqpivp6w.s[4]++;
module.exports = {
  generateToken: function generateToken(req, res, next) {
    cov_1sjqpivp6w.f[1]++;
    cov_1sjqpivp6w.s[5]++;
    req.token = createToken(req.auth);
    cov_1sjqpivp6w.s[6]++;
    return next();
  },
  sendToken: function sendToken(req, res) {
    cov_1sjqpivp6w.f[2]++;
    cov_1sjqpivp6w.s[7]++;
    res.setHeader('x-auth-token', req.token);
    cov_1sjqpivp6w.s[8]++;
    return res.status(200).send(JSON.stringify(req.user));
  }
};
//# sourceMappingURL=genTokens.js.map