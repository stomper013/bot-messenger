const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messengerSchema = new Schema({
    id_messages: String,
    sender_id: String,
    recipient_id: String,
    timestamp: String,
    message: {text: String},
});

module.exports = mongoose.model('messenger', messengerSchema);