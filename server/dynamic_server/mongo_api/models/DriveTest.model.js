'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let DriveTestSchema = new mongoose.Schema({
        id :{
          type: Number,
         
          default: 0
        },
        status:{
          type: String,
          enum:[
           'Pending',
           'Completed'
          ]
        },
        test_center: {
          type: String
        },
        description:{
          type: String,
          required:true
        },

        username : {
          type: String,
          
        },
        email : {
          type: String,
        
        },

        time: {
          type: String
        },

        createdDate:{
          type:String
        },
        
        phone_number : {
          type: String
        },

        car_id: {
          type:String,
        },
        
        created_at : {
          type: Date,
          default: Date.now
        },
        updated_at :{
          type: Date,
          default: Date.now
        },
       
      },{
        collection: 'drivetest_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

DriveTestSchema.set('toJSON', {getters: true, virtuals: true});




DriveTestSchema.statics = {
             
             // Add Intervention
            addTest(user, callback)  {
              return this.create(user, callback);
            },

     
};

module.exports = mongoose.model('DriveTestModel', DriveTestSchema);


