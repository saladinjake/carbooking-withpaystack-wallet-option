'use strict';

var cov_1fbzmatr4y = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Inspection.model.js";
  var hash = "d922f7d47600dd1447faec56a88090ad8f356713";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Inspection.model.js",
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
          column: 23
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "2": {
        start: {
          line: 60,
          column: 0
        },
        end: {
          line: 60,
          column: 66
        }
      },
      "3": {
        start: {
          line: 62,
          column: 0
        },
        end: {
          line: 67,
          column: 2
        }
      },
      "4": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 39
        }
      },
      "5": {
        start: {
          line: 69,
          column: 0
        },
        end: {
          line: 69,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 64,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        },
        loc: {
          start: {
            line: 64,
            column: 32
          },
          end: {
            line: 66,
            column: 3
          }
        },
        line: 64
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
    hash: "d922f7d47600dd1447faec56a88090ad8f356713"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_1fbzmatr4y.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var InspectionSchema = (cov_1fbzmatr4y.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: Number,
    "default": 0
  },
  car_id: {
    type: String
  },
  status: {
    type: String,
    "enum": ['Pending', 'Completed']
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
  created_at: {
    type: Date,
    "default": Date.now
  },
  updated_at: {
    type: Date,
    "default": Date.now
  }
}, {
  collection: 'inspection_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_1fbzmatr4y.s[2]++;
InspectionSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
cov_1fbzmatr4y.s[3]++;
InspectionSchema.statics = {
  // Add Intervention
  addInspection: function addInspection(user, callback) {
    cov_1fbzmatr4y.f[0]++;
    cov_1fbzmatr4y.s[4]++;
    return this.create(user, callback);
  }
};
cov_1fbzmatr4y.s[5]++;
module.exports = _mongoose["default"].model('InspectionModel', InspectionSchema);
//# sourceMappingURL=Inspection.model.js.map