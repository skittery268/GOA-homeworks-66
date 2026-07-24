import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);

        console.log("MongoDb Connected!");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;