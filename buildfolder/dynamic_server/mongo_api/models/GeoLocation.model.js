'use strict';

var cov_jy8hdz1re = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\GeoLocation.model.js";
  var hash = "8f8f30ec1e19783b7e0735c46e0df56596722d40";
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
          line: 5,
          column: 24
        },
        end: {
          line: 51,
          column: 2
        }
      },
      "2": {
        start: {
          line: 53,
          column: 0
        },
        end: {
          line: 53,
          column: 65
        }
      },
      "3": {
        start: {
          line: 56,
          column: 0
        },
        end: {
          line: 56,
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
    hash: "8f8f30ec1e19783b7e0735c46e0df56596722d40"
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