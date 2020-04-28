"use strict";

var cov_shd3w5koj = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Quotation.model.js";
  var hash = "378112c69578bf9c3b95662d670284f2a4eae42f";
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
          line: 3,
          column: 25
        },
        end: {
          line: 57,
          column: 2
        }
      },
      "2": {
        start: {
          line: 61,
          column: 0
        },
        end: {
          line: 61,
          column: 64
        }
      },
      "3": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 69,
          column: 9
        }
      },
      "4": {
        start: {
          line: 74,
          column: 7
        },
        end: {
          line: 81,
          column: 6
        }
      },
      "5": {
        start: {
          line: 78,
          column: 14
        },
        end: {
          line: 78,
          column: 48
        }
      },
      "6": {
        start: {
          line: 85,
          column: 0
        },
        end: {
          line: 85,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 77,
            column: 12
          },
          end: {
            line: 77,
            column: 13
          }
        },
        loc: {
          start: {
            line: 77,
            column: 43
          },
          end: {
            line: 79,
            column: 13
          }
        },
        line: 77
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
    hash: "378112c69578bf9c3b95662d670284f2a4eae42f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Promise = (cov_shd3w5koj.s[0]++, require('bluebird'));
var QuotationsSchema = (cov_shd3w5koj.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: String,
    "default": "0"
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