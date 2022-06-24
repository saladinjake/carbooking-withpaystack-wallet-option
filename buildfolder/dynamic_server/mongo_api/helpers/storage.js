"use strict";

var cov_5hrufbz38 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\storage.js";
  var hash = "98c75df7282928c122ae5563629f19402cf45181";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\storage.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 17
        },
        end: {
          line: 1,
          column: 21
        }
      },
      "1": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 9,
          column: 5
        }
      },
      "2": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 24
        }
      },
      "3": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 24
        }
      },
      "4": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 22
        }
      },
      "5": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 30
        }
      },
      "6": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 31
        }
      },
      "7": {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 25,
          column: 34
        }
      },
      "8": {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 27,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        loc: {
          start: {
            line: 6,
            column: 16
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 20
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 15
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        }, {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        }],
        line: 7
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
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "98c75df7282928c122ae5563629f19402cf45181"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _singleton = (cov_5hrufbz38.s[0]++, null);
/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/


var LocalConfigStore = /*#__PURE__*/function () {
  function LocalConfigStore() {
    (0, _classCallCheck2["default"])(this, LocalConfigStore);
    cov_5hrufbz38.f[0]++;
    cov_5hrufbz38.s[1]++;

    if (!_singleton) {
      cov_5hrufbz38.b[0][0]++;
      cov_5hrufbz38.s[2]++;
      _singleton = this;
    } else {
      cov_5hrufbz38.b[0][1]++;
    }

    cov_5hrufbz38.s[3]++;
    this.dataStore = {};
    cov_5hrufbz38.s[4]++;
    return _singleton;
  }

  (0, _createClass2["default"])(LocalConfigStore, [{
    key: "setItem",
    value: function setItem(key, val) {
      cov_5hrufbz38.f[1]++;
      cov_5hrufbz38.s[5]++;
      this.dataStore[key] = val;
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      cov_5hrufbz38.f[2]++;
      cov_5hrufbz38.s[6]++;
      return this.dataStore[key];
    }
  }]);
  return LocalConfigStore;
}();

var Store = (cov_5hrufbz38.s[7]++, new LocalConfigStore());
cov_5hrufbz38.s[8]++;
module.exports = Store;
//# sourceMappingURL=storage.js.map