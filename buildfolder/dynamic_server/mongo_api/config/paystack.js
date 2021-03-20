"use strict";

var cov_6ss7p3tk1 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\config\\paystack.js";
  var hash = "26d9f3db96a17a099a402dbc56e244ce556f8b0e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\config\\paystack.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 2,
          column: 16
        }
      },
      "1": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 3,
          column: 68
        }
      },
      "2": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 67
        }
      },
      "3": {
        start: {
          line: 5,
          column: 17
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "4": {
        start: {
          line: 6,
          column: 24
        },
        end: {
          line: 6,
          column: 61
        }
      },
      "5": {
        start: {
          line: 8,
          column: 30
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "6": {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 17,
          column: 9
        }
      },
      "7": {
        start: {
          line: 18,
          column: 25
        },
        end: {
          line: 20,
          column: 9
        }
      },
      "8": {
        start: {
          line: 19,
          column: 12
        },
        end: {
          line: 19,
          column: 42
        }
      },
      "9": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 39
        }
      },
      "10": {
        start: {
          line: 24,
          column: 26
        },
        end: {
          line: 37,
          column: 5
        }
      },
      "11": {
        start: {
          line: 25,
          column: 24
        },
        end: {
          line: 32,
          column: 9
        }
      },
      "12": {
        start: {
          line: 33,
          column: 25
        },
        end: {
          line: 35,
          column: 9
        }
      },
      "13": {
        start: {
          line: 34,
          column: 12
        },
        end: {
          line: 34,
          column: 42
        }
      },
      "14": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 36,
          column: 34
        }
      },
      "15": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 46
        }
      },
      "16": {
        start: {
          line: 42,
          column: 0
        },
        end: {
          line: 42,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 17
          },
          end: {
            line: 5,
            column: 18
          }
        },
        loc: {
          start: {
            line: 5,
            column: 30
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 30
          },
          end: {
            line: 8,
            column: 31
          }
        },
        loc: {
          start: {
            line: 8,
            column: 52
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 18,
            column: 26
          }
        },
        loc: {
          start: {
            line: 18,
            column: 52
          },
          end: {
            line: 20,
            column: 9
          }
        },
        line: 18
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 24,
            column: 26
          },
          end: {
            line: 24,
            column: 27
          }
        },
        loc: {
          start: {
            line: 24,
            column: 47
          },
          end: {
            line: 37,
            column: 5
          }
        },
        line: 24
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 33,
            column: 25
          },
          end: {
            line: 33,
            column: 26
          }
        },
        loc: {
          start: {
            line: 33,
            column: 52
          },
          end: {
            line: 35,
            column: 9
          }
        },
        line: 33
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
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "26d9f3db96a17a099a402dbc56e244ce556f8b0e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

cov_6ss7p3tk1.s[0]++;

_dotenv["default"].config();

var api_url_init = (cov_6ss7p3tk1.s[1]++, 'https://api.paystack.co/transaction/initialize');
var api_url_verify = (cov_6ss7p3tk1.s[2]++, 'https://api.paystack.co/transaction/verify/');
cov_6ss7p3tk1.s[3]++;

var paystack = function paystack(request) {
  cov_6ss7p3tk1.f[0]++;
  var MySecretKey = (cov_6ss7p3tk1.s[4]++, 'Bearer ' + process.env.PAYSTACKSECRET); //saladin

  cov_6ss7p3tk1.s[5]++;

  var initializePayment = function initializePayment(form, mycallback) {
    cov_6ss7p3tk1.f[1]++;
    var options = (cov_6ss7p3tk1.s[6]++, {
      url: api_url_init,
      headers: {
        authorization: MySecretKey,
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      },
      form: form
    });
    cov_6ss7p3tk1.s[7]++;

    var callback = function callback(error, response, body) {
      cov_6ss7p3tk1.f[2]++;
      cov_6ss7p3tk1.s[8]++;
      return mycallback(error, body);
    };

    cov_6ss7p3tk1.s[9]++;
    request.post(options, callback);
  };

  cov_6ss7p3tk1.s[10]++;

  var verifyPayment = function verifyPayment(ref, mycallback) {
    cov_6ss7p3tk1.f[3]++;
    var options = (cov_6ss7p3tk1.s[11]++, {
      url: api_url_verify + encodeURIComponent(ref),
      headers: {
        authorization: MySecretKey,
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      }
    });
    cov_6ss7p3tk1.s[12]++;

    var callback = function callback(error, response, body) {
      cov_6ss7p3tk1.f[4]++;
      cov_6ss7p3tk1.s[13]++;
      return mycallback(error, body);
    };

    cov_6ss7p3tk1.s[14]++;
    request(options, callback);
  };

  cov_6ss7p3tk1.s[15]++;
  return {
    initializePayment: initializePayment,
    verifyPayment: verifyPayment
  };
};

cov_6ss7p3tk1.s[16]++;
module.exports = paystack;
//# sourceMappingURL=paystack.js.map