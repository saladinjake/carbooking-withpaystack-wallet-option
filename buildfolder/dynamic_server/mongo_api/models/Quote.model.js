"use strict";

var cov_mn6nr3efr = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Quote.model.js";
  var hash = "ff9c5131eccd8d95fecce218279d516fe724248f";
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
          line: 6,
          column: 20
        },
        end: {
          line: 60,
          column: 1
        }
      },
      "2": {
        start: {
          line: 62,
          column: 0
        },
        end: {
          line: 62,
          column: 61
        }
      },
      "3": {
        start: {
          line: 67,
          column: 0
        },
        end: {
          line: 67,
          column: 23
        }
      },
      "4": {
        start: {
          line: 72,
          column: 0
        },
        end: {
          line: 77,
          column: 2
        }
      },
      "5": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 39
        }
      },
      "6": {
        start: {
          line: 79,
          column: 0
        },
        end: {
          line: 79,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        },
        loc: {
          start: {
            line: 74,
            column: 30
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 74
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
    hash: "ff9c5131eccd8d95fecce218279d516fe724248f"
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

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var QuoteSchema = (cov_mn6nr3efr.s[1]++, new _mongoose["default"].Schema({
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