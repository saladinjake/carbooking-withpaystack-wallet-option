"use strict";

var cov_123lva18pq = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\intervention_routes.js";
  var hash = "e1307ce56fc7fe6b18ebeb245f0cea4170c1c7da";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\intervention_routes.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 33
        },
        end: {
          line: 5,
          column: 49
        }
      },
      "1": {
        start: {
          line: 6,
          column: 40
        },
        end: {
          line: 6,
          column: 60
        }
      },
      "2": {
        start: {
          line: 7,
          column: 35
        },
        end: {
          line: 7,
          column: 64
        }
      },
      "3": {
        start: {
          line: 8,
          column: 34
        },
        end: {
          line: 8,
          column: 62
        }
      },
      "4": {
        start: {
          line: 9,
          column: 33
        },
        end: {
          line: 9,
          column: 60
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
          line: 17,
          column: 4
        },
        end: {
          line: 22,
          column: 6
        }
      },
      "7": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 21,
          column: 8
        }
      },
      "8": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 28,
          column: 6
        }
      },
      "9": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 34,
          column: 6
        }
      },
      "10": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 41,
          column: 6
        }
      },
      "11": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 49,
          column: 6
        }
      },
      "12": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 57,
          column: 6
        }
      },
      "13": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 64,
          column: 6
        }
      },
      "14": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 73,
          column: 6
        }
      },
      "15": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 81,
          column: 6
        }
      },
      "16": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
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
            line: 84,
            column: 3
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 31
          }
        },
        loc: {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 21,
            column: 8
          }
        },
        line: 18
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
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e1307ce56fc7fe6b18ebeb245f0cea4170c1c7da"
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

var _intervention_controller = _interopRequireDefault(require("../controllers/intervention_controller"));

var _token_validator = _interopRequireDefault(require("../middlewares/token_validator"));

var _post_sanitizer = _interopRequireDefault(require("../middlewares/post_sanitizer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import BridgeRoutes from './routes';
var SUBMIT_INTERVENTION_LINK = (cov_123lva18pq.s[0]++, '/interventions');
var INTERVENTIONS_GET_SPECIFIC_LINK = (cov_123lva18pq.s[1]++, '/interventions/:id');
var INTERVENTION_LOCATION_LINK = (cov_123lva18pq.s[2]++, '/interventions/:id/location');
var INTERVENTION_COMMENT_LINK = (cov_123lva18pq.s[3]++, '/interventions/:id/comment');
var INTERVENTION_STATUS_LINK = (cov_123lva18pq.s[4]++, '/interventions/:id/status');

var InterventionRoutes =
/*#__PURE__*/
function () {
  function InterventionRoutes(router) {
    _classCallCheck(this, InterventionRoutes);

    cov_123lva18pq.f[0]++;
    cov_123lva18pq.s[5]++;
    // super(router);
    this.router = router;
  }

  _createClass(InterventionRoutes, [{
    key: "attachRoutes",
    value: function attachRoutes() {
      cov_123lva18pq.f[1]++;
      cov_123lva18pq.s[6]++;
      this.router.post('/test', function (request, response) {
        cov_123lva18pq.f[2]++;
        cov_123lva18pq.s[7]++;
        return response.status(200).json({
          message: 'Welcome to iReporter API',
          body: request.body
        });
      });
      cov_123lva18pq.s[8]++;
      this.router.post('/interventions', _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateSubmit, _intervention_controller["default"].createIntervention);
      cov_123lva18pq.s[9]++;
      this.router.get(SUBMIT_INTERVENTION_LINK, _token_validator["default"].userAuthentication, _intervention_controller["default"].allInterventions);
      cov_123lva18pq.s[10]++;
      this.router.get(INTERVENTIONS_GET_SPECIFIC_LINK, _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateId, _intervention_controller["default"].interventionId);
      cov_123lva18pq.s[11]++;
      this.router.patch(INTERVENTION_LOCATION_LINK, _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateId, _post_sanitizer["default"].validateLocation, _intervention_controller["default"].interventionLocation);
      cov_123lva18pq.s[12]++;
      this.router.patch(INTERVENTION_COMMENT_LINK, _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateId, _post_sanitizer["default"].validateComment, _intervention_controller["default"].editInterventionComment);
      cov_123lva18pq.s[13]++;
      this.router["delete"](INTERVENTION_STATUS_LINK, _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateId, _intervention_controller["default"].deleteIntervention);
      cov_123lva18pq.s[14]++;
      this.router.patch(INTERVENTION_STATUS_LINK, _token_validator["default"].userAuthentication, _token_validator["default"].adminAuthentication, _post_sanitizer["default"].validateId, _post_sanitizer["default"].validateStatus, _intervention_controller["default"].updateInterventionStatus);
      cov_123lva18pq.s[15]++;
      this.router.get('/users/:id/interventions/', _token_validator["default"].userAuthentication, _post_sanitizer["default"].validateId, _intervention_controller["default"].usersInterventions);
      cov_123lva18pq.s[16]++;
      return this.router;
    }
  }]);

  return InterventionRoutes;
}();

var _default = InterventionRoutes;
exports["default"] = _default;
//# sourceMappingURL=intervention_routes.js.map