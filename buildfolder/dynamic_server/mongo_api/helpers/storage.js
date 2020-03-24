"use strict";

var cov_5hrufbz38 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\storage.js";
  var hash = "2ce8cf2c23b46effcab6bc931c9f18ee95065527";
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
          line: 5,
          column: 4
        },
        end: {
          line: 7,
          column: 6
        }
      },
      "2": {
        start: {
          line: 6,
          column: 7
        },
        end: {
          line: 6,
          column: 25
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 24
        }
      },
      "4": {
        start: {
          line: 11,
          column: 3
        },
        end: {
          line: 11,
          column: 21
        }
      },
      "5": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 30
        }
      },
      "6": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 31
        }
      },
      "7": {
        start: {
          line: 26,
          column: 12
        },
        end: {
          line: 26,
          column: 34
        }
      },
      "8": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 28,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 3,
            column: 3
          }
        },
        loc: {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        loc: {
          start: {
            line: 15,
            column: 19
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 14
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 7,
            column: 6
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 7,
            column: 6
          }
        }, {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 7,
            column: 6
          }
        }],
        line: 5
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
    hash: "2ce8cf2c23b46effcab6bc931c9f18ee95065527"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _singleton = (cov_5hrufbz38.s[0]++, null);

var LocalConfigStore =
/*#__PURE__*/
function () {
  function LocalConfigStore() {
    _classCallCheck(this, LocalConfigStore);

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

  _createClass(LocalConfigStore, [{
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