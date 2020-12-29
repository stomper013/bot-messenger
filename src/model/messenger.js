const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messengerSchema = new Schema({
    sender_id: String,
    recipient_id: String,
    timestamp: String,
    message: [String]
});

module.exports = mongoose.model('messenger', messengerSchema);