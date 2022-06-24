'use strict';

var cov_tbldnk2xg = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\PaidPartnerEarnings.model.js";
  var hash = "601ca861fd29eec4df75c22ea6534a6903b8ff89";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\PaidPartnerEarnings.model.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 16
        },
        end: {
          line: 2,
          column: 35
        }
      },
      "1": {
        start: {
          line: 7,
          column: 30
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "2": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 73
        }
      },
      "3": {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 40,
          column: 2
        }
      },
      "4": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 39
        }
      },
      "5": {
        start: {
          line: 42,
          column: 0
        },
        end: {
          line: 42,
          column: 83
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        loc: {
          start: {
            line: 37,
            column: 34
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 37
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "601ca861fd29eec4df75c22ea6534a6903b8ff89"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_tbldnk2xg.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var AuditNotificationSchema = (cov_tbldnk2xg.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: Number,
    "default": 0
  },
  date: {
    type: String
  },
  admin: {
    type: String
  },
  avatar: {
    type: String
  },
  user: {
    type: String
  },
  module_name: {
    type: String
  },
  status: {
    type: String
  },
  message_type: {
    type: String
  },
  logMessage: {
    type: String
  }
}, {
  collection: 'auditnotification_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_tbldnk2xg.s[2]++;
AuditNotificationSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
/**
 * Statics
 */

cov_tbldnk2xg.s[3]++;
AuditNotificationSchema.statics = {
  // Add Intervention
  addNotification: function addNotification(user, callback) {
    cov_tbldnk2xg.f[0]++;
    cov_tbldnk2xg.s[4]++;
    return this.create(user, callback);
  }
};
cov_tbldnk2xg.s[5]++;
module.exports = _mongoose["default"].model('AuditNotificationModel', AuditNotificationSchema);
//# sourceMappingURL=PaidPartnerEarnings.model.js.map