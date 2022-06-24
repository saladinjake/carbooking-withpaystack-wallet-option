const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
const QuoteSchema = new mongoose.Schema(
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
      default: 'Unpaid',
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
    has_updated: {
      type: String,
      default: 'No',
    },
    reference: {
      type: String,
    },
    createdDateOfQuotation: {
      type: Date,
    },

    createdDate: {
      type: Date,
      default: new Date(),
    },

    userId: {
      type: String,
    },
  },
  {
    collection: 'pay_collections',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

QuoteSchema.set('toJSON', { getters: true, virtuals: true });

/**
 * Methods
 */
QuoteSchema.method({});

/**
 * Statics
 */
QuoteSchema.statics = {
  // Add Intervention
  addToWallet(data, callback) {
    return this.create(data, callback);
  },
};

module.exports = mongoose.model('QuoteModel', QuoteSchema);
