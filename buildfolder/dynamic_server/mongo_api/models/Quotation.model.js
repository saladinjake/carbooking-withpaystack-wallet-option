"use strict";

var cov_shd3w5koj = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Quotation.model.js";
  var hash = "4003af3364bde6c8a72de2a04e09c1aa51563ee1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Quotation.model.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 16
        },
        end: {
          line: 1,
          column: 35
        }
      },
      "1": {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 57,
          column: 1
        }
      },
      "2": {
        start: {
          line: 59,
          column: 0
        },
        end: {
          line: 59,
          column: 66
        }
      },
      "3": {
        start: {
          line: 64,
          column: 0
        },
        end: {
          line: 64,
          column: 28
        }
      },
      "4": {
        start: {
          line: 69,
          column: 0
        },
        end: {
          line: 74,
          column: 2
        }
      },
      "5": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 39
        }
      },
      "6": {
        start: {
          line: 76,
          column: 0
        },
        end: {
          line: 76,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        loc: {
          start: {
            line: 71,
            column: 30
          },
          end: {
            line: 73,
            column: 3
          }
        },
        line: 71
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4003af3364bde6c8a72de2a04e09c1aa51563ee1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_shd3w5koj.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var QuotationsSchema = (cov_shd3w5koj.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: String,
    "default": '0'
  },
  full_name: {
    type: String
  },
  status: {
    type: String,
    "enum": ['Successful', 'Failed', 'Unpaid', 'Paid'],
    "default": 'Successful'
  },
  plan_id: {
    type: String,
    "default": 'No plan assigned yet'
  },
  quotation_id: {
    type: String,
    "default": 'No quotation assigned yet'
  },
  email: {
    type: String
  },
  amount: {
    type: Number
  },
  reference: {
    type: String
  },
  createdDate: {
    type: Date,
    "default": new Date()
  },
  phone_number: {
    type: String
  },
  userId: {
    type: String
  }
}, {
  collection: 'abiquotes_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_shd3w5koj.s[2]++;
QuotationsSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
/**
 * Methods
 */

cov_shd3w5koj.s[3]++;
QuotationsSchema.method({});
/**
 * Statics
 */

cov_shd3w5koj.s[4]++;
QuotationsSchema.statics = {
  // Add Intervention
  addToWallet: function addToWallet(data, callback) {
    cov_shd3w5koj.f[0]++;
    cov_shd3w5koj.s[5]++;
    return this.create(data, callback);
  }
};
cov_shd3w5koj.s[6]++;
module.exports = _mongoose["default"].model('QuotationsModel', QuotationsSchema);
//# sourceMappingURL=Quotation.model.js.map