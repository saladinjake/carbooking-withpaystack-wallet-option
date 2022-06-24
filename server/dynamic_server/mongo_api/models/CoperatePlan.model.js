'use strict';
const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
let CoperatePlanSchema = new mongoose.Schema(
  {
    id: {
      type: Number,

      default: 0,
    },

    plan_name: {
      type: String,
      default: 'Coperate',
    },

    car_max: {
      type: String,
      default: 'unlimited',
    },

    status: {
      type: String,
      enum: ['Active', 'Dormant', 'Disabled', 'Suspended'],
      default: 'Active',
    },

    plan_categories: {
      type: String,
      //enum:['Saver', 'Richly', 'Premium','weekend'],
      default: 'Corporate Lite',
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'coperateplan_collections',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

CoperatePlanSchema.set('toJSON', { getters: true, virtuals: true });

CoperatePlanSchema.statics = {
  // Add Intervention
  addCoperatePlan(user, callback) {
    return this.create(user, callback);
  },

  get(id) {
    return this.findOne(id)
      .exec()
      .then(plan => {
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
};

module.exports = mongoose.model('CoperatePlanModel', CoperatePlanSchema);
