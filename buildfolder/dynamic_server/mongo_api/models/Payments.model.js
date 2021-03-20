"use strict";

var cov_27u23yflxj = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Payments.model.js";
  var hash = "d8d59e63fc6e23502d3584a413f51d3be18dff1f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Payments.model.js",
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
          column: 23
        },
        end: {
          line: 55,
          column: 2
        }
      },
      "2": {
        start: {
          line: 59,
          column: 0
        },
        end: {
          line: 59,
          column: 62
        }
      },
      "3": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 67,
          column: 9
        }
      },
      "4": {
        start: {
          line: 72,
          column: 7
        },
        end: {
          line: 79,
          column: 6
        }
      },
      "5": {
        start: {
          line: 76,
          column: 14
        },
        end: {
          line: 76,
          column: 48
        }
      },
      "6": {
        start: {
          line: 83,
          column: 0
        },
        end: {
          line: 83,
          column: 64
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 75,
            column: 12
          },
          end: {
            line: 75,
            column: 13
          }
        },
        loc: {
          start: {
            line: 75,
            column: 43
          },
          end: {
            line: 77,
            column: 13
          }
        },
        line: 75
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
    hash: "d8d59e63fc6e23502d3584a413f51d3be18dff1f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_27u23yflxj.s[0]++, require('bluebird'));
var PaymentsSchema = (cov_27u23yflxj.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: String,
    "default": "0"
  },
  full_name: {
    type: String
  },
  status: {
    type: String,
    "enum": ['Successful', 'Failed', 'Unpaid'],
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
  phone_number: {
    type: String
  },
  createdDate: {
    type: Date,
    "default": new Date()
  },
  userId: {
    type: String
  }
}, {
  collection: 'pay_collections' //timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }

}));
cov_27u23yflxj.s[2]++;
PaymentsSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
/**
 * Methods
 */

cov_27u23yflxj.s[3]++;
PaymentsSchema.method({});
/**
 * Statics
 */

cov_27u23yflxj.s[4]++;
PaymentsSchema.statics = {
  // Add Intervention
  addToWallet: function addToWallet(data, callback) {
    cov_27u23yflxj.f[0]++;
    cov_27u23yflxj.s[5]++;
    return this.create(data, callback);
  }
};
cov_27u23yflxj.s[6]++;
module.exports = _mongoose["default"].model('PaymentModel', PaymentsSchema);
//# sourceMappingURL=Payments.model.js.map