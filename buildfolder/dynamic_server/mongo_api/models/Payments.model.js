"use strict";

var cov_27u23yflxj = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Payments.model.js";
  var hash = "1353953ebf6e578fc7914f1f3b342256f0f13465";
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
          line: 6,
          column: 23
        },
        end: {
          line: 56,
          column: 1
        }
      },
      "2": {
        start: {
          line: 58,
          column: 0
        },
        end: {
          line: 58,
          column: 64
        }
      },
      "3": {
        start: {
          line: 63,
          column: 0
        },
        end: {
          line: 63,
          column: 26
        }
      },
      "4": {
        start: {
          line: 68,
          column: 0
        },
        end: {
          line: 73,
          column: 2
        }
      },
      "5": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
          column: 39
        }
      },
      "6": {
        start: {
          line: 75,
          column: 0
        },
        end: {
          line: 75,
          column: 64
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 70,
            column: 2
          },
          end: {
            line: 70,
            column: 3
          }
        },
        loc: {
          start: {
            line: 70,
            column: 30
          },
          end: {
            line: 72,
            column: 3
          }
        },
        line: 70
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
    hash: "1353953ebf6e578fc7914f1f3b342256f0f13465"
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

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var PaymentsSchema = (cov_27u23yflxj.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: String,
    "default": '0'
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