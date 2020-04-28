"use strict";

var cov_ptmr012lf = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\customer.validation.js";
  var hash = "54c2ba489718d5267fc158bcf1c08e1f8abce5b4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\helpers\\customer.validation.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 12
        },
        end: {
          line: 1,
          column: 26
        }
      },
      "1": {
        start: {
          line: 2,
          column: 17
        },
        end: {
          line: 2,
          column: 48
        }
      },
      "2": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 68,
          column: 2
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
    hash: "54c2ba489718d5267fc158bcf1c08e1f8abce5b4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var Joi = (cov_ptmr012lf.s[0]++, require('joi'));
var Customer = (cov_ptmr012lf.s[1]++, require('../models/User.model'));
cov_ptmr012lf.s[2]++;
module.exports = {
  // POST /v1/ewallet/transfer
  walletTransfer: {
    body: {
      amount: Joi.number().positive().precision(2).min(10).max(50000).required(),
      destinationAccountNumber: Joi.number().required()
    }
  },
  // POST /v1/ewallet/deposit
  walletDeposit: {
    body: {
      amount: Joi.number().positive().precision(2).min(10).max(50000).required(),
      card: Joi.string().creditCard().required()
    }
  },
  // GET /v1/customers
  listCustomers: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      name: Joi.string(),
      email: Joi.string() //role: Joi.string().valid(Customer.roles),

    }
  },
  // POST /v1/customers
  createCustomer: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(128).required(),
      name: Joi.string().max(128) //role: Joi.string().valid(Customer.roles),

    }
  },
  // PUT /v1/customers/:customerId
  replaceCustomer: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(128).required(),
      name: Joi.string().max(128) // role: Joi.string().valid(Customer.roles),

    },
    params: {// customerId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    }
  },
  // PATCH /v1/customers/:customerId
  updateCustomer: {
    body: {
      email: Joi.string().email(),
      password: Joi.string().min(6).max(128),
      name: Joi.string().max(128) // role: Joi.string().valid(Customer.roles),

    },
    params: {// customerId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
    }
  }
};
//# sourceMappingURL=customer.validation.js.map