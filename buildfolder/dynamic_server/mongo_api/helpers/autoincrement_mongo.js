"use strict";

var cov_o3biul7kj = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\autoincrement_mongo.js";
  var hash = "12f547e6c7b09e2565128abe39b060a978011db6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\autoincrement_mongo.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 22
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "1": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 31,
          column: 32
        }
      },
      "2": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 23
        }
      },
      "3": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 51
        }
      },
      "4": {
        start: {
          line: 31,
          column: 16
        },
        end: {
          line: 31,
          column: 30
        }
      },
      "5": {
        start: {
          line: 32,
          column: 16
        },
        end: {
          line: 32,
          column: 37
        }
      },
      "6": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 21
        }
      },
      "7": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 39,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 22
          },
          end: {
            line: 22,
            column: 23
          }
        },
        loc: {
          start: {
            line: 22,
            column: 38
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 10
          },
          end: {
            line: 27,
            column: 11
          }
        },
        loc: {
          start: {
            line: 27,
            column: 19
          },
          end: {
            line: 30,
            column: 5
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 31,
            column: 11
          },
          end: {
            line: 31,
            column: 12
          }
        },
        loc: {
          start: {
            line: 31,
            column: 16
          },
          end: {
            line: 31,
            column: 30
          }
        },
        line: 31
      },
      "3": {
        name: "increase",
        decl: {
          start: {
            line: 33,
            column: 11
          },
          end: {
            line: 33,
            column: 19
          }
        },
        loc: {
          start: {
            line: 33,
            column: 22
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 33
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 32,
            column: 16
          },
          end: {
            line: 32,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 16
          },
          end: {
            line: 32,
            column: 32
          }
        }, {
          start: {
            line: 32,
            column: 36
          },
          end: {
            line: 32,
            column: 37
          }
        }],
        line: 32
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
    hash: "12f547e6c7b09e2565128abe39b060a978011db6"
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

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var AutoIncrementer = function AutoIncrementer(Model) {
  cov_o3biul7kj.f[0]++;
  var countIds;
  cov_o3biul7kj.s[1]++;
  Model.find().estimatedDocumentCount().exec().then(function (count) {
    cov_o3biul7kj.f[1]++;
    cov_o3biul7kj.s[2]++;
    countIds = count;
    cov_o3biul7kj.s[3]++;
    console.log(count + ' is the number of doc');
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