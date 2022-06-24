'use strict';
const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
let GeoLocationSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: 0,
    },
    assigned_car_id: {
      type: Number,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },

    assigned_driver_id: {
      type: Number,
    },
    _drivers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DriverModel',
    },
    _cars: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PlanModel',
    },
    _users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel',
    },
    _mapLocation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'GeoLocationModel',
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
    collection: 'geolocation_collections',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

GeoLocationSchema.set('toJSON', { getters: true, virtuals: true });

module.exports = mongoose.model('GeoLocationModel', GeoLocationSchema);
