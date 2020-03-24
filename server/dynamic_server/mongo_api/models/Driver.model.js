'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

//const  SetUpUserMigrations = () =>{
      /**
       * User Schema
       */
let DriverSchema = new mongoose.Schema({
      id :{
          type: Number, 
          default: 0
      },
      firstname: {
          type: String,
          
      },
      lastname : {
          type: String,
          
      },
      identity_card:{
        type: String,
        
      },
      test_certificate:{
        type: String,
        
      },

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

   

      roles: { 
        type: String , 
       
        default:'driver'
            
      },



      isVerified: { 
          type: Boolean, 
    
           default: false 
      },
      is_active: {
          type:String, 
          default: true
      },
      avatar:{
        type: String
      },

      car_assigned_name: {
        type: Array,
      },

      assigned_car_plate_number:{
       type:String
      },

      assigned_driver_location:{
          type: String,
        },

      geometry: {
          coordinates: { type: [Number], index: '2dsphere'}
      },

      location: {
       type: { type: String },
       coordinates: []
      },

        socket_id: {
          type: String
        },
  
      passwordResetToken: { type: String},
      passwordResetExpires: { type: Date },
        // othernames : {
        //   type: String,
        //   required: true
        // },
        username : {
          type: String,
          
        },
        email : {
          type: String,
        
        },
        password :{
          type: String,
    
        },
        phone_number : {
          type: String,
        
          //match: [/^[1-9][0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.']
        },
        is_admin: Boolean,
        created_at : {
          type: Date,
          default: Date.now
        },
        updated_at :{
          type: Date,
          default: Date.now
        },
        
        googleProvider: {
            type: {
                id: String,
                token: String
            },
            select: false
        },

         facebookProvider: {
            type: {
                id: String,
                token: String
            },
            select: false
        }

      },{
        collection: 'driver_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

DriverSchema.set('toJSON', {getters: true, virtuals: true});

DriverSchema.index({ location: "2dsphere" });     
      /**
       * Methods
       */
      DriverSchema.method({
      });

      /**
       * Statics
       */
      DriverSchema.statics = {
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

     

module.exports = mongoose.model('DriverModel', DriverSchema);


