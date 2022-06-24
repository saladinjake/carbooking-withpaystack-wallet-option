'use strict';

var cov_xurvbbhcn = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\SendgridEmailSettings.model.js";
  var hash = "7980d5a082a711290f7cb898dab6c1b55b73159d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\SendgridEmailSettings.model.js",
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
          column: 33
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "2": {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 44,
          column: 76
        }
      },
      "3": {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 51,
          column: 2
        }
      },
      "4": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 39
        }
      },
      "5": {
        start: {
          line: 53,
          column: 0
        },
        end: {
          line: 53,
          column: 89
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        loc: {
          start: {
            line: 48,
            column: 30
          },
          end: {
            line: 50,
            column: 3
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
    hash: "7980d5a082a711290f7cb898dab6c1b55b73159d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_xurvbbhcn.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var SendgridEmailSettingSchema = (cov_xurvbbhcn.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: Number,
    "default": 0
  },
  api_mode: {
    type: String,
    "default": 'test'
  },
  test_secret_key: {
    type: String
  },
  test_public_key: {
    type: String,
    "default": 'NO KEY SET YET'
  },
  live_secret_key: {
    type: String,
    "default": 'NO KEY SET YET'
  },
  live_public_key: {
    type: String,
    "default": 'NO KEY SET YET'
  },
  settings_type: {
    type: String,
    "default": 'sendgrid'
  }
}, {
  collection: 'sendgrid_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_xurvbbhcn.s[2]++;
SendgridEmailSettingSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
cov_xurvbbhcn.s[3]++;
SendgridEmailSettingSchema.statics = {
  // Add Intervention
  addSettings: function addSettings(user, callback) {
    cov_xurvbbhcn.f[0]++;
    cov_xurvbbhcn.s[4]++;
    return this.create(user, callback);
  }
};
cov_xurvbbhcn.s[5]++;
module.exports = _mongoose["default"].model('SendgridEmailSettingModel', SendgridEmailSettingSchema);
//# sourceMappingURL=SendgridEmailSettings.model.js.map