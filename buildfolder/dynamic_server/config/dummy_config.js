"use strict";

var cov_2dcmrd7rfs = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\config\\dummy_config.js";
  var hash = "6914778c7f51b1e1060ce8f2c8ba00331de53300";
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
          line: 55,
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
    hash: "6914778c7f51b1e1060ce8f2c8ba00331de53300"
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

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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