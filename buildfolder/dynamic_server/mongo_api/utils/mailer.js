"use strict";

var cov_4han64fy = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\utils\\mailer.js";
  var hash = "0c85a7119fcc8edfa6ae75d6fd7bfa5ca7bea9da";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\utils\\mailer.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 15
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 14
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 39,
          column: 3
        }
      },
      "3": {
        start: {
          line: 17,
          column: 24
        },
        end: {
          line: 25,
          column: 6
        }
      },
      "4": {
        start: {
          line: 27,
          column: 17
        },
        end: {
          line: 33,
          column: 6
        }
      },
      "5": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 61
        }
      },
      "6": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 80
        }
      },
      "7": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 11,
            column: 16
          }
        },
        loc: {
          start: {
            line: 11,
            column: 35
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 11
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
      "7": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "0c85a7119fcc8edfa6ae75d6fd7bfa5ca7bea9da"
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

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cov_4han64fy.s[0]++;

/**
 *@description - A function for sending mail
 *
 * @param {Object} mailData Mail Details
 *
 * @returns {void} void
 */
var mailer = function mailer(mailData) {
  var _ref, to, subject, text, html, transporter, info;

  return regeneratorRuntime.async(function mailer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cov_4han64fy.f[0]++;
          _ref = (cov_4han64fy.s[1]++, mailData), to = _ref.to, subject = _ref.subject, text = _ref.text, html = _ref.html;
          cov_4han64fy.s[2]++;
          _context.prev = 3;
          transporter = (cov_4han64fy.s[3]++, _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASSWORD
            }
          }));
          cov_4han64fy.s[4]++;
          _context.next = 8;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: '"Banka App " <tejumoladavid@gmail.com>',
            to: to,
            subject: subject,
            text: text,
            html: html
          }));

        case 8:
          info = _context.sent;
          cov_4han64fy.s[5]++;
          (0, _debug["default"])('development')('Message sent: %s', info.messageId);
          cov_4han64fy.s[6]++;
          (0, _debug["default"])('development')('Preview URL: %s', _nodemailer["default"].getTestMessageUrl(info));
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](3);
          cov_4han64fy.s[7]++;
          (0, _debug["default"])('development')(_context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 15]]);
};

var _default = mailer;
exports["default"] = _default;
//# sourceMappingURL=mailer.js.map