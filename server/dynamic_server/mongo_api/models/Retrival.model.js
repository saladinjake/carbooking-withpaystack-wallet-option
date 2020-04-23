const mongoose = require("mongoose");

const RetrievalSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending"
  },
  retrievalDate: {
    type: Date,
    required: true
  },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "partner_collections",
    required: true
  },
  partnerID: {
    type: String
  },
  partnerEmail: {
    type: String,
    required: true
  },
  partnerName: {
    type: String,
    required: true
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cars_collections",
    required: true
  },
  vehicleID: {
    type: String
  },
  vehicleName: {
    type: String,
    required: true
  },
  vehiclePlateNo: {
    type: String,
    required: true
  },
  retrievalComments: {
    type: String
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  
},

{
  collection: 'retrieval_collections',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
      });




module.exports = mongoose.model('Retrieval', RetrievalSchema);