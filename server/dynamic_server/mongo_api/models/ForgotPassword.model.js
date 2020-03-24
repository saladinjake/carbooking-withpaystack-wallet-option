'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';
let PasswordForgotTokenSchema = new mongoose.Schema({
    _userId: { type: Number },
    email_confirm_token: { type: String, required: true },
    email_to_reset: {type:String, required: true},
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

      
module.exports = mongoose.model('PasswordForgotTokenModel', PasswordForgotTokenSchema);



