"use strict";

var cov_1t146t9im3 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\services\\transferService.js";
  var hash = "2da82dafa2e8a83baec569809ec3884ed44cc2e8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\services\\transferService.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 15
        },
        end: {
          line: 1,
          column: 33
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
          column: 27
        },
        end: {
          line: 4,
          column: 72
        }
      },
      "4": {
        start: {
          line: 5,
          column: 17
        },
        end: {
          line: 5,
          column: 45
        }
      },
      "5": {
        start: {
          line: 6,
          column: 19
        },
        end: {
          line: 6,
          column: 41
        }
      },
      "6": {
        start: {
          line: 7,
          column: 17
        },
        end: {
          line: 7,
          column: 48
        }
      },
      "7": {
        start: {
          line: 8,
          column: 20
        },
        end: {
          line: 8,
          column: 58
        }
      },
      "8": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 32,
          column: 4
        }
      },
      "9": {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 11,
          column: 30
        }
      },
      "10": {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 13,
          column: 41
        }
      },
      "11": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 33
        }
      },
      "12": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 39
        }
      },
      "13": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 46
        }
      },
      "14": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 68
        }
      },
      "15": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 78
        }
      },
      "16": {
        start: {
          line: 19,
          column: 29
        },
        end: {
          line: 19,
          column: 53
        }
      },
      "17": {
        start: {
          line: 20,
          column: 26
        },
        end: {
          line: 20,
          column: 84
        }
      },
      "18": {
        start: {
          line: 22,
          column: 35
        },
        end: {
          line: 22,
          column: 52
        }
      },
      "19": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 43
        }
      },
      "20": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 50
        }
      },
      "21": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 68
        }
      },
      "22": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 80
        }
      },
      "23": {
        start: {
          line: 27,
          column: 40
        },
        end: {
          line: 27,
          column: 75
        }
      },
      "24": {
        start: {
          line: 29,
          column: 21
        },
        end: {
          line: 29,
          column: 105
        }
      },
      "25": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 19
          },
          end: {
            line: 10,
            column: 20
          }
        },
        loc: {
          start: {
            line: 10,
            column: 78
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 10
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
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2da82dafa2e8a83baec569809ec3884ed44cc2e8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var uuidv4 = (cov_1t146t9im3.s[0]++, require('uuid/v4'));
var crypto = (cov_1t146t9im3.s[1]++, require('crypto'));
var moment = (cov_1t146t9im3.s[2]++, require('moment-timezone'));
var GatewayTransaction = (cov_1t146t9im3.s[3]++, require('../models/gatewayTransaction.model'));
var APIError = (cov_1t146t9im3.s[4]++, require('../utils/APIError'));
var httpStatus = (cov_1t146t9im3.s[5]++, require('http-status'));
var Customer = (cov_1t146t9im3.s[6]++, require('../models/User.model'));
var Transaction = (cov_1t146t9im3.s[7]++, require('../models/transaction.model'));
cov_1t146t9im3.s[8]++;

exports.transfer = function _callee(accountNumber, amount, destinationAccountNumber) {
  var reference, transaction, savedTransaction, savedCustomer, transactionBeneficiary, savedTransactionBeneficiary, response;
  return _regenerator["default"].async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cov_1t146t9im3.f[0]++;
          reference = (cov_1t146t9im3.s[9]++, uuidv4());
          transaction = (cov_1t146t9im3.s[10]++, new Transaction());
          cov_1t146t9im3.s[11]++;
          transaction.amount = -amount;
          cov_1t146t9im3.s[12]++;
          transaction.operation = 'transfer';
          cov_1t146t9im3.s[13]++;
          transaction.accountNumber = accountNumber;
          cov_1t146t9im3.s[14]++;
          transaction.destinationAccountNumber = destinationAccountNumber;
          cov_1t146t9im3.s[15]++;
          transaction.reference = 'transfer_to_account:' + destinationAccountNumber;
          cov_1t146t9im3.s[16]++;
          _context.next = 16;
          return _regenerator["default"].awrap(transaction.save());

        case 16:
          savedTransaction = _context.sent;
          cov_1t146t9im3.s[17]++;
          _context.next = 20;
          return _regenerator["default"].awrap(Customer.findOne({
            'accountNumber': accountNumber
          }));

        case 20:
          savedCustomer = _context.sent;
          transactionBeneficiary = (cov_1t146t9im3.s[18]++, new Transaction());
          cov_1t146t9im3.s[19]++;
          transactionBeneficiary.amount = amount;
          cov_1t146t9im3.s[20]++;
          transactionBeneficiary.operation = 'transfer';
          cov_1t146t9im3.s[21]++;
          transactionBeneficiary.accountNumber = destinationAccountNumber;
          cov_1t146t9im3.s[22]++;
          transactionBeneficiary.reference = 'transfer_from_account:' + accountNumber;
          cov_1t146t9im3.s[23]++;
          _context.next = 33;
          return _regenerator["default"].awrap(transactionBeneficiary.save());

        case 33:
          savedTransactionBeneficiary = _context.sent;
          response = (cov_1t146t9im3.s[24]++, {
            transaction: transaction.transform(),
            customer: savedCustomer.transformBalance()
          });
          cov_1t146t9im3.s[25]++;
          return _context.abrupt("return", response);

        case 37:
        case "end":
          return _context.stop();
      }
    }
  });
};
//# sourceMappingURL=transferService.js.map