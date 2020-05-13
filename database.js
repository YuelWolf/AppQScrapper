const mongoose = require('mongoose');

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const URI = process.env.MONGO_URL;

mongoose.connect(URI, dbOptions)
  .then(db => console.log('DB is conected'))
  .catch(err => console.log(err))

module.exports = mongoose
