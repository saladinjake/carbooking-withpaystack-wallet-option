'use strict';

var cov_1mfyciiwey = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\ForgotPassword.model.js";
  var hash = "bc3cfda5cb9adeab04f0c1ff1c9c8ec7fc6b0343";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\ForgotPassword.model.js",
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
          line: 4,
          column: 32
        },
        end: {
          line: 9,
          column: 2
        }
      },
      "2": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 87
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "bc3cfda5cb9adeab04f0c1ff1c9c8ec7fc6b0343"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_1mfyciiwey.s[0]++, require('bluebird'));
var PasswordForgotTokenSchema = (cov_1mfyciiwey.s[1]++, new _mongoose["default"].Schema({
  _userId: {
    type: Number
  },
  email_confirm_token: {
    type: String,
    required: true
  },
  email_to_reset: {
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
cov_1mfyciiwey.s[2]++;
module.exports = _mongoose["default"].model('PasswordForgotTokenModel', PasswordForgotTokenSchema);
/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
//# sourceMappingURL=ForgotPassword.model.js.map