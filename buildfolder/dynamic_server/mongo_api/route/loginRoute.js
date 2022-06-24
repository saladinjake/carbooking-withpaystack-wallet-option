"use strict";

var cov_2err0m5t6j = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\route\\loginRoute.js";
  var hash = "a2480c92bbe848f36dae49bd44c68a88fc9d6286";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\route\\loginRoute.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 16
        },
        end: {
          line: 1,
          column: 34
        }
      },
      "1": {
        start: {
          line: 2,
          column: 15
        },
        end: {
          line: 2,
          column: 31
        }
      },
      "2": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 6,
          column: 3
        }
      },
      "3": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 61
        }
      },
      "4": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 23
          },
          end: {
            line: 4,
            column: 24
          }
        },
        loc: {
          start: {
            line: 4,
            column: 43
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a2480c92bbe848f36dae49bd44c68a88fc9d6286"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var express = (cov_2err0m5t6j.s[0]++, require('express'));
var router = (cov_2err0m5t6j.s[1]++, express.Router());
cov_2err0m5t6j.s[2]++;
router.route('/').post(function (req, res, next) {
  cov_2err0m5t6j.f[0]++;
  cov_2err0m5t6j.s[3]++;
  username = localStorage.setItem('user', req.body.username);
});
cov_2err0m5t6j.s[4]++;
module.exports = router;
//# sourceMappingURL=loginRoute.js.map