'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let EarningsSchema = new mongoose.Schema({
     
        id :{
          type: Number,
          default: 0
        },
        paymentDate:{type: String},
PaymentStatus:{type: String},
PaymentAmount:{type: String},
paymentReference:{type: String},
partnerId:{type: String},
partnerEmail:{type: String},
partnerBankAccount:{type: String},
vehicleId:{type: String},
vehicleName:{type: String},
vehiclePlateNo:{type: String},
        

      
        created_at : {
          type: Date,
          default: Date.now
        },
        updated_at :{
          type: Date,
          default: Date.now
        },
       
      },{
        collection: 'earnings_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

EarningsSchema.set('toJSON', {getters: true, virtuals: true});
EarningsSchema.statics = {
             // Add Intervention
            addEarnings(faq, callback)  {
              return this.create(faq, callback);
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
 
module.exports = mongoose.model('EarningsModel', EarningsSchema);


