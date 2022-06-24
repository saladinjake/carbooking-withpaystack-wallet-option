'use strict';

var cov_8h7l9f1au = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\AWS3BucketSettings.model.js";
  var hash = "b5a59899abf7251187a22d0e11a0cd0d16ce375f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\AWS3BucketSettings.model.js",
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
          column: 18
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
          column: 61
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
          column: 59
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
    hash: "b5a59899abf7251187a22d0e11a0cd0d16ce375f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_8h7l9f1au.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var AwsS3Schema = (cov_8h7l9f1au.s[1]++, new _mongoose["default"].Schema({
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
    "default": 'aws'
  }
}, {
  collection: 'aws_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_8h7l9f1au.s[2]++;
AwsS3Schema.set('toJSON', {
  getters: true,
  virtuals: true
});
cov_8h7l9f1au.s[3]++;
AwsS3Schema.statics = {
  // Add Intervention
  addSettings: function addSettings(user, callback) {
    cov_8h7l9f1au.f[0]++;
    cov_8h7l9f1au.s[4]++;
    return this.create(user, callback);
  }
};
cov_8h7l9f1au.s[5]++;
module.exports = _mongoose["default"].model('AwsS3Model', AwsS3Schema);
//# sourceMappingURL=AWS3BucketSettings.model.js.map