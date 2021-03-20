const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

//'mongodb://localhost:27017/taxi_service_final'
const url = 'mongodb://localhost:27017/taxi_service_final' //'mongodb+srv://platform:@Platform123.@commutetest-f3rhn.mongodb.net/commute_taxi_service';

const connect = mongoose.connect(url, { 
      keepAlive: 1,
      // useMongoClient: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify:false,
      useCreateIndex:true
});

module.exports = connect;
