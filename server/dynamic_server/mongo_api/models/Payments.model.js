const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
const PaymentsSchema = new mongoose.Schema(
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
      enum: ['Successful', 'Failed', 'Unpaid'],
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
    phone_number: {
      type: String,
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
    //timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  },
);

PaymentsSchema.set('toJSON', { getters: true, virtuals: true });

/**
 * Methods
 */
PaymentsSchema.method({});

/**
 * Statics
 */
PaymentsSchema.statics = {
  // Add Intervention
  addToWallet(data, callback) {
    return this.create(data, callback);
  },
};

module.exports = mongoose.model('PaymentModel', PaymentsSchema);
