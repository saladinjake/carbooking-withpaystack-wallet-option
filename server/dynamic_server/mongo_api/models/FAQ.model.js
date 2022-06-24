'use strict';
const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
let FAQSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: 0,
    },
    question: {
      type: String,
    },
    answer: {
      type: String,
    },

    status: {
      type: String,
      enum: ['Active', 'Disabled'],
      default: 'Active',
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
    collection: 'faq_collections',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

FAQSchema.set('toJSON', { getters: true, virtuals: true });
FAQSchema.statics = {
  // Add Intervention
  addFaq(faq, callback) {
    return this.create(faq, callback);
  },

  get(id) {
    return this.findOne(id)
      .exec()
      .then(plan => {
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
};

module.exports = mongoose.model('FAQModel', FAQSchema);
