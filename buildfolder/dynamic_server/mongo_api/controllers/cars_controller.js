"use strict";

var cov_2m97gfmayr = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\cars_controller.js";
  var hash = "9f145c59008da4a7273cf4b79aefa7f431d3c00e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\cars_controller.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 59
        }
      },
      "1": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 53
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 49
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 51
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
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
            column: 45
          },
          end: {
            line: 7,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 39
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
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
            column: 35
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 13
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 37
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 17
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 38
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 21
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
    hash: "9f145c59008da4a7273cf4b79aefa7f431d3c00e"
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
exports["default"] = void 0;

var _cars_services = require("../services/cars_services");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CarsController =
/*#__PURE__*/
function () {
  function CarsController() {
    _classCallCheck(this, CarsController);
  }

  _createClass(CarsController, null, [{
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