'use strict';

var cov_2ek0xyvy = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Token.model.js";
  var hash = "abb4caa6b8e03a88f467e13159ac27be2ef04381";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Token.model.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 16
        },
        end: {
          line: 2,
          column: 35
        }
      },
      "1": {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 11,
          column: 2
        }
      },
      "2": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 29
        }
      },
      "3": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
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
    hash: "abb4caa6b8e03a88f467e13159ac27be2ef04381"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_2ek0xyvy.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
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