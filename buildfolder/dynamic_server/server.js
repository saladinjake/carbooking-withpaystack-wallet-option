"use strict";

var cov_1w6k2ux09p = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\server.js";
  var hash = "d5f02fe408fc72a1c1ca70ab433a8ddd4a327efc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\server.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 14
        },
        end: {
          line: 8,
          column: 48
        }
      },
      "1": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 18
        }
      },
      "2": {
        start: {
          line: 10,
          column: 25
        },
        end: {
          line: 10,
          column: 42
        }
      },
      "3": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 30
        }
      },
      "4": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 32
        }
      },
      "5": {
        start: {
          line: 13,
          column: 12
        },
        end: {
          line: 13,
          column: 30
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d5f02fe408fc72a1c1ca70ab433a8ddd4a327efc"
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

var _App = _interopRequireDefault(require("./mongo_api/App"));

// import config from "./config/dummy_config";
var debug = (cov_1w6k2ux09p.s[0]++, require('debug')('commute:server'));
cov_1w6k2ux09p.s[1]++;
AppRunning = null;
var MongooseAppDemoX = (cov_1w6k2ux09p.s[2]++, new _App["default"]());
cov_1w6k2ux09p.s[3]++;
AppRunning = MongooseAppDemoX;
cov_1w6k2ux09p.s[4]++;
AppRunning.run(AppRunning.port);
var app = (cov_1w6k2ux09p.s[5]++, AppRunning.express);
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=server.js.map