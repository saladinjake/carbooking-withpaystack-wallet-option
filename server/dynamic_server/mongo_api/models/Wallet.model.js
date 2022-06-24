const Promise = require('bluebird');
import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
const WalletSchema = new mongoose.Schema(
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
      enum: ['Successful', 'Failed'],
      default: 'Successful',
    },

    email: {
      type: String,
    },
    amount: {
      type: Number,
    },
    phone_number: {
      type: String,
    },
    reference: {
      type: String,
    },

    old_balance: {
      type: String,
    },

    createdDate: {
      type: Date,
      default: new Date(),
    },

    userId: {
      type: String,
    },
    plan_id: {
      type: String,
      default: 'Not Set',
    },

    quotation_id: {
      type: String,
      default: 'Not Set',
    },
  },
  {
    collection: 'wallet_collections',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

WalletSchema.set('toJSON', { getters: true, virtuals: true });

/**
 * Methods
 */
WalletSchema.method({});

/**
 * Statics
 */
WalletSchema.statics = {
  // Add Intervention
  addToWallet(data, callback) {
    return this.create(data, callback);
  },
};

module.exports = mongoose.model('Donor', WalletSchema);
