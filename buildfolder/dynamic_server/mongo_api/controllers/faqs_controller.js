"use strict";

var cov_1u1z2e79pn = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\faqs_controller.js";
  var hash = "b1ef02e6817327d5d966f80924891145b9d8a4cc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\faqs_controller.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 52
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        loc: {
          start: {
            line: 6,
            column: 38
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 38
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b1ef02e6817327d5d966f80924891145b9d8a4cc"
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
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _faqs_service = require("../services/faqs_service");

/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/
var FaqsController = /*#__PURE__*/function () {
  function FaqsController() {
    (0, _classCallCheck2["default"])(this, FaqsController);
  }

  (0, _createClass2["default"])(FaqsController, null, [{
    key: "createQnA",
    value: function createQnA(request, response) {
      cov_1u1z2e79pn.f[0]++;
      cov_1u1z2e79pn.s[0]++;
      return _faqs_service.FaqsService.createQnA(request, response);
    }
  }, {
    key: "getAllQnA",
    value: function getAllQnA(request, response) {
      cov_1u1z2e79pn.f[1]++;
      cov_1u1z2e79pn.s[1]++;
      return _faqs_service.FaqsService.getAllQnA(request, response);
    } // static carsId(request, response) {
    //   return FaqsService.QnAId(request, response);
    // }
    // static editCars(request, response) {
    //   return FaqsService.editQnA(request, response);
    // }

  }]);
  return FaqsController;
}();

exports["default"] = FaqsController;
//# sourceMappingURL=faqs_controller.js.map