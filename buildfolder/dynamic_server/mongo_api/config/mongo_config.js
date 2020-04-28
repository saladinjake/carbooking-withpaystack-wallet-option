"use strict";

var cov_lry0kw0nv = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\config\\mongo_config.js";
  var hash = "88b4c25862b7bf6f65ef3ad6806d8b9ca02e9e9e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\config\\mongo_config.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 3,
          column: 16
        }
      },
      "1": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 110,
          column: 1
        }
      },
      "2": {
        start: {
          line: 113,
          column: 0
        },
        end: {
          line: 113,
          column: 24
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
    hash: "88b4c25862b7bf6f65ef3ad6806d8b9ca02e9e9e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cov_lry0kw0nv.s[0]++;

_dotenv["default"].config();

var config = (cov_lry0kw0nv.s[1]++, {
  "debugger": true,
  apiKey: 'YOUR OWN Google API key FOR MAP',
  facebook: {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK
  },
  twitter: {
    consumerKey: 'get_your_own',
    consumerSecret: 'get_your_own',
    callbackURL: "http://localhost:1337/auth/twitter/callback"
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLLE_SECRETE_ID,
    callbackURL: process.env.GOOGLE_CALL_BACK
  },
  instagram: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://localhost:1337/auth/instagram/callback'
  },
  // facebookAuth : {
  //       clientID      : 'your-clientID-here',
  //       clientSecret  : 'your-client-secret-here',
  //       callbackURL     : 'http://localhost:4000/api/auth/facebook/callback',
  //       profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'
  //   },
  //   twitterAuth : {
  //       consumerKey        : 'your-consumer-key-here',
  //       consumerSecret     : 'your-client-secret-here',
  //       callbackURL        : 'http://localhost:4000/auth/twitter/callback'
  //   },
  //   'googleAuth' : {
  //       'clientID'         : process.env.GOOGLE_CLIENT_ID,
  //       'clientSecret'     : process.env.GOOGLLE_SECRETE_ID,
  //       'callbackURL'      : process.env.GOOGLE_CALL_BACK
  //   },
  imagesPath: '/UI/images/',
  adminEmail: 'juwavictor@gmail.com',
  mail: {
    service: 'Gmail',
    auth: {
      user: 'juwavictor@gmail.com',
      pass: 'changeThis'
    }
  },
  demo: {
    appMode: 'dummy_api',
    user: process.env.MONGO_DB_USER,
    password: process.env.MONGO_DB_PASSWORD,
    database: process.env.MONGO_DATABASE_URL,
    host: process.env.MONGO_DB_HOST,
    port: process.env.MONGO_DB_PORT,
    database_type: 'mongodb',
    max: 20,
    idleTimeoutInMillisec: 30000,
    connectionTimeoutInMillisec: 2000
  },
  development: {
    appMode: 'development',
    user: process.env.MONGO_DB_USER,
    password: process.env.MONGO_DB_PASSWORD,
    database: process.env.MONGO_DATABASE_URL,
    host: process.env.MONGO_DB_HOST,
    port: process.env.MONGO_DB_PORT,
    database_type: 'mongodb',
    max: 20,
    idleTimeoutInMillisec: 30000,
    connectionTimeoutInMillisec: 2000
  },
  test: {
    appMode: 'test',
    user: process.env.MONGO_DB_USER,
    password: process.env.MONGO_DB_PASSWORD,
    database: process.env.MONGO_DATABASE_URL,
    host: process.env.MONGO_DB_HOST,
    port: process.env.MONGO_DB_PORT,
    database_type: 'mongodb',
    max: 20,
    idleTimeoutInMillisec: 30000,
    connectionTimeoutInMillisec: 2000
  },
  production: {
    appMode: 'deploy',
    user: process.env.MONGO_DB_USER,
    password: process.env.MONGO_DB_PASSWORD,
    database: process.env.MONGO_DATABASE_URL,
    host: process.env.MONGO_DB_HOST,
    port: process.env.MONGO_DB_PORT,
    database_type: 'mongodb',
    max: 20,
    idleTimeoutInMillisec: 30000,
    connectionTimeoutInMillisec: 2000
  }
}); // export default config;

cov_lry0kw0nv.s[2]++;
module.exports = config;
//# sourceMappingURL=mongo_config.js.map