'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let CarsSchema = new mongoose.Schema({
        id :{
          type: Number,
         
          default: 0
        },
        car_type:{
          type: String,
          required:true
        },
        car_year:{
          type: String,
          required:true
        },
        color:{
          type: String,
          // required: true
        },
        model: {
          type: String,
          // required: true
        },
        model_make_id:{
          type:String,
        },
        license:{
          type:String,
        },
        
        partner_id:{
          type: String
        },
        status:{
          type:String,
          enum:[
           'Booked',
           'Available',
           'UnAvailable',
           'Active'
          ]
        },
        images: {
          type: String,
          // required: true
        },

        description: {
          type:String,
          default: "No description"
        },
        inspection_detail:{
          type:String
        },

        assigned_driver_name: {
          type: String
          
        },

        assigned_driver_email:{
          type:String
        },

        assigned_driver_location:{
          type: String,
        },

        socket_id: {
          type: String
        },
        assigned_driver_phone: {
          type:String
        },

        assigned_driver_id: {
          type: String,
        },



        plate_number : {
          type: String,
          // required: true
        },
        
       isOwnedByCompany: { type: Boolean, default: false },
  
        created_at : {
          type: Date,
          default: Date.now
        },
        updated_at :{
          type: Date,
          default: Date.now
        },
       
      },{
        collection: 'cars_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

CarsSchema.set('toJSON', {getters: true, virtuals: true});

      
      /**
       * Statics
       */
CarsSchema.statics = {
             // Add Intervention
            addCars  (user, callback)  {
              return this.create(user, callback);
            },

            get(id) {
              return this.findOne(id)
                .exec()
                .then((user) => {
                  if (user) {
                    return user;
                  }
                  const err = new Error('No such user exists!');
                  return Promise.reject(err);
                });
            },

            
            listCars({ skip = 0, limit = 50 } = {}) {
              return this.find()
                .sort({ created_at: -1 })
                .skip(+skip)
                .limit(+limit)
                .exec();
            },

           
      }

     

module.exports = mongoose.model('CarsModel', CarsSchema);


