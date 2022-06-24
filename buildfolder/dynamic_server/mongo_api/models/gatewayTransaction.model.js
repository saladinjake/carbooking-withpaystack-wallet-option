"use strict";

var cov_1c1mtoompg = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\gatewayTransaction.model.js";
  var hash = "896b01055d8e5dd1495a9d96ef26d459f3319e69";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\gatewayTransaction.model.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 17
        },
        end: {
          line: 1,
          column: 36
        }
      },
      "1": {
        start: {
          line: 2,
          column: 15
        },
        end: {
          line: 2,
          column: 32
        }
      },
      "2": {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 3,
          column: 41
        }
      },
      "3": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 66
        }
      },
      "4": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 33
        }
      },
      "5": {
        start: {
          line: 13,
          column: 33
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "6": {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 56,
          column: 3
        }
      },
      "7": {
        start: {
          line: 47,
          column: 24
        },
        end: {
          line: 47,
          column: 26
        }
      },
      "8": {
        start: {
          line: 48,
          column: 19
        },
        end: {
          line: 48,
          column: 92
        }
      },
      "9": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 52,
          column: 7
        }
      },
      "10": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 51,
          column: 39
        }
      },
      "11": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 23
        }
      },
      "12": {
        start: {
          line: 58,
          column: 0
        },
        end: {
          line: 58,
          column: 80
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        loc: {
          start: {
            line: 46,
            column: 14
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 46
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 50,
            column: 19
          },
          end: {
            line: 50,
            column: 20
          }
        },
        loc: {
          start: {
            line: 50,
            column: 28
          },
          end: {
            line: 52,
            column: 5
          }
        },
        line: 50
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
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "896b01055d8e5dd1495a9d96ef26d459f3319e69"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var mongoose = (cov_1c1mtoompg.s[0]++, require('mongoose'));
var crypto = (cov_1c1mtoompg.s[1]++, require('crypto'));
var moment = (cov_1c1mtoompg.s[2]++, require('moment-timezone'));
var autoIncrement = (cov_1c1mtoompg.s[3]++, require('../services/mongooseAutoIncrement'));
var uuidv4 = (cov_1c1mtoompg.s[4]++, require('uuid/v4'));
/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/

/**
 * Gateway Transaction Schema
 * @private
 */

var gatewayTransactionSchema = (cov_1c1mtoompg.s[5]++, new mongoose.Schema({
  transactionId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  paymentDate: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    "default": 0,
    required: true
  },
  authorizationCode: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
}));
/**
 * Methods
 */

cov_1c1mtoompg.s[6]++;
gatewayTransactionSchema.method({
  transform: function transform() {
    var _this = this;

    cov_1c1mtoompg.f[0]++;
    var transformed = (cov_1c1mtoompg.s[7]++, {});
    var fields = (cov_1c1mtoompg.s[8]++, ['transactionId', 'status', 'paymentDate', 'amount', 'authorizationCode']);
    cov_1c1mtoompg.s[9]++;
    fields.forEach(function (field) {
      cov_1c1mtoompg.f[1]++;
      cov_1c1mtoompg.s[10]++;
      transformed[field] = _this[field];
    });
    cov_1c1mtoompg.s[11]++;
    return transformed;
  }
});
cov_1c1mtoompg.s[12]++;
module.exports = mongoose.model('GatewayTransaction', gatewayTransactionSchema);
//# sourceMappingURL=gatewayTransaction.model.js.map