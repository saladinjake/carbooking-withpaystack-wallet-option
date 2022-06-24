'use strict';

var cov_2ebkg1vx5 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\DriveTest.model.js";
  var hash = "21375dcdf53b0a815c2e43d2e9eebdb5f9db2fa9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\DriveTest.model.js",
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
          column: 22
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "2": {
        start: {
          line: 64,
          column: 0
        },
        end: {
          line: 64,
          column: 65
        }
      },
      "3": {
        start: {
          line: 66,
          column: 0
        },
        end: {
          line: 71,
          column: 2
        }
      },
      "4": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 39
        }
      },
      "5": {
        start: {
          line: 73,
          column: 0
        },
        end: {
          line: 73,
          column: 67
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 26
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 68
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
    hash: "21375dcdf53b0a815c2e43d2e9eebdb5f9db2fa9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_2ebkg1vx5.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var DriveTestSchema = (cov_2ebkg1vx5.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: Number,
    "default": 0
  },
  status: {
    type: String,
    "enum": ['Pending', 'Completed']
  },
  test_center: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  time: {
    type: String
  },
  createdDate: {
    type: String
  },
  phone_number: {
    type: String
  },
  car_id: {
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
  collection: 'drivetest_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_2ebkg1vx5.s[2]++;
DriveTestSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
cov_2ebkg1vx5.s[3]++;
DriveTestSchema.statics = {
  // Add Intervention
  addTest: function addTest(user, callback) {
    cov_2ebkg1vx5.f[0]++;
    cov_2ebkg1vx5.s[4]++;
    return this.create(user, callback);
  }
};
cov_2ebkg1vx5.s[5]++;
module.exports = _mongoose["default"].model('DriveTestModel', DriveTestSchema);
//# sourceMappingURL=DriveTest.model.js.map