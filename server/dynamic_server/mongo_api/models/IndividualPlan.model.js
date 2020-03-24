'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let IndividualPlanSchema = new mongoose.Schema({
        id :{
          type: Number,
         
          default: 0
        },

        car_max:{
          type:Number,
          default:3

        },

        status:{
        type:String,
        enum:[
         "Active",
         "Dormant",
         "Disabled",
         "Suspended"
        ],
        default: "Active"
      },

        plan_name:{
          type: String,
          default:'Individual'
        },

        plan_categories:{
          type: String,
          //enum:['Saver', 'Richly', 'Premium'],
          default: 'Saver'
        },

        
        description:{
          type: String,
          required:true
        },


        price:{
          type: String,
          required:true
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
        collection: 'individualplan_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

IndividualPlanSchema.set('toJSON', {getters: true, virtuals: true});

     
     IndividualPlanSchema.statics = {
             // Add Intervention
            addIndividualPlan(user, callback)  {
              return this.create(user, callback);
            },

            get(id) {
              return this.findOne(id)
                .exec()
                .then((plan) => {
                  if (plan) {
                    return plan;
                  }
                  const err = new Error('No such plan exists!');
                  return Promise.reject(err);
                });
            },

            
            listPlan({ skip = 0, limit = 50 } = {}) {
              return this.find()
                .sort({ created_at: -1 })
                .skip(+skip)
                .limit(+limit)
                .exec();
            },

       
      }


module.exports = mongoose.model('IndividualPlanModel', IndividualPlanSchema);


