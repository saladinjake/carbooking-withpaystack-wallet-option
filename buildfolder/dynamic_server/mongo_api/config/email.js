"use strict";

var cov_565wif5rz = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\config\\email.js";
  var hash = "c4627b20d74ddcae0995cb9011595449a420a23a";
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
          line: 25,
          column: 3
        }
      },
      "5": {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "6": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 31,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 27,
            column: 28
          },
          end: {
            line: 27,
            column: 29
          }
        },
        loc: {
          start: {
            line: 27,
            column: 48
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 27
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
    hash: "c4627b20d74ddcae0995cb9011595449a420a23a"
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
  service: environment.GMAIL_SERVICE_NAME,
  host: environment.GMAIL_SERVICE_HOST,
  //secure:environment.GMAIL_SERVICE_SECURE,
  port: environment.GMAIL_SERVICE_PORT,
  auth: {
    user: environment.GMAIL_USER_NAME,
    pass: environment.GMAIL_USER_PASSWORD
  }
});
cov_565wif5rz.s[4]++;
module.exports.SMTPTransport = nodemailer.createTransport({
  host: environment.SMTP_SERVICE_HOST,
  port: environment.SMTP_SERVICE_PORT,
  secure: environment.SMTP_SERVICE_SECURE,
  // upgrade later with STARTTLS
  debug: true,
  auth: {
    user: environment.SMTP_USER_NAME,
    pass: environment.SMTP_USER_PASSWORD
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