/************************************
 * COMMUTE TAXI BOOKING PROJECT
 *@author: saladin jake
 *@datemodified:4/12/2022
 */
import MongooseApp from './mongo_api/App';
// import config from "./config/dummy_config";
const debug = require('debug')('commute:server');
let  AppRunning = null;
const MongooseAppDemoX = new MongooseApp();
AppRunning = MongooseAppDemoX;
AppRunning.run(AppRunning.port);
const app = AppRunning.express;

export default app;
