import mongoose from  'mongoose';

//const  SetUpInterventionMigrations = () =>{

let FeedbackSchema = new mongoose.Schema({
        id :{
         type: Number,
          
        },
        user_id  : {
          type: String,
         
        },
        username:{
          type:String,
        },
        email:{
          type:String,
        },
        phone_number:{
          type:String,
        },
        category:{
          type:String,

        enum: [
               'General Enquiries', 
               'Technical Support', 
               'Feedback', 
        ], 
        default:'General Enquiries'
          
        },
        
        location  : {
          type: String,
          
        },
        _user: {
           type: mongoose.Schema.Types.ObjectId, 
           ref: 'UserModel' , 
          
         },
        comment : {
          type: String,
          //required: true
        },
        images: {
          type: Array,
          //required: true
        },

        ticket_id:{
          type:String
        },

        subject:{
          type:String
        },

        createdDate:{
          type: String,
        },

        response:{
          type: String,
        },
         assigned_to: {
          type: String,
         },
        // videos : {
        //   type: Array,
        //   required: true
        // },
        status  : String,
        created_at : {
          type: Date,
          default: Date.now
        },
        updated_at :{
          type: Date,
          default: Date.now
        }
        
      },{
        collection: 'intervention_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
      });


    /**
     * Methods
     */
    // InterventionSchema.method({
      

    // });

    /**
     * Statics
     */
    FeedbackSchema.statics = {
        /**
         * Get user
         * @param {ObjectId} id - The objectId of user.
         * @returns {Promise<User, APIError>}
         */
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

      
         //Not In Use but just here for example purposes becouse am using mongoose promise 

        // in order to use this you have to comment the code  mongoose.Promise = Promise; in db.js
        // Get Interventions
        getAllInterventions  (callback, limit)  {
          return this.find(callback).limit(limit);
        },

        // Get Intervention
        getInterventionById  (id, callback)  {
          return this.findOne(id, callback);
        },

        // Add Intervention
        addIntervention  (intervention, callback)  {
          return this.create(intervention, callback);
        },

        // Update Intervention
        updateInterventionLocation  (id, intervention, options, callback) {
          var query = {_id: id};
          var update = {
            location: intervention.location,
          }
          return this.findOneAndUpdate(query, update, options, callback);
        },


        updateInterventionComment (id, intervention, options, callback) {
          var query = {_id: id};
          var update = {
            comment: intervention.comment,
          }
          return this.findOneAndUpdate(query, update, options, callback);
        },


        updateInterventionStatus(id, intervention, options, callback) {
          var query = {_id: id};
          var update = {
            status: intervention.status,
          }
          return this.findOneAndUpdate(query, update, options, callback);
        },

        // Delete Intervention
        removeIntervention (id, callback)  {
          var query = {_id: id};
          return this.remove(query, callback);
        },
    };

    // if(mongoose.models && mongoose.models.InterventionModel){
    //   return mongoose.models.InterventionModel;
    // }else{
    //   return  mongoose.model('InterventionModel', InterventionSchema);
    // }

//}

// const InterventionModel = SetUpInterventionMigrations();
// export default InterventionModel;
 
 

module.exports = mongoose.model('FeedbackModel', FeedbackSchema);





