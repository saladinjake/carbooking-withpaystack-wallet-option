


'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';


let SignUpTokenSchema = new mongoose.Schema({
    _userId: { type: Number },
    email_confirm_token: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

        

      /**
       * Methods
       */
      SignUpTokenSchema.method({
      });

      
module.exports = mongoose.model('TokenModel', SignUpTokenSchema);



