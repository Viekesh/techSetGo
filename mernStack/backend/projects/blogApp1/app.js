import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./database/db.js";
import userRouter from "./routes/userRoutes.js";



const app = express();

dotenv.config();

app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port no. ${process.env.PORT}`);
});

connection();

app.use("/api/user", userRouter);