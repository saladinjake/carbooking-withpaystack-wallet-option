"use strict";

var cov_1r1w1no7oc = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\mixins.js";
  var hash = "c5facb3c3807cf5acb01fc1809c0c74c4ce819d7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\mixins.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 35
        }
      },
      "1": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 6,
          column: 81
        }
      },
      "2": {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 8,
          column: 50
        }
      },
      "3": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "4": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 28
        }
      },
      "5": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 32
        }
      },
      "6": {
        start: {
          line: 17,
          column: 14
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
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        }, {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 10,
            column: 8
          },
          end: {
            line: 10,
            column: 27
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 10,
            column: 8
          },
          end: {
            line: 10,
            column: 16
          }
        }, {
          start: {
            line: 10,
            column: 20
          },
          end: {
            line: 10,
            column: 27
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
    hash: "c5facb3c3807cf5acb01fc1809c0c74c4ce819d7"
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