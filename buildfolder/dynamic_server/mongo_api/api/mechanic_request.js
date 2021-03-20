"use strict";

var cov_eehklxtnr = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\mechanic_request.js";
  var hash = "ba0e8d1fcd7f16255637f479682c172a2691a549";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\mechanic_request.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 25
        }
      },
      "1": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 20,
          column: 6
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 26,
          column: 6
        }
      },
      "3": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 32,
          column: 6
        }
      },
      "4": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 40,
          column: 6
        }
      },
      "5": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 23
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
            column: 22
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 10
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
            column: 17
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 15
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
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ba0e8d1fcd7f16255637f479682c172a2691a549"
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

var _mech_controller = _interopRequireDefault(require("../controllers/mech_controller"));

var _user_sanitizer = _interopRequireDefault(require("../middlewares/user_sanitizer"));

var _token_validator = _interopRequireDefault(require("../middlewares/token_validator"));

var _post_sanitizer = _interopRequireDefault(require("../middlewares/post_sanitizer"));

var MechanicRoutes =
/*#__PURE__*/
function () {
  function MechanicRoutes(router) {
    (0, _classCallCheck2["default"])(this, MechanicRoutes);
    cov_eehklxtnr.f[0]++;
    cov_eehklxtnr.s[0]++;
    // super(router);
    this.router = router;
  }

  (0, _createClass2["default"])(MechanicRoutes, [{
    key: "attachRoutes",
    value: function attachRoutes() {
      cov_eehklxtnr.f[1]++;
      cov_eehklxtnr.s[1]++;
      this.router.post('/mechanic-request', _token_validator["default"].userAuthentication, _mech_controller["default"].create);
      cov_eehklxtnr.s[2]++;
      this.router.get('/mechanic-request/:id/users', _token_validator["default"].userAuthentication, _mech_controller["default"].users);
      cov_eehklxtnr.s[3]++;
      this.router.get('/mechanic-request', _token_validator["default"].userAuthentication, _mech_controller["default"].all);
      cov_eehklxtnr.s[4]++;
      this.router.patch("/mech-request/:id/update", _token_validator["default"].userAuthentication, _mech_controller["default"].update);
      cov_eehklxtnr.s[5]++;
      return this.router;
    }
  }]);
  return MechanicRoutes;
}();

var _default = MechanicRoutes;
exports["default"] = _default;
//# sourceMappingURL=mechanic_request.js.map