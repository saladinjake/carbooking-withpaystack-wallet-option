"use strict";

var cov_1r1w1no7oc = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\mixins.js";
  var hash = "8de7b8e052fb4be9e4f54599e604448c6164f7d9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\mixins.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 20
        },
        end: {
          line: 4,
          column: 33
        }
      },
      "1": {
        start: {
          line: 6,
          column: 18
        },
        end: {
          line: 6,
          column: 79
        }
      },
      "2": {
        start: {
          line: 8,
          column: 19
        },
        end: {
          line: 8,
          column: 48
        }
      },
      "3": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "4": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 26
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 30
        }
      },
      "6": {
        start: {
          line: 17,
          column: 15
        },
        end: {
          line: 19,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "checkFileType",
        decl: {
          start: {
            line: 2,
            column: 9
          },
          end: {
            line: 2,
            column: 22
          }
        },
        loc: {
          start: {
            line: 2,
            column: 69
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 2
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 33
          },
          end: {
            line: 2,
            column: 67
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 2,
            column: 49
          },
          end: {
            line: 2,
            column: 67
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 25
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 14
          }
        }, {
          start: {
            line: 10,
            column: 18
          },
          end: {
            line: 10,
            column: 25
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8de7b8e052fb4be9e4f54599e604448c6164f7d9"
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

// Check File Type
function checkFileType(file, cb) {
  var fileTypeRegex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1r1w1no7oc.b[0][0]++, /jpeg|jpg|png|gif/);
  cov_1r1w1no7oc.f[0]++;
  // Allowed ext
  var filetypes = (cov_1r1w1no7oc.s[0]++, fileTypeRegex); // Check ext

  var extname = (cov_1r1w1no7oc.s[1]++, filetypes.test(path.extname(file.originalname).toLowerCase())); // Check mime

  var mimetype = (cov_1r1w1no7oc.s[2]++, filetypes.test(file.mimetype));
  cov_1r1w1no7oc.s[3]++;

  if ((cov_1r1w1no7oc.b[2][0]++, mimetype) && (cov_1r1w1no7oc.b[2][1]++, extname)) {
    cov_1r1w1no7oc.b[1][0]++;
    cov_1r1w1no7oc.s[4]++;
    return cb(null, true);
  } else {
    cov_1r1w1no7oc.b[1][1]++;
    cov_1r1w1no7oc.s[5]++;
    cb('Error: Images Only!');
  }
}

var Mixins = (cov_1r1w1no7oc.s[6]++, {
  checkFileType: checkFileType
});
var _default = Mixins;
exports["default"] = _default;
//# sourceMappingURL=mixins.js.map