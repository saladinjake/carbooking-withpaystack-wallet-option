"use strict";

var cov_5y3abaixo = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\mech_controller.js";
  var hash = "4865245e5e8f3894a4929efbe8f7f5dae76ea972";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\mech_controller.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 49
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 46
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 48
        }
      },
      "3": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 49
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        loc: {
          start: {
            line: 6,
            column: 35
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 32
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 34
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 35
          },
          end: {
            line: 20,
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
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4865245e5e8f3894a4929efbe8f7f5dae76ea972"
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

var _mech_service = require("../services/mech_service");

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var MechController = /*#__PURE__*/function () {
  function MechController() {
    (0, _classCallCheck2["default"])(this, MechController);
  }

  (0, _createClass2["default"])(MechController, null, [{
    key: "create",
    value: function create(request, response) {
      cov_5y3abaixo.f[0]++;
      cov_5y3abaixo.s[0]++;
      return _mech_service.MechService.create(request, response);
    }
  }, {
    key: "all",
    value: function all(request, response) {
      cov_5y3abaixo.f[1]++;
      cov_5y3abaixo.s[1]++;
      return _mech_service.MechService.all(request, response);
    }
  }, {
    key: "users",
    value: function users(request, response) {
      cov_5y3abaixo.f[2]++;
      cov_5y3abaixo.s[2]++;
      return _mech_service.MechService.users(request, response);
    }
  }, {
    key: "update",
    value: function update(request, response) {
      cov_5y3abaixo.f[3]++;
      cov_5y3abaixo.s[3]++;
      return _mech_service.MechService.update(request, response);
    }
  }]);
  return MechController;
}();

exports["default"] = MechController;
//# sourceMappingURL=mech_controller.js.map