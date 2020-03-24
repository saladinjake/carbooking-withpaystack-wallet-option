'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let SettingSchema = new mongoose.Schema({
        id :{
          type: Number,
         
          default: 0
        },
        ssl_mode:{
          type: Boolean,
          required:true
        },
        general_email:{
          type: String,
          required:true
        },
        smtp_username:{
          type: String,
          required: true
        },
        smtp_password: {
          type: String,
          required: true
        },
        
        offline_message:{
          type: Number
        },
        status: {type: String, enum:['offline', 'online']},
        logo: {type: String},
        slogan: {type:String},
        footer_content: {type:String},
        created_at : {
          type: Date,
          default: Date.now
        },
        updated_at :{
          type: Date,
          default: Date.now
        },
       
      },{
        collection: 'setting_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

SettingSchema.set('toJSON', {getters: true, virtuals: true});

     

module.exports = mongoose.model('SettingModel', SettingSchema);


