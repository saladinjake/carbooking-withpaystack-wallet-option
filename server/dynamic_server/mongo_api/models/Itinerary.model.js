'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let ItinerarySchema = new mongoose.Schema({
     
        id :{
          type: Number,
          default: 0
        },

        plan_id: {
          type: String
        },
        
        plan_category:{
          type: String
        },

        status:{
          type:String,
          default: "Pending"
        },
        certificate_id: {
          type:String,
          default: "No date"
          
        },
        certificate_date:{
          type:Date
        },
        user_id:{
          type: String,
        
        },

         assigned_driver_id:{
          type:String,
         }, 

         assigned_driver_name:{
          type:String,
         }, 

         assigned_driver_email: {
          type:String,
         }, 
         assigned_driver_phone: {
          type:String,
         },
        user_plan_id: {
           type: String,
        
        },
        start_location:{
          type: String
         },
        destination:{
          type: String
         },
        start_time:{
          type: Date
         },

         pickup_time:{
          type:String
         },
        end_time:{
          type: String
         },
        drive_option:{
          type: String,
          default: 'Driver Required'
         },
        travel_option:{
          type:String,
          default: 'intracity'
        },
        no_hours:{
          type: String
        },
         drivingschool:{
          type: String
         },
        _user: {
           type: mongoose.Schema.Types.ObjectId, 
           ref: 'UserModel' , 
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
         has_received_quote:{
          type: String,
          default:'No',
         },
         has_received_payments:{
          type:String,
          default:'No',
         },

         // status: {
         //  type:String,
         //  enum:["unpaid","pending","paid"],
         //  default: "unprocessed"
         // },

         createdAt: {type: String, default: Date.now},
        origin: {type: String, required: true},
        startDate: Date,
        endDate: Date,
        originGeoCode: {
          lat: Number,
          lng: Number
        },
        destination: {type: String, required: true},
        destinationGeoCode: {
          lat: Number,
          lng: Number
        },
        instruction: {type: String, required: true},
        status: {type:String, default:'pending'},
        vehicle: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Vehicle'
        },
        driver: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        trackingGeoCode:[{
          lat: Number,
          lng: Number
        }],

      
        created_at : {
          type: Date,
          default: Date.now
        },
        updated_at :{
          type: Date,
          default: Date.now
        },
       
      },{
        collection: 'useritinerary_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

ItinerarySchema.set('toJSON', {getters: true, virtuals: true});

ItinerarySchema.statics = {
             // Add Intervention
            addItinerary(user, callback)  {
              return this.create(user, callback);
            },

            get(id) {
              return this.findOne(id)
                .exec()
                .then((plan) => {
                  if (plan) {
                    return plan;
                  }
                  const err = new Error('No such itinerary exists!');
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
 
module.exports = mongoose.model('ItineraryModel', ItinerarySchema);


