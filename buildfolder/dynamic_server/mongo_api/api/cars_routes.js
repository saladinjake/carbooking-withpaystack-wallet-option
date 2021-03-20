"use strict";

var cov_2g7z20oau0 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\cars_routes.js";
  var hash = "af6d2d5f41d8c40bf54089936d47e7fa66700926";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\cars_routes.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 28
        },
        end: {
          line: 7,
          column: 35
        }
      },
      "1": {
        start: {
          line: 8,
          column: 34
        },
        end: {
          line: 8,
          column: 45
        }
      },
      "2": {
        start: {
          line: 9,
          column: 30
        },
        end: {
          line: 9,
          column: 50
        }
      },
      "3": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 25
        }
      },
      "4": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 25,
          column: 6
        }
      },
      "5": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 31,
          column: 6
        }
      },
      "6": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 23
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
            column: 22
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 17
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 18
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "af6d2d5f41d8c40bf54089936d47e7fa66700926"
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

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _cars_controller = _interopRequireDefault(require("../controllers/cars_controller"));

var _token_validator = _interopRequireDefault(require("../middlewares/token_validator"));

var _post_sanitizer = _interopRequireDefault(require("../middlewares/post_sanitizer"));

// import BridgeRoutes from './routes';
var SUBMIT_REDFLAG_LINK = (cov_2g7z20oau0.s[0]++, '/cars');
var REDFLAG_GET_SPECIFIC_LINK = (cov_2g7z20oau0.s[1]++, '/cars/:id');
var REDFLAG_LOCATION_LINK = (cov_2g7z20oau0.s[2]++, '/cars/:id/partners');

var CarsRoutes =
/*#__PURE__*/
function () {
  function CarsRoutes(router) {
    (0, _classCallCheck2["default"])(this, CarsRoutes);
    cov_2g7z20oau0.f[0]++;
    cov_2g7z20oau0.s[3]++;
    // super(router);
    this.router = router;
  }

  (0, _createClass2["default"])(CarsRoutes, [{
    key: "attachRoutes",
    value: function attachRoutes() {
      cov_2g7z20oau0.f[1]++;
      cov_2g7z20oau0.s[4]++;
      this.router.post('/cars', _token_validator["default"].userAuthentication, _cars_controller["default"].createCarProfile);
      cov_2g7z20oau0.s[5]++;
      this.router.get('/cars', _token_validator["default"].userAuthentication, _cars_controller["default"].getAllCars);
      cov_2g7z20oau0.s[6]++;
      return this.router;
    }
  }]);
  return CarsRoutes;
}();

var _default = CarsRoutes;
exports["default"] = _default;
//# sourceMappingURL=cars_routes.js.map