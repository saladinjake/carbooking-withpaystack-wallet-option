"use strict";

var cov_5y3abaixo = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\mech_controller.js";
  var hash = "22d202356289883869a70f48ffec8867cd76cab5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\mech_controller.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 49
        }
      },
      "1": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 46
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 48
        }
      },
      "3": {
        start: {
          line: 20,
          column: 3
        },
        end: {
          line: 20,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 35
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        loc: {
          start: {
            line: 11,
            column: 32
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
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
            column: 34
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 15
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 33
          },
          end: {
            line: 21,
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
    hash: "22d202356289883869a70f48ffec8867cd76cab5"
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

var _mech_service = require("../services/mech_service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MechController =
/*#__PURE__*/
function () {
  function MechController() {
    _classCallCheck(this, MechController);
  }

  _createClass(MechController, null, [{
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