"use strict";

var cov_ty95d0g86 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\sos_routes.js";
  var hash = "c51ff6f30c8cbc58fd9b3d76f4e52d79fbdb21bc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\sos_routes.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 28
        },
        end: {
          line: 7,
          column: 34
        }
      },
      "1": {
        start: {
          line: 8,
          column: 34
        },
        end: {
          line: 8,
          column: 44
        }
      },
      "2": {
        start: {
          line: 9,
          column: 30
        },
        end: {
          line: 9,
          column: 49
        }
      },
      "3": {
        start: {
          line: 10,
          column: 29
        },
        end: {
          line: 10,
          column: 47
        }
      },
      "4": {
        start: {
          line: 11,
          column: 28
        },
        end: {
          line: 11,
          column: 45
        }
      },
      "5": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "6": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 27,
          column: 6
        }
      },
      "7": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 34,
          column: 6
        }
      },
      "8": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 41,
          column: 6
        }
      },
      "9": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 48,
          column: 6
        }
      },
      "10": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 22
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 17
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 19
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
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c51ff6f30c8cbc58fd9b3d76f4e52d79fbdb21bc"
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

var _sos_controller = _interopRequireDefault(require("../controllers/sos_controller"));

var _token_validator = _interopRequireDefault(require("../middlewares/token_validator"));

var _post_sanitizer = _interopRequireDefault(require("../middlewares/post_sanitizer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import BridgeRoutes from './routes';
var SUBMIT_REDFLAG_LINK = (cov_ty95d0g86.s[0]++, '/sos');
var REDFLAG_GET_SPECIFIC_LINK = (cov_ty95d0g86.s[1]++, '/sos/:id');
var REDFLAG_LOCATION_LINK = (cov_ty95d0g86.s[2]++, '/sos/:id/location');
var REDFLAG_COMMENT_LINK = (cov_ty95d0g86.s[3]++, '/sos/:id/comment');
var REDFLAG_STATUS_LINK = (cov_ty95d0g86.s[4]++, '/sos/:id/status');

var RedFlagRoutes =
/*#__PURE__*/
function () {
  function RedFlagRoutes(router) {
    _classCallCheck(this, RedFlagRoutes);

    cov_ty95d0g86.f[0]++;
    cov_ty95d0g86.s[5]++;
    // super(router);
    this.router = router;
  }

  _createClass(RedFlagRoutes, [{
    key: "attachRoutes",
    value: function attachRoutes() {
      cov_ty95d0g86.f[1]++;
      cov_ty95d0g86.s[6]++;
      this.router.post('/sos', _token_validator["default"].userAuthentication, // SubmitEventValidator.validateSubmit,
      _sos_controller["default"].createRedFlag);
      cov_ty95d0g86.s[7]++;
      this.router.get('/sos/:id/users', _token_validator["default"].userAuthentication, // SubmitEventValidator.validateSubmit,
      _sos_controller["default"].usersRedflags);
      cov_ty95d0g86.s[8]++;
      this.router.post('/notifications', _token_validator["default"].userAuthentication, _sos_controller["default"].sendNotifications);
      cov_ty95d0g86.s[9]++;
      this.router.get('/notifications/:id', _token_validator["default"].userAuthentication, _sos_controller["default"].getNotifications);
      cov_ty95d0g86.s[10]++;
      return this.router;
    }
  }]);

  return RedFlagRoutes;
}();

var _default = RedFlagRoutes;
exports["default"] = _default;
//# sourceMappingURL=sos_routes.js.map