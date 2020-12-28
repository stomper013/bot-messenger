const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messengerSchema = new Schema({
    value: String
});

module.exports = mongoose.model('messenger', messengerSchema);