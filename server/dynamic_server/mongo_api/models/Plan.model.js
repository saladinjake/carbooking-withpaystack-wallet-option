'use strict';
const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
let PlanSchema = new mongoose.Schema(
  {
    id: {
      type: Number,

      default: 0,
    },
    category: {
      type: String,
    },

    description: {
      type: String,
    },

    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'plan_collections',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

PlanSchema.set('toJSON', { getters: true, virtuals: true });

/**
 * Statics
 */
PlanSchema.statics = {
  // Add Intervention
  addPlanCategory(user, callback) {
    return this.create(user, callback);
  },

  get(id) {
    return this.findOne(id)
      .exec()
      .then(user => {
        if (user) {
          return user;
        }
        const err = new Error('No such plan category exists!');
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

module.exports = mongoose.model('PlanModel', PlanSchema);
