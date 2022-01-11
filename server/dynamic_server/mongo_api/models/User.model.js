'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const APIError = require('../utils/APIError');
const autoIncrement = require('../services/mongooseAutoIncrement');
const { env, jwtSecret, jwtExpirationInterval, masterAccount, masterAccountPassword } = require('../config/vars');
const uuidv4 = require('uuid/v4');
import db from './db';

autoIncrement.initialize(db.getInstance().getEstablishedConnection());

/**
* Customer Roles
*/
const roles = ['user', 'admin'];

//const  SetUpUserMigrations = () =>{
      /**
       * User Schema
       */
let UserSchema = new mongoose.Schema({
      id :{
          type: Number, 
          default: 0
      },
      firstname: {
          type: String,
          
      },
      fb_id:{
        type:String
      },
      google_id:{
        type:String,
      },
      ratings_average:{
        type:String,
        default:0
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
      user_type: {
        type: String,
        // enum:[
        // 'Individual', 
        // 'Corporate',
        

        // ],
        default: 'Individual'
      },
      plan_name:{
        type:String,
        default: "commute saver"
      },
      lastname : {
        type: String,
        
      },
      roles: { 
        type: String , 
        // enum: [
        //        'user', 
        //        'simple_admin', 
        //        'super_admin',
        //        'Simple Admin',
        //        'Moderator Admin',
        //        'Super Admin', 
        // ], 
        default:'user'
            
      },

      for_users: {
        type:Boolean,
        default:true,
      },

      usergroup_set:{
        type:Array,
        default:[
        'Simple Admin', 
          'Moderator Admin',
          'Super Admin', 
          'Inspection Manager',
          'Partners Manager',
          'Hr',
          'Accountant',
        ]
      },
      test_certificate:{
        type: String,
        default:"NO-CERTIFICATE-ISSUED"
      
      },

      test_center:{
        type: String,
        default:"NO-CERTER-YET"
        
      
      },

      test_center_address:{
        type:String,
        default:"NO-TESTCENTER-ADDRESS-YET"
    
      
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
        type: String,
        default:""
      },
      notification_count: {
        type:Number,
        default:0
      },
      balance: {
        type: String,
        default: '0.00'
      },
      old_balance:{
        type:String,
        default:'0.00'
      },

      // previledges_rules: {
      //   type: Array,
      // },


      view_payments:{
         type: String,
        default: 'yes',
       }, 
        view_transactions:{
         type: String,
             //default:'yes',
        },
        // view_payments:{
        //  type: String,
        //       //default:'yes',
        //  },
        view_quotations:{
         type: String,
              //default:'yes',
         },
        view_cars:{
         type: String,
              //default:'yes',
         },
        view_drivers:{
         type: String,
              //default:'yes',
         },
        view_partners:{
         type: String,
         //default:'yes',
         },
        view_sos:{
         type: String,
              //default:'yes',
         },
        view_package:{
         type: String,
             //default:'yes',
        },
        view_bookings:{
         type: String,
             //default:'yes',
      },


      view_tickets:{
         type: String,
             //default:'yes',
      },

      view_faqs:{
         type: String,
             //default:'yes',
      },

      view_settings:{
         type: String,
             //default:'yes',
      },

      view_users:{
         type: String,
             //default:'yes',
      },

      view_admins:{
         type: String,
             //default:'yes',
      },

       view_car_inspection:{
         type: String,
            // default:'yes',
      },
      view_drive_test:{
         type: String,
             //default:'yes',

      },






      manage_payments:{
         type: String,
        default: 'yes',
       }, 
        manage_transactions:{
         type: String,
             //default:'yes',
        },
        manage_quotations:{
         type: String,
              //default:'yes',
         },
        manage_cars:{
         type: String,
              //default:'yes',
         },
        manage_drivers:{
         type: String,
              //default:'yes',
         },
        manage_partners:{
         type: String,
         //default:'yes',
         },
        manage_sos:{
         type: String,
              //default:'yes',
         },
        manage_package:{
         type: String,
             //default:'yes',
        },
        manage_bookings:{
         type: String,
             //default:'yes',
      },


      manage_tickets:{
         type: String,
             //default:'yes',
      },

      manage_faqs:{
         type: String,
             //default:'yes',
      },

      manage_settings:{
         type: String,
             //default:'yes',
      },

      manage_users:{
         type: String,
             //default:'yes',
      },

      manage_admins:{
         type: String,
             //default:'yes',
      },

      manage_car_inspection:{
         type: String,
             //default:'yes',
      },
      manage_drive_test:{
         type: String,
             //default:'yes',

      },

      passwordResetToken: { type: String},
      passwordResetExpires: { type: Date },
       
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
        is_admin:{ 
          type:Boolean,
          default:false
        },
        created_at : {
          type: Date,
          default: Date.now
        },
        updated_at :{
          type: Date,
          default: Date.now
        },
        
        facebook: {
          id: String,
          token: String,
          email: String,
          name: String
        },
        google: {
            id: String,
            token: String,
            email: String,
            name: String
        },

        amount: {
        type: Number, 
       
    },
    reference: {
        type: String, 
        
    },

    //if user is a driver

    identity_card:{
        type: String,
        
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


  

      },{
        collection: 'users_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

UserSchema.set('toJSON', {getters: true, virtuals: true});

      
      /**
       * Methods
       */
      UserSchema.method({
        
          transform() {
            const transformed = {};
            const fields = ['id', 'accountNumber', 'name', 'email', 'role', 'created_at'];

            fields.forEach((field) => {
              transformed[field] = this[field];
            });

            return transformed;
          },
      });

      /**
       * Statics
       */
      UserSchema.statics = {
              transformBalance(user) {
            
              

               return user.balance;
             },
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

    async getId(id) {
    try {
      let customer;

      if (mongoose.Types.ObjectId.isValid(id)) {
        customer = await this.findById(id).exec();
      }
      if (customer) {
        return customer;
      }

      throw new APIError({
        message: 'Customer does not exist',
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get Master Account
   *
   * @returns {Promise<Customer>}
   */
  async getMasterAccount() {
    const masterAccountData = {
      accountNumber: masterAccount,
      role: 'admin',
      name: 'Master Account',
      email: 'master_account@bank.com',
      password: masterAccountPassword,
    };
    try {
      let customer = await this.findOne({ 'accountNumber': masterAccountData.accountNumber }).exec();
      
      if (customer) {
        return customer;
      }else{
        return await this.create(masterAccountData);
      }      
    } catch (error) {
      throw error;
    }
  },

  /**
   * Find customer by email and tries to generate a JWT token
   *
   * @param {ObjectId} id - The objectId of customer.
   * @returns {Promise<Customer, APIError>}
   */
  async findAndGenerateToken(options) {
    const { email, password, refreshObject } = options;
    if (!email) throw new APIError({ message: 'An email is required to generate a token' });

    const customer = await this.findOne({ email }).exec();
    const err = {
      status: httpStatus.UNAUTHORIZED,
      isPublic: true,
    };
    if (password) {
      if (customer && await customer.passwordMatches(password)) {
        return { customer, accessToken: customer.token() };
      }
      err.message = 'Incorrect email or password';
    } else if (refreshObject && refreshObject.customerEmail === email) {
      return { customer, accessToken: customer.token() };
    } else {
      err.message = 'Incorrect email or refreshToken';
    }
    throw new APIError(err);
  },

  /**
   * List customers in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of customers to be skipped.
   * @param {number} limit - Limit number of customers to be returned.
   * @returns {Promise<Customer[]>}
   */
  list({
    page = 1, perPage = 30, name, email, role,
  }) {
    const options = omitBy({ name, email, role }, isNil);

    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },

  /**
   * Return new validation error
   * if error is a mongoose duplicate key error
   *
   * @param {Error} error
   * @returns {Error|APIError}
   */
  checkDuplicateEmail(error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      return new APIError({
        message: 'Validation Error',
        errors: [{
          field: 'email',
          location: 'body',
          messages: ['"email" already exists'],
        }],
        status: httpStatus.CONFLICT,
        isPublic: true,
        stack: error.stack,
      });
    }
    return error;
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

UserSchema.plugin(autoIncrement.plugin, {
  model: 'UserModel',
  field: 'accountNumber',
  startAt: 1001,
  incrementBy: 1
});     

module.exports = mongoose.model('UserModel', UserSchema);





