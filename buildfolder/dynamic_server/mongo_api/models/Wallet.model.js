"use strict";

var cov_23t9an2aut = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Wallet.model.js";
  var hash = "ae0f1f655b94528b887b07801ef90379358f44d1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Wallet.model.js",
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
          column: 21
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
          column: 62
        }
      },
      "3": {
        start: {
          line: 69,
          column: 0
        },
        end: {
          line: 69,
          column: 24
        }
      },
      "4": {
        start: {
          line: 74,
          column: 0
        },
        end: {
          line: 79,
          column: 2
        }
      },
      "5": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 39
        }
      },
      "6": {
        start: {
          line: 81,
          column: 0
        },
        end: {
          line: 81,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 76,
            column: 30
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 76
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
    hash: "ae0f1f655b94528b887b07801ef90379358f44d1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_23t9an2aut.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var WalletSchema = (cov_23t9an2aut.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: String,
    "default": '0'
  },
  full_name: {
    type: String
  },
  status: {
    type: String,
    "enum": ['Successful', 'Failed'],
    "default": 'Successful'
  },
  email: {
    type: String
  },
  amount: {
    type: Number
  },
  phone_number: {
    type: String
  },
  reference: {
    type: String
  },
  old_balance: {
    type: String
  },
  createdDate: {
    type: Date,
    "default": new Date()
  },
  userId: {
    type: String
  },
  plan_id: {
    type: String,
    "default": 'Not Set'
  },
  quotation_id: {
    type: String,
    "default": 'Not Set'
  }
}, {
  collection: 'wallet_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_23t9an2aut.s[2]++;
WalletSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
/**
 * Methods
 */

cov_23t9an2aut.s[3]++;
WalletSchema.method({});
/**
 * Statics
 */

cov_23t9an2aut.s[4]++;
WalletSchema.statics = {
  // Add Intervention
  addToWallet: function addToWallet(data, callback) {
    cov_23t9an2aut.f[0]++;
    cov_23t9an2aut.s[5]++;
    return this.create(data, callback);
  }
};
cov_23t9an2aut.s[6]++;
module.exports = _mongoose["default"].model('Donor', WalletSchema);
//# sourceMappingURL=Wallet.model.js.map