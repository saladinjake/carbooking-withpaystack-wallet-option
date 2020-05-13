"use strict";

var cov_jxwtomsud = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Chat.js";
  var hash = "ddfc3ed0f662b60175627c59b45c60d7cd939ca8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Chat.js",
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
          column: 30
        }
      },
      "2": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "3": {
        start: {
          line: 23,
          column: 11
        },
        end: {
          line: 23,
          column: 48
        }
      },
      "4": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 22
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
      "4": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ddfc3ed0f662b60175627c59b45c60d7cd939ca8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var mongoose = (cov_jxwtomsud.s[0]++, require("mongoose"));
var Schema = (cov_jxwtomsud.s[1]++, mongoose.Schema);
var chatSchema = (cov_jxwtomsud.s[2]++, new Schema({
  message: {
    type: String
  },
  sender: {
    type: String
  },
  receiver: {
    type: String
  }
}, {
  collection: 'chat_collections',
  timestamps: true
}));
var Chat = (cov_jxwtomsud.s[3]++, mongoose.model("theChat", chatSchema));
cov_jxwtomsud.s[4]++;
module.exports = Chat;
//# sourceMappingURL=Chat.js.map