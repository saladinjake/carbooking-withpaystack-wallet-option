"use strict";

var cov_1u1z2e79pn = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\faqs_controller.js";
  var hash = "af2966e9b4fa3e97cc1eedaa6750e5ec7e65703e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\controllers\\faqs_controller.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 52
        }
      },
      "1": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 38
          },
          end: {
            line: 7,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 38
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 9
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
    hash: "af2966e9b4fa3e97cc1eedaa6750e5ec7e65703e"
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

var _faqs_service = require("../services/faqs_service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FaqsController =
/*#__PURE__*/
function () {
  function FaqsController() {
    _classCallCheck(this, FaqsController);
  }

  _createClass(FaqsController, null, [{
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