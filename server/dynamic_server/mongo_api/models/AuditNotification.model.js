'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let AuditNotificationSchema = new mongoose.Schema({
        id :{
          type: Number,
         
          default: 0
        },

        date: {type:String},
           admin:{type:String},
           avatar:{type:String},
           user:{type:String},
           module_name:{type:String},
           status:{type:String},
           message_type:{type:String},
           logMessage:{type:String},
        
        
        
        
       
      },{
        collection: 'auditnotification_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

AuditNotificationSchema.set('toJSON', {getters: true, virtuals: true});

      
      /**
       * Statics
       */
AuditNotificationSchema.statics = {
             // Add Intervention
            addNotification (user, callback)  {
              return this.create(user, callback);
            },

            

           
      }

     

module.exports = mongoose.model('AuditNotificationModel', AuditNotificationSchema);



