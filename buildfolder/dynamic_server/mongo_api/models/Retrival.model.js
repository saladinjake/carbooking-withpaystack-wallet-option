"use strict";

var cov_uvkrkadn6 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Retrival.model.js";
  var hash = "2d92a62cb1306ddf09f44aef7d4f985e1a44ca1b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\models\\Retrival.model.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 17
        },
        end: {
          line: 1,
          column: 36
        }
      },
      "1": {
        start: {
          line: 5,
          column: 24
        },
        end: {
          line: 61,
          column: 1
        }
      },
      "2": {
        start: {
          line: 63,
          column: 0
        },
        end: {
          line: 63,
          column: 62
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2d92a62cb1306ddf09f44aef7d4f985e1a44ca1b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var mongoose = (cov_uvkrkadn6.s[0]++, require('mongoose'));
/****************************************************************/

/******* @author saladin jake (Victor juwa) ********************************/

/******* @desc Express js || ****************/

var RetrievalSchema = (cov_uvkrkadn6.s[1]++, new mongoose.Schema({
  status: {
    type: String,
    "enum": ['Pending', 'Completed'],
    "default": 'Pending'
  },
  retrievalDate: {
    type: Date,
    required: true
  },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'partner_collections',
    required: true
  },
  partnerID: {
    type: String
  },
  partnerEmail: {
    type: String,
    required: true
  },
  partnerName: {
    type: String,
    required: true
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cars_collections',
    required: true
  },
  vehicleID: {
    type: String
  },
  vehicleName: {
    type: String,
    required: true
  },
  vehiclePlateNo: {
    type: String,
    required: true
  },
  retrievalComments: {
    type: String
  },
  date_created: {
    type: Date,
    "default": Date.now
  }
}, {
  collection: 'retrieval_collections',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}));
cov_uvkrkadn6.s[2]++;
module.exports = mongoose.model('Retrieval', RetrievalSchema);
//# sourceMappingURL=Retrival.model.js.map