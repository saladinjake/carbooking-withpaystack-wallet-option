import dotenv from 'dotenv';

dotenv.config();
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
const config = {
  debugger: true,
  apiKey: 'YOUR OWN Google API key FOR MAP',

  facebook: {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK,
  },
  twitter: {
    consumerKey: 'get_your_own',
    consumerSecret: 'get_your_own',
    callbackURL: 'http://localhost:1337/auth/twitter/callback',
  },

  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLLE_SECRETE_ID,
    callbackURL: process.env.GOOGLE_CALL_BACK,
  },
  instagram: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://localhost:1337/auth/instagram/callback',
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
      pass: 'changeThis',
    },
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
    connectionTimeoutInMillisec: 2000,
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
    connectionTimeoutInMillisec: 2000,
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
    connectionTimeoutInMillisec: 2000,
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
    connectionTimeoutInMillisec: 2000,
  },
};

// export default config;
module.exports = config;
