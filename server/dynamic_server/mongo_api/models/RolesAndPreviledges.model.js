'use strict';
const Promise = require('bluebird');
import mongoose from  'mongoose';

let RolesAndPreviledgesSchema = new mongoose.Schema({
        id :{
          type: Number,
         
          default: 0
        },

        for_admins:{
          type:Boolean,
          default:true

        },

        
         previledges_info:{
           type:String,
         
        
         },

         previledges_description:{
          type:String
         },

         status:{
          type: String,
          enum:[
            "Active",
         "Dormant",
         "Disabled",
         "Suspended" 
          ],
          default: 'Active',
         },


         view_payments:{
         type: String,
        default: 'yes',
       }, 
        view_transactions:{
         type: String,
             default:'yes',
        },
        view_payments:{
         type: String,
              default:'yes',
         },
        view_quotations:{
         type: String,
              default:'yes',
         },
        view_cars:{
         type: String,
              default:'yes',
         },
        view_drivers:{
         type: String,
          default:'yes',
         },
        view_partners:{
         type: String,
         default:'yes',
         },
        view_sos:{
         type: String,
              default:'yes',
         },
        view_package:{
         type: String,
             default:'yes',
        },
        view_bookings:{
         type: String,
             default:'yes',
      },

      view_tickets:{
         type: String,
             default:'yes',
      },

      view_faqs:{
         type: String,
             default:'yes',
      },

      view_settings:{
         type: String,
             default:'yes',
      },

      view_users:{
         type: String,
             default:'yes',
      },

      view_admins:{
         type: String,
             default:'yes',
      },






      manage_payments:{
         type: String,
        default: 'yes',
       }, 
        manage_transactions:{
         type: String,
             default:'yes',
        },
        manage_quotations:{
         type: String,
              default:'yes',
         },
        manage_cars:{
         type: String,
              default:'yes',
         },
        manage_drivers:{
         type: String,
              default:'yes',
         },
        manage_partners:{
         type: String,
         default:'yes',
         },
        manage_sos:{
         type: String,
              default:'yes',
         },
        manage_package:{
         type: String,
             default:'yes',
        },
        manage_bookings:{
         type: String,
             default:'yes',
      },


      manage_tickets:{
         type: String,
             default:'yes',
      },

      manage_faqs:{
         type: String,
             default:'yes',
      },

      manage_settings:{
         type: String,
             default:'yes',
      },

      manage_users:{
         type: String,
             default:'yes',
      },

      manage_admins:{
         type: String,
             default:'yes',
      },
        
        
        
        created_at : {
          type: Date,
          default: Date.now
        },
        updated_at :{
          type: Date,
          default: Date.now
        },

        usergroup_set:{
        type:Array,
        default:[
        'user', 
          'simple_admin', 
          'super_admin',
           'Simple Admin',
          'Moderator Admin',
          'Super Admin', 
          'Inspection Manager',
          'Partners Manager',
          'Hr',
          'Accountant',
        ]
      },


        
        
       
      },{
        collection: 'admin_rolesmn_previledges_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

RolesAndPreviledgesSchema.set('toJSON', {getters: true, virtuals: true});

     

RolesAndPreviledgesSchema.statics = {
             
             // Add Intervention
  addRole(user, callback)  {
    return this.create(user, callback);
  },

     
};
module.exports = mongoose.model('RolesAndPreviledgesModel', RolesAndPreviledgesSchema);


