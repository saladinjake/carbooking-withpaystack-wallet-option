"use strict";

var cov_7eynlm3ng = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\route\\chatroute.js";
  var hash = "a466a61b188c9d86cd84c4336ecb7323380ee887";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\route\\chatroute.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 16
        },
        end: {
          line: 1,
          column: 34
        }
      },
      "1": {
        start: {
          line: 2,
          column: 19
        },
        end: {
          line: 2,
          column: 41
        }
      },
      "2": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 43
        }
      },
      "3": {
        start: {
          line: 4,
          column: 14
        },
        end: {
          line: 4,
          column: 41
        }
      },
      "4": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 31
        }
      },
      "5": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "6": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 52
        }
      },
      "7": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 23
        }
      },
      "8": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "9": {
        start: {
          line: 13,
          column: 15
        },
        end: {
          line: 13,
          column: 51
        }
      },
      "10": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 16,
          column: 7
        }
      },
      "11": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 21
        }
      },
      "12": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 24
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 22
          },
          end: {
            line: 8,
            column: 23
          }
        },
        loc: {
          start: {
            line: 8,
            column: 42
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 12,
            column: 18
          }
        },
        loc: {
          start: {
            line: 12,
            column: 23
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 24
          },
          end: {
            line: 14,
            column: 25
          }
        },
        loc: {
          start: {
            line: 14,
            column: 32
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 14
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
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a466a61b188c9d86cd84c4336ecb7323380ee887"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var express = (cov_7eynlm3ng.s[0]++, require("express"));
var bodyParser = (cov_7eynlm3ng.s[1]++, require("body-parser"));
var connectdb = (cov_7eynlm3ng.s[2]++, require("./../dbconnect"));
var Chats = (cov_7eynlm3ng.s[3]++, require("./../models/Chat"));
var router = (cov_7eynlm3ng.s[4]++, express.Router());
cov_7eynlm3ng.s[5]++;
router.route("/").get(function (req, res, next) {
  cov_7eynlm3ng.f[0]++;
  cov_7eynlm3ng.s[6]++;
  res.setHeader("Content-Type", "application/json");
  cov_7eynlm3ng.s[7]++;
  res.statusCode = 200;
  cov_7eynlm3ng.s[8]++;
  connectdb.then(function (db) {
    cov_7eynlm3ng.f[1]++;
    var data = (cov_7eynlm3ng.s[9]++, Chats.find({
      message: "Anonymous"
    }));
    cov_7eynlm3ng.s[10]++;
    Chats.find({}).then(function (chat) {
      cov_7eynlm3ng.f[2]++;
      cov_7eynlm3ng.s[11]++;
      res.json(chat);
    });
  });
});
cov_7eynlm3ng.s[12]++;
module.exports = router;
//# sourceMappingURL=chatroute.js.map