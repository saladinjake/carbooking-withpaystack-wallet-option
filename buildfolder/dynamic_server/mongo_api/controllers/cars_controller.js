"use strict";

var cov_2m97gfmayr = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\cars_controller.js";
  var hash = "62f37f509fb0b5b094bd7f1f5968eaf35b85ba55";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\cars_controller.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 59
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 53
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 49
        }
      },
      "3": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 51
        }
      },
      "4": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 60
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
            column: 45
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
            column: 39
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
            column: 35
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
            column: 37
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 18
      },
      "4": {
        name: "(anonymous_4)",
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
            column: 38
          },
          end: {
            line: 24,
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
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "62f37f509fb0b5b094bd7f1f5968eaf35b85ba55"
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

var _cars_services = require("../services/cars_services");

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var CarsController = /*#__PURE__*/function () {
  function CarsController() {
    (0, _classCallCheck2["default"])(this, CarsController);
  }

  (0, _createClass2["default"])(CarsController, null, [{
    key: "createCarProfile",
    value: function createCarProfile(request, response) {
      cov_2m97gfmayr.f[0]++;
      cov_2m97gfmayr.s[0]++;
      return _cars_services.CarsService.createCarProfile(request, response);
    }
  }, {
    key: "getAllCars",
    value: function getAllCars(request, response) {
      cov_2m97gfmayr.f[1]++;
      cov_2m97gfmayr.s[1]++;
      return _cars_services.CarsService.getAllCars(request, response);
    }
  }, {
    key: "carsId",
    value: function carsId(request, response) {
      cov_2m97gfmayr.f[2]++;
      cov_2m97gfmayr.s[2]++;
      return _cars_services.CarsService.carsId(request, response);
    }
  }, {
    key: "editCars",
    value: function editCars(request, response) {
      cov_2m97gfmayr.f[3]++;
      cov_2m97gfmayr.s[3]++;
      return _cars_services.CarsService.editCars(request, response);
    }
  }, {
    key: "usersCars",
    value: function usersCars(request, response) {
      cov_2m97gfmayr.f[4]++;
      cov_2m97gfmayr.s[4]++;
      return _cars_services.CarsService.usersSelectedCars(request, response);
    }
  }]);
  return CarsController;
}();

exports["default"] = CarsController;
//# sourceMappingURL=cars_controller.js.map