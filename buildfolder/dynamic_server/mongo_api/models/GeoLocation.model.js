'use strict';

var cov_jy8hdz1re = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\GeoLocation.model.js";
  var hash = "64519f47c86c6f11c3644b5cc492ba6084c081f8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\GeoLocation.model.js",
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
          column: 24
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "2": {
        start: {
          line: 56,
          column: 0
        },
        end: {
          line: 56,
          column: 67
        }
      },
      "3": {
        start: {
          line: 58,
          column: 0
        },
        end: {
          line: 58,
          column: 71
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "64519f47c86c6f11c3644b5cc492ba6084c081f8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Promise = (cov_jy8hdz1re.s[0]++, require('bluebird'));

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var GeoLocationSchema = (cov_jy8hdz1re.s[1]++, new _mongoose["default"].Schema({
  id: {
    type: Number,
    "default": 0
  },
  assigned_car_id: {
    type: Number,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  assigned_driver_id: {
    type: Number
  },
  _drivers: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'DriverModel'
  },
  _cars: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'PlanModel'
  },
  _users: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'UserModel'
  },
  _mapLocation: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'GeoLocationModel'
  },
  created_at: {
    type: Date,
    "default": Date.now
  },
  updated_at: {
    type: Date,
    "default": Date.now
  }
}, {
  collection: 'geolocation_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_jy8hdz1re.s[2]++;
GeoLocationSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
cov_jy8hdz1re.s[3]++;
module.exports = _mongoose["default"].model('GeoLocationModel', GeoLocationSchema);
//# sourceMappingURL=GeoLocation.model.js.map