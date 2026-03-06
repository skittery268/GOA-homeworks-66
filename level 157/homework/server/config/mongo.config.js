const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conection = await mongoose.connect('mongodb://localhost:27017/socialbook');
        console.log('MongoDB is connected!');
    } catch(err) {
        console.log(err);
    }
};

module.exports = connectDB;