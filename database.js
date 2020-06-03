const mongoose = require('mongoose');

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};


const URI = "mongodb+srv://user:passwordappq@cluster0-4xkde.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URI, dbOptions)
  .then(db => console.log('DB is conected'))
  .catch(err => console.log(err))

module.exports = mongoose
