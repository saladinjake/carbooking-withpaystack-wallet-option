
import MongooseApp from './mongo_api/App'
// import config from "./config/dummy_config";
const debug = require('debug')('ireport-app:server');

let AppRunning = null;


let appChecker = process.argv[2] || '';
if (appChecker.length > 0) { 
  // 'dummy-api','postgresdb-api','mongoose-api','sequelize-api','knex-api', 'async-await-pg'
  switch (appChecker.toString()) {
    case 'dummy-api':
      break;
    case 'postgresdb-api':
      break;
    case 'sequelize-api':
     break;
    case 'mongoose-api':
      const MongooseAppDemo = new MongooseApp();
     AppRunning = MongooseAppDemo;
      break;
   
    default:
     const MongooseAppDemo2 = new MongooseApp();
     AppRunning = MongooseAppDemo2;
  
  }
  AppRunning.run(AppRunning.port);
} else {
   const MongooseAppDemoX = new MongooseApp();
   AppRunning = MongooseAppDemoX;
   AppRunning.run(AppRunning.port);
      
}
///for testing purpose
const app = AppRunning.express;

export default app;
