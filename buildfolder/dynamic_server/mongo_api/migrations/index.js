"use strict";

var cov_2hijydav3u = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\migrations\\index.js";
  var hash = "1cb759f94b106b60e61977de7b885afa092fd349";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\migrations\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 38,
          column: 18
        },
        end: {
          line: 47,
          column: 1
        }
      },
      "1": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 46,
          column: 5
        }
      },
      "2": {
        start: {
          line: 49,
          column: 15
        },
        end: {
          line: 76,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 38,
            column: 18
          },
          end: {
            line: 38,
            column: 19
          }
        },
        loc: {
          start: {
            line: 38,
            column: 24
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 38
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1cb759f94b106b60e61977de7b885afa092fd349"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _User = _interopRequireDefault(require("../models/User.model"));

var _Partners = _interopRequireDefault(require("../models/Partners.model"));

var _Driver = _interopRequireDefault(require("../models/Driver.model"));

var _SOS = _interopRequireDefault(require("../models/SOS.model"));

var _Feedback = _interopRequireDefault(require("../models/Feedback.model"));

var _Cars = _interopRequireDefault(require("../models/Cars.model"));

var _Plan = _interopRequireDefault(require("../models/Plan.model"));

var _IndividualPlan = _interopRequireDefault(require("../models/IndividualPlan.model"));

var _CoperatePlan = _interopRequireDefault(require("../models/CoperatePlan.model"));

var _UserPlan = _interopRequireDefault(require("../models/UserPlan.model"));

var _Itinerary = _interopRequireDefault(require("../models/Itinerary.model"));

var _FAQ = _interopRequireDefault(require("../models/FAQ.model"));

var _Notification = _interopRequireDefault(require("../models/Notification.model"));

var _Repairs = _interopRequireDefault(require("../models/Repairs.model"));

var _PaystackSettings = _interopRequireDefault(require("../models/PaystackSettings.model"));

var _FacebookSettings = _interopRequireDefault(require("../models/FacebookSettings.model"));

var _GmailSettings = _interopRequireDefault(require("../models/GmailSettings.model"));

var _InstagramSettings = _interopRequireDefault(require("../models/InstagramSettings.model"));

var _AWS3BucketSettings = _interopRequireDefault(require("../models/AWS3BucketSettings.model"));

var _SendgridEmailSettings = _interopRequireDefault(require("../models/SendgridEmailSettings.model"));

var _Wallet = _interopRequireDefault(require("../models/Wallet.model"));

var _Payments = _interopRequireDefault(require("../models/Payments.model"));

var _Quotation = _interopRequireDefault(require("../models/Quotation.model"));

var _Quote = _interopRequireDefault(require("../models/Quote.model"));

var _Inspection = _interopRequireDefault(require("../models/Inspection.model"));

var _DriveTest = _interopRequireDefault(require("../models/DriveTest.model"));

var _RolesAndPreviledges = _interopRequireDefault(require("../models/RolesAndPreviledges.model"));

cov_2hijydav3u.s[0]++;

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var connectDb = function connectDb() {
  cov_2hijydav3u.f[0]++;
  cov_2hijydav3u.s[1]++;
  return _mongoose["default"].connect(process.env.DATABASE_URL, {
    keepAlive: 1,
    // useMongoClient: true,
    useNewUrlParser: true,
    // useUnifiedTopology: false,
    useFindAndModify: false,
    useCreateIndex: true
  });
};

exports.connectDb = connectDb;
var models = (cov_2hijydav3u.s[2]++, {
  RolesAndPreviledgesModel: _RolesAndPreviledges["default"],
  DriveTestModel: _DriveTest["default"],
  InspectionModel: _Inspection["default"],
  QuoteModel: _Quote["default"],
  PaymentsModel: _Payments["default"],
  WalletModel: _Wallet["default"],
  SendgridSettingsModel: _SendgridEmailSettings["default"],
  AWSSettingsModel: _AWS3BucketSettings["default"],
  InstagramSettingsModel: _InstagramSettings["default"],
  UserModel: _User["default"],
  PartnerModel: _Partners["default"],
  DriversModel: _Driver["default"],
  SOSModel: _SOS["default"],
  FeedbackModel: _Feedback["default"],
  CarModel: _Cars["default"],
  PlanModel: _Plan["default"],
  IndividualPlanModel: _IndividualPlan["default"],
  CoperatePlanModel: _CoperatePlan["default"],
  UsersPlanModel: _UserPlan["default"],
  ItineraryModel: _Itinerary["default"],
  FAQModel: _FAQ["default"],
  NotificationModel: _Notification["default"],
  MechModel: _Repairs["default"],
  PayStackSettingsModel: _PaystackSettings["default"],
  FacebookSettingsModel: _FacebookSettings["default"],
  GoogleSettingsModel: _GmailSettings["default"]
});
var _default = models;
exports["default"] = _default;
//# sourceMappingURL=index.js.map