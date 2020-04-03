'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let UserPlanSchema = new mongoose.Schema({
        id :{
          type: Number,
          default: 0
        },
        plan_id:{
          type: String,
      
        },

        status: {
          type:String,
          enum:[
           'Unpaid',
           'Paid',
           'Failed',
           'Ongoing',
           'Pending',
           'Completed'
          ],
          default: 'Unpaid',
        },


        payment_status:{
          type:String,
          default:'Unpaid'
        },
        user_id:{
          type: String,
          
        },
        plan_name: {
          type: String,
      
        },
        price:{
          type:String,
          default:'Awaiting  cost estimate',
        },
      

        plan_category_name: {
          type: String,
          
        },

        duration:{
          type:String
        },

        individual_id:{
          type: Number,
        },
        coperate_id:{
          type: Number,
        },
        itineries:{
          type:Array,
          default:[]
        },
        
        cars_on_plan:{
          type:Array,
      
        },
        username:{
          type:String
         },

         email:{
          type:String
         },
         phone_number: {
          type:String
         },
         has_updated: {
          type: String,
          enum:[
           'Yes',
           'No'
          ],
          default: 'No'
         },

         createdDateOfQuotation:{
          type: Date,
         },
        // _car:{
        //    type: mongoose.Schema.Types.ObjectId, 
        //    ref: 'CarModel' , 
        // },

        // _plan:{
        //    type: mongoose.Schema.Types.ObjectId, 
        //    ref: 'PlanModel' , 
        // },

        // _user: {
        //    type: mongoose.Schema.Types.ObjectId, 
        //    ref: 'UserModel' , 
          
        //  },

        //  _individual: {
        //    type: mongoose.Schema.Types.ObjectId, 
        //    ref: 'IndividualPlanModel' , 
          
        //  },

        //  _coperate: {
        //    type: mongoose.Schema.Types.ObjectId, 
        //    ref: 'CoperatePlanModel' , 
          
        //  },
        no_hours:{
         type:String
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
        collection: 'userplans_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

UserPlanSchema.set('toJSON', {getters: true, virtuals: true});



UserPlanSchema.statics = {
             // Add Intervention
            addPlanToUser  (user, callback)  {
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
     

module.exports = mongoose.model('UserPlanModel', UserPlanSchema);


