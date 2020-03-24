'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let InspectionSchema = new mongoose.Schema({
        id :{
          type: Number,
         
          default: 0
        },

            
            

        car_id: {
          type:String,
        },
        status:{
          type: String,
          enum:[
           'Pending',
           'Completed'
          ]
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
          type: String,
        
        
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
        collection: 'inspection_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

InspectionSchema.set('toJSON', {getters: true, virtuals: true});

 


InspectionSchema.statics = {
             
             // Add Intervention
            addInspection(user, callback)  {
              return this.create(user, callback);
            },

     
};    
     

module.exports = mongoose.model('InspectionModel', InspectionSchema);


