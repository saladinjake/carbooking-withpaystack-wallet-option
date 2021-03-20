'use strict';

var cov_2dlnydypso = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\RolesAndPreviledges.model.js";
  var hash = "64d5b848e717447ae21e843c6659b6fd6aabe0c3";
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
          line: 5,
          column: 32
        },
        end: {
          line: 228,
          column: 2
        }
      },
      "2": {
        start: {
          line: 230,
          column: 0
        },
        end: {
          line: 230,
          column: 73
        }
      },
      "3": {
        start: {
          line: 234,
          column: 0
        },
        end: {
          line: 242,
          column: 2
        }
      },
      "4": {
        start: {
          line: 238,
          column: 4
        },
        end: {
          line: 238,
          column: 39
        }
      },
      "5": {
        start: {
          line: 243,
          column: 0
        },
        end: {
          line: 243,
          column: 87
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 237,
            column: 2
          },
          end: {
            line: 237,
            column: 3
          }
        },
        loc: {
          start: {
            line: 237,
            column: 27
          },
          end: {
            line: 239,
            column: 3
          }
        },
        line: 237
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
    hash: "64d5b848e717447ae21e843c6659b6fd6aabe0c3"
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

var _ref;

var Promise = (cov_2dlnydypso.s[0]++, require('bluebird'));
var RolesAndPreviledgesSchema = (cov_2dlnydypso.s[1]++, new _mongoose["default"].Schema((_ref = {
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
    "enum": ["Active", "Dormant", "Disabled", "Suspended"],
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
}, (0, _defineProperty2["default"])(_ref, "view_payments", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_quotations", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_cars", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_drivers", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_partners", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_sos", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_package", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_bookings", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_tickets", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_faqs", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_settings", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_users", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_admins", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_car_inspection", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "view_drive_test", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_payments", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_transactions", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_quotations", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_cars", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_drivers", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_partners", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_sos", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_package", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_bookings", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_tickets", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_faqs", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_settings", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_users", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_admins", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_car_inspection", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "manage_drive_test", {
  type: String,
  "default": 'yes'
}), (0, _defineProperty2["default"])(_ref, "created_at", {
  type: Date,
  "default": Date.now
}), (0, _defineProperty2["default"])(_ref, "updated_at", {
  type: Date,
  "default": Date.now
}), (0, _defineProperty2["default"])(_ref, "usergroup_set", {
  type: Array,
  "default": ['user', 'simple_admin', 'super_admin', 'Simple Admin', 'Moderator Admin', 'Super Admin', 'Inspection Manager', 'Partners Manager', 'Hr', 'Accountant']
}), _ref), {
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