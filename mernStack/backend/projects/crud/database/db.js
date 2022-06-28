import mongoose from "mongoose";
import dotenv from "dotenv";



dotenv.config();

const databaseUrl = process.env.MONGO_DB

const connection = async () => {

    try {
        await mongoose.connect(databaseUrl, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log(`server is connected to database`);
    } catch (error) {
        console.log("Error while connecting with the database", error.message);
    };
};

export default connection;