const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messengerSchema = new Schema({
    id_sender: String,
});

module.exports = mongoose.model('messenger', messengerSchema);