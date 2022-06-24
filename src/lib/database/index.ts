import mongoose from "mongoose";

const mongoURL = process.env.MONGO_URL;

export default function connectToMongoDB(): void {
    try {
        if (mongoURL) {
            mongoose.connect(mongoURL, () => console.log("Connect to mongoDB"))
        }
    } catch (e) {
        console.log("Failed connect to mongoDB");
        console.log(`Error: ${e}`);
    }
}