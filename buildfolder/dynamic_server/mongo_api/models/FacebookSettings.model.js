'use strict';

var cov_15l6vld4mw = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\FacebookSettings.model.js";
  var hash = "c880e3059e3d4069f41c9a9833c6964b8b16f9ea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\FacebookSettings.model.js",
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
          column: 28
        },
        end: {
          line: 39,
          column: 2
        }
      },
      "2": {
        start: {
          line: 41,
          column: 0
        },
        end: {
          line: 41,
          column: 69
        }
      },
      "3": {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 51,
          column: 2
        }
      },
      "4": {
        start: {
          line: 47,
          column: 14
        },
        end: {
          line: 47,
          column: 49
        }
      },
      "5": {
        start: {
          line: 53,
          column: 0
        },
        end: {
          line: 53,
          column: 79
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 46,
            column: 12
          },
          end: {
            line: 46,
            column: 13
          }
        },
        loc: {
          start: {
            line: 46,
            column: 41
          },
          end: {
            line: 48,
            column: 13
          }
        },
        line: 46
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
    hash: "c880e3059e3d4069f41c9a9833c6964b8b16f9ea"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Promise = (cov_15l6vld4mw.s[0]++, require('bluebird'));
var FacebookSettingSchema = (cov_15l6vld4mw.s[1]++, new _mongoose["default"].Schema({
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
    "default": "facebook"
  }
}, {
  collection: 'facebooksv_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_15l6vld4mw.s[2]++;
FacebookSettingSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
cov_15l6vld4mw.s[3]++;
FacebookSettingSchema.statics = {
  // Add Intervention
  addSettings: function addSettings(user, callback) {
    cov_15l6vld4mw.f[0]++;
    cov_15l6vld4mw.s[4]++;
    return this.create(user, callback);
  }
};
cov_15l6vld4mw.s[5]++;
module.exports = _mongoose["default"].model('FacebookSettingModel', FacebookSettingSchema);
//# sourceMappingURL=FacebookSettings.model.js.map