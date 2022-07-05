import mongoose from "mongoose";
import dotenv from "dotenv";



dotenv.config();

const dbUrl = process.env.MONGO_DB;

const connection = async () => {

    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Server is connected to database");
    } catch (error) {
        console.log("Error while connecting to the database", error.message);
    }
}

export default connection;