'use strict';
const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
let DriversNotificationsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,

      default: 0,
    },
    user_id: {
      type: String,
    },
    // message:{
    //   type: String,

    // },
    type: {
      type: String,
      enum: ['success', 'failure', 'pending', 'error', 'information', 'payment'],
      default: 'information',
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
    collection: 'drvnotifcation_collections',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

DriversNotificationsSchema.set('toJSON', { getters: true, virtuals: true });

/**
 * Statics
 */
DriversNotificationsSchema.statics = {
  // Add Intervention
  addDriversNotifications(user, callback) {
    return this.create(user, callback);
  },

  get(id) {
    return this.findOne(id)
      .exec()
      .then(user => {
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
};

module.exports = mongoose.model('DriversNotificationsModel', DriversNotificationsSchema);
