"use strict";

var cov_13i587bod8 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\feedback_routes.js";
  var hash = "b36fc176700c9c22ee58b1dee935df124dcbf6e6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\feedback_routes.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 33
        },
        end: {
          line: 5,
          column: 48
        }
      },
      "1": {
        start: {
          line: 6,
          column: 35
        },
        end: {
          line: 6,
          column: 50
        }
      },
      "2": {
        start: {
          line: 7,
          column: 35
        },
        end: {
          line: 7,
          column: 59
        }
      },
      "3": {
        start: {
          line: 8,
          column: 34
        },
        end: {
          line: 8,
          column: 57
        }
      },
      "4": {
        start: {
          line: 9,
          column: 33
        },
        end: {
          line: 9,
          column: 55
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 25
        }
      },
      "6": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 23,
          column: 6
        }
      },
      "7": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 29,
          column: 6
        }
      },
      "8": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 36,
          column: 6
        }
      },
      "9": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 44,
          column: 6
        }
      },
      "10": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 52,
          column: 6
        }
      },
      "11": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 59,
          column: 6
        }
      },
      "12": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 68,
          column: 6
        }
      },
      "13": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 76,
          column: 6
        }
      },
      "14": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        loc: {
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 11
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
            column: 17
          },
          end: {
            line: 79,
            column: 3
          }
        },
        line: 16
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
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b36fc176700c9c22ee58b1dee935df124dcbf6e6"
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

var _feedback_controller = _interopRequireDefault(require("../controllers/feedback_controller"));

var _token_validator = _interopRequireDefault(require("../middlewares/token_validator"));

var _post_sanitizer = _interopRequireDefault(require("../middlewares/post_sanitizer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import BridgeRoutes from './routes';
var SUBMIT_INTERVENTION_LINK = (cov_13i587bod8.s[0]++, '/feedback/:id');
var feedback_GET_SPECIFIC_LINK = (cov_13i587bod8.s[1]++, '/feedback/:id');
var INTERVENTION_LOCATION_LINK = (cov_13i587bod8.s[2]++, '/feedback/:id/location');
var INTERVENTION_COMMENT_LINK = (cov_13i587bod8.s[3]++, '/feedback/:id/comment');
var INTERVENTION_STATUS_LINK = (cov_13i587bod8.s[4]++, '/feedback/:id/status');

var InterventionRoutes =
/*#__PURE__*/
function () {
  function InterventionRoutes(router) {
    _classCallCheck(this, InterventionRoutes);

    cov_13i587bod8.f[0]++;
    cov_13i587bod8.s[5]++;
    // super(router);
    this.router = router;
  }

  _createClass(InterventionRoutes, [{
    key: "attachRoutes",
    value: function attachRoutes() {
      cov_13i587bod8.f[1]++;
      cov_13i587bod8.s[6]++;
      this.router.post('/feedback', _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateSubmit, _feedback_controller["default"].createIntervention);
      cov_13i587bod8.s[7]++;
      this.router.get(SUBMIT_INTERVENTION_LINK, _token_validator["default"].userAuthentication, _feedback_controller["default"].allInterventions);
      cov_13i587bod8.s[8]++;
      this.router.get(feedback_GET_SPECIFIC_LINK, _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateId, _feedback_controller["default"].interventionId);
      cov_13i587bod8.s[9]++;
      this.router.patch(INTERVENTION_LOCATION_LINK, _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateId, _post_sanitizer["default"].validateLocation, _feedback_controller["default"].interventionLocation);
      cov_13i587bod8.s[10]++;
      this.router.patch(INTERVENTION_COMMENT_LINK, _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateId, _post_sanitizer["default"].validateComment, _feedback_controller["default"].editInterventionComment);
      cov_13i587bod8.s[11]++;
      this.router["delete"](INTERVENTION_STATUS_LINK, _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateId, _feedback_controller["default"].deleteIntervention);
      cov_13i587bod8.s[12]++;
      this.router.patch(INTERVENTION_STATUS_LINK, _token_validator["default"].userAuthentication, _token_validator["default"].adminAuthentication, _post_sanitizer["default"].validateId, _post_sanitizer["default"].validateStatus, _feedback_controller["default"].updateInterventionStatus);
      cov_13i587bod8.s[13]++;
      this.router.get('/users/:id/feedback/', _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateId, _feedback_controller["default"].usersInterventions);
      cov_13i587bod8.s[14]++;
      return this.router;
    }
  }]);

  return InterventionRoutes;
}();

var _default = InterventionRoutes;
exports["default"] = _default;
//# sourceMappingURL=feedback_routes.js.map