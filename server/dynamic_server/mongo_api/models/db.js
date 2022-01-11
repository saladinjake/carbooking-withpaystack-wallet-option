require('dotenv').config();
import mongoose from 'mongoose';
import config from '../config/mongo_config';
//import bluebird from 'bluebird'
const debug = require('debug')('ireport:server');

/* SINGLETON */
import  util from 'util';
// make bluebird default Promise
//Promise = bluebird; // eslint-disable-line no-global-assign



mongoose.promise = global.promise
 let instance = null;
class DbQuery {
  constructor() {
    const that = this;
    this.dbLink; 
    this.pool = mongoose.createConnection("mongodb://goomauthor:16AeJTGirSj7iIxw@cluster0-shard-00-00.sf9py.mongodb.net:27017,cluster0-shard-00-01.sf9py.mongodb.net:27017,cluster0-shard-00-02.sf9py.mongodb.net:27017/goomLogisticService?ssl=true&replicaSet=atlas-uncvsq-shard-0&authSource=admin&retryWrites=true&w=majority", {
   
    

      keepAlive: 1,
      // useMongoClient: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify:false,
      useCreateIndex:true
      // add more config if you need
    });
    this.pool.on(`error`, console.error.bind(console, `connection error:`));
    // a



    
  
    // print mongoose logs in dev env
    if (config.debugger) {
      mongoose.set('debug', (collectionName, method, query, doc) => {
        debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
      });
    }
  }

  getEstablishedConnection(){
     // return this.pool;
     return mongoose.connection;
  }

  static getInstance() {
   
    if (!instance) {
      instance = new DbQuery();
    }
    return instance;
  }

  connect() {
    const { NODE_ENV } = process.env;

    if (NODE_ENV === 'development') {  //'mongodb://localhost:27017/taxi_service_final'
      this.dbLink =  'mongodb+srv://goomauthor:16AeJTGirSj7iIxw@cluster0.sf9py.mongodb.net/goomLogisticService?retryWrites=true&w=majority&ssl=true'  //'mongodb+srv://platform:@Platform123.@commutetest-f3rhn.mongodb.net/commute_taxi_service' //process.env.MONGODB_MLAB_URL || process.env.MONGO_DATABASE_URL   //process.env.MONGODB_URI || 'mongodb://localhost:27017/taxi_service_final';//config.development.database;
    } else if (NODE_ENV === 'test') {
      this.dbLink = 'mongodb+srv://goomauthor:16AeJTGirSj7iIxw@cluster0.sf9py.mongodb.net/goomLogisticService?retryWrites=true&w=majority&ssl=true'   //'mongodb+srv://platform:@Platform123.@commutetest-f3rhn.mongodb.net/commute_taxi_service' //process.env.MONGODB_MLAB_URL || process.env.MONGO_DATABASE_URL  //process.env.MONGODB_URI || 'mongodb://localhost:27017/taxi_service_final'; //config.test.database;
    } else {
      this.dbLink = 'mongodb+srv://goomauthor:16AeJTGirSj7iIxw@cluster0.sf9py.mongodb.net/goomLogisticService?retryWrites=true&w=majority&ssl=true'    //'mongodb+srv://platform:@Platform123.@commutetest-f3rhn.mongodb.net/commute_taxi_service'  //process.env.MONGODB_MLAB_URL || process.env.MONGO_DATABASE_URL //process.env.MONGODB_URI || 'mongodb://localhost:27017/taxi_service_final';  //config.production.database;
    }
    
    return this.dbLink;
  }
}





export default DbQuery;
