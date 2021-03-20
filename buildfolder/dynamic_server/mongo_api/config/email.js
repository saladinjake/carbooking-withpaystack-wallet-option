"use strict";

var cov_565wif5rz = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\config\\email.js";
  var hash = "6ed772e71338f3ffa81b7bc3d7d6006be6341706";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\config\\email.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 17
        },
        end: {
          line: 1,
          column: 38
        }
      },
      "1": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 2,
          column: 27
        }
      },
      "2": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 29
        }
      },
      "3": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "4": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "5": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "6": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 36,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 32,
            column: 28
          },
          end: {
            line: 32,
            column: 29
          }
        },
        loc: {
          start: {
            line: 32,
            column: 48
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 32
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
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "6ed772e71338f3ffa81b7bc3d7d6006be6341706"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var nodemailer = (cov_565wif5rz.s[0]++, require('nodemailer'));
cov_565wif5rz.s[1]++;

require('dotenv').config();

var environment = (cov_565wif5rz.s[2]++, process.env);
cov_565wif5rz.s[3]++;
module.exports.GmailTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.google.com",
  //secure:environment.GMAIL_SERVICE_SECURE,
  port: 587,
  auth: {
    user: "juwavictor@gmail.com",
    pass: "saladin123!@#9999320392dsdjseuw823829"
  }
});
cov_565wif5rz.s[4]++;
module.exports.SMTPTransport = nodemailer.createTransport({
  host: "mail.softclo.com",
  port: 587,
  secure: false,
  // upgrade later with STARTTLS
  debug: true,
  auth: {
    user: "tester@softclo.com",
    pass: "Tester@123"
  },
  tls: {
    rejectUnauthorized: false
  }
});
cov_565wif5rz.s[5]++;

module.exports.ViewOption = function (transport, hbs) {
  cov_565wif5rz.f[0]++;
  cov_565wif5rz.s[6]++;
  transport.use('compile', hbs({
    viewPath: 'views/email',
    extName: '.hbs'
  }));
};
//# sourceMappingURL=email.js.map