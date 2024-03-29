'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let SendgridEmailSettingSchema = new mongoose.Schema({
        id :{
          type: Number,
         
          default: 0
        },
         api_mode:{
          type: String,
          default:"test"
        },
        test_secret_key:{
          type:String
        },
        test_public_key:{
          type:String,
          default:"NO KEY SET YET"
        },
        live_secret_key:{
          type:String,
          default:"NO KEY SET YET"
        },
        live_public_key:{
          type:String,
          default:"NO KEY SET YET"
        },
        settings_type:{
           type: String,
           default:"sendgrid"
        }
        
        
      },{
        collection: 'sendgrid_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

SendgridEmailSettingSchema.set('toJSON', {getters: true, virtuals: true});

SendgridEmailSettingSchema.statics = {
             
             // Add Intervention
            addSettings(user, callback)  {
              return this.create(user, callback);
            },

     
};

module.exports = mongoose.model('SendgridEmailSettingModel', SendgridEmailSettingSchema);


