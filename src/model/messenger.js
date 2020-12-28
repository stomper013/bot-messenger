const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MONGO_URI =
  "mongodb+srv://admin:admin@cluster0.uadkt.mongodb.net/FB?retryWrites=true&w=majority";
const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

const messengerSchema = new Schema({
    value: String
});

module.exports = mongoose.model('messenger', messengerSchema);