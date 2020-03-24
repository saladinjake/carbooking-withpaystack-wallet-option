"use strict";

var cov_vtzkzzczb = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\response_handler.js";
  var hash = "ead1e2857e2b4add4bab43d886166731aa0fe41e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\response_handler.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 7,
          column: 7
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 14,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 2,
            column: 3
          }
        },
        loc: {
          start: {
            line: 2,
            column: 59
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 2
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 52
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 32
          },
          end: {
            line: 2,
            column: 44
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 2,
            column: 41
          },
          end: {
            line: 2,
            column: 44
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 2,
            column: 46
          },
          end: {
            line: 2,
            column: 57
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 2,
            column: 53
          },
          end: {
            line: 2,
            column: 57
          }
        }],
        line: 2
      },
      "2": {
        loc: {
          start: {
            line: 10,
            column: 29
          },
          end: {
            line: 10,
            column: 41
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 10,
            column: 38
          },
          end: {
            line: 10,
            column: 41
          }
        }],
        line: 10
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
    hash: "ead1e2857e2b4add4bab43d886166731aa0fe41e"
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResponseHandler =
/*#__PURE__*/
function () {
  function ResponseHandler() {
    _classCallCheck(this, ResponseHandler);
  }

  _createClass(ResponseHandler, null, [{
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