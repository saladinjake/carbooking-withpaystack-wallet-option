'use strict';
const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
let SignUpTokenSchema = new mongoose.Schema({
  _userId: { type: String },
  email_confirm_token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 43200 },
});

/**
 * Methods
 */
SignUpTokenSchema.method({});

module.exports = mongoose.model('TokenModel', SignUpTokenSchema);
