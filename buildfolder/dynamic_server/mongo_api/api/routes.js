"use strict";

var cov_23fev55fba = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\routes.js";
  var hash = "88e26ceec108bc7efa5c1b3f96242701dcfbb982";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\routes.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 25
        }
      },
      "1": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 25,
          column: 6
        }
      },
      "2": {
        start: {
          line: 29,
          column: 17
        },
        end: {
          line: 32,
          column: 6
        }
      },
      "3": {
        start: {
          line: 30,
          column: 26
        },
        end: {
          line: 30,
          column: 30
        }
      },
      "4": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 35
        }
      },
      "5": {
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
            line: 26,
            column: 3
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        loc: {
          start: {
            line: 28,
            column: 17
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 52
          },
          end: {
            line: 29,
            column: 53
          }
        },
        loc: {
          start: {
            line: 29,
            column: 63
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 29
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
    hash: "88e26ceec108bc7efa5c1b3f96242701dcfbb982"
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

var _auth_routes = _interopRequireDefault(require("./auth_routes"));

var _sos_routes = _interopRequireDefault(require("./sos_routes"));

var _feedback_routes = _interopRequireDefault(require("./feedback_routes"));

var _user_routes = _interopRequireDefault(require("./user_routes"));

var _api_uploads = _interopRequireDefault(require("./api_uploads"));

var _cars_routes = _interopRequireDefault(require("./cars_routes"));

var _faqs_routes = _interopRequireDefault(require("./faqs_routes"));

var _mechanic_request = _interopRequireDefault(require("./mechanic_request"));

var _driver_routes = _interopRequireDefault(require("./driver_routes"));

var BridgeRoutes =
/*#__PURE__*/
function () {
  function BridgeRoutes(router) {
    (0, _classCallCheck2["default"])(this, BridgeRoutes);
    cov_23fev55fba.f[0]++;
    cov_23fev55fba.s[0]++;
    this.router = router;
    cov_23fev55fba.s[1]++;
    this.CoreRoutes = {
      Auth: new _auth_routes["default"](this.router),
      RedFlags: new _sos_routes["default"](this.router),
      InterVentions: new _feedback_routes["default"](this.router),
      Users: new _user_routes["default"](this.router),
      Uploads: new _api_uploads["default"](this.router),
      CarsRoutes: new _cars_routes["default"](this.router),
      MechanicRoutes: new _mechanic_request["default"](this.router),
      FaqRoutes: new _faqs_routes["default"](this.router),
      DriverRoute: new _driver_routes["default"](this.router)
    };
  }

  (0, _createClass2["default"])(BridgeRoutes, [{
    key: "attachRoutes",
    value: function attachRoutes() {
      cov_23fev55fba.f[1]++;
      var keys = (cov_23fev55fba.s[2]++, Object.values(this.CoreRoutes).map(function (item) {
        cov_23fev55fba.f[2]++;
        var classInstance = (cov_23fev55fba.s[3]++, item);
        cov_23fev55fba.s[4]++;
        classInstance.attachRoutes();
      }));
      cov_23fev55fba.s[5]++;
      return this.router;
    }
  }]);
  return BridgeRoutes;
}();

var _default = BridgeRoutes;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map