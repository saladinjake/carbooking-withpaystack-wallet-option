"use strict";

var cov_vtzkzzczb = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\response_handler.js";
  var hash = "a00ee47b908b761ec53601c03e8fc2843ceb52c7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\response_handler.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 10,
          column: 7
        }
      },
      "1": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 17,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 59
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        loc: {
          start: {
            line: 13,
            column: 52
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 32
          },
          end: {
            line: 5,
            column: 44
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 5,
            column: 41
          },
          end: {
            line: 5,
            column: 44
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 5,
            column: 46
          },
          end: {
            line: 5,
            column: 57
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 5,
            column: 53
          },
          end: {
            line: 5,
            column: 57
          }
        }],
        line: 5
      },
      "2": {
        loc: {
          start: {
            line: 13,
            column: 29
          },
          end: {
            line: 13,
            column: 41
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 13,
            column: 38
          },
          end: {
            line: 13,
            column: 41
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a00ee47b908b761ec53601c03e8fc2843ceb52c7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var ResponseHandler = /*#__PURE__*/function () {
  function ResponseHandler() {
    (0, _classCallCheck2["default"])(this, ResponseHandler);
  }

  (0, _createClass2["default"])(ResponseHandler, null, [{
    key: "sendResponse",
    value: function sendResponse(response) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_vtzkzzczb.b[0][0]++, 201);
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_vtzkzzczb.b[1][0]++, [{}]);
      cov_vtzkzzczb.f[0]++;
      cov_vtzkzzczb.s[0]++;
      return response.status(status).json({
        status: status,
        data: data // message: message

      });
    }
  }, {
    key: "sendError",
    value: function sendError(response) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_vtzkzzczb.b[2][0]++, 400);
      var message = arguments.length > 2 ? arguments[2] : undefined;
      cov_vtzkzzczb.f[1]++;
      cov_vtzkzzczb.s[1]++;
      return response.status(status).send({
        status: status,
        error: message
      });
    }
  }]);
  return ResponseHandler;
}();

exports["default"] = ResponseHandler;
//# sourceMappingURL=response_handler.js.map