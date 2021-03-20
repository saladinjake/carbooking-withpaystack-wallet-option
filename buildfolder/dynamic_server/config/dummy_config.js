"use strict";

var cov_2dcmrd7rfs = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\config\\dummy_config.js";
  var hash = "0011aad0bc3c816254ccbe9514f98be1642a5099";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\config\\dummy_config.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 3,
          column: 16
        }
      },
      "1": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 56,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "0011aad0bc3c816254ccbe9514f98be1642a5099"
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

var _dotenv = _interopRequireDefault(require("dotenv"));

cov_2dcmrd7rfs.s[0]++;

_dotenv["default"].config();

var config = (cov_2dcmrd7rfs.s[1]++, {
  demo: {
    appMode: 'dummy_api',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database_type: 'dummy_array',
    max: 20,
    idleTimeoutInMillisec: 30000,
    connectionTimeoutInMillisec: 2000
  },
  development: {
    appMode: 'development',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database_type: 'postgres',
    max: 20,
    idleTimeoutInMillisec: 30000,
    connectionTimeoutInMillisec: 2000
  },
  test: {
    appMode: 'test',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_TEST_URL,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database_type: 'dummy_array',
    max: 20,
    idleTimeoutInMillisec: 30000,
    connectionTimeoutInMillisec: 2000
  },
  production: {
    appMode: 'deploy',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database_type: 'dummy_array',
    max: 20,
    idleTimeoutInMillisec: 30000,
    connectionTimeoutInMillisec: 2000
  }
});
var _default = config;
exports["default"] = _default;
//# sourceMappingURL=dummy_config.js.map