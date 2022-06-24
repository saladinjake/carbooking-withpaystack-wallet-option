"use strict";

var cov_2ggvladhoy = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\googleauth.js";
  var hash = "1ad773cdb3ad0c6d9e862162a1a6bab9c104d0cb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\api\\googleauth.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 19
        },
        end: {
          line: 1,
          column: 40
        }
      },
      "1": {
        start: {
          line: 2,
          column: 13
        },
        end: {
          line: 2,
          column: 49
        }
      },
      "2": {
        start: {
          line: 8,
          column: 52
        },
        end: {
          line: 8,
          column: 65
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 84
        }
      },
      "4": {
        start: {
          line: 13,
          column: 16
        },
        end: {
          line: 16,
          column: 6
        }
      },
      "5": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 15
        }
      },
      "6": {
        start: {
          line: 21,
          column: 24
        },
        end: {
          line: 21,
          column: 62
        }
      },
      "7": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 57
        }
      },
      "8": {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 26,
          column: 6
        }
      },
      "9": {
        start: {
          line: 27,
          column: 17
        },
        end: {
          line: 27,
          column: 56
        }
      },
      "10": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 16
        }
      },
      "11": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 32,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 16
          },
          end: {
            line: 10,
            column: 3
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 22
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
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
            column: 26
          },
          end: {
            line: 29,
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
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1ad773cdb3ad0c6d9e862162a1a6bab9c104d0cb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ref = (cov_2ggvladhoy.s[0]++, require('googleapis')),
    google = _ref.google;

var config = (cov_2ggvladhoy.s[1]++, require('../../config/mongo_config'));
/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/

var googleApi = /*#__PURE__*/function () {
  function googleApi() {
    (0, _classCallCheck2["default"])(this, googleApi);
    cov_2ggvladhoy.f[0]++;

    var _ref2 = (cov_2ggvladhoy.s[2]++, config.google),
        clientID = _ref2.clientID,
        clientSecret = _ref2.clientSecret,
        callbackURL = _ref2.callbackURL;

    cov_2ggvladhoy.s[3]++;
    this.oAuth2Client = new google.auth.OAuth2(clientID, clientSecret, callbackURL);
  }

  (0, _createClass2["default"])(googleApi, [{
    key: "generateUrl",
    value: function generateUrl(scopes) {
      cov_2ggvladhoy.f[1]++;
      var url = (cov_2ggvladhoy.s[4]++, this.oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes.join(' ')
      }));
      cov_2ggvladhoy.s[5]++;
      return url;
    }
  }, {
    key: "getUserInfo",
    value: function () {
      var _getUserInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(code) {
        var credentials, plus, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cov_2ggvladhoy.f[2]++;
                cov_2ggvladhoy.s[6]++;
                _context.next = 4;
                return this.oAuth2Client.getToken(code);

              case 4:
                credentials = _context.sent;
                cov_2ggvladhoy.s[7]++;
                this.oAuth2Client.setCredentials(credentials.tokens);
                plus = (cov_2ggvladhoy.s[8]++, google.plus({
                  version: 'v1',
                  auth: this.oAuth2Client
                }));
                cov_2ggvladhoy.s[9]++;
                _context.next = 11;
                return plus.people.get({
                  userId: 'me'
                });

              case 11:
                data = _context.sent;
                cov_2ggvladhoy.s[10]++;
                return _context.abrupt("return", data);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserInfo(_x) {
        return _getUserInfo.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }]);
  return googleApi;
}();

cov_2ggvladhoy.s[11]++;
module.exports = new googleApi();
//# sourceMappingURL=googleauth.js.map