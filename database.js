const mongoose = require('mongoose');

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URL, dbOptions);
        console.log('>>> Database connected');        
    } catch (error) {
        console.log('Error');        
    }
}

module.exports = mongoose