'use strict';
const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/

let MechSchema = new mongoose.Schema(
  {
    id: {
      type: Number,

      default: 0,
    },
    user_id: {
      type: String,
    },
    location: {
      type: String,
    },
    address: {
      type: String,
    },
    status: {
      type: String,
      // enum: ['Pending','O' 'Resolved','Denied',"Completed"],
      default: 'Pending',
    },
    email: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    carbrand: {
      type: String,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
    },
  },
  {
    collection: 'mech_collections',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

MechSchema.set('toJSON', { getters: true, virtuals: true });

/**
 * Statics
 */
MechSchema.statics = {
  // Add Intervention
  addMech(user, callback) {
    return this.create(user, callback);
  },

  get(id) {
    return this.findOne(id)
      .exec()
      .then(user => {
        if (user) {
          return user;
        }
        const err = new Error('No such mech request category exists!');
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

module.exports = mongoose.model('MechModel', MechSchema);
