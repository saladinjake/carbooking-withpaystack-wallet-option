"use strict";

var cov_mn6nr3efr = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Quote.model.js";
  var hash = "83ce30d0a9db3c0ee0bdc9af78337ae3ad40cb88";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Quote.model.js",
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
          column: 20
        },
        end: {
          line: 60,
          column: 2
        }
      },
      "2": {
        start: {
          line: 64,
          column: 0
        },
        end: {
          line: 64,
          column: 59
        }
      },
      "3": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 72,
          column: 9
        }
      },
      "4": {
        start: {
          line: 77,
          column: 7
        },
        end: {
          line: 84,
          column: 6
        }
      },
      "5": {
        start: {
          line: 81,
          column: 14
        },
        end: {
          line: 81,
          column: 48
        }
      },
      "6": {
        start: {
          line: 88,
          column: 0
        },
        end: {
          line: 88,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 80,
            column: 12
          },
          end: {
            line: 80,
            column: 13
          }
        },
        loc: {
          start: {
            line: 80,
            column: 43
          },
          end: {
            line: 82,
            column: 13
          }
        },
        line: 80
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
    hash: "83ce30d0a9db3c0ee0bdc9af78337ae3ad40cb88"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_mn6nr3efr.s[0]++, require('bluebird'));
var QuoteSchema = (cov_mn6nr3efr.s[1]++, new _mongoose["default"].Schema({
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
    "default": 'Unpaid'
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
  has_updated: {
    type: String,
    "default": 'No'
  },
  reference: {
    type: String
  },
  createdDateOfQuotation: {
    type: Date
  },
  createdDate: {
    type: Date,
    "default": new Date()
  },
  userId: {
    type: String
  }
}, {
  collection: 'pay_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_mn6nr3efr.s[2]++;
QuoteSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
/**
 * Methods
 */

cov_mn6nr3efr.s[3]++;
QuoteSchema.method({});
/**
 * Statics
 */

cov_mn6nr3efr.s[4]++;
QuoteSchema.statics = {
  // Add Intervention
  addToWallet: function addToWallet(data, callback) {
    cov_mn6nr3efr.f[0]++;
    cov_mn6nr3efr.s[5]++;
    return this.create(data, callback);
  }
};
cov_mn6nr3efr.s[6]++;
module.exports = _mongoose["default"].model('QuoteModel', QuoteSchema);
//# sourceMappingURL=Quote.model.js.map