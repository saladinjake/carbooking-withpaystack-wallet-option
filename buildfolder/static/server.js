"use strict";

var cov_jziw5wzty = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\static\\server.js";
  var hash = "dc2bfc4f118d5a3567c67f0c7a268d357461deb5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\static\\server.js",
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
          column: 13
        },
        end: {
          line: 2,
          column: 28
        }
      },
      "2": {
        start: {
          line: 4,
          column: 12
        },
        end: {
          line: 4,
          column: 21
        }
      },
      "3": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 51
        }
      },
      "4": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "5": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 65
        }
      },
      "6": {
        start: {
          line: 13,
          column: 13
        },
        end: {
          line: 13,
          column: 37
        }
      },
      "7": {
        start: {
          line: 15,
          column: 16
        },
        end: {
          line: 15,
          column: 23
        }
      },
      "8": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "9": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 13
          },
          end: {
            line: 8,
            column: 14
          }
        },
        loc: {
          start: {
            line: 8,
            column: 27
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 17
          },
          end: {
            line: 16,
            column: 18
          }
        },
        loc: {
          start: {
            line: 16,
            column: 23
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 13,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 13,
            column: 29
          }
        }, {
          start: {
            line: 13,
            column: 33
          },
          end: {
            line: 13,
            column: 37
          }
        }],
        line: 13
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
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "dc2bfc4f118d5a3567c67f0c7a268d357461deb5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var express = (cov_jziw5wzty.s[0]++, require('express'));
var path = (cov_jziw5wzty.s[1]++, require('path'));
var app = (cov_jziw5wzty.s[2]++, express());
cov_jziw5wzty.s[3]++;
app.use(express["static"]("".concat(__dirname, "../../dist/")));
cov_jziw5wzty.s[4]++;
app.get('*', function (req, res) {
  cov_jziw5wzty.f[0]++;
  cov_jziw5wzty.s[5]++;
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});
var PORT = (cov_jziw5wzty.s[6]++, (cov_jziw5wzty.b[0][0]++, process.env.PORT) || (cov_jziw5wzty.b[0][1]++, 8000));

var _ref = (cov_jziw5wzty.s[7]++, console),
    log = _ref.log;

cov_jziw5wzty.s[8]++;
app.listen(PORT, function () {
  cov_jziw5wzty.f[1]++;
  cov_jziw5wzty.s[9]++;
  log('Server started on port: ', PORT);
});
//# sourceMappingURL=server.js.map