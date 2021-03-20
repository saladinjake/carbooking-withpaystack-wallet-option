"use strict";

var cov_c3vpuxk1t = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\faqs_routes.js";
  var hash = "cdb8ce2847af2d04064e2a94fec15373458558cc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\faqs_routes.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 28
        },
        end: {
          line: 9,
          column: 35
        }
      },
      "1": {
        start: {
          line: 10,
          column: 34
        },
        end: {
          line: 10,
          column: 45
        }
      },
      "2": {
        start: {
          line: 11,
          column: 30
        },
        end: {
          line: 11,
          column: 46
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 25
        }
      },
      "4": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 27,
          column: 6
        }
      },
      "5": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 33,
          column: 6
        }
      },
      "6": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
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
            column: 22
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 17
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 20
      }
    },
    branchMap: {},
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
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "cdb8ce2847af2d04064e2a94fec15373458558cc"
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

var _faqs_controller = _interopRequireDefault(require("../controllers/faqs_controller"));

var _token_validator = _interopRequireDefault(require("../middlewares/token_validator"));

var _post_sanitizer = _interopRequireDefault(require("../middlewares/post_sanitizer"));

// import BridgeRoutes from './routes';
var SUBMIT_REDFLAG_LINK = (cov_c3vpuxk1t.s[0]++, '/faqs');
var REDFLAG_GET_SPECIFIC_LINK = (cov_c3vpuxk1t.s[1]++, '/faqs/:id');
var REDFLAG_LOCATION_LINK = (cov_c3vpuxk1t.s[2]++, '/faqs/:id/edit');

var FaqsRoutes =
/*#__PURE__*/
function () {
  function FaqsRoutes(router) {
    (0, _classCallCheck2["default"])(this, FaqsRoutes);
    cov_c3vpuxk1t.f[0]++;
    cov_c3vpuxk1t.s[3]++;
    // super(router);
    this.router = router;
  }

  (0, _createClass2["default"])(FaqsRoutes, [{
    key: "attachRoutes",
    value: function attachRoutes() {
      cov_c3vpuxk1t.f[1]++;
      cov_c3vpuxk1t.s[4]++;
      this.router.post('/faqs', _token_validator["default"].userAuthentication, _faqs_controller["default"].createQnA);
      cov_c3vpuxk1t.s[5]++;
      this.router.get('/faqs', _token_validator["default"].userAuthentication, _faqs_controller["default"].getAllQnA);
      cov_c3vpuxk1t.s[6]++;
      return this.router;
    }
  }]);
  return FaqsRoutes;
}();

var _default = FaqsRoutes;
exports["default"] = _default;
//# sourceMappingURL=faqs_routes.js.map