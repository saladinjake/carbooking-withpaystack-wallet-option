'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

//Partner has many cars
      /**
       * Partner Schema
       */



let PartnerSchema = new mongoose.Schema({

  businessName: {
        type: String,
       
    },
    firstName: {
        type: String,
       
    },
    lastName: {
      type: String,
      
  },
  address:{
    type:String
  },
  bankAccount:{type : String},
  bankAccountName:{type: String},
  bankAccountNumber: { type: String},
  status:{
        type:String,
        enum:[
         "Active",
         "Dormant",
         "Disabled",
         "Suspended"
        ],
        default: "Active"
      },
    email: {
        type: String,
       
    },
    password: {
        type: String,
        
        
    },
    phoneNumber: {
        type: String,
  
        
    },
    phone:{
      type: String
    },
    passwordResetToken: { type: String},
    passwordResetExpires: { type: Date },
    avatar:{
      type: String
    },
    totalCars:{
      type:Number,
      default:0
    },

    userName:{
      type:String
    },

    roles:{
      type:String,
      enum:[
         "Individual Partner",
         "Organizational Partner",
        
        ],
        default: "Individual Partner"
    },
    isVerified: {
      type:Boolean,
      default:false
    }

    



},
{
  collection: 'partner_collections',
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

PartnerSchema.set('toJSON', {getters: true, virtuals: true});

      
      /**
       * Methods
       */
      PartnerSchema.method({
      });

      /**
       * Statics
       */
      PartnerSchema.statics = {
             // Add Intervention
            addUser  (user, callback)  {
              return this.create(user, callback);
            },

            get(id) {
              return this.findOne(id)
                .exec()
                .then((user) => {
                  if (user) {
                    return user;
                  }
                  const err = new Error('No such user exists!');
                  return Promise.reject(err);
                });
            },

            
            listUsers({ skip = 0, limit = 50 } = {}) {
              return this.find()
                .sort({ created_at: -1 })
                .skip(+skip)
                .limit(+limit)
                .exec();
            },

            
        upsertFbUser(accessToken, refreshToken, profile, cb) {
            var that = this;
            return this.findOne({
                'facebookProvider.id': profile.id
            }, function(err, user) {
                // no user was found, lets create a new one
                if (!user) {
                    var newUser = new that({
                        fullName: profile.displayName,
                        email: profile.emails[0].value,
                        facebookProvider: {
                            id: profile.id,
                            token: accessToken
                        }
                    });

                    newUser.save(function(error, savedUser) {
                        if (error) {
                            console.log(error);
                        }
                        return cb(error, savedUser);
                    });
                } else {
                    return cb(err, user);
                }
            });
        },

        upsertGoogleUser(accessToken, refreshToken, profile, cb) {
            var that = this;
            return this.findOne({
                'googleProvider.id': profile.id
            }, function(err, user) {
                // no user was found, lets create a new one
                if (!user) {
                    var newUser = new that({
                        fullName: profile.displayName,
                        email: profile.emails[0].value,
                        googleProvider: {
                            id: profile.id,
                            token: accessToken
                        }
                    });

                    newUser.save(function(error, savedUser) {
                        if (error) {
                            console.log(error);
                        }
                        return cb(error, savedUser);
                    });
                } else {
                    return cb(err, user);
                }
            });
        },
      }

     

module.exports = mongoose.model('PartnerModel', PartnerSchema);


