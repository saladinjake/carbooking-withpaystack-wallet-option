'use strict';

var cov_2ek0xyvy = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Token.model.js";
  var hash = "adc855aaebc435b995d40f528771c17425774b87";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Token.model.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 16
        },
        end: {
          line: 5,
          column: 35
        }
      },
      "1": {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "2": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 21,
          column: 9
        }
      },
      "3": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 65
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "adc855aaebc435b995d40f528771c17425774b87"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Promise = (cov_2ek0xyvy.s[0]++, require('bluebird'));
var SignUpTokenSchema = (cov_2ek0xyvy.s[1]++, new _mongoose["default"].Schema({
  _userId: {
    type: String
  },
  email_confirm_token: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    "default": Date.now,
    expires: 43200
  }
}));
/**
 * Methods
 */

cov_2ek0xyvy.s[2]++;
SignUpTokenSchema.method({});
cov_2ek0xyvy.s[3]++;
module.exports = _mongoose["default"].model('TokenModel', SignUpTokenSchema);
//# sourceMappingURL=Token.model.js.map