"use strict";

var cov_204u5nm94n = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\search_routes.js";
  var hash = "41ca7117484b437a3817fef6a55f93c1eedfaca7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\search_routes.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 25
        }
      },
      "1": {
        start: {
          line: 8,
          column: 15
        },
        end: {
          line: 8,
          column: 19
        }
      },
      "2": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 22
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 17
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "41ca7117484b437a3817fef6a55f93c1eedfaca7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _intervention_controller = _interopRequireDefault(require("../controllers/intervention_controller"));

var ApiSearch =
/*#__PURE__*/
function () {
  function ApiSearch(router) {
    (0, _classCallCheck2["default"])(this, ApiSearch);
    cov_204u5nm94n.f[0]++;
    cov_204u5nm94n.s[0]++;
    this.router = router;
    var that = (cov_204u5nm94n.s[1]++, this);
  }

  (0, _createClass2["default"])(ApiSearch, [{
    key: "attachRoutes",
    value: function attachRoutes() {
      cov_204u5nm94n.f[1]++;
      cov_204u5nm94n.s[2]++;
      this.router.post('/search', _intervention_controller["default"].activateSearch);
    }
  }]);
  return ApiSearch;
}();
//# sourceMappingURL=search_routes.js.map