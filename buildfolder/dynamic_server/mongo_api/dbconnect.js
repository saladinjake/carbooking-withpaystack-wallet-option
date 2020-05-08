"use strict";

var cov_rz22virs5 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\dbconnect.js";
  var hash = "55495c4614446f1f1f43d99755e9c0853ec04731";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\dbconnect.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 15
        },
        end: {
          line: 1,
          column: 32
        }
      },
      "1": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 2,
          column: 16
        }
      },
      "2": {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 3,
          column: 36
        }
      },
      "3": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 39
        }
      },
      "4": {
        start: {
          line: 6,
          column: 12
        },
        end: {
          line: 6,
          column: 101
        }
      },
      "5": {
        start: {
          line: 8,
          column: 16
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "6": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 25
        }
      }
    },
    fnMap: {},
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
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "55495c4614446f1f1f43d99755e9c0853ec04731"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var dotenv = (cov_rz22virs5.s[0]++, require("dotenv"));
cov_rz22virs5.s[1]++;
dotenv.config();
var mongoose = (cov_rz22virs5.s[2]++, require("mongoose"));
cov_rz22virs5.s[3]++;
mongoose.Promise = require("bluebird");
var url = (cov_rz22virs5.s[4]++, 'mongodb+srv://platform:@Platform123.@commutetest-f3rhn.mongodb.net/commute_taxi_service');
var connect = (cov_rz22virs5.s[5]++, mongoose.connect(url, {
  keepAlive: 1,
  // useMongoClient: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}));
cov_rz22virs5.s[6]++;
module.exports = connect;
//# sourceMappingURL=dbconnect.js.map