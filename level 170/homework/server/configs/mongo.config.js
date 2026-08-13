const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is missing, create a .env file (see .env.example)!");
        }

        await mongoose.connect(process.env.MONGO_URI);

        console.log("mongoDB connected!");
    } catch (err) {
        // Without a database nothing works, so fail loudly instead of
        // starting a server that answers every request with a 500.
        console.log(`mongoDB connection failed: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;
