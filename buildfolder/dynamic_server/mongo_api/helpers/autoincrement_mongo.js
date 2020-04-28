"use strict";

var cov_o3biul7kj = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\autoincrement_mongo.js";
  var hash = "ac62d9d74cdccbdb9516abe7b326845a078fb919";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\autoincrement_mongo.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 22
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "1": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 26,
          column: 32
        }
      },
      "2": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 21
        }
      },
      "3": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 46
        }
      },
      "4": {
        start: {
          line: 26,
          column: 16
        },
        end: {
          line: 26,
          column: 30
        }
      },
      "5": {
        start: {
          line: 27,
          column: 17
        },
        end: {
          line: 27,
          column: 38
        }
      },
      "6": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 21
        }
      },
      "7": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 34,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 22
          },
          end: {
            line: 21,
            column: 23
          }
        },
        loc: {
          start: {
            line: 21,
            column: 38
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 52
          },
          end: {
            line: 23,
            column: 53
          }
        },
        loc: {
          start: {
            line: 23,
            column: 61
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 23
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 11
          },
          end: {
            line: 26,
            column: 12
          }
        },
        loc: {
          start: {
            line: 26,
            column: 16
          },
          end: {
            line: 26,
            column: 30
          }
        },
        line: 26
      },
      "3": {
        name: "increase",
        decl: {
          start: {
            line: 28,
            column: 11
          },
          end: {
            line: 28,
            column: 19
          }
        },
        loc: {
          start: {
            line: 28,
            column: 22
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 28
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 27,
            column: 17
          },
          end: {
            line: 27,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 27,
            column: 17
          },
          end: {
            line: 27,
            column: 33
          }
        }, {
          start: {
            line: 27,
            column: 37
          },
          end: {
            line: 27,
            column: 38
          }
        }],
        line: 27
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ac62d9d74cdccbdb9516abe7b326845a078fb919"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
cov_o3biul7kj.s[0]++;

//module pattern realworld usage by saladin jake
// let AutoIncrementer = function(Model) {
//   let countIds;
//   Model.find().estimatedDocumentCount().exec().then(count => {
//     countIds = count;
//     console.log(count+" is the number of doc")
//   }).catch(e => console.log(e));
//   let countId =  Number(countIds) || 5;
//   function increase() {
//     return countId++;
//   }
//   return {
//     counter: increase,
//   };
// };
// export default AutoIncrementer;
var AutoIncrementer = function AutoIncrementer(Model) {
  cov_o3biul7kj.f[0]++;
  var countIds;
  cov_o3biul7kj.s[1]++;
  Model.find().estimatedDocumentCount().exec().then(function (count) {
    cov_o3biul7kj.f[1]++;
    cov_o3biul7kj.s[2]++;
    countIds = count;
    cov_o3biul7kj.s[3]++;
    console.log(count + " is the number of doc");
  })["catch"](function (e) {
    cov_o3biul7kj.f[2]++;
    cov_o3biul7kj.s[4]++;
    return console.log(e);
  });
  var countId = (cov_o3biul7kj.s[5]++, (cov_o3biul7kj.b[0][0]++, Number(countIds)) || (cov_o3biul7kj.b[0][1]++, 5));

  function increase() {
    cov_o3biul7kj.f[3]++;
    cov_o3biul7kj.s[6]++;
    return countId++;
  }

  cov_o3biul7kj.s[7]++;
  return {
    counter: increase
  };
};

var _default = AutoIncrementer;
exports["default"] = _default;
//# sourceMappingURL=autoincrement_mongo.js.map