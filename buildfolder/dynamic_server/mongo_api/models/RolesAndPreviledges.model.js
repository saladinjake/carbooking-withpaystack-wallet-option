'use strict';

var cov_2dlnydypso = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\RolesAndPreviledges.model.js";
  var hash = "7007560252f008c3adf7b079c6f21e2e47a54380";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\RolesAndPreviledges.model.js",
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
          column: 32
        },
        end: {
          line: 208,
          column: 1
        }
      },
      "2": {
        start: {
          line: 210,
          column: 0
        },
        end: {
          line: 210,
          column: 75
        }
      },
      "3": {
        start: {
          line: 212,
          column: 0
        },
        end: {
          line: 217,
          column: 2
        }
      },
      "4": {
        start: {
          line: 215,
          column: 4
        },
        end: {
          line: 215,
          column: 39
        }
      },
      "5": {
        start: {
          line: 218,
          column: 0
        },
        end: {
          line: 218,
          column: 87
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 214,
            column: 2
          },
          end: {
            line: 214,
            column: 3
          }
        },
        loc: {
          start: {
            line: 214,
            column: 26
          },
          end: {
            line: 216,
            column: 3
          }
        },
        line: 214
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
    hash: "7007560252f008c3adf7b079c6f21e2e47a54380"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoose$Schema;

var Promise = (cov_2dlnydypso.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var RolesAndPreviledgesSchema = (cov_2dlnydypso.s[1]++, new _mongoose["default"].Schema((_mongoose$Schema = {
  id: {
    type: Number,
    "default": 0
  },
  for_admins: {
    type: Boolean,
    "default": true
  },
  previledges_info: {
    type: String
  },
  previledges_description: {
    type: String
  },
  status: {
    type: String,
    "enum": ['Active', 'Dormant', 'Disabled', 'Suspended'],
    "default": 'Active'
  },
  view_payments: {
    type: String,
    "default": 'yes'
  },
  view_transactions: {
    type: String,
    "default": 'yes'
  }
}, (0, _defineProperty2["default"])(_mongoose$Schema, "view_payments", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_quotations", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_cars", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_drivers", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_partners", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_sos", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_package", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_bookings", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_tickets", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_faqs", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_settings", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_users", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_admins", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_car_inspection", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "view_drive_test", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_payments", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_transactions", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_quotations", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_cars", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_drivers", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_partners", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_sos", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_package", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_bookings", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_tickets", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_faqs", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_settings", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_users", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_admins", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_car_inspection", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "manage_drive_test", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_mongoose$Schema, "created_at", {
  type: Date,
  "default": Date.now
}), (0, _defineProperty2["default"])(_mongoose$Schema, "updated_at", {
  type: Date,
  "default": Date.now
}), (0, _defineProperty2["default"])(_mongoose$Schema, "usergroup_set", {
  type: Array,
  "default": ['user', 'simple_admin', 'super_admin', 'Simple Admin', 'Moderator Admin', 'Super Admin', 'Inspection Manager', 'Partners Manager', 'Hr', 'Accountant']
}), _mongoose$Schema), {
  collection: 'admin_rolesmn_previledges_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_2dlnydypso.s[2]++;
RolesAndPreviledgesSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
cov_2dlnydypso.s[3]++;
RolesAndPreviledgesSchema.statics = {
  // Add Intervention
  addRole: function addRole(user, callback) {
    cov_2dlnydypso.f[0]++;
    cov_2dlnydypso.s[4]++;
    return this.create(user, callback);
  }
};
cov_2dlnydypso.s[5]++;
module.exports = _mongoose["default"].model('RolesAndPreviledgesModel', RolesAndPreviledgesSchema);
//# sourceMappingURL=RolesAndPreviledges.model.js.map