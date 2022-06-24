const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
const chatSchema = new Schema(
  {
    message: {
      type: String,
    },
    sender: {
      type: String,
    },
    receiver: {
      type: String,
    },
  },
  {
    collection: 'chat_collections',
    timestamps: true,
  },
);

let Chat = mongoose.model('theChat', chatSchema);

module.exports = Chat;
