import mongoose from 'mongoose';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
// const  SetUpRedFlagsMigrations = () =>{
// import UserSchema from './User.model.js'
let DriversSOSSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    user_id: {
      type: String,
    },

    username: {
      type: String,
    },
    email: {
      type: String,
    },
    phone_number: {
      type: String,
    },

    plate_number: {
      type: String,
    },

    location: {
      type: String,
    },
    _user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel',
    },
    address: {
      type: String,
    },
    media: {
      type: Array,
    },
    status: String,
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
    collection: 'DRVSOSs_collections',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

/**
 * Statics
 */
DriversSOSSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
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

  //Not In Use but just here for example purposes becouse am using mongoose promise

  // in order to use this you have to comment the code  mongoose.Promise = Promise; in db.js
  // Get Interventions
  getAllRedflags(callback, limit) {
    return this.find(callback).limit(limit);
  },

  // Get Intervention
  getRedflagById(id, callback) {
    return this.findOne(id, callback);
  },

  // Add Intervention
  addRedflag(intervention, callback) {
    return this.create(intervention, callback);
  },

  // Update Intervention
  updateRedflagLocation(id, intervention, options, callback) {
    var query = { _id: id };
    var update = {
      location: intervention.location,
    };
    return this.findOneAndUpdate(query, update, options, callback);
  },

  updateRedflagComment(id, intervention, options, callback) {
    var query = { _id: id };
    var update = {
      comment: intervention.comment,
    };
    return this.findOneAndUpdate(query, update, options, callback);
  },

  updateRedflagStatus(id, intervention, options, callback) {
    var query = { _id: id };
    var update = {
      status: intervention.status,
    };
    return this.findOneAndUpdate(query, update, options, callback);
  },

  // Delete Intervention
  removeRedflag(id, callback) {
    var query = { _id: id };
    return this.remove(query, callback);
  },
};

module.exports = mongoose.model('DriversSOSModel', DriversSOSSchema);
