'use strict';

var cov_1uyjzqwcco = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\PaystackSettings.model.js";
  var hash = "5a88e0b4e54cb14d563de5025ce77f702f340073";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\PaystackSettings.model.js",
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
          column: 28
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
          column: 71
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
          column: 79
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
    hash: "5a88e0b4e54cb14d563de5025ce77f702f340073"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_1uyjzqwcco.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var PaystackSettingSchema = (cov_1uyjzqwcco.s[1]++, new _mongoose["default"].Schema({
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
    "default": 'paystack'
  }
}, {
  collection: 'paystacksettingVC_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_1uyjzqwcco.s[2]++;
PaystackSettingSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
cov_1uyjzqwcco.s[3]++;
PaystackSettingSchema.statics = {
  // Add Intervention
  addSettings: function addSettings(user, callback) {
    cov_1uyjzqwcco.f[0]++;
    cov_1uyjzqwcco.s[4]++;
    return this.create(user, callback);
  }
};
cov_1uyjzqwcco.s[5]++;
module.exports = _mongoose["default"].model('PaystackSettingModel', PaystackSettingSchema);
//# sourceMappingURL=PaystackSettings.model.js.map