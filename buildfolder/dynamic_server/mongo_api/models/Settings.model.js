'use strict';

var cov_23tmii9jel = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Settings.model.js";
  var hash = "9da1032df910f8aef98a7d731a6ab8e5770db370";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Settings.model.js",
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
          column: 20
        },
        end: {
          line: 51,
          column: 1
        }
      },
      "2": {
        start: {
          line: 53,
          column: 0
        },
        end: {
          line: 53,
          column: 63
        }
      },
      "3": {
        start: {
          line: 55,
          column: 0
        },
        end: {
          line: 55,
          column: 63
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
    hash: "9da1032df910f8aef98a7d731a6ab8e5770db370"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_23tmii9jel.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var SettingSchema = (cov_23tmii9jel.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: Number,
    "default": 0
  },
  ssl_mode: {
    type: Boolean,
    required: true
  },
  general_email: {
    type: String,
    required: true
  },
  smtp_username: {
    type: String,
    required: true
  },
  smtp_password: {
    type: String,
    required: true
  },
  offline_message: {
    type: Number
  },
  status: {
    type: String,
    "enum": ['offline', 'online']
  },
  logo: {
    type: String
  },
  slogan: {
    type: String
  },
  footer_content: {
    type: String
  },
  created_at: {
    type: Date,
    "default": Date.now
  },
  updated_at: {
    type: Date,
    "default": Date.now
  }
}, {
  collection: 'setting_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_23tmii9jel.s[2]++;
SettingSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
cov_23tmii9jel.s[3]++;
module.exports = _mongoose["default"].model('SettingModel', SettingSchema);
//# sourceMappingURL=Settings.model.js.map