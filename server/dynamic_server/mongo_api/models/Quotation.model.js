const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
const QuotationsSchema = new mongoose.Schema(
  {
    id: {
      type: String,

      default: '0',
    },
    full_name: {
      type: String,
    },

    status: {
      type: String,
      enum: ['Successful', 'Failed', 'Unpaid', 'Paid'],
      default: 'Successful',
    },
    plan_id: {
      type: String,
      default: 'No plan assigned yet',
    },
    quotation_id: {
      type: String,
      default: 'No quotation assigned yet',
    },
    email: {
      type: String,
    },
    amount: {
      type: Number,
    },
    reference: {
      type: String,
    },

    createdDate: {
      type: Date,
      default: new Date(),
    },

    phone_number: {
      type: String,
    },

    userId: {
      type: String,
    },
  },
  {
    collection: 'abiquotes_collections',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

QuotationsSchema.set('toJSON', { getters: true, virtuals: true });

/**
 * Methods
 */
QuotationsSchema.method({});

/**
 * Statics
 */
QuotationsSchema.statics = {
  // Add Intervention
  addToWallet(data, callback) {
    return this.create(data, callback);
  },
};

module.exports = mongoose.model('QuotationsModel', QuotationsSchema);
