const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messengerSchema = new Schema({
    id_messenger: String,
    messenger: String,
});

module.exports = mongoose.model('messenger', messengerSchema);