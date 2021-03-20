'use strict';

var cov_tjtdhws0a = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\GmailSettings.model.js";
  var hash = "5eac017b0628134e62cbc17b3bc0b6596ab62298";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\GmailSettings.model.js",
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
          line: 5,
          column: 25
        },
        end: {
          line: 41,
          column: 2
        }
      },
      "2": {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 43,
          column: 66
        }
      },
      "3": {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 53,
          column: 2
        }
      },
      "4": {
        start: {
          line: 49,
          column: 14
        },
        end: {
          line: 49,
          column: 49
        }
      },
      "5": {
        start: {
          line: 57,
          column: 0
        },
        end: {
          line: 57,
          column: 73
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 48,
            column: 12
          },
          end: {
            line: 48,
            column: 13
          }
        },
        loc: {
          start: {
            line: 48,
            column: 43
          },
          end: {
            line: 50,
            column: 13
          }
        },
        line: 48
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "5eac017b0628134e62cbc17b3bc0b6596ab62298"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_tjtdhws0a.s[0]++, require('bluebird'));
var GmailSettingSchema = (cov_tjtdhws0a.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: Number,
    "default": 0
  },
  api_mode: {
    type: String,
    "default": "test"
  },
  test_secret_key: {
    type: String
  },
  test_public_key: {
    type: String,
    "default": "NO KEY SET YET"
  },
  live_secret_key: {
    type: String,
    "default": "NO KEY SET YET"
  },
  live_public_key: {
    type: String,
    "default": "NO KEY SET YET"
  },
  settings_type: {
    type: String,
    "default": "google"
  }
}, {
  collection: 'google_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_tjtdhws0a.s[2]++;
GmailSettingSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
cov_tjtdhws0a.s[3]++;
GmailSettingSchema.statics = {
  // Add Intervention
  addSettings: function addSettings(user, callback) {
    cov_tjtdhws0a.f[0]++;
    cov_tjtdhws0a.s[4]++;
    return this.create(user, callback);
  }
};
cov_tjtdhws0a.s[5]++;
module.exports = _mongoose["default"].model('GmailSettingModel', GmailSettingSchema);
//# sourceMappingURL=GmailSettings.model.js.map